// src/components/modules/jobs/JobListingContent.jsx
"use client";

// 🔥 1. useState aur useEffect import kar
import { useState, useEffect } from "react";
import SortByFilter from "./SortByFilter";
import PerPageFilter from "./PerPageFilter";
import { Bookmark, Briefcase, MapPin, Clock, Banknote } from "lucide-react";
import toast from "react-hot-toast";
import { useBookmarkStore } from "@/store/useBookmarkStore";

const jobs = [
  // ... tera jobs array waisa hi rahega (flipkart, zomato, etc.)
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Flipkart",
    location: "Bengaluru, Karnataka",
    time: "2 hours ago",
    salary: "₹12L - ₹18L PA",
    description:
      "Join our core e-commerce team. Looking for strong fundamentals in MongoDB, Express, React, and Node.js. Experience with high-traffic scalable applications is a plus.",
    logoColor: "bg-[#2874F0]",
    logoText: "F",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Private", style: "bg-green-50 text-green-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ],
  },
  {
    id: 2,
    title: "Frontend Engineer (Next.js)",
    company: "Zomato",
    location: "Gurugram, Haryana",
    time: "5 hours ago",
    salary: "₹15L - ₹22L PA",
    description:
      "Help us build blazing fast delivery interfaces. You should be an expert in Next.js App Router, SSR, and Tailwind CSS. Obsession with Core Web Vitals is required.",
    logoColor: "bg-[#E23744]",
    logoText: "Z",
    badges: [
      { text: "Remote", style: "bg-blue-50 text-blue-600" },
      { text: "Private", style: "bg-green-50 text-green-600" },
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Cred",
    location: "Bengaluru (Hybrid)",
    time: "11 hours ago",
    salary: "₹20L - ₹30L PA",
    description:
      "Design premium, Awwwards-worthy experiences for our users. Mastery in Figma, micro-interactions, and a strong portfolio demonstrating minimalistic design is mandatory.",
    logoColor: "bg-black",
    logoText: "C",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Private", style: "bg-green-50 text-green-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Reliance Jio",
    location: "Navi Mumbai, Maharashtra",
    time: "1 day ago",
    salary: "₹8L - ₹14L PA",
    description:
      "Work on highly scalable internal dashboards and consumer-facing apps. Need solid experience with React, Node.js, and cloud infrastructure deployments.",
    logoColor: "bg-[#0A2885]",
    logoText: "J",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Private", style: "bg-green-50 text-green-600" },
    ],
  },
  {
    id: 5,
    title: "SEO & Digital Marketing Specialist",
    company: "Nykaa",
    location: "Mumbai, Maharashtra",
    time: "2 days ago",
    salary: "₹6L - ₹9L PA",
    description:
      "Drive organic growth and manage performance marketing campaigns. Solid understanding of technical SEO, Google Analytics, and content strategies is expected.",
    logoColor: "bg-[#FC2779]",
    logoText: "N",
    badges: [
      { text: "Contract", style: "bg-blue-50 text-blue-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ],
  },
];

export default function JobListingContent() {
  const { toggleBookmark, isBookmarked } = useBookmarkStore();

  // 🔥 2. isMounted state add kar
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBookmarkClick = (job) => {
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
    <div className="flex-1 w-full flex flex-col gap-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
        <p className="text-sm text-gray-500 font-medium px-2">
          Showing <span className="text-slate-900 font-bold">10</span> jobs
        </p>
        <div className="flex items-center gap-3">
          <SortByFilter />
          <PerPageFilter />
        </div>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col gap-5">
        {jobs.map((job) => {
          // 🔥 3. YAHAN HAI ASLI FIX: Server pe hamesha 'false' dikhayega, mount hone ke baad asli state lega
          const saved = isMounted ? isBookmarked(job.id) : false;

          return (
            <div
              key={job.id}
              className="group flex flex-col sm:flex-row items-start justify-between gap-6 bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 w-full cursor-pointer"
            >
              {/* Left Side: Logo & Details (Waisa hi rahega) */}
              <div className="flex items-start gap-6 w-full">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl text-white shrink-0 shadow-sm ${job.logoColor}`}
                >
                  {job.logoText}
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-[20px] font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-3 gap-x-5 text-[13px] text-gray-500 font-medium mb-4">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-400" />{" "}
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" />{" "}
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" /> {job.time}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <Banknote className="w-4 h-4 text-gray-400" />{" "}
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-[14px] text-slate-500 leading-relaxed mb-5 line-clamp-2 max-w-3xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {job.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${badge.style}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Bookmark Button */}
              <div className="sm:self-start flex shrink-0">
                <button
                  onClick={() => handleBookmarkClick(job)}
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
        })}
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-20 space-y-4">
        <p className="text-sm text-gray-500 font-medium">
          Showing 10 of 497 jobs
        </p>
        <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-1/4 h-full bg-blue-600 rounded-full"></div>
        </div>
        <button className="text-blue-600 font-bold text-sm hover:text-blue-700 hover:underline mt-2 transition-colors">
          Show More Listing
        </button>
      </div>
    </div>
  );
}
