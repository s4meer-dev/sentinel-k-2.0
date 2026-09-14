import React from 'react';
import { WifiOff, Activity, HelpCircle, Layers, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: WifiOff,
      title: 'FULL SIGNAL, NO DATA',
      lead: '“Why does my phone show 5G, but nothing loads?”',
      detail: 'The status bar indicator represents registration with a cell tower — not available packet throughput or real-world end-to-end responsiveness.',
      stat: '73% of cell drops occur while showing signal bars',
      color: 'text-amber-500',
    },
    {
      icon: Activity,
      title: 'SILENT NETWORK HANDOVERS',
      lead: '“Why did my call drop or game stutter just now?”',
      detail: 'Phones ping-pong between 5G Standalone, NSA, and 4G bands silently in the background as you walk, without acknowledging degradation.',
      stat: 'Up to 140ms jitter spikes during unoptimized handovers',
      color: 'text-blue-500',
    },
    {
      icon: HelpCircle,
      title: 'NO EXPLANATION OR ACTION',
      lead: '“What should I do? Airplane mode? Walk somewhere else?”',
      detail: 'Users are left guessing with clumsy workarounds. There is no feedback loop to test whether an action helped or whether a spot is known to be poor.',
      stat: '0 feedback given on whether recovery action succeeded',
      color: 'text-red-500',
    },
  ];

  return (
    <section id="problem" className="scroll-mt-24 relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] text-xs font-mono-code text-slate-700 mb-6 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">THE CELLULAR DILEMMA</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">WHY 5G IS OFTEN FRUSTRATING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            TODAY’S PHONES TELL YOU: <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              "5G CONNECTED"
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            They don't understand whether the connection is actually usable for what you are doing. We're closing the gap between raw signal bars and real human experience.
          </p>
        </div>

        {/* 3 Core Problem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-black/[0.07] hover:border-[#F0B31C]/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(240,179,28,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
                      <Icon className={`w-6 h-6 ${p.color}`} />
                    </div>
                    <span className="font-mono-code text-xs font-bold text-slate-400">
                      0{i + 1} // PROBLEM
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-black text-slate-900 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm font-display font-bold text-slate-800 italic">
                    {p.lead}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {p.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] font-mono-code text-xs text-slate-500">
                  <span className="text-slate-900 font-bold">Observed Reality:</span> {p.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Insight Quote Callout */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center shrink-0 font-black font-mono-code text-lg shadow-md">
              CI
            </div>
            <div>
              <div className="text-xs font-mono-code text-amber-700 font-bold uppercase tracking-wider">
                CORE PHILOSOPHY
              </div>
              <div className="text-base sm:text-lg font-display font-black text-slate-900">
                “Connection quality is not a static icon. It is an ongoing experience.”
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-xs text-slate-500 font-bold shrink-0">
            <span>EXPLORE THE SOLUTION</span>
            <ArrowDown className="w-4 h-4 text-[#F0B31C] animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
