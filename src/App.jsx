import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, ExternalLink, MapPin, Menu, Plane, Sparkles, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RSVP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdp1MPmL-K4xIklMsHzstFJ_ejoASH1aoT96NLl583pG0k3OQ/viewform?usp=sharing&ouid=109118939643548411635";
const CASH_APP_LINK = "https://cash.app/$tkdtitan";
const VENMO_LINK = "https://venmo.com/u/proctorarp";
const REVOLUT_LINK = "https://revolut.me/sjung97";
const PAYPAL_LINK = "https://www.paypal.com/qrcodes/p2pqrc/YAYPVFJADBXJQ";
const HOTEL_LINK = "https://hotel-vereya.com/en/home/";

const directGiftOptions = [
  {
    name: 'Cash App',
    href: CASH_APP_LINK,
    detail: '$tkdtitan',
  },
  {
    name: 'Venmo',
    href: VENMO_LINK,
    detail: '@proctorarp',
  },
  {
    name: 'Revolut',
    href: REVOLUT_LINK,
    detail: 'Sam Young',
  },
];

const qrGiftOptions = [
  {
    name: 'Revolut QR',
    href: REVOLUT_LINK,
    image: '/abby-sam-photos/Donate with revolut qr code.jpeg',
    alt: 'Revolut donation QR code for Sam Young',
    note: 'Scan to give through Revolut.',
  },
  {
    name: 'PayPal QR',
    href: PAYPAL_LINK,
    image: '/abby-sam-photos/donate with paypall.jpeg',
    alt: 'PayPal donation QR code for Sam Young',
    note: 'Scan to give through PayPal.',
  },
];

const timelineSteps = [
  {
    phase: 'Step 01',
    label: 'Before You Go',
    title: 'Buy Tickets & Start Planning',
    timing: 'As early as you can',
    summary: 'Once you know you are coming, start watching flights and send us your rough travel plans.',
    details: [
      'International tickets are usually easier when booked earlier, especially around late spring.',
      'If you want help comparing arrival options, we are happy to help think through routes and timing.',
      'Trying to arrive before the main gatherings begin will make the whole trip feel much more relaxed.',
    ],
    tips: ['Book flights', 'Share itinerary', 'Ask us questions'],
    accent: 'bg-[#E8D8C1]',
    icon: Plane,
  },
  {
    phase: 'Step 02',
    label: 'Get Ready',
    title: 'Pack for a Week That Mixes Celebration and Travel',
    timing: 'The week before',
    summary: 'Think comfortable, flexible, and easy to move around in during a full trip abroad.',
    details: [
      'Bring your passport, travel essentials, and any medications you need for the full trip.',
      'Pack one dressier outfit for wedding events and comfortable clothes for hanging out, exploring, and travel days.',
      'Layers will likely be your friend, especially for evenings or longer days out.',
    ],
    tips: ['Passport', 'Wedding outfit', 'Comfy shoes'],
    accent: 'bg-[#D9D4C8]',
    icon: Briefcase,
  },
  {
    phase: 'Step 03',
    label: 'Arrive',
    title: 'Land, Exhale, and Get Settled',
    timing: 'Arrival day',
    summary: 'This part is about recovering from travel, checking in, and getting your bearings.',
    details: [
      'After you arrive, settle into your room, rest a little, and let us know you made it safely.',
      'We have arranged a group hotel option in central Stara Zagora for guests who want to stay together.',
      'No need to have everything figured out right away. The goal is simply to land and breathe.',
    ],
    tips: ['Check in', 'Hotel option', 'Text us when you arrive'],
    accent: 'bg-[#E3E0D3]',
    icon: MapPin,
    hotel: {
      name: 'Hotel Vereya',
      rate: 'EUR70 per room, per night',
      note: 'Includes breakfast and gives guests a simple home base in the center of town.',
      href: HOTEL_LINK,
    },
  },
  {
    phase: 'Step 04',
    label: 'Celebrate',
    title: 'Pre-Wedding Gatherings and Time Together',
    timing: 'May 23-24, 2026',
    summary: 'These days are for seeing people, sharing meals, exploring, and easing into the week together.',
    details: [
      'We want this part of the trip to feel welcoming and relational, not rushed or overly scheduled.',
      'Expect time for informal gatherings, conversations, and enjoying Bulgaria with the people who made the trip.',
      'This is a great window for anyone arriving a little early to settle in before the ceremony.',
    ],
    tips: ['Meals together', 'Explore the area', 'Enjoy slower moments'],
    accent: 'bg-[#E8CDBE]',
    icon: Sparkles,
  },
  {
    phase: 'Step 05',
    label: 'Wedding Day',
    title: 'Ceremony and Celebration',
    timing: 'May 26, 2026',
    summary: 'The heart of the trip: the ceremony itself and the time around it.',
    details: [
      'We will share final timing and venue details closer to the wedding so everyone has the clearest information.',
      'The day will be focused on celebrating, being together, and beginning our marriage in a place that matters deeply to us.',
      'We know many guests are traveling far, so we want the day to feel meaningful, joyful, and worth the journey.',
    ],
    tips: ['Final details later', 'Celebrate together', 'Take lots of photos'],
    accent: 'bg-[#D7B7AA]',
    icon: Sparkles,
  },
  {
    phase: 'Step 06',
    label: 'Afterward',
    title: 'Hang Out, Recover, and Fly Home',
    timing: 'After the ceremony',
    summary: 'Think gentle goodbyes, one more coffee, and heading home with good memories.',
    details: [
      'Some guests may leave soon after the wedding, while others may have more time to linger before flying home.',
      'If schedules line up, we would love extra moments together before everyone heads back.',
      'This part does not need to be complicated. It can simply be restful and sweet.',
    ],
    tips: ['Easy departure day', 'One last hang', 'Travel home'],
    accent: 'bg-[#D7C6B8]',
    icon: Plane,
  },
];

