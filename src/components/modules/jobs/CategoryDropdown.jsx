// src/components/modules/jobs/CategoryDropdown.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Briefcase, ChevronDown } from "lucide-react";

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose a category");
  const dropdownRef = useRef(null);

  // Categories ki list (Backend API banne ke baad ye wahan se aayegi)
  const categories = [
    "Choose a category",
    "Development",
    "Design",
    "Marketing",
    "Customer Service",
    "Accounting / Finance",
    "Project Management",
  ];

  // Bahar click karne pe close hone ka logic
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
    <div className="mb-6 relative" ref={dropdownRef}>
      <label className="block text-sm font-bold text-slate-900 mb-2">
        Category
      </label>

      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative cursor-pointer bg-white border rounded-lg px-4 py-2.5 flex justify-between items-center transition-all duration-200 ${isOpen ? "border-blue-500 ring-4 ring-blue-500/10" : "border-gray-200 hover:border-gray-300"}`}
      >
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Briefcase
            className={`w-4 h-4 ${selected !== "Choose a category" ? "text-blue-500" : ""}`}
          />
          <span
            className={
              selected !== "Choose a category"
                ? "text-slate-900 font-medium"
                : ""
            }
          >
            {selected}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-xl rounded-lg z-50 overflow-hidden py-1 max-h-60 overflow-y-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(cat);
                setIsOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors
                ${
                  selected === cat
                    ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600"
                    : "text-slate-600 hover:bg-gray-50 hover:text-slate-900 border-l-2 border-transparent"
                }
              `}
            >
              {cat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
