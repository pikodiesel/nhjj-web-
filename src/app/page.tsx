import Image from "next/image"
import Reveal from "./components/Reveal"
import StateScroll from "./components/StateScroll"
import { thisSunday } from "@/content/this-sunday"

// TODO: confirm @nhjjhawaii is the real Instagram handle before launch
const INSTAGRAM = "nhjjhawaii"

const chapters = [
  {
    n: "01",
    pillar: "Awareness",
    desc: "Read the room. Notice before you move. Most situations are decided before the first hand is raised.",
  },
  {
    n: "02",
    pillar: "Movement",
    desc: "Your body is a tool. We train coordination, balance, and the ability to move with intention under pressure.",
  },
  {
    n: "03",
    pillar: "Jujitsu",
    desc: "The mat teaches what the classroom cannot. Brazilian Jiu-Jitsu for all levels — day one through competition ready.",
  },
  {
    n: "04",
    pillar: "Self-Defense",
    desc: "Practical skill. No theatrics. What holds up when the situation is real and the adrenaline is high.",
  },
]

function SundayStatus() {
  const { date, status, teaching, note } = thisSunday
  const isOn = status === "on"
  const isCancelled = status === "cancelled"

  return (
    <section id="this-sunday" className="section-pad" style={{ borderTop: "2px solid var(--bone-3)" }}>
      {/* Label + status row */}
      <Reveal>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(1rem,3vw,2rem)", flexWrap: "wrap", gap: "0.5rem" }}>
          <p className="text-label">This Sunday</p>
          <p className="text-label" style={{ color: isOn ? "var(--bone)" : "var(--accent)" }}>
            {isOn ? "● On" : isCancelled ? "Cancelled" : "No Class"}
          </p>
        </div>
      </Reveal>

      {/* Giant date */}
      <Reveal delay={1}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(3.5rem,12vw,10rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: isOn ? "var(--bone)" : "var(--bone-3)",
            marginBottom: "clamp(1.25rem,3vw,2.5rem)",
          }}
        >
          {date}
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <div style={{ height: "1px", background: "var(--rule)", marginBottom: "clamp(1.25rem,3vw,2.5rem)" }} />
      </Reveal>

      {isOn && (
        <>
          <Reveal delay={2}>
            <p className="text-label" style={{ marginBottom: "0.75rem" }}>On the mat this week</p>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1.3rem,2.8vw,2.1rem)",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "var(--bone)",
                maxWidth: "32rem",
              }}
            >
              {teaching}
            </p>
            {note && (
              <p className="text-body" style={{ marginTop: "1rem" }}>{note}</p>
            )}
          </Reveal>
          <Reveal delay={3}>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://maps.google.com/?q=94-199+Leonui+St+%234,+Waipahu,+HI+96797"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                Get directions &rarr;
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                Follow on Instagram &rarr;
              </a>
            </div>
          </Reveal>
        </>
      )}

      {!isOn && (
        <Reveal delay={2}>
          <p className="text-body">
            {isCancelled
              ? "No class this week. See you next Sunday."
              : "No class scheduled. Follow on Instagram for updates."}
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Follow @{INSTAGRAM} for updates &rarr;
            </a>
          </div>
        </Reveal>
      )}
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image
            src="/nhjj-icon.png"
            alt="NHJJ Hawaii"
            width={30}
            height={30}
            style={{ borderRadius: "50%", opacity: 0.85 }}
          />
          <span className="text-label" style={{ color: "var(--bone)", letterSpacing: "0.14em" }}>
            NHJJ Hawaii
          </span>
        </div>
        <a href="#this-sunday" className="link-primary">This Sunday &darr;</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* Background: dark banner at low opacity, right-anchored, gradient covers left */}
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <Image
            src="/nhjj-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
            style={{ opacity: 0.18, filter: "grayscale(100%)" }}
          />
          {/* Left-to-right gradient: pure ink left, transparent right so image shows */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, var(--ink) 38%, rgba(13,12,10,0.6) 75%, rgba(13,12,10,0.25) 100%), " +
                "linear-gradient(to top, var(--ink) 0%, transparent 30%)",
            }}
          />
        </div>

        {/* Grain noise */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.03,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="text-label" style={{ marginBottom: "1.75rem", color: "var(--bone-3)" }}>
            New Hope Jiu-Jitsu &middot; Waipahu, Oahu &middot; Sundays 2:30&ndash;4:30 PM
          </p>
          <h1 className="text-hero" style={{ color: "var(--bone)", maxWidth: "20ch" }}>
            A Sunday
            <br />ministry
            <br />
            <span style={{ color: "var(--bone-2)" }}>on the mat.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(0.75rem,1.1vw,0.9rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "var(--bone-3)",
              marginTop: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            Every class is free &middot; All ages &middot; All skill levels
          </p>
          <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <a href="#this-sunday" className="link-primary">This Sunday &darr;</a>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Instagram &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* STATE SCROLL — STILL → AWARE → MOBILE → CAPABLE */}
      <StateScroll />

      {/* THIS SUNDAY */}
      <SundayStatus />

      {/* FOUR CHAPTERS */}
      {chapters.map((c, i) => (
        <section key={c.pillar} className="chapter-section">
          <Reveal>
            <p className="text-label" style={{ marginBottom: "0.75rem" }}>{c.n}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-chapter" style={{ color: "var(--bone)" }}>{c.pillar}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-body" style={{ maxWidth: "34rem", marginTop: "1.5rem" }}>{c.desc}</p>
          </Reveal>
          {i < chapters.length - 1 && (
            <div style={{ height: "1px", background: "var(--rule)", marginTop: "clamp(2.5rem,5vw,4rem)" }} />
          )}
        </section>
      ))}

      {/* MINISTRY */}
      <section
        className="section-pad"
        style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
      >
        <div style={{ maxWidth: "42rem" }}>
          <Reveal>
            <p className="text-label" style={{ marginBottom: "1.5rem" }}>About</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.25rem,5vw,3.75rem)",
                lineHeight: 0.95,
                color: "var(--bone)",
                marginBottom: "1.75rem",
              }}
            >
              A ministry,
              <br />
              <span style={{ color: "var(--bone-2)" }}>not a gym.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-body" style={{ marginBottom: "1rem" }}>
              We gather on Sunday afternoons at New Hope Kapolei Ministry Center in Waipahu.
              Jiu-jitsu is the practice. Fellowship is the point.
            </p>
            <p className="text-body">
              Every class is free. No membership, no contracts, no prior experience needed.
              We welcome everyone. Intensity on the mat, warmth off it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="section-pad">
        <Reveal>
          <p className="text-label" style={{ marginBottom: "2.5rem" }}>Visit</p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(2rem,5vw,4rem)",
            maxWidth: "56rem",
          }}
        >
          <Reveal delay={1}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>When</p>
            <p
              className="font-display"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", color: "var(--bone)", lineHeight: 1, marginBottom: "0.35rem" }}
            >
              Sundays
            </p>
            <p
              className="font-display"
              style={{ fontSize: "clamp(1.4rem,3vw,2.25rem)", color: "var(--bone-2)", lineHeight: 1 }}
            >
              2:30&ndash;4:30 PM
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>Where</p>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(0.9rem,1.3vw,1.05rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--bone)",
                marginBottom: "1rem",
              }}
            >
              New Hope Kapolei Ministry Center<br />
              94-199 Leonui St #4<br />
              Waipahu, HI 96797
            </p>
            <a
              href="https://maps.google.com/?q=94-199+Leonui+St+%234,+Waipahu,+HI+96797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              Get directions &rarr;
            </a>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>What to bring</p>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(0.9rem,1.3vw,1.05rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--bone-2)",
              }}
            >
              Just yourself.<br />
              Wear comfortable clothes.<br />
              No gi required.<br />
              No experience needed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          padding: "clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "2rem 3rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
            <Image
              src="/nhjj-icon.png"
              alt="NHJJ Hawaii"
              width={22}
              height={22}
              style={{ borderRadius: "50%", opacity: 0.6 }}
            />
            <span className="text-label" style={{ color: "var(--bone)" }}>NHJJ Hawaii</span>
          </div>
          <p className="text-meta">&copy; {new Date().getFullYear()} New Hope Jiu-Jitsu Hawaii</p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.75rem" }}>Connect</p>
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
            style={{ display: "block", marginBottom: "0.6rem", width: "fit-content" }}
          >
            @{INSTAGRAM}
          </a>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.75rem" }}>Find us</p>
          <p className="text-meta" style={{ lineHeight: 1.9 }}>
            Sundays &middot; 2:30&ndash;4:30 PM<br />
            94-199 Leonui St #4<br />
            Waipahu, HI 96797
          </p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.75rem" }}>Pillars</p>
          <p className="text-meta" style={{ lineHeight: 2.1 }}>
            Awareness<br />Movement<br />Jujitsu<br />Self-Defense
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="sticky-bar">
        <div>
          <p className="text-label" style={{ color: "var(--bone)", marginBottom: "1px" }}>This Sunday</p>
          <p className="text-meta">2:30 PM &middot; Waipahu</p>
        </div>
        <a
          href="https://maps.google.com/?q=94-199+Leonui+St+%234,+Waipahu,+HI+96797"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
          style={{ flexShrink: 0 }}
        >
          Directions &rarr;
        </a>
      </div>
    </>
  )
}
