import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const urgentActions = [
  {
    title: "Find Emergency Vet",
    desc: "Locate 24/7 emergency veterinary clinics near you with real-time GPS tracking and live navigation metrics.",
    actionText: "Initiate GPS Search",
    color: "red",
    // External link for Google Maps
    path: "https://www.google.com/maps/@3.8567936,11.5146752,36299m/data=!3m1!1e3?entry=ttu",
    isExternal: true
  },
  {
    title: "Symptom Checker",
    desc: "Run through a clinical multi-point triage protocol to quickly identify severity thresholds for your pet's condition.",
    actionText: "Launch Triage Tool",
    color: "amber",
    isExternal: false
  },
  {
    title: "Poison Control",
    desc: "Access our comprehensive chemical and natural toxin library with rapid, explicit toxic reaction treatment steps.",
    actionText: "Query Toxin Index",
    color: "red",
   // path: "/poison-control", // Internal route path example
    isExternal: false
  }
];

const secondaryGuides = [
  { title: "First Aid Protocols", desc: "Step-by-step instruction guides for CPR, choking, and severe blood loss management.", icon: "🩺" },
  { title: "Emergency Kit Assembly", desc: "A mandatory diagnostic supply list required to safeguard your dog during medical transit.", icon: "🎒" },
  { title: "Disaster Preparedness", desc: "Strategic response parameters for natural emergencies, including rapid evacuation plans.", icon: "🌪️" }
];

const EmergencyActionsDashboard = () => {
  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- Header Area --- */}
        <div className="space-y-1">
          <span className="text-red-600 font-mono text-xs tracking-widest uppercase block">// Direct Protocols</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Quick Action Gateways
          </h2>
        </div>

        {/* --- Asymmetric Layout Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Core High-Urgency Tasks (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            {urgentActions.map((item) => (
              <div 
                key={item.title} 
                className={`p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  item.color === 'red' ? 'border-red-200' : 'border-amber-200'
                }`}
              >
                <div className="space-y-2 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${item.color === 'red' ? 'bg-red-600 animate-pulse' : 'bg-amber-500'}`} />
                    <h3 className="font-black text-base md:text-lg text-slate-900 tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                {/* --- SMART ROUTING CONTROL --- */}
                {item.isExternal ? (
                  // Native HTML anchor for Google Maps external window target
                  <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shrink-0 w-full md:w-auto"
                  >
                    <button className={`w-full md:w-auto px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all ${
                      item.color === 'red' 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/10' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}>
                      {item.actionText}
                    </button>
                  </a>
                ) : (
                  // React Router Link for smooth internal pages
                  <Link to={item.path} className="shrink-0 w-full md:w-auto">
                    <button className={`w-full md:w-auto px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all ${
                      item.color === 'red' 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/10' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}>
                      {item.actionText}
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Supporting Guides & Resource Center (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-extrabold text-sm md:text-base text-slate-900 tracking-tight uppercase">Supportive Logistics</h4>
              <p className="text-[11px] text-slate-400">Proactive resources for standard companion safety.</p>
            </div>

            {/* Micro List Item Blocks */}
            <div className="space-y-4">
              {secondaryGuides.map((guide) => (
                <div 
                  key={guide.title} 
                  className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors bg-slate-50/50 group cursor-pointer"
                >
                  <div className="text-2xl bg-white border border-slate-200/60 p-2.5 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                    {guide.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                      {guide.title}
                    </h5>
                    <p className="text-xs text-slate-500 leading-normal">{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Diagnostic Notice */}
            <div className="p-4 bg-amber-50/40 border border-amber-100 rounded-2xl flex gap-3 text-amber-900">
              <span className="text-base">📝</span>
              <p className="text-[11px] leading-relaxed text-amber-800">
                <strong>Pre-Transit Note:</strong> If traveling to an emergency center, remember to secure your dog's primary vaccination and clinical identity documentation files if accessible.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmergencyActionsDashboard;