// Safari deals (November 2026 only). One place for the wording — used on /offers, the home, safaris and rates pages, and the booking form.
export const OFFER_MONTH = 'November 2026';
export const OFFER_START = '2026-11-01';
export const OFFER_END = '2026-11-30';

export const offers = [
  {
    id: 'free-transfer',
    title: 'Free transfer to Mikumi',
    who: 'With the 2-Day, 1-Night Mikumi Safari · November 2026',
    worth: 'Worth US$75',
    text: 'Book the 2-Day, 1-Night Mikumi Safari directly with us for a start date in November 2026 and we pick you up at Morogoro SGR station and drive you to the camp — free. One way; the return transfer to Morogoro is charged.',
    safari: '2-day-mikumi-safari',
  },
  {
    id: 'free-train-and-transfer',
    title: 'Free train ticket + transfer',
    who: 'With the 3-Day or 4-Day safari · November 2026',
    worth: 'Train ticket + US$75 transfer',
    text: 'Book the 3-Day or 4-Day safari directly with us for a start date in November 2026 and we pay the economy SGR train tickets from Dar es Salaam to Morogoro for your whole group, plus the transfer on to Mikumi. One way; the return journey is charged.',
    safari: '3-day-mikumi-safari',
  },
];
export const offerById = (id: string | null) => offers.find((o) => o.id === id);
