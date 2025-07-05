import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarMenu from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import FooterBanner from "@/components/shared/FooterBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leti Realty Ltd",
  description:
    "Discover premium properties to buy, rent, or sell with trusted real estate experts at Leti Realty Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <NavBarMenu />
        {children}
        <Footer />
        <FooterBanner />
      </body>
    </html>
  );
}
