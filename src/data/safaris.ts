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
  variants?: { name: string; text: string; price?: string }[];
  itinerary: { title: string; text: string; meals?: string; stay?: string }[];
  included: string[];
  excluded: string[];
  keywords: string;
  metaTitle?: string; // ≤ 65 characters
  metaDescription?: string; // 150–160 characters
};

const stay = 'Camp Lilac — luxury tent or cabin, just outside the park';
export const byRoadNote =
  'Prefer to come by road? We can arrange a private jeep from Dar es Salaam, but we do not recommend it: it costs more than the train, is more tiring, and takes 5–6 hours of driving to Morogoro and another 2 hours to Mikumi, against 1.5 hours on the SGR train. Ask us for the road price.';
const commonIncluded = [
  'Mikumi National Park entry fees (non-residents)',
  'Private open-roof 4×4 safari jeep for your group only',
  'Professional English-speaking driver-guide',
  'All transport as described',
  'Full board on safari — all meals as listed day by day, with water and soft drinks',
  'All taxes and VAT',
];
const commonExcluded = [
  'International flights',
  'Tips (guideline US$10 per person per day)',
  'Personal items — souvenirs, travel insurance, visa fees',
  'Alcoholic drinks',
  'Any government increase in taxes or park fees',
];

// How guests can reach the camp — shown on every safari page, the safaris hub and the booking form.
export const travelOptions: { title: string; tag?: string; href?: string; text: string }[] = [
  { title: 'From Dar es Salaam by SGR train', tag: 'Recommended', href: '/safari-from-dar-es-salaam', text: 'Morning train to Morogoro (1.5 hours). Our driver meets you on the platform and drives you 2 hours to Mikumi — about 3.5 hours in all.' },
  { title: 'From Dar es Salaam by car', href: '/getting-here#road', text: 'A private transfer car from your hotel or the airport, door to door. Compared with the train it is more expensive, slower (7–8 hours instead of about 3.5) and much more tiring, so we only suggest it when the train times do not fit.' },
  { title: 'From Zanzibar by ferry', href: '/safari-from-zanzibar', text: 'Fast ferry from Stone Town to Dar es Salaam (about 2 hours). We meet you at the ferry terminal and take you on by train or by car.' },
  { title: 'From Zanzibar by plane', href: '/safari-from-zanzibar#flight', text: 'A short flight to Dar es Salaam, then on by train or car with us — or a light-aircraft flight straight to the Mikumi airstrip. Flights cost US$160–200 per person each way, depending on the day and which airline is flying. Not included; we book them for you.' },
  { title: 'Already on the road', href: '/getting-here#south', text: 'Coming from Morogoro, Iringa, Ruaha or by bus? We collect you from your hotel, Morogoro station or Mikumi town. Self-drive guests are welcome too.' },
];

