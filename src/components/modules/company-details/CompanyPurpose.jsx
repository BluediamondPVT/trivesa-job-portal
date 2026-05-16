// src/components/modules/company-details/CompanyPurpose.jsx

export default function CompanyPurpose({ purpose, videoId }) {
  // Tera requested video ID default set kar diya hai
  const activeVideoId = videoId || "XUG-LwgI_rQ";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="text-left z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5 font-heading">
            Our Purpose
          </h2>
          <p className="text-slate-600 leading-relaxed text-[15px] md:text-[17px] font-medium">
            &quot;{purpose}&quot;
          </p>
        </div>

        {/* Right Side: YouTube Video Iframe */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200/60 group z-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // 🔥 URL mein start=23 add kiya hai taaki exactly 23s se play ho
            src={`https://www.youtube.com/embed/${activeVideoId}?start=23&autoplay=0&rel=0&modestbranding=1`}
            title="Company Purpose Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Subtle glow effect behind the video for premium feel */}
          <div className="absolute -inset-4 bg-blue-500/10 blur-xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
}
