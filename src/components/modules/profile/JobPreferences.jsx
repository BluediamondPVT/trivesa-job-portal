// src/components/modules/profile/JobPreferences.jsx
"use client";

import { useState } from "react";
import { Edit3 } from "lucide-react";

export default function JobPreferences({ preferences, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [prefsData, setPrefsData] = useState({
    currentCTC: preferences?.currentCTC || "",
    expectedCTC: preferences?.expectedCTC || "",
    noticePeriod: preferences?.noticePeriod || "",
    workMode: preferences?.workMode || "",
  });

  const handleSave = () => {
    onUpdate({ preferences: prefsData });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Job Preferences
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
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
              Current CTC
            </label>
            <input
              type="text"
              value={prefsData.currentCTC}
              onChange={(e) =>
                setPrefsData({ ...prefsData, currentCTC: e.target.value })
              }
              className="border border-gray-200 rounded-lg p-2.5 text-sm w-full outline-none focus:border-blue-500"
              placeholder="e.g. ₹8,00,000 PA"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
              Expected CTC
            </label>
            <input
              type="text"
              value={prefsData.expectedCTC}
              onChange={(e) =>
                setPrefsData({ ...prefsData, expectedCTC: e.target.value })
              }
              className="border border-gray-200 rounded-lg p-2.5 text-sm w-full outline-none focus:border-blue-500"
              placeholder="e.g. ₹12,00,000 PA"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                Notice Period
              </label>
              <select
                value={prefsData.noticePeriod}
                onChange={(e) =>
                  setPrefsData({ ...prefsData, noticePeriod: e.target.value })
                }
                className="border border-gray-200 rounded-lg p-2 text-sm w-full bg-white outline-none focus:border-blue-500"
              >
                <option value="Immediate">Immediate</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="60 Days+">60 Days+</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                Work Mode
              </label>
              <select
                value={prefsData.workMode}
                onChange={(e) =>
                  setPrefsData({ ...prefsData, workMode: e.target.value })
                }
                className="border border-gray-200 rounded-lg p-2 text-sm w-full bg-white outline-none focus:border-blue-500"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Save
            </button>
            <button
              onClick={() => {
                setPrefsData(preferences);
                setIsEditing(false);
              }}
              className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Current CTC</span>
            <span className="font-bold text-slate-800">
              {preferences?.currentCTC}
            </span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Expected CTC</span>
            <span className="font-bold text-emerald-600">
              {preferences?.expectedCTC}
            </span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Notice Period</span>
            <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              {preferences?.noticePeriod}
            </span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Work Mode</span>
            <span className="font-bold text-slate-800">
              {preferences?.workMode}
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}
