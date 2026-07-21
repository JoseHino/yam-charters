// Iconos de línea (estilo Lucide) en SVG. Sustituyen a los emojis.
// Uso: <Icon name="anchor" className="h-6 w-6 text-sea" />
type Props = { name: IconName; className?: string; strokeWidth?: number }

export type IconName =
  | "parking" | "cocktail" | "food" | "drinks" | "anchor" | "safety"
  | "chat" | "phone" | "mail" | "pin" | "star" | "sun" | "check"
  | "arrow" | "sail" | "users" | "clock" | "route"

const P: Record<IconName, React.ReactNode> = {
  parking: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></>,
  cocktail: <><path d="M5 4h14l-7 8z" /><path d="M12 12v6" /><path d="M8 21h8" /><path d="M15 7l3-3" /></>,
  food: <><path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" /><path d="M6 3v18" /><path d="M18 3c-1.5 0-3 1.5-3 5s1.5 4 3 4v9" /></>,
  drinks: <><path d="M6 3h12l-1 5H7z" /><path d="M8 8l1 11h6l1-11" /><path d="M9 19h6" /></>,
  anchor: <><circle cx="12" cy="5" r="2.5" /><path d="M12 7.5V21" /><path d="M5 12a7 7 0 0 0 14 0" /><path d="M5 12H2" /><path d="M19 12h3" /></>,
  safety: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /></>,
  chat: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.8L3 21l1.5-4.5A8.4 8.4 0 1 1 21 11.5z" /></>,
  phone: <><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 11l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  pin: <><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  star: <><path d="m12 3 2.6 5.6 6 .7-4.4 4 1.2 6L12 16.9 6.6 19.3l1.2-6-4.4-4 6-.7z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" /></>,
  check: <><path d="m5 12 4.5 4.5L19 7" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  sail: <><path d="M12 3 4 19h8z" /><path d="M12 3v16" /><path d="M12 19h7l-3-4" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  route: <><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 16 15 8" /></>,
}

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.6 }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  )
}
