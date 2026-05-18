// src/components/shared/Footer.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const hideOnRoutes = ["/login", "/sign-up"];
  if (hideOnRoutes.includes(pathname)) {
    return null;
  }
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Section - Grid layout for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
              Tri<span className="text-blue-500">Vesa</span> Jobs
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Connecting top talent with industry-leading companies. Your dream career starts right here.
            </p>
          </div>

          {/* For Candidates */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-white">For Candidates</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Browse Companies</Link></li>
              <li><Link href="/salary" className="hover:text-white transition-colors">Salary Estimate</Link></li>
              <li><Link href="/resume" className="hover:text-white transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-white">For Employers</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="/candidates" className="hover:text-white transition-colors">Search Candidates</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Employer Dashboard</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm text-slate-400">Get the latest jobs directly to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Trivesa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}