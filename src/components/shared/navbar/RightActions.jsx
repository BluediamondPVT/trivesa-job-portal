// src/components/shared/navbar/RightActions.jsx
"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { useEffect, useState } from "react";

export default function RightActions() {
  const { bookmarks } = useBookmarkStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="hidden md:flex items-center gap-5 shrink-0 z-10">
      <Link
        href="/bookmarks"
        className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <Bookmark
          className="w-5 h-5 group-hover:fill-blue-50 transition-all"
          strokeWidth={2}
        />
        {isMounted && bookmarks.length > 0 && (
          <span className="absolute top-1 right-0.5 inline-flex items-center justify-center min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-full shadow-sm">
            {bookmarks.length}
          </span>
        )}
      </Link>

      <div className="h-6 w-px bg-gray-200"></div>

      <Link href="/login" className="bg-slate-900 hover:bg-black text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
        Log In
      </Link>
    </div>
  );
}
