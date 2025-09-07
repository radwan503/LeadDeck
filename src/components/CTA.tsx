import React, { useState } from 'react'
import { motion } from "framer-motion";

const CTA = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  function validate() {
    const e:any = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Company is required";
    return e;
  }

  async function handleSubmit(e:any) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);

    // Mock submit: simulate API call
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(e:any) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }
  return (
       <section id="form" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold">Get early access + a free strategy call</h3>
            <p className="text-slate-300 mt-3">Fill the form and our growth team will reach out within 24 hours. No spam. Promise.</p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Personalized onboarding call</li>
              <li>• 14-day premium trial</li>
              <li>• Custom conversion tips</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <div className="p-4 rounded-lg bg-slate-800/30">🚀 Fast setup</div>
              <div className="p-4 rounded-lg bg-slate-800/30">🔒 GDPR ready</div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="bg-slate-900/60 p-6 rounded-2xl shadow-xl border border-slate-800">
            {!submitted ? (
              <>
                <label className="block">
                  <span className="text-sm text-slate-300">Full name</span>
                  <input name="name" value={form.name} onChange={handleChange} className={`mt-2 w-full rounded-lg bg-slate-800/40 text-white px-4 py-3 placeholder:text-slate-400 focus:outline-none ${errors.name ? 'ring-2 ring-rose-500' : 'ring-0'}`} placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </label>

                <label className="block mt-4">
                  <span className="text-sm text-slate-300">Work email</span>
                  <input name="email" value={form.email} onChange={handleChange} className={`mt-2 w-full rounded-lg bg-slate-800/40 text-white px-4 py-3 placeholder:text-slate-400 focus:outline-none ${errors.email ? 'ring-2 ring-rose-500' : 'ring-0'}`} placeholder="you@company.com" />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </label>

                <label className="block mt-4">
                  <span className="text-sm text-slate-300">Company</span>
                  <input name="company" value={form.company} onChange={handleChange} className={`mt-2 w-full rounded-lg bg-slate-800/40 text-white px-4 py-3 placeholder:text-slate-400 focus:outline-none ${errors.company ? 'ring-2 ring-rose-500' : 'ring-0'}`} placeholder="Company name" />
                  {errors.company && <p className="mt-1 text-xs text-rose-400">{errors.company}</p>}
                </label>

                <label className="block mt-4">
                  <span className="text-sm text-slate-300">Message (optional)</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-2 w-full rounded-lg bg-slate-800/40 text-white px-4 py-3 placeholder:text-slate-400 focus:outline-none" placeholder="Any notes for our team..."></textarea>
                </label>

                <button disabled={submitting} type="submit" className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-lg hover:scale-[1.01] transition-transform">
                  {submitting ? 'Sending...' : 'Request access & call'}
                </button>

                <p className="mt-3 text-xs text-slate-400">By submitting you agree to our <a className="underline">terms</a> and <a className="underline">privacy policy</a>.</p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-3xl">🎉</div>
                <h4 className="mt-4 font-bold text-lg">Thanks! We received your request.</h4>
                <p className="mt-2 text-sm text-slate-300">Our team will reach out to schedule your walkthrough.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }} className="mt-6 px-6 py-2 rounded-full border border-slate-700">Submit another</button>
              </div>
            )}
          </motion.form>
        </div>
      </section>
  )
}

export default CTA
