"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    id: 1,
    title: "The Golden Horizon Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: "6,400",
    image: "/images/villa.png"
  },
  {
    id: 2,
    title: "Ethereal Forest Retreat",
    location: "Oslo, Norway",
    price: "$4,200,000",
    beds: 3,
    baths: 3,
    sqft: "3,100",
    image: "/images/forest.png"
  },
  {
    id: 3,
    title: "Neo-Tokyo Cloud Suite",
    location: "Shibuya, Tokyo",
    price: "$8,900,000",
    beds: 4,
    baths: 4,
    sqft: "4,200",
    image: "/images/penthouse.png"
  }
];

const Properties = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="py-24 px-6 md:px-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Curated <span className="premium-gradient">Masterpieces</span></h2>
            <p className="text-slate-400">Handpicked properties that redefine luxury living. Each home is a testament to architectural excellence and modern comfort.</p>
          </div>
          <button className="text-amber-400 font-bold border-b-2 border-amber-400/30 hover:border-amber-400 transition-all pb-1 h-fit">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <div 
              key={prop.id}
              ref={el => cardsRef.current[index] = el}
              className="glass-morphism rounded-3xl overflow-hidden group hover:border-amber-400/50 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                  {prop.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{prop.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{prop.title}</h3>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Bed className="w-4 h-4" />
                      <span className="text-xs uppercase font-bold tracking-tighter">Beds</span>
                    </div>
                    <span className="font-bold">{prop.beds}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Bath className="w-4 h-4" />
                      <span className="text-xs uppercase font-bold tracking-tighter">Baths</span>
                    </div>
                    <span className="font-bold">{prop.baths}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Square className="w-4 h-4" />
                      <span className="text-xs uppercase font-bold tracking-tighter">Sqft</span>
                    </div>
                    <span className="font-bold">{prop.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
