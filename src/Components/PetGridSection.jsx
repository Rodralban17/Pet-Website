import React from 'react';
import { motion } from 'framer-motion';
import bulliesData from './bulliesData.json'; // Using your 15-item JSON file

const PetGridSection = () => {
  // Directly grab the first 9 pets from your dataset
  const displayedPets = bulliesData.slice(0, 9);

  // Framer motion variants for a staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Delays the entry of each card slightly for a premium feel
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      
      {/* --- Section Header --- */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Featured <span className="text-orange-600">Premium Lineages</span>
        </h2>
        <p className="text-gray-500 font-normal">
          Browse through verified purebred American Bullies listed by premium, registered global breeders.
        </p>
      </div>

      {/* --- Responsive Grid Layout --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {displayedPets.map((pet) => (
          <motion.div
            key={pet.id}
            variants={cardVariants}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-shadow"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Top left badge */}
              <span className="absolute top-4 left-4 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                Verified Blood
              </span>

              {/* Price Tag Overlay */}
              <div className="absolute bottom-4 right-4 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                <p className="text-white font-black text-lg">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(pet.price)}
                </p>
              </div>

              {/* Favorite Action Button */}
              <button className="absolute top-4 right-4 w-9 h-9 bg-white hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-full flex items-center justify-center shadow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>

            {/* Info Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {pet.name}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1 mt-1">
                    📍 {pet.location}
                  </span>
                </div>
                
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                  {pet.class} Bully • {pet.age}
                </p>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {pet.description}
                </p>
              </div>

              {/* Pedigree Authenticity Progress Indicator */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700">Pedigree Accuracy</span>
                  <span className="text-orange-600">100% Certified</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full w-full rounded-full" />
                </div>
                <p className="text-[11px] text-slate-400 font-medium italic">Lineage: {pet.bloodline}</p>
              </div>

              {/* Footer Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button className="flex-1 bg-slate-900 hover:bg-orange-600 text-white font-extrabold py-3 px-4 rounded-xl shadow transition-colors text-sm">
                  View Pedigree
                </button>
                
                <button className="p-3 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-xl transition-colors border border-orange-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.1.103.13.25.083.386l-.517 1.552a.375.375 0 0 0 .47.47l1.552-.516a.375.375 0 0 1 .386.083c1.457 1.414 3.376 2.274 5.48 2.274Z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PetGridSection;