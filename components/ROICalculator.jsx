"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calculator, TrendingUp, DollarSign, Users, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

const ROICalculator = () => {
    const [visitors, setVisitors] = useState(5000);
    const [avgOrderValue, setAvgOrderValue] = useState(150);
    const [currentConvRate, setCurrentConvRate] = useState(1.5);
    const [targetConvRate, setTargetConvRate] = useState(3.2);

    const currentRevenue = (visitors * (currentConvRate / 100) * avgOrderValue).toFixed(0);
    const projectedRevenue = (visitors * (targetConvRate / 100) * avgOrderValue).toFixed(0);
    const revenueLift = (projectedRevenue - currentRevenue).toFixed(0);
    const liftPercentage = (((projectedRevenue - currentRevenue) / currentRevenue) * 100).toFixed(0);

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".roi-card", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center+=100",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-20 relative overflow-hidden bg-slate-950/20 border-y border-slate-900/50">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full -z-10" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-[0.2em]">
                        <Calculator className="w-3 h-3" />
                        <span>Revenue Growth Calculator</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                        Calculate Your <br />
                        <span className="premium-gradient">Potential</span> Lift
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                        See how our performance optimizations directly impact your bottom line. 
                        Faster sites convert better — <span className="text-white font-medium">it&apos;s that simple.</span>
                    </p>

                    <div className="space-y-10 max-w-lg">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                                    <Users className="w-4 h-4 text-emerald-400" />
                                    Monthly Visitors
                                </label>
                                <span className="text-emerald-400 font-black text-lg">{visitors.toLocaleString()}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1000" 
                                max="100000" 
                                step="1000"
                                value={visitors}
                                onChange={(e) => setVisitors(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-900 rounded-full appearance-none cursor-pointer accent-emerald-400"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Order Value ($)</label>
                                <input 
                                    type="number" 
                                    value={avgOrderValue}
                                    onChange={(e) => setAvgOrderValue(parseInt(e.target.value))}
                                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 px-4 text-white font-bold focus:outline-none focus:border-emerald-500/50 transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Conv. Rate (%)</label>
                                <input 
                                    type="number" 
                                    step="0.1"
                                    value={currentConvRate}
                                    onChange={(e) => setCurrentConvRate(parseFloat(e.target.value))}
                                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 px-4 text-white font-bold focus:outline-none focus:border-emerald-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roi-card glass-pilling rounded-[3rem] p-8 md:p-12 border-slate-800/50 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[500px]">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-400/5 blur-[100px] rounded-full" />
                    
                    <div className="relative z-10 text-center mb-12">
                        <div className="inline-flex flex-col items-center gap-1 mb-8">
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Potential Revenue Lift</span>
                            <h3 className="text-7xl md:text-8xl font-black text-emerald-400 tracking-tighter">
                                +{liftPercentage}%
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div className="space-y-2 opacity-50">
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Current Monthly Revenue</p>
                                <div className="text-3xl font-bold flex items-baseline gap-1 text-slate-300">
                                    <span className="text-xl">$</span>{parseInt(currentRevenue).toLocaleString()}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Target Monthly Revenue</p>
                                <div className="text-5xl md:text-6xl font-black flex items-baseline gap-1 premium-gradient">
                                    <span className="text-2xl">$</span>{parseInt(projectedRevenue).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 p-6 rounded-3xl bg-slate-950/80 border border-slate-800/50">
                        <p className="text-slate-400 text-sm italic mb-6 leading-relaxed">
                            Using our Headless Nexus stack, we consistently help brands increase conversion rates from <span className="text-white font-medium">{currentConvRate}%</span> up to <span className="text-emerald-400 font-bold">{targetConvRate}%</span> through instant page loads and zero CLS.
                        </p>
                        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/50">
                            <span className="text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                Est. Revenue Growth
                            </span>
                            <span className="text-emerald-400 font-black text-2xl">+${parseInt(revenueLift).toLocaleString()}/mo</span>
                        </div>
                        <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 active:scale-95 group">
                            <span>Claim This Growth</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
