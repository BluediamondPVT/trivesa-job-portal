// src/components/modules/profile/ProfileExperience.jsx
"use client";

import { useState } from "react";
import {
  Briefcase,
  CalendarCheck,
  Edit3,
  Save,
  X,
  Plus,
  Trash2,
} from "lucide-react";

export default function ProfileExperience({ experience, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localExp, setLocalExp] = useState(experience || []);

  const handleSave = () => {
    onUpdate({ experience: localExp });
    setIsEditing(false);
  };

  const updateField = (id, field, value) => {
    setLocalExp(
      localExp.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
  };

  const addExperience = () => {
    const newId =
      localExp.length > 0 ? Math.max(...localExp.map((e) => e.id)) + 1 : 1;
    setLocalExp([
      ...localExp,
      { id: newId, role: "", company: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (id) => {
    setLocalExp(localExp.filter((exp) => exp.id !== id));
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#1864f4]" /> Work Experience
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
        <div className="flex flex-col gap-6">
          {localExp.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-slate-50 p-4 rounded-xl border border-gray-200 relative"
            >
              <button
                onClick={() => removeExperience(exp.id)}
                className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Experience #{index + 1}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => updateField(exp.id, "role", e.target.value)}
                  placeholder="Job Role (e.g. Frontend Developer)"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    updateField(exp.id, "company", e.target.value)
                  }
                  placeholder="Company Name"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
              </div>
              <input
                type="text"
                value={exp.duration}
                onChange={(e) =>
                  updateField(exp.id, "duration", e.target.value)
                }
                placeholder="Duration (e.g. Jan 2022 - Present)"
                className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none w-full mb-3"
              />
              <textarea
                value={exp.description}
                onChange={(e) =>
                  updateField(exp.id, "description", e.target.value)
                }
                rows={3}
                placeholder="Key responsibilities and achievements..."
                className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none w-full"
              />
            </div>
          ))}

          <button
            onClick={addExperience}
            className="w-full py-3 border-2 border-dashed border-blue-200 text-blue-600 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Another Experience
          </button>

          <div className="flex gap-2 mt-2 pt-4 border-t border-gray-100">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
            <button
              onClick={() => {
                setLocalExp(experience);
                setIsEditing(false);
              }}
              className="bg-gray-100 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 relative">
          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-100 hidden sm:block"></div>

          {experience?.map((exp) => (
            <div key={exp.id} className="relative pl-0 sm:pl-10">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white bg-blue-100 hidden sm:flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1864f4]"></div>
              </div>

              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-5 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                <p className="text-[#1864f4] font-medium text-sm mb-1">
                  {exp.company}
                </p>
                <p className="text-slate-500 text-sm font-medium mb-3 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4" /> {exp.duration}
                </p>
                <p className="text-slate-600 text-[14px] leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
