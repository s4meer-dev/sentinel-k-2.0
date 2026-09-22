import React from 'react';
import { Users, Shield, Cpu, Activity } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'J Sashank',
      role: 'Lead Architect & Cyber-Physical Systems',
      focus: 'Dual-domain causal verification engine, SLM forensic orchestration, and invariant governance.',
      icon: Cpu,
    },
    {
      name: 'D Mounika',
      role: 'OriginOS Field Interface & Security UX',
      focus: 'OriginOS 5 Field Terminal UI, industrial digital-twin schematics, and biometric confirmation workflows.',
      icon: Shield,
    },
    {
      name: 'S Sameer',
      role: 'Hydrodynamic Modeling & OT Protocols',
      focus: 'EPANET / WNTR physics simulation integration, Modbus register compiler, and overpressure limit enforcement.',
      icon: Activity,
    },
  ];

  return (
    <section id="team" className="scroll-mt-36 relative pt-28 md:pt-36 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="absolute inset-0 network-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">THE BUILDERS</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#7C766C]">iQOO HACKATHON 2026 TEAM</span>
          </div>

          <TextReveal
            text="MEET THE BUILDERS."
            italicSubtitle="Engineered for sovereign physical safety."
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05]"
            subtitleClassName="font-serif italic font-normal normal-case text-slate-800"
          />

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
            Engineered with deep focus on mobile hardware acceleration, cyber-physical safety, and operational human sovereignty.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-[28px] glass-card glass-sheen hover:border-[#1A1712]/[0.18] shadow-[0_12px_32px_-12px_rgba(38,34,28,0.08)] hover:shadow-[0_20px_50px_-20px_rgba(38,34,28,0.14)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1A1712]/[0.06]">
                    <div className="p-3 rounded-2xl bg-[#ECE8DE]/60 border border-[#1A1712]/[0.06] text-[#1A1712]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-xs font-bold text-[#7C766C]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-black text-[#1A1712]">
                    {m.name}
                  </h3>

                  <div className="text-xs font-mono-code text-amber-900 font-bold mt-1 uppercase">
                    {m.role}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                    {m.focus}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] text-[10px] font-mono-code text-[#7C766C] uppercase flex items-center justify-between">
                  <span>SENTINEL-K CORE</span>
                  <span className="text-emerald-800 font-bold">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
