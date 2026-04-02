"use client";
import { useEffect, useRef, useState } from "react";
import { Rocket, Target, Users, Zap, CheckCircle } from "lucide-react";

const skills = [
  { label: "Next.js / React", level: 95, color: "#fbbf24" },
  { label: "WordPress & Headless CMS", level: 92, color: "#60a5fa" },
  { label: "Node.js / Backend APIs", level: 85, color: "#34d399" },
  { label: "GSAP & UI Animations", level: 90, color: "#a78bfa" },
  { label: "Technical SEO", level: 88, color: "#fb923c" },
  { label: "MongoDB / PostgreSQL", level: 82, color: "#f472b6" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your goals, competitors, and tech requirements." },
  { step: "02", title: "Architecture", desc: "We design the perfect stack — headless, serverless, or hybrid." },
  { step: "03", title: "Build", desc: "Pixel-perfect frontend meets a rock-solid backend, built in fast sprints." },
  { step: "04", title: "Launch & Optimize", desc: "Deploy, monitor, and continuously push performance forward." },
];

function SkillBar({ label, level, color, delay }) {
  const barRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-300">{label}</span>
        <span className="text-xs font-black text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-400 selection:text-slate-950">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 mb-8 uppercase tracking-[0.2em]">
              Our Story
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
              Born for <span className="premium-gradient">Performance.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              NexNest was built on one belief: <span className="text-white font-medium">the web is too slow</span>. 
              We are a full-stack agency that bridges high-end design with engineering excellence — 
              delivering digital assets that actually outperform.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "50+", label: "Projects Shipped" },
                { val: "100/100", label: "Lighthouse Score" },
                { val: "99.9%", label: "Uptime Standard" },
              ].map((s, i) => (
                <div key={i}>
                  <h4 className="text-3xl font-black text-white">{s.val}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-pilling rounded-[3rem] p-10 border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-400/5 blur-[80px] rounded-full" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-[1.5rem] bg-amber-400 flex items-center justify-center">
                <Zap className="w-7 h-7 text-slate-900" />
              </div>
              <div>
                <h3 className="font-bold text-xl">NexNest Agency</h3>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">• Full-Stack / Active</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              {[
                "Frontend: Next.js, React, GSAP",
                "Backend: Node.js, REST & GraphQL APIs",
                "CMS: Headless WordPress, Strapi",
                "Database: MongoDB, PostgreSQL",
                "Infra: Vercel, AWS, Cloudflare",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Bars */}
      <section ref={skillsRef} className="py-24 px-6 md:px-20 bg-slate-950/30 border-y border-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-tight">
              Technical <span className="premium-gradient">Proficiency</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Real numbers. Real skills. We don&apos;t claim what we can&apos;t prove — 
              every percentage reflects live project experience.
            </p>
          </div>
          <div className="space-y-8">
            {skills.map((skill, i) => (
              <SkillBar
                key={i}
                label={skill.label}
                level={skillsVisible ? skill.level : 0}
                color={skill.color}
                delay={i * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
            Our <span className="premium-gradient">Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A battle-tested, 4-step workflow designed to ship fast and scale without breaking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <div key={i} className="glass-pilling p-8 rounded-[2.5rem] border-slate-800/50 hover:border-amber-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[120px] font-black text-slate-900/30 leading-none select-none group-hover:text-amber-400/5 transition-colors">
                {p.step}
              </div>
              <div className="relative z-10">
                <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{p.step}</span>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-20 bg-slate-950/20 border-t border-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Speed First", desc: "Every millisecond matters for conversion and SEO. We engineer for performance from day one.", icon: Rocket },
            { title: "User Centric", desc: "Interfaces that feel intuitive. Design backed by behavior data, not just aesthetics.", icon: Users },
            { title: "Data Driven", desc: "Decisions rooted in metrics. We don't guess — we test, measure, and iterate.", icon: Target }
          ].map((v, i) => (
            <div key={i} className="space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
                <v.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
