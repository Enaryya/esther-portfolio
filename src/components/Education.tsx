"use client";

type Cred = {
  type: string;
  title?: string;
  institution?: string;
  items?: { name: string; issuer: string }[];
};

const creds: Cred[] = [
  {
    type: "Bachelor of Arts",
    title: "Communication Studies (Public Relations and Marketing)",
    institution: "University of Media, Arts and Communication, Ghana",
  },
  {
    type: "Professional Certificate",
    title: "Fundamentals of Technology Sales",
    institution: "University of Maryland, College Park",
  },
  {
    type: "Certifications",
    items: [
      { name: "AI and Cybersecurity Governance", issuer: "Columbia University" },
      { name: "Sales and CRM Overview", issuer: "Salesforce · Pathstream" },
      { name: "Google Project Management", issuer: "Google" },
      { name: "Google Digital Marketing", issuer: "Google" },
      { name: "Content Marketing", issuer: "UC Berkeley via Coursera" },
      { name: "SEO and Copywriting", issuer: "Coursera" },
    ],
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3rem", alignItems: "start" }} className="edu-grid">
          {creds.map((c) => (
            <div
              key={c.type}
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
              {c.title && (
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--espresso)", lineHeight: 1.35 }}>
                  {c.title}
                </div>
              )}
              {c.institution && (
                <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                  {c.institution}
                </div>
              )}
              {c.items && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "0.35rem" }}>
                  {c.items.map((it) => (
                    <li key={it.name}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600, color: "var(--espresso)", lineHeight: 1.3 }}>
                        {it.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.1rem" }}>
                        {it.issuer}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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
