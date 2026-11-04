"use client";

import Link from "next/link";

type Card = {
  featured: boolean;
  tag: string;
  title: string;
  desc: string;
  outlet: string;
  pills: string[];
  links?: { label: string; href: string }[];
};

const cards: Card[] = [
  {
    featured: true,
    tag: "Restore Information Management · GEO and Content Strategy",
    title: "Winning AI Search Visibility for a UK Records Management Leader",
    desc: "Through Subjct AI, I built AI search visibility programmes for Restore across three topic clusters: digital mailroom, digital transformation and offsite records management. The roadmap opened with the queries where Restore trailed its largest competitor in ChatGPT and Perplexity answers. More than 12 pillar and spoke pieces moved from brief to first draft to full sub-edit through client sign-off. Every claim was anchored to named UK standards such as BS 10008, ISO 27001 and UK GDPR, alongside client-approved case studies.",
    outlet: "",
    pills: ["GEO", "Semantic SEO", "Topic Clusters"],
    links: [
      { label: "Read the digital transformation roadmap", href: "/samples/restore-digital-transformation-roadmap" },
      { label: "Read the digital mailroom guide", href: "/samples/restore-digital-mailroom-guide" },
    ],
  },
  {
    featured: false,
    tag: "Workspace Group · GEO Articles",
    title: "Turning a London Office Provider's Blog into Topic Authority",
    desc: "I proposed a strategy to move Workspace Group's content hub away from scattered blog output and towards authority on a small set of commercially important London office-space queries. The articles I wrote and sub-edited were each built with a direct answer up front, a TL;DR and a meta description, so they work for both Google and AI answer engines.",
    outlet: "",
    pills: ["GEO", "Content Strategy", "Long-form"],
    links: [
      { label: "Read the article", href: "/samples/workspace-scaling-in-london" },
    ],
  },
  {
    featured: false,
    tag: "Cyberteq Falcon · Enterprise Cybersecurity Sales",
    title: "Making Cybersecurity Compliance Clear for Ghanaian Institutions",
    desc: "Many Ghanaian institutions know they need stronger security, but few know where to start under the Cybersecurity Act 2020. I write VAPT proposals and information security pitches that turn those legal obligations into practical, costed plans that boards and IT leads can approve. The work spans universities, financial services firms and a newly established hospital.",
    outlet: "",
    pills: ["Cybersecurity", "Enterprise Sales", "Compliance"],
  },
  {
    featured: false,
    tag: "TRUE Africa · Broadcast and Partnerships",
    title: "Limitless Podcast: Practical Solutions to African Problems and Strengthening American Partnerships",
    desc: "As Partnerships Lead, I helped take the Limitless Africa podcast from one national radio placement to more than 200 stations in nine countries, reaching over two million listeners each week across English, French and Portuguese. One episode on Nigerian sprinters ranked eighth in Africa in the audio category of the 7th AIPS Sport Media Awards.",
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
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "1.5px" }}
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
              {c.links && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.25rem" }}>
                  {c.links.map((l) => (
                    <Link key={l.href} href={l.href} className="work-read-link">
                      {l.label}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
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
        .work-read-link {
          display: inline-flex; align-items: center; gap: 0.4rem; align-self: flex-start;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
          color: var(--terracotta); text-decoration: none;
          border-bottom: 1px solid rgba(124,58,237,0.3); padding-bottom: 0.1rem;
          transition: color 0.2s, border-color 0.2s;
        }
        .work-read-link:hover { color: #6d28d9; border-color: #6d28d9; }
        @media (max-width: 900px) {
          .work-section { padding: 4rem 1.5rem !important; }
          .work-grid { grid-template-columns: 1fr !important; }
          .work-grid > div[style*="span 2"] { grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
