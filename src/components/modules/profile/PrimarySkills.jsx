// src/components/modules/profile/PrimarySkills.jsx
"use client";

import { useState } from "react";
import { Edit3 } from "lucide-react";

export default function PrimarySkills({ skills, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [skillsText, setSkillsText] = useState(skills?.join(", ") || "");

  const handleSave = () => {
    const skillsArray = skillsText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");
    onUpdate({ skills: skillsArray });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Primary Skills
        </h3>
        {!isEditing && (
          <Edit3
            onClick={() => setIsEditing(true)}
            className="w-4 h-4 text-slate-400 cursor-pointer hover:text-[#1864f4]"
          />
        )}
      </div>
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-gray-500 mb-[-4px]">
            Separate skills with a comma (,)
          </p>
          <textarea
            value={skillsText}
            onChange={(e) => setSkillsText(e.target.value)}
            rows={3}
            className="border border-gray-200 rounded-lg p-2.5 text-sm w-full outline-none focus:border-blue-500"
            placeholder="e.g. React, Node.js, Sales"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Save
            </button>
            <button
              onClick={() => {
                setSkillsText(skills.join(", "));
                setIsEditing(false);
              }}
              className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-lg text-[13px] font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
