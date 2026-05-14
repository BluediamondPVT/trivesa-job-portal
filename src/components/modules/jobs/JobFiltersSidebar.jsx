// src/components/modules/JobFiltersSidebar.jsx
import { Search, MapPin, Briefcase, ChevronDown, Megaphone } from "lucide-react";

export default function JobFiltersSidebar() {
  return (
    <aside className="w-full lg:w-[320px] shrink-0 space-y-8">
      {/* Filters Container */}
      <div className="bg-[#f4f7fc] p-6 rounded-xl border border-gray-100">
        
        {/* Search by Keywords */}
        {/* <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Search by Keywords</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div> */}

        {/* Location & Radius */}
        {/* <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Location</label>
          <div className="relative mb-4">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
            <input 
              type="text" 
              placeholder="City or postcode" 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
       
       
        </div> */}

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-2">Category</label>
          <div className="relative cursor-pointer bg-white border border-gray-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Briefcase className="w-4 h-4" />
              <span>Choose a category</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Job Type (Checkboxes) */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Job type</label>
          <div className="space-y-3">
            {["Freelancer", "Full Time", "Part Time", "Temporary"].map((type, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date Posted (Radio) */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Date Posted</label>
          <div className="space-y-3">
            {["All", "Last Hour", "Last 24 Hour", "Last 7 Days", "Last 14 Days", "Last 30 Days"].map((date, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="date" className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600" defaultChecked={i === 0} />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{date}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-900 mb-3">Experience Level</label>
          <div className="space-y-3">
            {["Fresh", "1 Year", "2 Year", "3 Year", "4 Year"].map((exp, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{exp}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-3">Tags</label>
          <div className="flex flex-wrap gap-2">
            {["App", "Administrative", "Android", "Wordpress", "Design", "React"].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 hover:text-blue-600 hover:border-blue-300 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Mini Recruiting Banner */}
      <div className="bg-[#f4f7fc] p-6 rounded-xl border border-gray-100 flex flex-col items-start relative overflow-hidden">
        <h3 className="font-heading font-bold text-slate-900 mb-2">Recruiting?</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed relative z-10">
          Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.
        </p>
        <button className="bg-[#1a65d6] hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm transition-all relative z-10">
          Start Recruiting Now
        </button>
        <div className="absolute -bottom-4 -right-4 opacity-50">
           <Megaphone size={80} className="text-blue-200 -rotate-12" />
        </div>
      </div>
    </aside>
  );
}