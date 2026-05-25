import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, MapPin, MessageCircle } from "lucide-react";

import bulliesData from "../Components/bulliesData.json";

const MarketplaceCatalog = () => {
  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const itemsPerPage = 6;

  // Filter logic
  const filteredPets = bulliesData.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.bloodline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesClass =
      selectedClass === "All" || pet.class === selectedClass;

    const matchesLocation =
      selectedLocation === "All" || pet.location === selectedLocation;

    return matchesSearch && matchesClass && matchesLocation;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentPetsGroup = filteredPets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    const catalog = document.getElementById("catalog-top");

    if (catalog) {
      catalog.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="catalog-top"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-slate-50 min-h-screen"
    >
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          Verified Global Inventory
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          Explore authentic, DNA-tested lineages uploaded directly by verified
          companion breeders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <SlidersHorizontal className="w-5 h-5 text-slate-700" />

            <h3 className="font-bold text-slate-900 text-base">
              Filter Properties
            </h3>
          </div>

          {/* Search */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Search Keyword
            </label>

            <input
              type="text"
              placeholder="Breed, name, or bloodline..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Variant */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Bully Variant
            </label>

            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="All">All Varieties</option>
              <option value="Pocket">Pocket</option>
              <option value="Standard">Standard</option>
              <option value="XL">XL</option>
              <option value="Micro">Micro</option>
            </select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Regional Origin
            </label>

            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="All">Global / All Locations</option>
              <option value="Texas">Texas</option>
              <option value="California">California</option>
              <option value="Florida">Florida</option>
              <option value="Ohio">Ohio</option>
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Top Info */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-600 font-semibold">
            <span>
              Showing{" "}
              <b className="text-slate-900">
                {currentPetsGroup.length}
              </b>{" "}
              of {filteredPets.length} entries
            </span>

            <span className="text-xs bg-slate-100 px-2.5 py-1 rounded-md w-fit">
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentPetsGroup.map((pet) => (
                <motion.div
                  key={pet.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-slate-100">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />

                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md tracking-wide uppercase">
                      {pet.class}
                    </span>

                    <span className="absolute bottom-3 right-3 bg-orange-600 text-white font-black text-sm px-2.5 py-1 rounded-lg">
                      ${pet.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-black text-slate-900">
                          {pet.name}
                        </h4>

                        <span className="flex items-center gap-1 text-[11px] text-slate-400 font-bold">
                          <MapPin className="w-3.5 h-3.5" />
                          {pet.location}
                        </span>
                      </div>

                      <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mt-1">
                        {pet.bloodline} Lineage
                      </p>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {pet.description}
                      </p>
                    </div>

                    {/* Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-extrabold">
                        <span className="text-slate-500">
                          DNA Authenticity Score
                        </span>

                        <span className="text-emerald-600">
                          98% Verified
                        </span>
                      </div>

                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[98%]" />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                      <button className="flex-1 bg-slate-900 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider">
                        View Profile
                      </button>

                      <button className="p-3 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-xl transition-colors border border-orange-100">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty State */}
            {filteredPets.length === 0 && (
              <div className="col-span-full bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center text-slate-400 font-medium">
                No verified profiles match your current filters.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-100 transition-colors disabled:opacity-40"
              >
                Prev
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 text-xs font-bold rounded-xl border transition-all ${
                    currentPage === pageNum
                      ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/20"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-100 transition-colors disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MarketplaceCatalog;