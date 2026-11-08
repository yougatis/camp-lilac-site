// Italian wording shared by the pages in src/pages/it. Keyed by the English slug / id, so the same room or safari
// reads the same everywhere. Prices, order, photos, unit counts and dates stay in rooms.ts, safaris.ts, site.ts and
// offers.ts; anything missing here falls back to the English data.
// Hand-written; ask an Italian speaker to read it once before promoting it.
import type { Room } from './rooms';
import type { Safari } from './safaris';
import { site } from './site';
import { offers, directBenefits, OFFER_START } from './offers';
import { localize } from './i18n';

/** Italian URL of an English path (falls back to the English page when there is no Italian version). */
export const L = (enPath: string) => localize(enPath, 'it');

/** Decimal comma: '1.5' -> '1,5'. */
export const num = (s: string | number) => String(s).replace('.', ',');
export const trainH = num(site.trainHours);
export const driveH = num(site.driveHours);

// site.replyTime is English; translate the known value, fall back to the raw string if it changes.
export const replyIt = ({ 'within 4 hours during the day': 'entro 4 ore durante il giorno' } as Record<string, string>)[site.replyTime] ?? site.replyTime;

const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const offerDate = new Date(`${OFFER_START}T12:00:00+03:00`);
/** Month of the dated deals, e.g. 'novembre'. */
export const MESE = mesi[offerDate.getMonth()];
/** Month and year of the dated deals, e.g. 'novembre 2026'. */
export const MESE_ANNO = `${MESE} ${offerDate.getFullYear()}`;
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
/** 'June 2026' -> 'giugno 2026' (review dates). */
export const dateIt = (s: string) => monthsEn.reduce((t, m, i) => t.replace(m, mesi[i]), s);
const countries: Record<string, string> = { France: 'Francia', Latvia: 'Lettonia', Switzerland: 'Svizzera', Germany: 'Germania', Italy: 'Italia', Spain: 'Spagna', 'United Kingdom': 'Regno Unito' };
export const countryIt = (s: string) => countries[s] ?? s;

export const giorni = (n: number) => (n === 1 ? '1 giorno' : `${n} giorni`);

// ---------- Rooms ----------

export type RoomIt = {
  gloss: string; // short Italian gloss shown once next to the English product name
  kind: string;
  sleeps: string;
  bed: string;
  caption: string;
  imageAlt: string;
  imageAlts: string[];
  summary: string;
  description: string[];
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
};

