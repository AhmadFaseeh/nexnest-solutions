"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Magnetic from '@/components/Magnetic';
import { Home, Zap, Globe, MessageSquare, ArrowUpRight, BarChart3, Info, Phone } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.from(".nav-pill", {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2,
            clearProps: "all"
        });
    }, []);

    const navLinks = [
        { name: "About", href: "/about", icon: Info },
        { name: "Services", href: "/services", icon: BarChart3 },
        { name: "Strategy", href: "/strategy", icon: Zap },
        { name: "Contact", href: "/contact", icon: Phone }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
            <nav className={`
                nav-pill
                group flex items-center justify-between
                px-2 py-2 gap-4 md:gap-8
                rounded-full border duration-500
                ${isScrolled 
                    ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/50 shadow-2xl py-3 px-6' 
                    : 'bg-white/5 backdrop-blur-md border-white/10 py-4 px-8'
                }
            `}>
                <Magnetic>
                    <Link href="/" className="flex items-center gap-3 group/logo p-2">
                        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover/logo:scale-110 transition-transform">
                            <Zap className="text-slate-900 w-4 h-4 fill-slate-900" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white hidden sm:block">NexNest</span>
                    </Link>
                </Magnetic>

                <div className="flex items-center gap-4 md:gap-8 text-[11px] md:text-[13px] font-medium text-slate-300">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link 
                                href={link.href} 
                                className={`
                                    hover:text-amber-400 transition-colors cursor-pointer relative group/link p-2
                                    ${pathname === link.href ? 'text-amber-400' : ''}
                                `}
                            >
                                {link.name}
                                <span className={`
                                    absolute -bottom-1 left-0 h-px bg-amber-400 transition-all 
                                    ${pathname === link.href ? 'w-full' : 'w-0 group-hover/link:w-full'}
                                `}></span>
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <Magnetic>
                    <Link href="/contact" className="
                        bg-white text-slate-950 
                        px-4 md:px-6 py-2 rounded-full 
                        text-[10px] md:text-xs font-bold uppercase tracking-widest
                        hover:bg-amber-400 hover:scale-105 active:scale-95
                        transition-all duration-300 flex items-center gap-2
                    ">
                        Get Started
                        <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </Magnetic>
            </nav>
        </div>
    );
};

export default Navbar;
