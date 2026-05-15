// src/components/modules/companies/CompanyListing.jsx
"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Star,
  ExternalLink,
  Users,
  Loader2,
} from "lucide-react"; // 🔥 Loader2 import kiya
import Link from "next/link";

// 🏢 18 Top Indian Companies Data
const companies = [
  {
    id: 1,
    name: "Flipkart",
    industry: "E-Commerce",
    location: "Bengaluru, India",
    employees: "10,000+",
    rating: 4.5,
    openJobs: 42,
    description:
      "India's leading e-commerce marketplace offering over 30 million products across 70+ categories.",
    logoColor: "bg-[#2874F0]",
    logoText: "F",
    tags: ["Retail", "Tech", "Logistics"],
  },
  {
    id: 2,
    name: "Zomato",
    industry: "Food Tech",
    location: "Gurugram, India",
    employees: "5,000+",
    rating: 4.3,
    openJobs: 18,
    description:
      "Connecting technology to food. Discover the best food and drinks in your city.",
    logoColor: "bg-[#E23744]",
    logoText: "Z",
    tags: ["Delivery", "Startup", "B2C"],
  },
  {
    id: 3,
    name: "Cred",
    industry: "FinTech",
    location: "Bengaluru, India",
    employees: "1,000+",
    rating: 4.7,
    openJobs: 12,
    description:
      "A members-only club that rewards individuals for their timely credit card bill payments.",
    logoColor: "bg-black",
    logoText: "C",
    tags: ["Finance", "Premium", "Design"],
  },
  {
    id: 4,
    name: "Reliance Jio",
    industry: "Telecommunications",
    location: "Mumbai, India",
    employees: "50,000+",
    rating: 4.1,
    openJobs: 156,
    description:
      "Transforming India with a completely digital ecosystem and 5G technology.",
    logoColor: "bg-[#0A2885]",
    logoText: "J",
    tags: ["Telecom", "Enterprise", "5G"],
  },
  {
    id: 5,
    name: "Nykaa",
    industry: "Beauty & Fashion",
    location: "Mumbai, India",
    employees: "3,000+",
    rating: 4.4,
    openJobs: 24,
    description:
      "India's largest omnichannel beauty destination and cosmetics brand.",
    logoColor: "bg-[#FC2779]",
    logoText: "N",
    tags: ["Cosmetics", "Retail", "Lifestyle"],
  },
  {
    id: 6,
    name: "Groww",
    industry: "Investment Tech",
    location: "Bengaluru, India",
    employees: "2,000+",
    rating: 4.6,
    openJobs: 35,
    description:
      "Making investing simple, accessible, and transparent for millions of Indians.",
    logoColor: "bg-[#00D09C]",
    logoText: "G",
    tags: ["Stock Market", "FinTech", "App"],
  },
  // 🔥 New 12 Companies Added Below
  {
    id: 7,
    name: "TCS",
    industry: "IT Services",
    location: "Mumbai, India",
    employees: "600,000+",
    rating: 4.0,
    openJobs: 320,
    description:
      "Tata Consultancy Services is a global leader in IT services, consulting, and business solutions.",
    logoColor: "bg-[#0A3066]",
    logoText: "T",
    tags: ["IT", "Consulting", "Enterprise"],
  },
  {
    id: 8,
    name: "Infosys",
    industry: "IT Services",
    location: "Bengaluru, India",
    employees: "300,000+",
    rating: 4.1,
    openJobs: 210,
    description:
      "A global leader in next-generation digital services and consulting.",
    logoColor: "bg-[#007CC3]",
    logoText: "I",
    tags: ["Software", "Tech", "Global"],
  },
  {
    id: 9,
    name: "Swiggy",
    industry: "Food Tech",
    location: "Bengaluru, India",
    employees: "4,000+",
    rating: 4.2,
    openJobs: 45,
    description:
      "India's leading on-demand delivery platform with a tech-first approach to logistics.",
    logoColor: "bg-[#FC8019]",
    logoText: "S",
    tags: ["Delivery", "Logistics", "Consumer"],
  },
  {
    id: 10,
    name: "Paytm",
    industry: "FinTech",
    location: "Noida, India",
    employees: "10,000+",
    rating: 3.9,
    openJobs: 80,
    description:
      "India's leading financial services company that offers full-stack payments & financial solutions.",
    logoColor: "bg-[#002970]",
    logoText: "P",
    tags: ["Payments", "Banking", "Mobile"],
  },
  {
    id: 11,
    name: "Zerodha",
    industry: "FinTech",
    location: "Bengaluru, India",
    employees: "1,200+",
    rating: 4.8,
    openJobs: 8,
    description:
      "India's biggest stock broker offering the lowest, cheapest brokerage rates.",
    logoColor: "bg-[#387ED1]",
    logoText: "Z",
    tags: ["Trading", "Finance", "B2C"],
  },
  {
    id: 12,
    name: "Razorpay",
    industry: "FinTech",
    location: "Bengaluru, India",
    employees: "3,000+",
    rating: 4.5,
    openJobs: 55,
    description:
      "The only payments solution in India that allows businesses to accept, process and disburse payments.",
    logoColor: "bg-[#0A2E5B]",
    logoText: "R",
    tags: ["B2B", "Payments", "API"],
  },
  {
    id: 13,
    name: "Ola",
    industry: "Mobility & EV",
    location: "Bengaluru, India",
    employees: "7,000+",
    rating: 4.0,
    openJobs: 65,
    description:
      "Integrating city transportation for customers and drivers onto a mobile technology platform.",
    logoColor: "bg-[#000000]",
    logoText: "O",
    tags: ["Transport", "EV", "Tech"],
  },
  {
    id: 14,
    name: "MakeMyTrip",
    industry: "Travel Tech",
    location: "Gurugram, India",
    employees: "3,500+",
    rating: 4.2,
    openJobs: 30,
    description:
      "India's leading online travel company providing a great customer experience.",
    logoColor: "bg-[#D92A2A]",
    logoText: "M",
    tags: ["Travel", "E-commerce", "Flights"],
  },
  {
    id: 15,
    name: "Dream11",
    industry: "Gaming",
    location: "Mumbai, India",
    employees: "1,500+",
    rating: 4.6,
    openJobs: 40,
    description:
      "India's biggest fantasy sports platform with over 150 million users.",
    logoColor: "bg-[#C41A1B]",
    logoText: "D",
    tags: ["Sports", "Fantasy", "App"],
  },
  {
    id: 16,
    name: "Upstox",
    industry: "FinTech",
    location: "Mumbai, India",
    employees: "1,000+",
    rating: 4.3,
    openJobs: 25,
    description:
      "Making financial investing easy, equitable, and accessible to all Indian investors.",
    logoColor: "bg-[#5E32C4]",
    logoText: "U",
    tags: ["Investment", "Trading", "Tech"],
  },
  {
    id: 17,
    name: "PolicyBazaar",
    industry: "InsurTech",
    location: "Gurugram, India",
    employees: "5,000+",
    rating: 4.1,
    openJobs: 50,
    description:
      "India's foremost insurance aggregator and a leading financial technology platform.",
    logoColor: "bg-[#0065F2]",
    logoText: "P",
    tags: ["Insurance", "Aggregator", "Finance"],
  },
  {
    id: 18,
    name: "Wipro",
    industry: "IT Services",
    location: "Bengaluru, India",
    employees: "250,000+",
    rating: 3.9,
    openJobs: 180,
    description:
      "A leading global information technology, consulting and business process services company.",
    logoColor: "bg-[#000000]",
    logoText: "W",
    tags: ["IT", "Consulting", "BPO"],
  },
];