const roomsIt: Record<string, RoomIt> = {
  'mountain-view-cabin': {
    gloss: 'la cabin con vista sui monti',
    kind: 'Cabin privata',
    sleeps: '2 adulti',
    bed: 'Letto king a baldacchino',
    caption: 'Il bagno, ore 17:50',
    imageAlt: 'Vasca da bagno nella Mountain View Cabin di Camp Lilac, con la catena dei monti Mikumi dalla finestra',
    imageAlts: [
      'Vasca da bagno freestanding nella Mountain View Cabin di Camp Lilac, con la catena dei monti Mikumi dalla finestra',
      'Letto king a baldacchino con zanzariera nella Mountain View Cabin, rivolto verso la terrazza aperta e le pianure di Mikumi',
      'La scala in legno che sale alla Mountain View Cabin con tetto di paglia, sotto un albero al tramonto',
      'L’ampia terrazza privata della Mountain View Cabin affacciata sulla savana, verso i monti Mikumi',
      'Sdraio sulla terrazza della Mountain View Cabin nell’ora dorata, con la catena dei monti Mikumi all’orizzonte',
      'Luce del mattino sul pavimento della Mountain View Cabin, con il letto a baldacchino e il panorama oltre le vetrate',
      'Ripiani aperti dell’armadio e condizionatore nella Mountain View Cabin di Camp Lilac',
      'Dentro la Mountain View Cabin: soffitto di paglia, pavimento in legno massello e porte a vetri sulla terrazza',
      'La terrazza della Mountain View Cabin al tramonto, incorniciata dal tetto di paglia, verso i monti Mikumi',
      'Il bagno della Mountain View Cabin con vasca freestanding, doppio lavabo e vista sulla savana',
    ],
    summary:
      'La nostra sistemazione migliore: una cabin privata con tetto di paglia di fronte alla catena dei monti Mikumi, con un’ampia terrazza, un letto king a baldacchino e una vasca da bagno con vista.',
    description: [
      'La Mountain View Cabin è la sistemazione più lussuosa di Mikumi e di tutta la regione di Morogoro, in una posizione unica, con la vista libera sulla catena dei monti. Vi svegliate davanti alle colline e chiudete la giornata guardando il tramonto dalla terrazza o dalla vasca.',
      'Dettagli in legno naturale e grandi finestre portano il paesaggio dentro la cabin. Sotto il tetto di paglia ci sono un morbido letto king a baldacchino, l’aria condizionata e un bagno curato in ogni dettaglio, con una vasca freestanding davanti a una finestra sulla savana. Dalla terrazza vedete passare impala, facoceri e scimmie: un safari senza uscire dalla cabin.',
      'Natura, esclusività e un pizzico di lusso in un solo posto: per le coppie che vogliono il comfort di un lodge nella cornice di un campo safari. Prenotando direttamente con noi, colazione e cena al ristorante sono incluse; il pranzo costa US$15 a persona (bevande escluse), con la stessa vista sui monti Mikumi.',
    ],
    highlights: [
      'Di fronte alla catena dei monti Mikumi',
      'Ampia terrazza privata per i tramonti',
      'Vasca freestanding con vista',
      'Letto king a baldacchino, aria condizionata, bagno privato',
      'Colazione e cena incluse, pranzo US$15 a persona',
    ],
    metaTitle: 'Mountain View Cabin: cabin privata a Mikumi | Camp Lilac',
    metaDescription: 'La nostra sistemazione migliore: cabin con tetto di paglia di fronte ai monti Mikumi, ampia terrazza, letto king a baldacchino e vasca con vista.',
  },
  'luxury-mountain-view-tent': {
    gloss: 'tenda di lusso con vista sui monti',
    kind: 'Tenda safari di lusso',
    sleeps: '2 adulti',
    bed: 'Letto king a baldacchino (o due letti singoli su richiesta)',
    caption: 'Di fronte ai monti Mikumi',
    imageAlt: 'Luxury Mountain View Tent di Camp Lilac, di fronte alla catena dei monti Mikumi',
    imageAlts: [
      'Luxury Mountain View Tent di Camp Lilac: dal letto lo sguardo esce dal fronte aperto della tenda di lusso fino ai monti Mikumi',
      'Poltrona e tavolino sulla terrazza rialzata di una Luxury Mountain View Tent al tramonto',
      'Una Luxury Mountain View Tent sulla sua pedana rialzata in legno nella savana di Mikumi, al crepuscolo',
      'I gradini in legno che salgono alla terrazza di una Luxury Mountain View Tent a Camp Lilac',
      'Terrazza privata di una Luxury Mountain View Tent con vista sulla savana fino alla catena dei monti Mikumi',
      'Letto a baldacchino sotto il tetto in tela di una Luxury Mountain View Tent, con pavimento in legno e poltrone',
      'Ingresso al bagno privato di una Luxury Mountain View Tent, con specchio, lavabo e poltrona',
      'Bagno privato di una Luxury Mountain View Tent: specchio rotondo, doppio lavabo e aria condizionata',
      'Dal letto di una Luxury Mountain View Tent verso i monti Mikumi all’alba',
      'Panca in legno sulla terrazza di una Luxury Mountain View Tent a Camp Lilac, affacciata sulla savana',
      'Tramonto sulla savana di Mikumi visto dalla terrazza di una Luxury Mountain View Tent',
    ],
    summary:
      'Le nostre tende di lusso più recenti: la stessa tenda di lusso in tela delle Luxury Jungle Tent, rivolta verso la catena dei monti Mikumi, con il tramonto più bello di Mikumi dalla vostra terrazza.',
    description: [
      'Le Luxury Mountain View Tent hanno aperto a fine 2026. Uniscono l’autentica esperienza in tenda di lusso delle Luxury Jungle Tent alla vista sulla catena dei monti Mikumi della Mountain View Cabin.',
      'Ogni tenda di lusso poggia su una terrazza rialzata in legno massello rivolta verso i monti, con letto a baldacchino, bagno privato completo, aria condizionata e letti molto comodi. La sera la catena dei monti Mikumi si colora d’oro e poi di lilla: è la vista da cui il campo prende il nome.',
      'Ideale per le coppie che vogliono l’atmosfera safari di una tenda di lusso e il paesaggio dei monti.',
    ],
    highlights: [
      'Di fronte alla catena dei monti Mikumi',
      'Tenda di lusso in tela su terrazza rialzata',
      'Bagno privato e aria condizionata',
      'Aperta a fine 2026',
      'Colazione e cena incluse, pranzo US$15 a persona',
    ],
    metaTitle: 'Luxury Mountain View Tent a Mikumi | Camp Lilac',
    metaDescription: 'Le nostre tende di lusso più recenti, di fronte ai monti Mikumi: terrazza rialzata, letto a baldacchino, bagno privato, aria condizionata e il tramonto più bello.',
  },
  'jungle-cabin': {
    gloss: 'la cabin tra gli alberi',
    kind: 'Cabin privata',
    sleeps: '2 adulti',
    bed: 'Letto king a baldacchino',
    caption: 'Dal sentiero, ore 07:15',
    imageAlt: 'La Jungle Cabin di Camp Lilac con il tetto di paglia e la scala in legno, tra gli alberi di miombo',
    imageAlts: [
      'Letto a baldacchino nella Jungle Cabin di Camp Lilac, con le porte aperte sulla terrazza e sugli alberi',
      'Letto king a baldacchino con zanzariera nella Jungle Cabin, con la luce del mattino dalle finestre',
      'La scala in legno che sale alla Jungle Cabin con tetto di paglia, tra gli alberi di miombo',
      'La terrazza che gira intorno alla Jungle Cabin sotto il tetto di paglia, affacciata sulla savana',
      'Tavolo e sedie sulla terrazza della Jungle Cabin, all’ombra della paglia, con gli alberi sullo sfondo',
      'Il tetto di paglia e le ringhiere in legno della Jungle Cabin di Camp Lilac, Mikumi',
      'La Jungle Cabin vista dalla terrazza: letto a baldacchino, pavimento in legno massello e porte a vetri',
      'Il corridoio della Jungle Cabin con il quadro di una giraffa, verso il bagno',
      'Il bagno in marmo della Jungle Cabin con doccia a pioggia, doppio lavabo e specchio retroilluminato',
      'Specchio retroilluminato e lavabo nel bagno in marmo della Jungle Cabin di Camp Lilac',
      'La Jungle Cabin di Camp Lilac vista dal sentiero, con il tetto di paglia tra gli alberi',
    ],
    summary:
      'Una cabin privata con tetto di paglia in mezzo agli alberi: una lunga terrazza tutt’intorno, un letto a baldacchino, un bagno in marmo e i suoni della savana di Mikumi.',
    description: [
      'La Jungle Cabin è una piccola casa privata di lusso in alto tra gli alberi, circondata dal verde. Un’ampia terrazza la circonda su tutti i lati, con tavolo e sedie e la vista sulle chiome, dove al mattino presto passano scimmie e impala.',
      'All’interno, pavimenti in legno caldo, travi a vista e opere d’arte scelte con gusto creano un ambiente accogliente ed elegante. Finestre dal pavimento al soffitto e grandi porte a vetri lasciano entrare la luce e i suoni del bosco, e la foresta diventa parte della casa. La grande camera da letto, con letto king a baldacchino, biancheria morbida e aria condizionata, si apre direttamente sulla terrazza: il posto migliore per il caffè del mattino o per il tramonto. Il bagno è in marmo e legno, con una doccia a pioggia walk-in.',
      'Vi addormentate con il canto dei grilli e i richiami lontani degli animali, e di giorno guardate passare la fauna dalla porta di casa. Per le coppie e per chi preferisce muri veri alla tela, ma vuole comunque sentire la savana.',
    ],
    highlights: [
      'Cabin privata circondata dagli alberi',
      'Terrazza tutt’intorno con tavolo e sedie',
      'Bagno in marmo con doccia a pioggia',
      'Letto king a baldacchino, aria condizionata',
      'Colazione e cena incluse, pranzo US$15 a persona',
    ],
    metaTitle: 'Jungle Cabin: cabin privata vicino a Mikumi | Camp Lilac',
    metaDescription: 'Una cabin privata con tetto di paglia tra gli alberi: terrazza tutt’intorno, letto a baldacchino, bagno in marmo con doccia a pioggia e i suoni della savana.',
  },
  'luxury-jungle-tent': {
    gloss: 'tenda di lusso tra gli alberi',
    kind: 'Tenda safari di lusso',
    sleeps: '2 adulti',
    bed: 'Letto king a baldacchino (o due letti singoli su richiesta)',
    caption: 'Tenda di lusso n. 2, tarda mattinata',
    imageAlt: 'Tenda di lusso di Camp Lilac su una pedana rialzata in legno sotto gli alberi, vicino al Parco Nazionale di Mikumi',
    imageAlts: [
      'Letto a baldacchino con zanzariera in una Luxury Jungle Tent di Camp Lilac, pavimento in legno e terrazza sullo sfondo',
      'Zona spogliatoio e lavabo in una Luxury Jungle Tent, con le pareti in tela e la vista sugli alberi',
      'I gradini in legno che salgono alla terrazza di una Luxury Jungle Tent, sulla sua pedana rialzata nella savana di Mikumi',
      'Una Luxury Jungle Tent di Camp Lilac con il fronte in tela aperto sulla terrazza e sulla savana',
      'La terrazza privata di una Luxury Jungle Tent, con le sedie rivolte verso il bosco di miombo',
      'Bagno privato di una Luxury Jungle Tent con specchio rotondo, lavabo e pavimento in legno',
      'Doppio lavabo e specchio rotondo nel bagno privato di una Luxury Jungle Tent di Camp Lilac',
      'Letto king sotto la zanzariera in una Luxury Jungle Tent, con la terrazza e gli alberi oltre il fronte aperto',
    ],
    summary:
      'Il classico soggiorno safari: una tenda di lusso in tela su una pedana rialzata in legno, con letto a baldacchino, bagno privato, aria condizionata e gli animali che passano davanti ai gradini.',
    description: [
      'Le Luxury Jungle Tent sono ciò per cui Camp Lilac è conosciuto: spaziose tende safari di lusso in tela su terrazze rialzate in legno levigato, con comodità che la maggior parte dei campi tendati di Mikumi non offre: bagno privato con doccia a pioggia walk-in, aria condizionata e i letti più morbidi della regione.',
      'Ogni tenda di lusso ha un morbido letto king sotto la zanzariera, grandi finestre in rete per far passare la brezza, pavimenti in legno e luci calde e soffuse: rustica ed elegante insieme. La veranda privata ha sedie fatte a mano rivolte verso la savana; impala, facoceri e scimmie passano spesso a pochi passi, e la notte si sentono solo gli animali.',
      'Se volete la vera atmosfera del safari senza rinunciare a una buona notte di sonno, questa è la tenda di lusso da prenotare.',
    ],
    highlights: [
      'Tenda safari di lusso in tela su terrazza rialzata',
      'Bagno privato e aria condizionata',
      'Morbido letto king con zanzariera, finestre in rete',
      'Terrazza privata, gli animali passano a pochi passi',
      'Colazione e cena incluse, pranzo US$15 a persona',
    ],
    metaTitle: 'Luxury Jungle Tent: tenda di lusso a Mikumi | Camp Lilac',
    metaDescription: 'Una tenda di lusso in tela su terrazza rialzata vicino al Parco Nazionale di Mikumi: letto a baldacchino, bagno privato, aria condizionata, animali a pochi passi.',
  },
  'luxury-family-tent': {
    gloss: 'tenda di lusso per famiglie',
    kind: 'Tenda safari di lusso',
    sleeps: '2 adulti + 2 bambini (fino a 4 ospiti)',
    bed: 'Letto matrimoniale più due letti singoli',
    caption: 'Posto per quattro',
    imageAlt: 'La terrazza privata di una Luxury Family Tent a Camp Lilac, affacciata sulla savana',
    imageAlts: [
      'La terrazza privata di una Luxury Family Tent di Camp Lilac, con le sedie rivolte verso la savana',
      'Bagno privato di una Luxury Family Tent con lavabo, specchio e una finestra sugli alberi',
      'Una Luxury Family Tent sulla sua terrazza rialzata sotto il cielo azzurro della savana di Mikumi',
      'Letto matrimoniale con zanzariera in una Luxury Family Tent, pavimento in legno e pareti in tela',
      'Dal letto di una Luxury Family Tent verso la terrazza e la savana',
      'Dentro una Luxury Family Tent: il letto matrimoniale e i due letti singoli per i bambini',
      'Bagno privato in una Luxury Family Tent con doppio lavabo, specchio rotondo e pavimento in legno',
      'Una Luxury Family Tent con il fronte in tela aperto: i letti e la terrazza privata',
      'I due letti singoli per i bambini in una Luxury Family Tent di Camp Lilac, con la terrazza sullo sfondo',
    ],
    summary:
      'Una spaziosa tenda di lusso per famiglie: posto per i genitori e due bambini, bagno privato, aria condizionata e terrazza privata. I bambini sotto i 4 anni non pagano; dai 4 agli 11 pagano la metà.',
    description: [
      'Le Luxury Family Tent sono pensate per i genitori che vogliono far vivere ai figli un vero campo safari senza rinunciare al comfort. Ogni tenda di lusso ospita fino a quattro persone, con un letto matrimoniale e due letti singoli, tutto sotto la stessa tela, su una terrazza rialzata.',
      'C’è un bagno privato completo, l’aria condizionata e una terrazza privata da cui i bambini possono avvistare impala e scimmie prima di colazione. Il campo è tranquillo e lontano dalla strada principale, e i bambini dormono bene.',
      'I bambini da 0 a 3 anni non pagano. Dai 4 agli 11 anni pagano la metà della tariffa adulti, dai 12 anni la tariffa adulti. Prenotando direttamente con noi, colazione e cena sono incluse; il pranzo costa US$15 a persona, gratis sotto i 4 anni. Le nostre guide sono abituate alle famiglie nei game drive e adattano il ritmo ai più piccoli.',
    ],
    highlights: [
      'Fino a 4 ospiti: una famiglia in una sola tenda di lusso',
      'Sotto i 4 anni gratis, dai 4 agli 11 anni metà prezzo',
      'Bagno privato e aria condizionata',
      'Terrazza privata su pedana rialzata',
      'Guide safari abituate alle famiglie',
    ],
    metaTitle: 'Luxury Family Tent: tenda di lusso per 4 | Camp Lilac',
    metaDescription: 'Una tenda di lusso per genitori e due bambini vicino al Parco di Mikumi: bagno privato, aria condizionata, terrazza. Sotto i 4 anni gratis, 4–11 anni metà prezzo.',
  },
};

