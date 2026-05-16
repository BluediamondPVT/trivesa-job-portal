// src/components/modules/company-details/CompanyOverview.jsx
import { MapPin, Users, Globe, Briefcase, Star } from "lucide-react";

export default function CompanyOverview({ company }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-12 md:-mt-16 mb-12">
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md shadow-slate-200/50 border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Overlapping Logo */}
        <div
          className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center font-heading font-bold text-3xl md:text-4xl text-white shadow-xl border-4 border-white shrink-0 ${company.logoColor}`}
        >
          {company.logoText}
        </div>

        {/* Company Info */}
        <div className="flex-1 mt-1 md:mt-2">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
              {company.name}
            </h1>
            <div className="flex items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-md text-amber-700 text-[11px] font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500" /> {company.rating}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-[13px] md:text-[14px] text-gray-500 font-medium mb-6">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-gray-400" /> {company.industry}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" /> {company.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gray-400" /> {company.employees}{" "}
              Employees
            </span>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 hover:underline"
            >
              <Globe className="w-4 h-4" /> Website
            </a>
          </div>

          {/* Overview Text */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 font-heading">
              Company Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-[14px] md:text-[15px]">
              {company.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
