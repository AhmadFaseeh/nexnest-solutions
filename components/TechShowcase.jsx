"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Layers, Cpu, Gauge, Globe, CheckCircle2 } from 'lucide-react';

const TechShowcase = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tech-card", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center+=200",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 px-6 bg-slate-950/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="premium-gradient">Velocity</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We don&apos;t just build websites. We build high-performance assets that convert. 
                        Our tech stack is engineered for the future of the web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { 
                            title: "Next.js 14", 
                            desc: "Server-side rendering for instant page transitions.", 
                            icon: Cpu,
                            color: "text-blue-400"
                        },
                        { 
                            title: "Headless CMS", 
                            desc: "WordPress backend with a decouple frontend API.", 
                            icon: Layers,
                            color: "text-amber-400"
                        },
                        { 
                            title: "100/100 Speed", 
                            desc: "Perfect Lighthouse scores for SEO dominance.", 
                            icon: Gauge,
                            color: "text-emerald-400"
                        },
                        { 
                            title: "Global Edge", 
                            desc: "Deployed on Vercel Edge Network for near-zero latency.", 
                            icon: Globe,
                            color: "text-purple-400"
                        }
                    ].map((item, i) => (
                        <div key={i} className="tech-card glass-morphism p-8 rounded-3xl border-slate-800 hover:border-amber-400/30 transition-all group">
                            <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-amber-400/10 to-blue-500/10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-xs">Technical SEO Optimized</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to upgrade your digital presence?</h3>
                        <p className="text-slate-400">Our specialized "Turbo" migration service helps you move from slow legacy WordPress to blazing fast Headless NexNest Solutions.</p>
                    </div>
                    <button className="whitespace-nowrap bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-amber-400 transition-all flex items-center gap-2 group active:scale-95">
                        Get Started Today
                        <CheckCircle2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TechShowcase;
