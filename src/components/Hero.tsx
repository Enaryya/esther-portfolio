"use client";

import { useEffect, useRef } from "react";

const CONSULT_URL = "https://calendar.app.google/nvsXNjnM2pk73BJJ6";
const HERO_KEY = "esther_portfolio_hero_photo";

export default function Hero() {
  const zoneRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const img = imgRef.current;
    const input = inputRef.current;
    if (!zone || !img || !input) return;

    const saved = localStorage.getItem(HERO_KEY);
    if (saved) applyPhoto(saved);

    function applyPhoto(src: string) {
      if (!img || !zone) return;
      img.src = src;
      img.style.display = "block";
      zone.classList.add("has-photo");
    }

    zone.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest(".del-btn")) return;
      input.click();
    });

    input.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const url = ev.target?.result as string;
        try { localStorage.setItem(HERO_KEY, url); } catch {}
        applyPhoto(url);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    const img = imgRef.current;
    const zone = zoneRef.current;
    if (!img || !zone) return;
    img.src = "";
    img.style.display = "none";
    zone.classList.remove("has-photo");
    localStorage.removeItem(HERO_KEY);
  }

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

        {/* CTA ROW — includes Book a Consultation */}
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
      <div style={{ position: "relative", background: "var(--espresso)", overflow: "hidden", display: "flex", alignItems: "stretch" }} className="hero-right">
        <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>
          <div
            ref={zoneRef}
            className="photo-zone"
            style={{ flex: 1, cursor: "pointer" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={imgRef} className="uploaded" alt="Esther Appiah-Fei" style={{ display: "none", objectPosition: "center top" }} />
            <div className="photo-overlay" style={{
              background: "radial-gradient(ellipse 60% 60% at 30% 40%, rgba(192,90,53,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 70% 70%, rgba(196,139,58,0.13) 0%, transparent 60%)",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: "1.5px solid rgba(250,247,242,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="22" height="22" style={{ opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", opacity: 0.35 }}>
                Click to add portrait photo
              </div>
            </div>
            <button className="del-btn" onClick={handleDelete}>✕</button>
            <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} />
          </div>

          {/* Quote bar */}
          <div style={{ padding: "2rem 2.5rem", position: "relative", zIndex: 2 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--cream)", opacity: 0.88, lineHeight: 1.5, maxWidth: "32ch" }}>
              &ldquo;Marketing can&rsquo;t be green when a business is red.&rdquo;
            </p>
            <div style={{ fontSize: "0.72rem", color: "var(--amber)", letterSpacing: "0.07em", marginTop: "0.5rem", opacity: 0.75 }}>
              Esther Appiah-Fei, Communications and GTM Strategist
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 360px; }
          .hero-left { padding: 5.5rem 1.5rem 3rem !important; }
        }
      `}</style>
    </section>
  );
}
