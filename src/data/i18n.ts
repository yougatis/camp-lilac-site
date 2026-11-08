// Languages of the website and the URL of every translated page.
// The layout (Base.astro) uses this for the language switcher, the hreflang tags and the translated nav/footer.
// English-only pages (blog, park guide, deals…) have no entry: switching language there goes to that language's home page.

export const langs = ['en', 'it', 'fr', 'de', 'es'] as const;
export type Lang = (typeof langs)[number];

export const langNames: Record<Lang, string> = { en: 'English', it: 'Italiano', fr: 'Français', de: 'Deutsch', es: 'Español' };

// One row per page: the English path, then the path of each translation.
const pages: Record<Lang, string>[] = [
  { en: '/', it: '/it', fr: '/fr', de: '/de', es: '/es' },
  { en: '/rooms', it: '/it/tende-e-cabin', fr: '/fr/tentes-et-cabines', de: '/de/zelte-und-cabins', es: '/es/tiendas-y-cabanas' },
  { en: '/safaris', it: '/it/safari-mikumi', fr: '/fr/safaris-mikumi', de: '/de/mikumi-safaris', es: '/es/safaris-mikumi' },
  { en: '/rates', it: '/it/prezzi', fr: '/fr/tarifs', de: '/de/preise', es: '/es/precios' },
  { en: '/getting-here', it: '/it/come-arrivare', fr: '/fr/comment-venir', de: '/de/anreise', es: '/es/como-llegar' },
  { en: '/contact', it: '/it/contatti', fr: '/fr/contact', de: '/de/kontakt', es: '/es/contacto' },
  { en: '/faq', it: '/it/domande', fr: '/fr/questions', de: '/de/fragen', es: '/es/preguntas' },
  { en: '/book', it: '/it/prenota', fr: '/fr/reserver', de: '/de/buchen', es: '/es/reservar' },
  { en: '/thank-you', it: '/it/grazie', fr: '/fr/merci', de: '/de/danke', es: '/es/gracias' },
  { en: '/restaurant', it: '/it/ristorante', fr: '/fr/restaurant', de: '/de/restaurant', es: '/es/restaurante' },
  { en: '/about', it: '/it/chi-siamo', fr: '/fr/a-propos', de: '/de/ueber-uns', es: '/es/sobre-nosotros' },
  { en: '/safari-from-zanzibar', it: '/it/safari-da-zanzibar', fr: '/fr/safari-depuis-zanzibar', de: '/de/safari-ab-sansibar', es: '/es/safari-desde-zanzibar' },
  { en: '/safari-from-dar-es-salaam', it: '/it/safari-da-dar-es-salaam', fr: '/fr/safari-depuis-dar-es-salaam', de: '/de/safari-ab-dar-es-salaam', es: '/es/safari-desde-dar-es-salaam' },
];

// Room and safari detail pages keep the English slug under the translated section path,
// e.g. /rooms/mountain-view-cabin -> /fr/tentes-et-cabines/mountain-view-cabin.
const sections: { en: string; key: string }[] = [
  { en: '/rooms/', key: '/rooms' },
  { en: '/safaris/', key: '/safaris' },
];

const rowOf = (path: string): Record<Lang, string> | undefined => pages.find((r) => langs.some((l) => r[l] === path));

/** The language a clean path belongs to. */
export function langOf(path: string): Lang {
  const m = path.match(/^\/(it|fr|de|es)(\/|$)/);
  return (m ? m[1] : 'en') as Lang;
}

/** Every language version of a clean path, or null if the page exists only in English. */
export function versionsOf(path: string): Record<Lang, string> | null {
  const row = rowOf(path);
  if (row) return row;
  for (const s of sections) {
    const base = pages.find((r) => r.en === s.key)!;
    for (const l of langs) {
      const prefix = (l === 'en' ? s.en : base[l] + '/');
      if (path.startsWith(prefix) && path.length > prefix.length) {
        const slug = path.slice(prefix.length);
        if (slug.includes('/')) return null;
        return Object.fromEntries(langs.map((x) => [x, x === 'en' ? s.en + slug : base[x] + '/' + slug])) as Record<Lang, string>;
      }
    }
  }
  return null;
}

