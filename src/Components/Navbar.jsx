import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Resources", href: "#" },
  { name: "Adoption Process", href: "/adoption-process" },
  { name: "Emmergency", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* --- Logo Area --- */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <img
              src="/logo.jpeg"
              alt="American Bully Marketplace Logo"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <span className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
            <span className="text-orange-600">American Bully</span>{" "}
            Marketplace
          </span>
        </div>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-orange-600 transition font-medium group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* --- Desktop Button --- */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold shadow-md hover:bg-orange-700 transition"
          >
            Sell A Bully
          </motion.button>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="text-gray-800 text-lg font-semibold hover:text-orange-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="border-t border-gray-100 pt-6 mt-2 flex flex-col gap-4">
                <motion.a
                  variants={itemVariants}
                  href="#"
                  className="text-gray-800 text-lg font-bold"
                >
                  Sign In
                </motion.a>

                <motion.button
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center px-6 py-4 bg-orange-600 text-white rounded-lg font-extrabold shadow hover:bg-orange-700 transition"
                >
                  Sell A Bully
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;