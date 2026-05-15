// src/components/modules/job-details/JobHeader.jsx
"use client";

import { Briefcase, MapPin, Clock, Banknote, Bookmark } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export default function JobHeader({ job }) {
  const { toggleBookmark, isBookmarked } = useBookmarkStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  const saved = isMounted ? isBookmarked(job?.id) : false;

  const handleSave = () => {
    const isAdded = toggleBookmark(job);
    if (isAdded) toast.success("Job saved!");
    else toast.error("Job removed!");
  };

  // 🔥 Simple direct apply handler
  const handleApply = () => {
    toast.success("Applied successfully!", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#10B981", // Solid Green Background
        color: "#fff",
        fontWeight: "bold",
      },
    });
  };

  // Fallback data
  const displayJob = job || {
    id: "1",
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#1F2937]",
    logoText: "S",
    badges: [
      { text: "Full Time", style: "bg-[#e8f0fe] text-[#1a73e8]" },
      { text: "Private", style: "bg-[#e6f4ea] text-[#1e8e3e]" },
      { text: "Urgent", style: "bg-[#fef7e0] text-[#f9ab00]" },
    ],
  };

  return (
    <div className="w-full py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-gray-200/60 pb-10">
      {/* Left Side: Logo and Details */}
      <div className="flex items-start sm:items-center gap-5 sm:gap-6">
        <div
          className={`w-20 h-20 sm:w-[88px] sm:h-[88px] rounded-2xl flex items-center justify-center shrink-0 ${displayJob.logoColor}`}
        >
          <div className="flex flex-col gap-1.5 items-center">
            <div className="w-8 h-1 bg-emerald-400 rounded-full -ml-3"></div>
            <div className="w-10 h-1 bg-emerald-400 rounded-full"></div>
            <div className="w-8 h-1 bg-emerald-400 rounded-full ml-3"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-2.5 tracking-tight">
            {displayJob.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-[14px] text-slate-500 font-medium mb-3.5">
            <span className="flex items-center gap-1.5">
              <Briefcase
                className="w-[18px] h-[18px] text-slate-400"
                strokeWidth={1.5}
              />{" "}
              {displayJob.company}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin
                className="w-[18px] h-[18px] text-slate-400"
                strokeWidth={1.5}
              />{" "}
              {displayJob.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock
                className="w-[18px] h-[18px] text-slate-400"
                strokeWidth={1.5}
              />{" "}
              {displayJob.time}
            </span>
            <span className="flex items-center gap-1.5">
              <Banknote
                className="w-[18px] h-[18px] text-slate-400"
                strokeWidth={1.5}
              />{" "}
              {displayJob.salary}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {displayJob.badges.map((badge, index) => (
              <span
                key={index}
                className={`px-4 py-1 rounded-full text-[12px] font-semibold tracking-wide ${badge.style}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
        <button
          onClick={handleApply}
          className="flex-1 md:flex-none cursor-pointer bg-[#1864f4] hover:bg-blue-700 text-white font-semibold text-[15px] py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          Apply For Job
        </button>
        <button
          onClick={handleSave}
          className={`p-3.5 rounded-xl transition-all flex-shrink-0 ${saved ? "bg-[#1864f4] text-white" : "bg-[#eef2fc] text-[#1864f4] hover:bg-[#e0e8f9]"}`}
        >
          <Bookmark
            className="cursor-pointer w-5 h-5"
            fill={saved ? "currentColor" : "none"}
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
}
