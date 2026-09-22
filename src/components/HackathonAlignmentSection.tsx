import React from 'react';
import { Award, Zap, Cpu, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TextReveal } from './TextReveal';

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
    <section id="hackathon-alignment" className="scroll-mt-36 relative pt-28 md:pt-36 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="absolute inset-0 network-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">iQOO HACKATHON 2026 ALIGNMENT</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#7C766C]">JUDGING CRITERIA</span>
          </div>

          <TextReveal
            text="BUILT FOR THE iQOO ECOSYSTEM."
            italicSubtitle="Mission-critical infrastructure resilience."
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05]"
            subtitleClassName="font-serif italic font-normal normal-case text-slate-800"
          />

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
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
                className="p-6 rounded-[28px] glass-card glass-sheen hover:border-[#1A1712]/[0.18] shadow-[0_12px_32px_-12px_rgba(38,34,28,0.08)] hover:shadow-[0_20px_50px_-20px_rgba(38,34,28,0.14)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-[#ECE8DE]/60 border border-[#1A1712]/[0.06] w-fit mb-4 text-[#1A1712]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-sans font-black tracking-tight text-[#1A1712] uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] font-mono-code text-[10px] text-[#7C766C]">
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
