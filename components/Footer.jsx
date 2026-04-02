"use client";
import React from 'react';
import Link from 'next/link';
import { Zap, Globe, Share2, Users, ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-24 px-6 md:px-20 bg-[#020617] border-t border-slate-900 overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-amber-500/5 blur-[150px] -z-10" />
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                                <Zap className="text-slate-900 w-5 h-5 fill-slate-900" />
                            </div>
                            <span className="font-bold text-3xl tracking-tighter text-white">NexNest</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Premium digital agency specializing in <span className="text-white font-medium">high-performance ecosystems</span>. 
                            Built for those who demand the fastest experiences on the web.
                        </p>
                        <div className="flex items-center gap-6">
                            <Globe className="w-5 h-5 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer" />
                            <Share2 className="w-5 h-5 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer" />
                            <Users className="w-5 h-5 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li>
                                <Link href="/services/headless-wp" className="hover:text-amber-400 cursor-pointer transition-colors flex items-center gap-2 group">
                                    Headless WordPress <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/custom-dev" className="hover:text-amber-400 cursor-pointer transition-colors flex items-center gap-2 group">
                                    Custom Dev <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/seo-performance" className="hover:text-amber-400 cursor-pointer transition-colors flex items-center gap-2 group">
                                    SEO & Performance <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li>
                                <Link href="/strategy" className="hover:text-amber-400 cursor-pointer transition-colors">Our Approach</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-400 cursor-pointer transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-400 cursor-pointer transition-colors">Consultation</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="font-bold text-lg text-white uppercase tracking-widest text-xs">Let&apos;s Build</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Ready to outperform your competition?</p>
                        <Link href="/contact" className="block w-full text-center bg-white text-slate-950 py-4 rounded-2xl font-bold hover:bg-amber-400 transition-all shadow-xl active:scale-95">
                            Book a Direct Call
                        </Link>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">© 2026 NEXNEST SOLUTIONS LTD.</p>
                    <div className="flex items-center gap-8 text-slate-600 text-[10px] uppercase tracking-widest font-bold">
                        <Link href="/privacy" className="hover:text-slate-400 cursor-pointer transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-slate-400 cursor-pointer transition-colors">Terms</Link>
                        <Link href="/security" className="hover:text-slate-400 cursor-pointer transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
