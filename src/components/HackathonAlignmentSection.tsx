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
    <section id="hackathon-alignment" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">iQOO HACKATHON 2026 ALIGNMENT</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">JUDGING CRITERIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            BUILT FOR THE iQOO ECOSYSTEM.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Sentinel-K demonstrates how flagship mobile performance elevates beyond consumer entertainment into mission-critical infrastructure resilience.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05] w-fit mb-4 text-[#090D15]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-sans font-black tracking-tight text-[#090D15] uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.05] font-mono-code text-[10px] text-slate-500">
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