export const safaris: Safari[] = [
  {
    slug: '1-day-mikumi-safari',
    metaTitle: '1-Day Mikumi Safari from Morogoro or Dar es Salaam | Camp Lilac',
    metaDescription: 'A full day in Mikumi National Park in a private open 4x4 with our own guide: morning game drive, hot bush lunch, hippo pools. From Morogoro, the camp or Dar.',
    name: '1-Day Mikumi Safari',
    days: 1,
    price: 214,
    tiers: [
      { people: '1 person', price: 394 },
      { people: '2 or more', price: 214 },
    ],
    variants: [
      { name: 'From Morogoro or the camp', text: 'Pickup from your hotel in Morogoro, the SGR station or Camp Lilac. Full day in the park, back by evening.', price: 'from US$214 per person' },
      { name: 'From Dar es Salaam by SGR train — same day', text: 'Early SGR train from Dar es Salaam to Morogoro (1.5 hours), our driver on the platform, a full day in Mikumi, and the evening train back. Long day, no overnight needed.', price: 'from US$230 per person' },
    ],
    image: '/images/wild/pkg-1-1600.jpg',
    imageAlt: 'Giraffes grazing near a safari jeep on the savannah',
    summary:
      'A full day in Mikumi National Park in a private open jeep with our own guide: morning game drive, hot bush lunch, afternoon drive until 16:30. From Morogoro, from the camp, or as a same-day trip from Dar es Salaam by SGR train.',
    bestFor: 'Day trips from Morogoro or Dar es Salaam, and guests staying one night',
    start: 'Morogoro, Camp Lilac, or Dar es Salaam SGR station',
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
    excluded: ['Accommodation — book a tent or cabin at Camp Lilac separately', 'SGR train tickets for the same-day trip from Dar es Salaam', 'Airport transfers (available on request)', ...commonExcluded],
    keywords: 'Mikumi day safari from Morogoro',
  },
  {
    slug: '2-day-mikumi-safari',
    metaTitle: '2-Day Mikumi Safari from Dar es Salaam by SGR Train | Camp Lilac',
    metaDescription: 'The weekend safari from Dar es Salaam or Zanzibar: SGR train to Morogoro, two days of game drives in a private 4x4 and a night in a luxury tent. From US$394 pp.',
    name: '2-Day, 1-Night Mikumi Safari',
    days: 2,
    price: 394,
    tiers: [
      { people: '1 person', price: 619 },
      { people: '2 or more', price: 394 },
    ],
    image: '/images/wild/pkg-2-1600.jpg',
    imageAlt: 'A guest watching elephants up close from a safari jeep',
    summary:
      'The weekend classic from Dar es Salaam: SGR train to Morogoro, two days of game drives in a private open jeep, and a night in a luxury tent at Camp Lilac. Back in Dar by evening on day two.',
    bestFor: 'Weekend safaris from Dar es Salaam and Zanzibar',
    offer: 'Free transfer from Morogoro SGR station to Mikumi (worth US$75) when you book this safari directly with Camp Lilac for a start date in November 2026. One way — the return transfer is charged.',
    start: 'Your hotel or the ferry terminal in Dar es Salaam',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi National Park',
        text: 'We collect you from your hotel or the ferry and drive you to the SGR station for the train to Morogoro (1.5 hours). Your driver-guide meets you on the platform and takes you straight to Mikumi for a late-morning game drive that runs into the afternoon. Lunch, a rest at the camp, then an afternoon-to-evening game drive as the floodplain cools down.',
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
    excluded: ['SGR train tickets Dar es Salaam ↔ Morogoro', 'Return transfer from Mikumi to Morogoro SGR station', 'Dinner on day 2', ...commonExcluded],
    keywords: '2 day Mikumi safari from Dar es Salaam by train',
  },
  {
    slug: '3-day-mikumi-safari',
    metaTitle: '3-Day Mikumi Safari from Dar es Salaam | Camp Lilac',
    metaDescription: 'Three days, two nights: SGR train from Dar es Salaam, sunset game drive on arrival, a full day on the Mikumi floodplain, two nights in a luxury tent. From US$473.',
    name: '3-Day, 2-Night Mikumi Safari',
    days: 3,
    price: 473,
    tiers: [
      { people: '1 person', price: 675 },
      { people: '2 or more', price: 473 },
    ],
    variants: [
      { name: 'Classic', text: 'Two full days of game drives, two nights at Camp Lilac.' },
      { name: 'With a cultural visit', text: 'Swap part of day 2 for a visit to a Maasai boma or a nearby village with your guide. Same price — just tell us when you book.' },
    ],
    image: '/images/wild/pkg-3-1600.jpg',
    imageAlt: 'A cheetah sitting in front of a safari jeep',
    summary:
      'Three days, two nights: SGR train from Dar es Salaam, a sunset game drive on arrival, a full day on the Mikumi floodplain, and a last drive through the park on the way home. Two nights in a luxury tent at Camp Lilac.',
    bestFor: 'Travellers who want to see the whole park without rushing',
    offer: 'Free economy SGR train tickets from Dar es Salaam to Morogoro for your group, plus the free transfer to Mikumi (worth US$75), when you book this safari directly with Camp Lilac for a start date in November 2026. One way — the return journey is charged.',
    start: 'Dar es Salaam SGR station, morning train',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi National Park',
        text: 'Morning SGR train from Dar es Salaam to Morogoro (1.5 hours). Your driver-guide meets you on the platform for the 2-hour drive to Mikumi — the highway runs through the park itself, so keep your camera ready for baboons, giraffe, elephant, zebra and buffalo by the road. Lunch, then a game drive across the plains to the hippo pools — lions, elephant, eland, warthog, hippo, crocodile and water birds — until sunset, then a short drive to the camp.',
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
        text: 'Breakfast, check-out, and one more drive through the park on the way out. Lunch, then the drive to Morogoro for the afternoon train to Dar es Salaam, where we drop you at your hotel, the ferry or the airport.',
        meals: 'Breakfast and lunch, water and soft drinks',
      },
    ],
    included: ['Two nights at Camp Lilac in a luxury tent or cabin', 'Transfers between Morogoro SGR station and the camp', ...commonIncluded],
    excluded: ['Return SGR train ticket and return transfer to Morogoro', 'Dinner on day 3', ...commonExcluded],
    keywords: '3 day Mikumi safari from Dar es Salaam',
  },
  {
    slug: '4-day-mikumi-udzungwa-safari',
    metaTitle: '4-Day Mikumi & Udzungwa Waterfalls Safari | Camp Lilac',
    metaDescription: 'Wildlife and rainforest in one trip: a Maasai boma visit, a full day of game drives in Mikumi, the Sanje Waterfall hike in Udzungwa, three nights at Camp Lilac.',
    name: '4-Day, 3-Night Mikumi & Udzungwa Waterfalls Safari',
    days: 4,
    price: 619,
    tiers: [
      { people: '1 person', price: 844 },
      { people: '2 or more', price: 619 },
    ],
    image: '/images/wild/pkg-4-1600.jpg',
    imageAlt: 'A lion walking through tall grass in front of a safari jeep',
    summary:
      'Wildlife and rainforest in one trip: a Maasai boma visit, a full day of game drives in Mikumi, the five-hour hike to Sanje Waterfall in the Udzungwa Mountains, and three nights at Camp Lilac.',
    bestFor: 'Active travellers and families with older children',
    offer: 'Free economy SGR train tickets from Dar es Salaam to Morogoro for your group, plus the free transfer to Mikumi (worth US$75), when you book this safari directly with Camp Lilac for a start date in November 2026. One way — the return journey is charged.',
    start: 'Dar es Salaam SGR station, morning train',
    itinerary: [
      {
        title: 'Day 1 — Dar es Salaam to Mikumi, Maasai boma visit',
        text: 'Morning SGR train to Morogoro (1.5 hours), then our jeep for the 2-hour drive to Mikumi, with lunch on the way. On arrival you visit a Maasai boma near the park before settling into the camp for dinner facing the Mikumi mountain ridge.',
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
        text: 'A morning drive back through Mikumi National Park, with a last chance to spot animals from the road, then to Morogoro for the afternoon train to Dar es Salaam. We drop you at the ferry, your hotel or the airport.',
        meals: 'Breakfast and lunch, water',
      },
    ],
    included: ['Three nights at Camp Lilac in a luxury tent or cabin', 'Transfers between Morogoro SGR station and the camp', 'Udzungwa Mountains park entry and ranger-guided hike', ...commonIncluded],
    excluded: ['Return SGR train ticket and return transfer to Morogoro', 'Dinner on day 4', ...commonExcluded],
    keywords: 'Mikumi Udzungwa safari 4 days',
  },
];

export const safariBySlug = (slug: string) => safaris.find((s) => s.slug === slug);
