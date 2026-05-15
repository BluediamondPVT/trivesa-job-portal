// src/components/shared/navbar/MobileMenu.jsx
"use client";

import Link from "next/link";
import { Search, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { useEffect, useState } from "react";

export default function MobileMenu({ onClose, navLinks }) {
  const { bookmarks } = useBookmarkStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      // 🔥 FIX: 'absolute' ko 'fixed' kiya, z-index badhaya, aur solid bg-white deke height set ki
      className="lg:hidden fixed top-20 left-0 w-full h-[calc(100dvh-80px)] bg-white z-[90] flex flex-col overflow-y-auto"
    >
      <div className="p-5 flex flex-col gap-4">
        {/* Mobile Search */}
        <div className="relative mb-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        {/* Dynamic Links */}
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="text-[15px] font-bold text-slate-700 p-3.5 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}

        {/* Saved Jobs Link */}
        <Link
          href="/bookmarks"
          className="flex items-center justify-between text-[15px] font-bold text-slate-700 p-3.5 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors"
          onClick={onClose}
        >
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5 text-slate-400" /> Saved Jobs
          </div>
          {isMounted && bookmarks.length > 0 && (
            <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-bold shadow-sm">
              {bookmarks.length}
            </span>
          )}
        </Link>

        <hr className="border-gray-100 my-2" />

       
        <button className="w-full bg-[#1864f4] hover:bg-blue-700 transition-colors text-white text-[15px] font-bold py-3.5 rounded-xl shadow-md shadow-blue-500/20">
          Log In
        </button>
      </div>
    </motion.div>
  );
}
