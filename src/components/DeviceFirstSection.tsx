import React from 'react';
import { Smartphone, Cpu, Lock, RefreshCw } from 'lucide-react';

export const DeviceFirstSection: React.FC = () => {
  const highlights = [
    {
      title: 'DEVICE SIGNALS',
      subtitle: 'Native Kernel Sampling',
      icon: Cpu,
      description:
        'Direct telemetry hook into Android hardware HAL, thermal zones, and cluster throttling points. The device is the primary sensor instrument.',
    },
    {
      title: 'LOCAL ANALYSIS',
      subtitle: 'Zero Cloud Roundtrips',
      icon: Lock,
      description:
        'All temporal correlation and statistical inference runs locally on the phone. Sensitive app identifiers and process records never exit the hardware sandbox.',
    },
    {
      title: 'REAL-TIME FEEDBACK',
      subtitle: 'Instant Throttling Insight',
      icon: RefreshCw,
      description:
        'Continuous frame pacing diagnostics deliver transparent feedback the instant an Android thermal mitigation event takes effect.',
    },
  ];

  return (
    <section className="relative py-28 bg-[#FAF9F5] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Background ambient acrylic washes */}
      <div className="absolute -bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#E2E8F0]/50 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>PHONE-CENTRIC ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.08]">
            Built around the device itself.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#0A192F]/70">
            The phone is not merely a screen displaying external dashboards. 
            It is the source of truth, the sensor array, and the execution engine.
          </p>
        </div>

        {/* 3 Core Highlight Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white/90 border border-[#0A192F]/10 hover:border-[#1D4ED8]/40 transition-all duration-300 relative group overflow-hidden shadow-xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF9F5] border border-[#0A192F]/10 flex items-center justify-center text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-[#F0B31C] group-hover:border-[#0A192F] transition-all duration-300 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#1D4ED8] block font-bold">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#0A192F] mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#0A192F]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A192F]/[0.06] flex items-center gap-2 text-xs font-mono-code text-[#0A192F]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Always Active • Low Overhead (&lt; 0.4% Battery)</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
