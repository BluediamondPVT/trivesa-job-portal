// src/components/modules/login/LoginPage.jsx
"use client";

import { Smartphone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./login-anim.json";

const fadeUpStagger = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  }),
};

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleGetOtp = () => {
    if (phoneNumber.length >= 10) setStep(2);
    else alert("Please enter a valid phone number!");
  };

  const handleBackToNumber = () => setStep(1);

  return (
    <div className="min-h-[100dvh] bg-white grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      
      {/* 🚀 LEFT PANEL (Hidden on Mobile) */}
      <div className="bg-slate-50 pt-10 lg:pt-16 px-10 lg:px-16 flex-col justify-between items-center relative z-10 hidden lg:flex border-r border-gray-100">
        <div className="w-full text-left">
          <Link href="/" className="font-heading text-3xl font-bold tracking-tight text-slate-900 mb-2 block">
            Tri<span className="text-[#1864f4]">Vesa</span> Jobs
          </Link>
        </div>
        
        <div className="w-full max-w-lg flex-1 flex flex-col justify-center items-center">
          
          <div className="text-center mt-12">
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Unlock Your <span className="text-[#1864f4]">Next-Level</span> Job
            </h2>
            {/* <p className="text-slate-600 font-medium text-lg max-w-md mx-auto leading-relaxed">
              Talk to HR directly, secure exclusive roles, and negotiate better salaries with Trivesa.
            </p> */}
          </div>
           <Lottie 
             animationData={animationData} 
             loop={true} 
             className="w-full max-w-105 object-contain drop-shadow-sm"
           />
        </div>
        {/* <p className="text-sm text-slate-400 font-medium w-full text-center">
          Trusted by top IT enterprises globally.
        </p> */}
      </div>

      {/* 🎯 RIGHT PANEL (Mobile Responsive) */}
      <div className="flex flex-col lg:justify-center items-center relative z-20 w-full bg-white min-h-[100dvh] lg:min-h-auto">
        
        {/* Mobile Header (Only visible on small screens) */}
        <div className="w-full p-6 sm:p-8 flex items-center justify-between lg:hidden border-b border-gray-50 bg-white sticky top-0 z-50">
           <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            Tri<span className="text-[#1864f4]">Vesa</span>
          </Link>
          <span className="text-xs font-bold bg-blue-50 text-[#1864f4] px-3 py-1 rounded-full uppercase tracking-wide">
            Login
          </span>
        </div>
        
        <div className="w-full h-full flex items-start sm:items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20 flex-1">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              // 🌟 STEP 1: Phone Number Input Card
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                // 🔥 Mobile pe full width bina shadow, Desktop pe card feel
                className="w-full max-w-120 bg-white lg:rounded-[1rem] lg:p-14 lg:shadow-[0_10px_40px_rgb(0,0,0,0.06)] lg:border lg:border-gray-100 flex flex-col hover:shadow-[0_15px_50px_rgb(24,100,244,0.08)] transition-all duration-500 mt-4 lg:mt-0"
              >
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">Secure Login</h2>
                <p className="text-slate-500 text-sm sm:text-base font-medium mb-8 sm:mb-12 leading-relaxed">Log in with your phone number to continue your Trivesa journey.</p>
                
                <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1 tracking-wide">PHONE NUMBER</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center gap-2 sm:gap-3 border-r border-gray-200 pr-2 sm:pr-3 pointer-events-none text-slate-600 font-semibold text-base sm:text-lg">
                      +91 <span className="w-px h-5 sm:h-6 bg-gray-200"></span>
                    </div>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      maxLength={10}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      // 🔥 Mobile friendly padding aur sizing
                      className="w-full pl-[90px] sm:pl-28 pr-4 sm:pr-5 py-4 sm:py-5 bg-[#f8fafc] border border-gray-100 focus:border-[#1864f4] focus:bg-white focus:ring-4 focus:ring-[#1864f4]/10 rounded-xl sm:rounded-2xl text-base sm:text-lg text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal transition-all outline-none"
                    />
                    <Smartphone className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-[#1864f4] transition-colors" />
                  </div>
                </div>

                <motion.button
                  onClick={handleGetOtp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-blue-500/30 text-base sm:text-lg"
                >
                  Get Verification Code
                </motion.button>

                <div className="mt-8 sm:mt-10 text-center text-sm sm:text-base font-medium text-slate-600">
                  New to Trivesa? <Link href="/sign-up" className="text-[#1864f4] font-bold hover:underline">Sign Up</Link>
                </div>
              </motion.div>
            ) : (
              // 🎯 STEP 2: OTP Input Card
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-120 bg-white lg:rounded-[1rem] lg:p-14 lg:shadow-[0_10px_40px_rgb(0,0,0,0.06)] lg:border lg:border-gray-100 flex flex-col hover:shadow-[0_15px_50px_rgb(24,100,244,0.08)] transition-all duration-500 mt-4 lg:mt-0"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 relative">
                  <motion.button 
                    onClick={handleBackToNumber}
                    whileHover={{ x: -2 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Verify Identity</h2>
                </div>
                
                <p className="text-slate-500 text-sm sm:text-base font-medium mb-8 sm:mb-12 leading-relaxed">We have sent a verification code to your phone number at <strong className="text-slate-900">+91 {phoneNumber.slice(0,5)} {phoneNumber.slice(5)}</strong>.</p>
                
                <div className="flex flex-col gap-2 sm:gap-3 mb-10 sm:mb-12">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1 tracking-wide">ENTER 6-DIGIT CODE</label>
                  <div className="grid grid-cols-6 gap-1.5 sm:gap-3 group">
                    {[...Array(6)].map((_, i) => (
                      <motion.input
                        key={i}
                        variants={fadeUpStagger}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        type="tel" // Changed to tel for better mobile keyboard
                        maxLength={1}
                        placeholder="•"
                        className="w-full h-12 sm:h-14 md:h-16 bg-[#f8fafc] border border-gray-100 focus:border-[#1864f4] focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-[#1864f4]/10 rounded-lg sm:rounded-xl md:rounded-2xl text-center text-lg sm:text-xl md:text-2xl font-extrabold text-slate-950 placeholder:text-slate-300 transition-all outline-none p-0"
                      />
                    ))}
                  </div>
                  <motion.div variants={fadeUpStagger} custom={6} initial="hidden" animate="visible" className="flex items-center justify-between mt-3 sm:mt-4 text-xs sm:text-sm font-semibold px-1 text-slate-500">
                    Resend Code in <span className="text-[#1864f4]">00:23</span>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-blue-500/30 text-base sm:text-lg"
                >
                  Verify & Log In
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}