import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const DetailsSection = () => {
  useEffect(() => {
    gsap.from('.fade-details', {
      scrollTrigger: {
        trigger: '#details',
        start: 'top 70%'
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section id="details" className="w-full bg-background text-textDark py-16 px-8 md:p-16">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b-thin pb-4 fade-details">
        <h2 className="font-sans text-xl md:text-2xl uppercase tracking-[0.15em] mb-8 md:mb-0">
          Frequently<br/>Asked
        </h2>
        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-right flex gap-12">
          <div className="flex flex-col items-end">
            <span>May 23-26</span>
            <span className="text-textDark/50">Stara Zagora, BG</span>
          </div>
          <div className="flex flex-col items-end">
            <span>Abby + Sam</span>
            <span className="text-textDark/50">Celebration</span>
          </div>
        </div>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-24 fade-details">
        
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-textDark/60">What is the schedule?</h3>
          <p className="font-sans text-sm leading-relaxed text-textDark/90">
            For the celebration, we gather May 23-24. We want to spend real time with you. The official wedding ceremony will be held right after on May 26. Every session is different... I try to embrace individuality and spontaneity.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-textDark/60">Who should RSVP?</h3>
          <p className="font-sans text-sm leading-relaxed text-textDark/90">
            Please fill out the survey even if you are not coming and plan to watch the livestream. An international wedding is quite difficult to organize. You'll hear from us typically tracking responses immediately.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-textDark/60">Where is the Reception?</h3>
          <p className="font-sans text-sm leading-relaxed text-textDark/90">
            I'm a big believer in quality over quantity, so a local reception has been chosen to celebrate the Stara Zagora community. We rely on your feedback as the path progresses. 
          </p>
        </div>

      </div>

      {/* Image Grid Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b-thin pb-12 fade-details">
        <div className="aspect-square bg-darkBg/10 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop" alt="couple" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
        </div>
        <div className="aspect-square bg-darkBg/10 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2600&auto=format&fit=crop" alt="wedding" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
        </div>
        <div className="aspect-square bg-darkBg/10 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" alt="friends" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
        </div>
      </div>

      <div className="text-right text-xs font-mono pt-4 text-textDark/50">02 / 04</div>

    </section>
  );
};
