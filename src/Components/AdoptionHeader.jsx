import React from 'react';
import { motion } from 'framer-motion';

const AdoptionHeader = () => {
  return (
    <section className="relative bg-slate-950  py-20 px-6 overflow-hidden">
      
      {/* Visual background element - soft warm ambient radial light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[00px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- Left Column: Bold Asymmetric Typography (6 cols) --- */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest"
          >
            🐾 Handpicked Companionship
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
          >
            Finding Your Perfect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500">
              Four-Legged Match
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal"
          >
            We've completely redesigned how families connect with premium pets. By bypassing confusing paperwork and introducing structured health profiling, direct video breeder logs, and secure delivery logistics, matching with your new best friend is entirely stress-free.
          </motion.p>

          {/* Action Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/20 transition-all">
              Browse Available Pups
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-800 text-slate-300 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-slate-900 transition-colors">
              How Placement Works
            </button>
          </motion.div>
        </div>

        {/* --- Right Column: Modern Live Stat Matrix (5 cols) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, type: "spring" }}
          className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800/60 shadow-xl space-y-6"
        >
          <div className="border-b border-slate-800 pb-4">
            <h3 className="font-bold text-white text-base">Current Marketplace Status</h3>
            <p className="text-xs text-slate-500">Real-time certified companion placement metrics.</p>
          </div>

          {/* Stats Rows */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900">
              <span className="text-2xl font-black text-white block">140+</span>
              <span className="text-xs text-slate-400 font-medium">Screened Litters</span>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900">
              <span className="text-2xl font-black text-emerald-500 block">100%</span>
              <span className="text-xs text-slate-400 font-medium">Health Cleared</span>
            </div>
          </div>

          {/* Micro trust alert box */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex items-start gap-3">
            <span className="text-xl mt-0.5">🛡️</span>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">Anti-Scam Guarantee</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Every animal undergoes structural vet checkups and microchip validation before transitioning to their destination home.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AdoptionHeader;