import React from 'react';
import { Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'J Sashank',
      role: 'System Architecture & Telemetry Pipeline',
      detail: 'Focusing on Android telephony event stream ingestion, deterministic instability scoring, and closed-loop verification metrics.',
    },
    {
      name: 'D Mounika',
      role: 'Product Design & User Experience',
      detail: 'Crafting the 3D phone interaction language, high-contrast cellular visualizer, and plain-language diagnostic feedback.',
    },
    {
      name: 'S Sameer',
      role: 'Network Modeling & Machine Learning',
      detail: 'Designing spatial memory clustering, on-device SQLite feature tables, and predictive carrier handover forecasting.',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#FAF9F5] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Users className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">THE BUILDERS</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">iQOO HACKATHON TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            MEET THE <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              TEAM.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Built for the iQOO Hackathon by passionate engineers rethinking smartphone network diagnostics.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:border-[#F0B31C]/60 hover:shadow-[0_10px_35px_rgba(240,179,28,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-black/[0.06] text-slate-900 flex items-center justify-center font-display font-black text-lg mb-6 shadow-xs">
                  0{idx + 1}
                </div>

                <h3 className="text-2xl font-display font-black text-slate-950">
                  {m.name}
                </h3>

                <div className="text-xs font-mono-code text-amber-700 font-bold uppercase mt-1">
                  {m.role}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {m.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] text-[10px] font-mono-code text-slate-500 uppercase">
                iQOO INNOVATION LABS
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
