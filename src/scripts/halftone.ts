// Screens the portrait's tone map into a 45° halftone, drawn in one ink.
// On load the screen starts coarse and settles to its final ruling, like
// ink registering on the cover. Reduced motion draws the final state at once.

const ANGLE = Math.PI / 4;
const COS = Math.cos(ANGLE);
const SIN = Math.sin(ANGLE);
const DURATION = 1400;

// Summed-area table of the tone map, so each dot can average the tone under its cell.
type Tone = { sat: Float64Array; w: number; h: number };

async function loadTone(src: string): Promise<Tone> {
  const img = new Image();
  img.src = src;
  await img.decode();
  const off = document.createElement('canvas');
  off.width = img.naturalWidth;
  off.height = img.naturalHeight;
  const ctx = off.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, off.width, off.height);
  const w = off.width;
  const h = off.height;
  const sat = new Float64Array((w + 1) * (h + 1));
  for (let y = 0; y < h; y++) {
    let row = 0;
    for (let x = 0; x < w; x++) {
      row += data[(y * w + x) * 4] / 255;
      sat[(y + 1) * (w + 1) + x + 1] = sat[y * (w + 1) + x + 1] + row;
    }
  }
  return { sat, w, h };
}

function average(t: Tone, x0: number, y0: number, x1: number, y1: number) {
  const a = Math.max(0, Math.min(t.w, Math.floor(x0)));
  const b = Math.max(0, Math.min(t.h, Math.floor(y0)));
  const c = Math.max(a + 1, Math.min(t.w, Math.ceil(x1)));
  const d = Math.max(b + 1, Math.min(t.h, Math.ceil(y1)));
  const W = t.w + 1;
  const sum = t.sat[d * W + c] - t.sat[b * W + c] - t.sat[d * W + a] + t.sat[b * W + a];
  return sum / ((c - a) * (d - b));
}

function draw(canvas: HTMLCanvasElement, tone: Tone, cell: number, ink: string) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;
  if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = ink;
  ctx.beginPath();

  // Walk the rotated screen grid over the whole canvas.
  const uMin = 0;
  const uMax = (W + H) * COS;
  const vMin = -W * SIN;
  const vMax = H * COS;
  const sx = tone.w / W;
  const sy = tone.h / H;
  const half = (cell / 2) * 0.9;

  for (let u = Math.floor(uMin / cell) * cell + cell / 2; u < uMax; u += cell) {
    for (let v = Math.floor(vMin / cell) * cell + cell / 2; v < vMax; v += cell) {
      const x = u * COS - v * SIN;
      const y = u * SIN + v * COS;
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      const dark = average(tone, (x - half) * sx, (y - half) * sy, (x + half) * sx, (y + half) * sy);
      if (dark < 0.01) continue;
      const r = (cell / 2) * Math.sqrt(dark) * 1.22;
      if (r < 0.35) continue;
      ctx.moveTo(x + r, y);
      ctx.arc(x, y, r, 0, Math.PI * 2);
    }
  }
  ctx.fill();
}

async function init(figure: HTMLElement) {
  const canvas = figure.querySelector('canvas');
  const src = figure.dataset.tone;
  if (!canvas || !src) return;

  const tone = await loadTone(src);
  const ink = getComputedStyle(figure).color;
  const finalCell = () => Math.min(6.5, Math.max(3.6, canvas.clientWidth / 105));
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  figure.dataset.ready = '';
  let animating = !still;

  if (still) {
    draw(canvas, tone, finalCell(), ink);
  } else {
    const start = performance.now();
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(2, -10 * t); // exponential ease-out
      const end = finalCell();
      draw(canvas, tone, end * (4 - 3 * eased), ink);
      if (t < 1) requestAnimationFrame(frame);
      else animating = false;
    };
    requestAnimationFrame(frame);
  }

  let pending = 0;
  new ResizeObserver(() => {
    if (animating) return;
    cancelAnimationFrame(pending);
    pending = requestAnimationFrame(() => draw(canvas, tone, finalCell(), ink));
  }).observe(canvas);
}

document.querySelectorAll<HTMLElement>('[data-halftone]').forEach((el) => void init(el));
