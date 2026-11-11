// Spanish (neutral: Spain + Latin America, "ustedes") texts shared by more than one page under src/pages/es/.
// Everything is keyed by the ENGLISH slug / id / key. When a key is missing, the English data is used instead,
// so a new room, safari or photo shows up in English until someone adds its Spanish text here.
// Prices, units, photos, dates, phone and email always come from the English data files (rooms, safaris, offers, site).
// Hand-written; ask a native Spanish speaker to read it once.

import type { Room } from './rooms';
import type { Safari } from './safaris';
import { site } from './site';
import { OFFER_MONTH, offers, directBenefits } from './offers';
import { localize } from './i18n';

export const L = 'es' as const;
/** Spanish URL of an English path (falls back to the English page). */
export const es = (enPath: string) => localize(enPath, L);
/** Marker for links that stay in English. */
export const EN = '(en inglés)';

// site.replyTime is written in English; translate the known value, fall back to the raw string if it changes.
export const replyTime = site.replyTime === 'within 4 hours during the day' ? 'en menos de 4 horas durante el día' : site.replyTime;

const months: Record<string, string> = {
  January: 'enero', February: 'febrero', March: 'marzo', April: 'abril', May: 'mayo', June: 'junio',
  July: 'julio', August: 'agosto', September: 'septiembre', October: 'octubre', November: 'noviembre', December: 'diciembre',
};
/** "November 2026" -> "noviembre de 2026" (unchanged if it does not match). */
export const monthYear = (s: string) => s.replace(/^([A-Z][a-z]+) (\d{4})$/, (m, mo, y) => (months[mo] ? `${months[mo]} de ${y}` : m));
export const offerMonth = monthYear(OFFER_MONTH);

/** 4.9 -> "4,9" */
export const num = (n: number | string) => String(n).replace('.', ',');
export const days = (n: number) => `${n} ${n === 1 ? 'día' : 'días'}`;

const countries: Record<string, string> = { France: 'Francia', Latvia: 'Letonia', Algeria: 'Argelia', Switzerland: 'Suiza', Germany: 'Alemania', Italy: 'Italia', Spain: 'España', 'United Kingdom': 'Reino Unido', 'United States': 'Estados Unidos', Netherlands: 'Países Bajos', Belgium: 'Bélgica', Tanzania: 'Tanzania', Kenya: 'Kenia', 'South Africa': 'Sudáfrica', 'Hong Kong': 'Hong Kong' };
export const country = (c: string) => countries[c] ?? c;

// ---------------------------------------------------------------- rooms

type RoomText = Partial<Pick<Room, 'sleeps' | 'bed' | 'imageAlt' | 'caption' | 'summary' | 'description' | 'highlights' | 'metaTitle' | 'imageAlts'>> & {
  gloss?: string; // short Spanish explanation of the English product name
  metaDescription?: string; // WITHOUT the price: the page appends "Desde US$… por noche." from rooms.ts when it fits
};

const lunch = 'Desayuno y cena incluidos; almuerzo US$15 por persona';

