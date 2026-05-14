// src/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Bookmark } from "lucide-react";
import { motion } from "framer-motion"; // Aceternity style animation ke liye
import { useBookmarkStore } from "@/store/useBookmarkStore";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Zustand se bookmarks fetch kar rahe hain
  const { bookmarks } = useBookmarkStore();

  // Hydration fix for bookmark badge
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-slate-900 shrink-0"
        >
          Blue<span className="text-blue-600">Diamond</span> Jobs
        </Link>

        {/* Desktop Navigation & Search */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <Link href="/jobs" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Find Jobs
          </Link>
          <Link href="/companies" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Companies
          </Link>

          {/* 🔥 Aceternity Style Animated Search Bar */}
          <motion.div
            initial={{ width: "240px" }}
            animate={{ width: isSearchFocused ? "320px" : "240px" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative group ml-4"
          >
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className={`h-4 w-4 transition-colors duration-300 ${isSearchFocused ? "text-blue-500" : "text-gray-400"}`} />
            </div>
            <input
              type="text"
              placeholder="Search jobs, skills..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="block w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50/50 backdrop-blur-sm text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-gray-300"
            />
            {/* Mac Command Shortcut Hint (Premium feel) */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className={`text-[10px] font-bold border rounded px-1.5 py-0.5 transition-colors duration-300 ${isSearchFocused ? "border-blue-200 text-blue-500" : "border-gray-200 text-gray-400"}`}>
                ⌘K
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          
          {/* 🔥 Bookmark Icon with Dynamic Badge */}
          <Link href="/bookmarks" className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors group">
            <Bookmark className="w-5 h-5 group-hover:fill-blue-50 transition-all" strokeWidth={2} />
            {isMounted && bookmarks.length > 0 && (
              <span className="absolute top-1 right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-full">
                {bookmarks.length}
              </span>
            )}
          </Link>

          <div className="h-6 w-px bg-gray-200"></div> {/* Divider */}
          
          <button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Log In
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-6 rounded-full transition-all shadow-sm">
            Post a Job
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Show simplified bookmark on mobile next to hamburger */}
          <Link href="/bookmarks" className="relative p-2 text-slate-600 md:hidden">
            <Bookmark className="w-5 h-5" strokeWidth={2} />
            {isMounted && bookmarks.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
            )}
          </Link>

          <button
            className="p-2 text-slate-600 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4">
          
          {/* Mobile Search */}
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <Link href="/jobs" className="text-base font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
            Find Jobs
          </Link>
          <Link href="/companies" className="text-base font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
            Companies
          </Link>
          
          {/* Mobile Bookmark Link with Badge */}
          <Link href="/bookmarks" className="flex items-center justify-between text-base font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5" />
              Saved Jobs
            </div>
            {isMounted && bookmarks.length > 0 && (
              <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-bold">
                {bookmarks.length}
              </span>
            )}
          </Link>

          <hr className="border-gray-100 my-2" />

          <button className="w-full text-center text-base font-medium text-slate-900 p-3 border border-gray-200 rounded-xl hover:bg-gray-50">
            Log In
          </button>
          <button className="w-full bg-slate-900 text-white text-base font-medium py-3 rounded-xl shadow-sm">
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
}