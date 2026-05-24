import React from 'react';

const MarketplaceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- Main Grid Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          
          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-xl">
                B
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">
                AMERICAN BULLY <span className="text-orange-500">MARKET</span>
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The premier premium marketplace for verified American Bully lineages. Connecting professional breeders with elite global buyers under a secure, escrow-backed system.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-white flex items-center justify-center transition-all">
                <span className="font-bold text-sm">fb</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-white flex items-center justify-center transition-all">
                <span className="font-bold text-sm">tk</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-white flex items-center justify-center transition-all">
                <span className="font-bold text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Column 2: Marketplace */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Marketplace</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Find Bullies<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Verified Studs<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Upcoming Litters<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
            </ul>
          </div>

          {/* Column 3: Breeders */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Breeders</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Apply as Breeder<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Escrow Protection<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">DNA Directory<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
            </ul>
          </div>

          {/* Column 4: Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Our Standards<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Help Center & FAQ<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors inline-block relative group">Contact Support<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"/></a></li>
            </ul>
          </div>

        </div>

        {/* --- Sub-Footer Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {currentYear} American Bully Market. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Escrow Rules</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default MarketplaceFooter;