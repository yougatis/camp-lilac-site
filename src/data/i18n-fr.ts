// French wording shared by the pages in src/pages/fr. Keyed by the ENGLISH slug / id.
// Prices, capacities, order, photos and dates always come from rooms.ts, safaris.ts, offers.ts and site.ts:
// this file only holds words. When a key is missing, the helpers fall back to the English data.
// Hand-written; ask a French speaker to read it once before promoting the French pages.
import { localize } from './i18n';
import type { Room } from './rooms';
import type { Safari } from './safaris';

// ---------- Links ----------
// Anchors that have a French name on the French pages.
const anchorFr: Record<string, string> = {
  '/getting-here#road': '/fr/comment-venir#route',
  '/getting-here#south': '/fr/comment-venir#sud',
  '/safari-from-zanzibar#flight': '/fr/safari-depuis-zanzibar#vol',
};
/** French URL of an English path (keeps ?query and #hash); English URL when the page has no French version. */
export function lf(enPath: string): string {
  if (anchorFr[enPath]) return anchorFr[enPath];
  const m = enPath.match(/^([^?#]*)(.*)$/)!;
  return localize(m[1] || '/', 'fr') + m[2];
}
/** True when the page exists only in English (link text then gets "(en anglais)"). */
export function enOnly(enPath: string): boolean {
  const base = enPath.split(/[?#]/)[0] || '/';
  return localize(base, 'fr') === base;
}
export const EN = ' (en anglais)';

// ---------- Small helpers ----------
export const jours = (n: number) => (n === 1 ? '1 jour' : `${n} jours`);
const months: Record<string, string> = { January: 'janvier', February: 'février', March: 'mars', April: 'avril', May: 'mai', June: 'juin', July: 'juillet', August: 'août', September: 'septembre', October: 'octobre', November: 'novembre', December: 'décembre' };
/** "June 2026" -> "juin 2026" */
export const frDate = (d: string) => d.replace(/[A-Z][a-z]+/g, (m) => months[m] ?? m);
const countries: Record<string, string> = { France: 'France', 'Hong Kong': 'Hong Kong', Latvia: 'Lettonie', Algeria: 'Algérie', Switzerland: 'Suisse', Germany: 'Allemagne', Italy: 'Italie', Spain: 'Espagne', Belgium: 'Belgique', 'United Kingdom': 'Royaume-Uni', 'United States': 'États-Unis', Tanzania: 'Tanzanie', Kenya: 'Kenya' };
export const frCountry = (c: string) => countries[c] ?? c;
export const replyHours = (replyTime: string) => replyTime.match(/\d+/)?.[0] ?? '4';
/** French version of site.replyTime ("within 4 hours during the day"). */
export const frReply = (replyTime: string) => `en général sous ${replyHours(replyTime)} heures dans la journée`;

// ---------- Rooms ----------
type RoomFr = {
  gloss: string; // short French gloss shown once next to the English product name
  kind: string;
  sleeps: string;
  bed: string;
  caption: string;
  imageAlt: string;
  imageAlts: string[];
  summary: string;
  description: string[];
  highlights: string[];
  metaTitle: string; // ≤ 60 characters
  metaDescription: (price: number | null) => string; // ≤ 158 characters
};

const lunch = 'Petit-déjeuner et dîner inclus — déjeuner US$15 par personne';
const dès = (p: number | null, unit: string) => (p ? ` Dès US$${p}${unit}.` : '');

export const roomFr: Record<string, RoomFr> = {
  'mountain-view-cabin': {
    gloss: 'cabine vue sur les monts',
    kind: 'Cabine privée',
    sleeps: '2 adultes',
    bed: 'Lit king size',
    caption: 'La salle de bain, 17:50',
    imageAlt: 'Baignoire îlot de la Mountain View Cabin à Camp Lilac, avec la chaîne des monts Mikumi par la fenêtre',
    imageAlts: [
      'Baignoire îlot de la Mountain View Cabin à Camp Lilac, avec la chaîne des monts Mikumi par la fenêtre',
      'Lit king size avec moustiquaire dans la Mountain View Cabin, face à la terrasse ouverte et aux plaines de Mikumi',
      'Escalier en bois menant à la Mountain View Cabin au toit de chaume, sous un arbre au coucher du soleil',
      'La grande terrasse privée de la Mountain View Cabin, face à la brousse et aux monts Mikumi',
      'Transats sur la terrasse de la Mountain View Cabin à l’heure dorée, avec la chaîne des monts Mikumi à l’horizon',
      'Lumière du matin sur le parquet de la Mountain View Cabin, avec le lit king size et la vue au-delà',
      'Penderie ouverte et climatiseur dans la Mountain View Cabin à Camp Lilac',
      'Intérieur de la Mountain View Cabin : plafond de chaume, parquet en bois massif et portes vitrées ouvrant sur la terrasse',
      'La terrasse de la Mountain View Cabin au coucher du soleil, encadrée par le toit de chaume, face aux monts Mikumi',
      'Salle de bain de la Mountain View Cabin avec baignoire îlot, double vasque et vue sur la brousse',
    ],
    summary: 'Notre plus belle chambre : une cabine privée au toit de chaume face à la chaîne des monts Mikumi, avec une large terrasse, un lit king size et une baignoire avec vue.',
    description: [
      'La Mountain View Cabin est l’hébergement le plus luxueux de Mikumi et de toute la région de Morogoro, dans un emplacement unique avec une vue dégagée sur la chaîne de montagnes. Vous vous réveillez face aux collines et terminez la journée en regardant le coucher du soleil depuis la terrasse ou depuis la baignoire.',
      'Les détails en bois naturel et les grandes fenêtres font entrer le paysage à l’intérieur. Sous le toit de chaume : un lit king size très confortable, une climatisation moderne et une belle salle de bain avec une baignoire îlot placée devant une fenêtre ouverte sur la brousse. Depuis la terrasse, vous voyez passer impalas, phacochères et singes : un safari sans quitter la cabine.',
      'Nature sauvage, intimité et confort au même endroit : pour les couples qui veulent le confort d’un lodge dans le décor d’un camp de safari. En réservation directe, le petit-déjeuner et le dîner dans notre restaurant sont inclus ; le déjeuner coûte US$15 par personne (boissons en sus), avec la même vue sur la chaîne des monts Mikumi.',
    ],
    highlights: [
      'Face à la chaîne des monts Mikumi',
      'Grande terrasse privée pour les couchers de soleil',
      'Baignoire îlot avec vue',
      'Lit king size, climatisation, salle de bain privée',
      lunch,
    ],
    metaTitle: 'Mountain View Cabin – cabine privée à Mikumi | Camp Lilac',
    metaDescription: (p) => `Notre plus belle chambre : cabine au toit de chaume face aux monts Mikumi, grande terrasse, lit king size et baignoire avec vue.${dès(p, '/nuit')}`,
  },
  'luxury-mountain-view-tent': {
    gloss: 'tente de luxe vue sur les monts',
    kind: 'Tente de safari de luxe',
    sleeps: '2 adultes',
    bed: 'Lit king size (ou deux lits simples sur demande)',
    caption: 'Face à la chaîne des monts Mikumi',
    imageAlt: 'Luxury Mountain View Tent à Camp Lilac, face à la chaîne des monts Mikumi',
    imageAlts: [
      'Luxury Mountain View Tent à Camp Lilac : depuis le lit, la vue file par l’avant ouvert jusqu’aux monts Mikumi',
      'Fauteuil et table sur la terrasse surélevée d’une Luxury Mountain View Tent au coucher du soleil',
      'Une Luxury Mountain View Tent sur sa plateforme en bois surélevée dans la brousse de Mikumi, au crépuscule',
      'Marches en bois menant à la terrasse d’une Luxury Mountain View Tent à Camp Lilac',
      'Terrasse privée d’une Luxury Mountain View Tent avec vue sur la brousse et la chaîne des monts Mikumi',
      'Lit king size sous le toit de toile d’une Luxury Mountain View Tent, avec parquet et fauteuils',
      'Entrée de la salle de bain privée d’une Luxury Mountain View Tent, avec miroir, vasque et fauteuil',
      'Salle de bain privée d’une Luxury Mountain View Tent : miroir rond, double vasque et climatisation',
      'Vue depuis le lit d’une Luxury Mountain View Tent vers les monts Mikumi au lever du soleil',
      'Banc en bois sur la terrasse d’une Luxury Mountain View Tent à Camp Lilac, face à la brousse',
      'Coucher de soleil sur la brousse de Mikumi vu depuis la terrasse d’une Luxury Mountain View Tent',
    ],
    summary: 'Nos tentes de luxe les plus récentes : la même tente de luxe en toile que les Luxury Jungle Tents, tournée vers la chaîne des monts Mikumi, avec le plus beau coucher de soleil de Mikumi depuis votre propre terrasse.',
    description: [
      'Les Luxury Mountain View Tents ont ouvert fin 2026. Elles réunissent l’expérience authentique des Luxury Jungle Tents et la vue sur la chaîne des monts Mikumi de la Mountain View Cabin.',
      'Chaque tente de luxe repose sur une terrasse surélevée en bois massif tournée vers les montagnes, avec un lit king size, une vraie salle de bain privée, la climatisation et une literie très confortable. Le soir, la chaîne des monts Mikumi passe à l’or puis au lilas : c’est la vue qui a donné son nom au camp.',
      'Idéale pour les couples qui veulent dormir sous la toile en plein safari, avec le décor des montagnes.',
    ],
    highlights: [
      'Face à la chaîne des monts Mikumi',
      'Tente de luxe en toile sur terrasse surélevée',
      'Salle de bain privée et climatisation',
      'Ouverte fin 2026',
      lunch,
    ],
    metaTitle: 'Luxury Mountain View Tent – tente de luxe à Mikumi',
    metaDescription: (p) => `Nos tentes de luxe les plus récentes, face aux monts Mikumi : terrasse surélevée, lit king size, salle de bain privée, climatisation.${dès(p, ' la nuit')}`,
  },
  'jungle-cabin': {
    gloss: 'cabine dans les arbres',
    kind: 'Cabine privée',
    sleeps: '2 adultes',
    bed: 'Lit king size',
    caption: 'Depuis le sentier, 07:15',
    imageAlt: 'La Jungle Cabin de Camp Lilac avec son toit de chaume et son escalier en bois, au milieu des arbres',
    imageAlts: [
      'Lit king size de la Jungle Cabin à Camp Lilac, portes ouvertes sur la terrasse qui en fait le tour et sur les arbres',
      'Lit king size avec moustiquaire dans la Jungle Cabin, lumière du matin par les fenêtres',
      'Escalier en bois menant à la Jungle Cabin au toit de chaume, au milieu des arbres miombo',
      'La terrasse de la Jungle Cabin sous son toit de chaume, tournée vers la brousse',
      'Table et chaises sur la terrasse de la Jungle Cabin, à l’ombre du chaume, avec les arbres au-delà',
      'Le toit de chaume et les garde-corps en bois de la Jungle Cabin à Camp Lilac, Mikumi',
      'La Jungle Cabin vue depuis la terrasse : lit king size, parquet et portes vitrées',
      'Couloir de la Jungle Cabin avec un tableau de girafe, menant à la salle de bain',
      'Salle de bain en marbre de la Jungle Cabin avec douche à effet pluie, double vasque et miroir rétroéclairé',
      'Miroir rétroéclairé et vasque dans la salle de bain en marbre de la Jungle Cabin à Camp Lilac',
      'La Jungle Cabin de Camp Lilac vue depuis le sentier, avec son toit de chaume au milieu des arbres',
    ],
    summary: 'Une cabine privée au toit de chaume au milieu des arbres : une longue terrasse qui en fait le tour, un lit king size, une salle de bain en marbre et les bruits de la brousse de Mikumi tout autour.',
    description: [
      'La Jungle Cabin est une petite maison de luxe privée, perchée au milieu des arbres et entourée de verdure. Une grande terrasse en fait tout le tour, avec une table, des chaises et une vue sur la canopée, où singes et impalas passent tôt le matin.',
      'À l’intérieur, le parquet chaleureux, les poutres apparentes et quelques œuvres choisies avec soin créent une atmosphère accueillante et élégante. De grandes baies vitrées et de larges portes en verre laissent entrer la lumière et les bruits de la forêt : la brousse fait partie de la pièce. La grande chambre, avec lit king size, literie moelleuse et climatisation, s’ouvre directement sur la terrasse, le meilleur endroit pour le café du matin ou le coucher du soleil. La salle de bain, en marbre et en bois, a une douche à l’italienne à effet pluie.',
      'Endormez-vous au chant des grillons et aux cris lointains des animaux, et guettez la faune depuis le pas de la porte pendant la journée. Pour les couples, et pour tous ceux qui préfèrent de vrais murs à la toile sans renoncer à l’atmosphère de la brousse.',
    ],
    highlights: [
      'Cabine privée entourée d’arbres',
      'Terrasse tout autour, avec table et chaises',
      'Salle de bain en marbre avec douche à effet pluie',
      'Lit king size, climatisation',
      lunch,
    ],
    metaTitle: 'Jungle Cabin – cabine privée près de Mikumi | Camp Lilac',
    metaDescription: (p) => `Une cabine privée au toit de chaume dans les arbres : terrasse tout autour, lit king size, salle de bain en marbre, douche à effet pluie.${dès(p, '/nuit')}`,
  },
  'luxury-jungle-tent': {
    gloss: 'tente de luxe dans les arbres',
    kind: 'Tente de safari de luxe',
    sleeps: '2 adultes',
    bed: 'Lit king size (ou deux lits simples sur demande)',
    caption: 'Tente de luxe n° 2, fin de matinée',
    imageAlt: 'Tente de luxe de Camp Lilac sur sa terrasse en bois surélevée sous les arbres, près du parc national de Mikumi',
    imageAlts: [
      'Lit king size avec moustiquaire dans une Luxury Jungle Tent à Camp Lilac, parquet et terrasse au-delà',
      'Coin dressing et vasque dans une Luxury Jungle Tent, murs de toile et vue sur les arbres',
      'Marches en bois vers la terrasse d’une Luxury Jungle Tent, sur sa plateforme surélevée dans la brousse de Mikumi',
      'Une Luxury Jungle Tent à Camp Lilac, l’avant en toile ouvert sur la terrasse et la brousse',
      'La terrasse privée d’une Luxury Jungle Tent, avec des chaises tournées vers la forêt de miombo',
      'Salle de bain privée d’une Luxury Jungle Tent avec miroir rond, vasque et parquet',
      'Double vasque et miroir rond dans la salle de bain privée d’une Luxury Jungle Tent à Camp Lilac',
      'Lit king size sous moustiquaire dans une Luxury Jungle Tent, avec la terrasse et les arbres par l’avant ouvert',
    ],
    summary: 'Le séjour safari classique : une tente de luxe en toile sur une terrasse en bois surélevée, avec lit king size, salle de bain privée, climatisation et des animaux qui passent au pied des marches.',
    description: [
      'Les Luxury Jungle Tents ont fait la réputation de Camp Lilac : de grandes tentes de luxe en toile sur des terrasses surélevées en bois poli, avec un confort que la plupart des camps de toile de Mikumi n’offrent pas : une salle de bain privée avec douche à l’italienne à effet pluie, la climatisation et les lits les plus moelleux de la région.',
      'Chaque tente de luxe a un grand lit king size sous moustiquaire, de larges fenêtres-moustiquaires pour profiter de la brise, un parquet lisse et un éclairage doux : rustique et élégant à la fois. La véranda privée a des fauteuils faits main tournés vers la brousse ; impalas, phacochères et singes passent souvent tout près, et la nuit on n’entend que les animaux.',
      'Si vous voulez vivre un vrai safari sans renoncer à une bonne nuit de sommeil, c’est la tente de luxe à réserver.',
    ],
    highlights: [
      'Tente de safari de luxe en toile sur terrasse surélevée',
      'Salle de bain privée et climatisation',
      'Grand lit king size sous moustiquaire, fenêtres-moustiquaires',
      'Terrasse privée — les animaux passent tout près',
      lunch,
    ],
    metaTitle: 'Luxury Jungle Tent – tente de luxe avec salle de bain privée',
    metaDescription: (p) => `Tente de luxe en toile sur terrasse surélevée près du parc de Mikumi : lit king size, salle de bain privée, climatisation.${dès(p, ' la nuit')}`,
  },
  'luxury-family-tent': {
    gloss: 'tente de luxe familiale',
    kind: 'Tente de safari de luxe',
    sleeps: '2 adultes + 2 enfants (4 personnes au plus)',
    bed: 'Un lit double et deux lits simples',
    caption: 'De la place pour quatre',
    imageAlt: 'La terrasse privée d’une Luxury Family Tent à Camp Lilac, donnant sur la brousse',
    imageAlts: [
      'La terrasse privée d’une Luxury Family Tent à Camp Lilac, avec des chaises tournées vers la brousse',
      'Salle de bain privée d’une Luxury Family Tent avec vasque, miroir et fenêtre sur les arbres',
      'Une Luxury Family Tent sur sa terrasse surélevée sous un ciel bleu, dans la brousse de Mikumi',
      'Lit double avec moustiquaire dans une Luxury Family Tent, parquet et murs de toile',
      'Vue depuis le lit d’une Luxury Family Tent vers la terrasse et la brousse',
      'Intérieur d’une Luxury Family Tent : le lit double et les deux lits simples pour les enfants',
      'Salle de bain privée d’une Luxury Family Tent avec double vasque, miroir rond et parquet',
      'Une Luxury Family Tent, l’avant en toile ouvert sur les lits et la terrasse privée',
      'Deux lits simples pour enfants dans une Luxury Family Tent à Camp Lilac, avec la terrasse au-delà',
    ],
    summary: 'Une grande tente de luxe pour les familles : de la place pour les parents et deux enfants, une salle de bain privée, la climatisation et une terrasse privée. Les enfants de moins de 4 ans ne paient pas ; de 4 à 11 ans, moitié prix.',
    description: [
      'Les Luxury Family Tents sont pensées pour les parents qui veulent faire découvrir à leurs enfants un vrai camp de safari sans rien sacrifier au confort. Chaque tente de luxe accueille jusqu’à quatre personnes, avec un lit double et deux lits simples sous la même toile, sur une terrasse surélevée.',
      'Elle a une vraie salle de bain privée, la climatisation et une terrasse privée d’où les enfants repèrent impalas et singes avant le petit-déjeuner. Le camp est calme et à l’écart de la route principale : les enfants dorment bien.',
      'Les enfants de 0 à 3 ans ne paient pas. De 4 à 11 ans, ils paient la moitié du tarif adulte, et à partir de 12 ans le tarif adulte. En réservation directe, le petit-déjeuner et le dîner sont inclus ; le déjeuner coûte US$15 par personne, gratuit pour les moins de 4 ans. Nos guides ont l’habitude des familles en game drive et adaptent le rythme aux plus jeunes ; les enfants de moins de 2 ans ne peuvent pas participer aux game drives.',
    ],
    highlights: [
      'Jusqu’à 4 personnes — une famille, une tente de luxe',
      'Moins de 4 ans gratuit, 4–11 ans moitié prix',
      'Salle de bain privée et climatisation',
      'Terrasse privée sur plateforme surélevée',
      'Guides habitués aux familles',
    ],
    metaTitle: 'Luxury Family Tent – tente de luxe familiale à Mikumi',
    metaDescription: (p) => `Tente de luxe pour deux parents et deux enfants près du parc de Mikumi : salle de bain privée, climatisation, terrasse. Moins de 4 ans gratuit.${dès(p, '')}`,
  },
};

/** French view of a room, falling back to the English text for anything not translated. */
export function frRoom(r: Room) {
  const f = roomFr[r.slug];
  return {
    ...r,
    gloss: f?.gloss ?? '',
    kind: f?.kind ?? (r.tier === 'tent' ? 'Tente de safari de luxe' : 'Cabine privée'),
    sleeps: f?.sleeps ?? r.sleeps,
    bed: f?.bed ?? r.bed,
    caption: f?.caption ?? r.caption,
    imageAlt: f?.imageAlt ?? r.imageAlt,
    imageAlts: r.images.map((_, i) => f?.imageAlts[i] ?? r.imageAlts?.[i] ?? `${r.name} à Camp Lilac, Mikumi — photo ${i + 1} sur ${r.images.length}`),
    summary: f?.summary ?? r.summary,
    description: f?.description ?? r.description,
    highlights: f?.highlights ?? r.highlights,
    metaTitle: f?.metaTitle ?? r.metaTitle ?? `${r.name} | Camp Lilac, Mikumi`,
    metaDescription: f ? f.metaDescription(r.price) : (r.metaDescription ?? r.summary),
    unitsText: r.units > 1 ? `${r.units} unités` : 'Pièce unique',
    viewText: r.view === 'mountain' ? 'Vue sur la chaîne des monts Mikumi' : 'Au milieu des arbres',
  };
}

// ---------- Safaris ----------
type SafariFr = {
  name: string;
  bestFor: string;
  summary: string;
  imageAlt: string;
  start: string;
  offer?: string;
  variants?: { name: string; text: string }[]; // same order as safaris.ts; prices are read from the English variant
  itinerary: { title: string; text: string; meals?: string; stay?: string }[];
  included: string[];
  excluded: string[];
  metaTitle: string;
  metaDescription: (price: number | null) => string;
};

const stay = 'Camp Lilac — tente de luxe ou cabine, juste à l’extérieur du parc';
const commonIncluded = [
  'Droits d’entrée au parc national de Mikumi (non-résidents)',
  '4×4 de safari privé à toit ouvrant, réservé à votre groupe',
  'Chauffeur-guide professionnel anglophone',
  'Tous les transports indiqués',
  'Pension complète pendant le safari : tous les repas indiqués jour par jour, avec eau et boissons fraîches',
  'Toutes taxes et TVA',
];
const commonExcluded = [
  'Vols internationaux',
  'Pourboires (à titre indicatif, US$10 par personne et par jour)',
  'Dépenses personnelles : souvenirs, assurance voyage, frais de visa',
  'Boissons alcoolisées',
  'Toute hausse des taxes ou des droits d’entrée décidée par l’État',
];
const offer34 =
  'Billets de train SGR en classe économique Dar es Salaam → Morogoro offerts pour tout votre groupe, plus le transfert offert jusqu’à Mikumi (valeur US$75), si vous réservez ce safari directement auprès de Camp Lilac pour un départ en novembre 2026. Aller simple : le trajet retour est facturé.';

export const safariFr: Record<string, SafariFr> = {
  '1-day-mikumi-safari': {
    name: 'Safari Mikumi à la journée',
    bestFor: 'Excursions depuis Morogoro ou Dar es Salaam, et hôtes qui ne restent qu’une nuit',
    summary: 'Une journée entière dans le parc national de Mikumi en 4×4 privé à toit ouvrant avec l’un de nos guides : game drive le matin, déjeuner chaud, sortie l’après-midi jusqu’à 16:30. Depuis Morogoro, depuis le camp, ou dans la journée depuis Dar es Salaam en train SGR.',
    imageAlt: 'Girafes broutant près d’un 4×4 de safari dans la savane',
    start: 'Morogoro, Camp Lilac ou la gare SGR de Dar es Salaam',
    variants: [
      { name: 'Depuis Morogoro ou le camp', text: 'Prise en charge à votre hôtel de Morogoro, à la gare SGR ou à Camp Lilac. Journée entière dans le parc, retour le soir.' },
      { name: 'Depuis Dar es Salaam en train SGR, dans la journée', text: 'Train SGR très matinal de Dar es Salaam à Morogoro (1,5 h), notre chauffeur sur le quai, une journée entière à Mikumi et le train du soir pour rentrer. Une longue journée, sans nuit sur place.' },
    ],
    itinerary: [
      {
        title: 'Le matin — prise en charge et premier game drive',
        text: 'Notre chauffeur vient vous chercher à votre hôtel, à la gare SGR ou au camp et vous conduit à la porte principale de Mikumi (environ 2 h depuis Morogoro). À la porte, vous montez dans un 4×4 privé à toit ouvrant avec votre guide et partez sur la plaine inondable du Mkata, où buffles, girafes, éléphants, zèbres, impalas et, avec un peu de chance, lions se repèrent le plus facilement en début de journée. Quatre des Big Five vivent à Mikumi.',
        meals: 'Déjeuner chaud, eau et boissons fraîches',
      },
      {
        title: 'L’après-midi — mares aux hippopotames et retour',
        text: 'Après le déjeuner chaud, le game drive continue vers les mares aux hippopotames et les points d’eau jusqu’à 16:30 environ. Votre guide vous ramène ensuite à la porte, puis à Morogoro pour le train du soir vers Dar es Salaam, ou à votre hôtel ou au camp.',
      },
    ],
    included: [...commonIncluded],
    excluded: ['Hébergement : réservez une tente de luxe ou une cabine à Camp Lilac séparément', 'Billets de train SGR pour l’excursion dans la journée depuis Dar es Salaam', 'Transferts aéroport (sur demande)', ...commonExcluded],
    metaTitle: 'Safari Mikumi à la journée depuis Morogoro ou Dar es Salaam',
    metaDescription: () => 'Une journée entière dans le parc de Mikumi en 4×4 privé à toit ouvrant avec notre guide : game drive, déjeuner chaud, mares aux hippopotames.',
  },
  '2-day-mikumi-safari': {
    name: 'Safari Mikumi 2 jours, 1 nuit',
    bestFor: 'Le safari du week-end depuis Dar es Salaam et Zanzibar',
    summary: 'Le grand classique du week-end depuis Dar es Salaam : train SGR jusqu’à Morogoro, deux jours de game drives en 4×4 privé à toit ouvrant, et une nuit en tente de luxe à Camp Lilac. Retour à Dar es Salaam le deuxième soir.',
    imageAlt: 'Un voyageur observe des éléphants de tout près depuis un 4×4 de safari',
    start: 'Votre hôtel ou le terminal des ferries à Dar es Salaam',
    offer: 'Transfert offert de la gare SGR de Morogoro jusqu’à Mikumi (valeur US$75) si vous réservez ce safari directement auprès de Camp Lilac pour un départ en novembre 2026. Aller simple : le transfert retour est facturé.',
    itinerary: [
      {
        title: 'Jour 1 — De Dar es Salaam au parc national de Mikumi',
        text: 'Nous venons vous chercher à votre hôtel ou au ferry et vous conduisons à la gare SGR pour le train vers Morogoro (1,5 h). Votre chauffeur-guide vous attend sur le quai et vous emmène directement à Mikumi pour un game drive de fin de matinée qui se prolonge dans l’après-midi. Déjeuner, repos au camp, puis un game drive de l’après-midi jusqu’au soir, quand la plaine se rafraîchit.',
        meals: 'Déjeuner et dîner, eau et boissons fraîches',
        stay,
      },
      {
        title: 'Jour 2 — Game drive du matin et retour à Dar es Salaam',
        text: 'Un game drive tôt le matin, quand les prédateurs sont encore en mouvement, jusqu’en début d’après-midi. Déjeuner au camp, puis 2 h de route jusqu’à Morogoro pour le train de l’après-midi vers Dar es Salaam. À l’arrivée, nous vous déposons à votre hôtel ou à l’aéroport.',
        meals: 'Petit-déjeuner et déjeuner, eau et boissons fraîches',
      },
    ],
    included: ['Une nuit à Camp Lilac en tente de luxe ou en cabine', ...commonIncluded, 'Transferts à Dar es Salaam vers et depuis la gare SGR'],
    excluded: ['Billets de train SGR Dar es Salaam ↔ Morogoro', 'Transfert retour de Mikumi à la gare SGR de Morogoro', 'Dîner du jour 2', ...commonExcluded],
    metaTitle: 'Safari Mikumi 2 jours depuis Dar es Salaam en train SGR',
    metaDescription: (p) => `Le safari du week-end depuis Dar es Salaam ou Zanzibar : train SGR, deux jours de game drives en 4×4 privé, une nuit en tente de luxe.${p ? ` Dès US$${p}/personne.` : ''}`,
  },
  '3-day-mikumi-safari': {
    name: 'Safari Mikumi 3 jours, 2 nuits',
    bestFor: 'Voyageurs qui veulent voir tout le parc sans se presser',
    summary: 'Trois jours, deux nuits : train SGR depuis Dar es Salaam, game drive au coucher du soleil le jour de l’arrivée, une journée entière sur la plaine de Mikumi, et une dernière traversée du parc sur le chemin du retour. Deux nuits en tente de luxe à Camp Lilac.',
    imageAlt: 'Un 4×4 de safari de Camp Lilac à côté d’une troupe de lions au repos près d’un point d’eau',
    start: 'Gare SGR de Dar es Salaam, train du matin',
    offer: offer34,
    variants: [
      { name: 'Classique', text: 'Deux journées complètes de game drives, deux nuits à Camp Lilac.' },
      { name: 'Avec une visite culturelle', text: 'Remplacez une partie du jour 2 par la visite d’un boma massaï ou d’un village voisin avec votre guide. Même prix : dites-le-nous simplement à la réservation.' },
    ],
    itinerary: [
      {
        title: 'Jour 1 — De Dar es Salaam au parc national de Mikumi',
        text: 'Train SGR du matin de Dar es Salaam à Morogoro (1,5 h). Votre chauffeur-guide vous attend sur le quai pour les 2 h de route jusqu’à Mikumi ; la route principale traverse le parc lui-même, alors gardez votre appareil photo à portée de main pour les babouins, girafes, éléphants, zèbres et buffles au bord de la route. Déjeuner, puis game drive à travers les plaines jusqu’aux mares aux hippopotames (lions, éléphants, élands, phacochères, hippopotames, crocodiles et oiseaux d’eau) jusqu’au coucher du soleil, puis un court trajet jusqu’au camp.',
        meals: 'Déjeuner et dîner, eau et boissons fraîches',
        stay,
      },
      {
        title: 'Jour 2 — Journée entière sur la plaine de Mikumi',
        text: 'Après le petit-déjeuner au camp, votre guide vient vous chercher pour une journée entière sur la plaine inondable du Mkata et ses lisières parsemées de baobabs : plus de 400 espèces d’oiseaux, de grands troupeaux et les meilleures chances de voir le léopard dans les bois. Déjeuner, puis game drive jusqu’au coucher du soleil.',
        meals: 'Petit-déjeuner, déjeuner et dîner, eau et boissons fraîches',
        stay,
      },
      {
        title: 'Jour 3 — De Mikumi à Dar es Salaam',
        text: 'Petit-déjeuner, départ du camp et une dernière traversée du parc en repartant. Déjeuner, puis route vers Morogoro pour le train de l’après-midi vers Dar es Salaam, où nous vous déposons à votre hôtel, au ferry ou à l’aéroport.',
        meals: 'Petit-déjeuner et déjeuner, eau et boissons fraîches',
      },
    ],
    included: ['Deux nuits à Camp Lilac en tente de luxe ou en cabine', 'Transferts entre la gare SGR de Morogoro et le camp', ...commonIncluded],
    excluded: ['Billet de train SGR retour et transfert retour vers Morogoro', 'Dîner du jour 3', ...commonExcluded],
    metaTitle: 'Safari Mikumi 3 jours depuis Dar es Salaam | Camp Lilac',
    metaDescription: (p) => `Trois jours, deux nuits : train SGR depuis Dar es Salaam, game drive au crépuscule, une journée sur la plaine, deux nuits en tente de luxe.${p ? ` Dès US$${p}.` : ''}`,
  },
  '4-day-mikumi-udzungwa-safari': {
    name: 'Safari Mikumi et cascades d’Udzungwa, 4 jours, 3 nuits',
    bestFor: 'Voyageurs actifs et familles avec de grands enfants',
    summary: 'La faune et la forêt tropicale en un seul voyage : visite d’un boma massaï, une journée entière de game drives à Mikumi, la randonnée de cinq heures jusqu’à la cascade de Sanje dans les monts Udzungwa, et trois nuits à Camp Lilac.',
    imageAlt: 'Un lion marchant dans les hautes herbes devant un 4×4 de safari',
    start: 'Gare SGR de Dar es Salaam, train du matin',
    offer: offer34,
    itinerary: [
      {
        title: 'Jour 1 — De Dar es Salaam à Mikumi, visite d’un boma massaï',
        text: 'Train SGR du matin jusqu’à Morogoro (1,5 h), puis notre 4×4 pour les 2 h de route jusqu’à Mikumi, avec déjeuner en chemin. À l’arrivée, vous visitez un boma massaï près du parc avant de vous installer au camp pour le dîner face à la chaîne des monts Mikumi.',
        meals: 'Déjeuner et dîner, eau',
        stay,
      },
      {
        title: 'Jour 2 — Journée entière dans le parc national de Mikumi',
        text: 'Game drive de 06:30 jusqu’au coucher du soleil : grands troupeaux de girafes, de buffles et d’éléphants sur la plaine, des centaines d’espèces d’oiseaux et de bonnes chances de voir lions et léopards.',
        meals: 'Petit-déjeuner, déjeuner et dîner, eau',
        stay,
      },
      {
        title: 'Jour 3 — Monts Udzungwa et cascade de Sanje',
        text: 'Départ à 07:00 pour les 60 km de route jusqu’au parc national des monts Udzungwa. Après l’enregistrement au siège du parc, randonnée avec un ranger jusqu’à la cascade de Sanje, qui tombe en quatre paliers et est la plus haute de tous les parcs nationaux de Tanzanie : environ cinq heures aller-retour, avec des colobes bais d’Udzungwa et des mangabeys de Sanje dans la forêt. Puis retour au camp.',
        meals: 'Petit-déjeuner, déjeuner et dîner, eau',
        stay,
      },
      {
        title: 'Jour 4 — De Mikumi à Dar es Salaam',
        text: 'Route matinale à travers le parc national de Mikumi, avec une dernière chance de voir des animaux depuis la route, puis Morogoro pour le train de l’après-midi vers Dar es Salaam. Nous vous déposons au ferry, à votre hôtel ou à l’aéroport.',
        meals: 'Petit-déjeuner et déjeuner, eau',
      },
    ],
    included: ['Trois nuits à Camp Lilac en tente de luxe ou en cabine', 'Transferts entre la gare SGR de Morogoro et le camp', 'Entrée au parc des monts Udzungwa et randonnée guidée par un ranger', ...commonIncluded],
    excluded: ['Billet de train SGR retour et transfert retour vers Morogoro', 'Dîner du jour 4', ...commonExcluded],
    metaTitle: 'Safari 4 jours Mikumi et cascades d’Udzungwa | Camp Lilac',
    metaDescription: () => 'La faune et la forêt tropicale : visite d’un boma massaï, une journée de game drives à Mikumi, la randonnée de la cascade de Sanje, trois nuits à Camp Lilac.',
  },
};

const tierPeople: Record<string, string> = { '1 person': '1 personne', '2 or more': '2 personnes ou plus' };

/** French view of a safari, falling back to the English text for anything not translated. */
export function frSafari(s: Safari) {
  const f = safariFr[s.slug];
  return {
    ...s,
    name: f?.name ?? s.name,
    bestFor: f?.bestFor ?? s.bestFor,
    summary: f?.summary ?? s.summary,
    imageAlt: f?.imageAlt ?? s.imageAlt,
    start: f?.start ?? s.start,
    offer: s.offer ? (f?.offer ?? s.offer) : undefined,
    variants: s.variants?.map((v, i) => {
      const n = v.price?.match(/\d+/)?.[0];
      return { name: f?.variants?.[i]?.name ?? v.name, text: f?.variants?.[i]?.text ?? v.text, price: n ? `à partir de US$${n} par personne` : undefined };
    }),
    itinerary: s.itinerary.map((d, i) => ({ ...d, ...(f?.itinerary[i] ?? {}) })),
    included: f?.included ?? s.included,
    excluded: f?.excluded ?? s.excluded,
    tiers: s.tiers?.map((t) => ({ ...t, people: tierPeople[t.people] ?? t.people })),
    metaTitle: f?.metaTitle ?? s.metaTitle ?? `${s.name} | Camp Lilac, Mikumi`,
    metaDescription: f ? f.metaDescription(s.price) : (s.metaDescription ?? s.summary),
    daysText: jours(s.days),
  };
}

// ---------- November deals and book-direct benefits ----------
export const offerFr: Record<string, { title: string; who: string; worth: string; text: string }> = {
  'free-transfer': {
    title: 'Transfert offert jusqu’à Mikumi',
    who: 'Avec le safari Mikumi 2 jours, 1 nuit · novembre 2026',
    worth: 'Valeur US$75',
    text: 'Réservez le safari Mikumi 2 jours, 1 nuit directement auprès de nous pour un départ en novembre 2026 : nous venons vous chercher à la gare SGR de Morogoro et vous conduisons au camp gratuitement. Aller simple ; le transfert retour vers Morogoro est facturé.',
  },
  'free-train-and-transfer': {
    title: 'Billet de train + transfert offerts',
    who: 'Avec le safari de 3 ou 4 jours · novembre 2026',
    worth: 'Valeur US$85–95 pour deux',
    text: 'Réservez le safari de 3 ou 4 jours directement auprès de nous pour un départ en novembre 2026 : nous payons les billets de train SGR en classe économique de Dar es Salaam à Morogoro pour tout votre groupe (environ US$10–20 pour deux personnes), plus le transfert de US$75 jusqu’à Mikumi. Aller simple ; le retour est facturé.',
  },
};
export const directBenefitsFr = [
  { title: 'Petit-déjeuner et dîner inclus', text: 'Toute réservation directe comprend le petit-déjeuner et le dîner face à la chaîne des monts Mikumi. Le déjeuner coûte US$15 par personne.' },
  { title: 'Un seul prix total, sans frais de réservation', text: 'Un seul prix pour la chambre, le safari et les transferts, et rien à payer avant votre confirmation. Un acompte réglé par lien de paiement sécurisé bloque la chambre.' },
  { title: 'Tout le voyage organisé', text: 'Billets de train, accueil à la gare de Morogoro, ferries et vols depuis Zanzibar : dites-nous comment vous voulez voyager et nous nous en occupons.' },
  { title: 'Nos propres guides et 4×4', text: 'Les game drives partent directement du camp, en 4×4 privé à toit ouvrant avec un guide de Camp Lilac, calés sur votre train ou votre vol.' },
];
/** The one-sentence deal terms, used next to the deals everywhere. */
export const offerTermsFr = 'Pour les safaris de 2 jours ou plus commençant en novembre 2026, réservés directement auprès de nous. Les séjours sans safari ne comprennent pas de transfert offert.';

// ---------- Wildlife photos (alt text per photo key in /images/wild) ----------
export const wildAltFr: Record<string, string> = {
  'lion-pride': 'Une troupe de lions endormis dans l’herbe du parc national de Mikumi',
  elephant: 'Un éléphant d’Afrique entre les arbres du parc national de Mikumi',
  'giraffe-sunset': 'Une girafe traversant la plaine au coucher du soleil à Mikumi',
  'zebras-impala': 'Des zèbres et un impala pendant la saison verte à Mikumi',
  'elephants-road': 'Des éléphants marchant sur une piste du parc national de Mikumi',
  'giraffe-portraits': 'Deux girafes masaï regardant l’objectif à Mikumi',
  'hippo-calf': 'Un bébé hippopotame posé sur sa mère dans une mare de Mikumi',
  lioness: 'Portrait d’une lionne dans le parc national de Mikumi',
  'zebra-herd': 'Un groupe serré de zèbres à Mikumi',
  buffalo: 'Un buffle d’Afrique dans les bois secs de Mikumi',
  impala: 'Un impala mâle dans les hautes herbes de Mikumi',
  lion: 'Un lion endormi dans l’herbe, en gros plan, à Mikumi',
  'giraffes-impala': 'Girafes et impalas ensemble sur les plaines de Mikumi',
  'elephant-herd': 'Un troupeau d’éléphants traversant la plaine inondable de Mikumi',
  'giraffes-evening': 'Des girafes dans la lumière du soir, parc national de Mikumi',
  'zebras-grazing': 'Des zèbres broutant à Mikumi',
  'first-1': 'Un lion et une lionne au repos dans la savane',
  'first-2': 'Un léopard couché dans l’herbe',
  'first-3': 'Deux hippopotames qui s’affrontent dans une rivière',
  'first-4': 'Deux éléphants sur la plaine',
  'road-sunset': 'Coucher de soleil sur la route qui traverse le parc national de Mikumi',
  'giraffes-dusk': 'Des girafes au crépuscule dans le parc national de Mikumi',
  'zebra-line': 'Une file de zèbres traversant les herbes dorées',
  'elephants-plain': 'Des éléphants sur la plaine ouverte, au pied des montagnes',
  'giraffe-face': 'Une girafe qui regarde l’objectif',
  'giraffe-group': 'Un groupe de girafes sur la plaine',
  'own-giraffes': 'Des girafes sous un ciel bleu, vues lors d’un safari Camp Lilac',
  'own-giraffe': 'Une girafe sur la plaine verte, vue lors d’un safari Camp Lilac',
  'elephant-family': 'Une famille d’éléphants longeant une rivière',
  wildebeest: 'Un grand troupeau de gnous',
  'lioness-cubs': 'Une lionne avec ses lionceaux',
  'plains-herds': 'Impalas, zèbres et un marabout sur les plaines vertes de Mikumi',
  'zebras-pair': 'Deux zèbres broutant dans la prairie verte de Mikumi',
  'leopard-drive': 'Un léopard dans un arbre à côté d’un 4×4 de safari',
  'lion-track': 'Un lion marchant sur une piste vers un 4×4 de safari',
  'buffalo-pair': 'Deux buffles d’Afrique',
  'elephants-storm': 'Des éléphants dans l’herbe verte sous un ciel d’orage à Mikumi',
  'buffalo-herd': 'Un troupeau de buffles d’Afrique',
  'lions-tree': 'Des lions endormis sous un arbre à Mikumi',
  cheetahs: 'Deux guépards au repos sur un tronc',
  'zebras-hills': 'Des zèbres broutant au pied des collines de Mikumi',
  'elephants-walk': 'Une famille d’éléphants marchant en file',
  'jeep-giraffes': 'Un 4×4 de safari avec des girafes et des impalas',
  'leopard-face': 'Portrait en gros plan d’un léopard',
  'sanje-waterfall': 'La cascade de Sanje dévalant les falaises des monts Udzungwa',
};
