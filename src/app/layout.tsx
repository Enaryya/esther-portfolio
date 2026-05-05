import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esther Appiah-Fei | Communications Strategist & Content Professional",
  description:
    "Esther Appiah-Fei is a Ghana-based communications strategist and content professional specialising in brand storytelling, PR, digital marketing, and GTM strategy for global organisations.",
  keywords:
    "communications strategist Ghana, content writer Africa, PR professional Ghana, brand storytelling, digital marketing Africa, GTM strategy, Esther Appiah-Fei",
  openGraph: {
    title: "Esther Appiah-Fei | Communications Strategist",
    description:
      "Turning complex ideas into stories that move people — and then making sure those people convert.",
    type: "website",
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
