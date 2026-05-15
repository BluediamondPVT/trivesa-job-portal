// src/components/modules/jobs/JobFiltersSidebar.jsx
"use client";

import { useState, useEffect } from "react";
import { Megaphone, Filter, X } from "lucide-react";
import CategoryDropdown from "./CategoryDropdown";

export default function JobFiltersSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Jab mobile filter khulega, toh background ka scroll lock ho jayega (Premium UX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* 📱 MOBILE FLOATING FILTER BUTTON (Bottom Center for better thumb reach) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-8 left-12 -translate-x-1/2 z-40 bg-[#1864f4] text-white px-4 py-4 rounded-full shadow-[0_8px_30px_rgba(24,100,244,0.4)] hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-bold text-sm tracking-wide"
      >
        <Filter className="w-4 h-4" />
        {/* Filters */}
      </button>

      {/* 📱 MOBILE BACKDROP BLUR (Dark overlay behind the drawer) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🚀 THE SIDEBAR / DRAWER */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-28 left-0 h-[100dvh] lg:h-[calc(100vh-7rem)] w-[280px] sm:w-[320px] lg:w-[320px] shrink-0 bg-white lg:bg-transparent z-[100] lg:z-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen
            ? "translate-x-0 shadow-2xl"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* 📱 Mobile Drawer Header (Only visible on phones) */}
        <div className="lg:hidden flex items-center justify-between p-5 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className="font-heading text-lg font-bold text-slate-900">
            Filter Jobs
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-slate-900 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Wrapper */}
        <div className="p-5 lg:p-0 space-y-8">
          {/* Filters Container */}
          <div className="bg-[#f4f7fc] p-6 rounded-xl border border-gray-100">
            <CategoryDropdown />

            {/* Job Type (Checkboxes) */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Job type
              </label>
              <div className="space-y-3">
                {["Freelancer", "Full Time", "Part Time", "Temporary"].map(
                  (type, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        {type}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Date Posted (Radio) */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Date Posted
              </label>
              <div className="space-y-3">
                {[
                  "All",
                  "Last Hour",
                  "Last 24 Hour",
                  "Last 7 Days",
                  "Last 14 Days",
                  "Last 30 Days",
                ].map((date, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="date"
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      defaultChecked={i === 0}
                    />
                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      {date}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Experience Level
              </label>
              <div className="space-y-3">
                {["Fresh", "1 Year", "2 Year", "3 Year", "4 Year"].map(
                  (exp, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        {exp}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "App",
                  "Administrative",
                  "Android",
                  "Wordpress",
                  "Design",
                  "React",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:text-blue-600 hover:border-blue-300 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Apply Button (Only visible inside drawer on phones) */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden w-full mt-6 bg-[#1864f4] text-white font-bold py-3 rounded-xl shadow-md"
            >
              Apply Filters
            </button>
          </div>

          {/* Mini Recruiting Banner */}
          <div className="bg-[#f4f7fc] p-6 rounded-xl border border-gray-100 flex flex-col items-start relative overflow-hidden">
            <h3 className="font-heading font-bold text-slate-900 mb-2">
              Recruiting?
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed relative z-10">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database.
            </p>
            <button className="bg-[#1a65d6] hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm transition-all relative z-10">
              Start Recruiting Now
            </button>
            <div className="absolute -bottom-4 -right-4 opacity-50">
              <Megaphone size={80} className="text-blue-200 -rotate-12" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
