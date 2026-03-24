import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RSVP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdp1MPmL-K4xIklMsHzstFJ_ejoASH1aoT96NLl583pG0k3OQ/viewform?usp=sharing&ouid=109118939643548411635";
const CASH_APP_LINK = "https://cash.app/$tkdtitan";
const VENMO_LINK = "https://venmo.com/u/proctorarp";
const REVOLUT_LINK = "https://revolut.me/sjung97";

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
    href: null,
    image: '/abby-sam-photos/donate with paypall.jpeg',
    alt: 'PayPal donation QR code for Sam Young',
    note: 'Scan to give through PayPal.',
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
    { name: 'Events', href: '#events' },
    { name: 'Travel', href: '#travel' },
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
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
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
          src="/abby-sam-photos/abby sam waterfall.jpeg" 
          alt="Abby and Sam standing together by a waterfall" 
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 fade-up"
        />
      </div>

      {/* 3. EVENTS SECTION */}
      <section id="events" className="w-full py-24 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 md:mb-24 fade-up">Wedding Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            <div className="flex flex-col border-t-thin pt-6 fade-up">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-textDark/50 mb-2">May 23–24</h3>
              <h4 className="font-sans text-2xl mb-4">Celebration Gatherings</h4>
              <p className="text-textDark/80">We’ll spend time together, explore the area, and celebrate with those who have made the trip.</p>
            </div>
            
            <div className="flex flex-col border-t-thin pt-6 fade-up">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-textDark/50 mb-2">May 26</h3>
              <h4 className="font-sans text-2xl mb-4">Wedding Ceremony</h4>
              <p className="text-textDark/80">Full details and timing will be shared closer to the date.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TRAVEL & STAY SECTION */}
      <section id="travel" className="w-full py-24 md:py-32 px-6 bg-tanBg text-textDark">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3 fade-up">
            <h2 className="font-serif text-4xl md:text-5xl border-b border-textDark/10 pb-4">Travel & Stay</h2>
            <div className="mt-8 rounded-lg overflow-hidden shrink-0 shadow-lg">
              <img src="/abby-sam-photos/abby-sam-cold.jpg" className="w-full h-auto object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6 text-base md:text-lg text-textDark/80 fade-up">
            <p>We’ve arranged a group hotel option in the center of Stara Zagora for those who would like to stay together.</p>
            
            <div className="bg-background/40 p-6 md:p-8 rounded-lg my-8 space-y-4 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-textDark">Hotel Vereya</h3>
              <p className="font-mono text-sm tracking-wide">€70 per room, per night (includes breakfast)</p>
              <a href="https://hotel-vereya.com/en/home/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-darkBg hover:text-black font-semibold underline underline-offset-4 transition-colors">
                View Hotel Details <ExternalLink size={16} />
              </a>
            </div>

            <p>If you prefer to stay elsewhere, we’re happy to recommend other options.</p>
            <p>The wedding venue is not within walking distance of the hotel, but we will help coordinate transportation.</p>
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
                  className="w-full h-[24rem] md:h-[34rem] object-cover"
                />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Gifts & Giving</h2>
              <div className="space-y-5 text-base md:text-lg text-textDark/80 max-w-2xl">
                <p>Your presence, whether in Bulgaria or online, means a lot to us.</p>
                <p>As we begin married life in Bulgaria, we’re keeping gifts simple and flexible. If you’d like to support us, we’ve added a few direct ways to give so people can use whichever option is easiest.</p>
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
