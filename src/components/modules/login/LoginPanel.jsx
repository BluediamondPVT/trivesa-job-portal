// src/components/modules/login/LoginPanel.jsx
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "./login-anim.json";

export default function LoginPanel() {
  return (
    <div className="bg-slate-50 pt-10 lg:pt-16 px-10 lg:px-16 flex-col justify-between items-center relative z-10 hidden lg:flex border-r border-gray-100">
      <div className="w-full text-left">
        <Link
          href="/"
          className="font-heading text-3xl font-bold tracking-tight text-slate-900 mb-2 block"
        >
          Tri<span className="text-[#1864f4]">Vesa</span> Jobs
        </Link>
      </div>

      <div className="w-full max-w-lg flex-1 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Unlock Your <span className="text-[#1864f4]">Next-Level</span> Job
          </h2>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full max-w-[450px] object-contain drop-shadow-sm" // Updated max-w class
        />
      </div>
    </div>
  );
}
