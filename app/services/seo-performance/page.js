"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Search, Zap, Globe, Gauge, Shield, LineChart, BarChart3, TrendingUp, CheckCircle, PieChart, Info, ArrowUpRight } from 'lucide-react';

const SEOPerformancePage = () => {
    const sectionRef = useRef(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".seo-hero-content > *", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 1.2,
                ease: "power4.out"
            });
            
            // Score animation
            const obj = { val: 0 };
            gsap.to(obj, {
                val: 100,
                duration: 2.5,
                delay: 1,
                ease: "power3.out",
                onUpdate: () => setScore(Math.floor(obj.val))
            });

            gsap.from(".metric-card", {
                opacity: 0,
                x: -20,
                stagger: 0.2,
                duration: 1,
                delay: 1.5,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            {/* Hero Section */}
            <section ref={sectionRef} className="pt-44 pb-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="seo-hero-content">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 mb-8 uppercase tracking-[0.2em]">
                            <Search className="w-3 h-3" />
                            <span>Technical SEO & Performance</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            Rank by <br />
                            <span className="premium-gradient">Velocity</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                            Google rewards speed. We ensure your site doesn&apos;t just look fast — it hits <span className="text-white font-medium">Core Web Vitals</span> standards with zero layout shifts.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/strategy" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 group">
                                Learn the Blueprint <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
                        <div className="glass-pilling rounded-[3rem] p-10 md:p-14 border-slate-800/50 flex flex-col items-center text-center relative overflow-hidden group">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-slate-900 stroke-current" strokeWidth="6" fill="transparent" r="42" cx="50" cy="50" />
                                    <circle 
                                        className="text-emerald-400 stroke-current transition-all duration-500" 
                                        strokeWidth="6" 
                                        strokeDasharray="264" 
                                        strokeDashoffset={264 - (264 * score) / 100} 
                                        strokeLinecap="round" 
                                        fill="transparent" 
                                        r="42" cx="50" cy="50" 
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-6xl md:text-8xl font-black text-white leading-none">{score}</span>
                                    <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] mt-2">Lighthouse Score</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {[
                                    { label: "FCP", val: "0.4s", color: "text-emerald-400" },
                                    { label: "LCP", val: "0.8s", color: "text-emerald-400" },
                                    { label: "CLS", val: "0.001", color: "text-emerald-400" },
                                    { label: "TBT", val: "0ms", color: "text-emerald-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="metric-card glass-pilling py-4 px-6 rounded-2xl border-slate-800/50 flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${stat.color} animate-pulse`} />
                                            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">{stat.label}</span>
                                        </div>
                                        <span className={`text-xl font-black ${stat.color}`}>{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-depth Features */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 blur-[80px] -z-10" />
                        <div className="space-y-8">
                            {[
                                { title: "Semantic & Schema Markup", desc: "We build with structural integrity, ensuring search engines perfectly understand every node of your site content.", icon: Globe },
                                { title: "Global CDN Edge Delivery", desc: "Every bite is served from the edge, minimizing latency regardless of your user's global location.", icon: Zap },
                                { title: "Image Zero-Layout Shift", desc: "Our Next.js optimized images ensure no content jumping, keeping your CLS at literal zero.", icon: Gauge }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/50 transition-colors">
                                        <feature.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">The <span className="premium-gradient">Technical</span> <br /> Standard</h2>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-6">
                            SEO is no longer just about keywords. It is about <span className="text-white font-medium">user experience</span>. 
                            Google&apos;s algorithms now prioritize sites that provide a stable, fast, and secure frontend journey.
                        </p>
                        <p className="text-slate-500 text-base leading-relaxed">
                            We implement programmatic SEO strategies that allow your brand to scale content without compromising on technical perfection.
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-16 rounded-[4rem] bg-emerald-600 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Gauge className="w-10 h-10" />
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Drive Growth by Speed</h3>
                        </div>
                        <p className="max-w-xl text-emerald-50 text-lg font-medium">Every second of delay costs conversions. Let us audit your site and implement a high-velocity framework.</p>
                    </div>
                    <a href="/contact" className="relative z-10 px-12 py-6 bg-slate-950 text-white font-black text-xl rounded-[2rem] hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                        Claim Your Audit <TrendingUp className="w-6 h-6" />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default SEOPerformancePage;
