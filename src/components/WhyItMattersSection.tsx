import React from 'react';
import { Gamepad2, Video, PhoneCall } from 'lucide-react';

export const WhyItMattersSection: React.FC = () => {
  const cases = [
    {
      icon: Gamepad2,
      tag: 'COMPETITIVE GAMING',
      title: 'Every Millisecond Matters',
      desc: 'In BGMI or Call of Duty Mobile, a silent 5G-to-4G handover creates a 180ms latency spike that causes instant in-game elimination. CI prevents unmonitored drop spikes.',
      metric: '90 FPS STABLE',
    },
    {
      icon: Video,
      tag: 'WORK & LEARNING',
      title: 'No Glitching Video Meetings',
      desc: 'Zoom and Google Meet freeze when link throughput falters. CI identifies fading coverage before audio packets drop, keeping your interviews uninterrupted.',
      metric: 'ZERO BUFFERING',
    },
    {
      icon: PhoneCall,
      tag: 'EVERYDAY DEPENDABILITY',
      title: 'Payments & Commutes That Just Work',
      desc: 'Walking through a metro gate or paying at a crowded food court shouldn’t fail with endless spinning wheels. Honest signal verification keeps you moving.',
      metric: 'INSTANT CONFIRMATION',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#FAF9F5] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Gamepad2 className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">HUMAN IMPACT</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">WHY STABILITY MATTERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            BECAUSE CONNECTIVITY <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              IS AN EXPERIENCE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            People don’t think about RSRP or milliwatts. They care whether their payment goes through, their video call stays sharp, and their match stays fluid.
          </p>
        </div>

        {/* 3 Use Cases */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:border-[#F0B31C]/60 hover:shadow-[0_10px_35px_rgba(240,179,28,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-black/[0.06] shadow-xs text-slate-800">
                      <Icon className="w-5 h-5 text-[#F0B31C]" />
                    </div>
                    <span className="font-mono-code text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-black text-slate-950">
                    {c.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono-code">
                  <span className="text-slate-500">EXPERIENCE TARGET:</span>
                  <span className="text-emerald-700 font-bold">{c.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
