// src/components/modules/companies/CompanyListing.jsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { companiesData } from "./companiesData";
import CompanySearch from "./CompanySearch";
import CompanyCard from "./CompanyCard";
import CompanyPagination from "./CompanyPagination";

export default function CompanyListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Filter Logic
  const filteredCompanies = companiesData.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  
  const currentCompanies = filteredCompanies.slice(0, visibleCount);
  const totalCompanies = filteredCompanies.length;

  // Search Handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(6); // Reset pagination on search
  };

  // Load More Handler
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <CompanySearch
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* Empty State */}
      {currentCompanies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            No companies found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search to find what you&apos;re looking for.
          </p>
        </div>
      )}

      {/* Pagination */}
      <CompanyPagination
        currentLength={currentCompanies.length}
        totalLength={totalCompanies}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}
