import React, { useState } from 'react';
import { Users, ArrowUpRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    { name: 'J SASHANK', role: 'System Architecture & Cellular Intelligence', id: '01' },
    { name: 'D MOUNIKA', role: 'Telemetry Engineering & Mobile Experience', id: '02' },
    { name: 'S SAMEER', role: 'On-Device Analytics & Spatial Memory', id: '03' },
  ];

  return (
    <section id="team" className="relative py-28 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-950/20 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Users className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">CORE TEAM</span>
            <span className="text-slate-600">/</span>
            <span>iQOO HACKATHON FINALISTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.08]">
            BUILT BY.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            Engineered for transparent phone-native connectivity intelligence.
          </p>
        </div>

        {/* Minimal Editorial Names List */}
        <div className="border-t border-white/10">
          {team.map((member, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={member.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative py-10 sm:py-12 border-b border-white/10 px-6 sm:px-10 transition-all duration-300 rounded-3xl my-2 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden ${
                  isHovered
                    ? 'bg-white/[0.05] border-white/20 shadow-2xl'
                    : 'bg-transparent hover:bg-white/[0.02]'
                }`}
              >
                {/* Subtle gradient wash behind content on hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F0B31C]/10 via-transparent to-blue-900/10 pointer-events-none -z-10" />
                )}

                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-sm sm:text-base font-mono-code font-bold text-slate-600">
                    {member.id}
                  </span>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
                      {member.name}
                    </h3>
                    <span className="text-xs font-mono-code text-slate-400 mt-1 block">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-code text-slate-500 uppercase tracking-wider">
                    CORE CONTRIBUTOR
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    isHovered ? 'border-[#F0B31C] text-[#F0B31C]' : 'border-white/10 text-slate-500'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
