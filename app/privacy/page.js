"use client";
import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            <section className="pt-44 pb-24 px-6 md:px-20 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 mb-6 uppercase tracking-[0.2em]">
                        <Shield className="w-3 h-3" />
                        <span>Data Protection</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                        Privacy <span className="premium-gradient">Policy.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed italic">
                        Last Updated: April 2026. Your privacy is not an afterthought; it is built into our engineering philosophy.
                    </p>
                </div>

                <div className="glass-pilling rounded-[3rem] p-8 md:p-14 border-slate-800/50 space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10" />
                    
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Eye className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            At NexNest Solutions, we only collect information that is essential for delivering our high-performance digital services. This includes contact details provided during consultation and technical data related to project requirements.
                        </p>
                        <ul className="space-y-3">
                            {["Personal Identifiers (Name, Email)", "Project Technical Specifications", "Communication Logs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold">2. Data Usage & Security</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            We use your data strictly for project execution and service improvements. We never sell or share your data with third-party advertisers. All data is stored using industry-standard encryption on secure edge networks.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold">3. Your Rights</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            You have the right to access, rectify, or delete your personal data at any time. Simply contact our privacy officer at <span className="text-white font-medium">privacy@nexnest.com</span> for any requests.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}
