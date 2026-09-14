import React from 'react';
import { ShieldCheck, Zap, UserCheck, Layers } from 'lucide-react';

export const ProductPrinciplesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'HONEST',
      core: 'Never pretend we know what the device cannot expose.',
      description: 'We do not make fake claims about carrier manipulation or hidden baseband magic. We work honestly with what Android and cellular radio interfaces expose.',
      icon: ShieldCheck,
      color: 'border-blue-500/30 text-blue-400',
    },
    {
      num: '02',
      title: 'ACTIONABLE',
      core: 'Don’t stop at showing a problem.',
      description: 'A dashboard that only tells you your connection is bad is useless. We coordinate supported recovery actions and close the loop by verifying whether things improved.',
      icon: Zap,
      color: 'border-[#F0B31C]/30 text-[#F0B31C]',
    },
    {
      num: '03',
      title: 'PERSONAL',
      core: 'Learn from the user’s real-world experience.',
      description: 'Your dorm, your library, your commute. The system remembers localized spatial patterns so your phone gets smarter in the places you actually visit.',
      icon: UserCheck,
      color: 'border-emerald-500/30 text-emerald-400',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[500px] bg-blue-950/15 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Layers className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">ENGINEERING ETHOS</span>
            <span className="text-slate-600">/</span>
            <span>THREE CORE PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            PRODUCT <br />
            <span className="text-[#F0B31C]">PRINCIPLES.</span>
          </h2>
        </div>

        {/* 3 Large Interactive Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-display font-black text-slate-700 group-hover:text-[#F0B31C] transition-colors">
                      {item.num}
                    </span>
                    <div className={`p-2.5 rounded-2xl border bg-white/[0.03] ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-black text-white tracking-tight uppercase">
                    {item.title}
                  </h3>

                  <div className="text-base font-heading font-extrabold text-[#F0B31C] mt-2 leading-snug">
                    {item.core}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] text-[10px] font-mono-code text-slate-500 uppercase tracking-wider">
                  Guiding Design Criterion
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
