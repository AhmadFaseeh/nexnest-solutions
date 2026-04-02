"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Database, Code, Cpu, Terminal, Palette, Zap, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  { name: "Next.js / React", icon: Layout },
  { name: "GSAP / Framer Motion", icon: Zap },
  { name: "Tailwind CSS / Styling", icon: Palette },
  { name: "Responsive UI/UX", icon: Globe }
];

const backendSkills = [
  { name: "Node.js / Express", icon: Terminal },
  { name: "MongoDB / SQL", icon: Database },
  { name: "WPGraphQL / Headless", icon: Cpu },
  { name: "API Architecture", icon: Code }
];

const SkillsShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-pillar", {
        x: (i) => i === 0 ? -50 : 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 bg-slate-950/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Technical <span className="premium-gradient">Powerhouse</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From pixel-perfect frontends to robust, scalable backends. 
            We bridge the gap between design and data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-slate-800/50 hidden lg:block" />

          {/* Front-end Pillar */}
          <div className="skill-pillar space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Layout className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold">Front-end Architecture</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontendSkills.map((s, i) => (
                <div key={i} className="glass-pilling p-6 rounded-3xl border-slate-800/50 hover:border-amber-400/30 transition-all group">
                  <s.icon className="w-5 h-5 text-slate-500 mb-4 group-hover:text-amber-400" />
                  <span className="font-bold text-slate-200">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end Pillar */}
          <div className="skill-pillar space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Back-end Infrastructure</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendSkills.map((s, i) => (
                <div key={i} className="glass-pilling p-6 rounded-3xl border-slate-800/50 hover:border-blue-400/30 transition-all group">
                  <s.icon className="w-5 h-5 text-slate-500 mb-4 group-hover:text-blue-400" />
                  <span className="font-bold text-slate-200">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
