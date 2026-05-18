// src/components/modules/login/LoginPage.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"; // 🚀 useSearchParams add kiya

import LoginPanel from "./LoginPanel";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";
import { useAuthStore } from "@/store/useAuthStore"; // 🔥 Zustand Store Import

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuthStore(); // 🔥 Zustand se login action nikala

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);

  // Get the redirect route from URL (e.g., /login?redirect=/jobs), default is '/jobs'
  const redirectPath = searchParams.get("redirect") || "/jobs";

  const handleGetOtp = () => {
    if (phoneNumber.length >= 10) {
      setStep(2);
      setShowErrorToast(false);
    } else {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
    }
  };

  // 🔥 NAYA FUNCTION: OTP Verify hote hi dummy user login karega aur redirect karega
  const handleVerifyAndLogin = () => {
    // Dummy user data simulate kar rahe hain
    const dummyUser = {
      name: "Abu Developer",
      phone: phoneNumber,
      avatar: "A",
    };

    login(dummyUser); // 1. Global state update ho gayi (isAuthenticated = true)
    router.push(redirectPath); // 2. User purane page pe wapas chala gaya!
  };

  const handleBackToNumber = () => setStep(1);

  return (
    <div className="min-h-[100dvh] bg-white grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <LoginPanel />

      <div className="flex flex-col lg:justify-center items-center relative z-20 w-full bg-slate-50 min-h-dvh lg:min-h-auto">
        {/* CUSTOM ANIMATED ERROR TOAST */}
        <AnimatePresence>
          {showErrorToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="absolute top-24 lg:top-12 left-1/2 bg-red-50 text-red-600 px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(239,68,68,0.15)] border border-red-100 flex items-center gap-2.5 z-50 whitespace-nowrap text-sm font-bold"
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              Please enter a valid 10-digit number!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Header */}
        <div className="w-full p-6 sm:p-8 flex items-center justify-between lg:hidden border-b border-gray-50 bg-white sticky top-0 z-50">
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-tight text-slate-900"
          >
            Tri<span className="text-[#1864f4]">Vesa</span>
          </Link>
          <span className="text-xs font-bold bg-blue-50 text-[#1864f4] px-3 py-1 rounded-full uppercase tracking-wide">
            Login
          </span>
        </div>

        <div className="w-full h-full flex items-start sm:items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20 flex-1">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <LoginForm
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onSubmit={handleGetOtp}
              />
            ) : (
              <OtpForm
                phoneNumber={phoneNumber}
                onBack={handleBackToNumber}
                onVerify={handleVerifyAndLogin} // 🔥 Prop pass kiya execution ke liye
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