/** Italian wording for a room, falling back to the English data field by field. */
export function roomIt(r: Room): RoomIt {
  const t = roomsIt[r.slug];
  return {
    gloss: t?.gloss ?? '',
    kind: t?.kind ?? (r.tier === 'tent' ? 'Tenda safari di lusso' : 'Cabin privata'),
    sleeps: t?.sleeps ?? r.sleeps,
    bed: t?.bed ?? r.bed,
    caption: t?.caption ?? r.caption,
    imageAlt: t?.imageAlt ?? r.imageAlt,
    imageAlts: t?.imageAlts ?? r.imageAlts ?? [],
    summary: t?.summary ?? r.summary,
    description: t?.description ?? r.description,
    highlights: t?.highlights ?? r.highlights,
    metaTitle: t?.metaTitle ?? `${r.name} a Mikumi | Camp Lilac`,
    metaDescription: t?.metaDescription ?? t?.summary ?? r.summary,
  };
}
export const viewIt = (r: Room) => (r.view === 'mountain' ? 'Vista sui monti Mikumi' : 'Tra gli alberi');
export const unitsIt = (r: Room) => (r.units > 1 ? `${r.units} unità` : 'Una sola unità');

// ---------- Safaris ----------

export type SafariIt = {
  name: string;
  bestFor: string;
  summary: string;
  imageAlt: string;
  start: string;
  offer?: string;
  variants?: { name: string; text: string; price?: string }[];
  itinerary: { title: string; text: string; meals?: string; stay?: string }[];
  included: string[];
  excluded: string[];
  metaTitle: string;
  metaDescription: string;
};

