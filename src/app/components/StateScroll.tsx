"use client"
import { useState, useEffect, useRef } from "react"

const STATES = ["Still", "Aware", "Mobile", "Capable"]
const PILLAR_MAP = ["Awareness", "Movement", "Jujitsu", "Self-Defense"]

export default function StateScroll() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollable = container.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(0.999, -rect.top / scrollable))
      const idx = Math.floor(progress * STATES.length)
      setActive((prev) => (idx !== prev ? idx : prev))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={containerRef} style={{ height: "380vh", position: "relative", borderTop: "1px solid var(--rule)" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(1.5rem,5vw,4rem)",
          overflow: "hidden",
        }}
      >
        <p className="text-label" style={{ marginBottom: "1.25rem", color: "var(--bone-3)" }}>
          {PILLAR_MAP[active]}
        </p>

        {/* key forces remount → CSS animation fires */}
        <h2
          key={active}
          className="text-chapter state-word"
          style={{ color: "var(--bone)" }}
        >
          {STATES[active]}
        </h2>

        {/* progress dots */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "2rem" }}>
          {STATES.map((_, i) => (
            <div
              key={i}
              style={{
                width: "2rem",
                height: "1px",
                background: i === active ? "var(--bone)" : "var(--bone-3)",
                transition: "background 0.4s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
