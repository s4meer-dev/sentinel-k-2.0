import React, { useState } from 'react';
import { Sliders, HelpCircle, EyeOff, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  // Interactive scrubber along the timeline 0 to 100%
  const [scrubPosition, setScrubPosition] = useState(65);

  // Compute values dynamically at scrubber position
  const getScrubbedMetrics = (pos: number) => {
    let temp = 41.2;
    let fps = 90;
    let governor = 'iQOO MONSTER STABLE';

    if (pos < 35) {
      temp = 41.2 + (pos / 35) * 0.8;
      fps = 90;
      governor = 'OPTIMAL 90Hz RENDER';
    } else if (pos < 70) {
      const p = (pos - 35) / 35;
      temp = 42.0 + p * 2.1;
      fps = Math.round(90 - p * 30);
      governor = 'iQOO FLUX MITIGATION';
    } else {
      temp = 44.1 + ((pos - 70) / 30) * 0.3;
      fps = 60;
      governor = 'SILICON CLAMPED (60 FPS)';
    }

    return { temp: temp.toFixed(1), fps, governor };
  };

  const metrics = getScrubbedMetrics(scrubPosition);

  return (
    <section id="problem" className="relative py-28 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Abstract background acrylic washes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFEADB]/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#DCE7F9]/70 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Typography with iQOO Brand Accents */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F0B31C] border border-black/30" />
            <span className="font-bold uppercase tracking-wider">iQOO HARDWARE TELEMETRY ANALYSIS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#0A192F] leading-[1.03]">
            Heat isn’t the problem.{' '}
            <span className="block mt-1">
              <span className="bg-[#F0B31C] text-black px-3 py-0.5 rounded-lg shadow-xs border border-black/10 inline-block font-black">
                Not knowing why is.
              </span>
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
            iQOO Monster Mode actively manages silicon safety. When background tasks spike thermal flux, 
            gamers experience the symptom — sudden frame rate stutters — but never the underlying cause.
          </p>
        </div>

        {/* The Moment Performance Changes: Big Visual Split */}
        <div className="mt-16 bg-white/95 rounded-3xl border border-[#0A192F]/10 p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.08)] backdrop-blur-xl relative overflow-hidden">
          
          {/* Dual Big Readouts: Left FPS in Cobalt Blue, Right Temp in iQOO Yellow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#0A192F]/[0.08] pb-8">
            
            {/* Left: Frame Rate in Deep Royal Blue */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-[#1D4ED8]/20 flex flex-col justify-between shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#1D4ED8] font-bold uppercase tracking-wider">
                <span>SURFACEFLINGER FRAME PACING</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#1D4ED8]/20 text-[#1D4ED8]">TARGET: 90 FPS</span>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-display font-black tracking-tight text-[#1D4ED8]">
                  {metrics.fps}
                </span>
                <span className="text-2xl font-display font-bold text-[#1D4ED8]/50">
                  FPS
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono-code text-[#1D4ED8]/80 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                <span>Frame time: {(1000 / metrics.fps).toFixed(1)}ms</span>
              </div>
            </div>

            {/* Right: Temperature with iQOO Brand Yellow Badge */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#0A192F]/15 flex flex-col justify-between shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#0A192F] font-bold uppercase tracking-wider">
                <span>iQOO 6K VC SILICON HEADROOM</span>
                <span className="bg-[#F0B31C] text-black px-2 py-0.5 rounded border border-black/20 font-black">TRIP: 43.8°C</span>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-display font-black tracking-tight text-[#0A192F]">
                  {metrics.temp}
                </span>
                <span className="text-2xl font-display font-black text-[#0A192F]/50">
                  °C
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono-code text-[#0A192F] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#F0B31C] border border-black/40" />
                <span>Governor State: {metrics.governor}</span>
              </div>
            </div>

          </div>

          {/* Connected Synchronized Telemetry Graph */}
          <div className="relative mt-8 h-72 sm:h-80 w-full bg-[#FAF9F5] rounded-2xl border border-[#0A192F]/[0.08] p-4 flex flex-col justify-between overflow-hidden">
            
            {/* Subtle Gridlines */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-40">
              <div className="w-full border-b border-dashed border-[#0A192F]/15 flex justify-between text-[10px] font-mono-code text-[#1D4ED8] font-bold">
                <span>90 FPS (NOMINAL)</span>
                <span className="text-[#0A192F]">44.5°C (iQOO SEVERE)</span>
              </div>
              <div className="w-full border-b border-dashed border-[#0A192F]/15 flex justify-between text-[10px] font-mono-code text-slate-500">
                <span>75 FPS</span>
                <span>43.0°C</span>
              </div>
              <div className="w-full border-b border-dashed border-[#0A192F]/15 flex justify-between text-[10px] font-mono-code text-slate-500">
                <span className="text-[#1D4ED8]">60 FPS (THROTTLED CLAMP)</span>
                <span className="text-[#0A192F]">41.5°C (BASELINE)</span>
              </div>
            </div>

            {/* SVG Curves: Temp in Yellow/Gold, FPS in Deep Blue */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="editorialYellowFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F0B31C" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F0B31C" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="editorialFpsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Shaded Area Under Temp Curve */}
              <path
                d="M 40,240 Q 250,230 420,130 T 760,40 L 760,280 L 40,280 Z"
                fill="url(#editorialYellowFill)"
              />

              {/* Temperature Curve (High-contrast gold/black backing with yellow top stroke) */}
              <path
                d="M 40,240 Q 250,230 420,130 T 760,40"
                fill="none"
                stroke="#0A192F"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 40,240 Q 250,230 420,130 T 760,40"
                fill="none"
                stroke="#F0B31C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* FPS Curve (Deep Royal Blue #1D4ED8) */}
              <path
                d="M 40,50 L 380,50 Q 440,55 500,160 T 600,230 L 760,230"
                fill="none"
                stroke="#1D4ED8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Throttle Trip Marker */}
              <line x1="430" y1="20" x2="430" y2="280" stroke="#000000" strokeWidth="2" strokeDasharray="5 5" />
            </svg>

            {/* Annotated Marker in iQOO Yellow */}
            <div className="absolute top-4 left-[54%] -translate-x-1/2 bg-[#F0B31C] border border-black/20 text-black px-3 py-1.5 rounded-lg text-xs font-mono-code font-black shadow-md flex items-center gap-1.5 pointer-events-none">
              <ShieldAlert className="w-3.5 h-3.5 text-black" />
              <span>iQOO MONSTER MITIGATION TRIPPOINT: 43.8°C</span>
            </div>

            {/* Interactive Scrubber Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-[#0A192F] shadow-sm pointer-events-none z-10 transition-all duration-75"
              style={{ left: `${scrubPosition}%` }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#F0B31C] border-2 border-black -translate-x-[5px] top-1/2 absolute shadow-md" />
            </div>
          </div>

          {/* Timeline Scrubber Slider */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#0A192F]/[0.06]">
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#0A192F]">
              <Sliders className="w-4 h-4 text-[#1D4ED8]" />
              <span>iQOO TIMELINE TELEMETRY SCRUBBER:</span>
            </div>
            <div className="flex-1 max-w-md flex items-center gap-3">
              <span className="text-[10px] font-mono-code text-slate-500 font-bold">t = 0s</span>
              <input
                type="range"
                min="5"
                max="95"
                value={scrubPosition}
                onChange={(e) => setScrubPosition(Number(e.target.value))}
                className="w-full accent-[#1D4ED8] cursor-pointer h-2 bg-zinc-200 rounded-lg appearance-none"
              />
              <span className="text-[10px] font-mono-code text-slate-500 font-bold">t = 60s</span>
            </div>
          </div>

          {/* Editorial Comparison: What user sees vs ThermAlyze */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#0A192F]/[0.06] shadow-xs">
              <div className="flex items-center gap-2 text-[#0A192F]/70 font-mono-code text-xs font-bold uppercase">
                <EyeOff className="w-4 h-4 text-[#0A192F]/50" />
                <span>WHAT THE USER CURRENTLY EXPERIENCES</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                A sudden stutter in demanding games. Frame rate plummets from 90 to 60 FPS while the chassis heats up. 
                Android displays zero explanation of what triggered the throttling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-[#1D4ED8]/20 shadow-xs">
              <div className="flex items-center gap-2 text-[#1D4ED8] font-mono-code text-xs font-black uppercase">
                <HelpCircle className="w-4 h-4 text-[#1D4ED8]" />
                <span>WHAT THERMALYZE REVEALS ON iQOO</span>
              </div>
              <p className="mt-3 text-sm text-[#0A192F]/85 leading-relaxed font-normal">
                Precise correlation: 18 seconds prior to throttling, an unoptimized background sync task saturated high-efficiency cores, 
                tipping the device over its 43.8°C thermal trip-point.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
