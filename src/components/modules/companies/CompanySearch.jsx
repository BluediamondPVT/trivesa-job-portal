// src/components/modules/companies/CompanySearch.jsx
import { Search } from "lucide-react";

export default function CompanySearch({ searchTerm, onSearchChange }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center w-full">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search companies by name or industry..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <select className="w-full md:w-auto bg-gray-50 border border-transparent text-gray-600 text-sm rounded-xl px-4 py-3 focus:outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer">
          <option value="">All Industries</option>
          <option value="tech">Technology</option>
          <option value="fintech">FinTech</option>
          <option value="ecommerce">E-Commerce</option>
        </select>
      </div>
    </div>
  );
}
