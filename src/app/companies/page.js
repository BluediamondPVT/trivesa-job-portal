// src/app/companies/page.js
import CompanyListing from "@/components/modules/companies/CompanyListing";

export const metadata = {
  title: "Top Companies | Premium Job Portal",
  description: "Discover and apply to jobs from the world's best companies.",
};

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Top Banner (Theme matched with Jobs page) */}
      <div className="w-full bg-[#f4f7fc] py-16 flex flex-col items-center justify-center border-b border-gray-200">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
          Top Companies Hiring Now
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl text-center px-4">
          Explore profiles, reviews, and open positions at the best places to work. 
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <CompanyListing />
      </main>

    </div>
  );
}