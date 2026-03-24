import React from 'react';

export const FooterSection = () => {
  return (
    <footer className="w-full bg-background text-textDark py-16 px-8 md:p-16">
      
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 fade-footer">
        
        <div className="flex items-start gap-8">
          <div className="font-sans text-xs flex flex-col gap-1 w-32 font-bold uppercase tracking-widest text-textDark/60">
            <span>Abby + Sam</span>
            <span>Bulgaria Team</span>
          </div>
          <p className="font-sans text-sm md:text-xs leading-relaxed max-w-sm text-textDark/80">
            A beautiful community is what relationship dreams are made of. We originally chose this because we loved the aesthetic, but mostly because of the intentionality. We took the time to invite everyone who made an impact on us. And we are so happy you are here to photograph our special day.
            <br/><br/>
            "Thank you. See ya!"
          </p>
        </div>

        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-right flex gap-12 mt-12 md:mt-0">
          <div className="flex flex-col items-end">
             <span>Stara Zagora</span>
             <span className="text-textDark/50">Company: One Collective</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-end gap-12 border-t border-textDark/10 pt-12 fade-footer">
        <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden bg-darkBg/10">
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2670&auto=format&fit=crop" alt="mountain wedding" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
        </div>
        <div className="font-sans text-2xl md:text-4xl uppercase tracking-[0.2em]">
          End Notes
        </div>
      </div>

      <div className="text-right text-[10px] font-mono pt-4 mt-8 border-t border-textDark/10 text-textDark/50 fade-footer">
        04 / 04
      </div>
    </footer>
  );
};
