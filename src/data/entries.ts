export type Entry = {
  no: string;
  slug: string;
  title: string;
  /** Same title with typographic markup (subscripts, the arrow) for display. */
  titleHtml: string;
  status: 'Live' | 'In progress';
  summary: string;
};

export const entries: Entry[] = [
  {
    no: '01',
    slug: 'hue-of-year',
    title: 'Hue of Year',
    titleHtml: 'Hue of Year',
    status: 'Live',
    summary: 'An evening mood diary for iPhone. Each day becomes a colour, and the year fills in.',
  },
  {
    no: '02',
    slug: 'ai-co2',
    title: 'AI usage → CO₂',
    titleHtml: 'AI usage <span class="nowrap"><span class="arrow" aria-hidden="true">→</span> CO<sub>2</sub></span>',
    status: 'In progress',
    summary: 'The footprint of your AI use, estimated as an honest range, right in your browser.',
  },
  {
    no: '03',
    slug: 'thesis-kit',
    title: 'thesis-kit',
    titleHtml: 'thesis-kit',
    status: 'In progress',
    summary: 'A Cursor workspace for writing a thesis from sources you checked yourself.',
  },
];
