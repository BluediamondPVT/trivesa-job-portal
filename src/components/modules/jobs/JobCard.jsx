// src/components/modules/jobs/JobCard.jsx
"use client";

import { Bookmark, Briefcase, MapPin, Clock, Banknote } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import toast from "react-hot-toast";

// 🔥 Naya prop 'onActionClick' add kiya
export default function JobCard({ job, isMounted, onActionClick }) {
  const { toggleBookmark, isBookmarked } = useBookmarkStore();
  const saved = isMounted ? isBookmarked(job.id) : false;

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // Click propagate hone se rokta hai taaki modal na khule
    const isAdded = toggleBookmark(job);
    if (isAdded) {
      toast.success("Job saved to bookmarks!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    } else {
      toast.error("Job removed from bookmarks.", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    }
  };

  return (
    <div
      onClick={onActionClick} // 🔥 Ye line bohot important hai!
      className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 w-full cursor-pointer flex flex-col sm:flex-row gap-4 sm:gap-6"
    >
      {/* 🔥 MOBILE BOOKMARK (Absolute Top-Right for Naukri feel) */}
      <button
        onClick={handleBookmarkClick}
        className={`absolute top-4 right-4 sm:hidden p-2 rounded-full transition-all z-10 ${
          saved
            ? "bg-blue-50 text-blue-600"
            : "bg-gray-50 text-gray-400 hover:text-blue-600"
        }`}
      >
        <Bookmark
          className="w-[18px] h-[18px]"
          strokeWidth={saved ? 2.5 : 2}
          fill={saved ? "currentColor" : "none"}
        />
      </button>

      {/* Logo (Smaller on mobile, Normal on desktop) */}
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-bold text-xl sm:text-2xl text-white shrink-0 shadow-sm ${job.logoColor}`}
      >
        {job.logoText}
      </div>

      {/* Content Container */}
      <div className="flex-1 w-full">
        {/* Title & Company */}
        <div className="pr-10 sm:pr-0">
          {" "}
          {/* pr-10 on mobile so text doesn't hit the bookmark icon */}
          <h3 className="font-heading text-[17px] sm:text-[20px] font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-snug">
            {job.title}
          </h3>
          <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium mb-3 sm:mb-4">
            {job.company}
          </p>
        </div>

        {/* Compact Info Row (Experience, Salary, Location) */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-[12px] sm:text-[13px] text-gray-500 font-medium mb-3 sm:mb-4">
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-gray-400" />
            1-5 Yrs{" "}
            {/* Optional: Agar actual exp data ho toh yahan variable daal dena */}
          </span>
          <span className="flex items-center gap-1.5">
            <Banknote className="w-4 h-4 text-gray-400" />
            {job.salary}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gray-400" />
            {job.location}
          </span>
        </div>

        {/* Description Snippet (1 line on mobile, 2 lines on desktop) */}
        <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed mb-4 line-clamp-1 sm:line-clamp-2 max-w-3xl">
          {job.description}
        </p>

        {/* Footer: Tags & Time */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto border-t sm:border-none border-gray-100 pt-3 sm:pt-0">
          <div className="flex flex-wrap items-center gap-2">
            {job.badges.map((badge, index) => (
              <span
                key={index}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${badge.style}`}
              >
                {badge.text}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            {job.time.includes("Posted") ? job.time : `Posted ${job.time}`}
          </div>
        </div>
      </div>

      {/* 🔥 DESKTOP BOOKMARK (Hidden on mobile) */}
      <div className="hidden sm:flex shrink-0 self-start">
        <button
          onClick={handleBookmarkClick}
          className={`p-2.5 rounded-full transition-all ${
            saved
              ? "bg-blue-50 text-blue-600"
              : "bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
          }`}
        >
          <Bookmark
            className="w-5 h-5"
            strokeWidth={saved ? 2.5 : 2}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>
    </div>
  );
}