const roomText: Record<string, RoomText> = {
  'mountain-view-cabin': {
    gloss: 'cabaña con vista a los montes',
    metaTitle: 'Mountain View Cabin: cabaña privada en Mikumi | Camp Lilac',
    metaDescription: 'Nuestro mejor alojamiento: una cabaña privada con techo de paja frente a la cordillera de Mikumi, con terraza amplia y bañera con vistas.',
    sleeps: '2 adultos',
    bed: 'Cama king con dosel',
    imageAlt: 'Bañera exenta en la Mountain View Cabin de Camp Lilac, con la cordillera de Mikumi a través de la ventana',
    caption: 'El baño, 17:50',
    summary: 'Nuestro mejor alojamiento: una cabaña privada con techo de paja frente a la cordillera de Mikumi, con una terraza amplia, cama king con dosel y una bañera con vistas.',
    description: [
      'La Mountain View Cabin es el alojamiento más lujoso de Mikumi y de toda la región de Morogoro, en un emplazamiento único con vistas despejadas a los montes Mikumi. Se despiertan frente a las colinas y terminan el día viendo la puesta de sol desde la terraza o desde la bañera.',
      'Los detalles de madera natural y los amplios ventanales traen el paisaje al interior. Bajo el techo de paja hay una cama king con dosel, aire acondicionado moderno y un baño muy cuidado, con una bañera exenta junto a una ventana que da a la sabana. Desde la terraza verán pasar impalas, facoceros y monos: un safari sin salir de la cabaña.',
      'Naturaleza, exclusividad y placer en un solo lugar, para parejas que quieren la comodidad de un lodge en el entorno de un campamento de safari. Al reservar directamente, el desayuno y la cena en nuestro restaurante, con la misma vista a la cordillera de Mikumi, están incluidos; el almuerzo cuesta US$15 por persona (bebidas aparte).',
    ],
    highlights: ['Frente a la cordillera de Mikumi', 'Amplia terraza privada para ver el atardecer', 'Bañera exenta con vistas', 'Cama king con dosel, aire acondicionado, baño privado', lunch],
    imageAlts: [
      'Bañera exenta en la Mountain View Cabin de Camp Lilac, con la cordillera de Mikumi a través de la ventana',
      'Cama king con dosel y mosquitero en la Mountain View Cabin, frente a la terraza abierta y la llanura de Mikumi',
      'Escalera de madera que sube a la Mountain View Cabin, con techo de paja, bajo un árbol al atardecer',
      'La amplia terraza privada de la Mountain View Cabin, con vista sobre la sabana hacia los montes Mikumi',
      'Tumbonas en la terraza de la Mountain View Cabin a última hora de la tarde, con la cordillera de Mikumi en el horizonte',
      'Luz de la mañana sobre el suelo de la Mountain View Cabin, con la cama con dosel y la vista al fondo',
      'Estantes de armario abiertos y aparato de aire acondicionado en la Mountain View Cabin de Camp Lilac',
      'Interior de la Mountain View Cabin: techo de paja, suelo de madera noble y puertas de cristal hacia la terraza',
      'La terraza de la Mountain View Cabin al atardecer, enmarcada por el techo de paja, mirando hacia los montes Mikumi',
      'Baño de la Mountain View Cabin con bañera exenta, dos lavabos y vista a la sabana',
    ],
  },
  'luxury-mountain-view-tent': {
    gloss: 'tienda de lujo con vista a los montes',
    metaTitle: 'Luxury Mountain View Tent: tienda de lujo en Mikumi',
    metaDescription: 'Nuestras tiendas de lujo más nuevas miran a la cordillera de Mikumi: terraza elevada, cama con dosel, baño privado y aire acondicionado.',
    sleeps: '2 adultos',
    bed: 'Cama king con dosel (o dos camas individuales a petición)',
    imageAlt: 'Luxury Mountain View Tent en Camp Lilac, frente a la cordillera de Mikumi',
    caption: 'Frente a la cordillera de Mikumi',
    summary: 'Nuestras tiendas de lujo más nuevas: la misma tienda de lujo de lona que las Luxury Jungle Tents, orientada hacia la cordillera de Mikumi, con el mejor atardecer de Mikumi desde su propia terraza.',
    description: [
      'Las Luxury Mountain View Tents se inauguraron a finales de 2026. Combinan la auténtica experiencia de dormir en una tienda de lujo de las Luxury Jungle Tents con la vista a la cordillera de Mikumi de la Mountain View Cabin.',
      'Cada tienda de lujo se levanta sobre una terraza elevada de madera noble frente a los montes, con cama con dosel, baño privado completo, aire acondicionado y camas muy cómodas. Al atardecer, la cordillera de Mikumi se vuelve dorada y después lila: la vista que da nombre al campamento.',
      'Ideal para parejas que quieren la sensación de safari de una tienda de lujo y el paisaje de los montes.',
    ],
    highlights: ['Frente a la cordillera de Mikumi', 'Tienda de lujo de lona sobre una terraza elevada', 'Baño privado y aire acondicionado', 'Inaugurada a finales de 2026', lunch],
    imageAlts: [
      'Luxury Mountain View Tent en Camp Lilac, con la cama mirando directamente a los montes Mikumi a través del frente abierto',
      'Sillón y mesa en la terraza elevada de una Luxury Mountain View Tent al atardecer',
      'Una Luxury Mountain View Tent sobre su plataforma de madera elevada en la sabana de Mikumi, al anochecer',
      'Escalones de madera que suben a la terraza de una Luxury Mountain View Tent en Camp Lilac',
      'Terraza privada de una Luxury Mountain View Tent con vista sobre la sabana hacia la cordillera de Mikumi',
      'Cama con dosel bajo el techo de lona de una Luxury Mountain View Tent, con suelo de madera y sillones',
      'Entrada al baño privado de una Luxury Mountain View Tent, con espejo, lavabo y sillón',
      'Baño privado de una Luxury Mountain View Tent: espejo redondo, dos lavabos y aire acondicionado',
      'Vista desde la cama de una Luxury Mountain View Tent hacia los montes Mikumi al amanecer',
      'Banco de madera en la terraza de una Luxury Mountain View Tent de Camp Lilac, mirando a la sabana',
      'Puesta de sol sobre la sabana de Mikumi vista desde la terraza de una Luxury Mountain View Tent',
    ],
  },
  'jungle-cabin': {
    gloss: 'cabaña entre los árboles',
    metaTitle: 'Jungle Cabin: cabaña privada junto a Mikumi | Camp Lilac',
    metaDescription: 'Una cabaña privada con techo de paja entre los árboles: terraza perimetral, cama con dosel, baño de mármol con ducha de lluvia y los sonidos de la sabana.',
    sleeps: '2 adultos',
    bed: 'Cama king con dosel',
    imageAlt: 'Jungle Cabin en Camp Lilac, con su techo de paja y escalera de madera entre los árboles de miombo',
    caption: 'Desde el sendero, 07:15',
    summary: 'Una cabaña privada con techo de paja entre los árboles: una larga terraza perimetral, cama con dosel, baño de mármol y los sonidos de la sabana de Mikumi alrededor.',
    description: [
      'La Jungle Cabin es una casa privada de lujo situada en lo alto, entre los árboles y rodeada de vegetación. La rodea una amplia terraza perimetral con mesa y sillas, con vista a las copas, por donde monos e impalas pasan a primera hora de la mañana.',
      'Dentro, los suelos cálidos de madera, las vigas vistas y unas obras de arte bien elegidas le dan un aire acogedor y elegante. Los ventanales de suelo a techo y las amplias puertas de cristal dejan entrar la luz y los sonidos del bosque, de modo que la naturaleza forma parte del espacio. El dormitorio, grande, con cama king con dosel, ropa de cama mullida y aire acondicionado, se abre directamente a la terraza, el mejor sitio para el café de la mañana o el atardecer. El baño es de mármol y madera, con una ducha de lluvia a ras de suelo.',
      'Por la noche se duermen con los grillos y las llamadas lejanas de los animales; de día, la fauna pasa a pocos pasos de la puerta. Para parejas y para quienes prefieren paredes sólidas a la lona, pero quieren sentir la sabana igualmente.',
    ],
    highlights: ['Cabaña privada rodeada de árboles', 'Terraza perimetral con mesa y sillas', 'Baño de mármol con ducha de lluvia', 'Cama king con dosel, aire acondicionado', lunch],
    imageAlts: [
      'Cama con dosel en la Jungle Cabin de Camp Lilac, con las puertas abiertas a la terraza perimetral y los árboles',
      'Cama king con dosel y mosquitero en la Jungle Cabin, con la luz de la mañana entrando por las ventanas',
      'Escalera de madera que sube a la Jungle Cabin de Camp Lilac, con techo de paja, entre árboles de miombo',
      'La terraza perimetral de la Jungle Cabin bajo su techo de paja, mirando a la sabana',
      'Mesa y sillas en la terraza de la Jungle Cabin, a la sombra del techo de paja, con los árboles al fondo',
      'El techo de paja y las barandillas de madera de la Jungle Cabin de Camp Lilac, en Mikumi',
      'El interior de la Jungle Cabin visto desde la terraza: cama con dosel, suelo de madera noble y puertas de cristal',
      'Pasillo de la Jungle Cabin con un cuadro de una jirafa, que lleva al baño',
      'Baño de mármol de la Jungle Cabin con ducha de lluvia, dos lavabos y espejo retroiluminado',
      'Espejo retroiluminado y lavabo en el baño de mármol de la Jungle Cabin de Camp Lilac',
      'La Jungle Cabin de Camp Lilac vista desde el sendero, con su techo de paja entre los árboles',
    ],
  },
  'luxury-jungle-tent': {
    gloss: 'tienda de lujo entre los árboles',
    metaTitle: 'Luxury Jungle Tent: tienda de lujo en Mikumi | Camp Lilac',
    metaDescription: 'Una tienda de lujo de lona sobre una terraza elevada junto al Parque Nacional de Mikumi: cama con dosel, baño privado, aire acondicionado y fauna cerca.',
    sleeps: '2 adultos',
    bed: 'Cama king con dosel (o dos camas individuales a petición)',
    imageAlt: 'Tienda de lujo de safari en Camp Lilac sobre una plataforma de madera bajo los árboles, cerca del Parque Nacional de Mikumi',
    caption: 'Tienda de lujo n.º 2, media mañana',
    summary: 'La estancia de safari clásica: una tienda de lujo de lona sobre una plataforma de madera, con cama con dosel, baño privado, aire acondicionado y animales pasando junto a la escalera.',
    description: [
      'Las Luxury Jungle Tents son aquello por lo que se conoce a Camp Lilac: amplias tiendas de lujo de lona sobre plataformas elevadas de madera pulida, con comodidades que la mayoría de los campamentos de Mikumi no ofrecen, como un baño privado con ducha de lluvia a ras de suelo, aire acondicionado y las camas más cómodas de la región.',
      'Cada tienda de lujo tiene una cama king mullida con mosquitero, grandes ventanas de malla para la brisa natural, suelos lisos de madera y una iluminación cálida: rústica y elegante a la vez. La terraza privada tiene sillas hechas a mano frente a la sabana; impalas, facoceros y monos pasan a menudo justo al lado, y por la noche solo se oye a los animales.',
      'Si quieren la auténtica sensación de safari sin renunciar a dormir bien, esta es la tienda de lujo que deben reservar.',
    ],
    highlights: ['Tienda de lujo de lona sobre una terraza elevada', 'Baño privado y aire acondicionado', 'Cama king mullida con mosquitero, ventanas de malla', 'Terraza privada: los animales pasan justo al lado', lunch],
    imageAlts: [
      'Cama con dosel y mosquitero en una Luxury Jungle Tent de Camp Lilac, con suelo de madera y la terraza al fondo',
      'Zona de vestidor y lavabo dentro de una Luxury Jungle Tent, con paredes de lona y vista a los árboles',
      'Escalones de madera que suben a la terraza de una Luxury Jungle Tent sobre su plataforma en la sabana de Mikumi',
      'Una Luxury Jungle Tent de Camp Lilac con el frente de lona abierto hacia la terraza y la sabana',
      'La terraza privada de una Luxury Jungle Tent, con sillas mirando al bosque de miombo',
      'Baño privado de una Luxury Jungle Tent con espejo redondo, lavabo y suelo de madera',
      'Dos lavabos y espejo redondo en el baño privado de una Luxury Jungle Tent de Camp Lilac',
      'Cama king con mosquitero en una Luxury Jungle Tent, con la terraza y los árboles a través del frente abierto',
    ],
  },
  'luxury-family-tent': {
    gloss: 'tienda de lujo familiar',
    metaTitle: 'Luxury Family Tent: tienda de lujo para 4 en Mikumi',
    metaDescription: 'Una tienda de lujo para padres y dos niños junto al Parque de Mikumi: baño privado, aire acondicionado, terraza. Menores de 4 gratis, de 4 a 11 mitad.',
    sleeps: '2 adultos + 2 niños (hasta 4 huéspedes)',
    bed: 'Una cama doble y dos camas individuales',
    imageAlt: 'La terraza privada de una Luxury Family Tent en Camp Lilac, con vista a la sabana',
    caption: 'Espacio para cuatro',
    summary: 'Una tienda de lujo amplia para familias: espacio para los padres y dos niños, baño privado, aire acondicionado y terraza privada. Los menores de 4 años no pagan; de 4 a 11, la mitad de la tarifa de adulto.',
    description: [
      'Las Luxury Family Tents están pensadas para padres que quieren que sus hijos vivan un auténtico campamento de safari sin renunciar a la comodidad. Cada tienda de lujo aloja hasta cuatro personas, con una cama doble y dos camas individuales en una sola tienda de lujo amplia, de lona, sobre una terraza elevada.',
      'Tiene baño privado completo, aire acondicionado y una terraza privada desde la que los niños pueden ver impalas y monos antes del desayuno. El campamento es tranquilo y está alejado de la carretera, así que los niños duermen bien.',
      'Los niños de 0 a 3 años no pagan. De 4 a 11 años pagan la mitad de la tarifa de adulto, y a partir de 12 pagan como adultos. Al reservar directamente, el desayuno y la cena están incluidos; el almuerzo cuesta US$15 por persona, gratis para los menores de 4 años. Nuestros guías están acostumbrados a las familias en los recorridos de safari y adaptan el ritmo a los más pequeños; los menores de 2 años no pueden participar en los recorridos.',
    ],
    highlights: ['Hasta 4 personas: una familia en una sola tienda de lujo', 'Menores de 4 gratis, de 4 a 11 a mitad de precio', 'Baño privado y aire acondicionado', 'Terraza privada sobre una plataforma elevada', 'Guías de safari acostumbrados a las familias'],
    imageAlts: [
      'La terraza privada de una Luxury Family Tent en Camp Lilac, con sillas mirando a la sabana',
      'Baño privado de una Luxury Family Tent con lavabo, espejo y una ventana a los árboles',
      'Una Luxury Family Tent sobre su terraza elevada bajo un cielo azul en la sabana de Mikumi',
      'Cama doble con mosquitero en una Luxury Family Tent, con suelo de madera y paredes de lona',
      'Vista desde la cama de una Luxury Family Tent hacia la terraza y la sabana',
      'Interior de una Luxury Family Tent: la cama doble y las dos camas individuales para los niños',
      'Baño privado de una Luxury Family Tent con dos lavabos, espejo redondo y suelo de madera',
      'Una Luxury Family Tent con el frente de lona abierto, que deja ver las camas y la terraza privada',
      'Dos camas individuales para niños en una Luxury Family Tent de Camp Lilac, con la terraza al fondo',
    ],
  },
};

