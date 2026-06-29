import { useEffect, useRef, useState } from "react"

/**
 * Envuelve contenido para que aparezca con una animación suave (fade + subida)
 * cuando entra en el viewport. Usa IntersectionObserver, sin dependencias.
 *
 * @param delay  Retardo en ms (para escalonar tarjetas de una misma fila).
 * @param as     Etiqueta HTML del contenedor (por defecto, div).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  )
}
