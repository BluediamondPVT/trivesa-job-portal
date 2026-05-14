// src/components/modules/jobs/PerPageFilter.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function PerPageFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const dropdownRef = useRef(null);

  const options = ["All", "20 per page", "25 per page", "30 per page"];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 bg-[#f4f7fc] border border-gray-200 rounded-lg px-4 py-2 cursor-pointer text-[13px] font-medium text-slate-600 min-w-[120px] hover:border-gray-300 transition-colors"
      >
        <span>{selected}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-[#f4f7fc] border border-gray-400 shadow-lg z-50 py-1">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-[13px] cursor-pointer transition-colors
                ${selected === option 
                  ? "bg-[#1a65d6] text-white" 
                  : "text-slate-600 hover:bg-[#1a65d6] hover:text-white"
                }
              `}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}