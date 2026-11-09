// One page per ROOM TYPE (not per physical unit) — Google treats near-identical pages
// as duplicates, so "Luxury Family Tent" is one strong page covering Family Tents 1–3.
// units = how many physical units of that type exist.
// price = USD per night, breakfast and dinner included when booked direct; lunch US$15 pp. null = "rates on request" until you set it.
// images = /images/rooms/<name>-N-1600.jpg (a -900 version of each also exists).

export type Room = {
  slug: string;
  name: string;
  numeral: string;
  units: number;
  price: number | null;
  sleeps: string;
  bed: string;
  view: 'mountain' | 'jungle';
  tier: 'suite' | 'cabin' | 'tent';
  images: string[]; // first image is the cover
  imageAlt: string;
  caption: string; // small italic caption under the cover, e.g. "Deck, 06:40"
  summary: string;
  description: string[];
  highlights: string[];
  keywords: string;
  metaTitle?: string; // ≤ 62 characters; falls back to "<name> – <kind> in Mikumi | Camp Lilac"
  metaDescription?: string; // 150–160 characters; falls back to the summary, cut at a word boundary
  imageAlts?: string[]; // one alt text per image (same order as images); missing entries get a generic alt
};

const img = (key: string, n: number) => Array.from({ length: n }, (_, i) => `/images/rooms/${key}-${i + 1}-1600.jpg`);

