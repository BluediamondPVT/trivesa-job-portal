// src/components/modules/jobs/JobListingContent.jsx
"use client";

import { useState, useEffect } from "react";
import SortByFilter from "./SortByFilter";
import PerPageFilter from "./PerPageFilter";
import JobCard from "./JobCard";
import LoadMoreSection from "./LoadMoreSection";

// Tera same 20 jobs wala allJobs array...
const allJobs = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Flipkart",
    location: "Bengaluru",
    time: "2 hours ago",
    salary: "₹12L - ₹18L PA",
    description:
      "Join our core e-commerce team. Looking for strong fundamentals in MongoDB, Express, React, and Node.js.",
    logoColor: "bg-[#2874F0]",
    logoText: "F",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ],
  },
  {
    id: 2,
    title: "Frontend Engineer (Next.js)",
    company: "Zomato",
    location: "Gurugram",
    time: "5 hours ago",
    salary: "₹15L - ₹22L PA",
    description:
      "Help us build blazing fast delivery interfaces. You should be an expert in Next.js App Router and SSR.",
    logoColor: "bg-[#E23744]",
    logoText: "Z",
    badges: [{ text: "Remote", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Cred",
    location: "Bengaluru",
    time: "11 hours ago",
    salary: "₹20L - ₹30L PA",
    description:
      "Design premium, Awwwards-worthy experiences for our users. Mastery in Figma is mandatory.",
    logoColor: "bg-black",
    logoText: "C",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Reliance Jio",
    location: "Navi Mumbai",
    time: "1 day ago",
    salary: "₹8L - ₹14L PA",
    description:
      "Work on highly scalable internal dashboards and consumer-facing apps.",
    logoColor: "bg-[#0A2885]",
    logoText: "J",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 5,
    title: "SEO Specialist",
    company: "Nykaa",
    location: "Mumbai",
    time: "2 days ago",
    salary: "₹6L - ₹9L PA",
    description:
      "Drive organic growth and manage performance marketing campaigns.",
    logoColor: "bg-[#FC2779]",
    logoText: "N",
    badges: [{ text: "Contract", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 6,
    title: "Backend Developer (Go)",
    company: "PhonePe",
    location: "Bengaluru",
    time: "3 days ago",
    salary: "₹18L - ₹25L PA",
    description:
      "Build robust payment gateways and microservices handling millions of TPS.",
    logoColor: "bg-[#5E32C4]",
    logoText: "P",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Zerodha",
    location: "Bengaluru",
    time: "3 days ago",
    salary: "₹20L - ₹28L PA",
    description:
      "Manage our AWS infrastructure, Kubernetes clusters, and CI/CD pipelines.",
    logoColor: "bg-[#387ED1]",
    logoText: "Z",
    badges: [{ text: "Remote", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Swiggy",
    location: "Bengaluru",
    time: "4 days ago",
    salary: "₹16L - ₹24L PA",
    description:
      "Optimize delivery routes using Machine Learning and predictive analysis.",
    logoColor: "bg-[#FC8019]",
    logoText: "S",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 9,
    title: "Product Manager",
    company: "Groww",
    location: "Bengaluru",
    time: "4 days ago",
    salary: "₹25L - ₹35L PA",
    description:
      "Lead the mutual funds product line. Define roadmap and coordinate with engineering.",
    logoColor: "bg-[#00D09C]",
    logoText: "G",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 10,
    title: "iOS Developer",
    company: "Tata Neu",
    location: "Mumbai",
    time: "5 days ago",
    salary: "₹14L - ₹20L PA",
    description:
      "Develop and maintain the Super App ecosystem using Swift and SwiftUI.",
    logoColor: "bg-[#1E1E1E]",
    logoText: "T",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 11,
    title: "Android Engineer",
    company: "Dream11",
    location: "Mumbai",
    time: "5 days ago",
    salary: "₹18L - ₹28L PA",
    description: "Work on high-performance gaming UI using Kotlin and Compose.",
    logoColor: "bg-[#C41A1B]",
    logoText: "D",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 12,
    title: "QA Automation Engineer",
    company: "Postman",
    location: "Remote",
    time: "6 days ago",
    salary: "₹12L - ₹18L PA",
    description: "Write automated E2E tests using Cypress and Playwright.",
    logoColor: "bg-[#FF6C37]",
    logoText: "P",
    badges: [{ text: "Remote", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 13,
    title: "Cloud Security Analyst",
    company: "Paytm",
    location: "Noida",
    time: "1 week ago",
    salary: "₹10L - ₹15L PA",
    description:
      "Ensure compliance and secure cloud infrastructure against vulnerabilities.",
    logoColor: "bg-[#002970]",
    logoText: "P",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 14,
    title: "Content Strategist",
    company: "Unacademy",
    location: "Bengaluru",
    time: "1 week ago",
    salary: "₹8L - ₹12L PA",
    description:
      "Plan and execute content strategies for educational campaigns.",
    logoColor: "bg-[#08BD80]",
    logoText: "U",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 15,
    title: "Machine Learning Engineer",
    company: "Ola",
    location: "Bengaluru",
    time: "1 week ago",
    salary: "₹22L - ₹32L PA",
    description:
      "Work on computer vision for autonomous navigation and mapping.",
    logoColor: "bg-[#000000]",
    logoText: "O",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 16,
    title: "React Native Developer",
    company: "Myntra",
    location: "Bengaluru",
    time: "2 weeks ago",
    salary: "₹14L - ₹20L PA",
    description:
      "Build cross-platform fashion e-commerce features with smooth animations.",
    logoColor: "bg-[#F13AB1]",
    logoText: "M",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 17,
    title: "Site Reliability Engineer",
    company: "MakeMyTrip",
    location: "Gurugram",
    time: "2 weeks ago",
    salary: "₹16L - ₹24L PA",
    description:
      "Ensure 99.99% uptime for booking engines during holiday traffic surges.",
    logoColor: "bg-[#D92A2A]",
    logoText: "M",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 18,
    title: "Engineering Manager",
    company: "Razorpay",
    location: "Bengaluru",
    time: "2 weeks ago",
    salary: "₹40L - ₹60L PA",
    description:
      "Lead a team of 10+ engineers to scale the recurring payments system.",
    logoColor: "bg-[#0A2E5B]",
    logoText: "R",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 19,
    title: "Graphics Designer",
    company: "Canva India",
    location: "Remote",
    time: "3 weeks ago",
    salary: "₹9L - ₹14L PA",
    description:
      "Create stunning templates and marketing assets for global users.",
    logoColor: "bg-[#00C4CC]",
    logoText: "C",
    badges: [{ text: "Remote", style: "bg-blue-50 text-blue-600" }],
  },
  {
    id: 20,
    title: "Python Developer",
    company: "Delhivery",
    location: "Gurugram",
    time: "1 month ago",
    salary: "₹11L - ₹16L PA",
    description:
      "Write Python scripts for logistics algorithms and data parsing.",
    logoColor: "bg-[#E0262C]",
    logoText: "D",
    badges: [{ text: "Full Time", style: "bg-blue-50 text-blue-600" }],
  },
];

export default function JobListingContent() {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleJobsCount, setVisibleJobsCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const currentJobs = allJobs.slice(0, visibleJobsCount);
  const totalJobs = allJobs.length;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleJobsCount((prev) => prev + 10);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-8">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
        <p className="text-sm text-gray-500 font-medium px-2">
          Showing <span className="text-slate-900 font-bold">{currentJobs.length}</span> of <span className="text-slate-900 font-bold">{totalJobs}</span> jobs
        </p>
        <div className="flex items-center gap-3">
          <SortByFilter />
          <PerPageFilter />
        </div>
      </div>

      {/* 🚀 Main Job Cards List (Cleaned Up) */}
      <div className="flex flex-col gap-5">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} isMounted={isMounted} />
        ))}
      </div>

      {/* 🚀 Load More Section (Cleaned Up) */}
      <LoadMoreSection 
        currentCount={currentJobs.length} 
        totalCount={totalJobs} 
        onLoadMore={handleLoadMore} 
        isLoading={isLoading} 
      />
      
    </div>
  );
}