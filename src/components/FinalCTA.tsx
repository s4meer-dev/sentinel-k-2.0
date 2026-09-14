import React from 'react';
import { ArrowRight, Compass, Radio } from 'lucide-react';

interface FinalCTAProps {
  onExperienceClick: () => void;
  onVisionClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExperienceClick }) => {
  return (
    <section className="relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Launchcard Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#FAF9F5] border border-black/[0.08] p-8 sm:p-14 lg:p-16 shadow-[0_12px_45px_rgba(0,0,0,0.04)] relative overflow-hidden text-center">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/[0.08] blur-[140px] pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Radio className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">NEXT-GEN CELLULAR EXPERIENCE</span>
          </div>

          {/* Bold Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05] max-w-3xl mx-auto">
            YOUR CONNECTION <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              SHOULD WORK FOR YOU.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Experience phone-native connectivity intelligence. Observe drops, understand flux, take supported recovery actions, and build localized memory.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExperienceClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_25px_rgba(240,179,28,0.35)] hover:shadow-[0_6px_35px_rgba(240,179,28,0.55)] active:scale-98 cursor-pointer"
            >
              <span>LAUNCH LIVE DEMO</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-black/15 font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#F0B31C]" />
              <span>EXPLORE ARCHITECTURE</span>
            </button>
          </div>

          {/* Mini Phone Telemetry Status bar */}
          <div className="mt-12 max-w-md mx-auto p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-800 font-bold">iQOO Modem-RF: Active</span>
            </div>
            <span className="text-amber-700 font-extrabold uppercase">
              5G SA // 18ms Locked
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
