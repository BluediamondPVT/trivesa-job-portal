import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
// 1. Body text ke liye Inter
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});

// 2. Headings ke liye Jost
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata = {
  title: "Premium Job Portal",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Dono variables ko body mein inject kiya aur default font 'font-sans' rakha */}
      <body className={`${inter.variable} ${jost.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}