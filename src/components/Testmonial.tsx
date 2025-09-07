import React from 'react'
import { motion } from "framer-motion";

const Testmonial = () => {
  return (
     <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">What customers say</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.blockquote whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-slate-800/40">
            <p className="text-slate-300">&apos;Switched to LeadDeck and our demo pipeline doubled within a month. The forms are delightful.&apos;</p>
            <footer className="mt-4 text-sm text-slate-400">— A. Rivera, Head of Growth</footer>
          </motion.blockquote>
          <motion.blockquote whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-slate-800/40">
            <p className="text-slate-300">&apos;The animated UI and microcopy helped increase trust. Simple to implement.&apos;</p>
            <footer className="mt-4 text-sm text-slate-400">— S. Patel, Product</footer>
          </motion.blockquote>
          <motion.blockquote whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-slate-800/40">
            <p className="text-slate-300">&apos;We exported leads straight to our CRM via webhook. Setup was 10 minutes.&apos;</p>
            <footer className="mt-4 text-sm text-slate-400">— M. Lombardi, Founder</footer>
          </motion.blockquote>
        </div>
      </section>
  )
}

export default Testmonial