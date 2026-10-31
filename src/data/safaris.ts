// Safari packages — itineraries from Camp Lilac's SafariBookings listings; prices per person as set by Gatis.
// price = lowest per-person rate ("from"). tiers = per-person rate by group size.

export type Safari = {
  slug: string;
  name: string;
  days: number;
  price: number | null;
  tiers?: { people: string; price: number }[];
  image: string;
  imageAlt: string;
  summary: string;
  bestFor: string;
  offer?: string;
  start: string;
  itinerary: { title: string; text: string; meals?: string; stay?: string }[];
  included: string[];
  excluded: string[];
  keywords: string;
};

const stay = 'Camp Lilac — luxury tent or cabin, just outside the park';
const commonIncluded = [
  'Mikumi National Park entry fees (non-residents)',
  'Private open-roof 4×4 safari jeep for your group only',
  'Professional English-speaking driver-guide',
  'All transport as described',
  'Meals as listed day by day, with water and soft drinks',
  'All taxes and VAT',
];
const commonExcluded = [
  'International flights',
  'Tips (guideline US$10 per person per day)',
  'Personal items — souvenirs, travel insurance, visa fees',
  'Alcoholic drinks',
  'Any government increase in taxes or park fees',
];

export const safaris: Safari[] = [
  {
    slug: '1-day-mikumi-safari',
    name: '1-Day Mikumi Safari',
    days: 1,
    price: 214,
    tiers: [
      { people: '1 person', price: 394 },
      { people: '2 people', price: 230 },
      { people: '3 people', price: 225 },
      { people: '4 or more', price: 214 },
    ],
    image: '/images/rooms/jungle-tent-7-1600.jpg',
    imageAlt: 'Luxury safari tent at Camp Lilac under a blue Mikumi sky',
    summary:
      'A full day in Mikumi National Park in a private open jeep with our own guide: morning game drive, hot bush lunch, afternoon drive until 16:30. Pickup from Morogoro, Mikumi or the camp.',
    bestFor: 'Day trips from Morogoro and guests staying one night',
    start: 'Morogoro town, Morogoro SGR station, or Camp Lilac',
    itinerary: [
      {
        title: 'Morning — pickup and first game drive',
        text: 'Our driver collects you from your hotel, the SGR station or the camp and drives you to the Mikumi main gate (about 2 hours from Morogoro). At the gate you board a private open-roof jeep with your guide and head onto the Mkata floodplain, where buffalo, giraffe, elephant, zebra, impala and — with luck — lions are easiest to find early in the day. Four of the Big Five live in Mikumi.',
        meals: 'Hot bush lunch, water and soft drinks',
      },
      {
        title: 'Afternoon — hippo pools and return',
        text: 'After a hot lunch in the bush, the game drive continues to the hippo pools and the waterholes until about 16:30. Your guide then drives you back to the gate and on to Morogoro for the evening train to Dar es Salaam, or to your hotel or the camp.',
      },
    ],
    included: [...commonIncluded],
    excluded: ['Accommodation — book a tent or cabin at Camp Lilac separately', 'Airport transfers (available on request)', ...commonExcluded],
    keywords: 'Mikumi day safari from Morogoro',
  },
  {
    slug: '2-day-mikumi-safari',
    name: '2-Day Mikumi Safari by Train & Open Jeep',
    days: 2,
    price: 394,
    tiers: [
      { people: '1 person', price: 619 },
      { people: '2 or more', price: 394 },
    ],
    image: '/images/rooms/hero-deck-2000.jpg',
    imageAlt: 'Evening light on a Camp Lilac deck after a day in Mikumi National Park',
    summary:
      'The weekend classic from Dar es Salaam: SGR train to Morogoro, two days of game drives in a private open jeep, and a night in a luxury tent at Camp Lilac. Back in Dar by evening on day two.',
    bestFor: 'Weekend safaris from Dar es Salaam and Zanzibar',
    offer: 'Free transfer between Morogoro SGR station and Mikumi when you book this safari directly with Camp Lilac.',
    start: 'Your hotel or the ferry terminal in Dar es Salaam',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi National Park',
        text: 'We collect you from your hotel or the ferry and drive you to the SGR station for the train to Morogoro (1–2 hours). Your driver-guide meets you on the platform and takes you straight to Mikumi for a late-morning game drive that runs into the afternoon. Lunch, a rest at the camp, then an afternoon-to-evening game drive as the floodplain cools down.',
        meals: 'Lunch and dinner, water and soft drinks',
        stay,
      },
      {
        title: 'Day 2 — Morning game drive and return to Dar es Salaam',
        text: 'An early-morning game drive, when the predators are still moving, continuing into the early afternoon. Lunch back at the camp, then the 2-hour drive to Morogoro for the afternoon train to Dar es Salaam. On arrival we drop you at your hotel or the airport.',
        meals: 'Breakfast and lunch, water and soft drinks',
      },
    ],
    included: ['One night at Camp Lilac in a luxury tent or cabin', ...commonIncluded, 'Transfers in Dar es Salaam to and from the SGR station'],
    excluded: ['SGR train tickets Dar es Salaam ↔ Morogoro', 'Dinner on day 2', ...commonExcluded],
    keywords: '2 day Mikumi safari from Dar es Salaam by train',
  },
  {
    slug: '3-day-mikumi-safari',
    name: '3-Day Mikumi Safari',
    days: 3,
    price: 411,
    tiers: [
      { people: '1 person', price: 675 },
      { people: '2 or more', price: 411 },
    ],
    image: '/images/rooms/jungle-tent-8-1600.jpg',
    imageAlt: 'Private deck chairs at a Camp Lilac tent, looking into the Mikumi bush',
    summary:
      'Three days, two nights: driven from Dar es Salaam by private jeep, a sunset game drive on arrival, a full day on the Mikumi floodplain, and the drive back through the park. Two nights in a luxury tent at Camp Lilac.',
    bestFor: 'Travellers who want to see the whole park without rushing',
    offer: 'Free SGR train tickets from Dar es Salaam to Morogoro and free Morogoro–Mikumi transfer when you book this safari directly with Camp Lilac.',
    start: 'Dar es Salaam, around 07:00',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi National Park',
        text: 'Depart Dar es Salaam at about 07:00 and drive 300 km on paved road via Morogoro, with a short lunch stop. The highway runs through the park itself, so keep your camera ready for baboons, giraffe, elephant, zebra and buffalo by the road. After check-in at the gate, a game drive across the plains to the hippo pools — lions, elephant, eland, warthog, hippo, crocodile and water birds — until sunset, then a short drive to the camp.',
        meals: 'Lunch and dinner, water and soft drinks',
        stay,
      },
      {
        title: 'Day 2 — Full day on the Mikumi floodplain',
        text: 'After breakfast at the camp your guide collects you for a full day exploring the Mkata floodplain and its baobab-dotted edges — over 400 bird species, big herds, and the best chance of leopard in the woodland. Picnic lunch at a viewpoint, then game driving until sunset.',
        meals: 'Breakfast, picnic lunch and dinner, water and soft drinks',
        stay,
      },
      {
        title: 'Day 3 — Mikumi to Dar es Salaam',
        text: 'Breakfast, check-out, and one more drive through the park on the way out. Lunch in Morogoro, then about two hours on to Dar es Salaam, where we drop you at your hotel, the ferry or the airport.',
        meals: 'Breakfast and lunch, water and soft drinks',
      },
    ],
    included: ['Two nights at Camp Lilac in a luxury tent or cabin', 'Private jeep from Dar es Salaam and back', ...commonIncluded],
    excluded: ['Dinner on day 3', ...commonExcluded],
    keywords: '3 day Mikumi safari from Dar es Salaam',
  },
  {
    slug: '4-day-mikumi-udzungwa-safari',
    name: '4-Day Mikumi & Udzungwa Waterfalls',
    days: 4,
    price: 600,
    tiers: [
      { people: '1 person', price: 844 },
      { people: '2 or more', price: 600 },
    ],
    image: '/images/rooms/mv-cabin-6-1600.jpg',
    imageAlt: 'The Mountain View Cabin at Camp Lilac in evening light',
    summary:
      'Wildlife and rainforest in one trip: a Maasai boma visit, a full day of game drives in Mikumi, the five-hour hike to Sanje Waterfall in the Udzungwa Mountains, and three nights at Camp Lilac.',
    bestFor: 'Active travellers and families with older children',
    offer: 'Free SGR train tickets from Dar es Salaam to Morogoro and free Morogoro–Mikumi transfer when you book this safari directly with Camp Lilac.',
    start: 'Dar es Salaam',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi, Maasai boma visit',
        text: 'A private jeep transfer of about five hours from Dar es Salaam, with a lunch stop in Morogoro. On arrival you visit a Maasai boma near the park before settling into the camp for dinner facing the ridge.',
        meals: 'Lunch and dinner, water',
        stay,
      },
      {
        title: 'Day 2 — Full day in Mikumi National Park',
        text: 'Game drive from 06:30 until sunset: large herds of giraffe, buffalo and elephant on the floodplain, hundreds of bird species, and a good chance of lions and leopard.',
        meals: 'Breakfast, picnic lunch and dinner, water',
        stay,
      },
      {
        title: 'Day 3 — Udzungwa Mountains and Sanje Waterfall',
        text: 'Leave at 07:00 for the 60 km drive to Udzungwa Mountains National Park. After check-in at park headquarters, hike with a park ranger to Sanje Waterfall, which drops in four stages and is the highest in Tanzania’s national park system — about five hours round trip, with Udzungwa red colobus and Sanje crested mangabey monkeys in the forest. Picnic lunch on the trail, then back to the camp.',
        meals: 'Breakfast, picnic lunch and dinner, water',
        stay,
      },
      {
        title: 'Day 4 — Mikumi to Dar es Salaam',
        text: 'A morning drive back through Mikumi National Park, with a last chance to spot animals from the road, then on to Dar es Salaam. We drop you at the ferry, your hotel or the airport.',
        meals: 'Breakfast and lunch, water',
      },
    ],
    included: ['Three nights at Camp Lilac in a luxury tent or cabin', 'Private jeep from Dar es Salaam and back', 'Udzungwa Mountains park entry and ranger-guided hike', ...commonIncluded],
    excluded: ['Dinner on day 4', ...commonExcluded],
    keywords: 'Mikumi Udzungwa safari 4 days',
  },
];

export const safariBySlug = (slug: string) => safaris.find((s) => s.slug === slug);
