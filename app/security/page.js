"use client";
import React from 'react';
import { ShieldAlert, Fingerprint, Lock, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            <section className="pt-44 pb-24 px-6 md:px-20 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-[0.2em]">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Infrastructure Standards</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                        Digital <span className="premium-gradient">Security.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed italic">
                        Security is part of our DNA. We don&apos;t just build for speed; we build for resilience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                        { title: "End-to-End Encryption", desc: "All data transfers use AES-256 encryption standards.", icon: Lock, color: "text-blue-400" },
                        { title: "Edge Security", desc: "DDoS protection and WAF provided by global edge networks.", icon: Globe, color: "text-purple-400" },
                        { title: "Zero Trust Architecture", desc: "Strict verification for every user and every device.", icon: Fingerprint, color: "text-emerald-400" },
                        { title: "Automated Audits", desc: "Continuous vulnerability scanning for every codebase.", icon: ShieldAlert, color: "text-amber-400" }
                    ].map((feature, i) => (
                        <div key={i} className="glass-pilling p-8 rounded-[2.5rem] border-slate-800/50 flex flex-col items-start gap-4 hover:border-white/10 transition-all group">
                            <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-all`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="glass-pilling rounded-[3rem] p-10 md:p-14 border-slate-800/50 relative overflow-hidden bg-slate-950/40">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
                    
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 text-emerald-400 mb-8">
                            <ShieldCheck className="w-10 h-10" />
                            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Hardened Infrastructure</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-base mb-8">
                            NexNest Solutions leverages the power of serverless and headless architectures to eliminate traditional server vulnerabilities. By removing the direct link between the database and the public web, we essentially "hide" your core systems from malicious actors.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "SSL Everywhere (A+ Grade)",
                                "Multi-Factor Authentication",
                                "API Rate Limiting",
                                "Sanitized Data Input",
                                "Continuous CDN Backups",
                                "SOC 2 Type II Compliance Readiness"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
