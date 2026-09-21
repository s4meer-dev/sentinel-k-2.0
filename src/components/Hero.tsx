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
      className="relative min-h-screen pt-28 pb-16 md:pt-34 md:pb-24 overflow-hidden bg-[#FBFBFA] border-b border-black/[0.06]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/[0.10] blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-slate-200/[0.35] blur-[170px] pointer-events-none -z-10" />
      
      {/* Millimeter Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Flagship Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Product Narrative, Hardware Trust Chips & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top iQOO Hardware Badge with BMW M Tricolor Accent */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-2xs text-xs font-mono-code text-slate-800 w-fit mb-6"
            >
              {/* BMW M Motorsport Tricolor Stripe */}
              <div className="flex items-center h-2.5 overflow-hidden rounded-xs border border-black/10">
                <div className="w-1.5 h-full bg-[#0066B1]" />
                <div className="w-1.5 h-full bg-[#002C6C]" />
                <div className="w-1.5 h-full bg-[#E2231A]" />
              </div>

              <span className="font-bold tracking-wider text-[#090D15]">iQOO 13 × SENTINEL-K</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-semibold text-[11px]">FLAGSHIP DEFENSE ENGINE</span>
            </motion.div>

            {/* Main Punchy Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.05]"
            >
              THE COMMAND ISN&apos;T TRUSTED. <br />
              <span className="text-[#090D15] relative inline-block mt-1">
                <span className="relative z-10">THE CONSEQUENCE IS VERIFIED.</span>
                <span className="absolute inset-x-0 bottom-1.5 h-3.5 bg-[#F0B31C]/30 -z-10 rounded-sm" />
              </span>
            </motion.h1>

            {/* Editorial Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              Sentinel-K turns the <strong className="text-[#090D15]">iQOO 13 terminal</strong> into an air-gapped field security enclave. Intercepted operational voice dispatches are parsed on-device by the <strong className="text-[#090D15]">45 TOPS Snapdragon NPU</strong>, validated against deterministic cyber rules, and simulated through <strong className="text-[#090D15]">hydrodynamic digital twins</strong> before any valve or pump can move.
            </motion.p>

            {/* 4 Authentic iQOO Hardware Trust Chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-w-xl"
            >
              <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Snapdragon® 8 Elite</div>
                  <div className="text-[10px] text-slate-500 font-mono-code">45 TOPS On-Device SLM (18ms)</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2.5">
                <Radio className="w-4 h-4 text-[#F0B31C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Supercomputing Chip Q2</div>
                  <div className="text-[10px] text-slate-500 font-mono-code">144Hz Kinetic Simulation Engine</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Origin Island Enclave</div>
                  <div className="text-[10px] text-slate-500 font-mono-code">Real-Time Morphing Alert Capsule</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-start gap-2.5">
                <Fingerprint className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono-code font-bold text-[#090D15]">Ultrasonic Biometrics</div>
                  <div className="text-[10px] text-slate-500 font-mono-code">Sovereign Human Operator Signoff</div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Validation Phase Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-6 flex flex-col gap-2"
            >
              <div className="text-[11px] font-mono-code text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C]" />
                <span>SELECT OPERATIONAL VALIDATION PHASE:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs max-w-xl">
                {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((p, idx) => {
                  const labels = ['01 DISPATCH', '02 EVIDENCE', '03 CYBER', '04 TWIN', '05 REPLAN'];
                  const isSelected = currentPhase === p || (p === 'REPLAN' && currentPhase === 'APPROVED');
                  return (
                    <button
                      key={p}
                      onClick={() => onPhaseSelect(p)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#090D15] text-white shadow-xs'
                          : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
                      }`}
                    >
                      {labels[idx]}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#090D15] hover:bg-slate-800 text-white font-mono-code font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer active:scale-98"
              >
                <span>EXPLORE 8-STAGE PIPELINE</span>
                <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
              </button>

              <button
                onClick={onKineticClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-black/[0.08] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer active:scale-98"
              >
                <Play className="w-4 h-4 text-amber-700 fill-current" />
                <span>SEE REJECT &rarr; REPLAN DEMO</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Authentic iQOO 13 Flagship Showcase & View Modes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* View Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-2xs mb-4 z-20">
              <button
                onClick={() => setViewMode('PHONE')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'PHONE'
                    ? 'bg-[#090D15] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>iQOO 13 TERMINAL</span>
              </button>

              <button
                onClick={() => setViewMode('EVIDENCE')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
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
                  transition={{ duration: 0.25 }}
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
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-md"
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
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-md"
                >
                  <DigitalTwinHeroVisual phase={currentPhase} />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Bottom Technical Specifications Strip */}
        <div className="mt-14 p-4 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-800" />
            <span className="text-slate-900 font-bold">
              TARGET PLANT: Municipal Water Filtration Facility (SCADA / Modbus TCP / EPANET)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>NPU Latency: <strong className="text-slate-900">18ms On-Device</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Twin Solver: <strong className="text-slate-900">EPANET / WNTR</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
              <span>Safety Gate: <strong className="text-slate-900">Human Ultrasonic Signature</strong></span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