const stay = 'Camp Lilac: tenda di lusso o cabin, appena fuori dal parco';
const commonIncluded = [
  'Tariffe d’ingresso al Parco Nazionale di Mikumi (non residenti)',
  'Jeep 4×4 privata con tetto apribile, solo per il vostro gruppo',
  'Guida-autista professionista che parla inglese',
  'Tutti i trasporti indicati',
  'Pensione completa durante il safari: tutti i pasti indicati giorno per giorno, con acqua e bibite',
  'Tutte le tasse e l’IVA',
];
const commonExcluded = [
  'Voli internazionali',
  'Mance (indicativamente US$10 a persona al giorno)',
  'Spese personali: souvenir, assicurazione di viaggio, visto',
  'Bevande alcoliche',
  'Eventuali aumenti di tasse o tariffe del parco decisi dal governo',
];
const offerTrain = `Biglietti gratuiti del treno SGR in classe economica da Dar es Salaam a Morogoro per tutto il vostro gruppo, più il transfer gratuito fino a Mikumi (valore US$75), se prenotate questo safari direttamente con Camp Lilac con partenza a ${MESE_ANNO}. Solo andata: il viaggio di ritorno è a pagamento.`;

const safarisIt: Record<string, SafariIt> = {
  '1-day-mikumi-safari': {
    name: 'Safari a Mikumi di 1 giorno',
    bestFor: 'Gite in giornata da Morogoro o Dar es Salaam, e ospiti che si fermano una notte',
    summary:
      'Una giornata intera nel Parco Nazionale di Mikumi in jeep privata con tetto apribile e una nostra guida: game drive al mattino, pranzo caldo nella savana, secondo game drive fino alle 16:30. Da Morogoro, dal campo, oppure in giornata da Dar es Salaam con il treno SGR.',
    imageAlt: 'Giraffe che brucano vicino a una jeep da safari nella savana di Mikumi',
    start: 'Morogoro, Camp Lilac o la stazione SGR di Dar es Salaam',
    variants: [
      { name: 'Da Morogoro o dal campo', text: 'Pickup dal vostro hotel a Morogoro, dalla stazione SGR o da Camp Lilac. Giornata intera nel parco, rientro in serata.' },
      { name: 'Da Dar es Salaam in treno SGR, in giornata', text: 'Treno SGR del primo mattino da Dar es Salaam a Morogoro (1,5 ore), il nostro autista sul binario, una giornata intera a Mikumi e il treno della sera per tornare. Una giornata lunga, senza bisogno di pernottare.' },
    ],
    itinerary: [
      {
        title: 'Mattina: pickup e primo game drive',
        text: 'Il nostro autista vi viene a prendere in hotel, alla stazione SGR o al campo e vi porta all’ingresso principale di Mikumi (circa 2 ore da Morogoro). All’ingresso salite su una jeep privata con tetto apribile insieme alla vostra guida e partite verso la piana alluvionale del Mkata, dove bufali, giraffe, elefanti, zebre, impala e, con un po’ di fortuna, i leoni si trovano più facilmente nelle prime ore del giorno. A Mikumi vivono quattro dei Big Five.',
        meals: 'Pranzo caldo nella savana, acqua e bibite',
      },
      {
        title: 'Pomeriggio: pozze degli ippopotami e rientro',
        text: 'Dopo un pranzo caldo nella savana, il game drive prosegue verso le pozze degli ippopotami e gli abbeveratoi fino alle 16:30 circa. La guida vi riaccompagna poi all’ingresso e quindi a Morogoro per il treno della sera verso Dar es Salaam, oppure al vostro hotel o al campo.',
      },
    ],
    included: [...commonIncluded],
    excluded: ['Alloggio: prenotate a parte una tenda di lusso o una cabin a Camp Lilac', 'Biglietti del treno SGR per la gita in giornata da Dar es Salaam', 'Transfer da e per l’aeroporto (disponibili su richiesta)', ...commonExcluded],
    metaTitle: 'Safari a Mikumi di 1 giorno da Morogoro o Dar | Camp Lilac',
    metaDescription: 'Una giornata intera nel Parco Nazionale di Mikumi in 4x4 privata con una nostra guida: game drive al mattino, pranzo caldo nella savana, pozze degli ippopotami.',
  },
  '2-day-mikumi-safari': {
    name: 'Safari a Mikumi di 2 giorni, 1 notte',
    bestFor: 'Il safari del fine settimana da Dar es Salaam e da Zanzibar',
    summary:
      'Il classico del fine settimana da Dar es Salaam: treno SGR fino a Morogoro, due giorni di game drive in jeep privata e una notte in una tenda di lusso a Camp Lilac. Di nuovo a Dar es Salaam la sera del secondo giorno.',
    imageAlt: 'Un ospite osserva da vicino gli elefanti da una jeep da safari a Mikumi',
    start: 'Il vostro hotel o il terminal dei traghetti a Dar es Salaam',
    offer: `Transfer gratuito dalla stazione SGR di Morogoro a Mikumi (valore US$75) se prenotate questo safari direttamente con Camp Lilac con partenza a ${MESE_ANNO}. Solo andata: il transfer di ritorno è a pagamento.`,
    itinerary: [
      {
        title: 'Giorno 1: da Dar es Salaam al Parco Nazionale di Mikumi',
        text: 'Vi veniamo a prendere in hotel o al traghetto e vi accompagniamo alla stazione SGR per il treno fino a Morogoro (1,5 ore). La vostra guida-autista vi aspetta sul binario e vi porta direttamente a Mikumi per un game drive di tarda mattinata che continua nel pomeriggio. Pranzo, una pausa al campo, poi un altro game drive dal pomeriggio fino a sera, quando la piana si rinfresca.',
        meals: 'Pranzo e cena, acqua e bibite',
        stay,
      },
      {
        title: 'Giorno 2: game drive all’alba e ritorno a Dar es Salaam',
        text: 'Un game drive all’alba, quando i predatori sono ancora in movimento, che prosegue fino al primo pomeriggio. Pranzo al campo, poi le 2 ore di strada fino a Morogoro per il treno del pomeriggio verso Dar es Salaam. All’arrivo vi lasciamo al vostro hotel o in aeroporto.',
        meals: 'Colazione e pranzo, acqua e bibite',
      },
    ],
    included: ['Una notte a Camp Lilac in tenda di lusso o in cabin', ...commonIncluded, 'Transfer a Dar es Salaam da e per la stazione SGR'],
    excluded: ['Biglietti del treno SGR Dar es Salaam ↔ Morogoro', 'Transfer di ritorno da Mikumi alla stazione SGR di Morogoro', 'Cena del giorno 2', ...commonExcluded],
    metaTitle: 'Safari a Mikumi di 2 giorni da Dar in treno | Camp Lilac',
    metaDescription: 'Il safari del fine settimana da Dar es Salaam o Zanzibar: treno SGR fino a Morogoro, due giorni di game drive in 4x4 privata e una notte in tenda di lusso.',
  },
  '3-day-mikumi-safari': {
    name: 'Safari a Mikumi di 3 giorni, 2 notti',
    bestFor: 'Chi vuole vedere tutto il parco senza fretta',
    summary:
      'Tre giorni e due notti: treno SGR da Dar es Salaam, game drive al tramonto il giorno dell’arrivo, una giornata intera sulla piana del Mkata e un ultimo giro nel parco sulla via del ritorno. Due notti in una tenda di lusso a Camp Lilac.',
    imageAlt: 'Un ghepardo seduto davanti a una jeep da safari nel Parco Nazionale di Mikumi',
    start: 'Stazione SGR di Dar es Salaam, treno del mattino',
    offer: offerTrain,
    variants: [
      { name: 'Classico', text: 'Due giornate intere di game drive, due notti a Camp Lilac.' },
      { name: 'Con una visita culturale', text: 'Sostituite parte del giorno 2 con la visita a un boma masai o a un villaggio vicino insieme alla vostra guida. Stesso prezzo: basta dircelo quando prenotate.' },
    ],
    itinerary: [
      {
        title: 'Giorno 1: da Dar es Salaam al Parco Nazionale di Mikumi',
        text: 'Treno SGR del mattino da Dar es Salaam a Morogoro (1,5 ore). La vostra guida-autista vi aspetta sul binario per le 2 ore di strada fino a Mikumi: la strada principale attraversa il parco, quindi tenete pronta la macchina fotografica per babbuini, giraffe, elefanti, zebre e bufali a bordo strada. Pranzo, poi un game drive attraverso le pianure fino alle pozze degli ippopotami (leoni, elefanti, eland, facoceri, ippopotami, coccodrilli e uccelli acquatici) fino al tramonto, e un breve tragitto fino al campo.',
        meals: 'Pranzo e cena, acqua e bibite',
        stay,
      },
      {
        title: 'Giorno 2: giornata intera sulla piana del Mkata',
        text: 'Dopo la colazione al campo la guida vi viene a prendere per una giornata intera alla scoperta della piana alluvionale del Mkata e dei suoi margini punteggiati di baobab: oltre 400 specie di uccelli, grandi mandrie e le migliori possibilità di vedere il leopardo nel bosco. Pranzo al sacco in un punto panoramico, poi game drive fino al tramonto.',
        meals: 'Colazione, pranzo al sacco e cena, acqua e bibite',
        stay,
      },
      {
        title: 'Giorno 3: da Mikumi a Dar es Salaam',
        text: 'Colazione, check-out e un ultimo giro nel parco sulla via d’uscita. Pranzo, poi la strada fino a Morogoro per il treno del pomeriggio verso Dar es Salaam, dove vi lasciamo al vostro hotel, al traghetto o in aeroporto.',
        meals: 'Colazione e pranzo, acqua e bibite',
      },
    ],
    included: ['Due notti a Camp Lilac in tenda di lusso o in cabin', 'Transfer tra la stazione SGR di Morogoro e il campo', ...commonIncluded],
    excluded: ['Biglietto del treno SGR di ritorno e transfer di ritorno a Morogoro', 'Cena del giorno 3', ...commonExcluded],
    metaTitle: 'Safari a Mikumi di 3 giorni da Dar es Salaam | Camp Lilac',
    metaDescription: 'Tre giorni e due notti: treno SGR da Dar es Salaam, game drive al tramonto all’arrivo, una giornata intera sulla piana di Mikumi, due notti in tenda di lusso.',
  },
  '4-day-mikumi-udzungwa-safari': {
    name: 'Safari a Mikumi e alle cascate di Udzungwa, 4 giorni, 3 notti',
    bestFor: 'Viaggiatori attivi e famiglie con ragazzi più grandi',
    summary:
      'Fauna selvatica e foresta pluviale in un solo viaggio: la visita a un boma masai, una giornata intera di game drive a Mikumi, il trekking di cinque ore alla cascata Sanje nei monti Udzungwa e tre notti a Camp Lilac.',
    imageAlt: 'Un leone cammina nell’erba alta davanti a una jeep da safari',
    start: 'Stazione SGR di Dar es Salaam, treno del mattino',
    offer: offerTrain,
    itinerary: [
      {
        title: 'Giorno 1: da Dar es Salaam a Mikumi, visita a un boma masai',
        text: 'Treno SGR del mattino fino a Morogoro (1,5 ore), poi la nostra jeep per le 2 ore di strada fino a Mikumi, con il pranzo lungo il percorso. All’arrivo visitate un boma masai vicino al parco, poi vi sistemate al campo per la cena di fronte alla catena dei monti Mikumi.',
        meals: 'Pranzo e cena, acqua',
        stay,
      },
      {
        title: 'Giorno 2: giornata intera nel Parco Nazionale di Mikumi',
        text: 'Game drive dalle 06:30 fino al tramonto: grandi branchi di giraffe, bufali ed elefanti sulla piana, centinaia di specie di uccelli e buone possibilità di vedere leoni e leopardi.',
        meals: 'Colazione, pranzo al sacco e cena, acqua',
        stay,
      },
      {
        title: 'Giorno 3: monti Udzungwa e cascata Sanje',
        text: 'Partenza alle 07:00 per i 60 km di strada fino al Parco Nazionale dei Monti Udzungwa. Dopo la registrazione alla sede del parco, trekking con un ranger fino alla cascata Sanje, che scende in quattro salti ed è la più alta dei parchi nazionali della Tanzania: circa cinque ore andata e ritorno, con il colobo rosso di Udzungwa e il cercocebo crestato di Sanje nella foresta. Pranzo al sacco lungo il sentiero, poi rientro al campo.',
        meals: 'Colazione, pranzo al sacco e cena, acqua',
        stay,
      },
      {
        title: 'Giorno 4: da Mikumi a Dar es Salaam',
        text: 'Al mattino si riattraversa il Parco Nazionale di Mikumi, con un’ultima occasione di avvistare animali dalla strada, poi si prosegue fino a Morogoro per il treno del pomeriggio verso Dar es Salaam. Vi lasciamo al traghetto, al vostro hotel o in aeroporto.',
        meals: 'Colazione e pranzo, acqua',
      },
    ],
    included: ['Tre notti a Camp Lilac in tenda di lusso o in cabin', 'Transfer tra la stazione SGR di Morogoro e il campo', 'Ingresso al Parco dei Monti Udzungwa e trekking con ranger', ...commonIncluded],
    excluded: ['Biglietto del treno SGR di ritorno e transfer di ritorno a Morogoro', 'Cena del giorno 4', ...commonExcluded],
    metaTitle: 'Safari Mikumi e cascate di Udzungwa, 4 giorni | Camp Lilac',
    metaDescription: 'Fauna e foresta pluviale in un solo viaggio: visita a un boma masai, una giornata di game drive a Mikumi, trekking alla cascata Sanje, tre notti a Camp Lilac.',
  },
};

