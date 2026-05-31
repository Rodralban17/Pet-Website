import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelinePhases = [
  { title: "Application Phase", duration: "1-3 Days", icon: "📋" },
  { title: "Evaluation Phase", duration: "3-7 Days", icon: "🏠" },
  { title: "Meeting Phase", duration: "1-2 Weeks", icon: "🐕" },
  { title: "Finalization Phase", duration: "1-3 Days", icon: "✨" }
];

const quizQuestions = [
  {
    id: 1,
    question: "What is your primary living arrangement style?",
    options: [
      "Apartment / Condo with no private yard",
      "Suburban home with a shared outdoor space",
      "Single-family residence with a fully secured fence",
      "Rural acreage / Farm environment"
    ]
  },
  {
    id: 2,
    question: "How many hours will the pet spend home alone on a typical weekday?",
    options: [
      "Over 8 hours (Full work shift without check-ins)",
      "5 to 8 hours (Standard work day)",
      "2 to 4 hours (Part-time or hybrid schedule)",
      "Less than 2 hours / Someone is always home"
    ]
  },
  {
    id: 3,
    question: "Have you budgeted for annual veterinary care and insurance costs?",
    options: [
      "No, I haven't deeply evaluated medical overhead yet",
      "I have a loose rough estimate of general costs",
      "Yes, I have allocated a standard $500 - $1,000 annually",
      "Yes, I am budgeting $1,000+ with a dedicated emergency reserve"
    ]
  }
];

const PlacementAssessment = () => {
  // Assessment Quiz State
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuizItem = quizQuestions[currentStep];
  const progressPercentage = Math.round(((currentStep + 1) / quizQuestions.length) * 100);

  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: optionIndex });
    
    // Smoothly auto-advance after selection or toggle complete state
    setTimeout(() => {
      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setQuizComplete(true);
      }
    }, 300);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setQuizComplete(false);
  };

  return (
    <div className="py-16 px-6 bg-transparent space-y-24 max-w-6xl mx-auto">
      
      {/* ========================================================================= */}
      {/* 1. UPGRADED COMPONENT: CONNECTED PROGRESS TIMELINE                        */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-1">
          <span className="text-orange-600 font-mono text-xs tracking-widest uppercase block">// Processing Speed</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Placement Timeline Overview</h2>
        </div>

        {/* Timeline Grid Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {timelinePhases.map((phase, idx) => (
            <div key={phase.title} className="relative group">
              
              {/* Horizontal Connecting Dash Track Line (Hidden on mobile stacks) */}
              {idx < timelinePhases.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] right-[-40%] h-[2px] bg-slate-200 border-dashed border-t-2 z-0" />
              )}

              <div className="relative z-10 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-xl shadow-inner">
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm md:text-base text-slate-900 tracking-tight">{phase.title}</h3>
                    <span className="text-xs text-orange-600 font-mono font-bold">{phase.duration}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Phase step {idx + 1} processing metrics required before moving to the next pipeline marker.
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. UPGRADED COMPONENT: INTERACTIVE READINESS ASSESSMENT WIZARD            */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="space-y-1">
          <span className="text-orange-600 font-mono text-xs tracking-widest uppercase block">// Compatibility Matrix</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Readiness Profiling Panel</h2>
        </div>

        {/* Main interactive form card frame */}
        <div className="border border-slate-200 rounded-3xl p-6 md:p-10 bg-white shadow-md max-w-4xl">
          
          <AnimatePresence mode="wait">
            {!quizComplete ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Tracker Meta Header */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                    <span className="text-slate-900">{progressPercentage}% Complete</span>
                  </div>
                  
                  {/* Real-time Dynamic Progress Loading Bar Tracker */}
                  <div className="w-full h-2 bg-slate-100 border border-slate-200/40 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-slate-900" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ type: "spring", stiffness: 60 }}
                    />
                  </div>
                </div>

                {/* Question Label */}
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  {currentQuizItem.question}
                </h3>

                {/* Multiple Choice List Option Buttons */}
                <div className="space-y-3">
                  {currentQuizItem.options.map((option, index) => {
                    const isSelected = selectedAnswers[currentStep] === index;
                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        className={`w-full text-left p-5 rounded-2xl border text-sm font-bold transition-all flex items-center justify-between group ${
                          isSelected
                            ? 'border-orange-500 bg-orange-50/20 shadow-sm text-slate-900'
                            : 'border-slate-200 bg-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <span>{option}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? 'border-orange-600 bg-orange-600 text-white text-[10px]' : 'border-slate-300'
                        }`}>
                          {isSelected && "✓"}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Back Step Utility Navigation Link */}
                {currentStep > 0 && (
                  <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider font-mono transition-colors"
                  >
                    ← Previous Question
                  </button>
                )}
              </motion.div>
            ) : (
              // Completion Frame Block State
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6 max-w-md mx-auto"
              >
                <div className="text-4xl">🎯</div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Profile Configured</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your baseline home readiness assessment answers have been synced into your master registration file profile.
                  </p>
                </div>
                
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors">
                    Submit Master File
                  </button>
                  <button 
                    onClick={handleReset}
                    className="px-6 py-3 bg-transparent border border-slate-200 text-slate-500 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                  >
                    Retake Form
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
};

export default PlacementAssessment;