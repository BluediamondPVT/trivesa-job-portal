// src/components/modules/login/OtpForm.jsx
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const fadeUpStagger = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function OtpForm({ phoneNumber, onBack, onVerify }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [canResend, setCanResend] = useState(false); 
  const [showToast, setShowToast] = useState(false); // 🔥 Naya state Custom Popup ke liye
  const inputRefs = useRef([]);

  // Auto-focus on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = prev - 1;
        if (60 - nextTime >= 10) {
          setCanResend(true);
        }
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // 🔥 Resend OTP Handler (Ab Custom Popup ke saath)
  const handleResendOtp = () => {
    if (!canResend) return;

    // Custom Toast/Popup dikhao
    setShowToast(true);
    
    // 3 second baad popup khud hide ho jayega
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // State reset
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6).split("");
    if (pasteData.some(isNaN)) return; 

    const newOtp = [...otp];
    pasteData.forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);

    const focusIndex = Math.min(pasteData.length, 5);
    inputRefs.current[focusIndex].focus();
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-full max-w-[480px] bg-white lg:rounded-[1rem] lg:p-14 lg:shadow-[0_10px_40px_rgb(0,0,0,0.06)] lg:border lg:border-gray-100 flex flex-col hover:shadow-[0_15px_50px_rgb(24,100,244,0.08)] transition-all duration-500 mt-4 lg:mt-0"
    >
      {/* 🚀 CUSTOM ANIMATED TOAST POPUP */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="absolute -top-12 lg:-top-6 left-1/2 bg-emerald-50 text-emerald-600 px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(16,185,129,0.15)] border border-emerald-100 flex items-center gap-2.5 z-50 whitespace-nowrap text-[13px] sm:text-sm font-bold"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            Code re-sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

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
        </strong>.
      </p>

      <div className="flex flex-col gap-2 sm:gap-3 mb-10 sm:mb-12">
        <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1 tracking-wide">
          ENTER 6-DIGIT CODE
        </label>
        <div className="grid grid-cols-6 gap-1.5 sm:gap-3 group">
          {otp.map((digit, i) => (
            <motion.input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)} 
              value={digit}
              onChange={(e) => handleChange(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
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
        
        {/* ⏱️ Dynamic Resend Area */}
        <motion.div
          variants={fadeUpStagger}
          custom={6}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between mt-4 text-xs sm:text-sm font-semibold px-1"
        >
          <span className="text-slate-500">
            {timeLeft > 0 ? `Time remaining: ${formatTime(timeLeft)}` : "OTP Expired"}
          </span>
          
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={!canResend}
            className={`transition-all duration-300 font-bold outline-none ${
              canResend 
                ? "text-[#1864f4] hover:underline cursor-pointer" 
                : "text-slate-400 cursor-not-allowed opacity-60"
            }`}
          >
            Resend OTP
          </button>
        </motion.div>
      </div>

     <motion.button
        onClick={onVerify} 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-blue-500/30 text-base sm:text-lg"
      >
        Verify & Log In
      </motion.button>
    </motion.div>
  );
}