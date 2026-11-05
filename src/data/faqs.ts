export type Faq = {
  q: string;
  a: string; // evergreen answer (also goes into the FAQPage schema)
  offer?: string; // dated deal sentence — shown only while src/data/offers.ts says the deals are active
  links?: { text: string; href: string }[]; // "Read more" links shown under the answer
  group: 'Getting there' | 'Staying' | 'Safaris' | 'Booking & payment';
};

// Shown on /faq (grouped) and output as FAQPage structured data.
export const faqs: Faq[] = [
  {
    group: 'Getting there',
    q: 'Where is Camp Lilac?',
    a: 'Camp Lilac is in Mikumi, Morogoro Region, Tanzania, just outside Mikumi National Park and a short drive from the main gate. The camp sits about 2 km away from the Dar es Salaam–Mbeya highway, in the bush, facing the Mikumi Mountains — so you hear nature rather than trucks.',
    links: [{ text: 'Map and directions', href: '/contact' }],
  },
  {
    group: 'Getting there',
    q: 'Is Camp Lilac inside Mikumi National Park?',
    a: 'No — and that is deliberate. The camp is outside the park, minutes from the main gate, so you pay park fees only for the days you actually go on a game drive, and you can arrive by train and transfer at any hour. Lodges inside the park add a concession fee to every night and need you through the gate before it closes in the evening.',
    links: [{ text: 'Where to stay in Mikumi: camps, lodges and hotels compared', href: '/where-to-stay-in-mikumi' }],
  },
  {
    group: 'Getting there',
    q: 'How do I get to Mikumi from Dar es Salaam?',
    a: 'By road it is about 300 km (5–6 hours). The quickest comfortable option is the SGR train from Dar es Salaam to Morogoro (about 1.5 hours), then a 2-hour road transfer — 3.5 hours door to door, which we provide. Booking a room only? Then the transfer is charged; ask us for the price.',
    offer: 'In November 2026, book a safari of two or more days with us and the Morogoro–Mikumi transfer is free; with three or more days we also cover your train tickets from Dar es Salaam.',
    links: [{ text: 'Getting here', href: '/getting-here' }, { text: 'Step-by-step SGR train guide', href: '/blog/dar-es-salaam-to-mikumi-by-sgr-train' }],
  },
  {
    group: 'Getting there',
    q: 'Can I do a Mikumi safari from Zanzibar?',
    a: 'Yes — Mikumi is the most practical real safari from Zanzibar. Take the morning ferry (about 2 hours) or a short flight to Dar es Salaam, then the SGR train to Morogoro where our driver meets you. You can be on a game drive the same afternoon and back on the beach two or three days later. We organise the whole journey, including ferry and flight tickets.',
    links: [{ text: 'Safari from Zanzibar', href: '/safari-from-zanzibar' }],
  },
  {
    group: 'Staying',
    q: 'Are meals included?',
    a: 'When you book directly with us, every room and tent rate includes breakfast and dinner in our restaurant. Any extra meal, such as lunch, is US$15 per person. Drinks are charged separately. On our safari packages all meals are included (full board).',
    links: [{ text: 'The restaurant and bar', href: '/restaurant' }],
  },
  {
    group: 'Staying',
    q: 'Do the tents have bathrooms and air conditioning?',
    a: 'Yes. Every luxury tent has a private bathroom with a hot shower, air conditioning, a private deck and a very comfortable bed. The two cabins have the same plus more space; the Mountain View Cabin has a bathtub with a view.',
    links: [{ text: 'Tents and cabins', href: '/rooms' }],
  },
  {
    group: 'Staying',
    q: 'Do children stay free?',
    a: 'Children aged 0–3 stay free. Ages 4–11 pay 50% of the adult rate. From 12 upwards children are priced as adults. Breakfast and dinner are included for everyone when you book direct; extra meals are US$15 per person (free for children under 4). Tell us the ages when you book and we will quote exactly.',
    links: [{ text: 'Luxury Family Tent', href: '/rooms/luxury-family-tent' }],
  },
  {
    group: 'Staying',
    q: 'What are the check-in and check-out times?',
    a: 'Check-in is from 15:00 and check-out is at 10:00. Early check-in or late check-out can often be arranged if the room is free — just ask.',
  },
  {
    group: 'Staying',
    q: 'Is Wi-Fi available?',
    a: 'Wi-Fi is available at the restaurant and bar. The tents and cabins are intentionally offline, but mobile signal usually works around the camp.',
  },
  {
    group: 'Safaris',
    q: 'Can I book a safari with you?',
    a: 'Yes. We run our own game drives in Mikumi National Park with our own guides and 4x4 vehicles, from one-day safaris to a four-day itinerary that also includes the Udzungwa Mountains waterfalls. Park fees, your guide, a private open jeep and meals are included.',
    links: [{ text: 'Safari packages', href: '/safaris' }],
  },
  {
    group: 'Safaris',
    q: 'How many days do I need for Mikumi?',
    a: 'Two days (one night) is the classic weekend from Dar es Salaam: an afternoon game drive on arrival and a dawn drive the next morning. Three days gives you a full day on the Mkata floodplain as well, which is when the lion and elephant sightings add up. Four days adds the Sanje Waterfall hike in the Udzungwa Mountains. A one-day safari works if you are already in Morogoro or on the road south.',
    links: [{ text: '2-Day Mikumi Safari', href: '/safaris/2-day-mikumi-safari' }, { text: 'All packages', href: '/safaris' }],
  },
  {
    group: 'Safaris',
    q: 'How much is the Mikumi National Park entrance fee?',
    a: 'Mikumi is one of Tanzania’s lower-priced parks: US$30 per adult plus 18% VAT per 24 hours for non-residents (US$10 plus VAT for children aged 5–15). Park fees are included in all Camp Lilac safari packages. If you enter the park independently, fees are paid to TANAPA at the gate by card, not cash.',
    links: [{ text: 'Mikumi National Park guide: fees and wildlife', href: '/mikumi-national-park' }, { text: 'What a Mikumi safari costs', href: '/blog/mikumi-safari-cost' }],
  },
  {
    group: 'Safaris',
    q: 'Mikumi or Selous (Nyerere) — which is better from Dar es Salaam?',
    a: 'For a weekend, Mikumi: it is reachable by train in 3.5 hours, park fees are less than half of Nyerere’s, and the open Mkata floodplain makes wildlife easy to see in a short time. Nyerere National Park is larger and wilder, with boat safaris on the Rufiji, but it needs a flight or a long rough drive and more days. Many guests do Mikumi first and Nyerere or Ruaha on a later trip.',
    links: [{ text: 'Mikumi vs Selous (Nyerere): which safari from Dar es Salaam?', href: '/blog/mikumi-vs-selous-nyerere' }],
  },
  {
    group: 'Safaris',
    q: 'When is the best time to visit Mikumi?',
    a: 'The dry season, June to October, gives the easiest wildlife viewing because animals gather at waterholes and the grass is short. January to February is also dry and good. The rains (March–May and November–December) bring green scenery, birds and lower prices.',
    links: [{ text: 'Best time to visit Mikumi, month by month', href: '/blog/best-time-to-visit-mikumi' }],
  },
  {
    group: 'Booking & payment',
    q: 'Do you accept card payments?',
    a: 'Yes, we accept cash and cards at the camp. Once we confirm availability, a deposit paid by secure online card link secures your booking.',
    links: [{ text: 'Rates and what’s included', href: '/rates' }],
  },
  {
    group: 'Booking & payment',
    q: 'Can I bring my dog?',
    a: 'No, pets are not allowed, as we are next to a national park with wild animals passing through the camp.',
  },
  {
    group: 'Booking & payment',
    q: 'Is the camp wheelchair accessible?',
    a: 'Unfortunately not yet. The paths and decks are on natural terrain. Contact us and we will tell you honestly whether the camp will work for you.',
  },
];

export const faqGroups = ['Getting there', 'Staying', 'Safaris', 'Booking & payment'] as const;
