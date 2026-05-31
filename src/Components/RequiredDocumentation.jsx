import React, { useState } from 'react';
import { motion } from 'framer-motion';

const docCategories = [
  {
    id: "identity",
    label: "Identity & Residency",
    items: [
      {
        title: "Government-Issued ID",
        status: "Required",
        desc: "Valid driver's license, passport, or state ID to verify your identity and age (must be 21+).",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-10.5a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM5.25 12a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM5.25 15a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
          </svg>
        )
      },
      {
        title: "Proof of Residence",
        status: "Required",
        desc: "Recent utility bill, lease agreement, or mortgage statement showing your current registered address.",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        )
      }
    ]
  },
  {
    id: "approvals",
    label: "Housing & History",
    items: [
      {
        title: "Landlord Permission",
        status: "Required",
        desc: "Written consent from your landlord if renting, including detailed dog policy breakdowns and size/breed restrictions.",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        )
      },
      {
        title: "Veterinary References",
        status: "Conditional",
        desc: "Contact information for your current or previous primary veterinarian to verify a history of responsible pet care.",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        )
      }
    ]
  },
  {
    id: "suitability",
    label: "References & Stability",
    items: [
      {
        title: "Personal References",
        status: "Required",
        desc: "Two non-family references who can verify your household stability, responsibility level, and lifestyle traits.",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        )
      },
      {
        title: "Income Verification",
        status: "Optional",
        desc: "Recent pay stubs or redacted bank statement printouts to demonstrate financial security for complete canine care.",
        icon: (
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H3.75A1.125 1.125 0 012.625 18.375V5.625C2.625 5.004 3.129 4.5 3.75 4.5zM9 11.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 11.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
          </svg>
        )
      }
    ]
  }
];

const RequiredDocumentation = () => {
  const [activeTab, setActiveTab] = useState("identity");

  // Filter dynamic content state based on selected segment
  const currentItems = docCategories.find(cat => cat.id === activeTab)?.items || [];

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">📋</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Required Verification Files
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xl">
              Please prepare the following valid documents to authenticate your placement file before reserving your pet.
            </p>
          </div>

          {/* Dynamic Tab Switches */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner overflow-x-auto">
            {docCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all uppercase tracking-wide ${
                  activeTab === cat.id
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Documents Content Segment --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className="group border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between space-y-6 bg-white shadow-sm"
            >
              <div className="space-y-4">
                {/* Upper identity section */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl">
                    {item.icon}
                  </div>
                  
                  {/* Custom Flag Pill */}
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    item.status === "Required" 
                      ? "bg-red-50 border-red-100 text-red-600" 
                      : item.status === "Conditional"
                      ? "bg-amber-50 border-amber-100 text-amber-600"
                      : "bg-slate-50 border-slate-100 text-slate-500"
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Core Copy */}
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-base text-slate-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* --- Interactive Action Layer (New Functional Difference) --- */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                  Formats: PDF, JPG, PNG
                </span>
                
               
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RequiredDocumentation;