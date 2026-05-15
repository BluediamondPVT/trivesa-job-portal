// src/app/page.js
import HeroSection from "@/components/modules/home/HeroSection";
import FeaturedJobs from "@/components/modules/home/FeaturedJobs";
import PopularCategories from "@/components/modules/home/PopularCategories";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 flex flex-col">
      {/* 🔴 BACKGROUND GLOWING ORBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/30 blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-indigo-400/20 blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-300/20 blur-[120px] mix-blend-multiply pointer-events-none"></div>

      {/* 🚀 Main Hero Section (Lamp UI) */}
      <HeroSection />

      {/* Other Sections */}
      <PopularCategories />
      <FeaturedJobs />
    </div>
  );
}
