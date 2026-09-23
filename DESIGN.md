---
name: Manuel Ossanna
description: An almanac of side projects, compiled by one person and printed in two inks.
colors:
  cover-yellow: "#f3c019"
  ink: "#16140f"
  paper: "#fffffb"
  ink-faint: "rgb(22 20 15 / 0.68)"
typography:
  display:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "min(19vw, 31svh)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "0.005em"
  headline:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "6rem"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "0.005em"
  headline-small:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "4.25rem"
    fontWeight: 400
    lineHeight: 0.85
  title-display:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Libre Franklin Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Libre Franklin Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Libre Franklin Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "lnum"
  label:
    fontFamily: "Libre Franklin Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  s: "0.75rem"
  m: "1.5rem"
  l: "3rem"
  xl: "clamp(4rem, 9vw, 8rem)"
  gutter: "clamp(1rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.1rem 0.8rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cover-yellow}"
  stamp-live:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.42em 0.62em 0.36em"
  stamp-progress:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.42em 0.62em 0.36em"
  contents-row:
    textColor: "{colors.ink}"
    padding: "0.85rem 0 0.95rem"
  contents-row-dimmed:
    textColor: "{colors.ink-faint}"
  plate-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(1rem, 2.5vw, 2rem)"
  colophon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cover-yellow}"
    padding: "3rem clamp(1rem, 4vw, 3rem) clamp(4rem, 9vw, 8rem)"
---

# Design System: Manuel Ossanna

## Overview

**Creative North Star: "The Almanac"**

The site is a printed almanac compiled by one person. It has a yellow front cover carrying his name and a halftone portrait, a contents table of numbered entries, interior pages with reference tables and framed plates, a yellow back cover for the compiler's note, and a black colophon. Everything is printed in two inks on two papers. Depth, tone and emphasis come from printing devices (rules, dot leaders, stamps, halftone screens), not from screen effects.

Density is that of a reference book: large condensed display lettering over quiet, well-set text, with tables and leaders doing the organising. The interface stays in the background. The person and the work carry the page. Motion is limited to two moments: the ink registering onto the cover, and one contents row coming to full ink.

The discarded prior look (black background, purple–pink gradients, blurred glow blobs, a generic "Creative Mobile Apps" hero) is a confirmed anti-reference.

**Key Characteristics:**
- Two inks, flat: black ink on cover yellow or interior white, and yellow type on a black colophon.
- League Gothic set in uppercase for the lettering, Libre Franklin for everything that is read.
- Double rules (thick over thin) open pages and sit under heading blocks.
- Entries are numbered "No. 01", never dated.
- Status is shown by the stamp itself: a solid box means live, a dashed box means in progress.
- Every corner is square. There are no shadows, gradients or glows.

## Colors

The system uses two inks on two papers. Colour is committed and flat, and there is no ramp of UI greys.

