import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick }) => {
  return (
    <section className="relative py-36 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Abstract background acrylic washes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#F0B31C]/15 via-[#F5BE30]/10 to-[#1D4ED8]/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-8 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
          <span>FORENSIC CLARITY FOR iQOO PERFORMANCE</span>
        </div>

        {/* Large Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.08] uppercase">
          When performance changes,{' '}
          <span className="block mt-2 text-[#1D4ED8]">
            ThermAlyze explains why.
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-[#0A192F]/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Thermal intelligence for the device in your hand.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#0A192F] font-black text-sm tracking-widest uppercase transition-all duration-200 shadow-[0_6px_25px_rgba(240,179,28,0.25)] hover:shadow-[0_8px_30px_rgba(240,179,28,0.35)] active:scale-98 cursor-pointer"
          >
            <span>EXPLORE THERMALYZE</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Minimal Editorial Credits Callout */}
        <div className="mt-20 pt-10 border-t border-[#0A192F]/10 flex flex-col items-center">
          <span className="font-heading font-extrabold text-2xl tracking-wider text-[#0A192F]">
            iQOO × THERMALYZE
          </span>
          <span className="text-xs font-mono-code uppercase text-[#0A192F]/50 mt-2 tracking-widest font-semibold">
            BUILT BY
          </span>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-sm font-display font-bold text-[#0A192F]">
            <span>J SASHANK</span>
            <span className="text-[#0A192F]/20">•</span>
            <span>D MOUNIKA</span>
            <span className="text-[#0A192F]/20">•</span>
            <span>S SAMEER</span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-[#0A192F]/50">
          <span>OPTIMIZED FOR iQOO &amp; SNAPDRAGON 8 GEN</span>
          <span className="w-1 h-1 rounded-full bg-[#0A192F]/20" />
          <span>ZERO ROOT REQUIRED</span>
          <span className="w-1 h-1 rounded-full bg-[#0A192F]/20" />
          <span>100% PRIVATE &amp; ON-DEVICE</span>
        </div>

      </div>
    </section>
  );
};
