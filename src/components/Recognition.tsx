const items = [
  "Fourth in Africa, Continental Rankings, 8th AIPS Sport Media Awards, for reporting on intersex footballers in Kenya",
  "Second in Africa, Continental Rankings, 7th AIPS Sport Media Awards",
  "Eighth in Africa (Audio), 7th AIPS Sport Media Awards, for a Limitless Africa episode on Nigerian sprinters",
  "Fifth in Africa, Young Reporters Writing, 6th AIPS Sport Media Awards",
  "Special Mention and two longlisted stories, 5th AIPS Sport Media Awards",
  "FISU-AIPS International Young Reporter, one of six selected worldwide",
  "Voting panel member, The Guardian's 100 Best Female Footballers in the World",
  "Panellist on AI and women's sport, Saguna Foundation, Google AI Center, Accra",
];

export default function Recognition() {
  return (
    <section id="recognition" style={{ background: "var(--cream)", padding: "6rem 3rem" }} className="recog-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--espresso)",
        }}>
          Recognition
        </h2>

        <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 3rem", marginTop: "2.5rem" }} className="recog-grid">
          {items.map((item) => (
            <li
              key={item}
              className="scroll-reveal"
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                padding: "1.25rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--terracotta)",
                flexShrink: 0,
                marginTop: "0.5rem",
              }} />
              <span style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--espresso)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .recog-section { padding: 4rem 1.5rem !important; }
          .recog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
