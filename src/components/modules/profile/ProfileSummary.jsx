// src/components/modules/profile/ProfileSummary.jsx
"use client";

import { useState } from "react";
import { FileText, Edit3, Save, X } from "lucide-react";

export default function ProfileSummary({ about, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localAbout, setLocalAbout] = useState(about);

  const handleSave = () => {
    onUpdate({ about: localAbout });
    setIsEditing(false);
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#1864f4]" /> Professional Summary
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-[#1864f4] hover:bg-blue-50 p-2 rounded-full transition-colors"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-3">
          <textarea
            value={localAbout}
            onChange={(e) => setLocalAbout(e.target.value)}
            rows={4}
            className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500 text-slate-600"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-slate-600 leading-relaxed text-[15px]">{about}</p>
      )}
    </section>
  );
}
