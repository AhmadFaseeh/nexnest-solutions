"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2.5 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top bottom-=100", once: true },
        onUpdate: () => {
          el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix;
        },
      });
    });
    return () => ctx.revert();
  }, [end, suffix, prefix, duration]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StrategyHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sh-badge", { opacity: 0, y: -20, duration: 0.6, ease: "power3.out" });
      gsap.from(".sh-h1", { opacity: 0, y: 40, duration: 0.9, delay: 0.15, ease: "power4.out" });
      gsap.from(".sh-sub", { opacity: 0, y: 30, duration: 0.8, delay: 0.35, ease: "power3.out" });
      gsap.from(".sh-cta", { opacity: 0, y: 20, duration: 0.7, delay: 0.55, ease: "power3.out" });
      gsap.from(".sh-stat", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        delay: 0.65,
        ease: "power3.out",
      });
      // Particle orbs
      gsap.to(".orb-1", { y: -30, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { y: 25, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 pb-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="orb-1 absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="orb-2 absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="sh-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[10px] font-black text-amber-400 mb-8 uppercase tracking-[0.25em]">
          <Zap className="w-3 h-3 fill-amber-400" />
          Growth Blueprint
        </div>

        {/* Heading */}
        <h1 className="sh-h1 text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-[0.88] tracking-tighter mb-8 max-w-5xl">
          Your{" "}
          <span className="relative inline-block">
            <span className="premium-gradient">Growth</span>
            <span
              className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, #fbbf24, transparent)" }}
            />
          </span>
          <br />
          Blueprint
        </h1>

        {/* Subheading */}
        <p className="sh-sub text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          We don&apos;t just build websites. We engineer{" "}
          <span className="text-white font-semibold">revenue-generating digital systems</span> — built
          on data, speed, and strategy. Book a call and get your custom plan.
        </p>

        {/* CTAs */}
        <div className="sh-cta flex flex-wrap items-center gap-4 mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-2xl hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-500/20 group"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#audit-simulator"
            className="inline-flex items-center gap-2 glass-pilling text-slate-300 font-semibold px-8 py-4 rounded-2xl hover:text-white hover:border-amber-400/30 active:scale-95 transition-all"
          >
            <TrendingUp className="w-4 h-4 text-amber-400" />
            Run a Free Audit
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 150, suffix: "+", label: "Sites Optimized", color: "text-amber-400" },
            { end: 100, suffix: "/100", label: "Lighthouse Score", color: "text-emerald-400" },
            { end: 25, suffix: "M+", prefix: "$", label: "Revenue Generated", color: "text-blue-400" },
            { end: 99.9, suffix: "%", label: "Uptime Standard", color: "text-purple-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="sh-stat glass-pilling rounded-[1.5rem] p-6 border-slate-800/50 group hover:border-amber-400/25 transition-all"
            >
              <p className={`text-4xl font-black mb-1 ${stat.color}`}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
