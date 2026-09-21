import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export const DifferentiatorSection: React.FC = () => {
  const differentiators = [
    {
      title: 'CROSS-DOMAIN CAUSAL VERIFICATION',
      desc: 'Links human psychological cues (caller urgency, spoofed identity) with deterministic physical fluid dynamics in one unified evidence graph.',
    },
    {
      title: 'KINETIC FORWARD PROJECTION',
      desc: 'Doesn’t merely ask if the syntax is valid. Simulates whether the pipe ruptures 40 seconds in the future before releasing the command.',
    },
    {
      title: 'CRITIC-POWERED AUTOMATED REPLANNING',
      desc: 'When an operational action is dangerous, it does not just abort; it calculates a non-destructive alternative trajectory.',
    },
    {
      title: 'HUMAN-IN-THE-LOOP SOVEREIGNTY',
      desc: 'No autonomous destructive control. The certified field operator on an iQOO terminal retains final biometric execution authority.',
    },
  ];

  return (
    <section id="differentiators" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">COMPETITIVE ADVANTAGE</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">THE UNCHARTED TERRITORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            MOST SECURITY SYSTEMS <br />
            <span className="text-slate-900">STOP AT THE SCREEN.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            IT security stops at the perimeter firewall. OT security stops at protocol syntax. Sentinel-K is the first field copilot to connect human trust to physical consequences.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono-code text-slate-500 font-bold uppercase">
                  0{i + 1} // PARADIGM
                </span>
                <h3 className="text-xs sm:text-sm font-sans font-black tracking-tight text-[#090D15] uppercase mt-2.5">
                  {d.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {d.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-emerald-800 flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>UNIQUE TO SENTINEL-K</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
