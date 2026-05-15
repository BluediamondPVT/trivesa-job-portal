// src/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // 🔥 Framer motion imported
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { usePathname } from "next/navigation"; // Active state check karne ke liye

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // 🔥 Hover State Track karne ke liye
  
  const { bookmarks } = useBookmarkStore();
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 🚀 Nav Links Array (Isi pe wo sticky pill slide karega)
  const navLinks = [
    { name: "Find Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-slate-900 shrink-0 z-10">
          Tri<span className="text-blue-600">Vesa</span> Jobs
        </Link>

        {/* 🌟 PREMIUM ACETERNITY-STYLE DESKTOP NAVIGATION 🌟 */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-center relative">
          
          {/* Menu Items with Sliding Pill Animation */}
          <div 
            className="flex items-center"
            onMouseLeave={() => setHoveredIndex(null)} // Mouse bahar jaye toh pill gayab
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* 🔥 THE MAGIC: Framer Motion Sliding Pill */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-gray-100/80 -z-10"
                        layoutId="navbar-hover-pill" // Ye layoutId hi wo liquid sticky effect deta hai
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }} // Spring animation for that sticky feel
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Link Text */}
                  <span className={`relative text-sm font-semibold transition-colors duration-200 z-10 ${
                    isActive ? "text-blue-600" : (hoveredIndex === index ? "text-slate-900" : "text-slate-600")
                  }`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Animated Search Bar */}
          <motion.div
            initial={{ width: "240px" }}
            animate={{ width: isSearchFocused ? "320px" : "240px" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative group ml-2"
          >
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className={`h-4 w-4 transition-colors duration-300 ${isSearchFocused ? "text-blue-600" : "text-slate-500"}`} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Search jobs, skills..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="block w-full pl-10 pr-12 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50/50 backdrop-blur-sm text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-gray-300"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className={`text-[10px] font-bold border rounded px-1.5 py-0.5 transition-colors duration-300 ${isSearchFocused ? "border-blue-200 text-blue-500" : "border-gray-200 text-gray-400"}`}>
                ⌘K
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-5 shrink-0 z-10">
          
          {/* Bookmark */}
          <Link href="/bookmarks" className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors group">
            <Bookmark className="w-5 h-5 group-hover:fill-blue-50 transition-all" strokeWidth={2} />
            {isMounted && bookmarks.length > 0 && (
              <span className="absolute top-1 right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-full shadow-sm">
                {bookmarks.length}
              </span>
            )}
          </Link>

          <div className="h-6 w-px bg-gray-200"></div>
          
         
          
          {/* "Book a call" style button */}
          <button className="bg-slate-900 hover:bg-black text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
            Log In
          </button>
        </div>

        {/* ... (Mobile Menu code remains exactly the same as before) ... */}
        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link href="/bookmarks" className="relative p-2 text-slate-600 md:hidden">
            <Bookmark className="w-5 h-5" strokeWidth={2} />
            {isMounted && bookmarks.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
            )}
          </Link>
          <button className="p-2 text-slate-600 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4"
        >
          {/* Mobile Search */}
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search jobs..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20" />
          </div>

          <Link href="/jobs" className="text-base font-semibold text-slate-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Find Jobs</Link>
          <Link href="/companies" className="text-base font-semibold text-slate-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Companies</Link>
          
          <Link href="/bookmarks" className="flex items-center justify-between text-base font-semibold text-slate-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3"><Bookmark className="w-5 h-5" /> Saved Jobs</div>
            {isMounted && bookmarks.length > 0 && <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-bold">{bookmarks.length}</span>}
          </Link>

          <hr className="border-gray-100 my-2" />

          <button className="w-full text-center text-base font-semibold text-slate-900 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Log In</button>
          <button className="w-full bg-slate-900 hover:bg-black transition-colors text-white text-base font-semibold py-3 rounded-xl shadow-sm">Employer Sign Up</button>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}