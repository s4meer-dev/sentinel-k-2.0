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
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#07090E] border-b border-white/[0.08]"
    >
      {/* Industrial Obsidian Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/[0.07] blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.05] blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] blur-[200px] pointer-events-none -z-10" />
      
      {/* Precision Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Tagline Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121826]/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] text-xs font-mono-code text-cyan-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            <span className="font-bold tracking-wider">iQOO HACKATHON 2026 SUBMISSION</span>
            <span className="text-white/20">|</span>
            <span className="text-[#F0B31C] font-semibold">FIELD SECURITY COPILOT FOR CYBER-PHYSICAL SYSTEMS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-black tracking-tight text-white uppercase leading-[1.05]"
          >
            THE COMMAND ISN&apos;T TRUSTED. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              THE CONSEQUENCE IS VERIFIED.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Sentinel-K protects critical-infrastructure field operators from dangerous operational instructions by combining 
            <span className="text-cyan-300 font-semibold"> human evidence intelligence</span>, 
            <span className="text-emerald-300 font-semibold"> cyber command validation</span>, 
            <span className="text-[#F0B31C] font-semibold"> physical digital-twin simulation</span>, and 
            <span className="text-white font-semibold"> human approval</span> before any high-impact action touches reality.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090E] font-mono-code font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] cursor-pointer"
            >
              <span>EXPLORE 8-STAGE PIPELINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onKineticClick}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#121826] hover:bg-[#1A2234] text-white border border-white/20 font-mono-code text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#F0B31C]" />
              <span>SEE REJECT &rarr; REPLAN DEMO</span>
            </button>
          </motion.div>
        </div>

        {/* 3-Column Visual Rig: Phone Node + Evidence Stream + Digital Twin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left Column: iQOO Smartphone Field Node (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between px-2 mb-2 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
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
        <div className="mt-12 p-4 rounded-xl bg-[#0B0F19]/80 border border-white/[0.08] backdrop-blur-md flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              TARGET SYSTEM: Municipal Water Filtration Facility (SCADA / PLC / WNTR)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              NPU Evidence Extraction: <strong className="text-white ml-1">On-Device</strong>
            </span>
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              Kinetic Engine: <strong className="text-white ml-1">EPANET Hydrodynamic Twin</strong>
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              Final Authority: <strong className="text-white ml-1">Human Field Operator</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
