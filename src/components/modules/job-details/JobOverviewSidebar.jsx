import Image from "next/image";
import {
  CalendarDays,
  Hourglass,
  MapPin,
  User,
  Clock,
  Banknote,
  Wallet,
} from "lucide-react";

export default function JobOverviewSidebar() {
  return (
    <div className="bg-[#f4f7fc] rounded-2xl p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-slate-900 mb-6 font-heading">
        Job Overview
      </h3>

      <div className="flex flex-col gap-6 mb-8">
        {[
          {
            icon: <CalendarDays />,
            label: "Date Posted:",
            value: "Posted 1 hours ago",
          },
          {
            icon: <Hourglass />,
            label: "Expiration date:",
            value: "April 06, 2027",
          },
          { icon: <MapPin />, label: "Location:", value: "London, UK" },
          { icon: <User />, label: "Job Title:", value: "Designer" },
          { icon: <Clock />, label: "Hours:", value: "40h / week" },
          { icon: <Wallet />, label: "Salary:", value: "₹350k - ₹450k" },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="text-blue-600 mt-0.5">{item.icon}</div>
            <div>
              <p className="text-sm font-bold text-slate-900">{item.label}</p>
              <p className="text-sm text-gray-500">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      

      {/* Skills */}
      {/* <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">
        Job Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {[
          "app",
          "administrative",
          "android",
          "wordpress",
          "design",
          "react",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-white border border-gray-200 text-slate-600 text-xs font-semibold rounded-lg capitalize"
          >
            {skill}
          </span>
        ))}
      </div> */}
    </div>
  );
}
