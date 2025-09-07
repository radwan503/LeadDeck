'use client'

import React from "react";
import Header from "@/components/_common/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import CTA from "@/components/CTA";
import Testmonial from "@/components/Testmonial";
import Footer from "@/components/_common/Footer";
import FloatingHelper from "@/components/_common/FloatingHelper";


export default function LeadCaptureLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
      <Header/>
      <Hero/>
      <Feature/>
      <CTA/>
      <Testmonial/>
      <Footer/>
      <FloatingHelper/>
    </div>
  );
}
