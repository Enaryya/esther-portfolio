"use client";

const creds = [
  {
    type: "Bachelor of Arts",
    title: "Communications",
    institution: "University of Media, Arts and Communication, Ghana",
  },
  {
    type: "Professional Certificate",
    title: "Fundamentals of Technology Sales",
    institution: "University of Maryland, College Park",
  },
  {
    type: "Certifications",
    title: "Digital Marketing and Communications",
    institution: "Coursera · edX",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--cream-mid)", padding: "6rem 3rem" }} className="edu-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label">Education</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--espresso)",
        }}>
          Credentials
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3rem" }} className="edu-grid">
          {creds.map((c) => (
            <div
              key={c.title}
              className="scroll-reveal"
              style={{
                padding: "2rem",
                border: "1.5px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                background: "var(--cream)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--terracotta)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--terracotta)" }}>
                {c.type}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--espresso)", lineHeight: 1.25 }}>
                {c.title}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                {c.institution}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .edu-section { padding: 4rem 1.5rem !important; }
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
