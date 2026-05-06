import Image from "next/image";

const skills = [
  "Demand Generation", "GTM", "PR & Communications", "Sales and Business Development",
  "Journalism", "Brand Storytelling", "Partnerships", "Account Based Marketing",
  "SEO Writing and Content Strategy", "Product Marketing",
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream-mid)", padding: "6rem 3rem" }} className="about-section">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }} className="about-grid">

        {/* LEFT — sticky */}
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
            Storyteller.<br />Revenue Operations<br />Strategist.<br />Bridge-builder.
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

        {/* RIGHT — body */}
        <div className="about-body scroll-reveal">
          {[
            <>Hi, I&rsquo;m Esther. Growth marketer, content strategist, and full-cycle sales professional based in Accra, working with brands across three continents. I specialise in one thing: turning complex ideas into clear, compelling stories that reach the right people — and then making sure those people convert. From BBC newsrooms to SaaS pipelines, outbound sequencing to editorial strategy, I close the loop between narrative and revenue. A great story that does not generate results (revenue) is just a nice story.</>,
            <>My career spans journalism, B2B content strategy, sales, growth marketing, and digital communications. I have published features for the BBC, Al Jazeera, The Guardian, and Olympics.com. I have built outbound pipelines that converted at 80%, negotiated 40+ media partnerships, driven demand generation for AI and SaaS companies, and run lead gen operations for luxury real estate targeting diaspora and HNW buyers.</>,
            <>I have written SEO content that ranks, cold emails that book meetings, pitch decks that close deals, and editorial pieces that make people stop scrolling. Whether it is a Semantic SEO strategy, an ABM campaign, a GTM launch, a full-cycle sales pipeline, or a 3,000-word feature with a clear point of view — I show up with research, craft, and a refusal to produce anything that does not have a job to do.</>,
            <>I hold a BA in Communications from the <strong style={{ fontWeight: 600, color: "var(--terracotta)" }}>University of Media, Arts and Communication</strong> in Ghana, and a certification in Technology Sales Fundamentals from the University of Maryland.</>,
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