export const rooms: Room[] = [
  {
    slug: 'mountain-view-cabin',
    imageAlts: [
      'Freestanding bathtub in the Mountain View Cabin at Camp Lilac, with the Mikumi mountain ridge through the window',
      'King-size bed with mosquito net in the Mountain View Cabin, facing the open deck and the Mikumi plains',
      'Wooden stairs up to the thatched Mountain View Cabin at Camp Lilac, Mikumi, under a tree at sunset',
      'The wide private deck of the Mountain View Cabin looking out over the bush towards the Mikumi Mountains',
      'Deck chairs on the Mountain View Cabin deck at golden hour, with the Mikumi mountain ridge on the horizon',
      'Morning light across the floor of the Mountain View Cabin, with the king-size bed and the view beyond',
      'Open wardrobe shelves and air-conditioning unit inside the Mountain View Cabin at Camp Lilac',
      'Inside the Mountain View Cabin: thatched ceiling, hardwood floor and glass doors opening onto the deck',
      'The Mountain View Cabin deck at sunset, framed by the thatched roof, looking towards the Mikumi Mountains',
      'Bathroom of the Mountain View Cabin with a freestanding bathtub, twin basins and a view into the bush',
    ],
    metaTitle: 'Mountain View Cabin – Private Cabin in Mikumi | Camp Lilac',
    metaDescription: 'Our best room: a private thatched cabin facing the Mikumi mountain ridge, with a wide deck, a king-size bed and a bathtub with a view. From US$200/night.',
    name: 'Mountain View Cabin',
    numeral: 'i',
    units: 1,
    price: 200,
    sleeps: '2 adults',
    bed: 'King-size bed',
    view: 'mountain',
    tier: 'suite',
    images: img('mv-cabin', 10),
    imageAlt: 'Freestanding bathtub in the Mountain View Cabin at Camp Lilac, with the Mikumi mountain ridge through the window',
    caption: 'The bathroom, 17:50',
    summary:
      'Our best room: a private thatched cabin facing the Mikumi mountain ridge, with a wide deck, a king-size bed and a bathtub with a view.',
    description: [
      'The Mountain View Cabin is the most luxurious accommodation in Mikumi and the wider Morogoro region, in a one-of-a-kind position with uninterrupted views of the mountain range. You wake up to the hills and end the day watching the sunset from the deck or from the bath.',
      'Natural wood details and wide windows bring the landscape inside. There is a plush king-size bed under the thatched roof, modern air conditioning, and a beautifully designed bathroom with a freestanding bathtub set against a window onto the bush. From the deck you watch impala, warthog and monkeys wander past — a safari experience without leaving the cabin.',
      'Wilderness, exclusivity and indulgence in one place: for couples who want the comfort of a lodge with the setting of a safari camp. Booked direct, breakfast and dinner in our restaurant are included; lunch is US$15 per person (drinks extra), which shares the same ridge view.',
    ],
    highlights: [
      'Faces the Mikumi mountain ridge',
      'Wide private deck for sunsets',
      'Freestanding bathtub with a view',
      'King-size bed, air conditioning, private bathroom',
      'Breakfast and dinner included — lunch US$15 per person',
    ],
    keywords: 'luxury cabin Mikumi with mountain view',
  },
  {
    slug: 'luxury-mountain-view-tent',
    imageAlts: [
      'Luxury Mountain View Tent at Camp Lilac with the bed looking straight out through the open front to the Mikumi Mountains',
      'Armchair and table on the raised deck of a Luxury Mountain View Tent at sunset',
      'A Luxury Mountain View Tent on its raised wooden platform in the Mikumi bush at dusk',
      'Wooden steps leading up to the deck of a Luxury Mountain View Tent at Camp Lilac',
      'Private deck of a Luxury Mountain View Tent with a view over the bush to the Mikumi mountain ridge',
      'King-size bed under a canvas roof inside a Luxury Mountain View Tent, with hardwood floor and armchairs',
      'Entrance to the private bathroom of a Luxury Mountain View Tent, with mirror, basin and armchair',
      'Private bathroom in a Luxury Mountain View Tent: round mirror, twin basins and air conditioning',
      'View from the bed of a Luxury Mountain View Tent towards the Mikumi Mountains at sunrise',
      'Wooden bench on the deck of a Luxury Mountain View Tent at Camp Lilac, looking into the bush',
      'Sunset over the Mikumi bush seen from the deck of a Luxury Mountain View Tent',
    ],
    metaTitle: 'Luxury Mountain View Tent – Safari Tent, Mikumi | Camp Lilac',
    metaDescription: 'Our newest luxury tents face the Mikumi mountain ridge: raised deck, king-size bed, private bathroom, A/C and the best sunset in Mikumi. From US$150 a night.',
    name: 'Luxury Mountain View Tent',
    numeral: 'ii',
    units: 2,
    price: 150,
    sleeps: '2 adults',
    bed: 'King-size bed (or two single beds on request)',
    view: 'mountain',
    tier: 'tent',
    images: img('mv-tent', 11),
    imageAlt: 'Luxury Mountain View Tent at Camp Lilac facing the Mikumi mountain ridge',
    caption: 'Facing the Mikumi mountain ridge',
    summary:
      'Our newest tents: the same luxury canvas tent as the Luxury Jungle Tents, turned to face the Mikumi mountain ridge — with the best sunset in Mikumi from your own deck.',
    description: [
      'The Luxury Mountain View Tents opened in late 2026. They combine the authentic tented experience of the Luxury Jungle Tents with the Mikumi mountain ridge view of the Mountain View Cabin.',
      'Each tent sits on a raised hardwood deck facing the mountains, with a king-size bed, a full private bathroom, air conditioning and very comfortable beds. In the evening the Mikumi mountain ridge turns gold and then lilac — the view the camp is named after.',
      'Ideal for couples who want the safari feeling of a tent and the scenery of the mountains.',
    ],
    highlights: [
      'Faces the Mikumi mountain ridge',
      'Luxury canvas tent on a raised deck',
      'Private bathroom and air conditioning',
      'Opened late 2026',
      'Breakfast and dinner included — lunch US$15 per person',
    ],
    keywords: 'tented camp Mikumi mountain view',
  },
  {
    slug: 'jungle-cabin',
    imageAlts: [
      'King-size bed in the Jungle Cabin at Camp Lilac, with doors open to the wraparound deck and the trees',
      'King-size bed with mosquito net in the Jungle Cabin, morning light through the windows',
      'Wooden stairs up to the thatched Jungle Cabin at Camp Lilac, set among miombo trees',
      'The wraparound deck of the Jungle Cabin under its thatched roof, looking into the bush',
      'Table and chairs on the Jungle Cabin deck, shaded by the thatch, with the trees beyond',
      'The thatched roof and wooden railings of the Jungle Cabin at Camp Lilac, Mikumi',
      'Looking into the Jungle Cabin from the deck: king-size bed, hardwood floor and glass doors',
      'Hallway inside the Jungle Cabin with a painting of a giraffe, leading to the bathroom',
      'Marble bathroom of the Jungle Cabin with rain shower, twin basins and a backlit mirror',
      'Backlit mirror and basin in the marble bathroom of the Jungle Cabin at Camp Lilac',
      'The Jungle Cabin at Camp Lilac seen from the path, with its thatched roof among the trees',
    ],
    metaTitle: 'Jungle Cabin – Private Cabin near Mikumi Park | Camp Lilac',
    metaDescription: 'A private thatched cabin among the trees: wraparound deck, king-size bed, marble bathroom with rain shower, the sounds of the Mikumi bush. From US$160/night.',
    name: 'Jungle Cabin',
    numeral: 'iii',
    units: 1,
    price: 160,
    sleeps: '2 adults',
    bed: 'King-size bed',
    view: 'jungle',
    tier: 'cabin',
    images: img('jungle-cabin', 11),
    imageAlt: 'Jungle Cabin at Camp Lilac with its thatched roof and wooden stairs, set among miombo trees',
    caption: 'From the path, 07:15',
    summary:
      'A private thatched cabin among the trees: a long wraparound deck, a king-size bed, a marble bathroom and the sounds of the Mikumi bush all around.',
    description: [
      'The Jungle Cabin is a private luxury house set high among the trees, surrounded by green jungle. A spacious wraparound deck circles it, with a table and chairs and a view into the canopy where monkeys and impala move through in the early morning.',
      'Inside, warm wooden floors, exposed ceiling beams and tasteful art give it an inviting, elegant feel. Floor-to-ceiling windows and wide glass doors let in the light and the sounds of the forest, so the jungle becomes part of the living space. The large bedroom — king-size bed, plush bedding, air conditioning — opens straight onto the deck, the best spot for morning coffee or sunset. The bathroom is marble and timber with a walk-in rain shower.',
      'Fall asleep to crickets and distant animal calls, and watch for passing wildlife from the doorstep by day. For couples and for anyone who prefers solid walls to canvas but still wants to feel the bush.',
    ],
    highlights: [
      'Private cabin surrounded by trees',
      'Wraparound deck with table and chairs',
      'Marble bathroom with rain shower',
      'King-size bed, air conditioning',
      'Breakfast and dinner included — lunch US$15 per person',
    ],
    keywords: 'private cabin near Mikumi National Park',
  },
  {
    slug: 'luxury-jungle-tent',
    imageAlts: [
      'King-size bed with mosquito net in a Luxury Jungle Tent at Camp Lilac, hardwood floor and deck beyond',
      'Dressing area and basin inside a Luxury Jungle Tent, with canvas walls and a view of the trees',
      'Wooden steps up to the deck of a Luxury Jungle Tent on its raised platform in the Mikumi bush',
      'A Luxury Jungle Tent at Camp Lilac with its canvas front open to the deck and the bush',
      'The private deck of a Luxury Jungle Tent, with chairs looking into the miombo woodland',
      'Private bathroom of a Luxury Jungle Tent with a round mirror, basin and hardwood floor',
      'Twin basins and round mirror in the private bathroom of a Luxury Jungle Tent at Camp Lilac',
      'King bed under a mosquito net in a Luxury Jungle Tent, with the deck and trees through the open front',
    ],
    metaTitle: 'Luxury Jungle Tent – Safari Tent with Private Bathroom, Mikumi',
    metaDescription: 'A luxury canvas tent on a raised deck near Mikumi National Park: king-size bed, private bathroom, A/C, wildlife past the steps. From US$140 a night.',
    name: 'Luxury Jungle Tent',
    numeral: 'iv',
    units: 3,
    price: 140,
    sleeps: '2 adults',
    bed: 'King-size bed (or two single beds on request)',
    view: 'jungle',
    tier: 'tent',
    images: img('jungle-tent', 8),
    imageAlt: 'Luxury safari tent at Camp Lilac on a raised wooden deck under the trees near Mikumi National Park',
    caption: 'Tent two, late morning',
    summary:
      'The classic safari stay: a luxury canvas tent on a raised hardwood deck, with a king-size bed, private bathroom, air conditioning and wildlife walking past the steps.',
    description: [
      'The Luxury Jungle Tents are what Camp Lilac is known for — spacious canvas safari tents on elevated polished wooden decks, with the comforts most tented camps in Mikumi do not offer: a private bathroom with a walk-in rain shower, air conditioning and the softest beds in the region.',
      'Each tent has a plush king-sized bed under a mosquito net, large mesh windows for the natural breeze, smooth timber floors and warm ambient lighting — rustic and elegant at once. The private veranda has handcrafted chairs facing the bush; impala, warthog and monkeys regularly pass right by, and at night the only sound is the wildlife.',
      'If you want the real safari feeling without giving up a good night’s sleep, this is the tent to book.',
    ],
    highlights: [
      'Luxury canvas safari tent on a raised deck',
      'Private bathroom and air conditioning',
      'Plush king bed under a mosquito net, mesh windows',
      'Private deck — wildlife passes right by',
      'Breakfast and dinner included — lunch US$15 per person',
    ],
    keywords: 'luxury safari tent Mikumi',
  },
  {
    slug: 'luxury-family-tent',
    imageAlts: [
      'The private deck of a Luxury Family Tent at Camp Lilac, with chairs looking into the bush',
      'Private bathroom of a Luxury Family Tent with basin, mirror and a window onto the trees',
      'A Luxury Family Tent on its raised deck under a blue sky in the Mikumi bush',
      'Double bed with mosquito net in a Luxury Family Tent, with hardwood floor and canvas walls',
      'View from the bed of a Luxury Family Tent towards the deck and the bush',
      'Inside a Luxury Family Tent: the double bed and the two single beds for children',
      'Private bathroom in a Luxury Family Tent with twin basins, round mirror and hardwood floor',
      'A Luxury Family Tent with the canvas front open, showing the beds and the private deck',
      'Two single beds for children in a Luxury Family Tent at Camp Lilac, with the deck beyond',
    ],
    metaTitle: 'Luxury Family Tent – Safari Tent for 4, Mikumi | Camp Lilac',
    metaDescription: 'A luxury safari tent for parents and two children near Mikumi National Park: private bathroom, A/C, private deck. Under-4s free, 4–11 half price. From US$200.',
    name: 'Luxury Family Tent',
    numeral: 'v',
    units: 3,
    price: 200,
    sleeps: '2 adults + 2 children (up to 4 guests)',
    bed: 'Double bed plus two single beds',
    view: 'jungle',
    tier: 'tent',
    images: img('family-tent', 9),
    imageAlt: 'The private deck of a Luxury Family Tent at Camp Lilac, looking into the bush',
    caption: 'Room for four',
    summary:
      'A spacious luxury safari tent for families: room for parents and two children, a private bathroom, air conditioning and a private deck. Children under 4 stay free; ages 4–11 at half the adult rate.',
    description: [
      'The Luxury Family Tents are built for parents who want their children to experience a real safari camp without compromising on comfort. Each tent sleeps up to four, with a double bed and two single beds in one spacious canvas tent on a raised deck.',
      'There is a full private bathroom, air conditioning and a private deck where the kids can spot impala and monkeys before breakfast. The camp is quiet and set away from the highway, so children sleep well.',
      'Children aged 0–3 stay free. Ages 4–11 pay half the adult rate, and from 12 they are priced as adults. Booked direct, breakfast and dinner are included; lunch is US$15 per person, free for under-4s. Our guides are used to families on game drives and adjust the pace for younger travellers.',
    ],
    highlights: [
      'Sleeps up to 4 — one family in one tent',
      'Under-4s free, ages 4–11 half price',
      'Private bathroom and air conditioning',
      'Private deck on a raised platform',
      'Family-friendly safari guides',
    ],
    keywords: 'family safari accommodation Mikumi',
  },
];

export const roomBySlug = (slug: string) => rooms.find((r) => r.slug === slug);
export const cover = (r: Room) => r.images[0] ?? '/images/placeholder-tent.svg';
