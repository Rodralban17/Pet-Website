import React from 'react';
import { motion } from 'framer-motion';

const EmergencyHero = () => {
  return (
    <section className="relative w-full bg-red-700 text-white pt-28 pb-20 px-6 overflow-hidden">
      
      {/* --- Ambient Alert Visual Effects --- */}
      {/* Dynamic expanding pulse ring simulating a medical beacon flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-white/20"
        />
      </div>
      
      {/* Subtle diagnostic layout grid line texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* --- High-Alert Flashing Warning Badge --- */}
        <motion.div 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono font-black tracking-widest uppercase text-amber-300"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Critical Care Routing Active
        </motion.div>

        {/* --- Radical Bold Typography Headline --- */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
          >
            Emergency Pet <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 drop-shadow-sm">
              Care Resources
            </span>
          </motion.h1>
          
          {/* --- Optimized Direct Copy --- */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-red-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Immediate access to critical care triage parameters, urgent symptom assessment workflows, and rapid live hotline channels for life-threatening veterinary situations.
          </motion.p>
        </div>

        {/* --- Primary Urgent Hotlinks (Re-engineered Action Layout) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-2xl mx-auto"
        >
          {/* 24/7 Primary Phone Terminal */}
          <a 
            href="tel:1-800-738-4357"
            className="w-full sm:w-1/2 flex items-center justify-between p-5 bg-white text-red-950 font-black rounded-2xl shadow-xl shadow-red-950/20 hover:bg-red-50 transition-all transform hover:-translate-y-1 duration-150 group"
          >
            <div className="flex items-center gap-4 text-left">
              <span className="text-2xl bg-red-100 p-2.5 rounded-xl text-red-600 group-hover:scale-110 transition-transform">📞</span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-red-700 block font-bold">Primary Dispatch</span>
                <span className="text-base font-black tracking-tight font-mono">1-800-PET-HELP</span>
              </div>
            </div>
            <span className="text-red-400 font-mono text-sm group-hover:text-red-700 transition-colors">➔</span>
          </a>

          {/* Poison Control Center Hotlink */}
          <a 
            href="tel:1-888-764-7661"
            className="w-full sm:w-1/2 flex items-center justify-between p-5 bg-amber-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-red-950/20 hover:bg-amber-300 transition-all transform hover:-translate-y-1 duration-150 group"
          >
            <div className="flex items-center gap-4 text-left">
              <span className="text-2xl bg-amber-500/20 p-2.5 rounded-xl text-amber-950 group-hover:scale-110 transition-transform">🛡️</span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-900 block font-bold">Toxicology Line</span>
                <span className="text-base font-black tracking-tight font-mono">1-888-POISON-1</span>
              </div>
            </div>
            <span className="text-amber-800 font-mono text-sm group-hover:text-amber-950 transition-colors">➔</span>
          </a>
        </motion.div>

        {/* --- Real-Time Trust Sub-Bar --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-6 pt-6 text-[10px] font-mono tracking-widest text-red-200"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live Response: &lt; 60s
          </div>
          <div className="text-white/20">|</div>
          <div>Available Worldwide</div>
        </motion.div>

      </div>
    </section>
  );
};

export default EmergencyHero;