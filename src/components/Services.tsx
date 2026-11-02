"use client";

const CONSULT_URL = "https://calendar.app.google/yR45gSxZV96s3ji59";

const services = [
  { num: "01", title: "Demand Generation", desc: "Full-funnel demand gen strategy that fills pipeline and converts. Inbound and outbound programmes, lead scoring frameworks, nurture sequences, and campaign architecture built to generate qualified revenue rather than traffic." },
  { num: "02", title: "Account-Based Marketing", desc: "Targeted ABM campaigns for high-value accounts. Personalised messaging, multi-channel outreach, intent data integration, and coordinated sales and marketing plays that shorten enterprise deal cycles." },
  { num: "03", title: "Full-Cycle Sales", desc: "Prospecting, discovery, pipeline management, negotiation, and closing. Outbound sequencing that books meetings, inbound qualification that converts, and the consultative approach that turns prospects into long-term clients." },
  { num: "04", title: "Paid Media and Performance Marketing", desc: "Paid social, search, and display campaigns optimised for conversion. Google Ads, Meta, and LinkedIn campaign management with GA4 tracking, attribution setup, and data-led iteration to drive measurable ROI." },
  { num: "05", title: "SEO, GEO and Content Strategy", desc: "Semantic SEO and generative engine optimisation that earn visibility in Google and in AI answers from ChatGPT, Perplexity and Google's AI Overviews. I build topic clusters, prioritise the widest measured visibility gaps first, and write long-form content that holds up when an AI model checks its claims." },
  { num: "06", title: "GTM Strategy and Product Marketing", desc: "Go-to-market planning, positioning, and messaging for product launches and market expansion. ICP definition, competitive analysis, sales enablement materials, and the brand narrative that makes a new product impossible to ignore." },
  { num: "07", title: "PR and Media Relations", desc: "Earned media strategy, press releases, media pitches, and spokesperson preparation. With bylines in the BBC, Al Jazeera, The Guardian, Deutsche Welle, The Telegraph and Olympics.com, I know what editors want and how to get your story placed." },
  { num: "08", title: "Partnerships and Business Development", desc: "Identifying, negotiating, and closing strategic partnerships across media, tech, and international development. 40+ media partnerships negotiated, with experience spanning broadcast deals, NGO collaborations, and B2B commercial agreements." },
  { num: "09", title: "Journalism and Editorial", desc: "Features, profiles and analysis on women's sport, technology, AI governance and the African labour market, written for international outlets. My reporting is research-led and built to make readers stop, think and share." },
  { num: "10", title: "Research and Thought Leadership", desc: "Research-led writing and strategy across cybersecurity, agentic AI, fintech and development in emerging economies. I study how regulation, infrastructure and new technology are reshaping markets like Ghana's, then turn that research into clear points of view that decision-makers can act on." },
];

export default function Services() {
  return (
    <>
      <section id="services" style={{ background: "var(--espresso)", padding: "6rem 3rem" }} className="services-section">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label light">Services</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--cream)",
            marginBottom: "0.75rem",
          }}>
            Research, content and revenue<br />under one roof
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginTop: "3.5rem",
            maxWidth: 1100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="services-grid"
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card scroll-reveal"
              style={{
                background: "#220c40",
                padding: "2.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2e1258")}
              onMouseLeave={e => (e.currentTarget.style.background = "#220c40")}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem", fontWeight: 600, color: "var(--terracotta)", marginBottom: "1.25rem", opacity: 0.7 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--cream)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                {s.title}
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#b8a8d0" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA banner, middle of site */}
      <div className="consult-banner">
        <div className="consult-banner-text">
          <h3>Ready to work together?</h3>
          <p>Book a free 30-minute strategy call and let&rsquo;s talk about what you&rsquo;re building.</p>
        </div>
        <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer" className="btn-consult">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a Consultation
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-section { padding: 4rem 1.5rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
