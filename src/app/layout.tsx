import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jonathanbannholtzer.com";

export const metadata: Metadata = {
  title: "Jonathan Bannholtzer - Software Developer",
  description:
    "Découvrez mon travail en développement web, mes compétences et mes projets. Développeur passionné par la création d'applications modernes et performantes.",

  keywords: [
    "Jonathan Bannholtzer",
    "Développeur Web",
    "Software Developer",
    "React",
    "Next.js",
    "Développement Web",
    "Portfolio",
  ],
  authors: [{ name: "Jonathan Bannholtzer", url: siteUrl }],
  robots: "index, follow",

  openGraph: {
    title: "Jonathan Bannholtzer - Software Developer",
    description:
      "Découvrez mon travail en développement web, mes compétences et mes projets. Développeur passionné par la création d'applications modernes et performantes.",
    url: siteUrl,
    siteName: "Jonathan Bannholtzer - Portfolio",
    images: [
      {
        url: `${siteUrl}/preview.png`,
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Jonathan Bannholtzer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jonathan Bannholtzer - Software Developer",
    description:
      "Découvrez mon travail en développement web, mes compétences et mes projets.",
    images: [`${siteUrl}/preview.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#121212] text-[#EAEAEA]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
