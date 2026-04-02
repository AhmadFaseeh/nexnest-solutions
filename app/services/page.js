"use client";
import { useState, useEffect, useRef } from "react";
import { Zap, Server, Search, Layers, Code2, Globe, ArrowRight, CheckCircle } from "lucide-react";

const servicePillars = [
  {
    icon: Code2,
    color: "amber",
    title: "Front-End Engineering",
    subtitle: "Visible. Fast. Flawless.",
    desc: "We craft pixel-perfect interfaces using React and Next.js with rich GSAP animations that give your brand a competitive visual edge.",
    features: ["Core Web Vitals 100/100", "SSR & Static Site Generation", "GSAP / Scroll Animations", "Responsive Design Systems"],
    tech: ["React", "Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: Server,
    color: "blue",
    title: "Back-End Engineering",
    subtitle: "Scalable. Secure. Reliable.",
    desc: "Our backends are built for production — robust Node.js APIs, optimized database schemas, and headless integrations that never break.",
    features: ["Custom REST & GraphQL APIs", "MongoDB / PostgreSQL", "JWT Auth & Middleware", "Microservice Architecture"],
    tech: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"],
  },
  {
    icon: Layers,
    color: "purple",
    title: "Headless WordPress",
    subtitle: "Editorial Power. Dev Velocity.",
    desc: "We decouple WordPress from the frontend, connecting it to Next.js via WPGraphQL for a blazing-fast, editor-friendly experience.",
    features: ["WPGraphQL Integration", "Custom Post Types & ACF", "ISR & Edge Caching", "Multi-site Architecture"],
    tech: ["WordPress", "WPGraphQL", "REST API", "ACF", "Next.js"],
  },
  {
    icon: Search,
    color: "emerald",
    title: "Technical SEO",
    subtitle: "Rank. Convert. Dominate.",
    desc: "Comprehensive technical SEO — from structured data and Core Web Vitals to international SEO and programmatic page generation.",
    features: ["Schema / Structured Data", "International SEO (hreflang)", "Lighthouse 100 Audits", "Programmatic SEO Pages"],
    tech: ["Core Web Vitals", "Schema.org", "Google GSC", "Sitemap XML", "Robots.txt"],
  },
];

const colorMap = {
  amber: { border: "hover:border-amber-400/40", glow: "bg-amber-400/5", icon: "text-amber-400", bg: "bg-amber-400/10", tag: "text-amber-400/80 border-amber-400/20" },
  blue:  { border: "hover:border-blue-400/40",  glow: "bg-blue-400/5",  icon: "text-blue-400",  bg: "bg-blue-400/10",  tag: "text-blue-400/80 border-blue-400/20"   },
  purple:{ border: "hover:border-purple-400/40",glow: "bg-purple-400/5",icon: "text-purple-400",bg: "bg-purple-400/10",tag: "text-purple-400/80 border-purple-400/20"},
  emerald:{border:"hover:border-emerald-400/40",glow: "bg-emerald-400/5",icon:"text-emerald-400",bg:"bg-emerald-400/10",tag:"text-emerald-400/80 border-emerald-400/20"},
};

function CounterStat({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white">{count}{suffix}</div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">{label}</div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-20 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 mb-8 uppercase tracking-[0.2em]">
          Full-Stack Services
        </div>
        <h1 className="text-5xl md:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
          Digital <span className="premium-gradient">Capabilities.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          End-to-end engineering from <span className="text-white font-medium">pixel-perfect frontends</span> to 
          enterprise-grade <span className="text-white font-medium">backend systems</span> built to scale.
        </p>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-pilling p-10 rounded-[3rem] border-slate-800/50">
          <CounterStat target={100} suffix="/100" label="Lighthouse Score" />
          <CounterStat target={50} suffix="+" label="Projects Shipped" />
          <CounterStat target={99} suffix=".9%" label="Uptime Standard" />
          <CounterStat target={6} suffix="" label="Tech Stacks Mastered" />
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto space-y-8">
        {servicePillars.map((s, i) => {
          const c = colorMap[s.color];
          return (
            <div key={i} className={`glass-pilling p-10 md:p-16 rounded-[3.5rem] border-slate-800/50 ${c.border} transition-all duration-500 group relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-[300px] h-[300px] ${c.glow} blur-[100px] rounded-full -z-10`} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className={`w-16 h-16 rounded-[1.5rem] ${c.bg} border border-current ${c.icon} flex items-center justify-center mb-6`}>
                    <s.icon className={`w-8 h-8 ${c.icon}`} />
                  </div>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-3 ${c.icon}`}>{s.subtitle}</p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{s.title}</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">{s.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {s.tech.map(t => (
                      <span key={t} className={`px-4 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest ${c.tag} bg-white/5`}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-slate-800/50 hover:border-slate-700 transition-colors group/item">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${c.icon}`} />
                      <span className="text-slate-300 text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 text-center border-t border-slate-900/50">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Ready to <span className="premium-gradient">Build?</span></h2>
        <p className="text-slate-400 text-lg mb-10">Let&apos;s architect your next high-performance digital asset.</p>
        <a href="/contact" className="inline-flex items-center gap-3 bg-amber-400 text-slate-950 px-12 py-5 rounded-full font-bold text-lg hover:bg-amber-300 transition-all shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95">
          Start a Project
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </main>
  );
}
