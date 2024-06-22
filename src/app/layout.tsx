import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Dream Digital - Africa",
  description: "Unlocking Possibilities with Creative Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