export type RoomEs = Room & { gloss?: string; kind: string; hasMeta: boolean };

/** A room with its Spanish texts; any missing field keeps the English value. */
export function tRoom(r: Room): RoomEs {
  const t = roomText[r.slug] ?? {};
  return {
    ...r,
    ...t,
    imageAlts: t.imageAlts ?? r.imageAlts,
    metaDescription: t.metaDescription ?? r.metaDescription,
    kind: r.tier === 'tent' ? 'Tienda de lujo de safari' : 'Cabaña privada',
    hasMeta: !!roomText[r.slug],
  };
}
export const viewText = (r: Room) => (r.view === 'mountain' ? 'Vista a la cordillera de Mikumi' : 'Entre los árboles');
export const unitsText = (r: Room) => (r.units > 1 ? `${r.units} unidades` : 'Única');

// ---------------------------------------------------------------- safaris

type SafariText = Partial<Pick<Safari, 'name' | 'imageAlt' | 'summary' | 'bestFor' | 'offer' | 'start' | 'itinerary' | 'included' | 'excluded' | 'metaTitle'>> & {
  metaDescription?: string;
  variants?: { name: string; text: string }[]; // prices come from safaris.ts
};

const stay = 'Camp Lilac: tienda de lujo o cabaña, justo fuera del parque';
const commonIncluded = [
  'Entradas al Parque Nacional de Mikumi (no residentes)',
  '4×4 de safari privado de techo abierto, solo para su grupo',
  'Guía-conductor profesional de habla inglesa',
  'Todo el transporte indicado',
  'Pensión completa durante el safari: todas las comidas indicadas día a día, con agua y refrescos',
  'Todos los impuestos e IVA',
];
const commonExcluded = [
  'Vuelos internacionales',
  'Propinas (orientativo: US$10 por persona y día)',
  'Gastos personales: recuerdos, seguro de viaje, visados',
  'Bebidas alcohólicas',
  'Cualquier aumento oficial de impuestos o de las tarifas del parque',
];
const offer34 = `Billetes de tren SGR en clase económica de Dar es Salaam a Morogoro gratis para todo su grupo, más el traslado gratuito a Mikumi (un valor de US$75), si reservan este safari directamente con Camp Lilac con fecha de inicio en ${offerMonth}. Solo a la ida: el viaje de regreso se cobra.`;