### Primary
- **Almanac Cover Yellow** (cover-yellow): the paper of the front cover (the whole first viewport) and the back cover (the compiler's note band). It is also the ink colour of all type in the colophon, the text colour on a hovered or focused primary action, and the selection highlight text. The browser `theme-color` uses it too.

### Neutral
- **Press Black** (ink): the one printing ink. It is used for all type, rules, stamps, leaders, plate frames and the halftone dots, and as the solid colophon block. It is a warm near-black, never pure `#000`.
- **Uncoated White** (paper): interior pages (the `main` entries) and the backing behind plate images. It is a faintly warm white, never pure `#fff`.
- **Light Impression** (ink-faint): ink at 68% opacity. It has one job: the rows of the contents table that are not in focus. On yellow it measures about 5:1, so dimmed rows stay readable.

### Named Rules
**The Two Inks Rule.** Every surface is yellow, white or black, and every mark is ink or (on black) yellow. The only colour outside these is inside a product's own screenshots.

**The Printed Tone Rule.** Tone is made the way a press makes it, with halftone dots or line weight, never with tint fills, gradients or glows. The one transparency in the system is Light Impression on dimmed contents rows.

**The Selection Rule.** Selected text inverts to yellow on ink. Inside the black colophon it inverts back to ink on yellow.

## Typography

**Display Font:** League Gothic 400 (with Arial Narrow, sans-serif), self-hosted via `@fontsource/league-gothic`
**Body Font:** Libre Franklin Variable (with Helvetica Neue, Arial, sans-serif), self-hosted via `@fontsource-variable/libre-franklin`

**Character:** League Gothic is condensed wood-type lettering for names, entry titles and section heads. It is always uppercase and always regular weight. Libre Franklin is a sturdy grotesque that covers the rest: running text, tables, labels and stamps. Weight carries emphasis (400 / 500 / 650 / 700 / 800), and figures are lining throughout (tabular in numbering).

### Hierarchy
The type steps are custom properties in `src/styles/global.css` (`--step--1` to `--step-5`).
- **Display** (League Gothic, `min(19vw, 31svh)`, 0.8): cover lettering only, the stacked MANUEL / OSSANNA. It grows as large as the cover allows and uses `35vw` below 60rem.
- **Headline** (League Gothic, step-5 6rem, 0.85): entry titles on interior pages. It drops to step-4 below 60rem.
- **Headline small** (League Gothic, step-4 4.25rem, 0.85–0.9): the "No. 01" entry numerals beside an entry title, and the compiler's note heading (max 8ch).
- **Title display** (League Gothic, step-3 2.75rem, 1): the "Contents" heading and the compiler's signature.
- **Title** (Libre Franklin 650, step-2 1.75rem, 1.1, -0.015em): entry names in the contents table. The tagline uses the same size at weight 500, with its "First edition." in 400 italic.
- **Lede** (Libre Franklin 400, step-1 1.3125rem, 1.5, max 36–38ch): the opening paragraph of each entry and the compiler's note body. In the note, the first line of the first paragraph is set in 650.
- **Body** (Libre Franklin 400, step-0 1.0625rem, 1.55): the default for running text, fact values and table cells.
- **Label** (Libre Franklin 650, step--1 0.8125rem, 0.08–0.12em, uppercase): the running head and nav (600), "No. 01" in the contents table, fact and table row heads, table captions, colophon headings, stamps, and the primary action (700).

### Named Rules
**The Wood-Type Rule.** League Gothic is used only in uppercase and weight 400, and only for names, entry titles, numerals and section heads. It is never used for sentences.

**The Matched Stroke Rule.** The → arrow in entry titles is set in Libre Franklin 800 at 0.72em so its stroke matches the display stems. Chemical subscripts (CO₂) use a real `<sub>` at 0.55em.

## Layout

The layout is a book spread on a two-column grid. Horizontal page margins use the `gutter` token. The cover grid is 7fr / 5fr: name, tagline and contents on the left, and the portrait on the right, filling the cover's full height and bleeding off the right and bottom edges. The cover is at least one screen tall (`100svh`), and on desktop the contents table is visible without scrolling. Interior entries flip to 5fr / 7fr, with the lede and facts on the left and plates or a reference table on the right. Entry heads span both columns. The compiler's note uses the same 5 / 7 split on yellow.

Vertical rhythm steps through `s` / `m` / `l` / `xl`. Entries and the note are separated by `xl`, and columns are separated by `l`.

Responsive behaviour:
- **Below 60rem:** everything collapses to one column. The cover order is name, portrait (68% wide, max 24rem, right-aligned and bleeding off the right edge), tagline, contents.
- **Below 34rem:** the dot leaders in contents rows are dropped, and the fact lists stack their term above the value. The plates become a horizontal scroll-snap strip with each figure at least 9rem wide.

The colophon lays its columns out with `auto-fit`, at least 13rem each.

## Elevation & Depth

The system is completely flat and has no shadows. Depth is conveyed as printed matter conveys it: by changing paper colour (yellow cover, white interior, yellow back cover, black colophon), by rule weight, and by framing plates in a double rule. The halftone portrait is the only place with modelled tone, and it gets that tone from dot size.

### Named Rules
**The Flat Press Rule.** No `box-shadow`, no `filter: drop-shadow`, no blur. If something needs to stand apart, it gets a rule, a frame or a different paper.

## Shapes

Every corner is square (`0px`). The form language comes from rules and boxes:
- **Double rule:** a 3px line over a 1px line with a 3px gap, 7px in total. It opens every page (above the running head and the colophon), and as a heading underline (3px, then 1px 7px below) it closes the "Contents" heading and every entry head.
- **Single hairline (1px ink):** separates contents rows, fact rows and reference-table rows. Reference tables open with a 3px top rule.
- **Dot leader (2px dotted ink):** in the contents table it runs from the entry title to its stamp. It also runs from each fact or table row label to its value.
- **Boxed caps (2px border):** stamps and the primary action.
- **Double plate frame (`5px double`):** holds the figure plates. Each plate image carries a 1px ink outline on paper.

## Components

### Buttons
The primary action is a boxed caps label, like a printed coupon.
- **Shape:** square corners with a 2px solid ink border.
- **Primary:** transparent on paper with ink text. Label style at 700 weight, 0.12em tracking, uppercase, padding 0.85rem 1.1rem 0.8rem.
- **Hover / Focus:** fills with ink and switches the text to cover yellow over 200ms `ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Secondary:** a plain underlined text link beside it ("Read the full entry").

### Links
Text links are underlined in currentColor (1px, offset 0.22em) and thicken to 2px on hover. Links in the running head have no underline at rest and get a 2px underline on hover. Focus uses a 2px currentColor outline with a 3px offset everywhere.

### Status stamps
- **Style:** boxed uppercase label (step--1, 650, 0.12em), 2px currentColor border, padding 0.42em 0.62em 0.36em, no fill.
- **State:** a **solid** border means Live. A **dashed** border means In progress. State is never shown with colour.

### Navigation
- **Running head:** sits under the opening double rule at the top of the cover. It has a small uppercase identifier on the left ("An almanac of side projects") and the in-page nav on the right (Contents / Note / Contact), both in label style at weight 600.
- **Colophon:** the site footer, a solid ink block with yellow type. It opens with a double rule. Its columns are Entries (listed as "No. 01 Title", tabular figures), Write to me, Colophon (credits for type and build) and This site. Headings are labels, and the text is step--1 at 1.6 line height, max 34ch.

### Contents table (signature)
The contents table is the index of entries. Each row is one link on a grid with four parts: number ("No. 01", label style, tabular), title (Title style), dot leader and stamp. A one-line summary (step--1, max 52ch) sits under the title. Rows are separated by 1px ink rules under a double-ruled "Contents" heading.
- **Focus interaction:** hovering or keyboard-focusing a row keeps it in full ink and prints every other row in Light Impression (`ink-faint`). The colour changes over 260ms ease-out. The focused row's dot leader redraws left to right with a 520ms `clip-path` wipe.
- **Mobile:** below 34rem the leader is removed and the title drops to step-1.

### Entry head
An entry head has the "No. 01" numeral (League Gothic, Headline small), the entry title (Headline, uppercase) and its stamp, aligned to the baseline end and closed by the double rule underline. Below 60rem the title moves to its own row and the stamp moves to the top right.

### Facts and reference tables
These are definition-style rows. The row head is an uppercase label with a dot leader running to the value, and each row is closed by a 1px ink rule. Fact lists open with a 1px rule. Reference tables have a label-style caption above a 3px opening rule. Row heads are 10.5rem wide (7.5rem on narrow screens).

### Plates
Product screenshots are printed as numbered figures. They sit in a three-column grid inside a 5px double ink frame on paper, and each image has a 1px ink outline. Captions are step--1 text led by a bold uppercase "Fig. 1". The product's own colours appear only inside these images.

### Halftone portrait (signature)
The portrait is Manuel's photo, printed as a black-ink halftone on the cover yellow.
- **Rendering:** a live `<canvas>` screens a pre-cut grayscale tone map (`/img/portrait-tone.webp`) at a 45° screen angle. Each dot's radius comes from the tone averaged over that dot's whole cell, using a summed-area table. The dots are filled in the figure's computed `color` (ink). The final screen ruling is `clientWidth / 105`, clamped to 3.6–6.5px, and the canvas redraws on resize.
- **Load motion:** the screen starts four times coarser than its final ruling and settles to it over 1400ms with an exponential ease-out, as if the ink were registering on the cover. This is the only moment of motion on load, and all content is visible from the start.
- **Reduced motion:** the final screen is drawn at once.
- **No script:** a pre-screened raster (`/img/portrait-halftone.webp`, black ink on transparency) is shown instead. Both rasters come from `scripts/prepare-assets.mjs`, which uses the subject matte from `scripts/portrait-matte.swift`.

## Do's and Don'ts

### Do:
- **Do** print everything in the two inks: ink on cover-yellow or paper, and cover-yellow on ink for the colophon.
- **Do** open every page with the double rule (3px over 1px) and close every heading block with the double-rule underline.
- **Do** number entries "No. 01", "No. 02" with tabular figures, and add a new project as one more contents row and one more entry.
- **Do** mark status with a boxed stamp: solid for Live, dashed for In progress.
- **Do** frame product imagery as plates in the 5px double frame with "Fig. n" captions.
- **Do** use dot leaders to connect a label to its value.
- **Do** keep all content visible by default. Motion only reveals, and `prefers-reduced-motion` shows the final state.

### Don't:
- **Don't** use gradients, tint fills, glows, blurs or shadows. The discarded black-and-purple glow look is the anti-reference.
- **Don't** round a corner.
- **Don't** set League Gothic in lowercase, in bold or for sentences.
- **Don't** show state with colour (no green "live" badge). The stamp's border style carries it.
- **Don't** frame entries or the site with dates or years. Entries are numbered, not dated.
- **Don't** put product colours (Hue of Year's green, amber, red) on the page outside the product's own screenshots.
