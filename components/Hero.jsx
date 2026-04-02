"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ArrowRight, Play, Server, Layers, Cpu, Search } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const ctaRef = useRef(null);
    const orbsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Word-level Reveal
            tl.from(".hero-word-1", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                rotateX: 45,
                delay: 0.3
            })
            .from(".hero-word-2", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.02,
                clearProps: "all"
            }, "-=0.8")
            .from(".hero-line-p", {
                opacity: 0,
                y: 20,
                duration: 1,
            }, "-=0.5")
            .from(".hero-stat", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                stagger: 0.1
            }, "-=0.8")
            .from(".hero-cta", {
                y: 20,
                opacity: 0,
                duration: 0.8
            }, "-=0.5");

            // Orbs Floating Animation
            orbsRef.current.forEach((orb, i) => {
                gsap.to(orb, {
                    x: "random(-20, 20)",
                    y: "random(-20, 20)",
                    duration: "random(3, 5)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Parallax Interaction
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 40;
                const yPos = (clientY / window.innerHeight - 0.5) * 40;
                
                orbsRef.current.forEach((orb, i) => {
                    gsap.to(orb, {
                        x: xPos * (i + 1) * 0.5,
                        y: yPos * (i + 1) * 0.5,
                        duration: 1,
                        ease: "power2.out"
                    });
                });
            };
            window.addEventListener('mousemove', handleMouseMove);
            
            // Magnetic Button Effect
            const mBtn = ctaRef.current;
            if (mBtn) {
                mBtn.addEventListener('mousemove', (e) => {
                    const rect = mBtn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(mBtn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                });
                mBtn.addEventListener('mouseleave', () => {
                    gsap.to(mBtn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-10 px-6 text-center overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 grid-pattern opacity-40 z-0" />
            
            {/* Floating Glass Orbs (Technical Mastery) */}
            <div ref={el => orbsRef.current[0] = el} className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full z-0 pointer-events-none" />
            <div ref={el => orbsRef.current[1] = el} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[160px] rounded-full z-0 pointer-events-none" />
            <div ref={el => orbsRef.current[2] = el} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.02] blur-[200px] rounded-full z-0 pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-bold text-amber-400 mb-10 tracking-[0.2em] shadow-2xl uppercase">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    PREMIUM WEB AGENCY FOR US & EU
                </div>

                <div className="perspective-1000">
                    <h1 className="text-6xl md:text-9xl font-extrabold leading-[0.9] tracking-tighter mb-10">
                        <span className="block overflow-hidden">
                             {"WEB ASSETS THAT".split(" ").map((w, i) => (
                                 <span key={i} className="hero-word-1 inline-block mr-[0.2em]">{w}</span>
                             ))}
                        </span>
                        <span className="block premium-gradient py-1">
                             {"OUTPERFORM.".split("").map((c, i) => (
                                 <span key={i} className="hero-word-2 inline-block leading-tight">{c}</span>
                             ))}
                        </span>
                    </h1>
                </div>

                <p className="hero-line-p text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Elevating brands through high-performance <span className="text-white font-medium">WordPress</span>, 
                    custom <span className="text-white font-medium">Next.js</span> development, and technical <span className="text-white font-medium">SEO</span>.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/contact" ref={ctaRef} className="w-full sm:w-auto bg-amber-400 text-slate-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-amber-500/20 flex items-center justify-center gap-3 group">
                        Let&apos;s Build
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <button className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-white glass-pilling hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                        <Play className="w-4 h-4 fill-white" />
                        Our Process
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    {[
                        { label: "Performance", val: "100/100", icon: Cpu },
                        { label: "WordPress", val: "Headless", icon: Layers },
                        { label: "Latency", val: "< 50ms", icon: Server },
                        { label: "SEO Score", val: "Top Tier", icon: Search }
                    ].map((s, i) => (
                        <div key={i} className="hero-stat glass-pilling p-4 rounded-3xl border-slate-800/50 flex flex-col items-center gap-2 hover:border-amber-400/30 transition-all cursor-default relative overflow-hidden group">
                             <s.icon className="w-5 h-5 text-amber-400/70" />
                             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.label}</span>
                             <span className="text-lg font-bold text-white">{s.val}</span>
                             <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent mx-auto" />
            </div>
        </section>
    );
};

export default Hero;