const safariText: Record<string, SafariText> = {
  '1-day-mikumi-safari': {
    name: 'Safari en Mikumi de 1 día',
    metaTitle: 'Safari de 1 día en Mikumi desde Morogoro o Dar | Camp Lilac',
    metaDescription: 'Un día completo en el Parque Nacional de Mikumi en un 4×4 abierto privado con un guía nuestro: safari matinal, almuerzo caliente en la sabana e hipopótamos.',
    imageAlt: 'Jirafas pastando junto a un 4×4 de safari en la sabana de Mikumi',
    summary: 'Un día completo en el Parque Nacional de Mikumi en un 4×4 abierto privado con un guía nuestro: safari por la mañana, almuerzo caliente en la sabana y recorrido por la tarde hasta las 16:30. Desde Morogoro, desde el campamento o como excursión de ida y vuelta en el día desde Dar es Salaam en tren SGR.',
    bestFor: 'Excursiones de un día desde Morogoro o Dar es Salaam, y huéspedes que se quedan una noche',
    start: 'Morogoro, Camp Lilac o la estación SGR de Dar es Salaam',
    variants: [
      { name: 'Desde Morogoro o el campamento', text: 'Recogida en su hotel de Morogoro, en la estación SGR o en Camp Lilac. Día completo en el parque y regreso al final de la tarde.' },
      { name: 'Desde Dar es Salaam en tren SGR, en el mismo día', text: 'Tren SGR temprano de Dar es Salaam a Morogoro (1,5 horas), nuestro conductor en el andén, un día completo en Mikumi y el tren de la tarde de vuelta. Un día largo, sin necesidad de pasar la noche.' },
    ],
    itinerary: [
      {
        title: 'Mañana: recogida y primer recorrido de safari',
        text: 'Nuestro conductor los recoge en su hotel, en la estación SGR o en el campamento y los lleva a la puerta principal de Mikumi (unas 2 horas desde Morogoro). En la puerta suben a un 4×4 privado de techo abierto con su guía y salen hacia la llanura aluvial del Mkata, donde búfalos, jirafas, elefantes, cebras, impalas y, con suerte, leones se encuentran con más facilidad a primera hora. En Mikumi viven cuatro de los Cinco Grandes.',
        meals: 'Almuerzo caliente en la sabana, agua y refrescos',
      },
      {
        title: 'Tarde: pozas de hipopótamos y regreso',
        text: 'Después de un almuerzo caliente en plena sabana, el recorrido continúa hacia las pozas de hipopótamos y los abrevaderos hasta las 16:30 aproximadamente. Luego su guía los lleva de vuelta a la puerta y a Morogoro para el tren de la tarde a Dar es Salaam, o a su hotel o al campamento.',
      },
    ],
    included: [...commonIncluded],
    excluded: ['Alojamiento: reserven aparte una tienda de lujo o una cabaña en Camp Lilac', 'Billetes de tren SGR para la excursión en el día desde Dar es Salaam', 'Traslados al aeropuerto (a petición)', ...commonExcluded],
  },
  '2-day-mikumi-safari': {
    name: 'Safari en Mikumi de 2 días y 1 noche',
    metaTitle: 'Safari de 2 días en Mikumi en tren desde Dar | Camp Lilac',
    metaDescription: 'El safari de fin de semana desde Dar es Salaam o Zanzíbar: tren SGR a Morogoro, dos días de safari en un 4×4 privado y una noche en una tienda de lujo.',
    imageAlt: 'Un huésped observando elefantes muy de cerca desde un 4×4 de safari',
    summary: 'El clásico de fin de semana desde Dar es Salaam: tren SGR a Morogoro, dos días de recorridos de safari en un 4×4 abierto privado y una noche en una tienda de lujo en Camp Lilac. De vuelta en Dar es Salaam la tarde del segundo día.',
    bestFor: 'Safaris de fin de semana desde Dar es Salaam y Zanzíbar',
    offer: `Traslado gratuito de la estación SGR de Morogoro a Mikumi (un valor de US$75) si reservan este safari directamente con Camp Lilac con fecha de inicio en ${offerMonth}. Solo a la ida: el traslado de regreso se cobra.`,
    start: 'Su hotel o la terminal del ferry en Dar es Salaam',
    itinerary: [
      {
        title: 'Día 1: de Dar es Salaam al Parque Nacional de Mikumi',
        text: 'Los recogemos en su hotel o en el ferry y los llevamos a la estación SGR para el tren a Morogoro (1,5 horas). Su guía-conductor los espera en el andén y los lleva directamente a Mikumi para un recorrido de safari que empieza a media mañana y se alarga hasta la tarde. Almuerzo, descanso en el campamento y otro recorrido desde la tarde hasta el anochecer, cuando la llanura refresca.',
        meals: 'Almuerzo y cena, agua y refrescos',
        stay,
      },
      {
        title: 'Día 2: safari matinal y regreso a Dar es Salaam',
        text: 'Un recorrido a primera hora de la mañana, cuando los depredadores todavía se mueven, que continúa hasta primera hora de la tarde. Almuerzo en el campamento y después las 2 horas de carretera hasta Morogoro para el tren de la tarde a Dar es Salaam. A la llegada los dejamos en su hotel o en el aeropuerto.',
        meals: 'Desayuno y almuerzo, agua y refrescos',
      },
    ],
    included: ['Una noche en Camp Lilac en una tienda de lujo o una cabaña', ...commonIncluded, 'Traslados en Dar es Salaam hasta la estación SGR y desde ella'],
    excluded: ['Billetes de tren SGR Dar es Salaam ↔ Morogoro', 'Traslado de regreso de Mikumi a la estación SGR de Morogoro', 'Cena del día 2', ...commonExcluded],
  },
  '3-day-mikumi-safari': {
    name: 'Safari en Mikumi de 3 días y 2 noches',
    metaTitle: 'Safari de 3 días en Mikumi desde Dar es Salaam | Camp Lilac',
    metaDescription: 'Tres días y dos noches: tren SGR desde Dar es Salaam, safari al atardecer al llegar, un día completo en la llanura de Mikumi y dos noches en tienda de lujo.',
    imageAlt: 'Un 4×4 de safari de Camp Lilac junto a una manada de leones que descansa en una charca',
    summary: 'Tres días y dos noches: tren SGR desde Dar es Salaam, safari al atardecer el día de llegada, una jornada completa en la llanura de Mikumi y un último recorrido por el parque de camino a casa. Dos noches en una tienda de lujo en Camp Lilac.',
    bestFor: 'Viajeros que quieren ver todo el parque sin prisas',
    offer: offer34,
    start: 'Estación SGR de Dar es Salaam, tren de la mañana',
    variants: [
      { name: 'Clásico', text: 'Dos días completos de safari y dos noches en Camp Lilac.' },
      { name: 'Con visita cultural', text: 'Cambien parte del día 2 por una visita a una boma masái o a un pueblo cercano con su guía. Mismo precio: solo tienen que decírnoslo al reservar.' },
    ],
    itinerary: [
      {
        title: 'Día 1: de Dar es Salaam al Parque Nacional de Mikumi',
        text: 'Tren SGR de la mañana de Dar es Salaam a Morogoro (1,5 horas). Su guía-conductor los espera en el andén para las 2 horas de carretera hasta Mikumi; la carretera principal atraviesa el propio parque, así que tengan la cámara a mano para babuinos, jirafas, elefantes, cebras y búfalos junto al camino. Almuerzo y después un recorrido por la llanura hasta las pozas de hipopótamos (leones, elefantes, elands, facoceros, hipopótamos, cocodrilos y aves acuáticas) hasta la puesta de sol, y luego un trayecto corto hasta el campamento.',
        meals: 'Almuerzo y cena, agua y refrescos',
        stay,
      },
      {
        title: 'Día 2: día completo en la llanura aluvial de Mikumi',
        text: 'Después del desayuno en el campamento, su guía los recoge para un día completo explorando la llanura aluvial del Mkata y sus márgenes salpicados de baobabs: más de 400 especies de aves, grandes manadas y la mejor oportunidad de ver leopardos en el bosque. Almuerzo de pícnic en un mirador y safari hasta la puesta de sol.',
        meals: 'Desayuno, almuerzo de pícnic y cena, agua y refrescos',
        stay,
      },
      {
        title: 'Día 3: de Mikumi a Dar es Salaam',
        text: 'Desayuno, salida del alojamiento y un último recorrido por el parque de camino. Almuerzo y después la carretera a Morogoro para el tren de la tarde a Dar es Salaam, donde los dejamos en su hotel, en el ferry o en el aeropuerto.',
        meals: 'Desayuno y almuerzo, agua y refrescos',
      },
    ],
    included: ['Dos noches en Camp Lilac en una tienda de lujo o una cabaña', 'Traslados entre la estación SGR de Morogoro y el campamento', ...commonIncluded],
    excluded: ['Billete de tren SGR de regreso y traslado de regreso a Morogoro', 'Cena del día 3', ...commonExcluded],
  },
  '4-day-mikumi-udzungwa-safari': {
    name: 'Safari Mikumi y cascadas de Udzungwa, 4 días y 3 noches',
    metaTitle: 'Safari de 4 días: Mikumi y cascadas de Udzungwa | Camp Lilac',
    metaDescription: 'Fauna y selva en un mismo viaje: una boma masái, un día completo de safari en Mikumi, la caminata a la cascada de Sanje en Udzungwa y tres noches en Camp Lilac.',
    imageAlt: 'Un león caminando entre la hierba alta frente a un 4×4 de safari',
    summary: 'Fauna salvaje y selva en un mismo viaje: visita a una boma masái, un día completo de safari en Mikumi, la caminata de cinco horas a la cascada de Sanje en los montes Udzungwa y tres noches en Camp Lilac.',
    bestFor: 'Viajeros activos y familias con hijos mayores',
    offer: offer34,
    start: 'Estación SGR de Dar es Salaam, tren de la mañana',
    itinerary: [
      {
        title: 'Día 1: de Dar es Salaam a Mikumi y visita a una boma masái',
        text: 'Tren SGR de la mañana a Morogoro (1,5 horas) y después nuestro 4×4 para las 2 horas de carretera hasta Mikumi, con almuerzo por el camino. A la llegada visitan una boma masái cerca del parque antes de instalarse en el campamento para cenar frente a la cordillera de Mikumi.',
        meals: 'Almuerzo y cena, agua',
        stay,
      },
      {
        title: 'Día 2: día completo en el Parque Nacional de Mikumi',
        text: 'Safari desde las 06:30 hasta la puesta de sol: grandes manadas de jirafas, búfalos y elefantes en la llanura aluvial, cientos de especies de aves y buenas posibilidades de ver leones y leopardos.',
        meals: 'Desayuno, almuerzo de pícnic y cena, agua',
        stay,
      },
      {
        title: 'Día 3: montes Udzungwa y cascada de Sanje',
        text: 'Salida a las 07:00 para recorrer los 60 km hasta el Parque Nacional de los Montes Udzungwa. Tras registrarse en la sede del parque, caminata con un guarda del parque hasta la cascada de Sanje, que cae en cuatro saltos y es la más alta de los parques nacionales de Tanzania: unas cinco horas ida y vuelta, con colobos rojos de Udzungwa y mangabeyes crestados de Sanje en el bosque. Almuerzo de pícnic en el sendero y regreso al campamento.',
        meals: 'Desayuno, almuerzo de pícnic y cena, agua',
        stay,
      },
      {
        title: 'Día 4: de Mikumi a Dar es Salaam',
        text: 'Un recorrido matinal de vuelta por el Parque Nacional de Mikumi, con una última oportunidad de ver animales desde la carretera, y después a Morogoro para el tren de la tarde a Dar es Salaam. Los dejamos en el ferry, en su hotel o en el aeropuerto.',
        meals: 'Desayuno y almuerzo, agua',
      },
    ],
    included: ['Tres noches en Camp Lilac en una tienda de lujo o una cabaña', 'Traslados entre la estación SGR de Morogoro y el campamento', 'Entrada al Parque Nacional de los Montes Udzungwa y caminata con guarda', ...commonIncluded],
    excluded: ['Billete de tren SGR de regreso y traslado de regreso a Morogoro', 'Cena del día 4', ...commonExcluded],
  },
};

