"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Layers, Database, Globe, Zap, Shield, Layout, ArrowRight, Code2, Cpu } from 'lucide-react';

const HeadlessWPPage = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hw-hero-content", {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 1.2,
                ease: "power4.out"
            });
            gsap.from(".hw-diagram-card", {
                opacity: 0,
                scale: 0.9,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.5
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            {/* Hero Section */}
            <section ref={sectionRef} className="pt-44 pb-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="hw-hero-content">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 mb-8 uppercase tracking-[0.2em]">
                            <Layers className="w-3 h-3" />
                            <span>Architecture: Decoupled CMS</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            The <span className="premium-gradient">Headless</span> <br /> 
                            Advantage
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                            We bridge the editorial power of <span className="text-white font-medium">WordPress</span> with 
                            the lightning-fast delivery of <span className="text-white font-medium">Next.js</span>. 
                            The result? Unbreakable performance.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {[
                                { label: "100/100 Lighthouse", icon: Zap, color: "text-amber-400" },
                                { label: "Zero-Latency Caching", icon: Cpu, color: "text-purple-400" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-300">
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hw-diagram-card glass-pilling rounded-[3rem] p-8 md:p-12 border-slate-800/50 relative overflow-hidden bg-slate-950/40">
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/5 blur-[80px] rounded-full" />
                        <div className="flex flex-col gap-8 relative z-10">
                            {/* Diagram Logic */}
                            <div className="flex items-center justify-between">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-slate-800 flex items-center justify-center mb-3">
                                        <Database className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Input</span>
                                </div>
                                <div className="h-[1px] w-20 bg-gradient-to-r from-slate-800 via-purple-500/50 to-slate-800 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                                </div>
                                <div className="text-center scale-110">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                                        <Zap className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-purple-400 uppercase font-black">GraphQL</span>
                                </div>
                                <div className="h-[1px] w-20 bg-gradient-to-r from-slate-800 via-blue-500/50 to-slate-800" />
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                        <Globe className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">Build</span>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                                <h4 className="font-bold mb-2 text-sm">Decoupled Ecosystem</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    By separating the content management from the presentation layer, we eliminate the bottlenecks of traditional PHP-based rendering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Bento */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { 
                            title: "Bulletproof Security", 
                            desc: "Your WordPress administration is hidden from the public web, making it virtually immune to typical exploit vectors.",
                            icon: Shield,
                            color: "text-emerald-400"
                        },
                        { 
                            title: "ISR Speed", 
                            desc: "Incremental Static Regeneration ensures your content updates instantly without compromising on lightning-fast speed.",
                            icon: Zap,
                            color: "text-amber-400"
                        },
                        { 
                            title: "Unmatched UX", 
                            desc: "Leverage React's component-based power to create fluid, app-like experiences that traditional WP themes can't match.",
                            icon: Layout,
                            color: "text-blue-400"
                        }
                    ].map((benefit, i) => (
                        <div key={i} className="glass-pilling p-8 rounded-[2.5rem] border-slate-800/50 hover:border-white/10 transition-all group">
                            <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${benefit.color}`}>
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-24 px-6 md:px-20 bg-slate-950/20 border-y border-slate-900/50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">The Modern <br /><span className="premium-gradient">WP Stack</span></h2>
                        <ul className="grid grid-cols-2 gap-6">
                            {["WPGraphQL", "Apollo Client", "Next.js 16", "ISR / SSR", "Typescript", "ACF Pro"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                                    <Code2 className="w-4 h-4 text-purple-400" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-10 rounded-[3rem] bg-amber-400 text-slate-950 flex flex-col items-center gap-4 text-center max-w-sm">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter">Ready for zero latency?</h4>
                        <p className="text-slate-900/70 text-sm font-medium">Let us help you migrate to a headless future.</p>
                        <a href="/contact" className="w-full bg-slate-950 text-white font-bold py-4 rounded-2xl hover:scale-105 transition-all">Start Migration</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeadlessWPPage;
