// src/components/modules/profile/ProfileEducation.jsx
"use client";

import { useState } from "react";
import {
  GraduationCap,
  Award,
  Edit3,
  Save,
  X,
  Plus,
  Trash2,
} from "lucide-react";

export default function ProfileEducation({ education, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localEdu, setLocalEdu] = useState(education || []);

  const handleSave = () => {
    onUpdate({ education: localEdu });
    setIsEditing(false);
  };

  const updateField = (id, field, value) => {
    setLocalEdu(
      localEdu.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    );
  };

  const addEducation = () => {
    const newId =
      localEdu.length > 0 ? Math.max(...localEdu.map((e) => e.id)) + 1 : 1;
    setLocalEdu([
      ...localEdu,
      { id: newId, degree: "", institution: "", year: "", grade: "" },
    ]);
  };

  const removeEducation = (id) => {
    setLocalEdu(localEdu.filter((edu) => edu.id !== id));
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#1864f4]" /> Education &
          Certifications
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
          {localEdu.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-slate-50 p-4 rounded-xl border border-gray-200 relative"
            >
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Education #{index + 1}
              </h4>
              <div className="grid grid-cols-1 gap-3 mb-3">
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateField(edu.id, "degree", e.target.value)
                  }
                  placeholder="Degree / Certification (e.g. B.Tech)"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) =>
                    updateField(edu.id, "institution", e.target.value)
                  }
                  placeholder="Institution Name"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={edu.year}
                  onChange={(e) => updateField(edu.id, "year", e.target.value)}
                  placeholder="Year (e.g. 2018-2022)"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
                <input
                  type="text"
                  value={edu.grade}
                  onChange={(e) => updateField(edu.id, "grade", e.target.value)}
                  placeholder="Grade / CGPA"
                  className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none"
                />
              </div>
            </div>
          ))}

          <button
            onClick={addEducation}
            className="w-full py-3 border-2 border-dashed border-blue-200 text-blue-600 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Education
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
                setLocalEdu(education);
                setIsEditing(false);
              }}
              className="bg-gray-100 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education?.map((edu) => (
            <div
              key={edu.id}
              className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow bg-white"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[#1864f4]" />
              </div>
              <h3 className="font-bold text-slate-900 leading-snug mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-2">
                {edu.institution}
              </p>
              <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-md">
                {edu.year} • {edu.grade}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
