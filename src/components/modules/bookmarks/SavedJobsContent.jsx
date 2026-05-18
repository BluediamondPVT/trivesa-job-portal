// src/components/modules/bookmarks/SavedJobsContent.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 🚀 Router import kiya
import { useBookmarkStore } from "@/store/useBookmarkStore";
import {
  Bookmark,
  Briefcase,
  MapPin,
  Clock,
  Banknote,
  SearchX,
} from "lucide-react";
import toast from "react-hot-toast";

// 🔥 Naye imports Auth Store aur Modal ke liye
import { useAuthStore } from "@/store/useAuthStore";
import LoginPromptModal from "@/components/shared/LoginPromptModal";

export default function SavedJobsContent() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { bookmarks, toggleBookmark } = useBookmarkStore();

  // 🚀 Auth Store aur Modal State
  const { isAuthenticated } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRemoveBookmark = (e, job) => {
    e.stopPropagation(); // 🚀 Card click event ko roko
    toggleBookmark(job);
    toast.error("Job removed from bookmarks.", {
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });
  };

  // 🔥 Protected Route Logic
  const handleJobAction = (jobId) => {
    if (!isAuthenticated) {
      setShowLoginModal(true); // Login nahi hai toh modal dikhao
    } else {
      router.push(`/jobs/${jobId}`); // Login hai toh job page pe le jao
    }
  };

  if (!isMounted) return null;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 relative">
      {/* 🔴 EMPTY STATE */}
      {bookmarks.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-3xl py-24 px-6 text-center shadow-sm">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
            <SearchX className="w-10 h-10 text-blue-500" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">
            No saved jobs yet
          </h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            You haven&apos;t bookmarked any jobs. Browse our job listings and
            click the bookmark icon to save them for later.
          </p>
          <Link
            href="/jobs"
            className="bg-[#1a65d6] hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all"
          >
            Browse Jobs
          </Link>
        </div>
      ) : (
        /* 🟢 FILLED STATE */
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center mb-2 px-2">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              My Saved Jobs ({bookmarks.length})
            </h2>
          </div>

          {bookmarks.map((job, index) => (
            <div
              key={`${job.id}-${index}`}
              onClick={() => handleJobAction(job.id)} // 🔥 Yahan Auth wala logic laga diya
              className="group flex flex-col sm:flex-row items-start justify-between gap-6 bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 w-full cursor-pointer"
            >
              {/* Left Side: Logo & Details */}
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

              {/* Right Side: Actions */}
              <div className="sm:self-start flex flex-col items-end gap-3 shrink-0">
                <button
                  onClick={(e) => handleRemoveBookmark(e, job)} // 🔥 Pura event pass kiya
                  className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-red-50 hover:text-red-600 transition-all group/btn"
                  title="Remove from saved"
                >
                  <Bookmark
                    className="w-5 h-5 group-hover/btn:hidden"
                    strokeWidth={2.5}
                    fill="currentColor"
                  />
                  <span className="hidden group-hover/btn:block font-bold text-red-600 text-sm px-1">
                    Remove
                  </span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 🚀 Ise bhi roko warna do baar trigger hoga
                    handleJobAction(job.id);
                  }}
                  className="text-sm font-semibold text-blue-600 hover:underline px-2 mt-4"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🛡️ Login Prompt Modal */}
      <LoginPromptModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
