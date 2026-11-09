// German texts shared by the pages in src/pages/de. Keyed by the English slug; anything missing falls back to the
// English data, so a new room or safari still shows up (in English) until it is translated here.
// Hand-written; ask a German speaker to read it once before promoting the German pages.
import type { Room } from './rooms';
import type { Safari } from './safaris';
import { travelOptions } from './safaris';
import { offers, directBenefits } from './offers';
import { localize } from './i18n';
import { site } from './site';

/** Marker after a link to a page that exists only in English. */
export const EN = ' (auf Englisch)';

// German anchor ids on the translated pages, by English page and English anchor.
const anchors: Record<string, Record<string, string>> = {
  '/getting-here': { train: 'zug', road: 'strasse', zanzibar: 'sansibar', air: 'flug', south: 'sueden' },
  '/safari-from-zanzibar': { how: 'ablauf', packages: 'pakete', flight: 'flug', who: 'fuer-wen', faq: 'fragen' },
  '/safari-from-dar-es-salaam': { packages: 'pakete', weekend: 'wochenende', pickups: 'abholung', when: 'reisezeit', faq: 'fragen' },
};

/** German URL of an English path (query and #anchor kept, anchors translated); English URL when not translated. */
export function L(enPath: string): string {
  const m = enPath.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/)!;
  const path = m[1] || '/';
  const query = m[2] ?? '';
  let hash = m[3] ?? '';
  const href = localize(path, 'de');
  if (hash && href !== path) hash = '#' + (anchors[path]?.[hash.slice(1)] ?? hash.slice(1));
  return href + query + hash;
}
/** True when the English path has no German version (the link then needs the EN marker). */
export const englishOnly = (enPath: string) => localize(enPath.replace(/[?#].*$/, '') || '/', 'de') === (enPath.replace(/[?#].*$/, '') || '/');

export const replyHours = site.replyTime.match(/\d+/)?.[0] ?? '4';
export const num = (n: number | string) => String(n).replace('.', ',');
export const days = (n: number) => `${n} ${n === 1 ? 'Tag' : 'Tage'}`;
export const fromNight = (p: number | null) => (p ? `Ab US$${p} pro Nacht` : 'Preis auf Anfrage');
export const fromPerson = (p: number | null) => (p ? `Ab US$${p} pro Person` : 'Preis auf Anfrage');

// ---------------------------------------------------------------- rooms

type RoomDe = {
  gloss: string; kind: string; summary: string; description: string[]; highlights: string[];
  alt: string; caption: string; imageAlts: string[]; sleeps: string; bed: string; view: string;
  metaTitle: string; metaDescription: string; // {price} is replaced with the price from rooms.ts
};

const meals = 'Frühstück und Abendessen inklusive, Mittagessen US$15 pro Person';
const twoAdults = '2 Erwachsene';
const kingBed = 'Kingsize-Bett';
const kingOrTwin = 'Kingsize-Bett (auf Wunsch zwei Einzelbetten)';

const roomsDe: Record<string, RoomDe> = {
  'mountain-view-cabin': {
    gloss: 'Cabin mit Bergblick',
    kind: 'Private Cabin',
    summary: 'Unsere beste Unterkunft: eine private, reetgedeckte Cabin mit Blick auf den Bergkamm der Mikumi-Berge, mit breiter Terrasse, Kingsize-Bett und einer Badewanne mit Aussicht.',
    description: [
      'Die Mountain View Cabin ist die luxuriöseste Unterkunft in Mikumi und in der ganzen Region Morogoro, in einer einzigartigen Lage mit freiem Blick auf die Mikumi-Berge. Sie wachen mit den Hügeln vor dem Fenster auf und beenden den Tag mit dem Sonnenuntergang, auf der Terrasse oder in der Badewanne.',
      'Naturholz und große Fenster holen die Landschaft ins Innere. Unter dem Reetdach steht ein bequemes Kingsize-Bett, dazu kommen eine moderne Klimaanlage und ein schön gestaltetes Bad mit freistehender Badewanne vor einem Fenster zum Busch. Von der Terrasse aus sehen Sie Impalas, Warzenschweine und Affen vorbeiziehen: Safari, ohne die Cabin zu verlassen.',
      'Wildnis, Exklusivität und Genuss an einem Ort: für Paare, die den Komfort einer Lodge in der Umgebung eines Safaricamps suchen. Bei Direktbuchung sind Frühstück und Abendessen in unserem Restaurant inklusive, das denselben Blick auf den Bergkamm der Mikumi-Berge hat. Das Mittagessen kostet US$15 pro Person, Getränke sind extra.',
    ],
    highlights: [
      'Blick auf den Bergkamm der Mikumi-Berge',
      'Breite private Terrasse für den Sonnenuntergang',
      'Freistehende Badewanne mit Aussicht',
      'Kingsize-Bett, Klimaanlage, eigenes Bad',
      meals,
    ],
    alt: 'Freistehende Badewanne in der Mountain View Cabin im Camp Lilac, durch das Fenster der Bergkamm der Mikumi-Berge',
    caption: 'Das Bad, 17:50 Uhr',
    imageAlts: [
      'Freistehende Badewanne in der Mountain View Cabin im Camp Lilac, durch das Fenster der Bergkamm der Mikumi-Berge',
      'Kingsize-Bett mit Moskitonetz in der Mountain View Cabin, mit Blick auf die offene Terrasse und die Ebene von Mikumi',
      'Holztreppe hinauf zur reetgedeckten Mountain View Cabin im Camp Lilac, unter einem Baum bei Sonnenuntergang',
      'Die breite private Terrasse der Mountain View Cabin mit Blick über den Busch zu den Mikumi-Bergen',
      'Liegestühle auf der Terrasse der Mountain View Cabin im goldenen Abendlicht, am Horizont der Bergkamm der Mikumi-Berge',
      'Morgenlicht auf dem Boden der Mountain View Cabin, mit dem Kingsize-Bett und der Aussicht dahinter',
      'Offene Regale und Klimaanlage in der Mountain View Cabin im Camp Lilac',
      'In der Mountain View Cabin: Reetdach, Hartholzboden und Glastüren zur Terrasse',
      'Die Terrasse der Mountain View Cabin bei Sonnenuntergang, eingerahmt vom Reetdach, mit Blick zu den Mikumi-Bergen',
      'Bad der Mountain View Cabin mit freistehender Badewanne, zwei Waschbecken und Blick in den Busch',
    ],
    sleeps: twoAdults,
    bed: kingBed,
    view: 'Blick auf den Bergkamm der Mikumi-Berge',
    metaTitle: 'Mountain View Cabin: Cabin mit Bergblick | Camp Lilac',
    metaDescription: 'Unsere beste Unterkunft: private Cabin mit Reetdach vor den Mikumi-Bergen, breite Terrasse, Kingsize-Bett und Badewanne mit Aussicht. Ab US${price} pro Nacht.',
  },
  'luxury-mountain-view-tent': {
    gloss: 'Luxuszelt mit Bergblick',
    kind: 'Luxus-Safarizelt',
    summary: 'Unsere neuesten Luxuszelte: dasselbe Luxuszelt aus Segeltuch wie die Luxury Jungle Tents, nur zu den Mikumi-Bergen hin ausgerichtet, mit dem schönsten Sonnenuntergang von Mikumi von der eigenen Terrasse aus.',
    description: [
      'Die Luxury Mountain View Tents wurden Ende 2026 eröffnet. Sie verbinden das Safarigefühl der Luxury Jungle Tents mit dem Blick auf den Bergkamm der Mikumi-Berge, den sonst die Mountain View Cabin hat.',
      'Jedes Luxuszelt steht auf einer erhöhten Hartholzterrasse mit Blick auf die Berge, mit Kingsize-Bett, vollwertigem eigenem Bad, Klimaanlage und sehr bequemen Betten. Am Abend färbt sich der Bergkamm der Mikumi-Berge erst golden, dann lila: der Anblick, nach dem das Camp benannt ist.',
      'Ideal für Paare, die das Safarigefühl eines Luxuszelts und die Landschaft der Berge möchten.',
    ],
    highlights: [
      'Blick auf den Bergkamm der Mikumi-Berge',
      'Luxuszelt aus Segeltuch auf erhöhter Terrasse',
      'Eigenes Bad und Klimaanlage',
      'Eröffnet Ende 2026',
      meals,
    ],
    alt: 'Luxury Mountain View Tent im Camp Lilac mit Blick auf den Bergkamm der Mikumi-Berge',
    caption: 'Mit Blick auf die Mikumi-Berge',
    imageAlts: [
      'Luxury Mountain View Tent im Camp Lilac: Vom Bett blickt man durch die offene Front direkt auf die Mikumi-Berge',
      'Sessel und Tisch auf der erhöhten Terrasse eines Luxury Mountain View Tent bei Sonnenuntergang',
      'Ein Luxury Mountain View Tent auf seiner erhöhten Holzplattform im Busch von Mikumi in der Abenddämmerung',
      'Holzstufen hinauf zur Terrasse eines Luxury Mountain View Tent im Camp Lilac',
      'Private Terrasse eines Luxury Mountain View Tent mit Blick über den Busch zum Bergkamm der Mikumi-Berge',
      'Kingsize-Bett unter dem Segeltuchdach in einem Luxury Mountain View Tent, mit Hartholzboden und Sesseln',
      'Eingang zum eigenen Bad eines Luxury Mountain View Tent, mit Spiegel, Waschbecken und Sessel',
      'Eigenes Bad in einem Luxury Mountain View Tent: runder Spiegel, zwei Waschbecken und Klimaanlage',
      'Blick vom Bett eines Luxury Mountain View Tent zu den Mikumi-Bergen bei Sonnenaufgang',
      'Holzbank auf der Terrasse eines Luxury Mountain View Tent im Camp Lilac mit Blick in den Busch',
      'Sonnenuntergang über dem Busch von Mikumi, gesehen von der Terrasse eines Luxury Mountain View Tent',
    ],
    sleeps: twoAdults,
    bed: kingOrTwin,
    view: 'Blick auf den Bergkamm der Mikumi-Berge',
    metaTitle: 'Luxury Mountain View Tent: Luxuszelt in Mikumi',
    metaDescription: 'Unsere neuesten Luxuszelte vor den Mikumi-Bergen: erhöhte Terrasse, Kingsize-Bett, eigenes Bad, Klimaanlage und der schönste Sonnenuntergang. Ab US${price} pro Nacht.',
  },
  'jungle-cabin': {
    gloss: 'Cabin zwischen den Bäumen',
    kind: 'Private Cabin',
    summary: 'Eine private, reetgedeckte Cabin zwischen den Bäumen: eine lange umlaufende Terrasse, ein Kingsize-Bett, ein Marmorbad und rundherum die Geräusche des Busches von Mikumi.',
    description: [
      'Die Jungle Cabin ist ein privates Luxushaus hoch zwischen den Bäumen, umgeben von grünem Wald. Eine geräumige umlaufende Terrasse mit Tisch und Stühlen führt rund um das Haus, mit Blick in die Baumkronen und auf den Busch, durch den am frühen Morgen Affen und Impalas ziehen.',
      'Innen sorgen warme Holzböden, sichtbare Deckenbalken und ausgewählte Kunst für eine einladende, elegante Atmosphäre. Raumhohe Fenster und breite Glastüren lassen das Licht und die Geräusche des Waldes herein, sodass der Busch Teil des Wohnraums wird. Das große Schlafzimmer mit Kingsize-Bett, weicher Bettwäsche und Klimaanlage öffnet sich direkt zur Terrasse, dem besten Platz für den Morgenkaffee oder den Sonnenuntergang. Das Bad aus Marmor und Holz hat eine ebenerdige Regendusche.',
      'Sie schlafen beim Zirpen der Grillen und fernen Tierrufen ein und beobachten tagsüber von der Türschwelle aus die Tiere, die vorbeikommen. Für Paare und für alle, die feste Wände dem Segeltuch vorziehen und den Busch trotzdem spüren möchten.',
    ],
    highlights: [
      'Private Cabin, umgeben von Bäumen',
      'Umlaufende Terrasse mit Tisch und Stühlen',
      'Marmorbad mit Regendusche',
      'Kingsize-Bett, Klimaanlage',
      meals,
    ],
    alt: 'Die Jungle Cabin im Camp Lilac mit Reetdach und Holztreppe, zwischen Miombo-Bäumen',
    caption: 'Vom Weg aus, 07:15 Uhr',
    imageAlts: [
      'Kingsize-Bett in der Jungle Cabin im Camp Lilac, die Türen offen zur umlaufenden Terrasse und zu den Bäumen',
      'Kingsize-Bett mit Moskitonetz in der Jungle Cabin, Morgenlicht durch die Fenster',
      'Holztreppe hinauf zur reetgedeckten Jungle Cabin im Camp Lilac, zwischen Miombo-Bäumen',
      'Die umlaufende Terrasse der Jungle Cabin unter dem Reetdach, mit Blick in den Busch',
      'Tisch und Stühle auf der Terrasse der Jungle Cabin im Schatten des Reetdachs, dahinter die Bäume',
      'Das Reetdach und das Holzgeländer der Jungle Cabin im Camp Lilac, Mikumi',
      'Blick von der Terrasse in die Jungle Cabin: Kingsize-Bett, Hartholzboden und Glastüren',
      'Flur in der Jungle Cabin mit dem Gemälde einer Giraffe, der zum Bad führt',
      'Marmorbad der Jungle Cabin mit Regendusche, zwei Waschbecken und beleuchtetem Spiegel',
      'Beleuchteter Spiegel und Waschbecken im Marmorbad der Jungle Cabin im Camp Lilac',
      'Die Jungle Cabin im Camp Lilac vom Weg aus gesehen, mit ihrem Reetdach zwischen den Bäumen',
    ],
    sleeps: twoAdults,
    bed: kingBed,
    view: 'Zwischen den Bäumen',
    metaTitle: 'Jungle Cabin: private Cabin am Mikumi-Park | Camp Lilac',
    metaDescription: 'Private Cabin mit Reetdach zwischen den Bäumen: umlaufende Terrasse, Kingsize-Bett, Marmorbad mit Regendusche, die Geräusche des Busches. Ab US${price} pro Nacht.',
  },
  'luxury-jungle-tent': {
    gloss: 'Luxuszelt zwischen den Bäumen',
    kind: 'Luxus-Safarizelt',
    summary: 'Der klassische Safari-Aufenthalt: ein Luxuszelt aus Segeltuch auf einer erhöhten Hartholzterrasse, mit Kingsize-Bett, eigenem Bad, Klimaanlage und Wildtieren, die an der Treppe vorbeiziehen.',
    description: [
      'Für die Luxury Jungle Tents ist Camp Lilac bekannt: geräumige Luxuszelte aus Segeltuch auf erhöhten, polierten Holzterrassen, mit einem Komfort, den die meisten Camps in Mikumi nicht bieten: ein eigenes Bad mit ebenerdiger Regendusche, Klimaanlage und die weichsten Betten der Region.',
      'Jedes Luxuszelt hat ein bequemes Kingsize-Bett unter einem Moskitonetz, große Gazefenster für die natürliche Brise, glatte Holzböden und warmes, gedämpftes Licht: rustikal und elegant zugleich. Auf der privaten Veranda stehen handgefertigte Stühle mit Blick in den Busch. Impalas, Warzenschweine und Affen kommen regelmäßig direkt vorbei, und nachts hören Sie nur die Tiere.',
      'Wenn Sie das echte Safarigefühl möchten, ohne auf guten Schlaf zu verzichten, ist dies das richtige Luxuszelt.',
    ],
    highlights: [
      'Luxuszelt aus Segeltuch auf erhöhter Terrasse',
      'Eigenes Bad und Klimaanlage',
      'Bequemes Kingsize-Bett unter Moskitonetz, Gazefenster',
      'Private Terrasse, Wildtiere ziehen direkt vorbei',
      meals,
    ],
    alt: 'Luxuszelt im Camp Lilac auf einer erhöhten Holzterrasse unter Bäumen nahe dem Mikumi-Nationalpark',
    caption: 'Luxuszelt zwei, später Vormittag',
    imageAlts: [
      'Kingsize-Bett mit Moskitonetz in einem Luxury Jungle Tent im Camp Lilac, Hartholzboden und Terrasse dahinter',
      'Ankleidebereich und Waschbecken in einem Luxury Jungle Tent, mit Wänden aus Segeltuch und Blick auf die Bäume',
      'Holzstufen hinauf zur Terrasse eines Luxury Jungle Tent auf seiner erhöhten Plattform im Busch von Mikumi',
      'Ein Luxury Jungle Tent im Camp Lilac, die Front aus Segeltuch offen zur Terrasse und zum Busch',
      'Die private Terrasse eines Luxury Jungle Tent mit Stühlen und Blick in den Miombo-Wald',
      'Eigenes Bad eines Luxury Jungle Tent mit rundem Spiegel, Waschbecken und Hartholzboden',
      'Zwei Waschbecken und runder Spiegel im eigenen Bad eines Luxury Jungle Tent im Camp Lilac',
      'Kingsize-Bett unter einem Moskitonetz in einem Luxury Jungle Tent, durch die offene Front die Terrasse und die Bäume',
    ],
    sleeps: twoAdults,
    bed: kingOrTwin,
    view: 'Zwischen den Bäumen',
    metaTitle: 'Luxury Jungle Tent: Luxuszelt mit eigenem Bad, Mikumi',
    metaDescription: 'Ein Luxuszelt aus Segeltuch auf erhöhter Terrasse nahe dem Mikumi-Nationalpark: Kingsize-Bett, eigenes Bad, Klimaanlage, Wildtiere an der Treppe. Ab US${price}.',
  },
  'luxury-family-tent': {
    gloss: 'Luxuszelt für Familien',
    kind: 'Luxus-Safarizelt',
    summary: 'Ein geräumiges Luxuszelt für Familien: Platz für Eltern und zwei Kinder, eigenes Bad, Klimaanlage und private Terrasse. Kinder unter 4 Jahren übernachten kostenlos, von 4 bis 11 Jahren zum halben Preis.',
    description: [
      'Die Luxury Family Tents sind für Eltern gedacht, die ihren Kindern ein echtes Safaricamp zeigen möchten, ohne auf Komfort zu verzichten. Jedes bietet Platz für bis zu vier Personen: ein Doppelbett und zwei Einzelbetten in einem geräumigen Luxuszelt aus Segeltuch auf einer erhöhten Terrasse.',
      'Dazu gehören ein vollwertiges eigenes Bad, Klimaanlage und eine private Terrasse, auf der die Kinder schon vor dem Frühstück Impalas und Affen entdecken. Das Camp ist ruhig und liegt abseits der Hauptstraße, die Kinder schlafen also gut.',
      'Kinder von 0 bis 3 Jahren übernachten kostenlos. Von 4 bis 11 Jahren zahlen sie den halben Erwachsenenpreis, ab 12 Jahren den vollen Preis. Bei Direktbuchung sind Frühstück und Abendessen inklusive; das Mittagessen kostet US$15 pro Person und ist für Kinder unter 4 Jahren kostenlos. Unsere Guides sind Familien auf Pirschfahrten gewohnt und passen das Tempo an jüngere Mitreisende an. Kinder unter 2 Jahren können nicht an Pirschfahrten teilnehmen.',
    ],
    highlights: [
      'Platz für bis zu 4: eine Familie, ein Luxuszelt',
      'Unter 4 Jahren kostenlos, 4–11 Jahre halber Preis',
      'Eigenes Bad und Klimaanlage',
      'Private Terrasse auf erhöhter Plattform',
      'Familienfreundliche Safari-Guides',
    ],
    alt: 'Die private Terrasse eines Luxury Family Tent im Camp Lilac mit Blick in den Busch',
    caption: 'Platz für vier',
    imageAlts: [
      'Die private Terrasse eines Luxury Family Tent im Camp Lilac mit Stühlen und Blick in den Busch',
      'Eigenes Bad eines Luxury Family Tent mit Waschbecken, Spiegel und Fenster zu den Bäumen',
      'Ein Luxury Family Tent auf seiner erhöhten Terrasse unter blauem Himmel im Busch von Mikumi',
      'Doppelbett mit Moskitonetz in einem Luxury Family Tent, mit Hartholzboden und Wänden aus Segeltuch',
      'Blick vom Bett eines Luxury Family Tent zur Terrasse und in den Busch',
      'In einem Luxury Family Tent: das Doppelbett und die zwei Einzelbetten für Kinder',
      'Eigenes Bad in einem Luxury Family Tent mit zwei Waschbecken, rundem Spiegel und Hartholzboden',
      'Ein Luxury Family Tent mit offener Front aus Segeltuch, mit Blick auf die Betten und die private Terrasse',
      'Zwei Einzelbetten für Kinder in einem Luxury Family Tent im Camp Lilac, dahinter die Terrasse',
    ],
    sleeps: '2 Erwachsene + 2 Kinder (bis zu 4 Gäste)',
    bed: 'Doppelbett und zwei Einzelbetten',
    view: 'Zwischen den Bäumen',
    metaTitle: 'Luxury Family Tent: Luxuszelt für 4 in Mikumi | Camp Lilac',
    metaDescription: 'Ein Luxuszelt für Eltern und zwei Kinder nahe dem Mikumi-Nationalpark: eigenes Bad, Klimaanlage, Terrasse. Unter 4 kostenlos, 4–11 halber Preis. Ab US${price}.',
  },
};

/** German texts of a room, falling back to the English data field by field. */
export function roomDe(r: Room) {
  const d = roomsDe[r.slug];
  const price = (t: string) => t.replace('{price}', String(r.price ?? ''));
  return {
    gloss: d?.gloss ?? '',
    kind: d?.kind ?? (r.tier === 'tent' ? 'Luxus-Safarizelt' : 'Private Cabin'),
    summary: d?.summary ?? r.summary,
    description: d?.description ?? r.description,
    highlights: d?.highlights ?? r.highlights,
    alt: d?.alt ?? r.imageAlt,
    caption: d?.caption ?? r.caption,
    imageAlts: r.images.map((_, i) => d?.imageAlts[i] ?? r.imageAlts?.[i] ?? `${r.name} im Camp Lilac, Mikumi – Foto ${i + 1} von ${r.images.length}`),
    sleeps: d?.sleeps ?? r.sleeps,
    bed: d?.bed ?? r.bed,
    view: d?.view ?? (r.view === 'mountain' ? 'Blick auf den Bergkamm der Mikumi-Berge' : 'Zwischen den Bäumen'),
    metaTitle: d ? d.metaTitle : r.metaTitle,
    metaDescription: d && r.price ? price(d.metaDescription) : d?.summary ?? r.metaDescription,
  };
}

// ---------------------------------------------------------------- safaris

type SafariDe = {
  name: string; summary: string; bestFor: string; offer?: string; start: string; imageAlt: string;
  variants?: { name: string; text: string }[];
  itinerary: { title: string; text: string }[];
  metaTitle: string; metaDescription: string; // {price} replaced from safaris.ts
};

const safarisDe: Record<string, SafariDe> = {
  '1-day-mikumi-safari': {
    name: 'Tagessafari Mikumi',
    summary: 'Ein ganzer Tag im Mikumi-Nationalpark im privaten offenen Geländewagen mit unserem eigenen Guide: Pirschfahrt am Morgen, warmes Mittagessen, Pirschfahrt am Nachmittag bis etwa 16:30 Uhr. Ab Morogoro, ab dem Camp oder als Tagesausflug ab Dar es Salaam mit dem SGR-Zug.',
    bestFor: 'Tagesausflüge ab Morogoro oder Dar es Salaam und Gäste, die eine Nacht bleiben',
    start: 'Morogoro, Camp Lilac oder SGR-Bahnhof Dar es Salaam',
    imageAlt: 'Giraffen grasen neben einem Safari-Geländewagen in der Savanne von Mikumi',
    variants: [
      { name: 'Ab Morogoro oder ab dem Camp', text: 'Abholung an Ihrem Hotel in Morogoro, am SGR-Bahnhof oder im Camp Lilac. Ein ganzer Tag im Park, am Abend zurück.' },
      { name: 'Ab Dar es Salaam mit dem SGR-Zug, am selben Tag', text: 'Früher SGR-Zug von Dar es Salaam nach Morogoro (1,5 Stunden), unser Fahrer am Bahnsteig, ein ganzer Tag in Mikumi und mit dem Abendzug zurück. Ein langer Tag, aber ohne Übernachtung.' },
    ],
    itinerary: [
      { title: 'Vormittag: Abholung und erste Pirschfahrt', text: 'Unser Fahrer holt Sie an Ihrem Hotel, am SGR-Bahnhof oder im Camp ab und bringt Sie zum Haupteingang des Mikumi-Nationalparks (etwa 2 Stunden ab Morogoro). Am Parkeingang steigen Sie mit Ihrem Guide in einen privaten Geländewagen mit offenem Dach und fahren hinaus auf die Mkata-Ebene, wo Büffel, Giraffen, Elefanten, Zebras, Impalas und mit etwas Glück Löwen früh am Tag am leichtesten zu finden sind. Vier der Big Five leben in Mikumi.' },
      { title: 'Nachmittag: Flusspferd-Tümpel und Rückfahrt', text: 'Nach einem warmen Mittagessen geht die Pirschfahrt bis etwa 16:30 Uhr weiter, zu den Flusspferd-Tümpeln und den Wasserstellen. Danach bringt Ihr Guide Sie zurück zum Parkeingang und weiter nach Morogoro zum Abendzug nach Dar es Salaam, zu Ihrem Hotel oder ins Camp.' },
    ],
    metaTitle: 'Tagessafari Mikumi ab Morogoro und Dar es Salaam',
    metaDescription: 'Ein ganzer Tag im Mikumi-Nationalpark im privaten offenen Geländewagen mit eigenem Guide: Pirschfahrt, warmes Mittagessen. Ab US${price} pro Person.',
  },
  '2-day-mikumi-safari': {
    name: 'Mikumi-Safari, 2 Tage, 1 Nacht',
    summary: 'Der Wochenend-Klassiker ab Dar es Salaam: SGR-Zug nach Morogoro, zwei Tage Pirschfahrten im privaten offenen Geländewagen und eine Nacht im Luxuszelt im Camp Lilac. Am Abend des zweiten Tages sind Sie zurück in Dar es Salaam.',
    bestFor: 'Wochenend-Safaris ab Dar es Salaam und Sansibar',
    offer: 'Kostenloser Transfer vom SGR-Bahnhof Morogoro nach Mikumi (im Wert von US$75), wenn Sie diese Safari direkt bei Camp Lilac buchen und sie im November 2026 beginnt. Nur die Hinfahrt, der Rücktransfer wird berechnet.',
    start: 'Ihr Hotel oder das Fährterminal in Dar es Salaam',
    imageAlt: 'Ein Gast beobachtet Elefanten aus nächster Nähe vom Safari-Geländewagen aus',
    itinerary: [
      { title: 'Tag 1: Von Dar es Salaam in den Mikumi-Nationalpark', text: 'Wir holen Sie an Ihrem Hotel oder an der Fähre ab und bringen Sie zum SGR-Bahnhof, von dem der Zug nach Morogoro fährt (1,5 Stunden). Ihr Fahrer-Guide erwartet Sie am Bahnsteig und fährt mit Ihnen direkt nach Mikumi zu einer Pirschfahrt ab dem späten Vormittag, die bis in den Nachmittag dauert. Mittagessen, eine Pause im Camp, dann eine weitere Pirschfahrt vom Nachmittag bis in den Abend, wenn die Ebene abkühlt.' },
      { title: 'Tag 2: Pirschfahrt am Morgen und Rückkehr nach Dar es Salaam', text: 'Eine Pirschfahrt ab dem frühen Morgen, solange die Raubtiere noch unterwegs sind, bis in den frühen Nachmittag. Mittagessen im Camp, dann 2 Stunden Fahrt nach Morogoro zum Nachmittagszug nach Dar es Salaam. Bei Ankunft bringen wir Sie zu Ihrem Hotel oder zum Flughafen.' },
    ],
    metaTitle: 'Mikumi-Safari 2 Tage ab Dar es Salaam per Zug',
    metaDescription: 'Die Wochenend-Safari ab Dar es Salaam oder Sansibar: SGR-Zug nach Morogoro, zwei Tage Pirschfahrten, eine Nacht im Luxuszelt. Ab US${price} pro Person.',
  },
  '3-day-mikumi-safari': {
    name: 'Mikumi-Safari, 3 Tage, 2 Nächte',
    summary: 'Drei Tage, zwei Nächte: SGR-Zug ab Dar es Salaam, Pirschfahrt bis Sonnenuntergang am Ankunftstag, ein ganzer Tag auf der Mkata-Ebene und eine letzte Fahrt durch den Park auf dem Rückweg. Zwei Nächte im Luxuszelt im Camp Lilac.',
    bestFor: 'Reisende, die den ganzen Park sehen möchten, ohne zu hetzen',
    offer: 'Kostenlose Economy-Tickets für den SGR-Zug von Dar es Salaam nach Morogoro für Ihre Gruppe plus kostenloser Transfer nach Mikumi (im Wert von US$75), wenn Sie diese Safari direkt bei Camp Lilac buchen und sie im November 2026 beginnt. Nur die Hinfahrt, die Rückreise wird berechnet.',
    start: 'SGR-Bahnhof Dar es Salaam, Morgenzug',
    imageAlt: 'Ein Gepard sitzt vor einem Safari-Geländewagen',
    variants: [
      { name: 'Klassisch', text: 'Zwei volle Tage Pirschfahrten, zwei Nächte im Camp Lilac.' },
      { name: 'Mit Kulturbesuch', text: 'Tauschen Sie einen Teil von Tag 2 gegen den Besuch eines Massai-Bomas oder eines Dorfes in der Nähe, zusammen mit Ihrem Guide. Gleicher Preis, sagen Sie es uns einfach bei der Buchung.' },
    ],
    itinerary: [
      { title: 'Tag 1: Von Dar es Salaam in den Mikumi-Nationalpark', text: 'Morgens mit dem SGR-Zug von Dar es Salaam nach Morogoro (1,5 Stunden). Ihr Fahrer-Guide erwartet Sie am Bahnsteig für die 2 Stunden Fahrt nach Mikumi. Die Hauptstraße führt mitten durch den Park, halten Sie also die Kamera bereit für Paviane, Giraffen, Elefanten, Zebras und Büffel am Straßenrand. Mittagessen, dann eine Pirschfahrt über die Ebene zu den Flusspferd-Tümpeln, mit Löwen, Elefanten, Elenantilopen, Warzenschweinen, Flusspferden, Krokodilen und Wasservögeln, bis zum Sonnenuntergang; danach eine kurze Fahrt zum Camp.' },
      { title: 'Tag 2: Ein ganzer Tag auf der Mkata-Ebene', text: 'Nach dem Frühstück im Camp holt Ihr Guide Sie zu einem ganzen Tag auf der Mkata-Ebene und an ihren von Baobabs gesäumten Rändern ab: über 400 Vogelarten, große Herden und im Waldland die besten Chancen auf einen Leoparden. Mittagessen, dann Pirschfahrt bis zum Sonnenuntergang.' },
      { title: 'Tag 3: Von Mikumi nach Dar es Salaam', text: 'Frühstück, Check-out und auf dem Weg hinaus noch eine Fahrt durch den Park. Mittagessen, dann die Fahrt nach Morogoro zum Nachmittagszug nach Dar es Salaam, wo wir Sie zu Ihrem Hotel, zur Fähre oder zum Flughafen bringen.' },
    ],
    metaTitle: 'Mikumi-Safari 3 Tage ab Dar es Salaam | Camp Lilac',
    metaDescription: 'Drei Tage, zwei Nächte: SGR-Zug ab Dar es Salaam, Pirschfahrt bei Sonnenuntergang, ein ganzer Tag auf der Mkata-Ebene, zwei Nächte im Luxuszelt. Ab US${price}.',
  },
  '4-day-mikumi-udzungwa-safari': {
    name: 'Mikumi und Udzungwa-Wasserfälle, 4 Tage, 3 Nächte',
    summary: 'Wildtiere und Regenwald in einer Reise: Besuch eines Massai-Bomas, ein ganzer Tag Pirschfahrten in Mikumi, die fünfstündige Wanderung zum Sanje-Wasserfall in den Udzungwa-Bergen und drei Nächte im Camp Lilac.',
    bestFor: 'Aktive Reisende und Familien mit älteren Kindern',
    offer: 'Kostenlose Economy-Tickets für den SGR-Zug von Dar es Salaam nach Morogoro für Ihre Gruppe plus kostenloser Transfer nach Mikumi (im Wert von US$75), wenn Sie diese Safari direkt bei Camp Lilac buchen und sie im November 2026 beginnt. Nur die Hinfahrt, die Rückreise wird berechnet.',
    start: 'SGR-Bahnhof Dar es Salaam, Morgenzug',
    imageAlt: 'Ein Löwe geht durch hohes Gras vor einem Safari-Geländewagen',
    itinerary: [
      { title: 'Tag 1: Von Dar es Salaam nach Mikumi, Besuch eines Massai-Bomas', text: 'Morgens mit dem SGR-Zug nach Morogoro (1,5 Stunden), dann 2 Stunden mit unserem Geländewagen nach Mikumi, mit Mittagessen unterwegs. Nach der Ankunft besuchen Sie ein Massai-Boma in der Nähe des Parks, bevor Sie sich im Camp einrichten und zu Abend essen, mit Blick auf den Bergkamm der Mikumi-Berge.' },
      { title: 'Tag 2: Ein ganzer Tag im Mikumi-Nationalpark', text: 'Pirschfahrt von 06:30 Uhr bis zum Sonnenuntergang: große Herden von Giraffen, Büffeln und Elefanten auf der Ebene, Hunderte Vogelarten und gute Chancen auf Löwen und Leoparden.' },
      { title: 'Tag 3: Udzungwa-Berge und Sanje-Wasserfall', text: 'Abfahrt um 07:00 Uhr zur 60 km langen Fahrt in den Udzungwa-Mountains-Nationalpark. Nach der Anmeldung am Hauptquartier des Parks wandern Sie mit einem Ranger zum Sanje-Wasserfall, der in vier Stufen herabstürzt und der höchste Wasserfall in Tansanias Nationalparks ist: rund fünf Stunden hin und zurück, mit Udzungwa-Stummelaffen und Sanje-Mangaben im Wald. Danach zurück ins Camp.' },
      { title: 'Tag 4: Von Mikumi nach Dar es Salaam', text: 'Am Morgen geht es zurück durch den Mikumi-Nationalpark, mit einer letzten Chance, Tiere von der Straße aus zu sehen, dann nach Morogoro zum Nachmittagszug nach Dar es Salaam. Wir bringen Sie zur Fähre, zu Ihrem Hotel oder zum Flughafen.' },
    ],
    metaTitle: 'Mikumi und Udzungwa-Wasserfälle, 4 Tage | Camp Lilac',
    metaDescription: 'Wildtiere und Regenwald: Besuch eines Massai-Bomas, ein ganzer Tag Pirschfahrten in Mikumi, Wanderung zum Sanje-Wasserfall, drei Nächte im Camp Lilac.',
  },
};

// List items, meals and stays of safaris.ts, translated one string at a time (unknown strings stay English).
const phrases: Record<string, string> = {
  'Mikumi National Park entry fees (non-residents)': 'Eintrittsgebühren für den Mikumi-Nationalpark (Nichtresidenten)',
  'Private open-roof 4×4 safari jeep for your group only': 'Privater Safari-Geländewagen (4×4) mit offenem Dach, nur für Ihre Gruppe',
  'Professional English-speaking driver-guide': 'Professioneller englischsprachiger Fahrer-Guide',
  'All transport as described': 'Alle beschriebenen Fahrten',
  'Full board on safari — all meals as listed day by day, with water and soft drinks': 'Vollpension auf Safari: alle Mahlzeiten wie im Tagesablauf angegeben, mit Wasser und Softdrinks',
  'All taxes and VAT': 'Alle Steuern und Mehrwertsteuer',
  'International flights': 'Internationale Flüge',
  'Tips (guideline US$10 per person per day)': 'Trinkgelder (Richtwert US$10 pro Person und Tag)',
  'Personal items — souvenirs, travel insurance, visa fees': 'Persönliche Ausgaben: Souvenirs, Reiseversicherung, Visagebühren',
  'Alcoholic drinks': 'Alkoholische Getränke',
  'Any government increase in taxes or park fees': 'Staatliche Erhöhungen von Steuern oder Parkgebühren',
  'Accommodation — book a tent or cabin at Camp Lilac separately': 'Unterkunft: Luxuszelt oder Cabin im Camp Lilac separat buchen',
  'SGR train tickets for the same-day trip from Dar es Salaam': 'SGR-Zugtickets für den Tagesausflug ab Dar es Salaam',
  'Airport transfers (available on request)': 'Flughafentransfers (auf Anfrage)',
  'One night at Camp Lilac in a luxury tent or cabin': 'Eine Nacht im Camp Lilac im Luxuszelt oder in einer Cabin',
  'Two nights at Camp Lilac in a luxury tent or cabin': 'Zwei Nächte im Camp Lilac im Luxuszelt oder in einer Cabin',
  'Three nights at Camp Lilac in a luxury tent or cabin': 'Drei Nächte im Camp Lilac im Luxuszelt oder in einer Cabin',
  'Transfers in Dar es Salaam to and from the SGR station': 'Transfers in Dar es Salaam zum und vom SGR-Bahnhof',
  'Transfers between Morogoro SGR station and the camp': 'Transfers zwischen dem SGR-Bahnhof Morogoro und dem Camp',
  'Udzungwa Mountains park entry and ranger-guided hike': 'Eintritt in den Udzungwa-Mountains-Nationalpark und Wanderung mit Ranger',
  'SGR train tickets Dar es Salaam ↔ Morogoro': 'SGR-Zugtickets Dar es Salaam ↔ Morogoro',
  'Return transfer from Mikumi to Morogoro SGR station': 'Rücktransfer von Mikumi zum SGR-Bahnhof Morogoro',
  'Return SGR train ticket and return transfer to Morogoro': 'SGR-Zugticket für die Rückfahrt und Rücktransfer nach Morogoro',
  'Dinner on day 2': 'Abendessen an Tag 2',
  'Dinner on day 3': 'Abendessen an Tag 3',
  'Dinner on day 4': 'Abendessen an Tag 4',
  'Hot lunch, water and soft drinks': 'Warmes Mittagessen, Wasser und Softdrinks',
  'Lunch and dinner, water and soft drinks': 'Mittag- und Abendessen, Wasser und Softdrinks',
  'Breakfast and lunch, water and soft drinks': 'Frühstück und Mittagessen, Wasser und Softdrinks',
  'Breakfast, lunch and dinner, water and soft drinks': 'Frühstück, Mittag- und Abendessen, Wasser und Softdrinks',
  'Lunch and dinner, water': 'Mittag- und Abendessen, Wasser',
  'Breakfast, lunch and dinner, water': 'Frühstück, Mittag- und Abendessen, Wasser',
  'Breakfast and lunch, water': 'Frühstück und Mittagessen, Wasser',
  'Camp Lilac — luxury tent or cabin, just outside the park': 'Camp Lilac: Luxuszelt oder Cabin, knapp außerhalb des Parks',
  '1 person': '1 Person',
  '2 or more': '2 oder mehr Personen',
};
export const tr = (s: string) => phrases[s] ?? s;

/** German texts of a safari, falling back to the English data field by field. */
export function safariDe(s: Safari) {
  const d = safarisDe[s.slug];
  const price = (t: string) => t.replace('{price}', String(s.price ?? ''));
  return {
    name: d?.name ?? s.name,
    summary: d?.summary ?? s.summary,
    bestFor: d?.bestFor ?? s.bestFor,
    offer: s.offer ? d?.offer ?? s.offer : undefined,
    start: d?.start ?? s.start,
    imageAlt: d?.imageAlt ?? s.imageAlt,
    variants: s.variants?.map((v, i) => ({
      name: d?.variants?.[i]?.name ?? v.name,
      text: d?.variants?.[i]?.text ?? v.text,
      price: v.price?.replace(/^from US\$(\d+) per person$/, 'ab US$$$1 pro Person'),
    })),
    itinerary: s.itinerary.map((day, i) => ({
      title: d?.itinerary[i]?.title ?? day.title,
      text: d?.itinerary[i]?.text ?? day.text,
      meals: day.meals && tr(day.meals),
      stay: day.stay && tr(day.stay),
    })),
    included: s.included.map(tr),
    excluded: s.excluded.map(tr),
    tiers: s.tiers?.map((t) => ({ people: tr(t.people), price: t.price })),
    metaTitle: d ? d.metaTitle : s.metaTitle,
    metaDescription: d ? price(d.metaDescription) : s.metaDescription,
  };
}

// ---------------------------------------------------------------- travel options, offers, wildlife

const travelDe: Record<string, { title: string; tag?: string; text: string }> = {
  'From Dar es Salaam by SGR train': { title: 'Ab Dar es Salaam mit dem SGR-Zug', tag: 'Empfohlen', text: 'Morgenzug nach Morogoro (1,5 Stunden). Unser Fahrer wartet am Bahnsteig und bringt Sie in 2 Stunden nach Mikumi, insgesamt etwa 3,5 Stunden.' },
  'From Dar es Salaam by car': { title: 'Ab Dar es Salaam mit dem Auto', text: 'Privater Transfer von Ihrem Hotel oder vom Flughafen, von Tür zu Tür. Im Vergleich zum Zug teurer, langsamer (7–8 statt etwa 3,5 Stunden) und deutlich anstrengender; wir schlagen ihn nur vor, wenn die Zugzeiten nicht passen.' },
  'From Zanzibar by ferry': { title: 'Ab Sansibar mit der Fähre', text: 'Schnellfähre von Stone Town nach Dar es Salaam (etwa 2 Stunden). Wir holen Sie am Fährterminal ab und bringen Sie mit Zug oder Auto weiter.' },
  'From Zanzibar by plane': { title: 'Ab Sansibar mit dem Flugzeug', text: 'Kurzer Flug nach Dar es Salaam, dann mit uns per Zug oder Auto weiter, oder ein Kleinflugzeug direkt zur Landepiste von Mikumi. Flüge kosten US$160–200 pro Person und Strecke, je nach Tag und Fluggesellschaft. Nicht enthalten; wir buchen sie für Sie.' },
  'Already on the road': { title: 'Bereits unterwegs', text: 'Sie kommen aus Morogoro, Iringa, Ruaha oder mit dem Bus? Wir holen Sie an Ihrem Hotel, am Bahnhof Morogoro oder in Mikumi-Stadt ab. Selbstfahrer sind ebenfalls willkommen.' },
};
export const travelOptionsDe = travelOptions.map((o) => ({
  title: travelDe[o.title]?.title ?? o.title,
  tag: o.tag ? travelDe[o.title]?.tag ?? o.tag : undefined,
  href: o.href ? L(o.href) : undefined,
  text: travelDe[o.title]?.text ?? o.text,
}));

const offersDeText: Record<string, { title: string; who: string; worth: string; text: string }> = {
  'free-transfer': {
    title: 'Kostenloser Transfer nach Mikumi',
    who: 'Mit der 2-Tage-Safari · November 2026',
    worth: 'Im Wert von US$75',
    text: 'Buchen Sie die Mikumi-Safari über 2 Tage und 1 Nacht direkt bei uns mit Beginn im November 2026, und wir holen Sie kostenlos am SGR-Bahnhof Morogoro ab und bringen Sie zum Camp. Nur die Hinfahrt, der Rücktransfer nach Morogoro wird berechnet.',
  },
  'free-train-and-transfer': {
    title: 'Kostenloses Zugticket + Transfer',
    who: 'Mit der 3- oder 4-Tage-Safari · November 2026',
    worth: 'Im Wert von US$85–95 zu zweit',
    text: 'Buchen Sie die 3- oder 4-Tage-Safari direkt bei uns mit Beginn im November 2026, und wir bezahlen die Economy-Tickets für den SGR-Zug von Dar es Salaam nach Morogoro für Ihre ganze Gruppe (etwa US$10–20 für zwei Personen) sowie den Transfer weiter nach Mikumi im Wert von US$75. Nur die Hinfahrt, die Rückreise wird berechnet.',
  },
};
export const offersDe = offers.map((o) => ({ ...o, enTitle: o.title, ...(offersDeText[o.id] ?? {}) }));

const benefitsDe: Record<string, { title: string; text: string }> = {
  'Breakfast and dinner included': { title: 'Frühstück und Abendessen inklusive', text: 'Jede Direktbuchung enthält Frühstück und Abendessen mit Blick auf den Bergkamm der Mikumi-Berge. Das Mittagessen kostet US$15 pro Person.' },
  'One total price, no booking fees': { title: 'Ein Gesamtpreis, keine Buchungsgebühren', text: 'Sie erhalten einen Preis für Unterkunft, Safari und Transfers und zahlen nichts, bevor Sie bestätigen. Eine Anzahlung über einen sicheren Kartenlink sichert Ihnen die Unterkunft.' },
  'The whole journey organised': { title: 'Die ganze Reise organisiert', text: 'Zugtickets, Abholung am Bahnhof Morogoro, Fähren und Flüge ab Sansibar: Sagen Sie uns, wie Sie reisen möchten, und wir organisieren es.' },
  'Our own guides and 4×4s': { title: 'Eigene Guides und Geländewagen', text: 'Die Pirschfahrten beginnen direkt am Camp, im privaten Geländewagen mit offenem Dach und einem Guide von Camp Lilac, abgestimmt auf Ihren Zug oder Flug.' },
};
export const directBenefitsDe = directBenefits.map((b) => benefitsDe[b.title] ?? b);

/** German alt texts of the wildlife photos in /images/wild (keys as in components/Wildlife.astro). */
export const wildAlt: Record<string, string> = {
  'lion-pride': 'Ein Löwenrudel schläft im Gras im Mikumi-Nationalpark',
  'elephant': 'Ein Afrikanischer Elefant zwischen den Bäumen im Mikumi-Nationalpark',
  'giraffe-sunset': 'Eine Giraffe überquert bei Sonnenuntergang die Ebene von Mikumi',
  'zebras-impala': 'Steppenzebras und eine Impala in der grünen Jahreszeit in Mikumi',
  'elephants-road': 'Elefanten laufen auf einer Sandpiste im Mikumi-Nationalpark',
  'giraffe-portraits': 'Zwei Massai-Giraffen blicken in Mikumi in die Kamera',
  'hippo-calf': 'Ein Flusspferdkalb ruht auf seiner Mutter in einem Tümpel in Mikumi',
  'lioness': 'Porträt einer Löwin im Mikumi-Nationalpark',
  'zebra-herd': 'Eine dichte Gruppe Steppenzebras in Mikumi',
  'buffalo': 'Ein Kaffernbüffel im trockenen Waldland von Mikumi',
  'impala': 'Ein Impala-Bock im hohen Gras von Mikumi',
  'lion': 'Ein Löwe schläft im Gras, aus der Nähe, in Mikumi',
  'giraffes-impala': 'Giraffen und Impalas zusammen auf der Ebene von Mikumi',
  'elephant-herd': 'Eine Elefantenherde zieht über die Ebene von Mikumi',
  'giraffes-evening': 'Giraffen im Abendlicht im Mikumi-Nationalpark',
  'zebras-grazing': 'Steppenzebras grasen in Mikumi',
  'first-1': 'Ein Löwe und eine Löwin ruhen in der Savanne',
  'first-2': 'Ein Leopard liegt im Gras',
  'first-3': 'Zwei Flusspferde kämpfen in einem Fluss',
  'first-4': 'Zwei Elefanten auf der Ebene',
  'road-sunset': 'Sonnenuntergang über der Straße durch den Mikumi-Nationalpark',
  'giraffes-dusk': 'Giraffen in der Abenddämmerung im Mikumi-Nationalpark',
  'zebra-line': 'Eine Reihe Zebras zieht durch goldenes Gras',
  'elephants-plain': 'Elefanten auf der offenen Ebene unterhalb der Berge',
  'giraffe-face': 'Eine Giraffe blickt in die Kamera',
  'giraffe-group': 'Eine Gruppe Giraffen auf der Ebene',
  'own-giraffes': 'Giraffen unter blauem Himmel, gesehen auf einer Safari mit Camp Lilac',
  'own-giraffe': 'Eine Giraffe auf der grünen Ebene, gesehen auf einer Safari mit Camp Lilac',
  'elephant-family': 'Eine Elefantenfamilie läuft an einem Flussufer entlang',
  'wildebeest': 'Eine große Herde Gnus',
  'lioness-cubs': 'Eine Löwin mit ihren Jungen',
  'plains-herds': 'Impalas, Zebras und ein Marabu auf der grünen Ebene von Mikumi',
  'zebras-pair': 'Zwei Zebras grasen auf grünem Grasland in Mikumi',
  'leopard-drive': 'Ein Leopard in einem Baum neben einem Safari-Geländewagen',
  'lion-track': 'Ein Löwe läuft auf einer Piste auf einen Safari-Geländewagen zu',
  'buffalo-pair': 'Zwei Kaffernbüffel',
  'elephants-storm': 'Elefanten im grünen Gras unter Gewitterwolken in Mikumi',
  'buffalo-herd': 'Eine Herde Kaffernbüffel in Mikumi',
  'lions-tree': 'Löwen schlafen unter einem Baum in Mikumi',
  'cheetahs': 'Zwei Geparde ruhen auf einem Baumstamm',
  'zebras-hills': 'Zebras grasen vor den Hügeln von Mikumi',
  'elephants-walk': 'Eine Elefantenfamilie zieht in einer Reihe durch Mikumi',
  'jeep-giraffes': 'Ein Safari-Geländewagen mit Giraffen und Impalas',
  'leopard-face': 'Nahaufnahme eines Leoparden',
  'sanje-waterfall': 'Der Sanje-Wasserfall stürzt die Felswände der Udzungwa-Berge hinab',
};