// Button Component
const Button = ({ href, children, variant = 'primary' }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 font-sans text-sm md:text-base font-medium tracking-wide transition-all duration-300 rounded-full text-center";
  const variants = {
    primary: "bg-tanBg text-textDark hover:bg-opacity-90",
    secondary: "bg-darkBg text-textLight hover:bg-opacity-90",
    outline: "border border-currentColor hover:bg-textDark hover:text-background",
    outlineLight: "border border-textLight/50 text-textLight hover:bg-textLight hover:text-darkBg"
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </a>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Global simple scroll animation for elements with .fade-up
    const elements = gsap.utils.toArray('.fade-up');
    elements.forEach(el => {
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Journey', href: '#journey' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Gifts', href: '#gifts' },
  ];

  return (
    <div className="bg-background text-textDark font-sans selection:bg-tanBg selection:text-textDark font-light leading-relaxed">
      
      {/* STICKY NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b-thin">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-serif font-bold text-xl md:text-2xl tracking-tight text-textDark">
            A & S
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-textDark/80">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-tanBg transition-colors">{link.name}</a>
            ))}
            <a href={RSVP_LINK} target="_blank" rel="noreferrer" className="bg-darkBg text-textLight px-4 py-2 rounded-full hover:bg-darkBg/80 transition-colors">
              RSVP
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-textDark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b-thin py-4 px-6 flex flex-col gap-4 font-mono text-sm uppercase tracking-widest shadow-xl">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="py-2 border-b-thin"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href={RSVP_LINK} target="_blank" rel="noreferrer" className="py-2 text-tanBg font-bold flex items-center gap-2">
              RSVP FORM <ExternalLink size={14} />
            </a>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section className="w-full min-h-[90vh] md:min-h-screen pt-24 flex flex-col md:flex-row bg-darkBg text-textLight">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 order-2 md:order-1">
          <div className="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
              Abby Proctor<br/>& Sam Young
            </h1>
            <div className="font-mono text-sm md:text-base uppercase tracking-widest text-tanBg mb-8 space-y-2 lg:max-w-sm">
              <p>Stara Zagora, Bulgaria</p>
              <p>May 26, 2026</p>
            </div>
            <p className="font-sans text-lg md:text-xl text-textLight/80 max-w-md mb-12">
              Join us as we get married in a place that has become home to us.
            </p>
            <Button href={RSVP_LINK} variant="primary">
              Fill Out the RSVP Form <ExternalLink size={18} />
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto order-1 md:order-2 bg-tanBg overflow-hidden">
          <img 
            src="/abby-sam-photos/abby-sam-at-sara-wedding-2.jpg" 
            alt="Bulgaria Mountains" 
            className="w-full h-full object-cover object-[center_12%] md:object-center grayscale mix-blend-multiply opacity-80"
          />
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section id="story" className="w-full py-24 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3 fade-up">
            <h2 className="font-serif text-4xl md:text-5xl border-b-thin pb-4">Why Bulgaria?</h2>
          </div>
          <div className="md:w-2/3 space-y-6 text-base md:text-lg text-textDark/80 fade-up">
            <p>Over the past season of our lives, Bulgaria has become more than a place we work. It has become home.</p>
            <p>Through our work with One Collective in Tulovo, we’ve had the chance to build relationships, learn from this community, and be shaped by the people around us. It felt right to begin our marriage here, in a place that has already changed us.</p>
            <p>We know this isn’t the easiest wedding to get to. But for those who are able to come, we’re excited to share this place with you.</p>
          </div>
        </div>
      </section>

      {/* Photo Insert 1 */}
      <div className="w-full h-64 md:h-96 overflow-hidden bg-tanBg">
        <img 
          src="/abby-sam-photos/Athens-Drone-3.jpg" 
          alt="A scenic drone photo from Athens" 
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 fade-up"
        />
      </div>

      {/* 3. JOURNEY TIMELINE SECTION */}
      <section id="journey" className="w-full py-24 md:py-32 px-6 bg-darkBg text-textLight overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24 fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-tanBg mb-4">Trip Overview</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">A simple way to see the whole trip at a glance.</h2>
            <p className="text-textLight/75 text-base md:text-lg max-w-2xl">
              From booking your ticket to heading home, this timeline walks you through the practical details step by step.
            </p>
          </div>

          <div className="relative pl-6 md:pl-10 lg:pl-12">
            {/* The vertical line */}
            <div className="absolute left-[11px] md:left-[19px] lg:left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-tanBg/20 via-tanBg/50 to-tanBg/20"></div>

            <div className="space-y-20 lg:space-y-28">
              {timelineSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.phase} className="relative fade-up w-full">
                    {/* The timeline node/icon */}
                    <div className={`absolute -left-[32px] md:-left-[42px] lg:-left-[47px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-4 border-darkBg ${step.accent} shadow-xl z-10`}>
                      <StepIcon size={18} className="text-darkBg" />
                    </div>

                    {/* The content card */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 pl-4 md:pl-6 pt-1 md:pt-2">
                      <div className="lg:w-1/3 shrink-0">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-tanBg mb-3">{step.phase} &middot; {step.timing}</p>
                        <h3 className="font-serif text-3xl md:text-4xl leading-tight text-white mb-4">{step.title}</h3>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-lg md:text-xl text-textLight/90 mb-6 leading-relaxed">{step.summary}</p>
                        
                        <div className="space-y-4 mb-8">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                              <span className="mt-2.5 h-1 w-1 rounded-full bg-tanBg shrink-0"></span>
                              <p className="text-textLight/70 text-sm md:text-base leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>

                        {step.hotel && (
                          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8 mb-8 backdrop-blur-sm">
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tanBg mb-3">Stay Together</p>
                            <h4 className="font-serif text-3xl text-white mb-3">{step.hotel.name}</h4>
                            <p className="text-textLight/80 mb-3">{step.hotel.note}</p>
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-tanBg/80 mb-6">{step.hotel.rate}</p>
                            <Button href={step.hotel.href} variant="outlineLight">
                              View Hotel Details <ExternalLink size={16} />
                            </Button>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mt-8 border-t border-white/10 pt-6">
                          {step.tips.map((tip) => (
                            <span key={tip} className="rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-textLight/60 mix-blend-screen">
                              {tip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* 5. RSVP & 6. LIVESTREAM SECTION */}
      <section id="rsvp" className="w-full py-24 md:py-32 px-6 bg-darkBg text-textLight">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <div className="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Let Us Know Your Plans</h2>
            <div className="space-y-4 text-textLight/80 mb-8">
              <p>Please take a few minutes to fill out this form, whether you plan to attend in person or join via livestream.</p>
              <p>This helps us organize lodging, transportation, and overall planning.</p>
            </div>
            <Button href={RSVP_LINK} variant="primary">
              Complete the Form <ExternalLink size={18} />
            </Button>
          </div>

          <div className="fade-up border-t border-textLight/10 md:border-t-0 md:border-l border-textLight/10 md:pl-16 pt-16 md:pt-0">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Joining From Afar</h2>
            <div className="space-y-4 text-textLight/80">
              <p>We know not everyone will be able to travel internationally, and that’s okay.</p>
              <p>We’ll be sharing a livestream of the ceremony so you can still be part of the day.</p>
              <p className="italic font-serif mt-4 text-tanBg">Details will be shared closer to the wedding.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GIFTS & GIVING SECTION */}
      <section id="gifts" className="w-full py-24 md:py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
            <div className="fade-up">
              <div className="rounded-[2rem] overflow-hidden bg-tanBg shadow-xl mb-8">
                <img
                  src="/abby-sam-photos/abby sam waterfall.jpeg"
                  alt="Abby and Sam standing together by a waterfall"
                  className="w-full h-[24rem] md:h-[34rem] object-cover object-[center_62%]"
                />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Gifts & Giving</h2>
              <div className="space-y-5 text-base md:text-lg text-textDark/80 max-w-2xl">
                <p>Your presence, whether in Bulgaria or online, means a lot to us.</p>
                <p>Gifts are hard to ship internationally, so if you’d like to celebrate with us, a contribution toward our honeymoon and future life together would mean a lot.</p>
                <p>We’ve added a few simple ways to give so you can use whichever option is easiest.</p>
                <p className="italic">Thank you for loving us well and cheering us on from near or far.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-darkBg/10 p-8 rounded-[2rem] bg-white shadow-sm fade-up">
                <h3 className="font-sans text-2xl mb-3 text-darkBg">Direct Gift Options</h3>
                <p className="text-sm md:text-base text-textDark/70 mb-8">Choose whichever platform works best for you. If one app is not available, another one should be.</p>

                <div className="space-y-4">
                  {directGiftOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 rounded-2xl border border-darkBg/10 bg-background/60 px-5 py-4 transition-all duration-300 hover:border-darkBg/30 hover:shadow-md"
                    >
                      <div>
                        <p className="font-sans text-lg text-darkBg">{option.name}</p>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-textDark/50">{option.detail}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-tanBg font-bold">
                        Open <ExternalLink size={16} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-darkBg/10 p-8 rounded-[2rem] bg-tanBg/35 shadow-sm fade-up">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                  <div>
                    <h3 className="font-sans text-2xl text-darkBg">Scan a QR Code</h3>
                    <p className="text-sm md:text-base text-textDark/70 mt-2">These codes link to Sam’s Revolut and PayPal giving options.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {qrGiftOptions.map((option) => (
                    <div key={option.name} className="rounded-[1.5rem] overflow-hidden bg-white border border-darkBg/10">
                      <img
                        src={option.image}
                        alt={option.alt}
                        className="w-full aspect-[4/5] object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-sans text-lg text-darkBg mb-2">{option.name}</h4>
                        <p className="text-sm text-textDark/70 mb-4">{option.note}</p>
                        {option.href ? (
                          <a
                            href={option.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-darkBg font-semibold underline underline-offset-4 hover:text-black transition-colors"
                          >
                            Open Link <ExternalLink size={16} />
                          </a>
                        ) : (
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-textDark/50">QR only</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NOTE SECTION */}
      <section className="w-full py-24 px-6 bg-tanBg">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">A Quick Note</h2>
          <div className="space-y-4 text-textDark/80 text-lg">
            <p>Planning a wedding across countries and time zones comes with a lot of moving parts.</p>
            <p>We’re doing our best to keep things organized and communicated clearly, but some details will come together over time.</p>
            <p className="font-serif italic text-xl mt-6">Thank you for your patience, flexibility, and support. It means more to us than you know.</p>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="w-full bg-darkBg text-textLight py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none fade-up"></div>
        <div className="max-w-lg mx-auto relative z-10 fade-up">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">Abby & Sam</h2>
          <p className="font-sans text-lg text-textLight/70 mb-8 italic font-serif">With love from Bulgaria</p>
          <div className="w-12 h-[1px] bg-tanBg mx-auto mb-8"></div>
          <p className="font-mono text-xs tracking-widest uppercase text-textLight/40">Serving with One Collective in Tulovo</p>
        </div>
      </footer>

    </div>
  );
}
