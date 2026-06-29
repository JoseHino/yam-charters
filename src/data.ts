// ====================================================================
//  Datos del producto y configuración del negocio.
//  👉 Reemplaza los marcadores de posición (imágenes y contacto) por los
//     reales cuando los tengas.
// ====================================================================

export type Duration = 2 | 3 | 4 | 6 | 8
export type Season = "baja" | "alta"

/** Tabla de precios (IVA incluido), en euros, por duración y temporada. */
export const PRICES: Record<Season, Record<Duration, number>> = {
  baja: { 2: 481.5, 3: 612, 4: 756, 6: 1062, 8: 1350 },
  alta: { 2: 540, 3: 693, 4: 846, 6: 1183.5, 8: 1530 },
}

export const DURATIONS: Duration[] = [2, 3, 4, 6, 8]

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
  claim: "El mejor charter de Puerto Banús",
}

export const BOAT = {
  model: "Jeanneau Sun Odyssey 42 CC",
  tagline: "El mejor charter de Puerto Banús: navega la Costa del Sol con cócteles, comida y parking gratuito incluidos",
  location: "Puerto Banús · Marbella",
  intro:
    "Vive el día perfecto en el mar a bordo de un Jeanneau Sun Odyssey 42 CC, un velero elegante y espacioso. En Yam Charters lo preparamos todo para que tú solo disfrutes: cócteles recién preparados a bordo, picoteo mediterráneo, bebida fría y un patrón profesional al mando. Salimos desde el corazón de Puerto Banús y, lo mejor, con parking gratuito junto al puerto. Elige el día y la duración: nosotros ponemos el resto.",
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

/** Servicios incluidos en todos los alquileres. (`highlight` lo resalta en la web.) */
export const SERVICES: { icon: string; title: string; text: string; highlight?: boolean }[] = [
  {
    icon: "🅿️",
    title: "Parking GRATUITO",
    text: "Plaza de aparcamiento gratis junto al puerto: olvídate del problema de aparcar en Puerto Banús. Llegas, dejas el coche y embarcas.",
    highlight: true,
  },
  {
    icon: "🍸",
    title: "Cócteles a bordo",
    text: "Mojitos, gin-tonics y cócteles recién preparados durante la travesía. Brinda frente al skyline de Marbella con una copa en la mano.",
  },
  {
    icon: "🍽️",
    title: "Comida incluida",
    text: "Picoteo mediterráneo y aperitivos frescos para disfrutar mientras navegas, sin coste añadido.",
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
    icon: "📸",
    title: "Planazo en el mar",
    text: "Calas, baño, atardeceres y fotos de postal. Ideal para parejas, grupos de amigos, cumpleaños y celebraciones.",
  },
]

/**
 * Galería — imágenes de marcador de posición (Unsplash).
 * 👉 Sustitúyelas por fotos reales del Sun Odyssey 42 CC.
 */
export const GALLERY: { src: string; alt: string }[] = [
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80", alt: "Velero navegando al atardecer" },
  { src: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1200&q=80", alt: "Velero en mar abierto" },
  { src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80", alt: "Cubierta de un velero" },
  { src: "https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&w=1200&q=80", alt: "Barco amarrado en puerto deportivo" },
  { src: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80", alt: "Velero con velas desplegadas" },
  { src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=80", alt: "Puerto deportivo al atardecer" },
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
}