const people: Record<string, string> = { '1 person': '1 persona', '2 or more': '2 o más' };
/** "from US$214 per person" -> "desde US$214 por persona" (amount taken from the English string). */
const variantPrice = (p?: string) => {
  if (!p) return undefined;
  const m = p.match(/US\$\s?([\d.,]+)/);
  return m ? `desde US$${m[1]} por persona` : p;
};

export type SafariEs = Safari & { hasMeta: boolean };

/** A safari with its Spanish texts; any missing field keeps the English value. Prices always come from safaris.ts. */
export function tSafari(s: Safari): SafariEs {
  const t = safariText[s.slug] ?? {};
  const { variants: tv, ...rest } = t;
  return {
    ...s,
    ...rest,
    offer: s.offer ? t.offer ?? s.offer : undefined,
    tiers: s.tiers?.map((x) => ({ ...x, people: people[x.people] ?? x.people })),
    variants: s.variants?.map((v, i) => ({ name: tv?.[i]?.name ?? v.name, text: tv?.[i]?.text ?? v.text, price: variantPrice(v.price) })),
    itinerary: t.itinerary && t.itinerary.length === s.itinerary.length ? t.itinerary : s.itinerary,
    hasMeta: !!safariText[s.slug],
  };
}

// ---------------------------------------------------------------- travel options (safaris hub)

