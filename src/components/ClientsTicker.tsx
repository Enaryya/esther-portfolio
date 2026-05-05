const clients = [
  { name: "SUBJCT", bg: "#111", color: "#fff", italic: false },
  { name: "YOUTH&EARTH", bg: "#3a5240", color: "#fff", italic: false },
  { name: "MOVEMEBACK", bg: "#0099cc", color: "#fff", italic: false },
  { name: "giz", bg: "#cc1919", color: "#fff", italic: true },
  { name: "WORKSPACE", bg: "#e8e8e8", color: "#222", italic: false },
  { name: "TRUE AFRICA", bg: "#111", color: "#f59e0b", italic: false },
  { name: "FOUNDERVINE", bg: "#1a1a2e", color: "#f59e0b", italic: false },
  { name: "RIO TINTO", bg: "#e8251a", color: "#fff", italic: false },
];

export default function ClientsTicker() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="clients"
      style={{
        padding: "3.5rem 0",
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--muted)",
        textAlign: "center",
        marginBottom: "2rem",
      }}>
        Clients and organisations I have worked with
      </div>
      <div style={{ overflow: "hidden", width: "100%", padding: "0.25rem 0" }}>
        <div className="ticker-track">
          {doubled.map((c, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.55rem 1.4rem",
                borderRadius: 4,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                flexShrink: 0,
                background: c.bg,
                color: c.color,
                fontStyle: c.italic ? "italic" : "normal",
                transition: "transform 0.2s",
                cursor: "default",
              }}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
