import React from 'react';
import { Users, Shield, Cpu, Activity } from 'lucide-react';

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
    <section id="team" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">THE BUILDERS</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">iQOO HACKATHON 2026 TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            MEET THE BUILDERS.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Engineered with deep focus on mobile hardware acceleration, cyber-physical safety, and operational human sovereignty.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#121826]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                    <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08]">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-mono-code text-xs font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-sans font-black text-white">
                    {m.name}
                  </h3>

                  <div className="text-xs font-mono-code text-[#F0B31C] font-bold mt-1 uppercase">
                    {m.role}
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed font-normal">
                    {m.focus}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-slate-500 uppercase flex items-center justify-between">
                  <span>SENTINEL-K CORE</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
