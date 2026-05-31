import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const costData = {
  dogs: {
    title: "Dogs & Puppies",
    standard: [
      { name: "Placement Fee", cost: 1000, desc: "Includes microchipping, initial core vaccinations, and global registry files." },
      { name: "Initial Welcoming Supplies", cost: 200, desc: "Premium structural crate, heavy-duty leash, tactical collar, bowls, and starter toys." },
      { name: "Nutrition & Dietary Plans", cost: 400, desc: "High-protein raw formulation or super-premium dry kibble (Annual projection)." },
      { name: "Clinical Veterinary Care", cost: 500, desc: "Routine health checks, fecal panels, and proactive heartworm preventatives." },
      { name: "Socialization & Training", cost: 200, desc: "Basic obedience enrollment courses and early pack socialization milestones." },
      { name: "Grooming & Maintenance", cost: 300, desc: "Coat blowouts, undercoat structural stripdowns, and sanitary nail trims." },
      { name: "Emergency Buffer Fund", cost: 500, desc: "Recommended immediate allocation for unforeseen medical or clinical scenarios." }
    ],
    premium: [
      { name: "Placement Fee", cost: 11000, desc: "Elite champion bloodlines, full breeding rights, and complete physical structure certifications." },
      { name: "Initial Welcoming Supplies", cost: 500, desc: "Custom bespoke leather equipment, impact-resistant travel kennels, and specialized training rigs." },
      { name: "Nutrition & Dietary Plans", cost: 800, desc: "Customized freeze-dried raw culinary menus and performance joint support supplements." },
      { name: "Clinical Veterinary Care", cost: 1200, desc: "Advanced genetic profiles, preventative orthopedic screenings, and 24/7 on-call concierge access." },
      { name: "Socialization & Training", cost: 600, desc: "Private elite behavioral handling, protection baselines, or specialized sports conditioning." },
      { name: "Grooming & Maintenance", cost: 800, desc: "Frequent competition-tier hydrobaths, hand-stripping treatments, and structural spa maintenance." },
      { name: "Emergency Buffer Fund", cost: 2000, desc: "Robust dedicated premium medical reserve for absolute peace of mind." }
    ]
  }
};

const CostCalculator = () => {
  const [tier, setTier] = useState('standard'); // 'standard' or 'premium'
  const currentCategory = costData.dogs;
  const currentItems = currentCategory[tier];

  // Calculate totals mathematically on the fly
  const totalCost = currentItems.reduce((acc, item) => acc + item.cost, 0);

  // Maximum total possible across standard or premium tiers to calibrate visual progress scales accurately
  const maxPossibleTotal = 16900; 

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Section Header & Tier Switcher --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-orange-600 font-mono text-xs tracking-widest uppercase block">// Budget Forecaster</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              First-Year Investment Setup
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              Project real-time companion overhead cost margins by dynamically swapping care tiers.
            </p>
          </div>

          {/* Interactive Tier Toggle Switches */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner shrink-0 self-start md:self-center">
            <button
              onClick={() => setTier('standard')}
              className={`px-5 py-2.5 text-xs font-black rounded-lg transition-all uppercase tracking-wider ${
                tier === 'standard'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Standard Tier
            </button>
            <button
              onClick={() => setTier('premium')}
              className={`px-5 py-2.5 text-xs font-black rounded-lg transition-all uppercase tracking-wider ${
                tier === 'premium'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/10'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Elite Premium Tier
            </button>
          </div>
        </div>

        {/* --- Two-Column Split Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: Dynamic Interactive Cost Rows (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {currentItems.map((item) => (
                  <div 
                    key={item.name}
                    className="p-5 border border-slate-200 rounded-2xl bg-white flex items-start justify-between gap-6 hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-sm md:text-base text-slate-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-black text-slate-900 font-mono">
                        ${item.cost.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">Est. Setup</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: The Live Total Summary Matrix Panel (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 border border-slate-200 rounded-3xl p-8 bg-white shadow-md flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">Investment Summary</h3>
                <p className="text-xs text-slate-400 mt-0.5">Aggregated metrics based on your custom {tier} selection.</p>
              </div>

              {/* Total Cost Display Box */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-1">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 block">Total Projected First-Year Capital</span>
                <motion.div 
                  key={totalCost}
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-black text-slate-950 font-mono tracking-tight"
                >
                  ${totalCost.toLocaleString()}
                </motion.div>
              </div>

              {/* Graphical Scale / Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                  <span>Minimum Threshold</span>
                  <span>Maximum Ceiling Cap</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 border border-slate-200/60 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalCost / maxPossibleTotal) * 100}%` }}
                    transition={{ type: "spring", stiffness: 60 }}
                    className={`h-full transition-all ${
                      tier === 'premium' ? 'bg-orange-600' : 'bg-slate-900'
                    }`}
                  />
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-500 font-mono pt-1">
                  <span>$3,100</span>
                  <span>$16,900</span>
                </div>
              </div>
            </div>

            {/* Platform Micro Disclaimer Hook */}
            <div className="pt-4 border-t border-slate-100 flex items-start gap-3 text-slate-400">
              <span className="text-sm mt-0.5">💡</span>
              <p className="text-[11px] leading-relaxed">
                Calculated numbers reflect average regional cost profiles for premium dogs. Individual medical history, private training variations, or nutritional selections can shift exact results.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CostCalculator;