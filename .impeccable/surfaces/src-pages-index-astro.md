---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home (cover + contents)

Scope: the site home at `/`. Visitor mode: Experience (a personal studio / portfolio; the work and the person lead, the interface recedes).

Audience and job: people judging Manuel's work arrive from a shared link, skim for seconds, and decide whether to open a project. Action: open an entry. Proof: the two real entries, his photo, his own facts. Constraints: see PRODUCT.md (about Manuel, no employer, no year framing, stack Astro, static on GitHub Pages).

Copy locked by Manuel: tagline "Things I make on the side. First edition." Compiler's note approved in draft: "I'm Manuel. I build things on the side, partly as a creative outlet, partly because I need to be making something. This is where they live: small, careful tools that show people something about themselves they'd otherwise miss, like a year of moods or the footprint of their AI use. That second one started with my own: 1.3 billion tokens over July and part of August. Two entries so far. More as they ship."

Unresolved: the site's name (do not print "Squaloo Studios"; the cover leads with Manuel's name). No dates or years anywhere as framing.

## Direction contract

THESIS: The site is an almanac compiled by one person: a printed cover, a contents table of numbered entries, and reference plates. It refuses the category default of a "Hi, I'm X" hero over a grid of same-size project cards.

OWN-WORLD: Committed colour. Almanac-cover yellow (#F3C019) owns the front cover and the back cover (the compiler's note band); interior pages are bright uncoated white (#FFFFFB) printed in one black ink (#16140F); the colophon is a solid black block with yellow type. Figures sit on paper inside a double plate frame. Two inks, flat, no gradients, tints, glows or shadows. Hue of Year's own green/amber/red appear only inside its figures. Type: League Gothic (condensed wood-type gothic) for display, Libre Franklin for text and tables with tabular figures. Language: thick-thin double rules, dot leaders, "No. 01" entry numbers, boxed caps status stamps, "Fig." captions, a halftone-dot portrait printed in black on yellow.

STORY: The visitor sees a cover with Manuel's name and face, reads "Things I make on the side. First edition.", sees the contents with two entries and their status, opens one. Lower down, the compiler's note says why this exists.

FIRST VIEWPORT: Full-bleed yellow cover. Top: a double rule with a small running head. Left, MANUEL / OSSANNA in League Gothic at the largest size the width allows (display max honoured on body copy, the name is the cover lettering), stacked. Right, the halftone portrait, tall, printed in black on the yellow. Under the name: the tagline. Bottom of the cover: the contents table begins (No. 01 Hue of Year .... Live; No. 02 AI usage → CO2 .... In progress), each row a link, visible without scrolling on desktop. Mobile: name, portrait, tagline, contents in that order.

Signature interaction: the contents table focuses one entry at a time; hover or keyboard focus brings that row to full ink and draws its dot leader across, while the other rows drop back to a lighter printing. Motion grammar: one moment on load, the black ink "registers" onto the yellow cover (portrait halftone resolves from coarse to fine); everything already visible by default; reduced motion shows the final state.

FORM: The Almanac, position 5 on my ordered list of seven grounded candidates; seed key 301b411e.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
