// Review sources — update counts when they change.
export const sources = [
  { platform: 'Google', logo: '/images/logo-google.png', score: 4.9, count: 78, url: 'https://www.google.com/maps/place/Camp+Lilac+Mikumi/@-7.3937545,37.028689,17z/data=!4m2!3m1!1s0x18574b730f6e30bb:0xe634ecb2de857e92' },
  { platform: 'Tripadvisor', logo: '/images/logo-tripadvisor.png', score: 5.0, count: 13, url: 'https://www.tripadvisor.com/Hotel_Review-g14050057-d27434393-Reviews-Camp_Lilac_Mikumi-Mikumi_Morogoro_Region.html' },
  { platform: 'SafariBookings', logo: '/images/logo-safaribookings.png', score: 4.9, count: 51, url: 'https://www.safaribookings.com/reviews/p6212' },
];
export const safariSource = { platform: 'Tripadvisor (safaris)', score: 4.9, count: 19, url: 'https://www.tripadvisor.com/Attraction_Review-g14050057-d27438197-Reviews-CAMP_LILAC_MIKUMI_SAFARIS_LTD-Mikumi_Morogoro_Region.html' };
export const totalReviews = sources.reduce((n, s) => n + s.count, 0);
export const reviewScore = { score: 4.9, count: totalReviews, platform: 'Google, Tripadvisor & SafariBookings', url: sources[0].url };

export const reviews = [
  { name: 'Famille C.', country: 'France', date: 'June 2026', platform: 'Tripadvisor', title: 'Wonderful', text: 'A fantastic welcome and a luxurious room in the heart of Mikumi. A slice of paradise for nature lovers — a superb experience.' },
  { name: 'Genevieve', country: 'Hong Kong', date: 'October 2026', platform: 'SafariBookings', title: 'Relaxed and informative', text: 'A weekend trip from Dar es Salaam. Guides Saloniki and Johana added new insight to a park I already knew well — and we were the first car to spot the lions.' },
  { name: 'Iļja S.', country: 'Latvia', date: 'October 2026', platform: 'Tripadvisor', title: 'What is that place?', text: 'Safari-style tents, the wooden terrace, and the mountain views from the open-air dining area.' },
  { name: 'Larry L.', country: '', date: 'March 2026', platform: 'Tripadvisor', title: 'Two days in Mikumi National Park', text: 'Door-to-door trip well organised, friendly guides, quiet surroundings and an excellent evening meal.' },
  { name: 'Nassima & Karim', country: 'Algeria', date: 'August 2026', platform: 'SafariBookings', title: 'A true human adventure', text: 'Merice, Loshuku and Saloniki handled every detail. Our driver read the animals’ movements and positioned the car perfectly.' },
  { name: 'Ursina', country: 'Switzerland', date: 'July 2026', platform: 'SafariBookings', title: 'Absolutely amazing', text: 'The camp is well organised and well equipped, the staff warm and attentive, and the team tailored the stay to what we needed.' },
];
