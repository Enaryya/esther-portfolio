import Image from "next/image";

const skills = [
  "Sports Journalism", "AI Governance Reporting", "African Labour Market",
  "GEO and AI Search Visibility", "Semantic SEO", "Content Strategy",
  "Enterprise Sales", "Cybersecurity Sales", "Account Management",
  "GTM Strategy", "Partnerships", "Cybersecurity Research",
  "Agentic AI Research", "Fintech", "Development Strategy for Emerging Economies",
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream-mid)", padding: "6rem 3rem" }} className="about-section">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }} className="about-grid">

        {/* LEFT sticky */}
        <div style={{ position: "sticky", top: 90 }} className="about-left">
          <div className="section-label">About</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--espresso)",
            marginBottom: "2rem",
          }}>
            A journalist&rsquo;s research, put to commercial work
          </h2>

          {/* About photo */}
          <div
            className="scroll-reveal"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              maxWidth: 260,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/esther-about.jpg"
              alt="Esther Appiah-Fei working"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="260px"
            />
          </div>
        </div>

        {/* RIGHT body */}
        <div className="about-body scroll-reveal">
          {[
            <>Hi, I&rsquo;m Esther, and I began my career as a sports journalist. Most of the stories I chased were ones that federations and broadcasters had overlooked, especially those of African women athletes. That reporting has since run in the BBC, Al Jazeera, The Guardian, Deutsche Welle, The Telegraph and Olympics.com, and it has been recognised at four consecutive editions of the AIPS Sport Media Awards. Over time my beat widened to technology, AI governance and the African labour market, because the questions I kept asking about athletes were really questions about work, money and power.</>,
            <>Today I put that research to commercial use. Through London AI search agency Subjct AI, I plan and sub-edit GEO and semantic SEO programmes for UK brands such as Restore Information Management and Workspace Group, helping them get cited by ChatGPT, Perplexity and Google&rsquo;s AI Overviews. At Cyberteq Falcon, I manage enterprise cybersecurity accounts across banking, fintech, education, healthcare and energy. I have also built pipeline for an AWS Advanced Tier Partner and a global mobility platform, where my outbound converted at more than 80% from lead to meeting.</>,
            <>Whatever the brief, my method stays the same. I research until I understand the reader or buyer better than the brief does, then I write and sell in plain language that a busy decision-maker can act on. A story that never generates results is simply a nice story.</>,
            <>I hold a BA in Communication Studies (Public Relations and Marketing) from the <strong style={{ fontWeight: 600, color: "var(--terracotta)" }}>University of Media, Arts and Communication</strong> in Ghana, and a Fundamentals of Technology Sales certificate from the University of Maryland.</>,
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
