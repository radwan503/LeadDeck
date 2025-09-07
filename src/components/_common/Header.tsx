import React, { useState } from 'react'
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-xl">
            <span className="font-bold">LD</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">LeadDeck</h1>
            <p className="text-xs text-slate-400 -mt-0.5">
              Convert visitors into customers
            </p>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#testimonials">Testimonials</a>
          <a
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg shadow-lg"
            href="#form"
          >
            Get started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile dropdown */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-6 text-sm text-slate-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#testimonials">Testimonials</a>
          <a
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg shadow-lg"
            href="#form"
          >
            Get started
          </a>
        </motion.nav>
      </header>
  )
}

export default Header
