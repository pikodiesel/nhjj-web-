import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — NHJJ Hawaii",
  description: "Privacy policy for nhjjhawaii.com and Chloie, Shane Nakagawara's personal assistant app.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
}

const H2 = "font-display mt-12 text-3xl tracking-wide"
const P = "mt-4 leading-relaxed"

export default function PrivacyPage() {
  return (
    <main
      className="section-pad"
      style={{ background: "var(--ink)", color: "var(--bone-2)", minHeight: "100vh", fontSize: "1.125rem" }}
    >
      <div style={{ maxWidth: "46rem", margin: "0 auto" }}>
        <p className="text-label">
          <Link href="/">← NHJJ Hawaii</Link>
        </p>
        <h1 className="font-display mt-6" style={{ fontSize: "clamp(2.75rem,8vw,5rem)", lineHeight: 0.95, color: "var(--bone)" }}>
          Privacy Policy
        </h1>
        <p className={P} style={{ color: "var(--bone-3)" }}>Effective October 8, 2026</p>

        <h2 className={H2} style={{ color: "var(--bone)" }}>This website</h2>
        <p className={P}>
          nhjjhawaii.com is an information page for New Hope Jiu-Jitsu Hawaii. It has no sign-up forms, no accounts,
          and no advertising or tracking cookies. Our hosting provider may keep standard server logs (such as IP
          address and pages visited) to run and protect the site.
        </p>

        <h2 className={H2} style={{ color: "var(--bone)" }}>Chloie (personal assistant app)</h2>
        <p className={P}>
          Chloie is a private assistant app built and used only by Shane Nakagawara for his own Google accounts. It is
          not offered to the public. With Shane&apos;s permission, Chloie connects to his Gmail and Google Calendar to:
        </p>
        <ul className={P} style={{ paddingLeft: "1.25rem", listStyle: "disc" }}>
          <li>read and search his email and summarize it for him;</li>
          <li>write email drafts, which are sent only after Shane approves each one;</li>
          <li>read his calendar and add events when he asks.</li>
        </ul>
        <p className={P}>
          Sign-in tokens are stored encrypted on Shane&apos;s own computer. To answer his questions, the relevant parts
          of an email or calendar event may be processed by the AI services Shane uses (xAI and OpenAI). Google data is
          never sold, never used for advertising, never shared with anyone else, and never used to train AI models.
        </p>
        <p className={P}>
          Chloie&apos;s use and transfer of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p className={P}>
          Access can be removed at any time at{" "}
          <a href="https://myaccount.google.com/permissions" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            myaccount.google.com/permissions
          </a>
          , which stops all further access.
        </p>

        <h2 className={H2} style={{ color: "var(--bone)" }}>Contact</h2>
        <p className={P}>
          Questions about this policy: <a href="mailto:snakagawara@gmail.com" style={{ color: "var(--accent)" }}>snakagawara@gmail.com</a>
        </p>
      </div>
    </main>
  )
}
