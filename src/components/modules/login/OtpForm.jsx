// src/components/modules/login/OtpForm.jsx
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpStagger = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function OtpForm({ phoneNumber, onBack }) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-[480px] bg-white lg:rounded-[1rem] lg:p-14 lg:shadow-[0_10px_40px_rgb(0,0,0,0.06)] lg:border lg:border-gray-100 flex flex-col hover:shadow-[0_15px_50px_rgb(24,100,244,0.08)] transition-all duration-500 mt-4 lg:mt-0"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 relative">
        <motion.button
          onClick={onBack}
          whileHover={{ x: -2 }}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Verify Identity
        </h2>
      </div>

      <p className="text-slate-500 text-sm sm:text-base font-medium mb-8 sm:mb-12 leading-relaxed">
        We have sent a verification code to your phone number at{" "}
        <strong className="text-slate-900">
          +91 {phoneNumber.slice(0, 5)} {phoneNumber.slice(5)}
        </strong>
        .
      </p>

      <div className="flex flex-col gap-2 sm:gap-3 mb-10 sm:mb-12">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1 tracking-wide">
          ENTER 6-DIGIT CODE
        </label>
        <div className="grid grid-cols-6 gap-1.5 sm:gap-3 group">
          {[...Array(6)].map((_, i) => (
            <motion.input
              key={i}
              variants={fadeUpStagger}
              custom={i}
              initial="hidden"
              animate="visible"
              type="tel"
              maxLength={1}
              placeholder="•"
              className="w-full h-12 sm:h-14 md:h-16 bg-[#f8fafc] border border-gray-100 focus:border-[#1864f4] focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-[#1864f4]/10 rounded-lg sm:rounded-xl md:rounded-2xl text-center text-lg sm:text-xl md:text-2xl font-extrabold text-slate-950 placeholder:text-slate-300 transition-all outline-none p-0"
            />
          ))}
        </div>
        <motion.div
          variants={fadeUpStagger}
          custom={6}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between mt-3 sm:mt-4 text-xs sm:text-sm font-semibold px-1 text-slate-500"
        >
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
  );
}
