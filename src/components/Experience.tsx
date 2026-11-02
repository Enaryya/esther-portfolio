const items = [
  {
    role: "Enterprise Account Manager",
    company: "Cyberteq Falcon",
    desc: "I manage enterprise accounts for a cybersecurity firm operating in more than 50 countries across Africa and the UK, serving banking, fintech, education, healthcare and energy clients. I write vulnerability assessment and penetration testing (VAPT) proposals and advise institutional leaders on information security policy. Compliance with Ghana's Cybersecurity Act 2020 (Act 1038) shapes how every solution is positioned. I also pursue channel partnerships with IT integrators in Kenya, Uganda and Tanzania.",
  },
  {
    role: "GEO and SEO Content Strategist (Freelance)",
    company: "Subjct AI",
    desc: "I plan, write and sub-edit AI search visibility programmes for UK clients including Restore Information Management, Workspace Group and Youth & Earth. Each roadmap starts with the widest measured visibility gaps in ChatGPT and Perplexity answers. Every brief is anchored to named standards and client-approved evidence, so the content holds up when an AI model checks its claims. I also publish in Webflow, implement schema markup, and built a Claude-powered editing agent that keeps each client's voice consistent.",
  },
  {
    role: "Fintech and Agentic AI Products",
    company: "DevLaps",
    desc: "I work with software agency DevLaps on two of its products. Pollen is a fintech product built for small and medium-sized businesses in emerging economies. Moxi is the agency's agentic AI workflow tool.",
  },
  {
    role: "Freelance Journalist",
    company: "BBC · Al Jazeera · The Guardian · Deutsche Welle · The Telegraph · Olympics.com",
    desc: "I report on women's sport, gender eligibility, technology, AI governance and the economic realities facing African athletes and workers. I was one of six FISU-AIPS International Young Reporters selected worldwide to cover the World University Games in Turin. I also sat on the voting panel for The Guardian's 100 Best Female Footballers in the World.",
  },
  {
    role: "Business Development, AWS Cloud",
    company: "CloudPlexo",
    desc: "I built the go-to-market motion for an AWS Advanced Tier Partner across Ghana, Nigeria and Kenya, from segment research through to a 500+ contact database spanning banking, fintech, insurance, education and healthcare. Translating technical AWS offers into plain buyer language helped close $100,000 in new business from a pipeline I built myself.",
  },
  {
    role: "Founder and Content Strategist",
    company: "Fei Growth Lab",
    desc: "Fei Growth Lab is my independent consultancy, delivering GEO, semantic SEO and go-to-market content for B2B companies.",
  },
  {
    role: "Digital Media Communications and Partnerships Lead",
    company: "TRUE Africa",
    desc: "I helped grow the Limitless Africa podcast from a single national radio placement into a continental broadcast carried by more than 200 radio stations in nine countries, reaching over two million people each week. I led guest booking, production and digital strategy across English, French and Portuguese. Listening sessions I organised ran at the University of Ghana, Academic City University and the American Center at the U.S. Embassy in Accra.",
  },
  {
    role: "Sales and Market Research Strategist",
    company: "Movemeback",
    desc: "I researched accounts across more than five industries for a global mobility platform, landing 20 net-new accounts and more than £300,000 in pipeline at a lead-to-meeting conversion rate above 80%. Recurring objections and buyer language fed straight back into how the platform described itself.",
  },
  {
    role: "Communications Consultant",
    company: "VIS Ghana",
    desc: "Developed communications strategy and editorial content for a national volunteering and development organisation, connecting grassroots volunteer work to Ghana's wider development narrative and international reporting frameworks.",
  },
  {
    role: "Content Writer",
    company: "American Bar Association",
    desc: "Produced long-form analytical content focused on minority rights and legal issues in West Africa. Work made complex legislative frameworks accessible to non-specialist readers, supporting the ABA's public engagement and advocacy mission.",
  },
  {
    role: "Communications Specialist and PR Writer",
    company: "HSA PR · Rio Tinto · Gamurs Group · GIZ",
    desc: "Delivered PR, communications, and digital marketing across mining, professional services, international development, and gaming media. Clients included corporations, law firms, educational institutions, executives, and global NGOs.",
  },
  {
    role: "Co-Founder and Director of Operations and Strategic Partnerships (Volunteer)",
    company: "SheGoal Foundation",
    desc: "Playing for my university's women's team showed me what football can open up for a girl, so I co-founded SheGoal to keep girls healthy and in school through the game. Our programmes reached more than 500 girls across sport, education and health. I wrote the funding proposals and donor reports, built our monitoring systems from scratch, and led communications, partner relations and budgeting. I have since stepped back, but SheGoal taught me that a good story needs a working system underneath it.",
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
            Every role has sharpened the same skill. I find the story a reader or buyer actually cares about, then I build the message, the content or the deal around it.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal tl-item"
              style={{
                display: "grid",
                gridTemplateColumns: "14px 1fr",
                gap: "0 2rem",
                paddingBottom: i < items.length - 1 ? "3rem" : 0,
              }}
            >
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
                <p style={{ fontSize: "0.9rem", lineHeight: 1.68, color: "var(--muted)", maxWidth: "65ch" }}>
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
          .tl-item { gap: 0 1.2rem !important; }
        }
      `}</style>
    </section>
  );
}
