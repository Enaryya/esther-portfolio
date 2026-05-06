export default function Footer() {
  return (
    <footer style={{
      background: "#110720",
      padding: "1.75rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    }} className="footer">
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "#5a4878" }}>
        Esther Owusua Appiah-Fei
      </div>
      <div style={{ fontSize: "0.72rem", color: "#3a2858", letterSpacing: "0.04em" }}>
        © 2026 · Communications Strategist · Ghana
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer { flex-direction: column !important; text-align: center !important; padding: 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
