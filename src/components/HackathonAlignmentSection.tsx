import React from 'react';
import { Award, Zap, Cpu, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HackathonAlignmentSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'iQOO HARDWARE INTEGRATION',
      desc: 'Harnesses flagship Qualcomm Snapdragon NPU performance for local SLM inference and biometric enclave security.',
    },
    {
      icon: Zap,
      title: 'ORIGINOS 5 OFFICE KIT SYNERGY',
      desc: 'Seamless zero-latency pairing between the mobile field node and the deep-simulation control room workstation.',
    },
    {
      icon: ShieldCheck,
      title: 'HIGH-STAKES REAL WORLD UTILITY',
      desc: 'Solves an urgent national security dilemma: defending water, power, and transit infrastructure from cyber-physical sabotage.',
    },
    {
      icon: HeartHandshake,
      title: 'RESPONSIBLE & SOVEREIGN AI',
      desc: 'No autonomous destructive control. The human field operator remains the ultimate sovereign authority for all kinetic actions.',
    },
  ];

  return (
    <section id="hackathon-alignment" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">iQOO HACKATHON 2026 ALIGNMENT</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">JUDGING CRITERIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            BUILT FOR THE iQOO ECOSYSTEM.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Sentinel-K demonstrates how flagship mobile performance elevates beyond consumer entertainment into mission-critical infrastructure resilience.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0B0F19] border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.08] w-fit mb-4 text-[#F0B31C]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-sans font-black tracking-tight text-white uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] font-mono-code text-[10px] text-cyan-400">
                  CATEGORY: SYSTEM INTEGRATION
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
