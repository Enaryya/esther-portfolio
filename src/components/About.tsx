"use client";

import { useEffect, useRef } from "react";

const ABOUT_KEY = "esther_portfolio_about_photo";

export default function About() {
  const zoneRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const img = imgRef.current;
    const input = inputRef.current;
    if (!zone || !img || !input) return;

    const saved = localStorage.getItem(ABOUT_KEY);
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
        try { localStorage.setItem(ABOUT_KEY, url); } catch {}
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
    localStorage.removeItem(ABOUT_KEY);
  }

  const skills = [
    "Demand Generation", "GTM", "PR & Communications", "Sales and Business Development",
    "Journalism", "Brand Storytelling", "Partnerships", "Account Based Marketing",
    "SEO Writing and Content Strategy", "Product Marketing",
  ];

  return (
    <section id="about" style={{ background: "var(--cream-mid)", padding: "6rem 3rem" }} className="about-section">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }} className="about-grid">
        {/* LEFT — sticky */}
        <div style={{ position: "sticky", top: 90 }} className="about-left">
          <div className="section-label">About</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--espresso)",
            marginBottom: "0.75rem",
          }}>
            Storyteller.<br />Revenue Operations<br />Strategist.<br />Bridge-builder.
          </h2>

          {/* Photo zone */}
          <div
            ref={zoneRef}
            className="photo-zone scroll-reveal"
            style={{ marginTop: "2rem", width: "100%", aspectRatio: "4/5", maxWidth: 260 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={imgRef} className="uploaded" alt="Esther Appiah-Fei" style={{ display: "none" }} />
            <div className="photo-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="28" height="28" style={{ opacity: 0.25 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <div style={{ fontFamily: "monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", opacity: 0.3 }}>
                Add photo
              </div>
            </div>
            <button className="del-btn" onClick={handleDelete}>✕</button>
            <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} />
          </div>
        </div>

        {/* RIGHT — body */}
        <div className="about-body scroll-reveal">
          {[
            <>Hi, I&rsquo;m Esther. Growth marketer, content strategist, and full-cycle sales professional based in Accra, working with brands across three continents. I specialise in one thing: turning complex ideas into clear, compelling stories that reach the right people — and then making sure those people convert. From BBC newsrooms to SaaS pipelines, outbound sequencing to editorial strategy, I close the loop between narrative and revenue. A great story that does not generate results (revenue) is just a nice story.</>,
            <>My career spans journalism, B2B content strategy, sales, growth marketing, and digital communications. I have published features for the BBC, Al Jazeera, The Guardian, and Olympics.com. I have built outbound pipelines that converted at 80%, negotiated 40+ media partnerships, driven demand generation for AI and SaaS companies, and run lead gen operations for luxury real estate targeting diaspora and HNW buyers.</>,
            <>I have written SEO content that ranks, cold emails that book meetings, pitch decks that close deals, and editorial pieces that make people stop scrolling. Whether it is a Semantic SEO strategy, an ABM campaign, a GTM launch, a full-cycle sales pipeline, or a 3,000-word feature with a clear point of view — I show up with research, craft, and a refusal to produce anything that does not have a job to do.</>,
            <>I hold a BA in Communications from the <strong style={{ fontWeight: 600, color: "var(--terracotta)" }}>University of Media, Arts and Communication</strong> in Ghana, and a certification in Technology Sales Fundamentals from the University of Maryland.</>,
          ].map((para, i) => (
            <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--espresso)", marginBottom: "1.25rem", fontWeight: 300 }}>
              {para}
            </p>
          ))}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.75rem" }}>
            {skills.map((s) => (
              <span key={s} className="skill-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-section { padding: 4rem 1.5rem !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-left { position: static !important; }
        }
      `}</style>
    </section>
  );
}
