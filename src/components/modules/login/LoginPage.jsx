// src/components/modules/login/LoginPage.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoginPanel from "./LoginPanel";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";

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
      {/* 🚀 LEFT PANEL */}
      <LoginPanel />

      {/* 🎯 RIGHT PANEL */}
      <div className="flex flex-col lg:justify-center items-center relative z-20 w-full bg-slate-50 min-h-dvh lg:min-h-auto">
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
              <OtpForm phoneNumber={phoneNumber} onBack={handleBackToNumber} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
