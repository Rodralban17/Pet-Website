import React from 'react';
import { motion } from 'framer-motion';

const preparednessSteps = [
  {
    title: "Create Evacuation Plan",
    desc: "Identify pet-friendly shelters, hotels, and boarding facilities outside your immediate area. Plan multiple routes.",
    icon: "🗺️",
    tier: "high"
  },
  {
    title: "Assemble Emergency Kit",
    desc: "Prepare a portable kit with 3-day supply of food, water, medications, and essential supplies that's ready to grab.",
    icon: "🎒",
    tier: "high"
  },
  {
    title: "Update Identification",
    desc: "Ensure microchip registration is current and ID tags have up-to-date contact information including out-of-area contacts.",
    icon: "🏷️",
    tier: "high"
  },
  {
    title: "Practice Evacuation",
    desc: "Regularly practice getting pets into carriers quickly. Familiarize them with evacuation procedures to reduce stress.",
    icon: "🔄",
    tier: "mid"
  },
  {
    title: "Secure Safe Room",
    desc: "Designate an interior room without windows as safe space during storms. Stock with emergency supplies.",
    icon: "🏠",
    tier: "mid"
  },
  {
    title: "Document Everything",
    desc: "Keep digital and physical copies of medical records, photos, and ownership documents in waterproof container.",
    icon: "📂",
    tier: "mid"
  },
  {
    title: "Establish Buddy System",
    desc: "Arrange with neighbors or friends to check on pets if you're unable to return home during emergency.",
    icon: "🤝",
    tier: "low"
  },
  {
    title: "Know Pet-Friendly Resources",
    desc: "Research and save contact information for emergency veterinary clinics and animal rescue organizations in your area.",
    icon: "📞",
    tier: "low"
  }
];

const DisasterPreparednessGuide = () => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">🏚️</span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Disaster Preparedness</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-lg">
              Strategic protocols and essential safety measures to protect your companion during environmental crises and natural disasters.
            </p>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-emerald-700 hover:text-emerald-800 flex items-center gap-2 transition-colors">
            Download PDF Guide <span>→</span>
          </button>
        </div>

        {/* --- Multi-Tiered Action Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preparednessSteps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border bg-white flex gap-5 transition-shadow hover:shadow-xl hover:shadow-slate-200/50 ${
                step.tier === 'high' ? 'border-red-100' : 
                step.tier === 'mid' ? 'border-amber-100' : 'border-emerald-100'
              }`}
            >
              <div className={`text-2xl shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                step.tier === 'high' ? 'bg-red-50' : 
                step.tier === 'mid' ? 'bg-amber-50' : 'bg-emerald-50'
              }`}>
                {step.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 text-base">{step.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Digital Emergency Contact Card --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                // Critical Access
              </div>
              <h4 className="text-3xl font-black tracking-tight leading-none uppercase">Emergency <br/> Contact Terminal</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sync these verified numbers and clinical records to your mobile device for immediate offline access during network failures.
              </p>
              <div className="pt-4">
                <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-colors">
                  Sync to Mobile
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-4">
                <h5 className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-2">Priority Hotlines</h5>
                <ul className="space-y-3 text-xs font-bold text-slate-100">
                  <li className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 group-hover:text-white transition-colors">Primary Veterinarian</span>
                    <span className="text-white">// SYNCED</span>
                  </li>
                  <li className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 group-hover:text-white transition-colors">Emergency Vet Clinic</span>
                    <span className="text-white">// SYNCED</span>
                  </li>
                  <li className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 group-hover:text-white transition-colors">Poison Control</span>
                    <span className="text-white">1-800-222-1222</span>
                  </li>
                  <li className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 group-hover:text-white transition-colors">Local Animal Shelter</span>
                    <span className="text-white">// SYNCED</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-2">Medical Archive</h5>
                <ul className="space-y-3 text-xs font-bold text-slate-100">
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-500">✓</span> Digital Vaccination History
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-500">✓</span> Microchip Registration ID
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-500">✓</span> Recent Clinical Photos
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 font-black italic">
                    <span className="text-emerald-500">!</span> Medical Record Backup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DisasterPreparednessGuide;