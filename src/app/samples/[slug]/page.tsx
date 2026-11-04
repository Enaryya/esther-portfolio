import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { samples } from "@/content/samples";

export const dynamicParams = false;

export function generateStaticParams() {
  return samples.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sample = samples.find((s) => s.slug === slug);
  if (!sample) return {};
  return {
    title: `${sample.title} | Writing sample by Esther Appiah-Fei`,
    description: `A writing sample from Esther Appiah-Fei's GEO and content work for ${sample.client}.`,
    robots: { index: false, follow: true },
  };
}

export default async function SamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sample = samples.find((s) => s.slug === slug);
  if (!sample) notFound();

  return (
    <>
      <header className="sample-bar">
        <Link href="/" className="sample-home">Esther Appiah-Fei</Link>
        <Link href="/#writing" className="sample-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to portfolio
        </Link>
      </header>

      <main className="sample-main">
        <div className="section-label">Writing sample · {sample.client}</div>
        <h1 className="sample-title">{sample.title}</h1>
        <p className="sample-note">
          This is a writing sample from my GEO and content work for {sample.client} through Subjct AI. The published version may differ.
        </p>
        <article className="sample-prose" dangerouslySetInnerHTML={{ __html: sample.html }} />
        <Link href="/#writing" className="sample-back sample-back-end">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to portfolio
        </Link>
      </main>

      <Footer />

      <style>{`
        .sample-bar {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding: 1.1rem 3rem;
          background: rgba(250,247,255,0.92); backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        .sample-home {
          font-family: 'Playfair Display', Georgia, serif; font-size: 1.1rem; font-weight: 600;
          letter-spacing: -0.02em; color: var(--espresso); text-decoration: none;
        }
        .sample-back {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--terracotta); text-decoration: none;
        }
        .sample-back:hover { color: #6d28d9; }
        .sample-back-end { margin-top: 4rem; }
        .sample-main { max-width: 720px; margin: 0 auto; padding: 4.5rem 1.5rem 6rem; }
        .sample-title {
          font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700; line-height: 1.12; letter-spacing: -0.02em; color: var(--espresso);
          margin-top: 0.5rem;
        }
        .sample-note {
          margin-top: 1.5rem; padding: 1rem 1.25rem;
          background: var(--cream-mid); border-left: 3px solid var(--terracotta);
          font-size: 0.88rem; line-height: 1.6; color: var(--muted);
        }
        .sample-prose { margin-top: 3rem; color: var(--espresso); font-size: 1.04rem; line-height: 1.8; }
        .sample-prose p { margin-bottom: 1.25rem; }
        .sample-prose h2 {
          font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700;
          line-height: 1.2; letter-spacing: -0.01em; margin: 3rem 0 1rem;
        }
        .sample-prose h3 {
          font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 600;
          line-height: 1.3; margin: 2.25rem 0 0.75rem;
        }
        .sample-prose ul { list-style: disc; margin: 0 0 1.5rem 1.25rem; }
        .sample-prose li { margin-bottom: 0.6rem; padding-left: 0.25rem; }
        .sample-prose li::marker { color: var(--terracotta); }
        .sample-prose b, .sample-prose strong { font-weight: 600; }
        .sample-prose a { color: var(--terracotta); word-break: break-word; }
        .sample-prose .table-wrap { overflow-x: auto; margin: 1.5rem 0 2rem; border: 1px solid var(--border); }
        .sample-prose table { width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.55; }
        .sample-prose th {
          text-align: left; background: var(--cream-mid); font-weight: 600;
          padding: 0.75rem 1rem; border-bottom: 1px solid var(--border);
        }
        .sample-prose td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); vertical-align: top; }
        .sample-prose tr:last-child td { border-bottom: none; }
        @media (max-width: 900px) {
          .sample-bar { padding: 1rem 1.5rem; }
          .sample-main { padding-top: 3rem; }
          .sample-home { font-size: 1rem; }
        }
      `}</style>
    </>
  );
}
