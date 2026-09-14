import React from 'react';
import { 
  Sparkles, 
  Video, 
  Radio, 
  ShieldAlert, 
  CheckCircle2, 
  Compass
} from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  const roadmap = [
    {
      era: 'TODAY // MVP',
      title: 'UNDERSTAND',
      subhead: '“See what’s actually happening.”',
      detail: 'Detect 5G/4G handovers, quantify link instability, and observe real-world connection quality in plain English.',
      status: 'SHIPPED IN PROTOTYPE',
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    },
    {
      era: 'NEXT // STAGE 02',
      title: 'RESPOND',
      subhead: '“Respond when connectivity starts degrading.”',
      detail: 'Coordinate supported cellular band resets, shift receiver antenna priority, and guide handovers before packet queues collapse.',
      status: 'IN ACTIVE DEVELOPMENT',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      era: 'FUTURE // HORIZON',
      title: 'PREDICT',
      subhead: '“Know a problem is coming before you feel it.”',
      detail: 'Anticipate environmental signal decay before entering known interference zones, pre-buffering streams and locking secondary links.',
      status: 'RESEARCH VISION',
      color: 'border-[#F0B31C]/30 text-[#F0B31C] bg-[#F0B31C]/10',
      badge: 'bg-[#F0B31C]/20 text-[#F0B31C] border-[#F0B31C]/30',
    },
  ];

  const scenarioSteps = [
    {
      step: '01',
      title: 'CALL INITIATED',
      desc: 'User starts a critical video conference while walking across campus.',
      icon: Video,
    },
    {
      step: '02',
      title: 'CONTEXT RECOGNIZED',
      desc: 'Phone matches approaching corridor with historical memory node.',
      icon: Radio,
    },
    {
      step: '03',
      title: 'PREDICTIVE WARNING',
      desc: '“Connection may degrade near elevator shaft in 15 seconds.”',
      icon: ShieldAlert,
    },
    {
      step: '04',
      title: 'AUTOMATIC PRE-ATTACH',
      desc: 'Prepares seamless Wi-Fi bridge or pre-buffers audio packet queue.',
      icon: Sparkles,
    },
    {
      step: '05',
      title: 'ZERO INTERRUPTION',
      desc: 'Call continues smoothly with zero dropped voice frames or video blackouts.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="future" className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-purple-950/15 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Compass className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">THE HORIZON</span>
            <span className="text-slate-600">/</span>
            <span>PREDICTIVE CONNECTIVITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            TODAY: <span className="text-blue-400">UNDERSTAND</span> <br />
            NEXT: <span className="text-amber-400">RESPOND</span> <br />
            FUTURE: <span className="text-[#F0B31C]">PREDICT</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Our hackathon prototype proves the foundation of observing cellular handovers. The long-term vision is a phone that anticipates network friction before you ever feel it.
          </p>
        </div>

        {/* 3-Stage Evolution Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {roadmap.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-code font-bold text-slate-500 uppercase">
                    {card.era}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase border ${card.badge}`}>
                    {card.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
                  {card.title}
                </h3>

                <div className="text-sm font-heading font-extrabold text-white mt-1">
                  {card.subhead}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] text-[10px] font-mono-code text-slate-500">
                Aspirational product roadmap milestone
              </div>
            </div>
          ))}
        </div>

        {/* Future Walkthrough Scenario Pipeline */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0C111E] to-[#07090E] border border-white/10 shadow-2xl relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#F0B31C] font-bold block mb-2">
              FUTURE SCENARIO WALKTHROUGH
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-black text-white">
              Zero-Interruption Voice &amp; Video Roaming
            </h4>
            <span className="text-xs font-mono-code text-slate-400 mt-1 block">
              Framed as an aspirational research vision
            </span>
          </div>

          {/* 5-Step Scenario Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {scenarioSteps.map((sc, i) => {
              const Icon = sc.icon;
              return (
                <div key={sc.step} className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono-code font-bold text-slate-500">
                        STEP {sc.step}
                      </span>
                      <Icon className="w-4 h-4 text-[#F0B31C]" />
                    </div>
                    <div className="text-xs font-display font-black text-white uppercase tracking-wide">
                      {sc.title}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {sc.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/[0.06] text-[9px] font-mono-code text-emerald-400">
                    {i === 4 ? '? Call Uninterrupted' : 'Predictive Loop'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
