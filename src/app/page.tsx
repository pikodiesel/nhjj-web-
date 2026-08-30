import Image from "next/image"
import Reveal from "./components/Reveal"
import { getThisSunday } from "@/lib/this-sunday"

// TODO: confirm @nhjjhawaii is the real Instagram handle before wider launch
const INSTAGRAM = "nhjjhawaii"
const MAPS = "https://maps.google.com/?q=94-199+Leonui+St+%234,+Waipahu,+HI+96797"

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const pillars = [
  { n: "01", name: "Awareness", desc: "Read the room. Notice before you move. Most situations are decided before the first hand is raised." },
  { n: "02", name: "Movement", desc: "Your body is a tool. Coordination, balance, and the ability to move with intention under pressure." },
  { n: "03", name: "Jujitsu", desc: "The mat teaches what the classroom cannot. Brazilian Jiu-Jitsu for all levels, day one and up." },
  { n: "04", name: "Self-Defense", desc: "Practical skill, no theatrics. What holds up when the situation is real and the adrenaline is high." },
]

function SundayBlock() {
  const { date, status, teaching, note } = getThisSunday()
  const isOn = status === "on"

  return (
    <section
      id="this-sunday"
      className="section-pad glow"
      style={{ borderTop: "1px solid var(--accent)", background: "var(--ink-2)" }}
    >
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "clamp(0.75rem,2vw,1.25rem)" }}>
          <p className="text-label">This Sunday</p>
          <span className={isOn ? "status-chip" : "status-chip off"}>
            {isOn && <span className="status-dot" aria-hidden />}
            {isOn ? "Class is on" : status === "cancelled" ? "Cancelled" : "No class"}
          </span>
        </div>
      </Reveal>

      <Reveal delay={1}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2.75rem,8vw,6rem)",
            lineHeight: 0.92,
            color: isOn ? "var(--bone)" : "var(--bone-3)",
            marginBottom: "1.5rem",
          }}
        >
          {date}
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(1.5rem,4vw,3.5rem)", maxWidth: "62rem", alignItems: "start" }}>
          <div>
            {isOn ? (
              <>
                <p className="text-label" style={{ marginBottom: "0.6rem" }}>On the mat</p>
                <p style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(1.15rem,2vw,1.6rem)", fontWeight: 300, lineHeight: 1.5, color: "var(--bone)" }}>
                  {teaching}
                </p>
                {note && <p className="text-body" style={{ marginTop: "0.85rem" }}>{note}</p>}
              </>
            ) : (
              <p className="text-body">
                {status === "cancelled"
                  ? "No class this Sunday. See you next week."
                  : "No class this Sunday. Check Instagram for the next date."}
              </p>
            )}
          </div>

          <div>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>Where &amp; when</p>
            <p style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.95rem,1.3vw,1.1rem)", fontWeight: 300, lineHeight: 1.7, color: "var(--bone)", marginBottom: "1rem" }}>
              2:30&ndash;4:30 PM<br />
              94-199 Leonui St #4, Waipahu
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="link-primary">Get directions &rarr;</a>
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="link-accent">Instagram &rarr;</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/nhjj-icon.png" alt="NHJJ Hawaii" width={30} height={30} style={{ borderRadius: "50%", opacity: 0.85 }} />
          <span className="text-label" style={{ color: "var(--bone)", letterSpacing: "0.14em" }}>NHJJ Hawaii</span>
        </div>
        <a href="#this-sunday" className="link-primary">This Sunday &darr;</a>
      </nav>

      {/* HERO — photo, coloured light, oversized type, logo on top */}
      <section className="hero">
        <div className="hero-photo">
          <Image
            src="/gallery/5X9A2133.jpg"
            alt="The Sunday class standing in a circle, arms around each other, after training"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-wash" aria-hidden />
        <div className="hero-vignette" aria-hidden />
        <div className="hero-grain" aria-hidden style={{ backgroundImage: GRAIN }} />

        <div className="hero-stack">
          <p className="hero-word" aria-hidden>Jiu-Jitsu</p>

          {/* The logo carries the name, so the h1 is visually hidden text */}
          <h1 style={{ margin: 0, lineHeight: 0 }}>
            <Image
              className="hero-logo"
              src="/nhjj-logo.png"
              alt="NHJJ Hawaii — New Hope Jiu-Jitsu"
              width={1264}
              height={1264}
              priority
            />
          </h1>

          <p className="hero-word" aria-hidden>Sundays</p>
        </div>

        <div className="hero-meta">
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Always free</span>
          <span style={{ color: "var(--accent)" }}>&bull;</span>
          <span>2:30&ndash;4:30 PM</span>
          <span style={{ color: "var(--accent)" }}>&bull;</span>
          <span>Waipahu, Oahu</span>
          <span style={{ color: "var(--accent)" }}>&bull;</span>
          <span>All ages, no experience</span>
        </div>
      </section>

      {/* WHAT THIS IS — the first thing a stranger should read */}
      <section className="section-pad glow-violet glow">
        <div style={{ maxWidth: "46rem" }}>
          <Reveal>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2.25rem,6vw,4.25rem)", lineHeight: 0.95, marginBottom: "1.75rem" }}
            >
              <span style={{ color: "var(--accent)" }}>Always free.</span>
              <br />
              <span style={{ color: "var(--bone)" }}>Every Sunday.</span>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1.15rem,2.1vw,1.6rem)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "var(--bone)",
                marginBottom: "1.5rem",
              }}
            >
              Come move your body, learn to pay attention, and train real jiu-jitsu.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-body" style={{ marginBottom: "1rem" }}>
              We start with movement — getting stronger and more comfortable in how you
              carry yourself. That builds awareness of what is going on around you, which
              is where self-defense actually begins. Then we put it together on the mat.
            </p>
            <p className="text-body">
              Anyone can walk in. You do not need to be fit, young, or have done anything
              like this before.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p
              style={{
                marginTop: "2rem",
                paddingLeft: "1.1rem",
                borderLeft: "2px solid var(--accent)",
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1rem,1.6vw,1.25rem)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--accent)",
                lineHeight: 1.5,
              }}
            >
              No experience. No gi. No cost, ever.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THIS SUNDAY */}
      <SundayBlock />

      {/* PILLARS — four compact rows, one section */}
      <section id="train" className="section-pad glow">
        <Reveal>
          <p className="text-label" style={{ marginBottom: "clamp(1.25rem,3vw,2rem)" }}>What we train</p>
        </Reveal>
        {pillars.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(i, 3) as 0 | 1 | 2 | 3} className="pillar-row">
            <p className="text-meta" style={{ color: "var(--bone-3)" }}>{p.n}</p>
            <h3 className="text-pillar" style={{ color: "var(--bone)" }}>{p.name}</h3>
            <p className="text-body" style={{ maxWidth: "38rem" }}>{p.desc}</p>
          </Reveal>
        ))}
      </section>

      {/* ABOUT — copy left, community photo right */}
      <section id="about" className="section-pad glow-violet glow" style={{ borderTop: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }}>
          <div>
            <Reveal>
              <p className="text-label" style={{ marginBottom: "1.25rem" }}>About</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display" style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)", lineHeight: 0.95, color: "var(--bone)", marginBottom: "1.5rem" }}>
                Free,
                <br /><span style={{ color: "var(--bone-2)" }}>every Sunday.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body" style={{ marginBottom: "0.9rem" }}>
                We train Sunday afternoons at New Hope Kapolei Ministry Center in Waipahu.
                Jiu-jitsu is the practice. Fellowship is the point.
              </p>
              <p className="text-body">
                Every class is free. No membership, no contracts, no experience needed.
                Intensity on the mat, warmth off it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div style={{ position: "relative", aspectRatio: "3 / 2", overflow: "hidden", border: "1px solid var(--rule)" }}>
              <Image
                src="/gallery/DSC_2939.JPG"
                alt="The Sunday class gathered together after training"
                fill
                sizes="(max-width: 720px) 100vw, 45vw"
                style={{ objectFit: "cover", filter: "grayscale(45%) saturate(0.9) brightness(0.82) contrast(1.03)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="section-pad" style={{ borderTop: "1px solid var(--rule)" }}>
        <Reveal>
          <p className="text-label" style={{ marginBottom: "clamp(1.5rem,3vw,2.25rem)" }}>Visit</p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(1.75rem,4vw,3.5rem)", maxWidth: "58rem" }}>
          <Reveal delay={1}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>When</p>
            <p className="font-display" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "var(--bone)", lineHeight: 1.05 }}>Sundays</p>
            <p className="font-display" style={{ fontSize: "clamp(1.25rem,2.5vw,1.85rem)", color: "var(--bone-2)", lineHeight: 1.1 }}>2:30&ndash;4:30 PM</p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>Where</p>
            <p style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem,1.3vw,1.05rem)", fontWeight: 300, lineHeight: 1.7, color: "var(--bone)", marginBottom: "0.85rem" }}>
              New Hope Kapolei Ministry Center<br />
              94-199 Leonui St #4<br />
              Waipahu, HI 96797
            </p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="link-primary">Get directions &rarr;</a>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-label" style={{ marginBottom: "0.6rem" }}>What to bring</p>
            <p style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem,1.3vw,1.05rem)", fontWeight: 300, lineHeight: 1.75, color: "var(--bone-2)" }}>
              Just yourself.<br />
              Comfortable clothes.<br />
              No gi required.<br />
              No experience needed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BRAND BAND — the banner lockup, full bleed, as the sign-off */}
      <div className="banner-band">
        <Image
          src="/nhjj-banner.png"
          alt="NHJJ Hawaii — Awareness, Movement, Jujitsu, Self-Defense"
          fill
          sizes="100vw"
        />
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--rule)", padding: "clamp(2.25rem,4vw,3.25rem) clamp(1.5rem,5vw,4rem) clamp(5rem,6vw,3.25rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "1.75rem 3rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.7rem" }}>
            <Image src="/nhjj-icon.png" alt="NHJJ Hawaii" width={22} height={22} style={{ borderRadius: "50%", opacity: 0.6 }} />
            <span className="text-label" style={{ color: "var(--bone)" }}>NHJJ Hawaii</span>
          </div>
          <p className="text-meta">&copy; {new Date().getFullYear()} New Hope Jiu-Jitsu Hawaii</p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.7rem" }}>Connect</p>
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="link-accent" style={{ width: "fit-content" }}>
            @{INSTAGRAM}
          </a>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.7rem" }}>Find us</p>
          <p className="text-meta" style={{ lineHeight: 1.85 }}>
            Sundays &middot; 2:30&ndash;4:30 PM<br />
            94-199 Leonui St #4<br />
            Waipahu, HI 96797
          </p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.7rem" }}>What we train</p>
          <p className="text-meta" style={{ lineHeight: 2 }}>
            Awareness<br />Movement<br />Jujitsu<br />Self-Defense
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="sticky-bar">
        <div>
          <p className="text-label" style={{ color: "var(--bone)", marginBottom: "1px" }}>Sundays 2:30 PM</p>
          <p className="text-meta">Waipahu &middot; Free</p>
        </div>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="link-primary" style={{ flexShrink: 0 }}>
          Directions &rarr;
        </a>
      </div>
    </>
  )
}
