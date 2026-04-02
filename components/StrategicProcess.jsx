"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Architecture, Code2, Rocket, TrendingUp, Landmark, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        id: "01",
        title: "Deep Discovery",
        desc: "We analyze your business goals, target audience, and current digital ecosystem to identify friction points.",
        icon: Search,
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        id: "02",
        title: "Foundational Architecture",
        desc: "Designing a high-performance headless stack with Next.js and Headless CMS tailored for scalability.",
        icon: ShieldCheck,
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
    {
        id: "03",
        title: "Pixel-Perfect Build",
        desc: "Rapid frontend production with integrated AI components and SEO-optimized dynamic rendering.",
        icon: Code2,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        id: "04",
        title: "Global Shipment",
        desc: "Deployment on global edge networks (Vercel/AWS) with 100/100 Lighthouse performance metrics.",
        icon: Rocket,
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        id: "05",
        title: "Infinite Scale",
        desc: "Continuous monitoring, A/B testing, and AI-driven growth optimizations to ensure peak conversion.",
        icon: TrendingUp,
        color: "text-pink-400",
        bg: "bg-pink-500/10"
    }
];

const StrategicProcess = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-card", {
                opacity: 0,
                x: 30,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center+=100",
                }
            });

            // Animate the line connecting steps
            gsap.from(".process-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-20 relative overflow-hidden bg-[#0a0f1d]">
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 mb-6 uppercase tracking-[0.2em]">
                            <Zap className="w-3 h-3" />
                            <span>Battle-Tested Framework</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                            The <span className="premium-gradient">Nexus</span> <br /> Process
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg italic">
                            How we transform complex requirements into seamless, lightning-fast digital experiences.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {/* Horizontal connector line for desktop */}
                    <div className="process-line absolute top-[60px] left-0 w-full h-[2px] bg-slate-800 hidden lg:block z-0" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                        {processSteps.map((step, i) => (
                            <div key={i} className="process-card group">
                                <div className={`w-16 h-16 rounded-[2rem] ${step.bg} flex items-center justify-center mb-10 border border-slate-800 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-white/20 transition-all duration-500 relative z-20 bg-slate-950`}>
                                    <step.icon className={`w-7 h-7 ${step.color} group-hover:text-white transition-colors`} />
                                    {/* Small circle for the line intersection point */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-current opacity-0 group-hover:opacity-10 blur-xl transition-opacity pointer-events-none" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-black uppercase tracking-widest ${step.color}`}>{step.id}</span>
                                        <div className={`h-[1px] w-8 bg-slate-800 group-hover:w-12 transition-all duration-500 ${step.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-100 leading-tight">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicProcess;
