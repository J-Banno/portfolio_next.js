import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jonathan Bannholtzer",
  description: "Portfolio de développeur",
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