/** 'from US$214 per person' -> 'da US$214 a persona'. */
const priceTextIt = (s?: string) => s?.replace(/^from /, 'da ').replace(/ per person$/, ' a persona');

/** Italian wording for a safari, falling back to the English data field by field. */
export function safariIt(s: Safari): SafariIt {
  const t = safarisIt[s.slug];
  return {
    name: t?.name ?? s.name,
    bestFor: t?.bestFor ?? s.bestFor,
    summary: t?.summary ?? s.summary,
    imageAlt: t?.imageAlt ?? s.imageAlt,
    start: t?.start ?? s.start,
    offer: t ? t.offer : s.offer,
    // variant prices come from the English data, only reworded
    variants: s.variants?.map((v, i) => ({ name: t?.variants?.[i]?.name ?? v.name, text: t?.variants?.[i]?.text ?? v.text, price: priceTextIt(v.price) })),
    itinerary: t?.itinerary ?? s.itinerary,
    included: t?.included ?? s.included,
    excluded: t?.excluded ?? s.excluded,
    metaTitle: t?.metaTitle ?? `${t?.name ?? s.name} | Camp Lilac`,
    metaDescription: t?.metaDescription ?? t?.summary ?? s.summary,
  };
}
export const peopleIt = (p: string) => ({ '1 person': '1 persona', '2 or more': '2 o più persone' } as Record<string, string>)[p] ?? p;

