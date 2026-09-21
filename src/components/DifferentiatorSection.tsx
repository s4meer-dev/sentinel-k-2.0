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
    <section id="differentiators" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">COMPETITIVE ADVANTAGE</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">THE UNCHARTED TERRITORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            MOST SECURITY SYSTEMS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              STOP AT THE SCREEN.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            IT security stops at the perimeter firewall. OT security stops at protocol syntax. Sentinel-K is the first field copilot to connect human trust to physical consequences.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#121826]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono-code text-cyan-400 font-bold">
                  0{i + 1} // PARADIGM
                </span>
                <h3 className="text-sm font-sans font-black tracking-tight text-white uppercase mt-3">
                  {d.title}
                </h3>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                  {d.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>UNIQUE TO SENTINEL-K</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
