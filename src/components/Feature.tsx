import React from 'react'
import { motion } from "framer-motion";

const Feature = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} className="p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm">
            <h4 className="font-semibold">Smart Forms</h4>
            <p className="text-sm text-slate-300 mt-2">Conditional fields, progressive profiling and micro‑surveys increase completion rates.</p>
          </motion.div>
          <motion.div variants={item} className="p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm">
            <h4 className="font-semibold">A/B Ready</h4>
            <p className="text-sm text-slate-300 mt-2">Run experiments quickly with split-testing ready components and analytics hooks.</p>
          </motion.div>
          <motion.div variants={item} className="p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm">
            <h4 className="font-semibold">Integrations</h4>
            <p className="text-sm text-slate-300 mt-2">Webhook & Zapier, Google Sheets, and native CRM plugs — export leads with one click.</p>
          </motion.div>
        </motion.div>
      </section>
  )
}

export default Feature
