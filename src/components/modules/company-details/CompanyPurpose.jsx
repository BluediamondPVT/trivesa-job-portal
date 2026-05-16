// src/components/modules/company-details/CompanyPurpose.jsx
export default function CompanyPurpose({ purpose }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      <div className="bg-linear-to-br from-[#f8fafc] to-[#f1f5f9] rounded-3xl p-8 md:p-12 border border-gray-100 text-center relative overflow-hidden">
      

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-heading">
          Our Purpose
        </h2>
        <p className="text-slate-600 leading-relaxed text-[15px] md:text-[17px] max-w-4xl mx-auto font-medium">
          &quot;{purpose}&quot;
        </p>
      </div>
    </div>
  );
}
