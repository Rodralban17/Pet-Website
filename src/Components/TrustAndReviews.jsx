import React from 'react';
import { motion } from 'framer-motion';

// Sample SVG placeholders representing high-end kennel clubs, registries, and transport logos
const registryLogos = [
  { name: "ABKC Certified", label: "ABKC REGISTRY" },
  { name: "UKC Bloodlines", label: "UKC ALLIANCE" },
  { name: "BBC International", label: "BULLY KENNEL CLUB" },
  { name: "Global Vet Check", label: "VET VERIFIED" },
  { name: "Secure Escrow Pay", label: "SECURE PAY" },
];

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Founder, IronClad Kennels",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    quote: "Moving our kennel transactions to American Bully MarketPlace completely eliminated our fraud issues. The pedigree verification system is flawless, and buyers feel safe knowing their escrow funds are protected until delivery."
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "DVM, Canine Reproduction Specialist",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150",
    quote: "I highly recommend this marketplace to clients looking for healthy, structurally sound American Bullies. The requirement for DNA screening and vet clearance before listing sets a much-needed benchmark in the industry."
  }
];

const TrustAndReviews = () => {
  return (
    <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Area --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700 text-xs font-bold uppercase tracking-wider">
            🛡️ Verified Platform Integrity
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Backed by Registries. <span className="text-orange-600">Trusted by Pros.</span>
          </h2>
          <p className="text-slate-500 text-lg font-normal">
            We partner with elite kennel structures, verified veterinarians, and top-tier registration entities to maintain market standards.
          </p>
        </div>

        {/* --- Infinite Logo Ticker (Replacing Static Grid) --- */}
        <div className="relative w-full overflow-hidden bg-slate-50 py-8 rounded-2xl mb-20 border border-slate-100">
          {/* Gradient masking overlays to fade edges left & right */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-16 items-center w-max px-4"
            animate={{ x: [0, -1000] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
          >
            {/* Double the array elements to ensure loop seamlessness */}
            {[...registryLogos, ...registryLogos, ...registryLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default select-none">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xs">
                  ★
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800 tracking-tight leading-none">{logo.name}</h4>
                  <span className="text-[10px] text-slate-400 font-bold tracking-widest">{logo.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Testimonial Grid Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              {/* Giant Decorative quotation icon background */}
              <div className="absolute top-6 right-8 text-slate-100 font-serif text-8xl leading-none select-none pointer-events-none">
                “
              </div>

              {/* Review Text */}
              <div className="space-y-4 relative z-10">
                {/* 5 Star Rating Row */}
                <div className="flex gap-1 text-amber-500 text-sm">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-slate-700 text-base leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Reviewer Profile Header Info */}
              <div className="flex items-center gap-4 pt-8 mt-6 border-t border-slate-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.name}</h3>
                  <p className="text-sm text-orange-600 font-semibold">{item.role}</p>
                  <span className="text-xs text-slate-400 font-medium">📍 {item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustAndReviews;