import React from 'react';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onKineticClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onKineticClick }) => {
  return (
    <section className="relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Launchcard Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0B0F19] border border-cyan-500/30 p-8 sm:p-14 lg:p-16 shadow-[0_12px_45px_rgba(0,0,0,0.6)] relative overflow-hidden text-center">
          
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/[0.08] blur-[160px] pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 shadow-xs text-xs font-mono-code text-cyan-300 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold">CYBER-PHYSICAL FIELD DEFENSE</span>
          </div>

          {/* Bold Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.05] max-w-3xl mx-auto">
            TRUST THE REASONING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              VERIFY THE CONSEQUENCE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop blind operational execution. Equip critical infrastructure field workers with on-device NPU evidence verification, deterministic cyber gates, and hydrodynamic physical twins.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090E] font-mono-code font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] active:scale-98 cursor-pointer"
            >
              <span>EXPLORE SENTINEL PIPELINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onKineticClick}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#121826] hover:bg-[#1A2234] text-white border border-white/20 font-mono-code text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#F0B31C]" />
              <span>REJECTION &amp; REPLAN DEMO</span>
            </button>
          </div>

          {/* Bottom Telemetry Status bar */}
          <div className="mt-12 max-w-md mx-auto p-3.5 rounded-xl bg-[#07090E] border border-white/[0.08] flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">OriginOS Field Copilot: Active</span>
            </div>
            <span className="text-[#F0B31C] font-bold uppercase">
              PLANT TWIN SYNCHRONIZED
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