export const travelOptions: { title: string; tag?: string; href: string; text: string }[] = [
  { title: 'Desde Dar es Salaam en tren SGR', tag: 'Recomendado', href: es('/safari-from-dar-es-salaam'), text: 'Tren de la mañana a Morogoro (1,5 horas). Nuestro conductor los recibe en el andén y los lleva en 2 horas a Mikumi: unas 3,5 horas en total.' },
  { title: 'Desde Dar es Salaam por carretera', href: `${es('/getting-here')}#carretera`, text: 'Un vehículo privado desde su hotel o el aeropuerto, puerta a puerta. Comparado con el tren es más caro, más lento (7–8 horas en lugar de unas 3,5) y mucho más cansado, así que solo lo sugerimos cuando los horarios del tren no encajan.' },
  { title: 'Desde Zanzíbar en ferry', href: es('/safari-from-zanzibar'), text: 'Ferry rápido de Stone Town a Dar es Salaam (unas 2 horas). Los recibimos en la terminal del ferry y seguimos en tren o en coche.' },
  { title: 'Desde Zanzíbar en avión', href: `${es('/safari-from-zanzibar')}#vuelo`, text: 'Un vuelo corto a Dar es Salaam (US$160–200 por persona y trayecto, según el día y la aerolínea; no incluido, lo reservamos nosotros) y luego tren o coche con nosotros. También existe la avioneta directa a la pista de Mikumi, a otro precio.' },
  { title: 'Ya están de viaje', href: `${es('/getting-here')}#sur`, text: '¿Vienen de Morogoro, Iringa, Ruaha o en autobús? Los recogemos en su hotel, en la estación de Morogoro o en el pueblo de Mikumi. Quienes vienen en su propio coche también son bienvenidos.' },
];

