"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Layout, Smartphone, Cloud, Cpu, Globe, Infinity, Zap, Layers, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Front-End Excellence",
    desc: "Crafting immersive, high-performance user interfaces with Next.js and GSAP for a world-class digital presence.",
    icon: Layout,
    color: "from-blue-500/20 to-indigo-500/10",
    size: "lg:col-span-1 lg:row-span-2",
    metrics: "60 FPS Motion",
    stack: ["React", "Next.js", "GSAP", "Tailwind"]
  },
  {
    id: 2,
    title: "Back-End Mastery",
    desc: "Powering applications with robust Node.js APIs and scalable database architectures for maximum reliability.",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/10",
    size: "lg:col-span-1 lg:row-span-1",
    metrics: "99.9% Uptime",
    stack: ["Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Headless CMS",
    desc: "Decoupled WordPress & Strapi solutions for ultimate flexibility and lightning-fast content delivery.",
    icon: Layers,
    color: "from-amber-400/20 to-orange-500/10",
    size: "lg:col-span-1 lg:row-span-1",
    metrics: "Instant Load",
    stack: ["WordPress","RestAPI", "WPGraphQL"]
  },
  {
    id: 4,
    title: "AI & Automations",
    desc: "Integrating Gemini & OpenAI to create smart, agentic workflows that scale your business efficiency.",
    icon: Sparkles,
    color: "from-purple-500/20 to-pink-500/10",
    size: "lg:col-span-2 lg:row-span-1",
    metrics: "24/7 Agentic",
    stack: ["OpenAI", "Gemini", "Python"]
  }
];

const TechTicker = () => {
    return (
        <div className="mt-32 overflow-hidden relative py-10 border-y border-slate-900/50">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10" />
            
            <div className="flex animate-infinite-scroll gap-20 items-center whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-20 items-center">
                        {["FRONTEND", "BACKEND", "NEXT.JS", "NODE.JS", "GSAP", "TAILWIND", "MONGODB", "WORDPRESS"].map((tech) => (
                            <span key={tech} className="text-3xl md:text-5xl font-black text-slate-800 hover:text-amber-400/50 transition-colors cursor-default tracking-tighter uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ServicesBento = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation - Triggered as soon as section hits bottom
      gsap.from(".bento-item", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
        }
      });

      // Header Reveal
      gsap.from(".expertise-title", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        }
      });
    }, sectionRef);

    const handleMouseMove = (e) => {
        cardsRef.current.forEach((card) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
        ctx.revert();
        window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="expertise-title text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
               Our <span className="premium-gradient">Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light">
              We bridge the gap between <span className="text-white font-medium">stunning Frontend design</span> and <span className="text-white font-medium">robust Backend architecture</span> for 100/100 performance.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 text-right">
             <span className="text-5xl font-bold text-white tracking-widest leading-none">ALL-STACK</span>
             <span className="text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.4em]">Integrated Technical Authority</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {services.map((s, i) => (
            <div 
              key={s.id}
              ref={el => cardsRef.current[i] = el}
              className={`
                bento-item group relative
                glass-pilling overflow-hidden rounded-[3.5rem]
                border-slate-800/50 hover:border-amber-400/40
                transition-all duration-700 p-8
                flex flex-col justify-between
                ${s.size}
              `}
              style={{
                "--mouse-x": "0px",
                "--mouse-y": "0px"
              }}
            >
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.15), transparent 40%)`
                   }} 
              />

              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <s.icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.3em] block mb-1">{s.metrics}</span>
                    <div className="h-1 w-12 bg-amber-500/20 rounded-full ml-auto overflow-hidden">
                        <div className="h-full bg-amber-500 w-2/3 group-hover:w-full transition-all duration-1000" />
                    </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">{s.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[340px] group-hover:text-slate-200 transition-colors">{s.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                   {s.stack.map(tech => (
                     <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                       {tech}
                     </span>
                   ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-amber-400 text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-200 relative z-10">
                Technical Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* <TechTicker /> */}
      </div>
    </section>
  );
};

export default ServicesBento;
