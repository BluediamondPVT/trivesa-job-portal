// src/app/profile/page.jsx
"use client";

import { useState } from "react";
import { initialCandidateData } from "@/components/modules/profile/profileData";
import ProfileHero from "@/components/modules/profile/ProfileHero";
import ProfileSummary from "@/components/modules/profile/ProfileSummary";
import ProfileSidebar from "@/components/modules/profile/ProfileSidebar";

// 🔥 Ye dono naye imports add kar diye
import ProfileExperience from "@/components/modules/profile/ProfileExperience";
import ProfileEducation from "@/components/modules/profile/ProfileEducation";

export default function CandidateProfile() {
  const [candidate, setCandidate] = useState(initialCandidateData);

  const handleUpdate = (updatedFields) => {
    setCandidate((prev) => ({ ...prev, ...updatedFields }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* HERO SECTION */}
      <ProfileHero data={candidate} onUpdate={handleUpdate} />

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 🟡 LEFT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <ProfileSummary about={candidate.about} onUpdate={handleUpdate} />
          
          {/* 🔥 DUMMY BOX HATA KAR ASLI COMPONENTS LAGA DIYE */}
          <ProfileExperience experience={candidate.experience} onUpdate={handleUpdate} />
          <ProfileEducation education={candidate.education} onUpdate={handleUpdate} />
          
        </div>

        {/* 🟡 RIGHT COLUMN (Sidebar) */}
        <ProfileSidebar data={candidate} onUpdate={handleUpdate} />

      </div>
    </div>
  );
}