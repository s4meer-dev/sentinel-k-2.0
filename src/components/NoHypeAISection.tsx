import React from 'react';
import { 
  ShieldCheck, 
  Binary, 
  Cpu, 
  Eye, 
  Lock, 
  FileText,
  BrainCircuit
} from 'lucide-react';

export const NoHypeAISection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'RAW TELEMETRY',
      detail: 'RSRP, RSRQ, band carrier frequencies, and ping timings measured at hardware level.',
      icon: Binary,
      color: 'border-blue-200 text-blue-700 bg-blue-50',
    },
    {
      step: '02',
      title: 'DETERMINISTIC RULES',
      detail: 'Rigorous mathematical boundaries for packet loss, jitter thresholds, and drop rates.',
      icon: Cpu,
      color: 'border-slate-200 text-slate-700 bg-slate-100',
    },
    {
      step: '03',
      title: 'OBSERVATIONS',
      detail: 'Categorized connection state: nominal hold, ping-pong flux, or total cell edge fade.',
      icon: Eye,
      color: 'border-amber-200 text-amber-700 bg-amber-50',
    },
    {
      step: '04',
      title: 'LOCAL INTELLIGENCE',
      detail: 'Lightweight on-device models synthesize repeated visit patterns and spatial memory.',
      icon: BrainCircuit,
      color: 'border-[#F0B31C]/50 text-amber-800 bg-amber-50',
    },
    {
      step: '05',
      title: 'HUMAN EXPLANATION',
      detail: 'Plain language summary: why the connection changed, what improved, and where 5G works.',
      icon: FileText,
      color: 'border-emerald-200 text-emerald-700 bg-emerald-50',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#FAF9F5] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">ENGINEERING RESTRAINT</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">INTELLIGENCE WITHOUT THE HYPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            NOT EVERYTHING <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              NEEDS AI.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            "Network measurements should be interpreted deterministically where possible. On-device intelligence is used where it adds value — recognizing patterns, summarizing events, and learning from repeated experiences."
          </p>
        </div>

        {/* 5-Step Horizontal Pipeline Transformation */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 rounded-3xl bg-white border border-black/[0.07] shadow-xs hover:shadow-[0_8px_30px_rgba(240,179,28,0.12)] hover:border-[#F0B31C]/60 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-code font-bold text-slate-400">
                        {item.step}
                      </span>
                      <div className={`p-2 rounded-xl border ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-display font-black text-slate-900 tracking-wide uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] text-[9px] font-mono-code text-slate-500 uppercase tracking-wider">
                    {idx === 0 || idx === 1 ? 'Deterministic Logic' : idx === 2 ? 'Passive Stream' : idx === 3 ? 'Pattern Engine' : 'User Clarity'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* On-Device Privacy Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/[0.06] text-[#B45309] shadow-xs">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-amber-700">
                ON-DEVICE · PRIVATE BY DESIGN
              </div>
              <div className="text-base sm:text-lg font-display font-black text-slate-950 mt-0.5">
                Designed to keep connectivity observations on the device.
              </div>
            </div>
          </div>

          <div className="text-xs font-mono-code text-slate-600 sm:text-right shrink-0">
            No cellular history sold.<br />
            No telemetry uploaded to cloud.
          </div>
        </div>

      </div>
    </section>
  );
};
