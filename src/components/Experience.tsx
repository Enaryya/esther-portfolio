const items = [
  {
    date: "2025 — Present",
    role: "Product Marketing Specialist",
    company: "SUBJCT",
    desc: "Building go-to-market messaging and brand voice for a company operating at the intersection of creativity and technology. Responsible for product narratives, marketing content, and positioning strategy that drives acquisition and engagement.",
  },
  {
    date: "2026 — Present",
    role: "AWS Cloud Sales",
    company: "CloudPlexo",
    desc: "Driving AWS cloud adoption and revenue across businesses, financial institutions, and technology companies and departments in Ghana. Leading end-to-end sales cycles — from prospecting and technical discovery through to commercial negotiation and close — positioning CloudPlexo as the go-to cloud solutions partner for organisations modernising their infrastructure.",
  },
  {
    date: "2024 — 2025",
    role: "Communications Consultant",
    company: "VIS Ghana",
    desc: "Developed communications strategy and editorial content for a national volunteering and development organisation, connecting grassroots volunteer work to Ghana's wider development narrative and international reporting frameworks.",
  },
  {
    date: "2024",
    role: "Creative Content Consultant",
    company: "Movemeback",
    desc: "Led inbound marketing content for a platform connecting Africa's global talent community. Developed brand voice, editorial strategy, and long-form content that improved organic visibility and audience engagement.",
  },
  {
    date: "2024",
    role: "Content Writer",
    company: "American Bar Association",
    desc: "Produced long-form analytical content focused on minority rights and legal issues in West Africa. Work made complex legislative frameworks accessible to non-specialist readers, supporting the ABA's public engagement and advocacy mission.",
  },
  {
    date: "2022 — Present",
    role: "Partnerships Head of Digital Media",
    company: "TRUE Africa",
    desc: "Led broadcast and digital partnerships in Ghana for the Limitless Podcast. Negotiated broadcast deals with radio stations, conducted editorial interviews, and developed digital media strategy for a pan-African multimedia platform reaching audiences across English and French-speaking markets.",
  },
  {
    date: "Prior",
    role: "Communications Specialist and PR Writer",
    company: "HSA PR · Rio Tinto · Gamurs Group · GIZ",
    desc: "Delivered PR, communications, and digital marketing across mining, professional services, international development, and gaming media. Clients included corporations, law firms, educational institutions, executives, and global NGOs.",
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 3rem" }} className="exp-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem", alignItems: "end" }} className="exp-header">
          <div>
            <div className="section-label">Experience</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--espresso)",
            }}>
              A career built<br />on clear thinking
            </h2>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)", fontWeight: 300, maxWidth: "40ch" }}>
            From African media platforms to global development organisations, every role has sharpened the same core skill: finding the story that connects and crafting the message that sticks.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal tl-item"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1px 1fr",
                gap: "0 2rem",
                paddingBottom: i < items.length - 1 ? "3rem" : 0,
              }}
            >
              <div style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--muted)", letterSpacing: "0.03em", paddingTop: "0.2rem", textAlign: "right" }}>
                {item.date}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "var(--terracotta)",
                  border: "2px solid var(--cream)",
                  outline: "1.5px solid var(--terracotta)",
                  flexShrink: 0,
                  marginTop: "0.35rem",
                }} />
                {i < items.length - 1 && <div className="tl-connector" />}
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "var(--espresso)", lineHeight: 1.2, marginBottom: "0.2rem" }}>
                  {item.role}
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: "0.55rem" }}>
                  {item.company}
                </div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.68, color: "var(--muted)", maxWidth: "55ch" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-section { padding: 4rem 1.5rem !important; }
          .exp-header { grid-template-columns: 1fr !important; }
          .tl-item { grid-template-columns: 88px 1px 1fr !important; gap: 0 1.2rem !important; }
        }
      `}</style>
    </section>
  );
}
