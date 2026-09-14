import React from 'react';
import { ArrowRight, Compass, Radio } from 'lucide-react';

interface FinalCTAProps {
  onExperienceClick: () => void;
  onVisionClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ 
  onExperienceClick,
  onVisionClick 
}) => {
  return (
    <section className="relative py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Abstract background acrylic washes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-blue-900/20 via-[#F0B31C]/10 to-indigo-900/20 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-8 shadow-sm">
          <Radio className="w-3.5 h-3.5 text-[#F0B31C] animate-pulse" />
          <span>CLOSED-LOOP PHONE INTELLIGENCE</span>
        </div>

        {/* Large Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.06] uppercase">
          YOUR CONNECTION <br />
          <span className="text-[#F0B31C]">
            SHOULD WORK FOR YOU.
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-heading font-extrabold leading-relaxed">
          “Observe it. Understand it. Improve it.”
        </p>

        {/* Live miniature phone preview readout */}
        <div className="mt-10 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-black/60 border border-white/15 shadow-2xl font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-bold">5G STABLE</span>
          </div>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">LATENCY: 21 ms</span>
          <span className="text-slate-600">/</span>
          <span className="text-[#F0B31C] font-bold">CONNECTIVITY INTELLIGENCE</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExperienceClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_30px_rgba(240,179,28,0.4)] hover:shadow-[0_0_40px_rgba(240,179,28,0.6)] active:scale-98 cursor-pointer"
          >
            <span>TRY THE EXPERIENCE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onVisionClick}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 border border-white/10 shadow-sm cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#F0B31C]" />
            <span>EXPLORE THE VISION</span>
          </button>
        </div>

        {/* Minimal Credits Callout */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col items-center">
          <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
            iQOO × CONNECTIVITY INTELLIGENCE
          </span>
          <span className="text-xs font-mono-code uppercase text-slate-500 mt-2 tracking-widest font-semibold">
            BUILT BY
          </span>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-sm font-display font-bold text-slate-300">
            <span>J SASHANK</span>
            <span className="text-slate-600">•</span>
            <span>D MOUNIKA</span>
            <span className="text-slate-600">•</span>
            <span>S SAMEER</span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-slate-500">
          <span>OPTIMIZED FOR iQOO SNAPDRAGON ARCHITECTURES</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span>ZERO ROOT REQUIRED</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span>ON-DEVICE EXPERIENTIAL MEMORY</span>
        </div>

      </div>
    </section>
  );
};
