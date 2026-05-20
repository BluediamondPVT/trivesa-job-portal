// src/components/modules/profile/Languages.jsx
"use client";

import { useState } from "react";
import { Edit3, Plus, Trash2 } from "lucide-react";

export default function Languages({ languages, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localLang, setLocalLang] = useState(languages || []);

  const handleSave = () => {
    onUpdate({ languages: localLang });
    setIsEditing(false);
  };

  const updateLanguage = (index, field, value) => {
    const newLangs = [...localLang];
    newLangs[index][field] = value;
    setLocalLang(newLangs);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Languages
        </h3>
        {!isEditing && (
          <Edit3
            onClick={() => setIsEditing(true)}
            className="w-4 h-4 text-slate-400 cursor-pointer hover:text-[#1864f4]"
          />
        )}
      </div>
      {isEditing ? (
        <div className="flex flex-col gap-4">
          {localLang.map((lang, index) => (
            <div key={index} className="flex items-center gap-2 relative">
              <input
                type="text"
                value={lang.name}
                onChange={(e) => updateLanguage(index, "name", e.target.value)}
                placeholder="Language"
                className="border border-gray-200 rounded-lg p-2 text-sm w-full outline-none focus:border-blue-500"
              />
              <select
                value={lang.level}
                onChange={(e) => updateLanguage(index, "level", e.target.value)}
                className="border border-gray-200 rounded-lg p-2 text-sm bg-white outline-none focus:border-blue-500 min-w-[100px]"
              >
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
              <button
                onClick={() =>
                  setLocalLang(localLang.filter((_, i) => i !== index))
                }
                className="text-red-500 hover:bg-red-50 p-1.5 rounded-md"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              setLocalLang([...localLang, { name: "", level: "Basic" }])
            }
            className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:underline w-fit"
          >
            <Plus className="w-4 h-4" /> Add Language
          </button>
          <div className="flex gap-2 mt-2 pt-3 border-t border-gray-100">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Save
            </button>
            <button
              onClick={() => {
                setLocalLang(languages);
                setIsEditing(false);
              }}
              className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {languages?.map((lang, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-slate-50 border border-gray-100 px-3 py-2.5 rounded-xl"
            >
              <span className="text-sm font-bold text-slate-700">
                {lang.name}
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-white border border-gray-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
