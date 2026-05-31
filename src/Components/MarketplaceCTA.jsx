import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MarketplaceCTA = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 bg-slate-900 rounded-3xl my-16 overflow-hidden shadow-2xl border border-slate-800">
      
      {/* --- Ambient Background Glow Decor --- */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* --- Content Layout --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          ✨ Join the Network Today
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight"
        >
          Ready to Secure Your Next <br />
          <span className="text-orange-500">World-Class Lineage?</span>
        </motion.h2>

        {/* Paragraph Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Whether you are looking to invest in a top-tier foundation puppy or list your kennel's active certified studs, our secure platform provides the structure you need.
        </motion.p>

        {/* --- Action Buttons (Targeting both Buyers & Sellers) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Main Marketplace Button */}
          <Link to="/marketplace">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl shadow-lg shadow-orange-600/20 transition flex items-center justify-center gap-2 text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
            </svg>
            Explore Marketplace
          </motion.button>
          </Link>
          
        </motion.div>

        {/* --- Lower Trust Bullet Points --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400 font-semibold text-xs md:text-sm pt-8 border-t border-slate-800/60"
        >
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-base">✓</span> Verified Kennel Registry
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-base">✓</span> Secure Escrow System
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-base">✓</span> Guaranteed DNA & Health Checks
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketplaceCTA;