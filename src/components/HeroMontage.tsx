"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "https://tl9be6ngkrkozmdl.public.blob.vercel-storage.com/portfolio/hero/1778029930219-image-1778026178285.jpg",
    alt: "Esther Appiah-Fei at the Google AI Community Centre in Accra",
    position: "center top",
  },
  {
    src: "/hero/esther-sofa-portrait.jpg",
    alt: "Portrait of Esther Appiah-Fei seated with her laptop",
    position: "center 30%",
  },
  {
    src: "/hero/esther-do-hard-things.jpg",
    alt: "Esther Appiah-Fei working on her laptop beneath a Do Hard Things sign",
    position: "45% 70%",
  },
  {
    src: "/hero/esther-google-accra-event.jpg",
    alt: "Esther Appiah-Fei with a fellow attendee at the Google AI Community Centre in Accra",
    position: "center 20%",
  },
  {
    src: "/hero/esther-community-event.jpg",
    alt: "Esther Appiah-Fei with a fellow attendee at a community event in Accra",
    position: "center 20%",
  },
];

const REVEALS = ["circle", "wipe", "diagonal", "split", "rise"];
const SLIDE_MS = 5200;

export default function HeroMontage() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="montage" aria-roledescription="carousel" aria-label="Photos of Esther Appiah-Fei">
      {SLIDES.map((s, i) => {
        const state = i === index ? `active reveal-${REVEALS[i % REVEALS.length]}` : i === prev ? "prev" : "";
        return (
          <div key={s.src} className={`montage-slide ${state}`} aria-hidden={i !== index}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt}
              style={{ objectPosition: s.position }}
              className={i % 2 === 0 ? "kb-in" : "kb-out"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        );
      })}

      <div className="montage-shade" />

      <div className="montage-bars">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1} of ${SLIDES.length}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className="montage-bar"
          >
            <span key={i === index ? `on-${index}` : "off"} className={i === index ? "fill running" : i < index ? "fill done" : "fill"} />
          </button>
        ))}
      </div>

      <style>{`
        .montage { position: absolute; inset: 0; overflow: hidden; background: var(--espresso); }
        .montage-slide { position: absolute; inset: 0; opacity: 0; z-index: 0; }
        .montage-slide.prev { opacity: 1; z-index: 1; }
        .montage-slide.active { opacity: 1; z-index: 2; animation-duration: 1.25s; animation-timing-function: cubic-bezier(0.77, 0, 0.18, 1); animation-fill-mode: both; }
        .montage-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .montage-slide.active img.kb-in { animation: kb-in ${SLIDE_MS + 1400}ms ease-out both; }
        .montage-slide.active img.kb-out { animation: kb-out ${SLIDE_MS + 1400}ms ease-out both; }
        .montage-slide.active::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(120deg, var(--terracotta), var(--amber));
          mix-blend-mode: multiply;
          animation: tint 1.4s ease-out both;
        }

        .reveal-circle { animation-name: reveal-circle; }
        .reveal-wipe { animation-name: reveal-wipe; }
        .reveal-diagonal { animation-name: reveal-diagonal; }
        .reveal-split { animation-name: reveal-split; }
        .reveal-rise { animation-name: reveal-rise; }

        @keyframes reveal-circle { from { clip-path: circle(0% at 65% 35%); } to { clip-path: circle(150% at 65% 35%); } }
        @keyframes reveal-wipe { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes reveal-diagonal { from { clip-path: polygon(0 0, 0 0, 0 0); } to { clip-path: polygon(0 0, 220% 0, 0 220%); } }
        @keyframes reveal-split { from { clip-path: inset(0 50% 0 50%); } to { clip-path: inset(0 0 0 0); } }
        @keyframes reveal-rise { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes kb-in { from { transform: scale(1.14) translate(1.5%, 1%); } to { transform: scale(1) translate(0, 0); } }
        @keyframes kb-out { from { transform: scale(1) translate(0, 0); } to { transform: scale(1.12) translate(-1.5%, -1%); } }
        @keyframes tint { from { opacity: 0.55; } to { opacity: 0; } }

        .montage-shade {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: linear-gradient(to bottom, transparent 62%, rgba(26,10,48,0.7) 100%);
        }
        .montage-bars {
          position: absolute; left: 2.5rem; right: 2.5rem; bottom: 1.25rem; z-index: 4;
          display: flex; gap: 0.4rem;
        }
        .montage-bar {
          flex: 1; height: 14px; padding: 6px 0; border: none; background: none; cursor: pointer;
        }
        .montage-bar::before {
          content: ''; display: block; height: 2px; background: rgba(250,247,255,0.28);
        }
        .montage-bar .fill {
          display: block; height: 2px; margin-top: -2px; width: 0; background: var(--cream);
        }
        .montage-bar .fill.done { width: 100%; }
        .montage-bar .fill.running { animation: bar-fill ${SLIDE_MS}ms linear both; }
        @keyframes bar-fill { from { width: 0; } to { width: 100%; } }

        @media (prefers-reduced-motion: reduce) {
          .montage-slide.active { animation: fade 0.6s ease both !important; }
          .montage-slide.active img, .montage-slide.active::after { animation: none !important; }
          .montage-slide.active::after { opacity: 0; }
          @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
        }
        @media (max-width: 900px) {
          .montage-bars { left: 1.5rem; right: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
