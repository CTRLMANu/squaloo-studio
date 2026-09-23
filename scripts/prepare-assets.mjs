// Builds the site's rasters from assets/source.
//
// Portrait: Manuel's photo, cut out with the matte from scripts/portrait-matte.swift
// (macOS Vision subject lift), then screened into a 45° halftone printed in one ink.
// Output is black ink on transparency so the page's own paper colour shows through.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'assets/source';
// Frontispiece crop: trim the wall above the head, then narrow to a tall 0.70 frame.
const TOP = 0.14;
const ASPECT = 0.7;
function frame(width, height) {
  const top = Math.round(height * TOP);
  const h = height - top;
  const w = Math.min(width, Math.round(h * ASPECT));
  return { left: Math.round((width - w) / 2), top, width: w, height: h };
}
const OUT = 'public/img';
await mkdir(OUT, { recursive: true });

async function halftone({ width, cell, out }) {
  const SS = 3; // supersample, then downscale for clean dot edges
  const meta = await sharp(`${SRC}/portrait.png`).metadata();
  const height = Math.round((width * meta.height) / meta.width);
  const W = width * SS;
  const H = height * SS;

  const lum = await sharp(`${SRC}/portrait.png`)
    .resize(W, H)
    .grayscale()
    .clahe({ width: 48 * SS, height: 48 * SS, maxSlope: 3 })
    .raw()
    .toBuffer();
  const mask = await sharp(`${SRC}/portrait-mask.png`).resize(W, H).grayscale().raw().toBuffer();

  // tonal range of the subject only (the wall is masked out)
  const tones = [];
  for (let i = 0; i < W * H; i += 7) if (mask[i] > 200) tones.push(lum[i]);
  tones.sort((p, q) => p - q);
  const lo = tones[Math.floor(tones.length * 0.04)] / 255;
  const hi = tones[Math.floor(tones.length * 0.985)] / 255;

  const ink = new Uint8ClampedArray(W * H);
  const c = cell * SS;
  const a = Math.PI / 4;
  const cos = Math.cos(a);
  const sin = Math.sin(a);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      const m = mask[i] / 255;
      if (m < 0.02) continue;
      // rotate into screen space, find this pixel's cell centre
      const u = x * cos + y * sin;
      const v = -x * sin + y * cos;
      const cu = (Math.floor(u / c) + 0.5) * c;
      const cv = (Math.floor(v / c) + 0.5) * c;
      // sample tone at the cell centre (back in image space)
      const sx = Math.min(W - 1, Math.max(0, Math.round(cu * cos - cv * sin)));
      const sy = Math.min(H - 1, Math.max(0, Math.round(cu * sin + cv * cos)));
      const t = Math.min(1, Math.max(0, (lum[sy * W + sx] / 255 - lo) / (hi - lo)));
      const tm = mask[sy * W + sx] / 255;
      // tone curve: open the midtones so the face reads, let only true shadows close up
      const dark = Math.pow(1 - t, 1.7) * tm;
      const r = (c / 2) * Math.sqrt(dark) * 1.22;
      const d = Math.hypot(u - cu, v - cv);
      if (d <= r) ink[i] = Math.round(255 * m);
    }
  }

  // one ink: black, alpha = coverage
  const rgba = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    rgba[i * 4 + 0] = 0x16;
    rgba[i * 4 + 1] = 0x14;
    rgba[i * 4 + 2] = 0x0f;
    rgba[i * 4 + 3] = ink[i];
  }
  // drop the empty wall above the head
  const box = frame(width, height);
  const scaled = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .resize(width, height, { kernel: 'lanczos3' })
    .png()
    .toBuffer();
  await sharp(scaled)
    .extract(box)
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(`${OUT}/${out}`);
  console.log(`${out}: ${box.width}x${box.height}, cell ${cell}px`);
}

// Fallback raster for visitors without JavaScript.
await halftone({ width: 760, cell: 7, out: 'portrait-halftone.webp' });

// Tone map for the live halftone (src/scripts/halftone.ts): one grey value per sample,
// 0 = no ink, 255 = full ink, with the same curve and crop as the raster above.
async function toneMap({ width, out }) {
  const meta = await sharp(`${SRC}/portrait.png`).metadata();
  const height = Math.round((width * meta.height) / meta.width);
  const lum = await sharp(`${SRC}/portrait.png`)
    .resize(width, height)
    .grayscale()
    .median(3)
    .clahe({ width: 40, height: 40, maxSlope: 2 })
    .blur(0.7)
    .raw()
    .toBuffer();
  const mask = await sharp(`${SRC}/portrait-mask.png`).resize(width, height).grayscale().raw().toBuffer();
  const tones = [];
  for (let i = 0; i < width * height; i++) if (mask[i] > 200) tones.push(lum[i]);
  tones.sort((p, q) => p - q);
  const lo = tones[Math.floor(tones.length * 0.06)] / 255;
  const hi = tones[Math.floor(tones.length * 0.97)] / 255;
  const box = frame(width, height);
  const dark = Buffer.alloc(width * height);
  for (let i = 0; i < width * height; i++) {
    const x = i % width;
    const y = Math.floor(i / width);
    const t = Math.min(1, Math.max(0, (lum[i] / 255 - lo) / (hi - lo)));
    const m = mask[i] / 255;
    // soft contrast; a minimum dot inside the silhouette keeps the contour
    let d = Math.max(Math.pow(1 - t, 1.5), 0.07) * m;
    // dissolve the frame's cut edges (left and bottom) into paper; the right edge bleeds
    const fx = (x - box.left) / box.width;
    const fy = (y - box.top) / box.height;
    const edge = (v, span) => Math.min(1, Math.max(0, v / span));
    const fade = edge(fx, 0.22) * edge(1 - fy, 0.16);
    d *= fade * fade * (3 - 2 * fade);
    dark[i] = Math.round(255 * d);
  }
  await sharp(dark, { raw: { width, height, channels: 1 } })
    .extract(box)
    .webp({ quality: 82 })
    .toFile(`${OUT}/${out}`);
  console.log(`${out}: ${box.width}x${box.height}`);
}
await toneMap({ width: 480, out: 'portrait-tone.webp' });

// Hue of Year: the app screen cut out of each App Store frame (marketing background and
// headlines removed; the interface itself is untouched).
const screens = [
  { n: 3, out: 'hue-checkin.webp', box: { left: 175, top: 0, width: 940, height: 1850 } },
  { n: 4, out: 'hue-widgets.webp', box: { left: 185, top: 880, width: 920, height: 1880 } },
  { n: 5, out: 'hue-echo.webp', box: { left: 175, top: 0, width: 940, height: 1850 } },
];
for (const { n, out, box } of screens) {
  await sharp(`${SRC}/hue-frame-${n}.png`).extract(box).resize(720).webp({ quality: 86 }).toFile(`${OUT}/${out}`);
  console.log(out);
}

// Hue of Year app icon, as supplied (the page applies the iOS corner shape).
await sharp(`${SRC}/hue-icon.png`).resize(360).webp({ quality: 90 }).toFile(`${OUT}/hue-icon.webp`);
console.log('hue-icon.webp');
