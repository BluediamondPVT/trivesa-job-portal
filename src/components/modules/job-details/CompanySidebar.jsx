export default function CompanySidebar() {
  return (
    <div className="bg-[#f4f7fc] rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-[#1E293B] flex items-center justify-center font-bold text-2xl text-white">
          S
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-lg font-heading">
            Segment
          </h4>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View company profile
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {[
          { label: "Primary industry", value: "Software" },
          { label: "Company size", value: "500-1,000" },
          // { label: "Founded in", value: "2011" },
          // { label: "Phone", value: "123 456 7890" },
          // { label: "Email", value: "info@segment.com" },
          { label: "Location", value: "London, UK" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center text-sm">
            <span className="font-bold text-slate-900">{item.label}:</span>
            <span className="text-gray-500">{item.value}</span>
          </div>
        ))}
      </div>

      {/* <a
        href="#"
        className="flex w-full items-center justify-center py-3 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all"
      >
        segment.com
      </a> */}
    </div>
  );
}
