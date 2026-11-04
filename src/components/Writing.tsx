"use client";

import Link from "next/link";
import { samples } from "@/content/samples";

const beats = [
  {
    num: "01",
    title: "Women's sport and athletes' rights",
    desc: "Features on equal pay, gender eligibility and the economic realities of African athletes. My reporting on intersex footballers in Kenya ranked fourth in Africa at the 8th AIPS Sport Media Awards.",
  },
  {
    num: "02",
    title: "Technology and AI governance",
    desc: "Reporting on how AI and digital systems are being built, regulated and deployed across Africa. I pay close attention to who gets left behind when regulation moves slower than the technology.",
  },
  {
    num: "03",
    title: "The African labour market",
    desc: "Stories on work, pay and opportunity across the continent, from the labour of professional athletes to the skills a digital economy is starting to demand.",
  },
  {
    num: "04",
    title: "Cybersecurity, fintech and emerging economies",
    desc: "Research and thought leadership on cybersecurity, agentic AI, fintech and development strategy, focused on how regulation and infrastructure are reshaping markets like Ghana's.",
  },
];

const stories = [
  {
    title: "Equal play, unequal pay",
    outlet: "Les Glorieuses",
    url: "https://lesglorieuses.fr/equal-play-unequal-pay",
  },
  {
    title: "The future of winter sports in a warming world",
    outlet: "FISU",
    url: "https://www.fisu.net/2025/02/05/the-future-of-winter-sports-in-a-warming-world",
  },
  {
    title: "In Ghana’s markets, ‘brotherly bonds’ with Nigeria are being tested",
    outlet: "openDemocracy",
    url: "https://www.opendemocracy.net/en/in-ghanas-markets-brotherly-bonds-with-nigeria-are-being-tested/",
  },
];

const contentWriting = [
  {
    title: "The AI Search Divide: Understanding the Dual Market Shaping the Future of Digital Search",
    outlet: "Subjct AI",
    url: "https://www.subjct.ai/blog/the-ai-search-divide-understanding-the-dual-market-shaping-the-future-of-digital-search",
  },
  {
    title: "Mastering the Art of Digital Publishing",
    outlet: "Subjct AI",
    url: "https://www.subjct.ai/blog/mastering-the-art-of-digital-publishing",
  },
  {
    title: "The Power of Automation - Transforming Internal Linking in Digital Publishing",
    outlet: "Subjct AI",
    url: "https://www.subjct.ai/blog/the-power-of-automation-transforming-internal-linking-in-digital-publishing",
  },
  ...samples.map((s) => ({
    title: s.title,
    outlet: `Writing sample · ${s.client}`,
    url: `/samples/${s.slug}`,
  })),
];

const NEWSLETTER_URL = "https://limitlessafrica.substack.com/";
const SAMPLES_FOLDER_URL = "https://drive.google.com/drive/folders/12EyU9qze3pV7_ErF0aQF8Uf9_uY15kvn?usp=sharing";
const MUCK_RACK_URL = "https://muckrack.com/esther-owusua-appiah-fei";

const isInternal = (url: string) => url.startsWith("/");