// ---------------------------------------------------------------- November deals and direct-booking benefits

const offerText: Record<string, { title: string; who: string; worth: string; text: string }> = {
  'free-transfer': {
    title: 'Traslado gratis a Mikumi',
    who: `Con el safari en Mikumi de 2 días y 1 noche · ${offerMonth}`,
    worth: 'Un valor de US$75',
    text: `Reserven directamente con nosotros el safari en Mikumi de 2 días y 1 noche con fecha de inicio en ${offerMonth} y los recogemos en la estación SGR de Morogoro para llevarlos al campamento, gratis. Solo a la ida: el traslado de regreso a Morogoro se cobra.`,
  },
  'free-train-and-transfer': {
    title: 'Billete de tren + traslado gratis',
    who: `Con el safari de 3 o 4 días · ${offerMonth}`,
    worth: 'Un valor de US$85–95 para dos',
    text: `Reserven directamente con nosotros el safari de 3 o 4 días con fecha de inicio en ${offerMonth} y pagamos los billetes de tren SGR en clase económica de Dar es Salaam a Morogoro para todo su grupo (unos US$10–20 para dos personas), además del traslado de US$75 hasta Mikumi. Solo a la ida: el viaje de regreso se cobra.`,
  },
};
/** The November deals in Spanish (same order and ids as offers.ts); `en` keeps the English title for the team. */
export const offersEs = offers.map((o) => ({ ...o, ...(offerText[o.id] ?? {}), en: o.title }));
export const offerTerms = `Para safaris de 2 días o más que empiecen en ${offerMonth}, reservados directamente con nosotros. Las estancias de solo alojamiento no incluyen traslados gratuitos.`;

const benefitText: Record<string, { title: string; text: string }> = {
  'Breakfast and dinner included': { title: 'Desayuno y cena incluidos', text: 'Todas las reservas directas incluyen el desayuno y una cena de tres platos frente a la cordillera de Mikumi. El almuerzo cuesta US$15 por persona.' },
  'One total price, no booking fees': { title: 'Un único precio total, sin gastos de reserva', text: 'Reciben un solo precio por el alojamiento, el safari y los traslados, y no pagan nada hasta confirmar. Un depósito mediante un enlace seguro de pago con tarjeta reserva su alojamiento.' },
  'The whole journey organised': { title: 'Todo el viaje organizado', text: 'Billetes de tren, recogida en la estación de Morogoro, ferrys y vuelos desde Zanzíbar: dígannos cómo quieren viajar y nosotros lo organizamos.' },
  'Our own guides and 4×4s': { title: 'Nuestros propios guías y 4×4', text: 'Los recorridos de safari salen directamente del campamento en un 4×4 privado de techo abierto con un guía de Camp Lilac, ajustados a su tren o vuelo.' },
};
export const directBenefitsEs = directBenefits.map((b) => benefitText[b.title] ?? b);

