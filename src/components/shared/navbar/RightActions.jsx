// src/components/shared/navbar/RightActions.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bookmark, User, LogOut, ChevronDown } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { useAuthStore } from "@/store/useAuthStore"; // 🔥 Zustand store import kiya

export default function RightActions() {
  const [isMounted, setIsMounted] = useState(false);
  const { bookmarks } = useBookmarkStore();
  const { isAuthenticated, user, logout } = useAuthStore(); // 🔥 Auth states nikali
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // SSR Hydration fix - Jab tak mount na ho blank div return karo taaki layout shift na ho
  if (!isMounted) {
    return <div className="hidden lg:flex items-center gap-6 w-[200px]" />;
  }

  return (
    <div className="hidden lg:flex items-center gap-6 relative">
      
      {/* 🔖 Desktop Bookmark Icon (Sirf tab dikhega jab bookmarks hon) */}
      {bookmarks.length > 0 && (
        <Link
          href="/bookmarks"
          className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors"
          title="Saved Jobs"
        >
          <Bookmark className="w-[22px] h-[22px]" strokeWidth={2} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
        </Link>
      )}

      {/* 🌟 DYNAMIC AUTH TOGGLE ZONE */}
      {!isAuthenticated ? (
        // 🔴 CASE 1: NOT LOGGED IN
        <Link
          href="/login"
          className="bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
        >
          Login
        </Link>
      ) : (
        // 🟢 CASE 2: LOGGED IN (User Dropdown Menu)
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Click bahar hone pe band ho jaye
            className="flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100 p-1.5 pr-3.5 rounded-full transition-all border border-gray-100 outline-none hover:shadow-sm"
          >
            {/* User Avatar Circle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-[13px] flex items-center justify-center shadow-sm">
              {user?.avatar || "U"}
            </div>
            
            {/* User Name */}
            <span className="text-[13px] font-bold text-slate-700 tracking-wide">
              {user?.name?.split(" ")[0] || "User"}
            </span>
            
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Account Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-full right-0 mt-3 w-52 bg-white border border-gray-100 rounded-b-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] py-2.5 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
              
              <div className="px-4 py-2 mb-1 border-b border-gray-50">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Signed in as</p>
                <p className="text-sm font-bold text-slate-800 truncate">{user?.phone || "User"}</p>
              </div>

              <Link
                href="/profile"
                className="flex items-center gap-2.5 px-4 py-2.5 text-[13.5px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                <User className="w-4 h-4" /> My Profile
              </Link>
              
              <button
                onClick={() => logout()}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13.5px] font-bold text-red-600 hover:bg-red-50 transition-colors text-left mt-1"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}