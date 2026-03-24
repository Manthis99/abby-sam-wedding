import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cta-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto flex items-center justify-center">
      <div className="cta-card w-full max-w-4xl bg-primary text-background rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle texture in background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 relative z-10">
          Join the Celebration
        </h2>
        <p className="font-mono text-sm md:text-base text-background/80 max-w-xl mx-auto mb-12 relative z-10 leading-relaxed">
          Please fill out the RSVP survey even if you plan to watch the livestream. It helps us keep track of everything across borders. 
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdp1MPmL-K4xIklMsHzstFJ_ejoASH1aoT96NLl583pG0k3OQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-background rounded-full font-heading font-semibold text-lg hover:bg-opacity-90 transition-colors"
          >
            <span className="relative z-10">RSVP Output</span>
            <ArrowRight size={20} className="relative z-10" />
          </a>
          
          <a 
            href="#" 
            className="link-lift flex items-center gap-2 font-mono text-sm text-background/60 hover:text-background transition-colors"
          >
            <Gift size={16} /> Registry / Donate
          </a>
        </div>
      </div>
    </section>
  );
};
