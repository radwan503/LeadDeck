import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Beautifully designed lead capture that <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">actually converts</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl">An elegant, animated landing page template built with Tailwind CSS and Framer Motion — optimized for conversion and developer-friendly so you can ship faster.</p>

          <div className="mt-8 flex gap-3">
            <a href="#form" className="inline-flex items-center gap-3 bg-white text-slate-900 px-5 py-3 rounded-2xl font-medium shadow-2xl hover:scale-[1.02] transition-transform">Start free&nbsp;→</a>
            <a href="#features" className="inline-flex items-center gap-2 px-4 py-3 border border-slate-700 rounded-2xl text-slate-300 hover:border-slate-500">See features</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-slate-800/40 backdrop-blur-sm">
              <p className="text-sm text-slate-300">Avg Conversion</p>
              <p className="mt-1 font-bold text-xl">5.2%</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-slate-800/40 backdrop-blur-sm">
              <p className="text-sm text-slate-300">New Leads / mo</p>
              <p className="mt-1 font-bold text-xl">1,200+</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-slate-800/40 backdrop-blur-sm">
              <p className="text-sm text-slate-300">Avg Demo Rate</p>
              <p className="mt-1 font-bold text-xl">32%</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
          {/* Glass card with animated gradient */}
          <div className="rounded-3xl p-1 bg-gradient-to-br from-indigo-600/30 via-pink-500/20 to-yellow-400/10 shadow-2xl">
            <div className="bg-gradient-to-b from-slate-900/70 to-slate-900/50 rounded-3xl p-6">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Live demo request</p>
                  <h3 className="font-semibold text-xl mt-1">Schedule a 15‑minute walkthrough</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">Slots left</p>
                  <div className="mt-1 text-lg font-bold">5</div>
                </div>
              </motion.div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-slate-800/40">
                  <p className="text-xs text-slate-400">Mon</p>
                  <p className="font-medium mt-1">10:00 AM</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40">
                  <p className="text-xs text-slate-400">Tue</p>
                  <p className="font-medium mt-1">02:00 PM</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40">
                  <p className="text-xs text-slate-400">Wed</p>
                  <p className="font-medium mt-1">11:30 AM</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40">
                  <p className="text-xs text-slate-400">Thu</p>
                  <p className="font-medium mt-1">04:00 PM</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button className="flex-1 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium">Book a slot</button>
                <button className="px-4 py-3 rounded-lg border border-slate-700">Preview</button>
              </div>
            </div>
          </div>

          {/* Decorative floating badge */}
          <motion.div initial={{ y: -10, x: 20 }} animate={{ y: -6, x: 16 }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -bottom-6 right-6">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-900 font-semibold shadow-xl">+1,024 leads</div>
          </motion.div>
        </motion.div>
      </section>
  )
}

export default Hero