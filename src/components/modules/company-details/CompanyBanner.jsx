// src/components/modules/company-details/CompanyBanner.jsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CompanyBanner({ bannerImg }) {
  return (
    <div className="relative w-full h-50 md:h-87.5">
      {/* Exact image without text overlay */}
      <Image
        src={bannerImg}
        alt="Company Banner"
        fill
        className="w-full h-full object-cover"
        unoptimized
      />

      {/* Back Button */}
      <Link
        href="/companies"
        className="absolute top-6 left-4 md:left-8 inline-flex items-center gap-2 text-white font-medium text-sm transition-all backdrop-blur-md bg-black/40 hover:bg-black/60 px-4 py-2 rounded-xl z-10"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Companies
      </Link>
    </div>
  );
}
