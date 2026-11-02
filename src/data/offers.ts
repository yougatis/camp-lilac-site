// Direct-booking offers. One place for the wording — used on /offers, the home, safaris and rates pages, and the booking form.
export const offers = [
  {
    id: 'free-transfer',
    title: 'Free transfer to Mikumi',
    who: 'With the 2-Day, 1-Night Mikumi Safari',
    worth: 'Worth US$75',
    text: 'We pick you up at Morogoro SGR station and drive you to Camp Lilac and the park — free. One way; the return transfer to Morogoro is charged.',
    safari: '2-day-mikumi-safari',
  },
  {
    id: 'free-train-and-transfer',
    title: 'Free train ticket + transfer',
    who: 'With any safari of 3 days or more',
    worth: 'Train ticket + US$75 transfer',
    text: 'We pay the economy SGR train tickets from Dar es Salaam to Morogoro for your whole group, and the transfer on to Mikumi. One way; the return journey is charged.',
    safari: '3-day-mikumi-safari',
  },
];
export const offerById = (id: string | null) => offers.find((o) => o.id === id);
