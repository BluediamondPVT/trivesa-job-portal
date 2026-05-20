// src/components/modules/profile/ProfileHero.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Edit3, Download, Save, X } from "lucide-react";

export default function ProfileHero({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localData, setLocalData] = useState({
    name: data.name,
    headline: data.headline,
    location: data.location,
  });

  const handleSave = () => {
    onUpdate({ ...data, ...localData });
    setIsEditing(false);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div
          className="w-full h-48 sm:h-64 rounded-b-3xl relative bg-cover bg-center"
          style={{ backgroundImage: `url(${data.coverImage})` }}
        >
          <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full transition-all">
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 sm:px-8 pt-9 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-16 sm:-mt-20 mb-6 gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 w-full sm:w-auto text-center sm:text-left">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white p-1.5 rounded-full shadow-lg shrink-0">
                <div className="w-full h-full bg-[#1864f4] rounded-full flex items-center justify-center border-4 border-white shadow-inner relative overflow-hidden">
                  <Image
                    src={data.avatar}
                    alt="Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
              </div>

              <div className="mb-2 w-full">
                {isEditing ? (
                  <div className="flex flex-col gap-2 mt-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <input
                      type="text"
                      value={localData.name}
                      onChange={(e) =>
                        setLocalData({ ...localData, name: e.target.value })
                      }
                      className="font-heading text-2xl font-bold border-b border-gray-200 outline-none p-1"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      value={localData.headline}
                      onChange={(e) =>
                        setLocalData({ ...localData, headline: e.target.value })
                      }
                      className="text-slate-600 font-medium border-b border-gray-200 outline-none p-1 w-full"
                      placeholder="Headline"
                    />
                    <input
                      type="text"
                      value={localData.location}
                      onChange={(e) =>
                        setLocalData({ ...localData, location: e.target.value })
                      }
                      className="text-slate-500 text-sm border-b border-gray-200 outline-none p-1"
                      placeholder="Location"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1"
                      >
                        <Save className="w-4 h-4" /> Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md text-sm flex items-center gap-1"
                      >
                        <X className="w-4 h-4" /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {data.name}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 font-medium mb-3">
                      {data.headline}
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {data.location}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {!isEditing && (
              <div className="flex w-full sm:w-auto items-center gap-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 sm:flex-none bg-white border border-gray-200 text-slate-700 hover:bg-gray-50 font-semibold py-2.5 px-5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Edit3 className="w-4 h-4" /> Edit Profile
                </button>
                <button className="flex-1 sm:flex-none bg-[#1864f4] hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download CV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
