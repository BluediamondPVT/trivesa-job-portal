// src/app/bookmarks/page.js
import SavedJobsContent from "@/components/modules/bookmarks/SavedJobsContent";

export const metadata = {
  title: "Saved Jobs | Premium Job Portal",
  description: "View and apply to your bookmarked jobs.",
};

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Top Banner */}
      <div className="w-full bg-[#f4f7fc] py-14 flex flex-col items-center justify-center border-b border-gray-200 mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Bookmarks
        </h1>
        <p className="text-sm text-gray-500 font-medium">Home / Saved Jobs</p>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <SavedJobsContent />
      </main>

    </div>
  );
}