// ---------- Travel options (Italian version of travelOptions in safaris.ts) ----------

export const travelIt = [
  { title: 'Da Dar es Salaam in treno SGR', tag: 'Consigliato', href: L('/getting-here') + '#treno', text: `Treno del mattino fino a Morogoro (${trainH} ore). Il nostro autista vi aspetta sul binario e in ${driveH} ore siete a Mikumi: circa 3,5 ore in tutto.` },
  { title: 'Da Dar es Salaam in auto', href: L('/getting-here') + '#strada', text: 'Un transfer privato dal vostro hotel o dall’aeroporto, porta a porta. Rispetto al treno costa di più, è più lento (7–8 ore invece di circa 3,5) e molto più stancante: lo proponiamo solo se gli orari del treno non vi vanno bene.' },
  { title: 'Da Zanzibar in traghetto', href: L('/safari-from-zanzibar'), text: 'Traghetto veloce da Stone Town a Dar es Salaam (circa 2 ore). Vi aspettiamo al terminal e proseguiamo insieme in treno o in auto.' },
  { title: 'Da Zanzibar in aereo', href: L('/safari-from-zanzibar') + '#volo', text: 'Un breve volo fino a Dar es Salaam e poi treno o auto con noi, oppure un piccolo aereo direttamente sulla pista di Mikumi. Il volo costa US$160–200 a persona per tratta, secondo il giorno e la compagnia; non è incluso, ma lo prenotiamo noi.' },
  { title: 'Siete già in viaggio', href: L('/getting-here') + '#sud', text: 'Arrivate da Morogoro, Iringa, Ruaha o in autobus? Vi veniamo a prendere in hotel, alla stazione di Morogoro o nel paese di Mikumi. Benvenuti anche a chi viaggia con la propria auto.' },
];

