// src/app/about-us/page.js
import AboutBreadcrumb from "@/components/modules/about/AboutBreadcrumb";
import AboutFeature from "@/components/modules/about/AboutFeature";
import MissionVision from "@/components/modules/about/MissionVision";
import {
  Target,
  Compass,
  Users,
  Sparkles,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <AboutBreadcrumb />

      {/* 📖 ABOUT CONTENT SECTION */}
      <AboutFeature />

      {/* 🎯 MISSION & VISION CARDS */}
      <MissionVision />
    </div>
  );
}
