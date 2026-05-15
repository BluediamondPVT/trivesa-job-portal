// src/components/modules/home/HeroSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function HeroSection() {
  return (
    // 🔥 Use h-[100dvh] for mobile browsers so it doesn't glitch with URL bar changes
    <div className="relative w-full h-[100dvh] md:min-h-[800px] -mt-20 overflow-hidden">
      <BackgroundGradientAnimation>
        {/* 🔥 FIX: justify-start aur pt-[140px] on mobile taaki text upar se cut na ho. Desktop pe normal center rahega. overflow-y-auto add kiya for safety */}
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-start md:justify-center text-center w-full max-w-7xl mx-auto px-4 sm:px-6 pt-[140px] md:pt-20 pb-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full pointer-events-auto"
          >
            {/* 🟢 Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white text-[11px] md:text-sm font-semibold mb-6 md:mb-8 mt-2 md:mt-0">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-blue-400"></span>
              </span>
              Over 10,000+ jobs available today
            </div>

            {/* 🚀 Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.2] md:leading-[1.1] mb-4 md:mb-6 drop-shadow-2xl px-2">
              Find the job that fits your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-md">
                life and passion.
              </span>
            </h1>

            <p className="text-[15px] sm:text-lg md:text-xl text-white/90 max-w-2xl mb-8 md:mb-12 font-medium drop-shadow-md px-4">
              Discover remote, part-time, or full-time opportunities at top-tier
              companies tailored to your expertise.
            </p>

            {/* 🍏 APPLE STYLE GLASS SEARCH BAR (Translucent Edition) */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/30 p-2 md:p-2.5 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-2">
              {/* Job Search Input */}
              <div className="flex-1 flex items-center px-4 py-3 md:py-2 gap-3 bg-white/10 rounded-xl md:rounded-l-[1.5rem] md:rounded-r-none border border-transparent focus-within:bg-white/20 transition-colors">
                <Search className="w-5 h-5 text-white/80 shrink-0" />
                <input
                  type="text"
                  placeholder="Job title, keyword, or company"
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 font-medium text-sm md:text-base"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 flex items-center px-4 py-3 md:py-2 gap-3 bg-white/10 rounded-xl md:rounded-none border border-transparent focus-within:bg-white/20 transition-colors md:border-l md:border-white/20">
                <MapPin className="w-5 h-5 text-white/80 shrink-0" />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 font-medium text-sm md:text-base"
                />
              </div>

              {/* White Solid Button */}
              <button className="bg-white hover:bg-gray-50 text-blue-900 font-bold py-3.5 md:py-4 px-8 rounded-xl md:rounded-l-[0.1rem] md:rounded-r-[1.5rem] transition-all w-full md:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-1 md:mt-0">
                Search
              </button>
            </div>

            {/* 🏷️ Popular Tags */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 md:mt-10 text-xs md:text-sm text-white/90 flex-wrap justify-center font-medium">
              <span className="mb-1 sm:mb-0">Popular Searches:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {["Frontend Developer", "UI/UX", "MERN", "Next.js"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white cursor-pointer transition-all shadow-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
