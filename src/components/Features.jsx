import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------------------
// CARD 1: Diagnostic Shuffler (RSVP / Details)
// -----------------------------------------------------------------
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'RSVP Form', desc: 'Secure your place' },
    { id: 2, title: 'Details', desc: 'May 23-26 Itinerary' },
    { id: 3, title: 'Livestream', desc: 'Global online access' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prevCards => {
        const newCards = [...prevCards];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full bg-background rounded-[2rem] shadow-sm border border-dark/5 p-6 flex flex-col justify-between overflow-hidden group">
      <div>
        <h3 className="font-heading font-bold text-lg mb-1">Attendance Protocol</h3>
        <p className="font-mono text-xs text-dark/60 uppercase tracking-widest">Action Required</p>
      </div>
      
      <div className="relative h-32 w-full mt-4 perspective-[1000px]">
        {cards.map((card, index) => {
          const isTop = index === 0;
          return (
            <div 
              key={card.id}
              className={`absolute inset-x-0 bottom-0 bg-white border border-dark/5 rounded-2xl p-4 shadow-sm transition-all duration-700`}
              style={{
                transform: `translateY(-${index * 12}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.2,
                zIndex: 10 - index,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div>
                  <div className="font-mono font-medium text-sm">{card.title}</div>
                  <div className="font-mono text-[10px] text-dark/50">{card.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------
// CARD 2: Telemetry Typewriter (Accommodation Info)
// -----------------------------------------------------------------
const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "SYS_MSG: Hotel block secured.\nLOCATION: Hotel Vereya, City Center.\nRATE: €70/night (inc. breakfast).\nTRANSIT: Transport provided.\nSTATUS: Awaiting confirmation.";
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        onEnter: () => {
          let i = 0;
          setText('');
          const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
          }, 40);
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [fullText]);

  return (
    <div ref={containerRef} className="relative h-64 w-full bg-dark text-background rounded-[2rem] shadow-sm p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 border-b border-background/20 pb-4">
        <h3 className="font-heading font-bold text-lg">Accommodation</h3>
        <div className="flex items-center gap-2 font-mono text-xs text-accent">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          LIVE FEED
        </div>
      </div>
      <div className="flex-1 overflow-hidden font-mono text-xs leading-relaxed text-background/80 whitespace-pre-wrap">
        {text}<span className="inline-block w-2h-3 bg-accent ml-1 animate-pulse">_</span>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------
// CARD 3: Cursor Protocol Scheduler (Timeline)
// -----------------------------------------------------------------
const CursorProtocolScheduler = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const targetDayRef = useRef(null);
  const saveBtnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });

      // Reset state
      tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 })
        .set(targetDayRef.current, { backgroundColor: 'transparent', color: 'inherit' })
        
        // Enter cursor
        .to(cursorRef.current, { opacity: 1, duration: 0.5 })
        
        // Move to Sunday (May 26)
        .to(cursorRef.current, {
          x: () => targetDayRef.current.offsetLeft + 10,
          y: () => targetDayRef.current.offsetTop + 10,
          duration: 1.5,
          ease: 'power2.inOut'
        })
        
        // Click action
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(targetDayRef.current, { backgroundColor: '#C37D62', color: '#EFEDE7', duration: 0.2 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        
        // Move to Save
        .to(cursorRef.current, {
          x: () => saveBtnRef.current.offsetLeft + 20,
          y: () => saveBtnRef.current.offsetTop + 10,
          duration: 1,
          ease: 'power2.inOut',
          delay: 0.5
        })
        
        // Click Save
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(saveBtnRef.current, { scale: 0.95, duration: 0.1 })
        .to(saveBtnRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        
        // Fade out
        .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.2 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={containerRef} className="relative h-64 w-full bg-background rounded-[2rem] shadow-sm border border-dark/5 p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-heading font-bold text-lg mb-1">Timeline Sequence</h3>
        <p className="font-mono text-xs text-dark/60 uppercase tracking-widest">May 2026 Grid</p>
      </div>

      <div className="flex justify-between mt-4 border-t border-b border-dark/10 py-4">
        {days.map((day, i) => (
          <div 
            key={i}
            ref={i === 0 ? targetDayRef : null}
            className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-colors"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="font-mono text-[10px] text-dark/40">23-24: Celebration<br/>26: Ceremony</div>
        <div ref={saveBtnRef} className="px-4 py-1.5 bg-dark text-background rounded-full font-mono text-xs">Save Date</div>
      </div>

      <div ref={cursorRef} className="absolute top-0 left-0 text-dark drop-shadow-md z-20 pointer-events-none" style={{ opacity: 0 }}>
        <MousePointer2 size={24} fill="currentColor" />
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorProtocolScheduler />
      </div>
    </section>
  );
};
