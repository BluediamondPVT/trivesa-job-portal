// src/components/modules/login/LoginForm.jsx
import { Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginForm({ phoneNumber, setPhoneNumber, onSubmit }) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-[480px] bg-white lg:rounded-[1rem] lg:p-14 lg:shadow-[0_10px_40px_rgb(0,0,0,0.06)] lg:border lg:border-gray-100 flex flex-col hover:shadow-[0_15px_50px_rgb(24,100,244,0.08)] transition-all duration-500 mt-4 lg:mt-0"
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
        Secure Login
      </h2>
      <p className="text-slate-500 text-sm sm:text-base font-medium mb-8 sm:mb-12 leading-relaxed">
        Log in with your phone number to continue your Trivesa journey.
      </p>

      <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1 tracking-wide">
          PHONE NUMBER
        </label>
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
            className="w-full pl-[90px] sm:pl-28 pr-4 sm:pr-5 py-4 sm:py-5 bg-[#f8fafc] border border-gray-100 focus:border-[#1864f4] focus:bg-white focus:ring-4 focus:ring-[#1864f4]/10 rounded-xl sm:rounded-2xl text-base sm:text-lg text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal transition-all outline-none"
          />
          <Smartphone className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-[#1864f4] transition-colors" />
        </div>
      </div>

      <motion.button
        onClick={onSubmit}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-blue-500/30 text-base sm:text-lg"
      >
        Get Verification Code
      </motion.button>

      <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm font-medium text-slate-500 leading-relaxed px-2">
        I agree to{" "}
        <Link
          href="/terms"
          className="text-[#1864f4] hover:underline font-semibold"
        >
          Terms & Conditions
        </Link>{" "}
        &{" "}
        <Link
          href="/privacy"
          className="text-[#1864f4] hover:underline font-semibold"
        >
          Privacy Policy
        </Link>{" "}
        of Trivesa Jobs.
      </div>
    </motion.div>
  );
}
