// src/app/companies/[id]/page.js
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  Globe,
  ExternalLink,
  Briefcase,
  Star,
  Building2,
  Calendar,
  Mail,
} from "lucide-react";

import CompanyBanner from "@/components/modules/company-details/CompanyBanner";
import CompanyOverview from "@/components/modules/company-details/CompanyOverview";
import CompanyPurpose from "@/components/modules/company-details/CompanyPurpose";
import CompanyOpenJobs from "@/components/modules/company-details/CompanyOpenJobs";

// 🔥 FIX: Function ko 'async' banaya
export default async function CompanyDetailsPage({ params }) {
  // 🔥 FIX: params ko await karke 'id' nikala
  const resolvedParams = await params;
  const companyId = resolvedParams.id;

  // 🏢 Dummy Data (Real app mein id se fetch hoga)
  const companyData = {
    id: companyId, // Yahan await kiya hua ID daal diya
    name: "Infosys",
    industry: "IT Services & Consulting",
    location: "Bengaluru, KA",
    employees: "300,000+",
    rating: 4.2,
    website: "www.infosys.com",
    bannerImg:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    logoColor: "bg-[#007CC3]",
    logoText: "In",
    overview:
      "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over four decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey.",
    purpose:
      "To amplify human potential and create the next opportunity for people, businesses and communities. We believe in building a better world through technology, continuous learning, and sustainable growth.",

    // Exact jobs matching the company
    openJobsList: [
      {
        id: 101,
        title: "Senior React Developer",
        company: "Infosys",
        location: "Pune, MH",
        time: "2 hours ago",
        salary: "₹18L - ₹24L PA",
        logoColor: "bg-[#007CC3]",
        logoText: "In",
        description:
          "Join our core UI team to build highly scalable enterprise dashboards.",
        badges: [
          { text: "Full Time", style: "bg-blue-50 text-blue-600" },
          { text: "Hybrid", style: "bg-purple-50 text-purple-600" },
        ],
      },
      {
        id: 102,
        title: "Cloud Architect (AWS)",
        company: "Infosys",
        location: "Bengaluru, KA",
        time: "1 day ago",
        salary: "₹25L - ₹35L PA",
        logoColor: "bg-[#007CC3]",
        logoText: "In",
        description:
          "Lead cloud migration strategies for Fortune 500 clients globally.",
        badges: [
          { text: "Full Time", style: "bg-blue-50 text-blue-600" },
          { text: "Urgent", style: "bg-amber-50 text-amber-600" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <CompanyBanner bannerImg={companyData.bannerImg} />
      <CompanyOverview company={companyData} />
      <CompanyPurpose purpose={companyData.purpose} />
      <CompanyOpenJobs
        companyName={companyData.name}
        openJobsList={companyData.openJobsList}
      />
    </div>
  );
}
