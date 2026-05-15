// src/app/jobs/[id]/page.js
import JobHeader from "@/components/modules/job-details/JobHeader";
import JobContent from "@/components/modules/job-details/JobContent";
import ShareSocial from "@/components/modules/job-details/ShareSocial";
import RelatedJobs from "@/components/modules/job-details/RelatedJobs";
import JobOverviewSidebar from "@/components/modules/job-details/JobOverviewSidebar";
import CompanySidebar from "@/components/modules/job-details/CompanySidebar";

export default function JobDetailsPage() {
  // Dummy data jise prop ke through pass karenge
  const currentJob = {
    id: "1",
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    time: "11 hours ago",
    salary: "₹350k - ₹450k",
    logoColor: "bg-[#1E293B]",
    logoText: "S",
    badges: [
      { text: "Full Time", style: "bg-blue-50 text-blue-600" },
      { text: "Private", style: "bg-green-50 text-green-600" },
      { text: "Urgent", style: "bg-amber-50 text-amber-600" },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Component 1: Top Header */}
        <JobHeader job={currentJob} />

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <JobContent /> {/* Component 2 */}
            <ShareSocial /> {/* Component 3 */}
            <RelatedJobs /> {/* Component 4 */}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <JobOverviewSidebar /> {/* Component 5 */}
            <CompanySidebar /> {/* Component 6 */}
          </div>
        </div>
      </div>
    </div>
  );
}
