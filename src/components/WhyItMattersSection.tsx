import React from 'react';
import { Gamepad2, PhoneCall, Sparkles, Heart } from 'lucide-react';

export const WhyItMattersSection: React.FC = () => {
  const pillars = [
    {
      title: 'GAMING',
      statement: '“Milliseconds matter.”',
      detail: 'A momentary 150ms cellular spike ruins a ranked competitive match. Jitter stability is vastly more critical than a 1 Gbps theoretical peak download speed.',
      icon: Gamepad2,
      color: 'border-blue-500/30 text-blue-400',
    },
    {
      title: 'CALLS',
      statement: '“Stability matters.”',
      detail: 'Interviews, family check-ins, and client meetings cannot afford frozen video or robotic audio drops caused by blind carrier handovers.',
      icon: PhoneCall,
      color: 'border-[#F0B31C]/30 text-[#F0B31C]',
    },
    {
      title: 'EVERYDAY USE',
      statement: '“Reliability matters.”',
      detail: 'Navigation, mobile payments, and music streaming require consistent, dependable throughput wherever you walk across the city.',
      icon: Sparkles,
      color: 'border-emerald-500/30 text-emerald-400',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-950/20 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Heart className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">THE HUMAN EXPERIENCE</span>
            <span className="text-slate-600">/</span>
            <span>WHY IT MATTERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            REAL WORKLOADS. <br />
            <span className="text-[#F0B31C]">REAL IMPACT.</span>
          </h2>
        </div>

        {/* 3 Giant Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono-code font-bold tracking-widest text-slate-500 uppercase">
                      {item.title}
                    </span>
                    <div className={`p-2 rounded-xl border bg-white/[0.03] ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight leading-snug">
                    {item.statement}
                  </h3>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] text-[10px] font-mono-code text-slate-500 uppercase tracking-wider">
                  Quality of Experience Focus
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Philosophical Statement Anchor */}
        <div className="mt-16 max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white leading-tight tracking-tight">
            “The best connection isn’t always the fastest one.{' '}
            <span className="text-[#F0B31C] block mt-2 sm:inline sm:mt-0">
              It’s the one that works for what you’re doing.”
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
