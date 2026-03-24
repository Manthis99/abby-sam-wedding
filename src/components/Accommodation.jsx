import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const AccommodationSection = () => {
  useEffect(() => {
    gsap.from('.fade-accom', {
      scrollTrigger: { trigger: '#accommodation', start: 'top 70%' },
      y: 30, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out'
    });
  }, []);

  return (
    <section id="accommodation" className="w-full min-h-screen flex flex-col md:flex-row bg-tanBg text-textDark">
      
      {/* Left Image Split */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop" 
          alt="Holding on"
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between h-full">
        
        {/* Top bar logic */}
        <div className="flex justify-between items-start text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono border-b border-textDark/10 pb-4 fade-accom">
          <div className="max-w-[150px]">
            <div>Curated by</div>
            <div>The Proctor Family</div>
          </div>
          <div className="text-right">
            <div>For</div>
            <div>Abby + Sam</div>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-32 mb-32 fade-accom">
          <h2 className="font-sans text-2xl uppercase tracking-[0.1em] shrink-0">
            Accommodation
          </h2>
          <p className="font-sans text-sm leading-relaxed text-textDark/90 max-w-sm ml-auto">
            You're here because you felt a spark. We have found a hotel here in Stara Zagora where we can get a group reservation. The hotel is in the city center. It's not very close to the wedding venue, but we would be happy to help organize transportation for everyone. So feel free to walk right in. 
          </p>
        </div>

        {/* Bottom Pricing/Links Table */}
        <div className="mt-auto mb-12 flex flex-col font-mono text-xs uppercase tracking-widest fade-accom">
          <a href="https://hotel-vereya.com/en/home/" target="_blank" rel="noreferrer" className="flex justify-between py-6 border-t border-textDark/20 hover:text-white transition-colors">
            <span>Hotel Vereya</span>
            <span>70 EUR/Night</span>
          </a>
          <a href="https://share.google/6K9RXnlsj5DN05K40" target="_blank" rel="noreferrer" className="flex justify-between py-6 border-t border-textDark/20 hover:text-white transition-colors">
            <span>Wedding Reception Map</span>
            <span>View Location</span>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdp1MPmL-K4xIklMsHzstFJ_ejoASH1aoT96NLl583pG0k3OQ/viewform" target="_blank" rel="noreferrer" className="flex justify-between py-6 border-t border-b border-textDark/20 hover:text-white transition-colors pb-6">
            <span className="font-bold">RSVP NOW FORM</span>
            <span>Click Here</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="text-right text-[10px] font-mono border-t border-textDark/10 pt-4 fade-accom text-textDark/50">
          03 / 04
        </div>
      </div>

    </section>
  );
};
