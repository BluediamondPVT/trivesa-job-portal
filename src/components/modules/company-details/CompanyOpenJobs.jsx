// src/components/modules/company-details/CompanyOpenJobs.jsx
"use client";

import { useState, useEffect } from "react";
import JobCard from "@/components/modules/jobs/JobCard"; // Puraane banaye hue job card ka reuse!

export default function CompanyOpenJobs({ companyName, openJobsList }) {
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix for bookmarks inside JobCard
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Open Roles at {companyName}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Join our team and help us build the future.
          </p>
        </div>
        <span className="hidden sm:inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold">
          {openJobsList.length} Jobs Available
        </span>
      </div>

      {/* Grid mapping reusing your compact JobCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {openJobsList.map((job) => (
          <JobCard key={job.id} job={job} isMounted={isMounted} />
        ))}
      </div>
    </div>
  );
}
