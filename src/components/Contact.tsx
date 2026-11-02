"use client";

const CONSULT_URL = "https://calendar.app.google/yR45gSxZV96s3ji59";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--espresso)", padding: "7rem 3rem" }} className="contact-section">
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div className="section-label light centered">Get in Touch</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--cream)",
          margin: "0.5rem 0 1.25rem",
        }}>
          Let&rsquo;s build something worth reading, and worth buying
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#b8a8d0", marginBottom: "2.75rem", fontWeight: 300 }}>
          Whether you&rsquo;re commissioning a story, building AI search visibility, or opening a new market in Africa, I&rsquo;d love to hear what you&rsquo;re working on. I work comfortably with teams across time zones from my base in Accra.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={CONSULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-consult"
            style={{ fontSize: "0.85rem", padding: "1rem 2.2rem" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Consultation
          </a>
          <a
            href="https://www.linkedin.com/in/esther-appiah-fei/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 1.75rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              color: "var(--cream)",
              border: "1.5px solid #3d2070",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--amber)"; el.style.color = "var(--amber)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#3d2070"; el.style.color = "var(--cream)"; }}
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:esther@feigrowthlab.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 1.75rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              color: "var(--cream)",
              border: "1.5px solid #3d2070",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--amber)"; el.style.color = "var(--amber)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#3d2070"; el.style.color = "var(--cream)"; }}
          >
            esther@feigrowthlab.com
          </a>
          <a
            href="mailto:esthera759@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 1.75rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              color: "var(--cream)",
              border: "1.5px solid #3d2070",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--amber)"; el.style.color = "var(--amber)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#3d2070"; el.style.color = "var(--cream)"; }}
          >
            esthera759@gmail.com
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-section { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
