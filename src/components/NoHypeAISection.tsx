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
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    },
    {
      step: '02',
      title: 'DETERMINISTIC RULES',
      detail: 'Rigorous mathematical boundaries for packet loss, jitter thresholds, and drop rates.',
      icon: Cpu,
      color: 'border-slate-500/30 text-slate-300 bg-slate-500/10',
    },
    {
      step: '03',
      title: 'OBSERVATIONS',
      detail: 'Categorized connection state: nominal hold, ping-pong flux, or total cell edge fade.',
      icon: Eye,
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    },
    {
      step: '04',
      title: 'LOCAL INTELLIGENCE',
      detail: 'Lightweight on-device models synthesize repeated visit patterns and spatial memory.',
      icon: BrainCircuit,
      color: 'border-[#F0B31C]/30 text-[#F0B31C] bg-[#F0B31C]/10',
    },
    {
      step: '05',
      title: 'HUMAN EXPLANATION',
      detail: 'Plain language summary: why the connection changed, what improved, and where 5G works.',
      icon: FileText,
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-blue-950/20 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">ENGINEERING RESTRAINT</span>
            <span className="text-slate-600">/</span>
            <span>INTELLIGENCE WITHOUT THE HYPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            NOT EVERYTHING <br />
            <span className="text-[#F0B31C]">NEEDS AI.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
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
                  className="p-6 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between min-h-[240px] relative group hover:border-[#F0B31C]/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-code font-bold text-slate-500">
                        {item.step}
                      </span>
                      <div className={`p-2 rounded-xl border ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-display font-black text-white tracking-wide uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] text-[9px] font-mono-code text-slate-500 uppercase tracking-wider">
                    {idx === 0 || idx === 1 ? 'Deterministic Logic' : idx === 2 ? 'Passive Stream' : idx === 3 ? 'Pattern Engine' : 'User Clarity'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* On-Device Privacy Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/30 via-[#0B0F19] to-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-[#F0B31C]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#F0B31C]">
                ON-DEVICE · PRIVATE BY DESIGN
              </div>
              <div className="text-base sm:text-lg font-display font-black text-white mt-0.5">
                Designed to keep connectivity observations on the device.
              </div>
            </div>
          </div>

          <div className="text-xs font-mono-code text-slate-400 sm:text-right shrink-0">
            No cellular history sold.<br />
            No telemetry uploaded to cloud.
          </div>
        </div>

      </div>
    </section>
  );
};
