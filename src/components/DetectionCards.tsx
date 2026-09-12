import React, { useState } from 'react';
import { 
  Radar, 
  GitMerge, 
  MessageSquareCheck, 
  Flame, 
  Gauge, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

export const DetectionCards: React.FC = () => {
  // Cursor tracking for acrylic light effect on hover
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveCard(index);
  };

  return (
    <section id="detection" className="relative py-28 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Abstract background acrylic washes */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#FFEADB]/40 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full bg-[#DCE7F9]/60 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with iQOO Brand Context */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F0B31C] border border-black/30" />
            <span className="font-bold uppercase tracking-wider">iQOO SILICON FORENSICS FRAMEWORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#0A192F] tracking-tight leading-[1.05]">
            Designed to solve the invisible throttle problem.
          </h2>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed font-normal">
            Unlike superficial hardware monitors, ThermAlyze continuously correlates iQOO kernel signals and Supercomputing Chip telemetry to establish causality.
          </p>
        </div>

        {/* Composition 1: DETECT (Asymmetrical Split with Live Sensor Matrix) */}
        <div 
          onMouseMove={(e) => handleMouseMove(e, 1)}
          onMouseLeave={() => setActiveCard(null)}
          className="relative rounded-3xl p-8 sm:p-12 bg-white/95 border border-[#0A192F]/10 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.06)] overflow-hidden mb-12 transition-all duration-300 group"
        >
          {activeCard === 1 && (
            <div
              className="absolute pointer-events-none w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200/30 to-yellow-100/20 blur-2xl transition-opacity duration-300"
              style={{ left: mousePos.x, top: mousePos.y }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-display font-black text-[#0A192F]">01</span>
                <span className="text-xs font-mono-code font-black uppercase tracking-widest bg-[#F0B31C] text-black border border-black/20 px-2.5 py-1 rounded-md">
                  DETECT
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-[#0A192F] leading-tight">
                Identify abnormal thermal and frame pacing behavior.
              </h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Continuous 100Hz low-overhead background listener sampling Android thermal zones, CPU frequency governors, 
                and SurfaceFlinger Choreographer frame pacing at microsecond resolution on iQOO flagships.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono-code text-[#0A192F]/80">
                <span className="bg-[#FAF9F5] border border-[#0A192F]/10 px-2.5 py-1 rounded-md font-bold">14 Thermal Zones</span>
                <span className="bg-[#FAF9F5] border border-[#0A192F]/10 px-2.5 py-1 rounded-md font-bold">iQOO Q2 Sync</span>
                <span className="bg-[#FAF9F5] border border-[#0A192F]/10 px-2.5 py-1 rounded-md font-bold">Zero Root Required</span>
              </div>
            </div>

            {/* Right: Thermal Telemetry Sensor Matrix Visual */}
            <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-6 border border-[#0A192F]/[0.08]">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#0A192F]/70 pb-4 border-b border-[#0A192F]/[0.08]">
                <span className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <Radar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  iQOO HARDWARE SENSOR GRID
                </span>
                <span className="text-[#0A192F] bg-[#F0B31C] px-2 py-0.5 rounded font-black border border-black/10">100Hz STREAMING</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {[
                  { name: 'iQOO_PRIME_CORE', temp: '44.2°C', badge: 'ALERT', color: 'text-black bg-[#F0B31C]' },
                  { name: 'iQOO_Q2_CHIP', temp: '42.8°C', badge: 'ACTIVE', color: 'text-white bg-[#1D4ED8]' },
                  { name: 'iQOO_6K_VC', temp: '43.1°C', badge: 'CONVECT', color: 'text-white bg-[#0A192F]' },
                  { name: 'GPU_ADRENO', temp: '42.6°C', badge: 'NOMINAL', color: 'text-white bg-[#0A192F]' },
                  { name: 'BATTERY_DUAL', temp: '38.5°C', badge: 'COOL', color: 'text-white bg-[#0A192F]' },
                  { name: 'SKIN_SURFACE', temp: '39.9°C', badge: 'NORMAL', color: 'text-white bg-[#0A192F]' },
                ].map((s) => (
                  <div key={s.name} className="p-3 rounded-xl border bg-white border-[#0A192F]/[0.08] shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono-code text-[#0A192F]/60 font-bold block">{s.name}</span>
                      <span className={`text-[7px] font-mono-code px-1 py-0.2 rounded font-black ${s.color}`}>{s.badge}</span>
                    </div>
                    <span className="text-base font-display font-black mt-1.5 block text-[#0A192F]">
                      {s.temp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Composition 2: CORRELATE (Timeline Correlation Diagram with Cobalt Blue) */}
        <div 
          onMouseMove={(e) => handleMouseMove(e, 2)}
          onMouseLeave={() => setActiveCard(null)}
          className="relative rounded-3xl p-8 sm:p-12 bg-white/95 border border-[#0A192F]/10 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.06)] overflow-hidden mb-12 transition-all duration-300 group"
        >
          {activeCard === 2 && (
            <div
              className="absolute pointer-events-none w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E2E8F0]/60 to-slate-100/40 blur-2xl transition-opacity duration-300"
              style={{ left: mousePos.x, top: mousePos.y }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-5 order-2 lg:order-1 bg-[#FAF9F5] rounded-2xl p-6 border border-[#0A192F]/[0.08]">
              <div className="text-xs font-mono-code font-bold uppercase text-[#1D4ED8] pb-3 border-b border-[#0A192F]/[0.08] flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-[#1D4ED8]" />
                <span>iQOO MULTIVARIATE ALIGNMENT</span>
              </div>
              <div className="mt-4 space-y-3 font-mono-code text-xs">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                  <span className="text-[#0A192F] font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-600" /> Thermal Spike
                  </span>
                  <span className="text-[#0A192F] font-bold">t = 09:47:18</span>
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#1D4ED8]/20 shadow-2xs">
                  <span className="text-[#1D4ED8] font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Sync Daemon Burst
                  </span>
                  <span className="text-[#1D4ED8] font-bold">t = 09:47:19 (Δt 0.8s)</span>
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#0A192F]/[0.06] shadow-2xs">
                  <span className="text-[#0A192F] font-bold flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#0A192F]" /> iQOO Throttle Clamp
                  </span>
                  <span className="text-[#0A192F] font-bold">t = 09:47:35</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-display font-black text-[#1D4ED8]">02</span>
                <span className="text-xs font-mono-code font-black uppercase tracking-widest text-[#1D4ED8] bg-blue-50 border border-[#1D4ED8]/20 px-2.5 py-1 rounded-md">
                  CORRELATE
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-[#0A192F] leading-tight">
                Connect thermal changes with activity occurring around the same time.
              </h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Analyzes process lifecycles, wake-locks, and background service executions right before and during the detected throttle event on iQOO silicon. 
                Establishes probable contribution based on synchronous temporal alignment.
              </p>
            </div>
          </div>
        </div>

        {/* Composition 3: EXPLAIN (Diagnosis Interface) */}
        <div 
          onMouseMove={(e) => handleMouseMove(e, 3)}
          onMouseLeave={() => setActiveCard(null)}
          className="relative rounded-3xl p-8 sm:p-12 bg-white/95 border border-[#0A192F]/10 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.06)] overflow-hidden transition-all duration-300 group"
        >
          {activeCard === 3 && (
            <div
              className="absolute pointer-events-none w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-100/30 to-[#E2E8F0]/50 blur-2xl transition-opacity duration-300"
              style={{ left: mousePos.x, top: mousePos.y }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-display font-black text-[#0A192F]">03</span>
                <span className="text-xs font-mono-code font-black uppercase tracking-widest text-black bg-[#F0B31C] border border-black/20 px-2.5 py-1 rounded-md">
                  EXPLAIN
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-[#0A192F] leading-tight">
                Turn technical telemetry into an actionable verdict.
              </h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                No cryptic logcat dumps or unreadable kernel addresses. ThermAlyze translates complex multivariate sensor data into 
                transparent diagnostic reports with probability-weighted contributor factors for FuntouchOS &amp; OriginOS users.
              </p>
            </div>

            {/* Right: The Actual Diagnosis Interface */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#FAF9F5] to-white rounded-2xl p-6 border border-[#0A192F]/10 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#0A192F]/[0.08]">
                <span className="text-xs font-mono-code font-bold text-[#0A192F] flex items-center gap-2">
                  <MessageSquareCheck className="w-4 h-4 text-[#1D4ED8]" />
                  iQOO DIAGNOSTIC VERDICT
                </span>
                <span className="text-[10px] font-mono-code bg-[#0A192F] text-[#F0B31C] px-2 py-0.5 rounded-full font-bold">
                  CONFIDENCE: 87%
                </span>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white border border-[#0A192F]/[0.06] shadow-2xs">
                <span className="text-[10px] font-mono-code uppercase text-[#0A192F]/50 font-bold block mb-1">
                  EXECUTIVE SUMMARY
                </span>
                <p className="text-sm font-semibold text-[#0A192F] leading-relaxed">
                  “Device entered a high thermal state (44.3°C) while background CloudBackupSync held an active wake-lock on high-efficiency cores, 
                  denying thermal headroom to the foreground 90 FPS render loop.”
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs font-mono-code text-[#0A192F]/60 pt-2">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Probable Contributor Isolated
                </span>
                <span className="font-bold text-[#0A192F]">iQOO On-Device Engine</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
