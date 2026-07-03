// ====================================================================
//  Datos del producto y configuración del negocio.
// ====================================================================

export type Duration = 2 | 3 | 4 | 6 | 8
export type Season = "baja" | "alta"

/** Ruta base (en GitHub Pages la web vive bajo /yam-charters/). */
const BASE = import.meta.env.BASE_URL

/** Resuelve una imagen de public/img respetando la ruta base. */
export const img = (file: string) => `${BASE}img/${file}`

/**
 * Tabla de precios de SALIDA PRIVADA (IVA incluido), en euros,
 * por duración y temporada.
 */
export const PRICES: Record<Season, Record<Duration, number>> = {
  baja: { 2: 433.35, 3: 550.8, 4: 680.4, 6: 955.8, 8: 1215 },
  alta: { 2: 486, 3: 623.7, 4: 761.4, 6: 1065.15, 8: 1377 },
}

export const DURATIONS: Duration[] = [2, 3, 4, 6, 8]

/** Salidas compartidas: pagas por plaza y compartes barco. */
export const SHARED = {
  pricePerPerson: 55,
  duration: "3 horas aprox.",
  maxPax: 10,
  slots: [
    { id: "manana", label: "Salida de mañana", time: "11:00" },
    { id: "sunset", label: "Salida sunset", time: "Atardecer (según época)" },
  ],
  note:
    "Grupo reducido (máx. 10 personas), patrón profesional, cóctel de bienvenida, picoteo mediterráneo y parada para un baño en el mar. Confirmamos la hora exacta al reservar.",
}

/**
 * Temporada según la fecha:
 *  - ALTA: 01 jun – 30 sep  (meses 6, 7, 8, 9)
 *  - BAJA: 01 ene – 31 may  y  01 oct – 31 dic
 * @param date Fecha de la salida.
 */
export function seasonForDate(date: Date): Season {
  const m = date.getMonth() + 1 // 1–12
  return m >= 6 && m <= 9 ? "alta" : "baja"
}

export const SEASON_LABEL: Record<Season, string> = {
  baja: "Temporada baja",
  alta: "Temporada alta",
}

