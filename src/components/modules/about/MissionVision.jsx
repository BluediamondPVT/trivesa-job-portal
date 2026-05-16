// src/components/modules/about/MissionVision.jsx
import { Telescope, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f4f8fa] py-16 px-4 md:px-6 flex justify-center items-center">
      {/* Container max-width set to match the image spacing */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* 🌟 Vision Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-10 md:p-12 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
          {/* Custom colored high-quality SVG */}
          <div className="mb-6">
            <Telescope className="w-16 h-16 text-[#0066b2]" strokeWidth={1.2} />
          </div>

          <h3 className="font-heading text-2xl font-bold text-[#0066b2] mb-4 tracking-tight">
            Our Vision
          </h3>

          <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
            To provide secure, reliable, and innovative IT solutions to global
            businesses at fair and transparent costs, enabling them to enhance
            efficiency and achieve excellence in their respective domains.
          </p>
        </div>

        {/* 🎯 Mission Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-10 md:p-12 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
          {/* Custom colored high-quality SVG */}
          <div className="mb-6">
            <Target className="w-16 h-16 text-[#0066b2]" strokeWidth={1.2} />
          </div>

          <h3 className="font-heading text-2xl font-bold text-[#0066b2] mb-4 tracking-tight">
            Our Mission
          </h3>

          <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
            Our mission is to Empower Businesses by Providing personalized
            consultancy and outsourcing solutions to streamline operations and
            foster growth. Transforming Careers Connecting skilled
            professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
