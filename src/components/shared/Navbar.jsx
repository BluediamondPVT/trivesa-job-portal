// src/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { usePathname } from "next/navigation";

// Sub-components
import DesktopNav from "./navbar/DesktopNav";
import RightActions from "./navbar/RightActions";
import MobileMenu from "./navbar/MobileMenu";

const navLinks = [
  { name: "Find Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { bookmarks } = useBookmarkStore();

  useEffect(() => setIsMounted(true), []);

  // Body scroll lock jab menu khula ho
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Auth pages pe Navbar hide karna
  const hideOnRoutes = ["/login", "/sign-up"];
  if (hideOnRoutes.includes(pathname)) {
    return null;
  }

  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-slate-900 shrink-0 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Tri<span className="text-[#1864f4]">Vesa</span> Jobs
        </Link>

        {/* Desktop Components */}
        <DesktopNav navLinks={navLinks} />
        
        {/* 🔥 Yahan RightActions mein Auth Handle hoga */}
        <RightActions />

        {/* Mobile Toggle Button & Mobile Bookmark */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/bookmarks"
            className="relative p-2 text-slate-600 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Bookmark className="w-[22px] h-[22px]" strokeWidth={2} />
            {isMounted && bookmarks.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
            )}
          </Link>

          {/* PREMIUM ANIMATED HAMBURGER BUTTON */}
          <button
            className="relative w-10 h-10 bg-white border border-gray-200 rounded-full flex flex-col items-center justify-center gap-[4.5px] z-50 overflow-hidden shadow-sm hover:bg-gray-50 transition-colors outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-4.5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? "transform rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[18px] h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0 translate-x-4" : "opacity-100"}`} />
            <span className={`block w-[18px] h-[2px] bg-slate-800 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Render */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}