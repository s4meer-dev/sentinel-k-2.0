import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Terminal, Cpu, Database, Eye } from 'lucide-react';
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

export const Hero: React.FC<HeroProps> = ({
  currentPhase,
  onPhaseSelect,
  onExploreClick,
  onKineticClick,
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FBFBFA] border-b border-black/[0.06]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/[0.12] blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-slate-200/[0.4] blur-[170px] pointer-events-none -z-10" />
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Tagline Banner */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-2xs text-xs font-mono-code text-slate-800 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
            <span className="font-bold tracking-wider text-[#090D15]">iQOO HACKATHON 2026 SUBMISSION</span>
            <span className="text-slate-300">/</span>
            <span className="text-amber-800 font-semibold text-[11px]">FIELD SECURITY COPILOT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.05]"
          >
            THE COMMAND ISN&apos;T TRUSTED. <br />
            <span className="text-[#090D15] relative inline-block mt-1">
              <span className="relative z-10">THE CONSEQUENCE IS VERIFIED.</span>
              <span className="absolute inset-x-0 bottom-1.5 h-3 bg-[#F0B31C]/30 -z-10 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Sentinel-K protects critical-infrastructure field operators from dangerous operational instructions by combining 
            <strong className="text-[#090D15]"> human evidence intelligence</strong>, 
            <strong className="text-[#090D15]"> cyber command validation</strong>, 
            <strong className="text-[#090D15]"> physical digital-twin simulation</strong>, and 
            <strong className="text-[#090D15]"> human approval</strong> before any high-impact action touches reality.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
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

        {/* 3-Column Visual Rig: Phone Node + Evidence Stream + Digital Twin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          
          {/* Left Column: iQOO Smartphone Field Node (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between px-2 mb-1.5 text-xs font-mono-code text-slate-500">
              <span className="flex items-center gap-1.5 text-[#090D15] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
                iQOO FIELD NODE
              </span>
              <span className="text-[11px] text-slate-500">OriginOS 5 Secure Enclave</span>
            </div>
            <PhoneMockup 
              phase={currentPhase}
              onSelectPhase={onPhaseSelect}
            />
          </div>

          {/* Center Column: Real-Time Evidence Stream Bus (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <EvidenceStreamVisual 
              currentPhase={currentPhase}
              onPhaseSelect={onPhaseSelect}
            />
          </div>

          {/* Right Column: Industrial Digital Twin Schematic (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <DigitalTwinHeroVisual phase={currentPhase} />
          </div>

        </div>

        {/* Bottom Industrial Status Bar */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-800" />
            <span className="text-slate-900 font-bold">
              TARGET SYSTEM: Municipal Water Filtration Facility (SCADA / PLC / WNTR)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-blue-700" />
              NPU Evidence Extraction: <strong className="text-slate-900 ml-1">On-Device</strong>
            </span>
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-amber-700" />
              Kinetic Engine: <strong className="text-slate-900 ml-1">EPANET Hydrodynamic Twin</strong>
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              Final Authority: <strong className="text-slate-900 ml-1">Human Field Operator</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
