import React from 'react'
import { motion } from "framer-motion";

const FloatingHelper = () => {
  return (
    <>
    <motion.a href="#form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="fixed bottom-6 left-6 bg-indigo-600 px-4 py-3 rounded-full shadow-xl hidden md:flex items-center gap-3">
        <span className="font-semibold">Book a call</span>
        <span className="text-xs text-slate-100/80">15 min</span>
    </motion.a>
    </>
  )
}

export default FloatingHelper