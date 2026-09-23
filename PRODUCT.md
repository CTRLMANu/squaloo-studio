# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (chosen by Manuel after the visual direction was picked; the stack follows the design). Static output, hosted free on GitHub Pages, custom domain `squaloo.studio` set once in `src/site.ts`, clean URLs (no `#`).

## Users

Primary: people judging Manuel's work — future employers, clients, collaborators and peers who land on the site to see what he builds and how well. They skim, decide quickly, and click into a project if the first impression earns it.

Secondary: people using one of his products who need that product's page, privacy policy or support page (e.g. Hue of Year users coming from the App Store).

## Product Purpose

A personal site for Manuel Ossanna, framed as his "studio": the place where his side projects live. It shows who he is and what he has made, gives each project its own page, and hosts each project's legal and support pages.

Success: within the first seconds a visitor knows this is one person's site and what kind of things he makes; they can reach every project in one click; the site itself demonstrates his standard of craft.

## Positioning

Not an agency and not an "app development studio". One person's workshop for side projects, with his name and face on it. What a neighbouring portfolio can't copy is the specific projects and the care in how they are made and explained.

## Operating Context

- Projects shown (exactly these two for now):
  - **Hue of Year** — iOS app, live on the App Store (https://apps.apple.com/app/hue-of-year-mood-tracker/id6759992055). Evening reflection: log mood (Struggling / Okay / Thriving), energy, one daily win, and optionally tomorrow's task; each day becomes a colour in a 365-day grid. Views: Calendar, Prism (tomorrow's task), Echo (analytics). Home and lock screen widgets. All data stays on the device; no account, no servers. iOS only. Has in-app purchases/subscriptions (per its Terms).
  - **AI usage → CO2 tool** — coming. Free, open source (MIT), static site; runs entirely in the visitor's browser; reads official exports (ChatGPT, Claude.ai, Cursor CSV, Claude Code logs) and shows token usage, a low/mid/high CO2 estimate with every assumption and source visible, reduction tips, then offset/removal links. Own public repo on Manuel's personal GitHub; published under this site at a path.
- Each product keeps its own page, privacy policy and support page. Hue of Year also has Terms of Service. The App Store Connect URLs for Hue of Year will be updated to the new URLs after launch (no existing users; old `#` links need not be preserved).
- Contact: email (currently ossannam@icloud.com). No contact form — there is no server to receive messages.
- Hosting: GitHub Pages, repo `CTRLMANu/squaloo-studio` on Manuel's personal GitHub.

## Capabilities and Constraints

- Must be clear within seconds that the site is about Manuel personally.
- Footer carries site-wide links only (projects, about/contact, the site's own privacy policy). Product-specific legal links live on each product's pages.
- No Impressum.
- No mention of Manuel's employer or day job, anywhere.
- Must stay fully separate from his company: no company names, logos, or links.
- Domain `squaloo.studio` is kept for now but expires 2027-03-08 and may be replaced; the domain should be set in one place.
- Undecided: the site's name. Options under consideration: something that combines Manuel's name with the "studio" idea, or "studio" stays the name as long as the first view makes clear it's about him. Do not use "Squaloo Studios" or any "app development" framing as settled.
- Language: English.

## Brand Commitments

None binding yet. The current site's look (black background, purple–pink gradients, blurred glow blobs, generic "Creative Mobile Apps" hero) is being discarded entirely and is an anti-reference.

## Evidence on Hand

- Hue of Year: App Store listing (link above); feature descriptions, FAQ, Privacy Policy and Terms (last updated 2026-04-17) in the old site on the `main` branch: `src/app/pages/HueOfYear.tsx`, `Support.tsx`, `Privacy.tsx`, `Terms.tsx`.
- About Manuel (his own words, confirmed 2026-09-23): he builds side projects as a creative outlet and out of a need to build something. He is a heavy AI user himself (about 1.3 billion tokens over July and part of August 2026), which is where the CO2 tool comes from. No other bio facts; don't add any.
- Supplied by Manuel: a portrait photo (`assets/source/portrait.png`) and five Hue of Year App Store frames (`assets/source/hue-frame-*.png`). Site rasters are derived from these by `scripts/prepare-assets.mjs`. Still missing: the Hue of Year app icon.
- CO2 tool: not built yet; no screenshots or results exist. Don't fake any.
- No testimonials, press, download counts or user numbers. Don't invent any.

## Product Principles

1. **Person first.** Every page should reinforce that one person made this, not a company.
2. **Show, don't claim.** Let real projects and real details carry the credibility; no adjectives standing in for evidence.
3. **Each project stands on its own.** A project page must work for someone who arrives there directly, with its legal and support pages one click away.
4. **Honest about state.** Live, in progress and planned are clearly labelled; nothing is presented as finished before it is.
5. **Built to grow.** Adding the next project should mean adding one entry, not redesigning.
