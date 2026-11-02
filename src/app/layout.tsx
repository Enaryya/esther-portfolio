import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Esther Appiah-Fei | Journalist, GEO Strategist and Enterprise Sales";
const SOCIAL_DESCRIPTION =
  "I report on how technology, sport and work are changing across Africa, and I help the companies building that change get found and trusted.";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Ghanaian journalist and commercial strategist covering sport, AI governance and African work, building AI search visibility and selling enterprise tech.",
  keywords:
    "Esther Appiah-Fei, Ghanaian journalist, sports journalist Africa, AI governance Africa, African labour market, GEO specialist, generative engine optimisation, semantic SEO, AI search visibility, cybersecurity sales Ghana, enterprise account manager Ghana, B2B content strategy, agentic AI, fintech Africa, emerging markets",
  openGraph: {
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
