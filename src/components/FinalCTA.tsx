import React from 'react';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onKineticClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onKineticClick }) => {
  return (
    <section className="relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Launchcard Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-black/[0.06] p-8 sm:p-12 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative overflow-hidden text-center">
          
          {/* Subtle Ambient Fill */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-200/[0.12] blur-[140px] pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold">CYBER-PHYSICAL FIELD DEFENSE</span>
          </div>

          {/* Bold Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.05] max-w-3xl mx-auto">
            TRUST THE REASONING. <br />
            <span className="text-slate-900">VERIFY THE CONSEQUENCE.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop blind operational execution. Equip critical infrastructure field workers with on-device NPU evidence verification, deterministic cyber gates, and hydrodynamic physical twins.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#090D15] hover:bg-slate-800 text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xs active:scale-98 cursor-pointer"
            >
              <span>EXPLORE SENTINEL PIPELINE</span>
              <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
            </button>

            <button
              onClick={onKineticClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-black/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer active:scale-98"
            >
              <Play className="w-4 h-4 text-amber-800 fill-current" />
              <span>REJECTION &amp; REPLAN DEMO</span>
            </button>
          </div>

          {/* Bottom Telemetry Status bar */}
          <div className="mt-10 max-w-md mx-auto p-3 rounded-xl bg-[#FAFAF8] border border-black/[0.05] flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-slate-800 font-bold">OriginOS Field Copilot: Active</span>
            </div>
            <span className="text-amber-800 font-bold uppercase text-[11px]">
              PLANT TWIN SYNCHRONIZED
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
