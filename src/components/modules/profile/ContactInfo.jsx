// src/components/modules/profile/ContactInfo.jsx
"use client";

import { useState } from "react";
import { Mail, Phone, Edit3 } from "lucide-react";
import Link from "next/link";

// Custom Icons
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22"></path>
    <line x1="9" y1="20" x2="1" y2="20"></line>
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactInfo({ email, phone, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [contactData, setContactData] = useState({ email, phone });

  const handleSave = () => {
    onUpdate({ email: contactData.email, phone: contactData.phone });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Contact Info
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
          <input
            type="email"
            value={contactData.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
            className="border border-gray-200 rounded-lg p-2.5 text-sm w-full outline-none focus:border-blue-500"
            placeholder="Email"
          />
          <input
            type="tel"
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            className="border border-gray-200 rounded-lg p-2.5 text-sm w-full outline-none focus:border-blue-500"
            placeholder="Phone"
          />
          <div className="flex gap-2 mt-1">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-bold flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-slate-600">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#1864f4]" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-slate-400 uppercase">
                Email
              </p>
              <p className="text-sm font-medium truncate">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#1864f4]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">
                Phone
              </p>
              <p className="text-sm font-medium">{phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-600 mt-2">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 flex items-center justify-center transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-700" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