export default function CompanyListing() {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 Pagination States
  const [visibleCount, setVisibleCount] = useState(6); // Default 6 companies
  const [isLoading, setIsLoading] = useState(false);

  // Filter Logic (Search text ke base par filter karega)
  const filteredCompanies = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Slice Logic for Pagination
  const currentCompanies = filteredCompanies.slice(0, visibleCount);
  const totalCompanies = filteredCompanies.length;

  // Load More Handler
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6); // Agle 6 load karega
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 🔍 Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center w-full">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search companies by name or industry..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(6); // Search karne pe wapas page 1 pe aa jayega
            }}
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

      {/* 🏢 Companies Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCompanies.map((company) => (
          <div
            key={company.id}
            className="group flex flex-col bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-6">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-3xl text-white shadow-sm ${company.logoColor}`}
              >
                {company.logoText}
              </div>
              <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                {company.openJobs} Open Jobs
              </span>
            </div>

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <div className="flex items-center gap-1 bg-amber-100 px-1.5 py-0.5 rounded text-amber-700 text-[10px] font-bold">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {company.rating}
                </div>
              </div>

              {/* Meta details */}
              <div className="flex flex-col gap-2 mt-3 mb-4 text-[13px] text-gray-500 font-medium">
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-400" />{" "}
                  {company.industry}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />{" "}
                  {company.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />{" "}
                  {company.employees} Employees
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

            {/* Decorative subtle background element */}
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <Briefcase size={120} />
            </div>
          </div>
        ))}
      </div>

      {/* 🔴 Empty State for Search */}
      {currentCompanies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            No companies found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search to find what you're looking for.
          </p>
        </div>
      )}

      {/* 🔥 Load More Button Section */}
      {currentCompanies.length > 0 && (
        <div className="flex flex-col items-center justify-center mt-6 mb-16 space-y-5">
          <p className="text-sm text-gray-500 font-medium">
            You've viewed {currentCompanies.length} of {totalCompanies}{" "}
            companies
          </p>

          {/* Progress Bar */}
          <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(currentCompanies.length / totalCompanies) * 100}%`,
              }}
            ></div>
          </div>

          {/* Load More Button */}
          {currentCompanies.length < totalCompanies && (
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="mt-4 px-8 py-3 bg-white border border-gray-200 text-blue-600 font-bold text-sm rounded-xl hover:border-blue-300 hover:shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px]"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              ) : (
                "Load More Companies"
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
