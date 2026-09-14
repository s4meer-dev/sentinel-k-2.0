import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  RefreshCw,
  Sliders
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [isOptimized, setIsOptimized] = useState(true);
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
    setAnimating(true);
    setTimeout(() => {
      setIsOptimized(prev => !prev);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Dramatic Dual Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/6 -translate-y-1/2 w-[500px] h-[500px] bg-amber-950/20 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/6 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/20 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Sliders className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">CLOSING THE LOOP</span>
            <span className="text-slate-600">/</span>
            <span>VERIFIED OUTCOMES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            DON'T JUST DETECT THE PROBLEM. <br />
            <span className="text-[#F0B31C]">MEASURE THE IMPROVEMENT.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A real intelligence system doesn't stop at diagnosing a degraded connection. It coordinates available recovery actions and verifies whether network quality actually recovered.
          </p>
        </div>

        {/* Dramatic Split-Screen Comparison Showcase */}
        <div className="max-w-5xl mx-auto relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* LEFT: BEFORE (Unstable 4G / Degrading) */}
            <div className={`md:col-span-5 p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
              !isOptimized
                ? 'bg-amber-950/20 border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                : 'bg-black/40 border border-white/10 opacity-70'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono-code">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  BEFORE RECOVERY
                </span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold text-[10px]">
                  DEGRADING
                </span>
              </div>

              {/* Big metric callout */}
              <div className="my-6">
                <div className="text-4xl sm:text-5xl font-display font-black text-white">
                  4G <span className="text-xs font-mono-code text-amber-400 font-bold uppercase tracking-wider ml-1">LTE FALLBACK</span>
                </div>
                <div className="text-xs font-mono-code text-slate-400 mt-1">
                  Sub-6GHz signal faded below cell boundary
                </div>
              </div>

              {/* Telemetry rows */}
              <div className="space-y-3 font-mono-code text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">NETWORK EVENTS</span>
                  <span className="text-red-400 font-bold">07 in 3 min</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">LATENCY JITTER</span>
                  <span className="text-amber-400 font-bold">142 ms (Spikes)</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">UDP PACKET LOSS</span>
                  <span className="text-red-400 font-bold">18.4% Dropped</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">USER EXPERIENCE</span>
                  <span className="text-amber-300 font-bold">Game stuttering</span>
                </div>
              </div>
            </div>

            {/* CENTER: OPTIMIZE Button Trigger */}
            <div className="md:col-span-2 flex flex-col items-center justify-center my-4 md:my-0">
              <button
                onClick={handleToggle}
                className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-black text-xs tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(240,179,28,0.4)] hover:shadow-[0_0_40px_rgba(240,179,28,0.6)] active:scale-95 cursor-pointer"
              >
                <RefreshCw className={`w-5 h-5 mb-1 text-[#07090E] transition-transform ${animating ? 'rotate-180 duration-500' : 'group-hover:rotate-45'}`} />
                <span>OPTIMIZE</span>
                <span className="text-[9px] font-bold opacity-80 mt-0.5">TAP TO TOGGLE</span>
              </button>
            </div>

            {/* RIGHT: AFTER (Stable 5G / Verified) */}
            <div className={`md:col-span-5 p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
              isOptimized
                ? 'bg-emerald-950/20 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                : 'bg-black/40 border border-white/10 opacity-70'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono-code">
                <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  AFTER VERIFICATION
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                  VERIFIED STABLE
                </span>
              </div>

              {/* Big metric callout */}
              <div className="my-6">
                <div className="text-4xl sm:text-5xl font-display font-black text-white">
                  5G <span className="text-xs font-mono-code text-emerald-400 font-bold uppercase tracking-wider ml-1">LOCKED (n78)</span>
                </div>
                <div className="text-xs font-mono-code text-emerald-300 mt-1">
                  Primary NR carrier re-anchored & locked
                </div>
              </div>

              {/* Telemetry rows */}
              <div className="space-y-3 font-mono-code text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">NETWORK EVENTS</span>
                  <span className="text-emerald-400 font-bold">01 Clean Attach</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">LATENCY JITTER</span>
                  <span className="text-emerald-400 font-bold">21 ms (Flat)</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">UDP PACKET LOSS</span>
                  <span className="text-emerald-400 font-bold">0.0% (Zero loss)</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-400">USER EXPERIENCE</span>
                  <span className="text-emerald-300 font-bold">Fluid 90 FPS gaming</span>
                </div>
              </div>
            </div>

          </div>

          {/* Verified delta bottom callout bar */}
          <div className="mt-8 p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">
                <strong>Closed-Loop Verification:</strong> Measures actual latency & packet loss for 15s post-action.
              </span>
            </div>
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>+52% STABILITY IMPROVEMENT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
