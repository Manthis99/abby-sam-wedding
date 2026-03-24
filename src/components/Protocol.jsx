import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArchiveCard = ({ index, title, desc, step, SvgVisual }) => {
  return (
    <div className="archive-card h-screen w-full flex items-center justify-center sticky top-0 bg-background overflow-hidden origin-top">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="w-full md:w-1/2 flex items-center justify-center h-64 md:h-[500px]">
          <SvgVisual />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="font-mono text-accent mb-6 tracking-widest uppercase">Phase {step}</div>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark mb-6">{title}</h2>
          <p className="font-mono text-dark/70 text-sm md:text-base leading-relaxed max-w-md">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProtocolSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.archive-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card doesn't scale down
        
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.3,
          filter: "blur(10px)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const visuals = [
    // 1. Rotating geometric motif
    () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-md animate-spin-slow">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-dark/20" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="text-accent" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-dark/40" />
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <line key={deg} x1="100" y1="10" x2="100" y2="30" stroke="currentColor" strokeWidth="2" className="text-dark" transform={`rotate(${deg} 100 100)`} />
        ))}
      </svg>
    ),
    // 2. Scanning horizontal laser-line on grid
    () => (
      <div className="relative w-full max-w-md aspect-square overflow-hidden border border-dark/10 rounded-3xl bg-dark/5">
        <div className="absolute inset-0 bg-[radial-gradient(#292523_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="absolute left-0 right-0 h-1 bg-accent/80 shadow-[0_0_15px_rgba(195,125,98,0.5)] animate-scan"></div>
      </div>
    ),
    // 3. EKG / Pulse path
    () => (
      <svg viewBox="0 0 400 200" className="w-full h-full max-w-md">
        <path 
          d="M0,100 L150,100 L175,50 L200,180 L225,20 L250,100 L400,100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4" 
          className="text-accent [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-draw-path" 
        />
        <circle cx="200" cy="100" r="8" fill="currentColor" className="text-dark animate-pulse" />
      </svg>
    )
  ];

  return (
    <section ref={containerRef} className="relative w-full">
      <ArchiveCard 
        index={0}
        step="01"
        title="The Gathering"
        desc="May 23-24. Guests arrive in Stara Zagora from around the world. We come together to build connections and explore the city we call home."
        SvgVisual={visuals[0]}
      />
      <ArchiveCard 
        index={1}
        step="02"
        title="The Calibration"
        desc="May 25. Final preparations and rest. A moment of pause to center ourselves before the ceremony, reflecting on the commitment ahead."
        SvgVisual={visuals[1]}
      />
      <ArchiveCard 
        index={2}
        step="03"
        title="The Commitment"
        desc="May 26. The ceremony. In the presence of God and our community, we officially begin our journey as one."
        SvgVisual={visuals[2]}
      />
    </section>
  );
};
