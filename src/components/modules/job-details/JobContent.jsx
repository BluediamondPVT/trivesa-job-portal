// src/components/modules/job-details/JobContent.jsx

export default function JobContent() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mt-8">
      <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Job Description</h3>
      <p className="text-slate-600 leading-relaxed mb-8">
        As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Key Responsibilities</h3>
      <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-8 marker:text-blue-500">
        <li>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li>
        <li>Work with BAs, product managers and tech teams to lead the Product Design</li>
        <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
        <li>Accurately estimate design tickets during planning sessions.</li>
        <li>Contribute to sketching sessions involving non-designers, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Skill & Experience</h3>
      <ul className="list-disc pl-5 space-y-3 text-slate-600 marker:text-blue-500">
        <li>You have at least 3 years&apos; experience working as a Product Designer.</li>
        <li>You have experience using Sketch and InVision or Framer X.</li>
        <li>You have some previous experience working in an agile environment - Think two-week sprints.</li>
        <li>You are familiar using Jira and Confluence in your workflow.</li>
      </ul>
    </div>
  );
}