function StoryList({ items }: { items: { title: string; outlet: string; url: string }[] }) {
  return (
    <ul style={{ listStyle: "none", borderTop: "1px solid #3d2070", marginTop: "1.25rem" }}>
      {items.map((s) => {
        const inner = (
          <>
            <span>
              <span className="story-title">{s.title}</span>
              <span className="story-outlet">{s.outlet}</span>
            </span>
            <span className="story-arrow"><ArrowIcon /></span>
          </>
        );
        return (
          <li key={s.url} style={{ borderBottom: "1px solid #3d2070" }}>
            {isInternal(s.url) ? (
              <Link href={s.url} className="story-link">{inner}</Link>
            ) : (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="story-link">{inner}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Writing() {
  return (
    <section id="writing" style={{ background: "var(--espresso)", padding: "6rem 3rem" }} className="writing-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label light">Journalism and Research</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--cream)",
          marginBottom: "1.25rem",
          maxWidth: "22ch",
        }}>
          Reporting that follows the money, the rules and the people
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#b8a8d0", maxWidth: "58ch", fontWeight: 300 }}>
          My reporting looks at the systems behind the headlines: who funds them, who regulates them, and who gets left out of them. Most of it sits across four connected beats.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", marginTop: "3.5rem" }}
          className="writing-beats"
        >
          {beats.map((b) => (
            <div
              key={b.num}
              className="service-card scroll-reveal"
              style={{ background: "#220c40", padding: "2.5rem", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2e1258")}
              onMouseLeave={e => (e.currentTarget.style.background = "#220c40")}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem", fontWeight: 600, color: "var(--terracotta)", marginBottom: "1.25rem", opacity: 0.7 }}>
                {b.num}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--cream)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                {b.title}
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#b8a8d0" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div className="section-label light">Selected stories</div>
          <StoryList items={stories} />
        </div>

        <div style={{ marginTop: "3.5rem" }}>
          <div className="section-label light">GEO and content writing</div>
          <StoryList items={contentWriting} />
        </div>

        <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="newsletter-card scroll-reveal">
          <span>
            <span className="newsletter-kicker">Newsletter · Substack</span>
            <span className="newsletter-title">Limitless Africa</span>
            <span className="newsletter-body">
              I wrote and championed the Limitless Africa newsletter on Substack. It extends the podcast&rsquo;s conversations on how Africans and Americans can work together for shared prosperity.
            </span>
          </span>
          <span className="newsletter-cta">
            Read the newsletter
            <ArrowIcon size={14} />
          </span>
        </a>

        <div className="writing-links">
          <a href={MUCK_RACK_URL} target="_blank" rel="noopener noreferrer" className="muckrack-link">
            See every byline on Muck Rack
            <ArrowIcon size={13} />
          </a>
          <a href={SAMPLES_FOLDER_URL} target="_blank" rel="noopener noreferrer" className="muckrack-link">
            View more writing samples
            <ArrowIcon size={13} />
          </a>
        </div>
      </div>

      <style>{`
        .story-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.4rem 0;
          text-decoration: none;
        }
        .story-title {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.3;
          color: var(--cream);
          transition: color 0.2s;
        }
        .story-outlet {
          display: block;
          margin-top: 0.35rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--amber);
        }
        .story-arrow {
          color: var(--amber);
          opacity: 0.6;
          flex-shrink: 0;
          display: inline-flex;
          transition: opacity 0.2s, transform 0.2s;
        }
        .story-link:hover .story-title { color: var(--amber); }
        .story-link:hover .story-arrow { opacity: 1; transform: translate(2px, -2px); }
        .muckrack-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.25rem;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--amber);
          text-decoration: none;
          border-bottom: 1px solid rgba(167,139,250,0.35);
          padding-bottom: 0.2rem;
          transition: color 0.2s, border-color 0.2s;
        }
        .muckrack-link:hover { color: var(--cream); border-color: var(--cream); }
        .writing-links { display: flex; flex-wrap: wrap; gap: 0 2.5rem; }
        .newsletter-card {
          display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem;
          margin-top: 3.5rem; padding: 2.25rem 2.5rem;
          background: linear-gradient(135deg, #2e1258, #220c40);
          border: 1px solid #3d2070;
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }
        .newsletter-card:hover { border-color: var(--amber); transform: translateY(-2px); }
        .newsletter-kicker {
          display: block; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--amber);
        }
        .newsletter-title {
          display: block; margin-top: 0.5rem;
          font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--cream);
        }
        .newsletter-body {
          display: block; margin-top: 0.6rem; max-width: 58ch;
          font-size: 0.9rem; line-height: 1.7; color: #b8a8d0;
        }
        .newsletter-cta {
          display: inline-flex; align-items: center; gap: 0.45rem; flex-shrink: 0;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--amber);
        }
        .newsletter-card:hover .newsletter-cta { color: var(--cream); }
        @media (max-width: 900px) {
          .writing-section { padding: 4rem 1.5rem !important; }
          .writing-beats { grid-template-columns: 1fr !important; }
          .story-title { font-size: 1.02rem; }
          .newsletter-card { flex-direction: column; align-items: flex-start; padding: 1.75rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}
