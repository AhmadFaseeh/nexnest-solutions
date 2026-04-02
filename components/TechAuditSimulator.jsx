"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Globe, Search, Loader2, CheckCircle2, Zap, Shield, SearchIcon, BarChart3 } from 'lucide-react';

const TechAuditSimulator = () => {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [results, setResults] = useState(null);
    const sectionRef = useRef(null);

    const startScan = (e) => {
        e.preventDefault();
        if (!url) return;
        
        setIsScanning(true);
        setScanProgress(0);
        setResults(null);

        // Simulate progress
        const tl = gsap.to({}, {
            duration: 3,
            onUpdate: function() {
                setScanProgress(Math.floor(this.progress() * 100));
            },
            onComplete: () => {
                setIsScanning(false);
                setResults({
                    performance: 98,
                    accessibility: 95,
                    bestPractices: 100,
                    seo: 92,
                    speed: '0.8s',
                    lcp: '1.1s',
                    cls: '0.01'
                });
                
                // Animate results entry
                gsap.from(".result-card", {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power3.out"
                });
            }
        });
    };

    return (
        <section id="audit-simulator" ref={sectionRef} className="py-24 px-6 md:px-20 relative overflow-hidden bg-slate-950/40">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full -z-10" />
            
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 mb-6 uppercase tracking-[0.2em]">
                    <Search className="w-3 h-3" />
                    <span>Real-time Technical Audit</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                    Analyze Your <span className="premium-gradient">Performance</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Enter your website URL to simulate a deep technical audit. 
                    See how your current stack compares to our <span className="text-white font-medium">Headless Nexus</span> standard.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="glass-pilling rounded-[2.5rem] p-8 md:p-12 border-slate-800/50 shadow-2xl relative overflow-hidden">
                    <form onSubmit={startScan} className="relative z-10 flex flex-col md:flex-row gap-4 mb-12">
                        <div className="relative flex-1">
                            <Globe className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input 
                                type="text" 
                                placeholder="https://yourwebsite.com" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-5 px-14 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                disabled={isScanning}
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={isScanning || !url}
                            className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 group shadow-lg shadow-blue-500/20"
                        >
                            {isScanning ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Scanning... {scanProgress}%</span>
                                </>
                            ) : (
                                <>
                                    <span>Run Audit</span>
                                    <SearchIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {results && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { label: "Performance", val: results.performance, icon: Zap, color: "text-amber-400" },
                                { label: "SEO Grade", val: results.seo, icon: Globe, color: "text-emerald-400" },
                                { label: "Accessibility", val: results.accessibility, icon: Shield, color: "text-blue-400" },
                                { label: "Speed", val: results.speed, icon: BarChart3, color: "text-purple-400", isSpeed: true }
                            ].map((res, i) => (
                                <div key={i} className="result-card glass-pilling p-6 rounded-3xl border-slate-800/50 flex flex-col items-center text-center group hover:border-white/10 transition-all">
                                    <div className={`w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-4 border border-slate-800 ${res.color}`}>
                                        <res.icon className="w-6 h-6" />
                                    </div>
                                    <div className={`text-3xl font-black mb-1 ${res.color}`}>
                                        {res.isSpeed ? res.val : `${res.val}%`}
                                    </div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{res.label}</p>
                                    
                                    <div className="mt-4 w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full bg-current ${res.color} transition-all duration-1000`} 
                                            style={{ width: res.isSpeed ? '100%' : `${res.val}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!results && !isScanning && (
                        <div className="text-center py-10 opacity-30">
                            <p className="text-slate-500 font-medium italic">Reports will be generated after scanning your URL.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechAuditSimulator;
