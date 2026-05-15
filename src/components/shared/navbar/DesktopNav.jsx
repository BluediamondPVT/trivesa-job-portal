// src/components/shared/navbar/DesktopNav.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function DesktopNav({ navLinks }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-2 flex-1 justify-center relative">
      <div className="flex items-center" onMouseLeave={() => setHoveredIndex(null)}>
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className="relative px-4 py-2"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gray-100/80 -z-10"
                    layoutId="navbar-hover-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <span className={`relative text-sm font-semibold transition-colors duration-200 z-10 ${
                isActive ? "text-blue-600" : hoveredIndex === index ? "text-slate-900" : "text-slate-600"
              }`}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>

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
  );
}