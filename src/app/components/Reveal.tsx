"use client"
import { useRef, useEffect, ReactNode, ElementType } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
  as?: ElementType
}

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in")
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in"); io.unobserve(el) } },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay > 0 ? `delay-${delay}` : ""
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={`reveal ${delayClass} ${className}`}>{children}</Tag>
}
