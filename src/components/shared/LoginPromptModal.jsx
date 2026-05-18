// src/components/shared/LoginPromptModal.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Briefcase } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function LoginPromptModal({ isOpen, onClose }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginClick = () => {
    router.push(`/login?redirect=${pathname}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-[400px] bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 bg-[#1864f4] opacity-10 rounded-full animate-ping" />
              <Lock className="w-10 h-10 text-[#1864f4] relative z-10" />
              <Briefcase className="w-5 h-5 text-slate-400 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
              Authentication Required
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              You need to be logged in to view job details and connect directly with HRs. Please login or create an account.
            </p>

            <div className="flex flex-col w-full gap-3">
              <button
                onClick={handleLoginClick}
                className="w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-[15px]"
              >
                Log In / Sign Up
              </button>
              <button
                onClick={onClose}
                className="w-full bg-white hover:bg-slate-50 text-slate-600 font-bold py-4 rounded-xl transition-all border border-slate-200 text-[15px]"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}