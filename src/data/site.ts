// Single source of truth for business facts used across pages and structured data.
// Edit here; every page and every schema.org block picks the change up.

export const site = {
  name: 'Camp Lilac',
  schemaName: 'Camp Lilac Mikumi', // the name on Google Maps, Tripadvisor and SafariBookings — schema.org uses this one
  legalName: 'Camp Lilac Mikumi Company Limited',
  tagline: 'Luxury tented safari camp in Mikumi, Tanzania',
  schemaDescription:
    'Luxury tented camp just outside Mikumi National Park, Tanzania: luxury tents and cabins with private bathrooms and air conditioning, facing the Mikumi Mountains, with in-house safari guides and 4×4s. 3.5 hours from Dar es Salaam by SGR train and transfer.',
  schemaImages: ['/images/rooms/restaurant-dusk-2000.jpg', '/images/rooms/mv-cabin-1-1600.jpg', '/images/rooms/jungle-tent-1-1600.jpg'],
  url: 'https://www.camp-lilac.com',
  email: 'info@camp-lilac.com',
  phone: '+255 740 036 915',
  phoneE164: '+255740036915',
  phoneDisplay: '+255 740 036 915',
  whatsapp: 'https://wa.me/255740036915',
  mapsUrl: 'https://www.google.com/maps/place/Camp+Lilac+Mikumi/@-7.3937545,37.028689,17z/data=!4m2!3m1!1s0x18574b730f6e30bb:0xe634ecb2de857e92',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=-7.393652721809862,37.02873796174662',
  safariBookings: 'https://www.safaribookings.com/p6212',
  instagram: 'https://www.instagram.com/camplilacmikumi/',
  facebook: 'https://www.facebook.com/profile.php?id=61580083590694',
  tripadvisorCamp: 'https://www.tripadvisor.com/Hotel_Review-g14050057-d27434393-Reviews-Camp_Lilac_Mikumi-Mikumi_Morogoro_Region.html',
  tripadvisorSafari: 'https://www.tripadvisor.com/Attraction_Review-g14050057-d27438197-Reviews-CAMP_LILAC_MIKUMI_SAFARIS_LTD-Mikumi_Morogoro_Region.html',
  bookingCom: '', // paste the Booking.com listing URL here when known (goes into schema.org sameAs)
  address: {
    streetAddress: '2 km off the Dar es Salaam–Mbeya highway, near the Mikumi National Park main gate', // change if Google Business Profile shows a different line
    addressLocality: 'Mikumi',
    addressRegion: 'Morogoro Region',
    postalCode: '67440',
    addressCountry: 'TZ',
  },
    geo: { latitude: -7.393652721809862, longitude: 37.02873796174662 },
  trainHours: '1.5', // Dar es Salaam → Morogoro by SGR
  driveHours: '2', // Morogoro → camp by road
  replyTime: 'within 4 hours during the day',
  checkIn: '15:00',
  checkOut: '10:00',
  maxGuests: 26,
  units: 10,
  currency: 'USD',
  priceRange: 'US$140–US$200',
  defaultOgImage: '/images/rooms/restaurant-dusk-1200.jpg',
  languages: ['English', 'Swahili'],
  amenities: [
    'Breakfast and dinner included (book direct)',
    'Restaurant and bar',
    'Air conditioning in every room, tents included',
    'Private bathrooms',
    'Private decks',
    'Free parking',
    'Wi-Fi at the restaurant',
    'Family rooms',
    'Airport and station transfers',
    'In-house safari guides and vehicles',
  ],
};

export const nav: { label: string; href: string; match?: string[] }[] = [
  { label: 'Stay', href: '/rooms', match: ['/where-to-stay-in-mikumi'] },
  { label: 'Safaris', href: '/safaris', match: ['/safari-from-'] },
  { label: 'Rates', href: '/rates', match: ['/offers'] },
  { label: 'Mikumi', href: '/mikumi-national-park', match: ['/blog'] },
  { label: 'Getting here', href: '/getting-here' },
  { label: 'Contact', href: '/contact' },
];
