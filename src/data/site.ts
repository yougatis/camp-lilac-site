// Single source of truth for business facts used across pages and structured data.
// Edit here; every page and every schema.org block picks the change up.

export const site = {
  name: 'Camp Lilac',
  legalName: 'Camp Lilac Mikumi Company Limited',
  tagline: 'Luxury tented safari camp in Mikumi, Tanzania',
  url: 'https://www.camp-lilac.com',
  email: 'info@camp-lilac.com',
  phone: '+255 740 036 915',
  phoneDisplay: '+255 740 036 915',
  whatsapp: 'https://wa.me/255740036915',
  instagram: 'https://www.instagram.com/camplilacmikumi/',
  facebook: 'https://www.facebook.com/profile.php?id=61580083590694',
  tripadvisorCamp: 'https://www.tripadvisor.com/Hotel_Review-g14050057-d27434393-Reviews-Camp_Lilac_Mikumi-Mikumi_Morogoro_Region.html',
  tripadvisorSafari: 'https://www.tripadvisor.com/Attraction_Review-g14050057-d27438197-Reviews-CAMP_LILAC_MIKUMI_SAFARIS_LTD-Mikumi_Morogoro_Region.html',
  bookingCom: '', // TODO: paste Booking.com listing URL (optional)
  address: {
    streetAddress: 'Mikumi', // TODO: street / plot description if any
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
  priceRange: '$$',
  defaultOgImage: '/images/rooms/restaurant-dusk-1200.jpg',
  languages: ['English'],
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

export const nav = [
  { label: 'Stay', href: '/rooms' },
  { label: 'Safaris', href: '/safaris' },
  { label: 'Rates', href: '/rates' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
