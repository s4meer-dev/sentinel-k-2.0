import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Terminal, 
  Cpu, 
  Radio, 
  Fingerprint, 
  Layers,
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

  const isHazard = currentPhase === 'PHYSICAL_SIM';
  const isSafe = currentPhase === 'REPLAN' || currentPhase === 'APPROVED';

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden bg-[#FBFBFA] border-b border-black/[0.06]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-200/[0.07] blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-slate-200/[0.3] blur-[160px] pointer-events-none -z-10" />
      
      {/* Millimeter Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Flagship Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Product Narrative & Hardware Trust Engine (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Top iQOO Hardware Badge with BMW M Tricolor Accent */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs text-xs font-mono-code text-slate-800 w-fit mb-4">
              <div className="flex items-center h-2.5 overflow-hidden rounded-xs border border-black/10">
                <div className="w-1.5 h-full bg-[#0066B1]" />
                <div className="w-1.5 h-full bg-[#002C6C]" />
                <div className="w-1.5 h-full bg-[#E2231A]" />
              </div>
              <span className="font-bold tracking-wider text-[#090D15]">iQOO 13 × SENTINEL-K</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AIR-GAPPED FIELD ENCLAVE
              </span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.04]">
              THE COMMAND ISN&apos;T TRUSTED. <br />
              <span className="text-[#090D15] relative inline-block mt-1">
                <span className="relative z-10">THE CONSEQUENCE IS VERIFIED.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[#F0B31C]/35 -z-10 rounded-xs" />
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-3.5 text-sm sm:text-base text-slate-700 font-normal leading-relaxed max-w-xl">
              Sentinel-K turns the <strong className="text-[#090D15]">iQOO 13 Flagship</strong> into an autonomous field security copilot. Before deceptive operator dispatches reach critical municipal SCADA, on-device SLMs parse operator intent in <strong className="text-[#090D15]">18ms on Snapdragon® 8 Elite NPU</strong> and simulate forward hydrodynamic water hammer in real-time.
            </p>

            {/* 4 Authentic iQOO Hardware Trust Chips */}
            <div className="mt-4 grid grid-cols-2 gap-2 max-w-lg">
              <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Snapdragon® 8 Elite</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">45 TOPS On-Device NPU (18ms)</div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Radio className="w-3.5 h-3.5 text-[#F0B31C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Supercomputing Chip Q2</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">144Hz Kinetic Physics Twin</div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Origin Island Enclave</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">Hardware-Secured Real-Time Capsule</div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Fingerprint className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">3D Ultrasonic Sensor</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">Sovereign Biometric Signature</div>
                </div>
              </div>
            </div>

            {/* Interactive Stage Scrubber */}
            <div className="mt-4 flex flex-col gap-1.5">
              <div className="text-[10px] font-mono-code text-slate-500 font-bold uppercase tracking-wider flex items-center justify-between max-w-lg">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C]" />
                  <span>MOBILE INCIDENT SIMULATOR:</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono-code">TAP STAGE TO JUMP</span>
              </div>

              <div className="flex flex-wrap items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs max-w-lg">
                {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((p, idx) => {
                  const labels = ['01 DISPATCH', '02 NPU PARSE', '03 CYBER GATE', '04 EPANET TWIN', '05 REPLAN'];
                  const isSelected = currentPhase === p || (p === 'REPLAN' && currentPhase === 'APPROVED');
                  return (
                    <button
                      key={p}
                      onClick={() => onPhaseSelect(p)}
                      className={`px-2.5 py-1 rounded-xl text-[10.5px] font-mono-code font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#090D15] text-white shadow-2xs'
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
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#090D15] hover:bg-slate-800 text-white font-mono-code font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer active:scale-98"
              >
                <span>EXPLORE 8-STAGE PIPELINE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F0B31C]" />
              </button>

              <button
                onClick={onKineticClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-black/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer active:scale-98"
              >
                <Play className="w-3.5 h-3.5 text-amber-700 fill-current" />
                <span>SEE 11.4 BAR REJECT DEMO</span>
              </button>
            </div>

          </div>

          {/* Right Column: Authentic iQOO 13 Flagship Showcase & View Modes (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* View Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs mb-2.5 z-20">
              <button
                onClick={() => setViewMode('PHONE')}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'PHONE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>iQOO 13 MOBILE PLAYER</span>
              </button>

              <button
                onClick={() => setViewMode('EVIDENCE')}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'EVIDENCE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Activity className="w-3 h-3 text-[#F0B31C]" />
                <span>EVIDENCE BUS</span>
              </button>

              <button
                onClick={() => setViewMode('TWIN')}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'TWIN'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Gauge className="w-3 h-3 text-blue-600" />
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
                  {/* Flanking Top-Right HUD Card (Snapdragon NPU) */}
                  <div className="hidden xl:block absolute left-[calc(50%+180px)] top-10 z-20 w-44 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-xs font-mono-code text-[9px]">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-black/[0.06]">
                      <span className="font-black text-[#090D15] flex items-center gap-1">
                        <Cpu className="w-2.5 h-2.5 text-blue-600" />
                        SNAPDRAGON NPU
                      </span>
                      <span className="text-[7.5px] px-1 py-0.2 rounded bg-blue-100 text-blue-900 font-bold">18ms</span>
                    </div>
                    <div className="text-slate-700 space-y-0.5">
                      <div className="flex justify-between">
                        <span>Throughput:</span>
                        <strong className="text-black font-bold">45 TOPS</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>WAN Leakage:</span>
                        <strong className="text-emerald-700 font-bold">0.00 KB</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Model:</span>
                        <strong className="text-slate-900 font-bold">SLM-1.8B</strong>
                      </div>
                    </div>
                  </div>

                  {/* Flanking Bottom-Right HUD Card (EPANET Twin) */}
                  <div className="hidden xl:block absolute left-[calc(50%+180px)] bottom-16 z-20 w-48 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-xs font-mono-code text-[9px]">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-black/[0.06]">
                      <span className="font-black text-[#090D15] flex items-center gap-1">
                        <Gauge className="w-2.5 h-2.5 text-red-600" />
                        EPANET 2.2 TWIN
                      </span>
                      <span className={`text-[7.5px] px-1 py-0.2 rounded font-bold ${
                        isHazard 
                          ? 'bg-red-100 text-red-800' 
                          : isSafe 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        {isHazard ? 'CRITICAL' : isSafe ? '7.4 BAR' : 'ACTIVE'}
                      </span>
                    </div>
                    <div className="text-slate-700 space-y-0.5">
                      <div className="flex justify-between">
                        <span>Threshold:</span>
                        <strong className="text-slate-900 font-bold">9.2 BAR MAX</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Peak Pressure:</span>
                        <strong className={isHazard ? 'text-red-700 font-black' : isSafe ? 'text-emerald-700 font-bold' : 'text-black font-bold'}>
                          {isHazard ? '11.4 BAR' : isSafe ? '7.4 BAR' : '5.2 BAR'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Coprocessor:</span>
                        <strong className="text-amber-800 font-bold">Q2 144Hz</strong>
                      </div>
                    </div>
                  </div>

                  {/* iQOO 13 Flagship Phone Mockup with Mobile Player Controls */}
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

        {/* Bottom Technical Specifications Strip */}
        <div className="mt-8 p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-800" />
            <span className="text-slate-900 font-bold text-[11px]">
              TARGET INFRASTRUCTURE: Municipal Water Station 04 (Modbus TCP / EPANET Hydrodynamics)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>NPU: <strong className="text-slate-900">18ms Air-Gapped</strong></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Physics: <strong className="text-slate-900">EPANET / WNTR 144Hz</strong></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
              <span>Gate: <strong className="text-slate-900">3D Ultrasonic Biometric</strong></span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
