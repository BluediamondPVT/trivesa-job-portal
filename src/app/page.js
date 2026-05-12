// src/app/page.js
import { Search, MapPin } from "lucide-react";
import FeaturedJobs from "@/components/modules/FeaturedJobs";
import PopularCategories from "@/components/modules/PopularCategories";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 flex flex-col">
      
      {/* 🔴 BACKGROUND GLOWING ORBS (Ye glass effect ko pop karenge) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/30 blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-indigo-400/20 blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-300/20 blur-[120px] mix-blend-multiply pointer-events-none"></div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center flex-grow">
        
        {/* Glass Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-blue-800 text-sm font-semibold mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Over 10,000+ jobs available today
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight max-w-5xl leading-[1.05] mb-6">
          Find the job that fits your <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            life and passion.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-14 font-medium">
          Discover remote, part-time, or full-time opportunities at top-tier companies tailored to your expertise.
        </p>

        {/* 🍏 APPLE STYLE GLASS SEARCH BAR */}
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-2xl border border-white/50 p-2.5 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-2">
          
          <div className="flex-1 flex items-center px-4 py-2 gap-3 bg-white/40 rounded-2xl md:rounded-l-[1.5rem] md:rounded-r-none">
            <Search className="w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Job title, keyword, or company" 
              className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-500 font-medium"
            />
          </div>

          <div className="flex-1 flex items-center px-4 py-2 gap-3 bg-white/40 rounded-2xl md:rounded-none">
            <MapPin className="w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="City, state, or remote" 
              className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-500 font-medium"
            />
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl md:rounded-r-[1.5rem] transition-all w-full md:w-auto shadow-lg">
            Search
          </button>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-3 mt-10 text-sm text-slate-600 flex-wrap justify-center font-medium">
          <span>Popular Searches:</span>
          {["Frontend Developer", "UI/UX Designer", "MERN Stack", "Next.js"].map((tag) => (
            <span key={tag} className="px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 hover:bg-white/60 hover:shadow-sm cursor-pointer transition-all">
              {tag}
            </span>
          ))}
        </div>

      </main>
    <PopularCategories />
    <FeaturedJobs />

    </div>
  );
}