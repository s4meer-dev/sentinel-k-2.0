import React from 'react';
import { 
  Flame, 
  Gauge, 
  Layers, 
  Clock, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Binary
} from 'lucide-react';

export const ForensicsSection: React.FC = () => {
  const inputSignals = [
    {
      label: 'THERMAL STATE',
      val: '44.2°C (+4.1°C)',
      tag: 'ZONE_0 CRITICAL',
      icon: Flame,
      color: 'text-[#1D4ED8]',
      bg: 'bg-[#E2E8F0]/30 border-[#1D4ED8]/20',
    },
    {
      label: 'PERFORMANCE',
      val: '90 → 60 FPS (-33%)',
      tag: 'SURFACEFLINGER CLAMP',
      icon: Gauge,
      color: 'text-[#0A192F]',
      bg: 'bg-white border-[#0A192F]/10',
    },
    {
      label: 'ACTIVITY',
      val: 'CloudBackupSync Burst',
      tag: 'ACTIVE WAKE-LOCK',
      icon: Layers,
      color: 'text-[#1D4ED8]',
      bg: 'bg-white border-[#0A192F]/10',
    },
    {
      label: 'TIMELINE',
      val: 'Δt = 0.8s Overlap',
      tag: 'COINCIDENT EVENT',
      icon: Clock,
      color: 'text-emerald-700',
      bg: 'bg-white border-[#0A192F]/10',
    },
  ];

  return (
    <section id="forensics" className="relative py-28 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Background ambient acrylic washes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#E2E8F0]/50 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <Binary className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>FORENSIC REASONING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.06]">
            Raw signals aren’t the answer.{' '}
            <span className="block text-[#1D4ED8] mt-1">
              Context is.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#0A192F]/70 leading-relaxed font-normal">
            A sensor reading alone cannot explain user impact. ThermAlyze correlates four discrete signal layers 
            to isolate probable causation without guessing.
          </p>
        </div>

        {/* Forensic Convergence Pipeline Layout */}
        <div className="bg-white/95 rounded-3xl border border-[#0A192F]/10 p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.06)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Signals (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#0A192F]/60 uppercase tracking-wider mb-2">
                MULTIVARIATE TELEMETRY INPUTS
              </div>

              {inputSignals.map((sig) => {
                const Icon = sig.icon;
                return (
                  <div
                    key={sig.label}
                    className={`p-4 rounded-2xl border ${sig.bg} flex items-center justify-between shadow-2xs`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border border-[#0A192F]/[0.08] shadow-2xs">
                        <Icon className={`w-4 h-4 ${sig.color}`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-code text-[#0A192F]/50 uppercase font-bold block">
                          {sig.label}
                        </span>
                        <span className="text-sm font-display font-bold text-[#0A192F]">
                          {sig.val}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono-code px-2 py-0.5 rounded-full bg-black/5 text-[#0A192F]/70 font-semibold">
                      {sig.tag}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Convergence Arrow / Engine Hub (Middle 2 Cols) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#F0B31C] flex items-center justify-center shadow-lg border border-white/20">
                <Cpu className="w-6 h-6 text-[#F0B31C]" />
              </div>
              <span className="text-[10px] font-mono-code font-bold text-[#0A192F] mt-2 uppercase tracking-widest text-center">
                ON-DEVICE REASONING
              </span>
              <div className="hidden lg:flex items-center text-[#1D4ED8] mt-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Synthesized Human Verdict (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#0A192F]/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#0A192F]/[0.08]">
                  <span className="text-xs font-mono-code font-bold uppercase text-[#1D4ED8] tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                    FORENSIC DIAGNOSIS
                  </span>
                  <span className="text-[10px] font-mono-code bg-[#0A192F] text-[#F0B31C] px-2.5 py-0.5 rounded-full font-bold">
                    87% CONFIDENCE
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-mono-code text-[#0A192F]/50 uppercase font-bold block mb-2">
                    EXECUTIVE FINDING
                  </span>
                  <p className="text-base sm:text-lg font-display font-semibold text-[#0A192F] leading-snug">
                    “Performance reduction began after the device entered a high thermal state (44.2°C) 
                    while additional background activity was detected around the same time.”
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-[#0A192F]/[0.06] shadow-2xs">
                  <span className="text-[9px] font-mono-code text-[#1D4ED8] uppercase font-bold block">
                    PRIMARY CORRELATED TASK
                  </span>
                  <div className="text-sm font-bold text-[#0A192F] mt-0.5">
                    CloudBackupSync (WakeLock ID: 0x4f2a)
                  </div>
                  <div className="text-[10px] font-mono-code text-[#0A192F]/60 mt-1">
                    Concurrency duration: 24.8s before SurfaceFlinger frame clamp
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0A192F]/[0.06] flex items-center justify-between text-xs font-mono-code text-[#0A192F]/60">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Probable Contributor Isolated
                </span>
                <span>Zero Cloud Latency</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
