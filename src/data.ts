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

// -------------------------------------------------------------- Barco
export const BOAT = {
  model: "Jeanneau Sun Odyssey 42 CC",
  tagline: "Navega la Costa del Sol a bordo de un velero icónico",
  location: "Puerto Banús · Marbella",
  intro:
    "El Sun Odyssey 42 CC es un velero elegante y cómodo, perfecto para una jornada inolvidable por la bahía de Marbella. Sale desde Puerto Banús con parking, comida y bebida incluidos: solo tienes que elegir el día y la duración.",
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

/** Servicios incluidos en todos los alquileres. */
export const SERVICES: { icon: string; title: string; text: string }[] = [
  {
    icon: "🅿️",
    title: "Parking incluido",
    text: "Plaza de aparcamiento gratuita junto al puerto para que llegues sin preocupaciones.",
  },
  {
    icon: "🍽️",
    title: "Comida a bordo",
    text: "Picoteo mediterráneo y aperitivos frescos preparados para disfrutar durante la travesía.",
  },
  {
    icon: "🥂",
    title: "Bebida incluida",
    text: "Agua, refrescos, cerveza y una copa de cava para brindar frente al skyline de Marbella.",
  },
  {
    icon: "⚓",
    title: "Patrón profesional",
    text: "Skipper titulado al mando: tú solo te dedicas a relajarte y disfrutar del mar.",
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

/** Datos de contacto — 👉 marcador de posición, reemplázalos por los reales. */
export const CONTACT = {
  business: "Charter Puerto Banús",
  phone: "+34 600 000 000",
  // En formato internacional sin signos para el enlace de WhatsApp:
  whatsapp: "34600000000",
  email: "reservas@ejemplo.com",
  address: "Muelle de Ribera, Puerto Banús, 29660 Marbella (Málaga)",
}
