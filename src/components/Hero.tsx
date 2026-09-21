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

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-14 md:pt-30 md:pb-20 overflow-hidden bg-[#FBFBFA] border-b border-black/[0.06]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/[0.08] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-slate-200/[0.3] blur-[160px] pointer-events-none -z-10" />
      
      {/* Millimeter Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Flagship Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Product Narrative & Hardware Trust Engine (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top iQOO Hardware Badge with BMW M Tricolor Accent */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs text-xs font-mono-code text-slate-800 w-fit mb-5">
              <div className="flex items-center h-2.5 overflow-hidden rounded-xs border border-black/10">
                <div className="w-1.5 h-full bg-[#0066B1]" />
                <div className="w-1.5 h-full bg-[#002C6C]" />
                <div className="w-1.5 h-full bg-[#E2231A]" />
              </div>
              <span className="font-bold tracking-wider text-[#090D15]">iQOO 13 × SENTINEL-K</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-semibold text-[11px]">FLAGSHIP FIELD DEFENSE ENCLAVE</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.04]">
              THE COMMAND ISN&apos;T TRUSTED. <br />
              <span className="text-[#090D15] relative inline-block mt-1">
                <span className="relative z-10">THE CONSEQUENCE IS VERIFIED.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[#F0B31C]/35 -z-10 rounded-xs" />
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
              Sentinel-K turns the <strong className="text-[#090D15]">iQOO 13</strong> into an air-gapped field security enclave — intercepting spoofed authority dispatches, parsing unstructured audio via the <strong className="text-[#090D15]">45 TOPS Snapdragon NPU</strong>, and simulating forward physical hydraulic impact before SCADA commands can touch physical equipment.
            </p>

            {/* 4 Authentic iQOO Hardware Trust Chips */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 max-w-xl">
              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Snapdragon® 8 Elite</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">45 TOPS On-Device SLM (18ms)</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Radio className="w-4 h-4 text-[#F0B31C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Supercomputing Chip Q2</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">144Hz Kinetic Simulation Engine</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Layers className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Origin Island Enclave</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">Dynamic Morphing Alert Capsule</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2">
                <Fingerprint className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Ultrasonic Biometrics</div>
                  <div className="text-[9px] text-slate-500 font-mono-code">Sovereign Operator Signature</div>
                </div>
              </div>
            </div>

            {/* Interactive Validation Phase Pills */}
            <div className="mt-5 flex flex-col gap-1.5">
              <div className="text-[10px] font-mono-code text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C]" />
                <span>INTERACTIVE VALIDATION PHASE:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs max-w-xl">
                {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((p, idx) => {
                  const labels = ['01 DISPATCH', '02 EVIDENCE', '03 CYBER', '04 TWIN', '05 REPLAN'];
                  const isSelected = currentPhase === p || (p === 'REPLAN' && currentPhase === 'APPROVED');
                  return (
                    <button
                      key={p}
                      onClick={() => onPhaseSelect(p)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#090D15] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                      }`}
                    >
                      {labels[idx]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#090D15] hover:bg-slate-800 text-white font-mono-code font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer active:scale-98"
              >
                <span>EXPLORE 8-STAGE PIPELINE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F0B31C]" />
              </button>

              <button
                onClick={onKineticClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-black/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer active:scale-98"
              >
                <Play className="w-3.5 h-3.5 text-amber-700 fill-current" />
                <span>SEE REJECT &rarr; REPLAN DEMO</span>
              </button>
            </div>

          </div>

          {/* Right Column: Authentic iQOO 13 Flagship Showcase & View Modes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* View Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs mb-3 z-20">
              <button
                onClick={() => setViewMode('PHONE')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'PHONE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>iQOO 13 TERMINAL</span>
              </button>

              <button
                onClick={() => setViewMode('EVIDENCE')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
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
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-mono-code font-bold transition-all cursor-pointer ${
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
                  className="w-full flex flex-col items-center"
                >
                  <PhoneMockup 
                    phase={currentPhase}
                    onSelectPhase={onPhaseSelect}
                    showControls={false}
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
                  className="w-full max-w-sm"
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
                  className="w-full max-w-sm"
                >
                  <DigitalTwinHeroVisual phase={currentPhase} />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Bottom Technical Specifications Strip */}
        <div className="mt-10 p-3.5 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-800" />
            <span className="text-slate-900 font-bold text-[11px]">
              TARGET: Municipal Water Facility (SCADA / Modbus TCP / EPANET Hydrodynamics)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>NPU: <strong className="text-slate-900">18ms On-Device</strong></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Physics: <strong className="text-slate-900">EPANET / WNTR</strong></span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
              <span>Gate: <strong className="text-slate-900">Ultrasonic Biometric Sign</strong></span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
