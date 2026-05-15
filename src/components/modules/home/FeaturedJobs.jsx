// src/components/modules/FeaturedJobs.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, Briefcase, MapPin, Clock, Banknote } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import toast from "react-hot-toast";

// 🔥 Indian Tech Companies Dummy Data
const jobs = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Flipkart",
    location: "Bengaluru, KA",
    time: "2 hours ago",
    salary: "₹12L - ₹18L PA",
    logoColor: "bg-[#2874F0]", // Flipkart Blue
    logoText: "F",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ]
  },
  {
    id: 2,
    title: "Frontend Engineer (Next.js)",
    company: "Zomato",
    location: "Gurugram, HR",
    time: "5 hours ago",
    salary: "₹15L - ₹22L PA",
    logoColor: "bg-[#E23744]", // Zomato Red
    logoText: "Z",
    badges: [
      { text: "Remote", style: "bg-emerald-50 text-emerald-600" },
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Cred",
    location: "Bengaluru, KA",
    time: "11 hours ago",
    salary: "₹20L - ₹30L PA",
    logoColor: "bg-black", // Cred Black
    logoText: "C",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Premium", style: "bg-purple-50 text-purple-600" },
    ]
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Reliance Jio",
    location: "Navi Mumbai, MH",
    time: "1 day ago",
    salary: "₹8L - ₹14L PA",
    logoColor: "bg-[#0A2885]", // Jio Blue
    logoText: "J",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "On-site", style: "bg-gray-100 text-gray-600" },
    ]
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "Nykaa",
    location: "Mumbai, MH",
    time: "2 days ago",
    salary: "₹14L - ₹20L PA",
    logoColor: "bg-[#FC2779]", // Nykaa Pink
    logoText: "N",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ]
  },
  {
    id: 6,
    title: "Backend Developer (Go)",
    company: "PhonePe",
    location: "Bengaluru, KA",
    time: "3 days ago",
    salary: "₹18L - ₹25L PA",
    logoColor: "bg-[#5E32C4]", // PhonePe Purple
    logoText: "P",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Hybrid", style: "bg-indigo-50 text-indigo-600" },
    ]
  }
];

export default function FeaturedJobs() {
  const router = useRouter();
  const { toggleBookmark, isBookmarked } = useBookmarkStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCardClick = (id) => {
    router.push(`/jobs/${id}`);
  };

  const handleBookmarkClick = (e, job) => {
    e.stopPropagation();
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-white">
      
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Featured Jobs
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-medium">
          Know your worth and find the job that qualifies your life
        </p>
      </div>

      {/* Grid Layout for Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {jobs.map((job) => {
          const saved = isMounted ? isBookmarked(job.id) : false;

          return (
            <div 
              key={job.id} 
              onClick={() => handleCardClick(job.id)}
              className="group flex flex-col sm:flex-row items-start gap-4 bg-white border border-gray-200 rounded-[20px] p-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              {/* ========================================= */}
              {/* 📱 MOBILE VIEW TOP ROW (Logo + Bookmark) */}
              {/* ========================================= */}
              <div className="flex justify-between items-start w-full sm:hidden mb-1">
                <div className={`w-[50px] h-[50px] rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-sm ${job.logoColor}`}>
                  {job.logoText}
                </div>
                <button
                  onClick={(e) => handleBookmarkClick(e, job)}
                  className={`p-2 rounded-full border transition-all ${
                    saved ? "bg-blue-50 border-blue-100 text-blue-600" : "bg-transparent border-gray-100 text-gray-400 hover:text-blue-600"
                  }`}
                >
                  <Bookmark className="w-[18px] h-[18px]" strokeWidth={saved ? 2.5 : 2} fill={saved ? "currentColor" : "none"} />
                </button>
              </div>

              {/* ========================================= */}
              {/* 💻 DESKTOP LOGO (Hidden on Mobile) */}
              {/* ========================================= */}
              <div className={`hidden sm:flex w-14 h-14 rounded-xl items-center justify-center font-bold text-xl text-white shrink-0 shadow-sm ${job.logoColor}`}>
                {job.logoText}
              </div>

              {/* ========================================= */}
              {/* MAIN CONTENT AREA */}
              {/* ========================================= */}
              <div className="flex-1 w-full flex flex-col">
                
                {/* Title & Company */}
                <div className="flex justify-between items-start mb-3 sm:mb-2">
                  <div>
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-slate-500 font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>

                  {/* 💻 DESKTOP BOOKMARK (Hidden on Mobile) */}
                  <button
                    onClick={(e) => handleBookmarkClick(e, job)}
                    className={`hidden sm:flex p-2 rounded-full transition-all shrink-0 ${
                      saved ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <Bookmark className="w-5 h-5" strokeWidth={saved ? 2.5 : 1.5} fill={saved ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* 📱 MOBILE META ROWS */}
                <div className="flex flex-col gap-2 sm:hidden text-[12px] text-gray-500 font-medium mb-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-[14px] h-[14px] text-gray-400" strokeWidth={2} />
                      1-5 Yrs
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-slate-600">
                      <Banknote className="w-[14px] h-[14px] text-gray-400" strokeWidth={2} />
                      {job.salary}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-[14px] h-[14px] text-gray-400" strokeWidth={2} />
                    {job.location}
                  </span>
                </div>

                {/* 💻 DESKTOP META ROW */}
                <div className="hidden sm:flex flex-wrap items-center gap-y-2 gap-x-4 text-[12px] sm:text-[13px] text-gray-500 font-medium mb-4">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-gray-400" /> 1-5 Yrs</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400" /> {job.location}</span>
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700"><Banknote className="w-4 h-4 text-gray-400" /> {job.salary}</span>
                </div>

                {/* 📱 MOBILE DIVIDER */}
                <hr className="border-gray-100 mb-3 sm:hidden" />

                {/* Footer Area: Badges & Time */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mt-auto">
                  <div className="flex flex-wrap items-center gap-2">
                    {job.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${badge.style}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-400 font-medium">
                    <Clock className="w-[13px] h-[13px]" strokeWidth={2} />
                    {job.time.toLowerCase().includes("posted") ? job.time : `Posted ${job.time}`}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      <div className="mt-10 sm:mt-12 flex justify-center">
        <button
          onClick={() => router.push('/jobs')}
          className="bg-[#1864f4] hover:bg-blue-700 cursor-pointer text-white font-bold py-3 px-8 rounded-xl shadow-[0_4px_14px_0_rgba(24,100,244,0.39)] hover:shadow-[0_6px_20px_rgba(24,100,244,0.23)] transition-all hover:-translate-y-0.5 text-sm"
        >
          Load More Listings
        </button>
      </div>

    </section>
  );
}