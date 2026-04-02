"use client";
import React from 'react';
import { Gavel, Globe, ShieldCheck, Zap, Scale } from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            <section className="pt-44 pb-24 px-6 md:px-20 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 mb-6 uppercase tracking-[0.2em]">
                        <Gavel className="w-3 h-3" />
                        <span>Client Agreements</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                        Terms of <span className="premium-gradient">Service.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed italic">
                        By collaborating with NexNest Solutions, you agree to our standards of high-performance delivery.
                    </p>
                </div>

                <div className="glass-pilling rounded-[3rem] p-8 md:p-14 border-slate-800/50 space-y-12 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full -z-10" />
                    
                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-amber-400">
                            <Globe className="w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white">1. Service Scope</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            NexNest Solutions provides digital engineering services, including but not limited to Headless CMS development, UI/UX design, and SEO optimization. Each project is subject to its unique Statement of Work (SOW) which outlines specific deliverables.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-amber-400">
                            <Scale className="w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white">2. Intellectual Property</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Upon final payment, the client retains full ownership of the custom digital assets developed. NexNest Solutions retains the right to showcase the project in its agency portfolio, unless otherwise agreed upon.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-amber-400">
                            <ShieldCheck className="w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white">3. Liability & Performance</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            While we guarantee 100/100 Lighthouse performance at launch, NexNest Solutions is not responsible for performance degradation caused by third-party scripts or client-introduced bottlenecks post-delivery.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}
