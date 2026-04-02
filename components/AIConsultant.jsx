"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Bot, Send, Sparkles, User, ShieldCheck, Zap, Globe, Cpu, ArrowRight, MessageSquare, Code2, LineChart } from 'lucide-react';

const AIConsultant = () => {
    const sectionRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Hello! I'm your NexNest Growth Strategist. We focus on transforming complex business problems into high-performance digital systems. How can I assist your transformation today?" }
    ]);

    const smartChips = [
        { label: "Headless WordPress", icon: Code2, prompt: "Tell me about your Headless WordPress architecture." },
        { label: "100/100 Lighthouse", icon: Zap, prompt: "How do you achieve 100/100 score in Lighthouse?" },
        { label: "Technical SEO", icon: Globe, prompt: "What is your strategy for technical SEO and zero CLS?" },
        { label: "Conversion Optimization", icon: LineChart, prompt: "How can I increase my website's ROI using your stack?" }
    ];

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".chat-bubble", {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center+=100",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        const newMessage = { id: Date.now(), type: 'user', text };
        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            let botResponse = "That's a great question! Our strategy revolves around minimizing standard browser bottlenecks. By using Next.js for the frontend and a Headless CMS for the backend, we ensure that every byte served is optimized and cached at the edge. Would you like to see a case study of this in action?";
            
            if (text.toLowerCase().includes("lighthouse")) {
                botResponse = "Achieving a 100/100 Lighthouse score requires a combination of modern image compression (WebP/AVIF), zero layout shifts, and server-side rendering. We also use Vercel's Edge Network to serve static assets instantly.";
            } else if (text.toLowerCase().includes("wordpress")) {
                botResponse = "We use WordPress as a data source via its REST/GraphQL APIs. This gives you the familiar dashboard you love while allowing us to build an incredibly fast, secure frontend using React components.";
            } else if (text.toLowerCase().includes("seo") || text.toLowerCase().includes("cls")) {
                botResponse = "Technical SEO starts with structure. We ensure perfect semantic HTML, lightning-fast Largest Contentful Paint (LCP), and absolutely zero Cumulative Layout Shift (CLS), which Google rewards with higher rankings.";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
        }, 1000);
    };

    return (
        <section id="ai-consultant" ref={sectionRef} className="py-24 px-6 md:px-20 relative overflow-hidden bg-slate-950/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-amber-500/5 blur-[150px] rounded-full -z-10" />
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
                <div className="lg:w-1/2 lg:sticky lg:top-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 mb-6 uppercase tracking-[0.2em]">
                        <Sparkles className="w-3 h-3" />
                        <span>AI Growth Strategist</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        Consult with <br />
                        <span className="premium-gradient">Nexus Intelligence</span>
                    </h2>
                    
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                        Have specific technical questions or want to know if a Headless migration is right for you? Ask our strategy engine anything.
                    </p>
                    
                    <div className="space-y-6 mb-12">
                        <div className="flex flex-wrap gap-3">
                            {smartChips.map((chip, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => handleSendMessage(chip.prompt)}
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-400 hover:border-amber-400/50 hover:text-white transition-all active:scale-95 group"
                                >
                                    <chip.icon className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                                    {chip.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 max-w-md hidden md:block">
                        <div className="flex items-center gap-4 text-emerald-400 mb-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-[10px] uppercase font-black tracking-widest">Secure & Private</span>
                        </div>
                        <p className="text-slate-500 text-xs">This AI maintains privacy standards. No data shared is used for public training.</p>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full lg:max-w-2xl">
                    <div className="glass-pilling rounded-[3rem] border-slate-800/50 p-6 md:p-8 shadow-2xl relative">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center -rotate-6 group">
                                    <Bot className="text-slate-900 w-6 h-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-100 text-lg">Nexus Strategist v2.0</h4>
                                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest decoration-emerald-400 underline underline-offset-4 decoration-2">• ARCHITECTURE READY</span>
                                </div>
                            </div>
                        </div>

                        <div ref={chatContainerRef} className="space-y-6 mb-8 h-[450px] overflow-y-auto no-scrollbar pr-4 scroll-smooth">
                            {messages.map((m) => (
                                <div key={m.id} className={`chat-bubble flex gap-4 ${m.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center ${m.type === 'user' ? 'bg-amber-400' : 'bg-slate-900 border border-slate-800'}`}>
                                        {m.type === 'user' ? <User className="w-5 h-5 text-slate-900" /> : <Bot className="w-5 h-5 text-slate-300" />}
                                    </div>
                                    <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm md:text-base leading-relaxed ${m.type === 'user' ? 'bg-amber-400 text-slate-900 rounded-tr-none' : 'glass-pilling rounded-tl-none text-slate-300 border-slate-800/50'}`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="relative">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="E.g., How to improve my site speed?" 
                                className="w-full bg-slate-900/50 border border-slate-800 rounded-[2rem] py-5 px-8 text-sm md:text-base focus:outline-none focus:border-amber-400/50 transition-all pr-16 text-white"
                            />
                            <button 
                                type="submit"
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center hover:bg-white transition-all group active:scale-90"
                            >
                                <Send className="w-5 h-5 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIConsultant;
