import React from 'react';
import { Shield, Eye, HeartHandshake } from 'lucide-react';

export const ProductPrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: Eye,
      tag: 'TRANSPARENCY',
      title: 'Honest Status',
      desc: 'Never lie with fake full-signal bars. If a 5G connection has high jitter or packet loss, tell the user the truth.',
    },
    {
      icon: Shield,
      tag: 'AUTONOMY & PRIVACY',
      title: 'Private by Design',
      desc: 'All observation logs, signal histories, and spatial memories stay strictly encrypted on-device. No telemetry is shared or sold.',
    },
    {
      icon: HeartHandshake,
      tag: 'HUMAN-CENTERED',
      title: 'Actionable Clarity',
      desc: 'Don’t dump raw dBm graphs on everyday users. Explain what changed, why it changed, and verify whether things improved in plain language.',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Shield className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">ENGINEERING ETHOS</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">THREE CORE PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            PRODUCT <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              PRINCIPLES.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The values that guide every line of code, telemetry metric, and interaction design in Connectivity Intelligence.
          </p>
        </div>

        {/* 3 Principles */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs hover:border-[#F0B31C]/60 hover:shadow-[0_10px_35px_rgba(240,179,28,0.1)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-xs text-slate-800">
                    <Icon className="w-5 h-5 text-[#F0B31C]" />
                  </div>
                  <span className="text-[10px] font-mono-code font-extrabold text-slate-500 uppercase">
                    {pr.tag}
                  </span>
                </div>

                <h3 className="text-xl font-display font-black text-slate-950">
                  {pr.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pr.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
