// src/app/jobs/page.js
import JobFiltersSidebar from "@/components/modules/jobs/JobFiltersSidebar";
import JobListingContent from "@/components/modules/jobs/JobListingContent";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Banner (Matches the very top of your image) */}
      <div className="w-full bg-[#f4f7fc] py-16 flex flex-col items-center justify-center border-b border-gray-100">
        <h1 className="font-heading text-3xl font-bold text-slate-900 mb-2">Find Jobs</h1>
        <p className="text-sm text-gray-500 font-medium">Home / Jobs</p>
      </div>

      {/* Main 2-Column Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Sidebar */}
        <JobFiltersSidebar />

        {/* Right Job Listing */}
        <JobListingContent />

      </main>
    </div>
  );
}