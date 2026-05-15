// src/components/modules/job-details/RelatedJobs.jsx
"use client";

import { useState, useEffect } from "react";
import { Briefcase, Clock, Bookmark } from "lucide-react";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RelatedJobs() {
  const { toggleBookmark, isBookmarked } = useBookmarkStore();
  const [isMounted, setIsMounted] = useState(false);

  // 🔥 Hydration fix taaki client aur server ka data match kare
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dummy related jobs (Real API aane pe ye props se aayenge)
  const jobs = [
    { 
        id: 101, 
        title: "Senior Product Designer", 
        company: "Upwork", 
        logo: "Up", 
        color: "bg-green-500", 
        time: "11 hours ago",
        location: "Remote",
        salary: "$50k - $80k",
        logoColor: "bg-green-500",
        logoText: "Up",
        badges: [{ text: "Temporary", style: "bg-blue-50 text-blue-600" }]
    },
    { 
        id: 102, 
        title: "Senior Full Stack Engineer", 
        company: "Medium", 
        logo: "M", 
        color: "bg-black", 
        time: "11 hours ago",
        location: "London, UK",
        salary: "$90k - $120k",
        logoColor: "bg-black",
        logoText: "M",
        badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }]
    }
  ];

  const handleBookmarkClick = (e, job) => {
    e.preventDefault();
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
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Related Jobs</h2>
      <p className="text-sm text-gray-500 mb-6">Explore similar opportunities that match your profile.</p>
      
      <div className="flex flex-col gap-4">
        {jobs.map((job) => {
          // 🔥 Bookmark state check
          const saved = isMounted ? isBookmarked(job.id) : false;

          return (
            <Link 
              key={job.id} 
              href={`/jobs/${job.id}`}
              className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shrink-0 ${job.color}`}>
                  {job.logo}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-gray-400" /> {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" /> {job.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔥 Bookmark Button with logic */}
              <button 
                onClick={(e) => handleBookmarkClick(e, job)}
                className={`p-2.5 rounded-lg transition-all ${
                  saved 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-gray-300 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Bookmark 
                  className="w-5 h-5" 
                  fill={saved ? "currentColor" : "none"} 
                  strokeWidth={saved ? 2.5 : 2} 
                />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}