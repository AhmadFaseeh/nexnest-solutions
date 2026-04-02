"use client";
import React from 'react';
import { Database, Layout, Smartphone, Cloud, Cpu, Globe, Infinity, Zap } from 'lucide-react';

const LogoTicker = () => {
    const logos = [
        { name: "React", icon: Layout },
        { name: "Next.js", icon: Globe },
        { name: "WordPress", icon: Database },
        { name: "Node.js", icon: Cpu },
        { name: "Tailwind", icon: Smartphone },
        { name: "Vercel", icon: Cloud },
        { name: "GSAP", icon: Infinity },
        { name: "Tailwind", icon: Zap }
    ];

    return (
        <section className="py-12 bg-[#020617] border-y border-slate-900/50 overflow-hidden relative group">
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
            
            <div className="flex items-center gap-16 whitespace-nowrap animate-infinite-scroll">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="flex items-center gap-3 opacity-20 hover:opacity-50 transition-opacity grayscale hover:grayscale-0 cursor-default">
                                <logo.icon className="w-6 h-6 text-slate-400 group-hover:text-amber-400 transition-colors" />
                                <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoTicker;
