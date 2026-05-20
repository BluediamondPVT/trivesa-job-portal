// src/components/modules/profile/ProfileSidebar.jsx
"use client";

import ResumeUpload from "./ResumeUpload";
import ContactInfo from "./ContactInfo";
import JobPreferences from "./JobPreferences";
import PrimarySkills from "./PrimarySkills";
import Languages from "./Languages";

export default function ProfileSidebar({ data, onUpdate }) {
  return (
    <div className="flex flex-col gap-6">
      <ResumeUpload resumeName={data.resumeName} onUpdate={onUpdate} />
      <ContactInfo email={data.email} phone={data.phone} onUpdate={onUpdate} />
      <JobPreferences preferences={data.preferences} onUpdate={onUpdate} />
      <PrimarySkills skills={data.skills} onUpdate={onUpdate} />
      <Languages languages={data.languages} onUpdate={onUpdate} />
    </div>
  );
}
