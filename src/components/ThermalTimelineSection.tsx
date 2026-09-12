import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ShieldCheck
} from 'lucide-react';


export const ThermalTimelineSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  const timelineSteps = [
    {
      time: '09:41:12',
      title: 'Monster Mode Gaming Initiated',
      type: 'system',
      category: 'FOREGROUND WORKLOAD',
      tagColor: 'bg-[#1D4ED8] text-white shadow-xs',
      accentColor: 'border-[#1D4ED8]',
      headline: 'Target rendering locked at 90 FPS.',
      detail:
        'Vulkan graphics context created on Snapdragon 8 Gen. Supercomputing Chip Q2 interpolates frame timings. Baseline temperature sits at a cool 38.2°C with full thermal headroom available.',
      metrics: { temp: '38.2°C', fps: '90 FPS', cpu: '54%', governor: 'NORMAL' },
    },
    {
      time: '09:46:03',
      title: 'Temperature Steadily Rising',
      type: 'thermal',
      category: 'THERMAL CONVECTION',
      tagColor: 'bg-[#1D4ED8] text-white',
      accentColor: 'border-[#1D4ED8]',
      headline: 'Sustained gaming load increases thermal flux.',
      detail:
        'iQOO 6K Ice-Loop Vapor Chamber distributes thermal energy evenly across the dual-layer graphite architecture. Temperature climbs smoothly to 42.1°C, well within Monster Mode thresholds.',
      metrics: { temp: '42.1°C', fps: '90 FPS', cpu: '72%', governor: 'NORMAL' },
    },
    {
      time: '09:47:18',
      title: 'Background Activity Detected',
      type: 'activity',
      category: 'CONCURRENT BURST',
      tagColor: 'bg-[#0A192F] text-[#F0B31C] border border-[#F0B31C]/40',
      accentColor: 'border-[#F0B31C]',
      headline: 'CloudBackupSync & MediaScanner invoke active wake-locks.',
      detail:
        'Without notifying the foreground game, an unoptimized background sync job schedules an intensive I/O burst on the high-efficiency cluster cores.',
      metrics: { temp: '43.2°C', fps: '89 FPS', cpu: '89%', governor: 'MODERATE' },
    },
    {
      time: '09:47:31',
      title: 'Thermal State Changed',
      type: 'thermal',
      category: 'HARDWARE TRIP-POINT',
      tagColor: 'bg-[#0A192F] text-[#F0B31C] border border-[#F0B31C]/40',
      accentColor: 'border-[#F0B31C]',
      headline: 'PowerManager & Monster Engine register THERMAL_STATUS_SEVERE.',
      detail:
        'The combination of intense graphics rendering and unthrottled background indexing pushes SoC cluster temperature across the 43.8°C thermal trip barrier.',
      metrics: { temp: '44.0°C', fps: '84 FPS', cpu: '92%', governor: 'SEVERE' },
    },
    {
      time: '09:47:35',
      title: 'Performance Reduced (Throttling)',
      type: 'system',
      category: 'GOVERNOR CLAMP',
      tagColor: 'bg-[#0A192F] text-white',
      accentColor: 'border-[#0A192F]',
      headline: 'Frame rate forcefully clamped from 90 to 60 FPS.',
      detail:
        'To prevent hardware degradation and excessive surface heat, Android’s thermal daemon forces clock scaling. The user experiences an abrupt stutter.',
      metrics: { temp: '44.4°C', fps: '60 FPS', cpu: '56%', governor: 'THROTTLED' },
    },
    {
      time: '09:47:40',
      title: 'ThermAlyze Forensic Analysis',
      type: 'forensic',
      category: 'AI DIAGNOSIS',
      tagColor: 'bg-[#0A192F] text-[#F0B31C] border border-[#F0B31C]/30',
      accentColor: 'border-[#1D4ED8]',
      headline: 'Temporal correlation links throttling directly to CloudBackupSync.',
      detail:
        'ThermAlyze correlates the synchronous timestamp of the background wake-lock with the thermal spike, delivering an 87% confidence diagnosis in plain English.',
      metrics: { temp: '44.2°C', fps: '60 FPS', cpu: '54%', governor: 'EXPLAINED' },
    },
  ];

  const current = timelineSteps[activeStepIndex];

  return (
    <section id="timeline" className="relative py-28 bg-[#FAF9F5] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Background ambient acrylic washes */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FFFBEB]/60 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#E2E8F0]/70 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>THE THERMAL EVENT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.08]">
            See what your phone sees.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#0A192F]/70 leading-relaxed font-normal">
            Step through the millisecond anatomy of a thermal event. Understand exactly why and when 
            background processes trigger hardware throttling.
          </p>
        </div>

        {/* Horizontal Timeline Scrubber / Station Bar */}
        <div className="bg-white/90 p-3 rounded-2xl border border-[#0A192F]/10 shadow-xs mb-8 overflow-x-auto">
          <div className="flex items-center min-w-[720px] justify-between gap-2">
            {timelineSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.time}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 py-3 px-3 rounded-xl font-mono-code text-xs transition-all duration-200 cursor-pointer text-left border ${
                    isSelected
                      ? 'bg-[#0A192F] text-white border-transparent shadow-md'
                      : 'bg-[#FAF9F5] text-[#0A192F]/70 border-[#0A192F]/[0.06] hover:bg-black/5 hover:text-[#0A192F]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-1 opacity-70">
                    <span>STEP 0{idx + 1}</span>
                    <span>{step.time}</span>
                  </div>
                  <div className="font-bold text-xs truncate">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Acrylic Event Card for the Selected Step */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.time}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl p-8 sm:p-12 bg-white/95 border border-[#0A192F]/10 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.06)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Event Context & Telemetry Breakdown */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-mono-code font-bold px-3 py-1 rounded-full ${current.tagColor}`}>
                    {current.category}
                  </span>
                  <span className="text-sm font-mono-code font-semibold text-[#0A192F]/60">
                    Timestamp: {current.time}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] leading-tight">
                  {current.title}
                </h3>

                <p className="mt-3 text-lg font-bold text-[#1D4ED8]">
                  {current.headline}
                </p>

                <p className="mt-4 text-base text-[#0A192F]/75 leading-relaxed font-normal">
                  {current.detail}
                </p>

                {/* Progress Indicators */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeStepIndex === 0}
                    className="px-4 py-2 rounded-xl text-xs font-mono-code font-semibold bg-[#FAF9F5] border border-[#0A192F]/10 text-[#0A192F] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black/5 cursor-pointer"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => setActiveStepIndex((prev) => Math.min(timelineSteps.length - 1, prev + 1))}
                    disabled={activeStepIndex === timelineSteps.length - 1}
                    className="px-4 py-2 rounded-xl text-xs font-mono-code font-semibold bg-[#0A192F] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1E293B] cursor-pointer"
                  >
                    Next Event →
                  </button>
                </div>
              </div>

              {/* Right Column: Live Telemetry State Snapshot */}
              <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl p-6 border border-[#0A192F]/[0.08]">
                <div className="text-xs font-mono-code font-bold text-[#0A192F] uppercase pb-3 border-b border-[#0A192F]/[0.08] flex items-center justify-between">
                  <span>SILICON STATE SNAPSHOT</span>
                  <span className="text-[#1D4ED8] font-bold">t = {current.time}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                    <span className="text-[10px] font-mono-code text-[#0A192F]/50 uppercase font-bold block">
                      SOC TEMPERATURE
                    </span>
                    <span className="text-2xl font-display font-black text-[#0A192F] mt-1 block">
                      {current.metrics.temp}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                    <span className="text-[10px] font-mono-code text-[#1D4ED8] uppercase font-bold block">
                      FRAME RATE
                    </span>
                    <span className="text-2xl font-display font-black text-[#1D4ED8] mt-1 block">
                      {current.metrics.fps}
                    </span>
                  </div>


                  <div className="bg-white p-4 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                    <span className="text-[10px] font-mono-code text-[#0A192F]/50 uppercase font-bold block">
                      CPU LOAD
                    </span>
                    <span className="text-2xl font-display font-extrabold text-[#0A192F] mt-1 block">
                      {current.metrics.cpu}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                    <span className="text-[10px] font-mono-code text-[#0A192F]/50 uppercase font-bold block">
                      GOVERNOR STATE
                    </span>
                    <span className="text-xs font-mono-code font-bold text-[#1D4ED8] mt-2 block">
                      {current.metrics.governor}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A192F]/[0.06] flex items-center justify-between text-[11px] font-mono-code text-[#0A192F]/60">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Telemetry Authenticated
                  </span>
                  <span>Kernel Trace 100Hz</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
