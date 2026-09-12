import React, { useState } from 'react';
import { Users, ArrowUpRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    { name: 'J SASHANK', id: '01' },
    { name: 'D MOUNIKA', id: '02' },
    { name: 'S SAMEER', id: '03' },
  ];

  return (
    <section id="team" className="relative py-28 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Background ambient acrylic washes */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#DCE7F9]/50 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>ENGINEERING &amp; DESIGN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.08]">
            Built by.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#0A192F]/70 font-normal">
            Designed for transparent mobile hardware performance diagnostics.
          </p>
        </div>

        {/* Minimal Editorial Names List */}
        <div className="border-t border-[#0A192F]/10">
          {team.map((member, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={member.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative py-10 sm:py-14 border-b border-[#0A192F]/10 px-6 sm:px-10 transition-all duration-300 rounded-3xl my-2 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden ${
                  isHovered
                    ? 'bg-white/90 shadow-[0_15px_40px_-10px_rgba(10,25,47,0.06)]'
                    : 'bg-transparent hover:bg-white/40'
                }`}
              >
                {/* Acrylic animated wash behind content on hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F0B31C]/15 via-white/80 to-[#E2E8F0]/40 pointer-events-none -z-10 transition-opacity duration-500" />
                )}

                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-sm sm:text-base font-mono-code font-bold text-[#0A192F]/40">
                    {member.id}
                  </span>

                  <h3
                    className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight transition-transform duration-300 ${
                      isHovered ? 'text-[#0A192F] translate-x-3' : 'text-[#0A192F]/80'
                    }`}
                  >
                    {member.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      isHovered
                        ? 'bg-[#0A192F] text-[#F0B31C] border-[#0A192F] shadow-md'
                        : 'bg-transparent text-[#0A192F]/40 border-[#0A192F]/15'
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
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
