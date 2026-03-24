import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  useEffect(() => {
    gsap.from('.fade-hero', {
      y: 20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2574&auto=format&fit=crop")' }}
        ></div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 min-h-screen bg-darkBg text-textLight flex flex-col justify-between p-8 md:p-16">
        
        {/* Top bar logic */}
        <div className="flex justify-between items-start text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono border-b-thin-light pb-4 fade-hero">
          <div className="max-w-[200px]">
            <div>Curated by</div>
            <div>The Proctor Family</div>
            <div className="mt-2 text-textLight/60">Stara Zagora, Bulgaria</div>
          </div>
          <div className="text-right">
            <div>For</div>
            <div>Abby + Sam</div>
            <div className="mt-2 text-textLight/60">Wedding Celebration</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mt-24 mb-32 fade-hero">
          <div className="oval-badge font-sans text-xs tracking-widest uppercase shrink-0">
            WELCOME<br/>FAMILY
          </div>
          <div className="max-w-md font-sans text-sm md:text-base leading-relaxed text-textLight/90">
            <p className="mb-6">
              A wedding celebration is the only tangible moment you get to keep and enjoy entirely with the people you love. Whatever you're planning, we want to celebrate it in a way that stands the test of time.
            </p>
            <p>
              My passion lies in the idea that every family should be able to celebrate their way — wholly, unapologetically, and maybe unconventionally. Through missions in Bulgaria with One Collective, our hearts are here. Crafting days full of heart and intention, not obligation.
            </p>
            <p className="mt-6 italic font-serif text-lg">
              We can't wait to get to know you and tell your story.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end text-xs font-mono border-t border-textLight/10 pt-4 mt-auto fade-hero">
          <div><a href="#rsvp" className="hover:text-tanBg transition-colors">RSVP details below</a></div>
          <div>01 / 04</div>
        </div>

      </div>
    </section>
  );
};
