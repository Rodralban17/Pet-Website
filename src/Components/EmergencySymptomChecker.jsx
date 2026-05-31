import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const symptomMatrix = [
  // CRITICAL SEVERITY (Red Alerts)
  { id: "sym_1", label: "Difficulty Breathing", tier: "critical" },
  { id: "sym_2", label: "Unconscious/Unresponsive", tier: "critical" },
  { id: "sym_3", label: "Severe Bleeding", tier: "critical" },
  { id: "sym_4", label: "Seizures", tier: "critical" },
  { id: "sym_5", label: "Bloated/Distended Abdomen", tier: "critical" },
  { id: "sym_6", label: "Pale or Blue Gums", tier: "critical" },

  // URGENT SEVERITY (Amber Alerts)
  { id: "sym_7", label: "Vomiting Blood", tier: "urgent" },
  { id: "sym_8", label: "Unable to Urinate", tier: "urgent" },
  { id: "sym_9", label: "Eye Injury", tier: "urgent" },
  { id: "sym_10", label: "Suspected Broken Bone", tier: "urgent" },
  { id: "sym_11", label: "Heatstroke Symptoms", tier: "urgent" },
  { id: "sym_12", label: "Suspected Poisoning", tier: "urgent" },

  // MONITORING SEVERITY (Green/Slate Alerts)
  { id: "sym_13", label: "Persistent Vomiting", tier: "monitor" },
  { id: "sym_14", label: "Diarrhea", tier: "monitor" },
  { id: "sym_15", label: "Lethargy/Weakness", tier: "monitor" },
  { id: "sym_16", label: "Loss of Appetite", tier: "monitor" },
  { id: "sym_17", label: "Limping", tier: "monitor" },
  { id: "sym_18", label: "Coughing", tier: "monitor" }
];

const EmergencySymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (id) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Determine triage status based on the highest severity symptom selected
  const selectedObjects = symptomMatrix.filter((s) => selectedSymptoms.includes(s.id));
  const hasCritical = selectedObjects.some((s) => s.tier === "critical");
  const hasUrgent = selectedObjects.some((s) => s.tier === "urgent");
  const hasMonitor = selectedObjects.some((s) => s.tier === "monitor");

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- Header Elements --- */}
        <div className="space-y-1">
          <span className="text-red-600 font-mono text-xs tracking-widest uppercase block">// Digital Triage</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Emergency Symptom Checker
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Select all behavioral or physiological markers your companion is currently presenting to update emergency protocols.
          </p>
        </div>

        {/* --- Interactive Checkbox Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {symptomMatrix.map((symptom) => {
            const isChecked = selectedSymptoms.includes(symptom.id);
            
            // Generate color borders dynamically based on safety classes
            const tierStyles = 
              symptom.tier === "critical" 
                ? isChecked ? "border-red-600 bg-red-50 text-red-950 shadow-sm" : "border-red-200 hover:border-red-300 text-slate-700" 
                : symptom.tier === "urgent"
                ? isChecked ? "border-amber-500 bg-amber-50/40 text-amber-950 shadow-sm" : "border-amber-200 hover:border-amber-300 text-slate-700"
                : isChecked ? "border-emerald-600 bg-emerald-50/30 text-emerald-950 shadow-sm" : "border-slate-200 hover:border-slate-300 text-slate-700";

            return (
              <button
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`w-full text-left p-4 rounded-xl border text-xs md:text-sm font-bold transition-all flex items-center justify-between group bg-white ${tierStyles}`}
              >
                <span>{symptom.label}</span>
                
                {/* Visual Circle Indicator Checkbox */}
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isChecked 
                    ? symptom.tier === 'critical' ? 'bg-red-600 border-red-600 text-white' 
                    : symptom.tier === 'urgent' ? 'bg-amber-500 border-amber-500 text-white'
                    : 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 bg-white group-hover:border-slate-400'
                }`}>
                  {isChecked && <span className="text-[9px]">✓</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* --- DYNAMIC DIAGNOSIS OUTPUT TERMINAL --- */}
        <div className="max-w-4xl pt-4">
          <AnimatePresence mode="wait">
            {selectedSymptoms.length === 0 ? (
              /* State 0: No selections active */
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 border border-slate-200 rounded-2xl bg-white text-center text-xs font-mono font-bold text-slate-400 uppercase tracking-wider"
              >
                Select one or multiple symptoms above to initialize triage protocols.
              </motion.div>
            ) : hasCritical ? (
              /* State 1: Critical Severity Escalation */
              <motion.div 
                key="critical-alert"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 border-2 border-red-600 rounded-2xl bg-white shadow-lg shadow-red-600/5 flex flex-col md:flex-row items-start justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🚨</span>
                    <h4 className="text-lg font-black uppercase text-red-700 tracking-tight">Immediate Veterinary Intervention Required</h4>
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-medium">
                    One or more selected symptoms indicate a critical, life-threatening emergency. Do not wait for symptoms to change. Transport your companion to the nearest open emergency clinical veterinary center immediately.
                  </p>
                </div>
                <button className="w-full md:w-auto px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-red-600/10 shrink-0">
                  Route to Nearest Vet
                </button>
              </motion.div>
            ) : hasUrgent ? (
              /* State 2: Urgent Severity Escalation */
              <motion.div 
                key="urgent-alert"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 border border-amber-500 rounded-2xl bg-white shadow-sm flex flex-col md:flex-row items-start justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    <h4 className="text-lg font-black uppercase text-amber-700 tracking-tight">Urgent Evaluation Recommended</h4>
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-medium">
                    Your pet is exhibiting urgent symptoms that require prompt attention. Contact an on-call tele-triage specialist or coordinate an urgent diagnostic appointment with your regular primary clinic within the day.
                  </p>
                </div>
                <button className="w-full md:w-auto px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0">
                  Speak to Specialist
                </button>
              </motion.div>
            ) : (
              /* State 3: Non-Urgent Standard Care Monitor Protocol */
              <motion.div 
                key="monitor-alert"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 border border-emerald-600 rounded-2xl bg-white shadow-sm flex flex-col md:flex-row items-start justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">👁️</span>
                    <h4 className="text-lg font-black uppercase text-emerald-700 tracking-tight">Monitor and Observe</h4>
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-medium">
                    Continue monitoring your pet's condition closely. If symptoms worsen, do not clear up, or new symptoms appear over the next 24 hours, contact your standard family veterinarian immediately.
                  </p>
                </div>
                <button className="w-full md:w-auto px-5 py-3 bg-transparent border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0">
                  Care Guidelines
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default EmergencySymptomChecker;