/** The URL of an English path in another language; falls back to the English page when it isn't translated. */
export function localize(enPath: string, lang: Lang): string {
  if (lang === 'en') return enPath;
  const v = versionsOf(enPath);
  return v ? v[lang] : enPath;
}

// Text of the shared header and footer.
export const ui: Record<Lang, {
  nav: { stay: string; safaris: string; rates: string; mikumi: string; gettingHere: string; contact: string };
  cta: string; reviews: string; skip: string; menu: string; whatsappAria: string; language: string;
  footerTagline: string; footerStay: string; footerMikumi: string; footerContact: string; footerReviews: string; footerLangs: string;
  links: { rooms: string; rates: string; restaurant: string; about: string; book: string; faq: string; safaris: string; fromDar: string; fromZanzibar: string; park: string; whereToStay: string; gettingHere: string; blog: string; offers: string };
  checkIn: string; checkOut: string; englishOnly: string;
}> = {
  en: {
    nav: { stay: 'Stay', safaris: 'Safaris', rates: 'Rates', mikumi: 'Mikumi', gettingHere: 'Getting here', contact: 'Contact' },
    cta: 'Plan my stay', reviews: 'reviews', skip: 'Skip to content', menu: 'Menu', whatsappAria: 'WhatsApp us', language: 'Language',
    footerTagline: 'Luxury tented safari camp just outside Mikumi National Park, Morogoro Region, Tanzania.',
    footerStay: 'Stay', footerMikumi: 'Mikumi', footerContact: 'Contact', footerReviews: 'Reviews', footerLangs: 'Languages',
    links: { rooms: 'Tents & cabins', rates: 'Rates', restaurant: 'Restaurant & bar', about: 'About the camp', book: 'Check availability', faq: 'Questions', safaris: 'Safari packages', fromDar: 'Safari from Dar es Salaam', fromZanzibar: 'Safari from Zanzibar', park: 'Mikumi National Park guide', whereToStay: 'Where to stay in Mikumi', gettingHere: 'Getting here', blog: 'Blog', offers: 'Safari deals' },
    checkIn: 'Check-in', checkOut: 'Check-out', englishOnly: '',
  },
  it: {
    nav: { stay: 'Soggiorno', safaris: 'Safari', rates: 'Prezzi', mikumi: 'Mikumi', gettingHere: 'Come arrivare', contact: 'Contatti' },
    cta: 'Prenota', reviews: 'recensioni', skip: 'Vai al contenuto', menu: 'Menu', whatsappAria: 'Scriveteci su WhatsApp', language: 'Lingua',
    footerTagline: 'Campo tendato di lusso appena fuori dal Parco Nazionale di Mikumi, regione di Morogoro, Tanzania.',
    footerStay: 'Soggiorno', footerMikumi: 'Mikumi', footerContact: 'Contatti', footerReviews: 'Recensioni', footerLangs: 'Lingue',
    links: { rooms: 'Tende di lusso e cabin', rates: 'Prezzi', restaurant: 'Ristorante e bar', about: 'Chi siamo', book: 'Verifica disponibilità', faq: 'Domande frequenti', safaris: 'Pacchetti safari', fromDar: 'Safari da Dar es Salaam', fromZanzibar: 'Safari da Zanzibar', park: 'Guida al parco (in inglese)', whereToStay: 'Dove dormire a Mikumi (in inglese)', gettingHere: 'Come arrivare', blog: 'Blog (in inglese)', offers: 'Offerte safari (in inglese)' },
    checkIn: 'Check-in', checkOut: 'Check-out', englishOnly: 'Questa pagina è disponibile solo in inglese.',
  },
  fr: {
    nav: { stay: 'Séjourner', safaris: 'Safaris', rates: 'Tarifs', mikumi: 'Mikumi', gettingHere: 'Venir', contact: 'Contact' },
    cta: 'Réserver', reviews: 'avis', skip: 'Aller au contenu', menu: 'Menu', whatsappAria: 'Écrivez-nous sur WhatsApp', language: 'Langue',
    footerTagline: 'Camp de tentes de luxe juste à l’extérieur du parc national de Mikumi, région de Morogoro, Tanzanie.',
    footerStay: 'Séjourner', footerMikumi: 'Mikumi', footerContact: 'Contact', footerReviews: 'Avis', footerLangs: 'Langues',
    links: { rooms: 'Tentes de luxe et cabines', rates: 'Tarifs', restaurant: 'Restaurant et bar', about: 'Le camp', book: 'Disponibilités', faq: 'Questions fréquentes', safaris: 'Formules safari', fromDar: 'Safari depuis Dar es Salaam', fromZanzibar: 'Safari depuis Zanzibar', park: 'Guide du parc (en anglais)', whereToStay: 'Où dormir à Mikumi (en anglais)', gettingHere: 'Comment venir', blog: 'Blog (en anglais)', offers: 'Offres safari (en anglais)' },
    checkIn: 'Arrivée', checkOut: 'Départ', englishOnly: 'Cette page n’existe qu’en anglais.',
  },
  de: {
    nav: { stay: 'Unterkunft', safaris: 'Safaris', rates: 'Preise', mikumi: 'Mikumi', gettingHere: 'Anreise', contact: 'Kontakt' },
    cta: 'Anfragen', reviews: 'Bewertungen', skip: 'Zum Inhalt', menu: 'Menü', whatsappAria: 'Schreiben Sie uns auf WhatsApp', language: 'Sprache',
    footerTagline: 'Luxus-Zeltcamp knapp außerhalb des Mikumi-Nationalparks, Region Morogoro, Tansania.',
    footerStay: 'Unterkunft', footerMikumi: 'Mikumi', footerContact: 'Kontakt', footerReviews: 'Bewertungen', footerLangs: 'Sprachen',
    links: { rooms: 'Luxuszelte und Cabins', rates: 'Preise', restaurant: 'Restaurant und Bar', about: 'Über uns', book: 'Verfügbarkeit anfragen', faq: 'Häufige Fragen', safaris: 'Safari-Pakete', fromDar: 'Safari ab Dar es Salaam', fromZanzibar: 'Safari von Sansibar', park: 'Parkführer (auf Englisch)', whereToStay: 'Unterkünfte in Mikumi (auf Englisch)', gettingHere: 'Anreise', blog: 'Blog (auf Englisch)', offers: 'Safari-Angebote (auf Englisch)' },
    checkIn: 'Check-in', checkOut: 'Check-out', englishOnly: 'Diese Seite gibt es nur auf Englisch.',
  },
  es: {
    nav: { stay: 'Estancia', safaris: 'Safaris', rates: 'Precios', mikumi: 'Mikumi', gettingHere: 'Cómo llegar', contact: 'Contacto' },
    cta: 'Reservar', reviews: 'opiniones', skip: 'Ir al contenido', menu: 'Menú', whatsappAria: 'Escríbanos por WhatsApp', language: 'Idioma',
    footerTagline: 'Campamento de tiendas de lujo justo fuera del Parque Nacional de Mikumi, región de Morogoro, Tanzania.',
    footerStay: 'Alojamiento', footerMikumi: 'Mikumi', footerContact: 'Contacto', footerReviews: 'Opiniones', footerLangs: 'Idiomas',
    links: { rooms: 'Tiendas de lujo y cabañas', rates: 'Precios', restaurant: 'Restaurante y bar', about: 'Sobre nosotros', book: 'Consultar disponibilidad', faq: 'Preguntas frecuentes', safaris: 'Paquetes de safari', fromDar: 'Safari desde Dar es Salaam', fromZanzibar: 'Safari desde Zanzíbar', park: 'Guía del parque (en inglés)', whereToStay: 'Dónde dormir en Mikumi (en inglés)', gettingHere: 'Cómo llegar', blog: 'Blog (en inglés)', offers: 'Ofertas de safari (en inglés)' },
    checkIn: 'Entrada', checkOut: 'Salida', englishOnly: 'Esta página solo está disponible en inglés.',
  },
};
