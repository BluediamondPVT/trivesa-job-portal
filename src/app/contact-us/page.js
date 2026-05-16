// src/app/contact-us/page.js
import { MapPin, Smartphone, Mail } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f9fbfc] pb-24">
      {/* 🗺️ MAP BACKGROUND SECTION */}
      <div className="w-full h-87.5 md:h-112.5 relative z-0">
        {/* Google Maps Iframe (Dummy location) */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14059.05973608239!2d73.020534!3d19.106463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfdd0fc26eb3%3A0x24a06a9563d85e4!2sTrivesa%20HR%20Consultant!5e1!3m2!1sen!2sin!4v1778934437423!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Trivesa Location Map"
          className="grayscale opacity-90 contrast-125" // Halka grayish look dene ke liye
        ></iframe>
      </div>

      {/* 🏢 OVERLAPPING CONTACT INFO CARD */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 -mt-20 md:-mt-24">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center border border-gray-50">
          {/* Info 1: Address */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#1864f4]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Address</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px]">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </p>
          </div>

          {/* Divider (Hidden on mobile) */}
          <div className="hidden md:block w-px h-24 bg-gray-100"></div>

          {/* Info 2: Call Us */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Smartphone
                className="w-6 h-6 text-[#1864f4]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
            <p className="text-[#1864f4] text-sm font-semibold cursor-pointer hover:underline">
              123 456 7890
            </p>
          </div>

          {/* Divider (Hidden on mobile) */}
          <div className="hidden md:block w-px h-24 bg-gray-100"></div>

          {/* Info 3: Email */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#1864f4]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Email</h3>
            <p className="text-slate-500 text-sm font-medium hover:text-[#1864f4] cursor-pointer transition-colors">
              contact.trivesa@example.com
            </p>
          </div>
        </div>
      </div>

      {/* ✉️ CONTACT FORM CARD */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 tracking-tight">
            Leave A Message
          </h2>

          <form className="flex flex-col gap-6">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full bg-[#f4f8fa] border border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full bg-[#f4f8fa] border border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                  required
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 ml-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject *"
                className="w-full bg-[#f4f8fa] border border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                required
              />
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 ml-1">
                Your Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="6"
                className="w-full bg-[#f4f8fa] border border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full bg-[#1864f4] hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-[15px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