/** Formatea un importe en euros (es-ES). */
export const eur = (v: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(v)

// -------------------------------------------------------------- Marca / Barco
export const BRAND = {
  name: "Yam Charters",
  claim: "No alquilamos un barco. Creamos tu mejor día en el mar.",
}

export const BOAT = {
  model: "Jeanneau Sun Odyssey 42 CC",
  tagline:
    "Experiencias únicas a vela desde Puerto Banús: coctelería, sabores mediterráneos, baños en el mar, delfines y atardeceres que no se olvidan.",
  location: "Puerto Banús · Marbella",
  intro:
    "El escenario de tu experiencia es un Jeanneau Sun Odyssey 42 CC: un velero de casi 13 metros, elegante, estable y con cubierta de teca, pensado para disfrutar del mar con todas las comodidades. Amplia bañera para compartir mesa y cócteles, solárium en proa, 3 camarotes y 2 aseos. Sale del corazón de Puerto Banús con patrón profesional y parking gratuito junto al puerto.",
}

/** Especificaciones técnicas (orientativas del modelo). */
export const SPECS: { label: string; value: string }[] = [
  { label: "Eslora", value: "12,86 m" },
  { label: "Manga", value: "4,07 m" },
  { label: "Calado", value: "1,55 m" },
  { label: "Camarotes", value: "3" },
  { label: "Aseos", value: "2" },
  { label: "Capacidad", value: "Hasta 10 personas" },
  { label: "Motor", value: "Diésel 54 CV" },
  { label: "Velas", value: "Mayor + Génova enrollable" },
]

// -------------------------------------------------------------- Experiencias
/**
 * Experiencias a bordo: el corazón de la web. Todas se disfrutan
 * en cualquier salida; las privadas se personalizan al 100%.
 */
export const EXPERIENCES: {
  image: string
  alt: string
  title: string
  text: string
  tag?: string
}[] = [
  {
    image: img("sunset-mar.jpg"),
    alt: "El sol poniéndose sobre el mar",
    title: "Salida sunset",
    text: "La hora dorada vista desde el mar: el sol cayendo sobre el horizonte, una copa fría en la mano y Marbella encendiéndose a lo lejos. Nuestra salida más pedida.",
    tag: "La favorita",
  },
  {
    image: img("mojitos.jpg"),
    alt: "Mojito recién preparado con lima y hierbabuena",
    title: "Coctelería a bordo",
    text: "Mojitos, spritz y gin-tonics preparados al momento mientras navegas. Cóctel de bienvenida incluido y barra a bordo durante toda la travesía.",
  },
  {
    image: img("paella.jpg"),
    alt: "Paella de marisco con gambas y mejillones",
    title: "Degustación mediterránea",
    text: "Sabores frescos de la costa: paella, gambas, ibéricos y fruta servidos en la bañera del velero, con agua, refrescos, cerveza y cava bien fríos.",
  },
  {
    image: img("fondeo-cala.jpg"),
    alt: "Velero fondeado en aguas tranquilas para darse un baño",
    title: "Baño en el mar",
    text: "Fondeamos frente a la costa en aguas tranquilas para que te des un chapuzón donde no llega nadie más: snorkel, saltos desde cubierta o simplemente flotar al sol.",
  },
  {
    image: img("delfines.jpg"),
    alt: "Delfines saltando junto al velero",
    title: "Delfines en libertad",
    text: "La Costa del Sol es zona de paso de delfines y es muy habitual que naveguen junto al barco. Verlos aparecer a tu lado es de esas cosas que no se olvidan.",
    tag: "Muy habitual",
  },
  {
    image: img("cubierta-proa.jpg"),
    alt: "Grupo disfrutando a bordo del velero",
    title: "Celebraciones a bordo",
    text: "Cumpleaños, pedidas, despedidas o un plan de equipo diferente: decoramos la experiencia a tu medida y nos encargamos de todo. Tú solo brinda.",
  },
]

/** Servicios incluidos en todas las salidas. (`highlight` lo resalta en la web.) */
export const SERVICES: { icon: string; title: string; text: string; highlight?: boolean }[] = [
  {
    icon: "🅿️",
    title: "Parking GRATUITO",
    text: "Aparca gratis en el Parking Cristamar, a solo 5 minutos andando del barco. Olvídate del problema de aparcar en Puerto Banús: llegas, dejas el coche y un corto paseo te lleva al amarre.",
    highlight: true,
  },
  {
    icon: "🍸",
    title: "Cóctel de bienvenida",
    text: "Subes a bordo y brindas: cóctel de bienvenida y barra con mojitos y gin-tonics recién preparados durante la travesía.",
  },
  {
    icon: "🍽️",
    title: "Picoteo mediterráneo",
    text: "Degustación de producto fresco de la tierra para disfrutar mientras navegas, sin coste añadido.",
  },
  {
    icon: "🥂",
    title: "Bebida incluida",
    text: "Agua, refrescos, cerveza y cava bien fríos durante toda la salida. Barra libre de buenos momentos.",
  },
  {
    icon: "⚓",
    title: "Patrón profesional",
    text: "Skipper titulado al mando: tú solo te dedicas a relajarte, bañarte y disfrutar del mar.",
  },
  {
    icon: "🛟",
    title: "Todo el equipo",
    text: "Toallas, snorkel, chalecos y equipo de seguridad homologado a bordo. Solo trae bañador, crema y ganas de mar.",
  },
]

/** Galería — fotos reales del barco y de nuestras salidas. */
export const GALLERY: { src: string; alt: string }[] = [
  { src: img("hero-navegando.jpg"), alt: "Navegando a bordo del Sun Odyssey 42 CC por la Costa del Sol" },
  { src: img("puerto-banus.jpg"), alt: "Puerto Banús, nuestro puerto base" },
  { src: img("atardecer.jpg"), alt: "Atardecer a vela frente a Marbella" },
  { src: img("delfines.jpg"), alt: "Delfines saltando junto al velero" },
  { src: img("fondeo-cala.jpg"), alt: "Velero fondeado en aguas tranquilas para el baño" },
  { src: img("proa-teca.jpg"), alt: "Cubierta de teca y proa del velero" },
  { src: img("velero-sol.jpg"), alt: "El velero amarrado un día de sol" },
  { src: img("cubierta-proa.jpg"), alt: "Vista de la cubierta desde proa" },
  { src: img("vela.jpg"), alt: "La vela mayor izada contra el cielo azul" },
  { src: img("marina.jpg"), alt: "El velero amarrado en el puerto deportivo" },
  { src: img("cubierta-timon.jpg"), alt: "Bañera y rueda de timón del velero" },
  { src: img("amarre-puerto.jpg"), alt: "El velero en su amarre" },
  { src: img("velero-amarrado.jpg"), alt: "Detalle de cubierta y defensas en puerto" },
]

/** Cifras de confianza que se muestran bajo el hero. */
export const STATS: { value: string; label: string }[] = [
  { value: "4,9★", label: "Valoración media" },
  { value: "+500", label: "Clientes a bordo" },
  { value: "55 €", label: "Salida compartida" },
  { value: "100%", label: "Patrón incluido" },
]

/**
 * Reseñas de clientes (marcadores de posición).
 * 👉 Sustitúyelas por reseñas reales de Google / TripAdvisor.
 */
export const TESTIMONIALS: { name: string; text: string; origin: string }[] = [
  {
    name: "Laura G.",
    text: "Un día inolvidable. El patrón super atento, los cócteles riquísimos y ver el atardecer desde el mar es otro nivel. Repetiremos seguro.",
    origin: "Madrid",
  },
  {
    name: "James W.",
    text: "Perfect sunset trip out of Puerto Banús. Dolphins showed up next to the boat! Everything was included and the free parking made it so easy.",
    origin: "London",
  },
  {
    name: "Carlos & Marta",
    text: "Lo reservamos para nuestro aniversario y fue un acierto total. Nos dimos un baño en mitad del mar, comimos de lujo y volvimos al atardecer. 10 de 10.",
    origin: "Sevilla",
  },
]

/** Datos de contacto y ubicación del barco. */
export const CONTACT = {
  business: "Yam Charters",
  phone: "+34 665 09 20 90",
  // En formato internacional sin signos para el enlace de WhatsApp:
  whatsapp: "34665092090",
  email: "reservas@yamcharters.com", // 👉 placeholder, cámbialo por tu email real
  address: "Puerto Banús, 29660 Marbella (Málaga)",
  // Ubicación exacta del amarre del barco
  lat: 36.485131,
  lng: -4.951235,
  // Parking gratuito (a 5 min andando del barco)
  parkingName: "Parking Cristamar",
  parkingLat: 36.490068,
  parkingLng: -4.950309,
  parkingWalk: "5 minutos andando",
}
