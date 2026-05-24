import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Browse & Verify",
    desc: "Explore our curated list of premium Bullies. Every breeder on our platform undergoes a rigorous background and facility verification.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Direct Connect",
    desc: "Communicate directly with verified breeders. Request live video calls, health certifications, and pedigree documentation in real-time.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Secure Transaction",
    desc: "Complete your purchase through our secure escrow system. Funds are only released once health clearance and transport are confirmed.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "White Glove Delivery",
    desc: "Coordinate specialized pet transport. Receive your new companion along with full AKC/ABKC registration papers at your doorstep.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.604-8.05-8.05-8.05H7.5a4.5 4.5 0 0 0-4.5 4.5v11.25m17.25 0V11.25" />
      </svg>
    ),
  },
];

const MarketplaceProcess = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            The Elite <span className="text-orange-600">Acquisition</span> Path
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We've streamlined the luxury bully market to ensure transparency, 
            security, and the highest standard of animal welfare.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm group-hover:border-orange-500 group-hover:text-orange-600 transition-all duration-300 mb-6 relative">
                {step.icon}
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 text-white rounded-full text-xs font-bold flex items-center justify-center border-4 border-slate-50">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Footer Action --- */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-orange-600 transition-colors"
          >
            Start Your Search
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceProcess;