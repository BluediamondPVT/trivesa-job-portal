// src/components/modules/profile/profileData.js
export const initialCandidateData = {
  name: "Altaf Siddiqui",
  headline: "Senior Sales Executive & Growth Specialist",
  location: "Mumbai, Maharashtra",
  email: "altaf.siddiqui@example.com",
  phone: "+91 98765 43210",
  avatar: "/abc.avif",
  coverImage:
    "https://static.vecteezy.com/system/resources/thumbnails/005/720/479/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
  about:
    "Driven sales professional with over 3 years of experience in healthcare BPO and SaaS sales. Proven track record of exceeding quarterly targets by 150%. Passionate about building client relationships and driving revenue growth through strategic communication.",

  preferences: {
    currentCTC: "₹8,00,000 PA",
    expectedCTC: "₹12,00,000 PA",
    noticePeriod: "15 Days",
    workMode: "Hybrid / On-site",
  },

  skills: [
    "B2B Sales",
    "CRM Software",
    "Negotiation",
    "Client Retention",
    "Cold Calling",
    "Data Analysis",
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Arabic", level: "Intermediate" },
  ],

  experience: [
    {
      id: 1,
      role: "Senior Sales Executive",
      company: "HealthTech Solutions",
      duration: "Jan 2022 - Present",
      description:
        "Leading the western region sales team. Increased client onboarding by 45% in the first year.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Mumbai University",
      year: "2017 - 2020",
      grade: "First Class",
    },
  ],
};
