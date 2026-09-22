import React from 'react';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onKineticClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onKineticClick }) => {
  return (
    <section className="relative py-20 md:py-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Launchcard Container */}
        <div className="max-w-4xl mx-auto rounded-[36px] bg-white border border-[#1A1712]/[0.08] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-20px_rgba(38,34,28,0.1)] relative overflow-hidden text-center">
          
          {/* Subtle Ambient Fill */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-200/[0.16] blur-[140px] pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE8DE]/60 border border-[#1A1712]/[0.08] text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold">CYBER-PHYSICAL FIELD DEFENSE</span>
          </div>

          {/* Bold Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05] max-w-3xl mx-auto">
            TRUST THE REASONING. <br />
            <span className="font-serif italic font-normal normal-case text-slate-800">Verify the consequence.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
            Stop blind operational execution. Equip critical infrastructure field workers with on-device NPU evidence verification, deterministic cyber gates, and hydrodynamic physical twins.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#1A1712] hover:bg-[#2A241C] text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xs active:scale-98 cursor-pointer"
            >
              <span>EXPLORE SENTINEL PIPELINE</span>
              <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
            </button>

            <button
              onClick={onKineticClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#ECE8DE]/50 hover:bg-[#ECE8DE] text-[#1A1712] border border-[#1A1712]/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer active:scale-98"
            >
              <Play className="w-4 h-4 text-amber-900 fill-current" />
              <span>REJECTION &amp; REPLAN DEMO</span>
            </button>
          </div>

          {/* Bottom Telemetry Status bar */}
          <div className="mt-10 max-w-md mx-auto p-3.5 rounded-2xl bg-[#ECE8DE]/40 border border-[#1A1712]/[0.06] flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-[#1A1712] font-bold">OriginOS Field Copilot: Active</span>
            </div>
            <span className="text-amber-900 font-bold uppercase text-[11px]">
              PLANT TWIN SYNCHRONIZED
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
