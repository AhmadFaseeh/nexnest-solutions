"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code2, Monitor, Cpu, Shield, Zap, TrendingUp, Smartphone, Terminal, Brackets } from 'lucide-react';

const CustomDevPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cd-hero-content > *", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".cd-bento-item", {
                opacity: 0,
                scale: 0.95,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
            {/* Hero Section */}
            <section ref={heroRef} className="pt-44 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="cd-hero-content text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 mb-8 uppercase tracking-[0.2em]">
                        <Terminal className="w-3 h-3" />
                        <span>Engineering Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
                        Precision <br />
                        <span className="premium-gradient">Custom</span> Software
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                        We don&apos;t just write code; we architect scalable ecosystems that transform business complexity into elegant, high-speed solutions.
                    </p>
                </div>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
                    <div className="cd-bento-item md:col-span-8 md:row-span-2 glass-pilling rounded-[3rem] p-10 border-slate-800/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-4">Scalable Architectures</h3>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    Microservices, serverless functions, and robust API layers built to handle enterprise-level traffic without breaking a sweat.
                                </p>
                            </div>
                        </div>
                        <Brackets className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-900/40 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                    </div>

                    <div className="cd-bento-item md:col-span-4 md:row-span-1 glass-pilling rounded-[2.5rem] p-8 border-slate-800/50 flex flex-col justify-between group hover:border-amber-400/30 transition-all">
                        <Smartphone className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-2">Mobile-First</h4>
                            <p className="text-slate-500 text-sm">PWA and native-feel performance across all devices.</p>
                        </div>
                    </div>

                    <div className="cd-bento-item md:col-span-4 md:row-span-1 glass-pilling rounded-[2.5rem] p-8 border-slate-800/50 flex flex-col justify-between group hover:border-emerald-400/30 transition-all">
                        <Shield className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-2">Secure by Default</h4>
                            <p className="text-slate-500 text-sm">Enterprise-grade encryption and Auth systems.</p>
                        </div>
                    </div>

                    <div className="cd-bento-item md:col-span-4 md:row-span-2 glass-pilling rounded-[2.5rem] p-10 border-slate-800/50 flex flex-col justify-between bg-slate-950/40 relative overflow-hidden group">
                        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-blue-400/50 transition-colors">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 leading-tight">Dashboard & SaaS</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Intuitive data visualization and admin panels that make managing your business a pleasure.
                            </p>
                        </div>
                    </div>

                    <div className="cd-bento-item md:col-span-8 md:row-span-1 glass-pilling rounded-[2.5rem] p-8 border-slate-800/50 flex items-center gap-8 group hover:bg-white/5 transition-all">
                        <div className="w-20 h-20 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                            <Zap className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-1">Blazing Velocity</h4>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                                We prioritize low-latency interactions. Every click feels instantaneous and responsive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Craft Detail */}
            <section className="py-24 px-6 md:px-20 bg-[#060b1d] border-t border-slate-900/50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">Crafted with <br /><span className="premium-gradient">Precision</span></h2>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { t: "Frontend Layer", v: "Next.js, TypeScript, GSAP" },
                                { t: "Middleware", v: "Node.js, Express, Redis" },
                                { t: "Database", v: "MongoDB, PostgreSQL" },
                                { t: "Infrastructure", v: "Vercel, AWS, Cloudflare" }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h5 className="text-xs font-black uppercase tracking-widest text-blue-400">{item.t}</h5>
                                    <p className="text-slate-300 font-bold">{item.v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-12 rounded-[3.5rem] bg-blue-600 text-white max-w-sm flex flex-col gap-6 shadow-2xl shadow-blue-500/20">
                        <p className="text-xl font-bold leading-tight">Got a complex requirement that off-the-shelf software can&apos;t solve?</p>
                        <p className="text-blue-100 text-sm">We specialize in solving unique business hurdles with bespoke engineering.</p>
                        <a href="/contact" className="w-full bg-slate-950 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all">
                            Talk Technical <TrendingUp className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CustomDevPage;
