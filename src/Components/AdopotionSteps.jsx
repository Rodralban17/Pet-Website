import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const adoptionSteps = [
  {
    id: 1,
    title: "Match Assessment & Consultation",
    subtitle: "Evaluating baseline lifestyles for healthy placement.",
    desc: "Complete a custom companion profile detailing your lifestyle, yard setup, and previous canine experience. This helps our platform cross-reference compatibility factors like energy levels and temperament profiles to prevent mismatched placements.",
    requirements: ["Verified residential overview", "Activity commitment review", "Experience checklist Completion"]
  },
  {
    id: 2,
    title: "Live Video Showcase & Verification",
    subtitle: "Real-time connection with your chosen pup.",
    desc: "Review high-definition media profiles and coordinate private, live virtual introduction calls. See your selected puppy in action, observe behavioral baselines, and interact directly with the certified breeder prior to finalizing commitments.",
    requirements: ["Live virtual meet arranged", "Behavioral observations logged", "Breeder background check confirmation"]
  },
  {
    id: 3,
    title: "DNA Screening & Clinical Health Panels",
    subtitle: "Medical and lineage authenticity validation.",
    desc: "Before transitioning custody, the animal undergoes an independent, thorough veterinary screening. This includes full structural soundness diagnostics, congenital health reports, age-appropriate vaccine logs, and DNA registration filings.",
    requirements: ["100% certified health panel", "DNA registration confirmation", "Microchip documentation attached"]
  },
  {
    id: 4,
    title: "Secured Trust Escrow Execution",
    subtitle: "Protected marketplace financial clearing.",
    desc: "Securely route payments into our protected platform escrow terminal. Funds remain securely held and are only disbursed to the breeder once your pet successfully arrives at your location and clears its arrival health inspection.",
    requirements: ["Identity authorization check", "Funds securely verified in escrow", "Transaction receipts issued"]
  },
  {
    id: 5,
    title: "Specialized Climate Transport Custody",
    subtitle: "Premium safe-travel logistics.",
    desc: "Coordinate specialized pet transport via certified, climate-controlled ground transit or accompanied flight nanny solutions. Receive real-time tracking checkpoints and automated communication updates throughout the entire journey.",
    requirements: ["Route itinerary finalized", "Transit tracking links activated", "Flight nanny or vehicle check-in completed"]
  },
  {
    id: 6,
    title: "Welcome Integration Support",
    subtitle: "Post-arrival companion resources.",
    desc: "Welcome your new pet home with confidence. Gain immediate entry into our private portal network, featuring priority access to specialty veterinarians, structural dietary guides, and behavioral integration coaches.",
    requirements: ["Post-arrival checkup schedule", "Lineage registry transfer complete", "Lifetime chat support activation"]
  }
];

const InteractivePlacementSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="mb-16 max-w-2xl">
          <span className="text-orange-600 font-mono text-xs tracking-widest uppercase block mb-2">// Placement Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            The Safe Way <span className="text-slate-400">Home</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            A comprehensive overview of our mandatory multi-tier screening and transport process.
          </p>
        </div>

        {/* --- Outer Split Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Interactive Nav List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {adoptionSteps.map((step) => {
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5 group bg-transparent ${
                    isSelected 
                      ? 'border-orange-500 shadow-md shadow-orange-500/5' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Number Badge */}
                  <div className={`w-10 h-10 rounded-xl font-bold font-mono text-sm flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected 
                      ? 'bg-orange-600 border-orange-500 text-white' 
                      : 'bg-slate-100 border-slate-200 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {String(step.id).padStart(2, '0')}
                  </div>

                  {/* Short Text Summaries */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-sm md:text-base tracking-tight transition-colors ${
                      isSelected ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{step.subtitle}</p>
                  </div>

                  {/* Interactive Status Arrow Icon */}
                  <div className={`text-slate-300 transition-transform duration-200 ${isSelected ? 'translate-x-1 text-orange-500' : ''}`}>
                    ➔
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL: Dynamic Viewport Detail Showcase (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 border border-slate-200 rounded-3xl p-8 bg-transparent min-h-[400px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {adoptionSteps.map((step) => step.id === activeStep && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] bg-orange-600/10 border border-orange-500/20 text-orange-600 px-2.5 py-1 rounded-md font-mono font-bold uppercase tracking-wider">
                        Step Details Phase {step.id}
                      </span>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight pt-2">{step.title}</h4>
                      <p className="text-xs text-orange-600 font-medium italic">{step.subtitle}</p>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Requirements Sub-List */}
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Phase Verification Checklist:</h5>
                    <ul className="space-y-2">
                      {step.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                          <span className="text-emerald-600 shrink-0">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractivePlacementSteps;