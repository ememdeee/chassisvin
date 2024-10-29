import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SaveBanner from "./components/SaveBanner";
import BackgroundAnimation from "./components/BackgroundAnimation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chassis Vin",
  description: "Chassis Vin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-50 to-white min-h-screen`}
      >
        <BackgroundAnimation />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <SaveBanner/>
          <Footer />
        </div>
      </body>
    </html>
  );
}