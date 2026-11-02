"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/esther-appiah-fei/";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: "rgba(250,247,242,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--espresso)",
          textDecoration: "none",
        }}
      >
        Esther Appiah-Fei
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
        }}
        className="hidden-mobile"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color:
                  active === l.href.slice(1)
                    ? "var(--terracotta)"
                    : "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-linkedin hidden-mobile"
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.25rem",
        }}
        className="show-mobile"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--espresso)" strokeWidth="1.8">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--cream)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                color:
                  active === l.href.slice(1)
                    ? "var(--terracotta)"
                    : "var(--espresso)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="nav-linkedin"
            style={{ alignSelf: "flex-start" }}
          >
            <LinkedInIcon />
            Connect on LinkedIn
          </a>
        </div>
      )}

      <style>{`
        .nav-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          background: var(--terracotta);
          color: var(--cream);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
        }
        .nav-linkedin:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 1100px) and (min-width: 901px) {
          nav ul.hidden-mobile { gap: 1.5rem !important; }
        }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
