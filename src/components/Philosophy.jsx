import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PhilosophySection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.philo-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Split text reveal for contrast statements
      gsap.from('.philo-line-1', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philo-content',
          start: 'top 80%',
        }
      });

      gsap.from('.philo-line-2', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.philo-content',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80vh] bg-dark flex flex-col items-center justify-center overflow-hidden py-32 px-6">
      <div 
        className="philo-bg absolute inset-0 w-full h-[130%] bg-cover bg-center opacity-20 mix-blend-screen"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2574&auto=format&fit=crop")',
          top: '-15%'
        }}
      ></div>
      
      <div className="philo-content relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col gap-12">
        <p className="philo-line-1 font-mono text-background/50 text-sm md:text-base tracking-[0.2em] uppercase max-w-2xl mx-auto leading-relaxed">
          Most weddings focus on: <span className="text-background">tradition & formal obligation</span>.
        </p>
        
        <h2 className="philo-line-2 font-drama italic text-5xl md:text-7xl lg:text-8xl text-background leading-[1.1]">
          We focus on: <br />
          <span className="text-accent">community</span> and <span className="text-accent">calling</span>.
        </h2>
      </div>
    </section>
  );
};
