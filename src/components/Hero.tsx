"use client";

import Image from "next/image";

const CONSULT_URL = "https://calendar.app.google/nvsXNjnM2pk73BJJ6";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "72px",
        position: "relative",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      {/* LEFT */}
      <div
        style={{
          padding: "5rem 3rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="hero-left"
      >
        <div className="fade-up fade-up-1" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--terracotta)",
          marginBottom: "1.5rem",
        }}>
          <span style={{ width: 24, height: 1, background: "var(--terracotta)", flexShrink: 0, display: "inline-block" }} />
          Communications · Content · Strategy · GTM
        </div>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--espresso)",
          }}
        >
          Esther<br />
          <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>Appiah-Fei</span>
        </h1>

        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: "40ch",
            marginTop: "1.75rem",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          I sit at the intersection of content strategy, demand generation, and GTM execution — building the messaging, pipeline, and content engine that connect them. Full-cycle sales too: prospecting, discovery, closing. Not just the top of the funnel.
        </p>

        {/* CTAs */}
        <div
          className="fade-up fade-up-4"
          style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
        >
          <a href="#work" style={{
            padding: "0.85rem 2rem",
            background: "var(--espresso)",
            color: "var(--cream)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--terracotta)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--espresso)"; (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
          >
            View My Work
          </a>
          <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer" className="btn-consult">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Consultation
          </a>
          <a href="#contact" style={{
            padding: "0.85rem 2rem",
            background: "transparent",
            color: "var(--espresso)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            border: "1.5px solid var(--border)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "border-color 0.2s, color 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--terracotta)"; el.style.color = "var(--terracotta)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--espresso)"; el.style.transform = "none"; }}
          >
            Work With Me
          </a>
        </div>

        {/* Stats */}
        <div
          className="fade-up fade-up-5"
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { num: "6+", label: "Years Experience" },
            { num: "8+", label: "Global Clients" },
            { num: "3", label: "Continents" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--espresso)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — photo panel */}
      <div style={{ position: "relative", background: "var(--espresso)", overflow: "hidden", display: "flex", flexDirection: "column" }} className="hero-right">
        {/* Photo — fills the panel */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            src="/esther-hero.jpg"
            alt="Esther Appiah-Fei at the Google Accra AI Community Centre"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          {/* subtle gradient overlay so quote bar reads cleanly */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 55%, rgba(30,26,21,0.75) 100%)",
          }} />
        </div>

        {/* Quote bar */}
        <div style={{ padding: "2rem 2.5rem", position: "relative", zIndex: 2, background: "var(--espresso)" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--cream)", opacity: 0.88, lineHeight: 1.5, maxWidth: "32ch" }}>
            &ldquo;Marketing can&rsquo;t be green when a business is red.&rdquo;
          </p>
          <div style={{ fontSize: "0.72rem", color: "var(--amber)", letterSpacing: "0.07em", marginTop: "0.5rem", opacity: 0.75 }}>
            Esther Appiah-Fei, Communications and GTM Strategist
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 420px; }
          .hero-left { padding: 5.5rem 1.5rem 3rem !important; }
        }
      `}</style>
    </section>
  );
}
