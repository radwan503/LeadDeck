'use client'

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/_common/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import CTA from "@/components/CTA";
import Testmonial from "@/components/Testmonial";
import Footer from "@/components/_common/Footer";


export default function LeadCaptureLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
      {/* Top nav */}
      <Header/>

      {/* Hero */}
      <Hero/>

      {/* Features */}
      <Feature/>

      {/* Lead form + CTA */}
      <CTA/>

      {/* Testimonials */}
     <Testmonial/>


     {/* Footer */}
     <Footer/>


      {/* floating helper CTA */}
      <motion.a href="#form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="fixed bottom-6 left-6 bg-indigo-600 px-4 py-3 rounded-full shadow-xl hidden md:flex items-center gap-3">
        <span className="font-semibold">Book a call</span>
        <span className="text-xs text-slate-100/80">15 min</span>
      </motion.a>
    </div>
  );
}
