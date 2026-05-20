// src/components/modules/profile/ResumeUpload.jsx
"use client";

import { useState, useRef } from "react";
import { FileText, UploadCloud } from "lucide-react";

export default function ResumeUpload({ resumeName, onUpdate }) {
  const fileInputRef = useRef(null);
  const [localResumeName, setLocalResumeName] = useState(
    resumeName || "Altaf_Siddiqui_Resume.pdf",
  );

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalResumeName(file.name);
      onUpdate({ resumeName: file.name });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#1864f4]"></div>
      <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
        Resume / CV
      </h3>
      <div className="border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <FileText className="w-8 h-8 text-blue-500 mb-3" />
        <p className="text-sm font-bold text-slate-800 mb-1 max-w-full truncate px-2">
          {localResumeName}
        </p>
        <p className="text-xs text-slate-500 mb-4">PDF, DOC, DOCX (Max. 5MB)</p>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          ref={fileInputRef}
          onChange={handleResumeUpload}
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-white border border-gray-200 text-slate-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
        >
          <UploadCloud className="w-4 h-4 text-[#1864f4]" /> Update Resume
        </button>
      </div>
    </div>
  );
}
