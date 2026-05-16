// src/components/modules/companies/CompanyCard.jsx
import Link from "next/link";
import { Star, Briefcase, MapPin, Users, ExternalLink } from "lucide-react";

export default function CompanyCard({ company }) {
  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-6">
        <Link href={`/companies/${company.id}`} className="shrink-0">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-3xl text-white shadow-sm hover:scale-105 transition-transform ${company.logoColor}`}
          >
            {company.logoText}
          </div>
        </Link>
        <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
          {company.openJobs} Open Jobs
        </span>
      </div>

      {/* Company Info */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Link href={`/companies/${company.id}`}>
            <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer">
              {company.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 bg-amber-100 px-1.5 py-0.5 rounded text-amber-700 text-[10px] font-bold">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            {company.rating}
          </div>
        </div>

        {/* Meta details */}
        <div className="flex flex-col gap-2 mt-3 mb-4 text-[13px] text-gray-500 font-medium">
          <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-400" /> {company.industry}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" /> {company.location}
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" /> {company.employees}{" "}
            Employees
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6 flex-1">
        {company.description}
      </p>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between z-10">
        <div className="flex flex-wrap gap-2">
          {company.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold text-slate-600 bg-gray-100 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/companies/${company.id}`}
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all"
          title="View Company Profile"
        >
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Decorative BG element */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
        <Briefcase size={120} />
      </div>
    </div>
  );
}
