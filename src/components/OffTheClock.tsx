const LETTERBOXD_URL = "https://letterboxd.com/Enaryaaa/";
const SPOTIFY_EMBED = "https://open.spotify.com/embed/playlist/23Ly6UkGjRnswNDKJ4TpvN?utm_source=generator";

export default function OffTheClock() {
  return (
    <section id="off-the-clock" style={{ background: "var(--cream-mid)", padding: "6rem 3rem" }} className="otc-section">
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }} className="otc-grid">
        <div>
          <div className="section-label">Off the Clock</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--espresso)",
            marginBottom: "1.25rem",
          }}>
            What I&rsquo;m listening to and watching
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--muted)", fontWeight: 300, maxWidth: "44ch" }}>
            This playlist grows whenever I discover new music that feels worth sharing. My film diary lives on Letterboxd, so come and see what I have been watching.
          </p>
          <a href={LETTERBOXD_URL} target="_blank" rel="noopener noreferrer" className="letterboxd-link">
            <span className="lb-dots" aria-hidden="true">
              <span style={{ background: "#ff8000" }} />
              <span style={{ background: "#00e054" }} />
              <span style={{ background: "#40bcf4" }} />
            </span>
            Follow me on Letterboxd
          </a>
        </div>

        <div className="scroll-reveal">
          <iframe
            title="Esther Appiah-Fei's new music playlist on Spotify"
            src={SPOTIFY_EMBED}
            width="100%"
            height="352"
            style={{ border: 0, borderRadius: 12, display: "block" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .letterboxd-link {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          margin-top: 2rem;
          padding: 0.85rem 1.6rem;
          border: 1.5px solid var(--border);
          background: var(--cream);
          color: var(--espresso);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .letterboxd-link:hover { border-color: var(--terracotta); color: var(--terracotta); transform: translateY(-2px); }
        .lb-dots { display: inline-flex; gap: 3px; }
        .lb-dots span { width: 9px; height: 9px; border-radius: 50%; display: block; }
        @media (max-width: 900px) {
          .otc-section { padding: 4rem 1.5rem !important; }
          .otc-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
