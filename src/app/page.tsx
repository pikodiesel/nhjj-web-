import Image from "next/image";

const pillars = [
  {
    title: "Awareness",
    icon: "👁",
    desc: "Read the room before anything else. Situational awareness is the foundation of real safety.",
  },
  {
    title: "Movement",
    icon: "🌀",
    desc: "Your body is a tool. We develop coordination, balance, and the ability to move under pressure.",
  },
  {
    title: "Jujitsu",
    icon: "🥋",
    desc: "Brazilian Jiu-Jitsu technique for all levels — from day one to competition ready.",
  },
  {
    title: "Self-Defense",
    icon: "🛡",
    desc: "Practical skills that work in real situations. No theatrics — just what actually works.",
  },
];

const schedule = [
  { day: "Monday",    times: ["6:00 PM – Fundamentals", "7:00 PM – Open Mat"] },
  { day: "Wednesday", times: ["6:00 PM – Fundamentals", "7:00 PM – All Levels"] },
  { day: "Friday",    times: ["6:00 PM – All Levels", "7:00 PM – Open Mat"] },
  { day: "Saturday",  times: ["9:00 AM – Fundamentals", "10:00 AM – All Levels"] },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "rgba(6,12,20,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,180,255,0.12)",
        }}
      >
        <div className="flex items-center gap-3">
          <Image src="/nhjj-icon.png" alt="NHJJ Hawaii" width={44} height={44} className="rounded-full" />
          <span
            className="font-bold tracking-widest uppercase text-sm"
            style={{ color: "#00b4ff", fontFamily: "var(--font-rajdhani)" }}
          >
            NHJJ Hawaii
          </span>
        </div>
        <div
          className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-semibold"
          style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
        >
          <a href="#pillars" className="hover:text-white transition-colors">Pillars</a>
          <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="glow-pulse text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full transition-all hover:brightness-110"
          style={{ background: "linear-gradient(135deg,#00b4ff,#0066cc)", color: "#fff", fontFamily: "var(--font-barlow)" }}
        >
          Free Class
        </a>
      </nav>

      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-screen pt-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#060c14 0%,#071222 60%,#060c14 100%)" }}
      >
        {/* Grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,255,.4) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 fade-up mb-6">
          <Image
            src="/nhjj-logo.png"
            alt="NHJJ Hawaii"
            width={480}
            height={480}
            className="w-72 sm:w-96 md:w-[480px] drop-shadow-2xl"
            priority
          />
        </div>

        <h1
          className="fade-up-2 relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-widest leading-tight"
          style={{ fontFamily: "var(--font-rajdhani)", color: "#f0f8ff" }}
        >
          Train with <span style={{ color: "#00b4ff" }}>Purpose</span>
          <br />in Hawaii
        </h1>
        <p
          className="fade-up-3 relative z-10 mt-4 max-w-xl text-base sm:text-lg tracking-wider"
          style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
        >
          Jiu-Jitsu rooted in real-world skill — for kids, adults, and everyone in between.
        </p>
        <div className="fade-up-3 relative z-10 flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#contact"
            className="glow-pulse px-8 py-3 rounded-full font-bold tracking-widest uppercase text-sm transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg,#00b4ff,#0066cc)", color: "#fff", fontFamily: "var(--font-barlow)" }}
          >
            Try a Free Class
          </a>
          <a
            href="#schedule"
            className="px-8 py-3 rounded-full font-bold tracking-widest uppercase text-sm transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(0,180,255,0.4)", color: "#00b4ff", fontFamily: "var(--font-barlow)" }}
          >
            View Schedule
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, #00b4ff)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#00b4ff", fontFamily: "var(--font-barlow)" }}>Scroll</span>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="py-24 px-6 max-w-6xl mx-auto">
        <p
          className="text-center text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "#00b4ff", fontFamily: "var(--font-barlow)" }}
        >
          What We Train
        </p>
        <h2
          className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-14"
          style={{ fontFamily: "var(--font-rajdhani)", color: "#f0f8ff" }}
        >
          The Four Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center rounded-2xl p-7 gap-4 transition-transform hover:-translate-y-1"
              style={{ background: "rgba(0,180,255,0.06)", border: "1px solid rgba(0,180,255,0.15)" }}
            >
              <div className="text-4xl">{p.icon}</div>
              <h3
                className="text-xl font-bold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-rajdhani)", color: "#00b4ff" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px" style={{ background: "linear-gradient(to right,transparent,rgba(0,180,255,0.3),transparent)" }} />

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "#00b4ff", fontFamily: "var(--font-barlow)" }}
        >
          Our Story
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-8"
          style={{ fontFamily: "var(--font-rajdhani)", color: "#f0f8ff" }}
        >
          New Hope Jiu-Jitsu Hawaii
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed mb-6"
          style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
        >
          NHJJ Hawaii was built on a simple idea: Jiu-Jitsu should be accessible, purposeful, and rooted in community.
          We welcome beginners and seasoned practitioners alike — no ego, no gatekeeping.
          Just good training, good people, and skills that actually matter.
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
        >
          Based in Hawaii, we train in the spirit of aloha — with intensity on the mat and warmth off of it.
        </p>
      </section>

      <div className="w-full h-px" style={{ background: "linear-gradient(to right,transparent,rgba(0,180,255,0.3),transparent)" }} />

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6 max-w-5xl mx-auto">
        <p
          className="text-center text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "#00b4ff", fontFamily: "var(--font-barlow)" }}
        >
          Class Times
        </p>
        <h2
          className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-14"
          style={{ fontFamily: "var(--font-rajdhani)", color: "#f0f8ff" }}
        >
          Weekly Schedule
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {schedule.map((s) => (
            <div
              key={s.day}
              className="rounded-2xl p-6"
              style={{ background: "rgba(0,180,255,0.05)", border: "1px solid rgba(0,180,255,0.15)" }}
            >
              <h3
                className="text-lg font-bold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-rajdhani)", color: "#00b4ff" }}
              >
                {s.day}
              </h3>
              {s.times.map((t) => (
                <p
                  key={t}
                  className="text-sm py-2 border-b last:border-0"
                  style={{ color: "#c8dff0", fontFamily: "var(--font-barlow)", borderColor: "rgba(0,180,255,0.1)" }}
                >
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-8 tracking-wider" style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}>
          * Schedule subject to change. Contact us to confirm.
        </p>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(180deg,rgba(0,180,255,0.04) 0%,rgba(0,100,200,0.08) 100%)" }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "#00b4ff", fontFamily: "var(--font-barlow)" }}
        >
          Get Started
        </p>
        <h2
          className="text-3xl sm:text-5xl font-bold uppercase tracking-widest mb-6"
          style={{ fontFamily: "var(--font-rajdhani)", color: "#f0f8ff" }}
        >
          Your First Class is <span style={{ color: "#00b4ff" }}>Free</span>
        </h2>
        <p
          className="max-w-xl mx-auto text-base sm:text-lg mb-10"
          style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
        >
          No experience needed. Just show up ready to learn. Reach out and we&apos;ll get you on the mat.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          <a
            href="mailto:info@nhjjhawaii.com"
            className="glow-pulse px-10 py-4 rounded-full transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg,#00b4ff,#0066cc)", color: "#fff" }}
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/nhjjhawaii"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(0,180,255,0.4)", color: "#00b4ff" }}
          >
            @nhjjhawaii
          </a>
        </div>
        <p className="mt-10 text-xs tracking-wider" style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}>
          Hawaii · Awareness · Movement · Jujitsu · Self-Defense
        </p>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center"
        style={{ background: "#030608", borderTop: "1px solid rgba(0,180,255,0.08)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <div className="flex items-center gap-3">
            <Image src="/nhjj-icon.png" alt="NHJJ Hawaii" width={28} height={28} className="rounded-full opacity-80" />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
            >
              NHJJ Hawaii
            </span>
          </div>
          <p className="text-xs tracking-wider" style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}>
            &copy; {new Date().getFullYear()} NHJJ Hawaii. All rights reserved.
          </p>
          <div
            className="flex gap-6 text-xs tracking-widest uppercase"
            style={{ color: "#8aa0b8", fontFamily: "var(--font-barlow)" }}
          >
            <a href="#pillars" className="hover:text-white transition-colors">Pillars</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
