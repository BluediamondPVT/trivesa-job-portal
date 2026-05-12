// src/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger icons ke liye

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-slate-900 z-50"
        >
          Blue<span className="text-blue-600">Diamond</span> Jobs
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/jobs"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Companies
          </Link>
          <div className="h-6 w-px bg-gray-200 mx-2"></div> {/* Divider */}
          <button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Log In
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-sm">
            Post a Job
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-600 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col gap-4">
          <Link
            href="/jobs"
            className="text-base font-medium text-slate-600 p-2 hover:bg-gray-50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            className="text-base font-medium text-slate-600 p-2 hover:bg-gray-50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Companies
          </Link>

          <hr className="border-gray-100 my-2" />

          <button className="w-full text-left text-base font-medium text-slate-900 p-2 hover:bg-gray-50 rounded-lg">
            Log In
          </button>
          <button className="w-full bg-slate-900 text-white text-base font-medium py-3 rounded-xl mt-2">
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
}
