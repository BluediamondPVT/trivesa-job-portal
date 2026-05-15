// src/components/modules/FeaturedJobs.jsx
import { Bookmark, Briefcase, MapPin, Clock, Banknote } from "lucide-react";

// Dummy data exact teri image wala (Backend API ke liye structure ready hai)
const jobs = [
  {
    id: 1,
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#1E293B]", // Dark Slate
    logoText: "S",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  },
  {
    id: 2,
    title: "Recruiting Coordinator",
    company: "Catalyst",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#4F46E5]", // Indigo
    logoText: "C",
    badges: [
      { text: "Freelancer", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  },
  {
    id: 3,
    title: "Product Manager, Studio",
    company: "Invision",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#F43F5E]", // Rose
    logoText: "in",
    badges: [
      { text: "Part Time", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  },
  {
    id: 4,
    title: "Senior Product Designer",
    company: "Upwork",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#22C55E]", // Green
    logoText: "up",
    badges: [
      { text: "Temporary", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  },
  {
    id: 5,
    title: "Senior Full Stack Engineer, Creator Success",
    company: "Medium",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-black",
    logoText: "M",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  },
  {
    id: 6,
    title: "Software Engineer (Android), Libraries",
    company: "Figma",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-white border border-gray-200 text-black",
    logoText: "F",
    badges: [
      { text: "Freelancer", style: "bg-blue-50 text-blue-500" },
      { text: "Private", style: "bg-green-50 text-green-500" },
      { text: "Urgent", style: "bg-amber-50 text-amber-500" },
    ]
  }
];

export default function FeaturedJobs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-white">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Featured Jobs
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-medium">
          Know your worth and find the job that qualify your life
        </p>
      </div>

      {/* Grid Layout for Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              
              {/* Company Logo Box */}
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-xl text-white shrink-0 ${job.logoColor}`}>
                {job.logoText}
              </div>

              {/* Job Details */}
              <div className="flex-1 w-full">
                
                {/* Title & Bookmark */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg cursor-pointer font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Bookmark className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Meta Info (Company, Location, Time, Salary) */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-gray-500 mb-4 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" strokeWidth={2} /> {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" strokeWidth={2} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" strokeWidth={2} /> {job.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Banknote className="w-4 h-4" strokeWidth={2} /> {job.salary}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {job.badges.map((badge, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${badge.style}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#1a65d6] hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all text-sm">
          Load More Listing
        </button>
      </div>

    </section>
  );
}