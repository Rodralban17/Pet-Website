import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- Import your real 15-pet JSON file here ---
import bulliesData from './bulliesData.json'; 

const HeroSection = () => {
  // Grab the first 3 bullies from your 15-pet list for the animated stack
  const [cards, setCards] = useState(bulliesData.slice(0, 3));

  const handleNextCard = () => {
    setCards((prevCards) => {
      const updated = [...prevCards];
      const first = updated.shift(); // Pop the top card off
      if (first) updated.push(first); // Send it to the back of the stack
      return updated;
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden py-12 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT CONTENT BLOCK --- */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:max-w-xl"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full text-orange-700 text-sm font-semibold tracking-wide">
            🔥 <span className="uppercase text-xs tracking-wider">The Ultimate Bully Network</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With <span className="text-orange-600">Elite</span> American Bullies
          </h1>

          <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
            Welcome to the premier marketplace for verified American Bully bloodlines. Securely browse, buy, and list Pocket, Standard, XL, and Exotic lineages from top global breeders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-xl shadow-lg shadow-orange-600/20 transition flex items-center justify-center gap-2 text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
              </svg>
              Explore Marketplace
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-slate-800 text-slate-800 font-extrabold rounded-xl transition text-base"
            >
              Verify Pedigree
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div>
              <p className="text-2xl md:text-3xl font-black text-slate-900">450+</p>
              <p className="text-xs md:text-sm font-medium text-gray-500 mt-1">Verified Breeders</p>
            </div>
            <div className="border-x border-gray-200 px-4">
              <p className="text-2xl md:text-3xl font-black text-slate-900">$2.4M+</p>
              <p className="text-xs md:text-sm font-medium text-gray-500 mt-1">Safe Transactions</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-slate-900">1,200+</p>
              <p className="text-xs md:text-sm font-medium text-gray-500 mt-1">Active Studs</p>
            </div>
          </div>
        </motion.div>


        {/* --- RIGHT ANIMATED CARD STACK BLOCK --- */}
        <div className="relative h-[480px] md:h-[520px] flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
          <div className="relative w-[320px] md:w-[360px] h-[420px]">
            <AnimatePresence mode="popLayout">
              {cards.map((pet, index) => {
                return (
                  <motion.div
                    key={pet.id}
                    style={{ zIndex: cards.length - index }}
                    animate={{
                      scale: 1 - index * 0.05,
                      x: index * 20,
                      y: index * -15,
                    }}
                    exit={{
                      x: -250,
                      opacity: 0,
                      scale: 0.85,
                      rotate: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute inset-0 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end p-6 select-none"
                  >
                    <img 
                      src={pet.image} 
                      alt={pet.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-85 pointer-events-none" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                    {/* Using the exact keys from your 15-item JSON data */}
                    <div className="relative z-20 space-y-2">
                      <div className="flex gap-2">
                        <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md text-xs font-bold text-white uppercase tracking-wider">
                          {pet.class} Bully
                        </span>
                        <span className="bg-orange-600 px-2.5 py-0.5 rounded-md text-xs font-bold text-white uppercase tracking-wider">
                          {pet.age}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <h3 className="text-2xl font-black text-white tracking-wide">{pet.name}</h3>
                        <p className="text-xl font-black text-orange-400">
                          {/* Formatting numbers to currency dynamically */}
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(pet.price)}
                        </p>
                      </div>

                      <p className="text-xs text-gray-300 font-semibold italic">Lineage: {pet.bloodline}</p>
                      <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed pt-1 font-light">
                        {pet.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextCard}
            className="absolute bottom-2 right-4 lg:right-0 z-50 w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-xl border border-emerald-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;