// ---------------------------------------------------------------- wildlife photos (/images/wild/<key>-1600.jpg)

export const wildAlt: Record<string, string> = {
  'lion-pride': 'Una manada de leones durmiendo en la hierba en el Parque Nacional de Mikumi',
  'elephant': 'Un elefante africano entre los árboles en el Parque Nacional de Mikumi',
  'giraffe-sunset': 'Una jirafa cruzando la llanura al atardecer en Mikumi',
  'zebras-impala': 'Cebras de llanura y un impala en la estación verde de Mikumi',
  'elephants-road': 'Elefantes caminando por una pista de tierra en el Parque Nacional de Mikumi',
  'giraffe-portraits': 'Dos jirafas masái mirando a la cámara en Mikumi',
  'hippo-calf': 'Una cría de hipopótamo descansando sobre su madre en una poza de Mikumi',
  'lioness': 'Retrato de una leona en el Parque Nacional de Mikumi',
  'zebra-herd': 'Un grupo compacto de cebras de llanura en Mikumi',
  'buffalo': 'Un búfalo cafre en el bosque seco de Mikumi',
  'impala': 'Un impala macho en la hierba alta de Mikumi',
  'lion': 'Primer plano de un león dormido en la hierba en Mikumi',
  'giraffes-impala': 'Jirafas e impalas juntos en la llanura de Mikumi',
  'elephant-herd': 'Una manada de elefantes cruzando la llanura aluvial de Mikumi',
  'giraffes-evening': 'Jirafas con la luz del atardecer en el Parque Nacional de Mikumi',
  'zebras-grazing': 'Cebras de llanura pastando en Mikumi',
  'first-1': 'Un león y una leona descansando en la sabana',
  'first-2': 'Un leopardo tumbado en la hierba',
  'first-3': 'Dos hipopótamos peleando en un río',
  'first-4': 'Dos elefantes en la llanura',
  'road-sunset': 'Puesta de sol sobre la carretera que atraviesa el Parque Nacional de Mikumi',
  'giraffes-dusk': 'Jirafas al atardecer en el Parque Nacional de Mikumi',
  'zebra-line': 'Una fila de cebras cruzando la hierba dorada',
  'elephants-plain': 'Elefantes en la llanura abierta, al pie de los montes',
  'giraffe-face': 'Una jirafa mirando a la cámara',
  'giraffe-group': 'Un grupo de jirafas en la llanura',
  'own-giraffes': 'Jirafas bajo un cielo azul, vistas en un safari de Camp Lilac',
  'own-giraffe': 'Una jirafa en la llanura verde, vista en un safari de Camp Lilac',
  'elephant-family': 'Una familia de elefantes caminando por la orilla de un río',
  'wildebeest': 'Una gran manada de ñus',
  'lioness-cubs': 'Una leona con sus cachorros',
  'plains-herds': 'Impalas, cebras y un marabú en la llanura verde de Mikumi',
  'zebras-pair': 'Dos cebras pastando en la pradera verde de Mikumi',
  'leopard-drive': 'Un leopardo en un árbol junto a un 4×4 de safari',
  'lion-track': 'Un león caminando por una pista hacia un 4×4 de safari',
  'buffalo-pair': 'Dos búfalos cafre',
  'elephants-storm': 'Elefantes en la hierba verde bajo nubes de tormenta en Mikumi',
  'buffalo-herd': 'Una manada de búfalos cafre en Mikumi',
  'lions-tree': 'Leones durmiendo bajo un árbol en Mikumi',
  'cheetahs': 'Dos guepardos descansando sobre un tronco',
  'zebras-hills': 'Cebras pastando bajo las colinas de Mikumi',
  'elephants-walk': 'Una familia de elefantes caminando en fila en Mikumi',
  'jeep-giraffes': 'Un 4×4 de safari con jirafas e impalas',
  'leopard-face': 'Primer plano de un leopardo',
  'sanje-waterfall': 'La cascada de Sanje cayendo por los acantilados de los montes Udzungwa',
};
// Photos whose grid tile is cropped: the viewer opens this uncropped file instead (same as the Wildlife component).
export const wildFull: Record<string, string> = { 'sanje-waterfall': '/images/wild/sanje-waterfall-full.webp' };
export const wildAltOf = (k: string) => wildAlt[k] ?? `Fauna del Parque Nacional de Mikumi`;

// ---------------------------------------------------------------- price helpers

export const fromPrice = (price: number | null | undefined, unit: 'noche' | 'persona' = 'noche') =>
  price ? { from: `Desde US$${price}`, unit: `por ${unit}` } : null;
/** Appends " Desde US$x por noche/persona." to a meta description when it still fits in 158 characters. */
export const withPrice = (desc: string, price: number | null | undefined, unit: 'noche' | 'persona') => {
  const s = price ? `${desc} Desde US$${price} por ${unit}.` : desc;
  return s.length <= 158 ? s : desc.length <= 158 ? desc : desc.slice(0, 157).replace(/\s+\S*$/, '') + '…';
};