// ---------- Wildlife photos (alt texts of src/components/Wildlife.astro) ----------

export const wildAlt: Record<string, string> = {
  'lion-pride': 'Un branco di leoni addormentati nell’erba nel Parco Nazionale di Mikumi',
  'elephant': 'Un elefante africano tra gli alberi nel Parco Nazionale di Mikumi',
  'giraffe-sunset': 'Una giraffa attraversa la pianura al tramonto a Mikumi',
  'zebras-impala': 'Zebre e un impala nella stagione verde a Mikumi',
  'elephants-road': 'Elefanti che camminano su una pista sterrata nel Parco Nazionale di Mikumi',
  'giraffe-portraits': 'Due giraffe masai che guardano verso l’obiettivo a Mikumi',
  'hippo-calf': 'Un piccolo di ippopotamo appoggiato alla madre in una pozza di Mikumi',
  'lioness': 'Ritratto di una leonessa nel Parco Nazionale di Mikumi',
  'zebra-herd': 'Un gruppo compatto di zebre a Mikumi',
  'buffalo': 'Un bufalo cafro nel bosco secco di Mikumi',
  'impala': 'Un impala maschio nell’erba alta di Mikumi',
  'lion': 'Un leone addormentato nell’erba, da vicino, a Mikumi',
  'giraffes-impala': 'Giraffe e impala insieme nelle pianure di Mikumi',
  'elephant-herd': 'Un branco di elefanti attraversa la piana alluvionale di Mikumi',
  'giraffes-evening': 'Giraffe nella luce della sera nel Parco Nazionale di Mikumi',
  'zebras-grazing': 'Zebre al pascolo a Mikumi',
  'first-1': 'Un leone e una leonessa a riposo nella savana',
  'first-2': 'Un leopardo sdraiato nell’erba',
  'first-3': 'Due ippopotami che si affrontano in un fiume',
  'first-4': 'Due elefanti nella pianura',
  'road-sunset': 'Tramonto sulla strada che attraversa il Parco Nazionale di Mikumi',
  'giraffes-dusk': 'Giraffe al crepuscolo nel Parco Nazionale di Mikumi',
  'zebra-line': 'Una fila di zebre attraversa l’erba dorata',
  'elephants-plain': 'Elefanti nella pianura aperta ai piedi dei monti',
  'giraffe-face': 'Una giraffa che guarda verso l’obiettivo',
  'giraffe-group': 'Un gruppo di giraffe nella pianura',
  'own-giraffes': 'Giraffe sotto il cielo azzurro, viste durante un safari di Camp Lilac',
  'own-giraffe': 'Una giraffa nelle pianure verdi, vista durante un safari di Camp Lilac',
  'elephant-family': 'Una famiglia di elefanti cammina lungo la riva di un fiume',
  'wildebeest': 'Una grande mandria di gnu',
  'lioness-cubs': 'Una leonessa con i suoi cuccioli',
  'plains-herds': 'Impala, zebre e un marabù nelle pianure verdi di Mikumi',
  'zebras-pair': 'Due zebre al pascolo sui prati verdi di Mikumi',
  'leopard-drive': 'Un leopardo su un albero accanto a una jeep da safari',
  'lion-track': 'Un leone cammina lungo una pista verso una jeep da safari',
  'buffalo-pair': 'Due bufali cafri',
  'elephants-storm': 'Elefanti nell’erba verde sotto le nuvole di un temporale a Mikumi',
  'buffalo-herd': 'Una mandria di bufali cafri',
  'lions-tree': 'Leoni addormentati sotto un albero a Mikumi',
  'cheetahs': 'Due ghepardi a riposo su un tronco',
  'zebras-hills': 'Zebre al pascolo ai piedi delle colline di Mikumi',
  'elephants-walk': 'Una famiglia di elefanti cammina in fila',
  'jeep-giraffes': 'Una jeep da safari con giraffe e impala',
  'leopard-face': 'Ritratto ravvicinato di un leopardo',
  'sanje-waterfall': 'La cascata Sanje scende lungo le pareti dei monti Udzungwa',
};

