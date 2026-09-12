import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import type { ThermalState } from '../types/telemetry';
import { 
  ArrowRight, 
  Terminal, 
  ChevronDown, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Gauge 
} from 'lucide-react';

interface HeroProps {
  thermalState: ThermalState;
  setThermalState: (state: ThermalState) => void;
  onExploreClick: () => void;
  onTimelineClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  thermalState,
  setThermalState,
  onExploreClick,
  onTimelineClick,
}) => {
  // Derived telemetry indicator based on phone thermal state
  const getLiveTelemetryMetrics = () => {
    switch (thermalState) {
      case 'NORMAL':
        return {
          fps: '90 FPS',
          temp: '41.8°C',
          state: 'iQOO MONSTER MODE: STABLE',
          stateColor: 'text-[#1D4ED8]',
          badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          cause: 'Nominal gaming load across Prime core & iQOO Q2 chip',
        };
      case 'HEATING':
        return {
          fps: '88 FPS',
          temp: '43.4°C',
          state: 'iQOO 6K VC CONVECTION RISING',
          stateColor: 'text-amber-600',
          badgeBg: 'bg-amber-50 text-amber-900 border-amber-300 font-bold',
          cause: 'Convection rate approaching 43.8°C silicon safety threshold',
        };
      case 'THERMAL_EVENT':
      case 'FORENSIC_ANALYSIS':
        return {
          fps: '60 FPS CLAMPED',
          temp: '44.3°C',
          state: 'iQOO THERMAL MITIGATION ENGAGED',
          stateColor: 'text-amber-950',
          badgeBg: 'bg-[#F0B31C] text-black border-black/20 font-black shadow-xs',
          cause: 'SurfaceFlinger & PowerManager throttled render pipeline to protect silicon',
        };
    }
  };

  const metrics = getLiveTelemetryMetrics();

  return (
    <section className="relative min-h-[92vh] pt-20 md:pt-24 pb-16 overflow-hidden flex flex-col justify-center bg-[#F8F7F2]">
      {/* Editorial Grid Texture */}
      <div className="absolute inset-0 editorial-grid opacity-50 pointer-events-none -z-10" />

      {/* Subtle Pastel Acrylic Ambient Washes */}
      <div className="absolute top-1/4 left-1/12 w-[520px] h-[520px] rounded-full bg-[#FFFBEB]/60 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/12 w-[560px] h-[560px] rounded-full bg-[#E2E8F0]/70 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Editorial Headline, iQOO Silicon Telemetry & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Tag / Category Badge with iQOO Yellow Mark */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A192F]/15 text-[#0A192F] text-xs font-mono-code mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F0B31C] ring-2 ring-[#F0B31C]/30" />
              <span className="font-bold tracking-wider text-[#0A192F]">iQOO PERFORMANCE LABS</span>
              <span className="text-[#0A192F]/30 font-light">/</span>
              <span className="text-[#0A192F]/70 font-medium">THERMAL FORENSICS ENGINE</span>
            </div>

            {/* Headline with High-End Editorial Typography & iQOO Yellow Highlight */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-[-0.035em] text-[#0A192F] leading-[1.08]">
              Your phone isn’t <br className="hidden sm:inline" />
              just getting hot.
              <span className="block mt-2.5 text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight">
                <span className="inline-block bg-[#F0B31C] text-[#0A192F] px-4 py-1.5 rounded-xl border border-[#0A192F]/10 shadow-[0_4px_14px_rgba(240,179,28,0.2)] font-black">
                  Something is happening.
                </span>
              </span>
            </h1>

            {/* Supporting Text with Tagline Anchor */}
            <p className="mt-5 text-base sm:text-lg text-[#0A192F]/75 max-w-xl font-normal leading-relaxed">
              <strong className="font-semibold text-[#0A192F]">Understand the heat before it kills performance.</strong> ThermAlyze monitors hardware thermistors in real time, flags anomalous frame drops, and correlates background workloads to uncover why your phone throttles.
            </p>

            {/* Real-time Silicon Governor Live Telemetry Card */}
            <div className="mt-8 w-full max-w-xl p-5 rounded-2xl bg-white/95 border border-[#0A192F]/10 shadow-[0_12px_30px_-10px_rgba(10,25,47,0.06)]">
              <div className="flex items-center justify-between pb-3 border-b border-[#0A192F]/[0.08] text-xs font-mono-code">
                <span className="text-[#0A192F] font-bold tracking-wide flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  iQOO MONSTER TELEMETRY HARNESS
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold tracking-wider uppercase border ${metrics.badgeBg}`}>
                  {metrics.state}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-[#1D4ED8]/15">
                  <div className="p-2 rounded-lg bg-[#1D4ED8] text-white shadow-xs">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-[#1D4ED8] uppercase font-bold tracking-wider block">SURFACEFLINGER FPS</span>
                    <span className="text-lg font-bold text-[#0A192F] tracking-tight">{metrics.fps}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFBEB] border border-amber-300/50">
                  <div className="p-2 rounded-lg bg-[#0A192F] text-[#F0B31C] border border-black/20 shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-amber-900 uppercase font-bold tracking-wider block">iQOO 6K VC TEMPERATURE</span>
                    <span className="text-lg font-bold text-[#0A192F] tracking-tight">{metrics.temp}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#0A192F]/[0.06] text-[11px] font-mono-code text-[#0A192F]/65 flex items-center justify-between">
                <span className="truncate mr-2">{metrics.cause}</span>
                <span className="shrink-0 font-bold text-[#0A192F] bg-[#0A192F]/[0.05] px-2 py-0.5 rounded text-[10px] tracking-wider">100Hz POLLING</span>
              </div>
            </div>

            {/* Call to Actions with iQOO Brand Yellow & Non-Neon Blue */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#0A192F] font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_14px_rgba(240,179,28,0.25)] hover:shadow-[0_6px_20px_rgba(240,179,28,0.35)] active:scale-98 cursor-pointer border border-black/10"
              >
                <span>EXPLORE THERMALYZE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onTimelineClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1D4ED8] text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#F0B31C]" />
                <span>SEE THE TIMELINE</span>
              </button>
            </div>

            {/* Hardware Telemetry Specs Row */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-[#0A192F]/10 w-full max-w-lg">
              <div>
                <div className="text-[10px] font-mono-code text-[#1D4ED8] uppercase font-bold tracking-wider">HARDWARE POLLING</div>
                <div className="text-sm sm:text-base font-display font-extrabold text-[#0A192F] mt-0.5 tracking-tight">100Hz Real-Time</div>
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-amber-800 uppercase font-bold tracking-wider">DETECTION DELTA</div>
                <div className="text-sm sm:text-base font-display font-extrabold text-[#0A192F] mt-0.5 tracking-tight">Δ 0.1°C / s</div>
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-[#1D4ED8] uppercase font-bold tracking-wider">CO-PROCESSING</div>
                <div className="text-sm sm:text-base font-display font-extrabold text-[#0A192F] mt-0.5 tracking-tight">Snapdragon + Q2</div>
              </div>
            </div>

            {/* Interactive hint */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono-code text-[#0A192F]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="font-bold text-[#0A192F]">Live simulation active:</span>
              <span>Tap the stages on the phone mockup</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#0A192F]" />
            </div>
          </div>

          {/* RIGHT: Live Realistic Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <PhoneMockup
              thermalState={thermalState}
              onSelectState={setThermalState}
              showControls={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
