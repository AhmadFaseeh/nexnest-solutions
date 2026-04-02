"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, Clock, CheckCircle } from "lucide-react";

const faqs = [
  { q: "What is your typical project timeline?", a: "Most projects ship in 4–8 weeks depending on scope. We work in focused sprints to keep delivery fast without sacrificing quality." },
  { q: "Do you work with international clients?", a: "Yes, 100%. We are a remote-first agency serving clients across the US, EU, and beyond. Time zones are never a barrier." },
  { q: "What's included in your SEO service?", a: "Full technical SEO: Core Web Vitals optimization, schema markup, sitemap setup, Google Search Console integration, and Lighthouse 100/100 audits." },
  { q: "Can you take over an existing WordPress site?", a: "Absolutely. We specialize in migrating and upgrading existing WordPress sites to a headless architecture for massive performance gains." },
  { q: "Do you offer ongoing maintenance?", a: "Yes, we offer monthly retainers for maintenance, feature updates, performance monitoring, and continuous optimization." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-amber-400/30" : "hover:border-slate-700"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-6"
      >
        <span className="font-bold text-slate-200 text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <section className="pt-40 pb-24 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side */}
        <div className="space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 mb-8 uppercase tracking-[0.2em]">
              Contact Us
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
              Let&apos;s Build <br />
              <span className="premium-gradient">Together.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Ready to scale your digital presence? We architect high-performance assets that convert.
            </p>
          </div>

          {/* Availability Badge */}
          <div className="glass-pilling p-6 rounded-[2rem] border-slate-800/50 flex items-center gap-4">
            <div className="relative">
              <div className="w-4 h-4 bg-emerald-400 rounded-full" />
              <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-50" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Currently accepting new projects</p>
              <p className="text-slate-500 text-xs mt-0.5">2 spots available this month</p>
            </div>
            <Clock className="w-5 h-5 text-slate-600 ml-auto" />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email Us", val: "hello@nexnest.io", color: "text-amber-400", href: "mailto:hello@nexnest.io" },
              { icon: Phone, label: "WhatsApp / Call", val: "+1 (234) 567 890", color: "text-emerald-400", href: "https://wa.me/1234567890" },
              { icon: MapPin, label: "Location", val: "Global · Remote-First", color: "text-blue-400", href: "#" },
            ].map((c, i) => (
              <a key={i} href={c.href} className="flex items-center gap-5 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-[1.5rem] bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-400/50 transition-colors`}>
                  <c.icon className={`w-6 h-6 ${c.color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{c.label}</p>
                  <p className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{c.val}</p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/1234567890?text=Hi! I want to discuss a project with NexNest."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp — Instant Reply
          </a>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10 rounded-full" />
          <div className="glass-pilling p-10 md:p-12 rounded-[3.5rem] border-slate-800/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-amber-400/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-blue-400/50 transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Frontend", "Backend", "Full-Stack", "WordPress", "SEO", "AI / Automation"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelected(type)}
                        className={`py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                          selected === type
                            ? "bg-amber-400 border-amber-400 text-slate-950"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:border-amber-400/50 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Budget Range</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-amber-400/50 transition-all text-slate-400">
                    <option value="">Select a range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea rows="4" required placeholder="Tell us about your project goals, timeline, and challenges..." className="w-full bg-slate-900 border border-slate-800 rounded-3xl py-4 px-6 text-sm focus:outline-none focus:border-emerald-400/50 transition-all font-medium"></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-slate-950 py-5 rounded-3xl font-bold text-lg hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 group">
                  Send Project Request
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-20 border-t border-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Common <span className="premium-gradient">Questions</span>
            </h2>
            <p className="text-slate-400 text-lg">Everything you need to know before we start.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
