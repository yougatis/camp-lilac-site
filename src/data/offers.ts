// Safari deals (November 2026 only). One place for the wording — used on /offers, the home, safaris and rates pages, and the booking form.
//
// offersActive is evaluated at BUILD time: while the build date is on or before OFFER_END every deal mention is rendered;
// after that, a rebuild (any push to main) drops them automatically and /offers turns into the evergreen
// "book direct benefits" page. A small script in Base.astro also hides anything marked `data-offer` in the browser once
// the end date has passed, so visitors never see an expired deal even before the site is rebuilt.
export const OFFER_MONTH = 'November 2026';
export const OFFER_START = '2026-11-01';
export const OFFER_END = '2026-11-30';
export const offersActive = new Date() <= new Date(`${OFFER_END}T23:59:59+03:00`);

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
    worth: 'Worth US$85–95 for two',
    text: 'Book the 3-Day or 4-Day safari directly with us for a start date in November 2026 and we pay the economy SGR train tickets from Dar es Salaam to Morogoro for your whole group (about US$10–20 for two people), plus the US$75 transfer on to Mikumi. One way; the return journey is charged.',
    safari: '3-day-mikumi-safari',
  },
];
export const offerById = (id: string | null) => offers.find((o) => o.id === id);

// What booking direct always includes — shown instead of the deals once they expire.
export const directBenefits = [
  { title: 'Breakfast and dinner included', text: 'Every direct booking includes breakfast and a three-course dinner facing the Mikumi mountain ridge. Lunch is US$15 per person.' },
  { title: 'One total price, no booking fees', text: 'You get one price for the room, the safari and the transfers, and nothing to pay until you confirm. A deposit by secure card link holds the room.' },
  { title: 'The whole journey organised', text: 'Train tickets, Morogoro station pickup, ferries and flights from Zanzibar — tell us how you want to travel and we arrange it.' },
  { title: 'Our own guides and 4×4s', text: 'Game drives leave straight from the camp in a private open-roof jeep with a Camp Lilac guide, timed to your train or flight.' },
];
