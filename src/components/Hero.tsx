import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Terminal, 
  Smartphone,
  Activity,
  Gauge
} from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { EvidenceStreamVisual } from './EvidenceStreamVisual';
import { DigitalTwinHeroVisual } from './DigitalTwinHeroVisual';
import type { ValidationPhase } from '../types/sentinel';

interface HeroProps {
  currentPhase: ValidationPhase;
  onPhaseSelect: (phase: ValidationPhase) => void;
  onExploreClick: () => void;
  onKineticClick: () => void;
}

type HeroViewMode = 'PHONE' | 'EVIDENCE' | 'TWIN';

export const Hero: React.FC<HeroProps> = ({
  currentPhase,
  onPhaseSelect,
  onExploreClick,
  onKineticClick,
}) => {
  const [viewMode, setViewMode] = useState<HeroViewMode>('PHONE');

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-transparent border-b border-[#1A1712]/[0.08]"
    >
      {/* Subscrr Warm Architectural Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-100/35 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-stone-200/40 blur-[160px] pointer-events-none -z-10" />
      
      {/* Millimeter Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Flagship Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Minimal Editorial Narrative & Jumper (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Top Subscrr-Style Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#1A1712]/[0.08] shadow-[0_2px_8px_rgba(38,34,28,0.04)] text-xs font-mono-code text-slate-800 w-fit mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-black tracking-wider text-[#1A1712]">SENTINEL-K</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600 font-bold text-[11px]">
                AIR-GAPPED FIELD SECURITY COPILOT
              </span>
            </div>

            {/* Cinematic Telemetry Kicker */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono-code text-[#7C766C] mb-3 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>DEFENSE SECTOR // MUNICIPAL SCADA NODE 04</span>
              <span className="text-slate-300">·</span>
              <span>EPANET 2.2 KINETIC TWIN</span>
            </div>

            {/* Main Punchy Headline — Subscrr-Style Poetic Editorial Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-sans font-black tracking-[-0.035em] text-[#1A1712] uppercase leading-[1.02]">
              THE COMMAND ISN&apos;T TRUSTED. <br />
              <span className="font-serif italic font-normal normal-case text-slate-800 tracking-tight">
                The consequence is verified.
              </span>
            </h1>

            {/* Editorial Lead Paragraph — Concise & Punchy */}
            <p className="mt-5 text-base sm:text-lg text-[#5C564C] font-normal leading-relaxed max-w-xl">
              Sentinel-K turns the <strong className="text-[#1A1712] font-black">Flagship Field Terminal</strong> into an autonomous security copilot. Before deceptive operator dispatches reach critical municipal SCADA, on-device SLMs parse operator intent in <strong className="text-[#1A1712] font-bold">18ms on Snapdragon® 8 Elite NPU</strong> and simulate forward hydrodynamic water hammer in real-time.
            </p>

            {/* Quick Interactive Incident Stage Jumper */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="text-[10px] font-mono-code text-[#7C766C] font-bold uppercase tracking-wider flex items-center justify-between max-w-lg">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C]" />
                  <span>INCIDENT VERIFICATION STAGES:</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono-code">TAP TO JUMP</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/90 border border-[#1A1712]/[0.08] shadow-[0_2px_8px_rgba(38,34,28,0.04)] backdrop-blur-md max-w-lg">
                {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((p, idx) => {
                  const labels = ['01 DISPATCH', '02 NPU PARSE', '03 CYBER GATE', '04 EPANET TWIN', '05 REPLAN'];
                  const isSelected = currentPhase === p || (p === 'REPLAN' && currentPhase === 'APPROVED');
                  return (
                    <button
                      key={p}
                      onClick={() => onPhaseSelect(p)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1A1712] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
                      }`}
                    >
                      {labels[idx]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1A1712] hover:bg-black text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_8px_20px_-4px_rgba(26,23,18,0.25)] cursor-pointer active:scale-98"
              >
                <span>EXPLORE 8-STAGE PIPELINE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F0B31C]" />
              </button>

              <button
                onClick={onKineticClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 border border-[#1A1712]/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-all shadow-[0_2px_8px_rgba(38,34,28,0.04)] backdrop-blur-md cursor-pointer active:scale-98"
              >
                <Play className="w-3.5 h-3.5 text-amber-700 fill-current" />
                <span>SEE 11.4 BAR REJECT DEMO</span>
              </button>
            </div>

            {/* Subscrr-style Sovereign Enclave Badge */}
            <div className="hidden sm:flex items-center gap-3 mt-6 p-3 rounded-2xl bg-white/85 border border-[#1A1712]/[0.08] shadow-[0_4px_16px_rgba(38,34,28,0.04)] backdrop-blur-md max-w-md">
              <div className="w-9 h-9 rounded-xl bg-[#1A1712] text-[#F0B31C] flex items-center justify-center font-mono-code text-[11px] font-black shrink-0 shadow-2xs">
                PKI
              </div>
              <div className="text-left font-mono-code">
                <div className="text-[10px] font-black text-[#1A1712] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>AIR-GAPPED SOVEREIGN COMMITMENT</span>
                </div>
                <div className="text-[9px] text-[#7C766C]">
                  Zero WAN telemetry · 100% on-device EPANET kinetic twin
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Flagship Showcase & View Modes (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* View Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs mb-3 z-20">
              <button
                onClick={() => setViewMode('PHONE')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'PHONE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>FLAGSHIP TERMINAL</span>
              </button>

              <button
                onClick={() => setViewMode('EVIDENCE')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'EVIDENCE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-[#F0B31C]" />
                <span>EVIDENCE BUS</span>
              </button>

              <button
                onClick={() => setViewMode('TWIN')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'TWIN'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Gauge className="w-3.5 h-3.5 text-blue-600" />
                <span>KINETIC TWIN</span>
              </button>
            </div>

            {/* View Stage */}
            <AnimatePresence mode="wait">
              {viewMode === 'PHONE' && (
                <motion.div
                  key="view-phone"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex items-center justify-center relative"
                >
                  {/* Flagship Phone Mockup with Mobile Player Controls */}
                  <PhoneMockup 
                    phase={currentPhase}
                    onSelectPhase={onPhaseSelect}
                    showControls={true}
                  />
                </motion.div>
              )}

              {viewMode === 'EVIDENCE' && (
                <motion.div
                  key="view-evidence"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-md py-4"
                >
                  <EvidenceStreamVisual 
                    currentPhase={currentPhase}
                    onPhaseSelect={onPhaseSelect}
                  />
                </motion.div>
              )}

              {viewMode === 'TWIN' && (
                <motion.div
                  key="view-twin"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-md py-4"
                >
                  <DigitalTwinHeroVisual phase={currentPhase} />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Bottom Technical Specifications Strip — Subscrr Glass Architecture */}
        <div className="mt-8 p-4 rounded-3xl bg-white/85 border border-[#1A1712]/[0.08] shadow-[0_4px_20px_-4px_rgba(38,34,28,0.06)] backdrop-blur-md flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs text-[#5C564C]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#1A1712]" />
            <span className="text-[#1A1712] font-bold text-[11px]">
              TARGET INFRASTRUCTURE: Municipal Water Station 04 (Modbus TCP / EPANET Hydrodynamics)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>NPU: <strong className="text-[#1A1712]">18ms Air-Gapped</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Physics: <strong className="text-[#1A1712]">EPANET / WNTR 144Hz</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
              <span>Gate: <strong className="text-[#1A1712]">3D Ultrasonic Biometric</strong></span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
