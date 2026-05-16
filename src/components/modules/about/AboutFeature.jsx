// src/components/modules/about/AboutFeature.jsx
import { Check } from "lucide-react";
import Link from "next/link";

export default function AboutFeature() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Large Image */}
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-sm">
          <img
            // Yahan tu apni actual image ka path daal dena (e.g., "/images/about-office.jpg")
            src="https://trivesaco.com/img/gallery/about.jpg"
            alt="Woman working on laptop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-6 leading-[1.2] font-heading tracking-tight">
            At Trivesa, We Redefine <br className="hidden md:block" />
            HR Partnerships.
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-500 text-[15px] md:text-base leading-relaxed mb-8 font-medium">
            Born out of a passion for connecting talent with purpose, Trivesa stands as a beacon for excellence in HR consultancy crafted exclusively for the IT sector. We understand that the IT industry thrives on innovation, agility, and precision.
          </p>

          {/* Checkmarks List */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-slate-700 text-[15px] font-medium">
                Strategic partner in building teams that drive success
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-slate-700 text-[15px] font-medium">
                Guided by our tagline, &quot;Inspired Partnerships&quot;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-slate-700 text-[15px] font-medium">
                Creating long-term, meaningful collaborations that empower businesses
              </span>
            </li>
          </ul>

        
        </div>

      </div>
    </section>
  );
}