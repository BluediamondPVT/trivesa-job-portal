// src/components/modules/about/AboutBreadcrumb.jsx
import React from "react";

export default function AboutBreadcrumb() {
  return (
    <section 
      className="relative w-full py-20 md:py-28 flex flex-col items-center justify-center text-center overflow-hidden bg-[#eef7fd]"
      // 🔥 Yahan tu apni actual background image ka path daal dena (jaise '/images/breadcrumb-bg.jpg')
      style={{
        // Maine ek dummy tech-pattern image daali hai demo ke liye, isko replace kar lena
        backgroundImage: `url('https://www.transparenttextures.com/patterns/connected.png')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light white overlay taaki background zyada loud na ho aur text clear dikhe */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>

      {/* Main Centered Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Top Small Title */}
        <h3 className="text-slate-800 text-lg md:text-[20px] font-medium mb-1 md:mb-2">
          About Us
        </h3>
        
        {/* Main Blue Heading */}
        <h1 className="text-3xl md:text-[42px] font-bold text-[#1864f4] tracking-tight mb-3 md:mb-4 font-heading">
          About the Trivesa
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed">
          Born out of a passion for connecting talent with purpose, Trivesa stands
        </p>

      </div>
    </section>
  );
}