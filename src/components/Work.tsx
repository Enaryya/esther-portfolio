"use client";

const cards = [
  {
    featured: true,
    tag: "SUBJCT · Product Marketing",
    title: "Building the Brand Voice for an AI-Powered Creative Company",
    desc: "As Product Marketing Specialist at SUBJCT, I developed the full go-to-market messaging strategy and brand voice from the ground up. This included positioning frameworks, product narratives, and content systems that give the brand a clear, consistent identity across every touchpoint. The work centres on making AI feel human, relevant, and worth paying attention to.",
    outlet: "",
    pills: ["Product Marketing", "Brand Strategy", "Copywriting"],
  },
  {
    featured: false,
    tag: "TRUE Africa · Broadcast and Partnerships",
    title: "Limitless Podcast: Practical Solutions to African Problems and Strengthening American Partnerships",
    desc: "As Partnerships Head of Digital Media, I negotiated broadcast deals with Ghanaian radio stations and conducted editorial interviews for a pan-African podcast reaching English and French-speaking markets across the continent.",
    outlet: "TRUE Africa · Limitless Podcast",
    pills: [],
  },
  {
    featured: false,
    tag: "VIS Ghana · Communications Strategy",
    title: "Giving Volunteer Work a Voice That Reaches the World",
    desc: "Developed the full communications strategy and editorial content for a national volunteering organisation, translating grassroots impact stories into narratives that resonate with international development stakeholders and funders.",
    outlet: "VIS Ghana · National Development",
    pills: [],
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "6rem 3rem" }} className="work-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div className="section-label">Featured Work</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--espresso)" }}>
              Selected projects
            </h2>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gridTemplateRows: "auto auto", gap: "1.5px" }}
          className="work-grid"
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="scroll-reveal"
              style={{
                background: c.featured ? "#ede0ff" : "var(--cream-mid)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                border: c.featured ? "1px solid #d8c0f8" : "1px solid var(--border)",
                gridRow: c.featured ? "span 2" : undefined,
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = c.featured ? "#e2d0ff" : "#e8daf8")}
              onMouseLeave={e => (e.currentTarget.style.background = c.featured ? "#ede0ff" : "var(--cream-mid)")}
            >
              <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)" }}>
                {c.tag}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: c.featured ? "1.55rem" : "1.2rem", fontWeight: 600, lineHeight: 1.25, color: "var(--espresso)" }}>
                {c.title}
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--muted)" }}>
                {c.desc}
              </p>
              {c.pills.length > 0 && (
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)", fontWeight: 600 }}>
                    {c.pills.join(" · ")}
                  </div>
                </div>
              )}
              {c.outlet && (
                <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--muted)", marginTop: "auto", display: "flex", alignItems: "center", gap: "0.4rem", paddingTop: "0.5rem" }}>
                  <span style={{ width: 14, height: 1, background: "var(--muted)", flexShrink: 0, display: "inline-block" }} />
                  {c.outlet}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-section { padding: 4rem 1.5rem !important; }
          .work-grid { grid-template-columns: 1fr !important; }
          .work-grid > div[style*="span 2"] { grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