// ---------- Deals and book-direct benefits (Italian version of offers.ts) ----------

const offersItText: Record<string, { title: string; who: string; worth: string; text: string }> = {
  'free-transfer': {
    title: 'Transfer gratuito fino a Mikumi',
    who: `Con il safari a Mikumi di 2 giorni, 1 notte · ${MESE_ANNO}`,
    worth: 'Valore US$75',
    text: `Prenotate direttamente con noi il safari a Mikumi di 2 giorni, 1 notte con partenza a ${MESE_ANNO}: vi veniamo a prendere alla stazione SGR di Morogoro e vi portiamo al campo gratuitamente. Solo andata: il transfer di ritorno a Morogoro è a pagamento.`,
  },
  'free-train-and-transfer': {
    title: 'Biglietto del treno + transfer gratuiti',
    who: `Con il safari di 3 o 4 giorni · ${MESE_ANNO}`,
    worth: 'Valore US$85–95 per due persone',
    text: `Prenotate direttamente con noi il safari di 3 o 4 giorni con partenza a ${MESE_ANNO}: paghiamo noi i biglietti del treno SGR in classe economica da Dar es Salaam a Morogoro per tutto il gruppo (circa US$10–20 per due persone), più il transfer da US$75 fino a Mikumi. Solo andata: il viaggio di ritorno è a pagamento.`,
  },
};
export const offersIt = offers.map((o) => ({ ...o, ...(offersItText[o.id] ?? {}) }));

const benefitsIt = [
  { title: 'Colazione e cena incluse', text: 'Ogni prenotazione diretta comprende la colazione e una cena di tre portate di fronte alla catena dei monti Mikumi. Il pranzo costa US$15 a persona.' },
  { title: 'Un solo prezzo totale, nessuna commissione', text: 'Ricevete un unico prezzo per l’alloggio, il safari e i transfer, e non pagate nulla finché non confermate. Un acconto con carta, tramite un link di pagamento sicuro, blocca la vostra sistemazione.' },
  { title: 'Tutto il viaggio organizzato', text: 'Biglietti del treno, pickup alla stazione di Morogoro, traghetti e voli da Zanzibar: diteci come volete viaggiare e organizziamo noi.' },
  { title: 'Le nostre guide e le nostre 4×4', text: 'I game drive partono direttamente dal campo, in una jeep privata con tetto apribile e una guida di Camp Lilac, con orari adattati al vostro treno o volo.' },
];
export const directBenefitsIt = directBenefits.map((b, i) => benefitsIt[i] ?? b);

/** The ribbon under the home hero. The first item is the dated deal. */
export const ribbonIt = {
  offer: `${cap(MESE)}: transfer gratuito con i safari di 2 o più giorni`,
  items: [
    'Colazione e cena incluse',
    'Tende di lusso e cabin con aria condizionata',
    'Le nostre guide e le nostre 4×4',
    'L’unica vista sulla catena dei monti Mikumi',
    'Tranquillo, a 2 km dalla strada principale',
    'A pochi minuti dall’ingresso del parco',
    'Appena fuori dal Parco Nazionale di Mikumi',
  ],
};
