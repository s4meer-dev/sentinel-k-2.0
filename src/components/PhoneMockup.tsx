import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import type { ValidationPhase } from '../types/sentinel';
import { AlertTriangle, Zap, Server, Gauge, CheckCircle2, Play, Pause } from 'lucide-react';

interface PhoneMockupProps {
  phase: ValidationPhase;
  onSelectPhase: (phase: ValidationPhase) => void;
  className?: string;
  showControls?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  phase,
  onSelectPhase,
  className = '',
  showControls = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const phases: ValidationPhase[] = ['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'];
    let idx = phases.indexOf(phase);
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      onSelectPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, phase, onSelectPhase]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 130, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={`flex flex-col items-center select-none relative ${className}`}>
      
      {/* 3D Phone Chassis Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative perspective-[1400px] py-1 cursor-grab active:cursor-grabbing"
      >
        {/* Soft Ambient Ground Shadow */}
        <div className="absolute -bottom-6 inset-x-8 h-14 bg-slate-400/20 blur-2xl rounded-full pointer-events-none -z-10" />

        {/* Smartphone Chassis — Replicating iQOO 13 Flagship Aluminum Rail & 1.36mm Bezel */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[295px] sm:w-[325px] md:w-[335px] h-[585px] sm:h-[615px] rounded-[46px] p-[3px] bg-gradient-to-b from-[#EAEAE6] via-[#D8D8D2] to-[#B8B8B2] shadow-[0_22px_60px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-shadow duration-300"
        >
          {/* Polished Diamond-Cut Bevels */}
          <div className="absolute inset-0 rounded-[46px] border border-white/80 pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[45px] border border-black/15 pointer-events-none" />

          {/* Dark Injection-Molded Antenna Breaks */}
          <div className="absolute top-[80px] -left-[3px] w-[3px] h-[3px] bg-slate-600/80 pointer-events-none" />
          <div className="absolute bottom-[80px] -left-[3px] w-[3px] h-[3px] bg-slate-600/80 pointer-events-none" />
          <div className="absolute top-[80px] -right-[3px] w-[3px] h-[3px] bg-slate-600/80 pointer-events-none" />
          <div className="absolute bottom-[80px] -right-[3px] w-[3px] h-[3px] bg-slate-600/80 pointer-events-none" />

          {/* Left Volume Rockers */}
          <div className="absolute -left-[3px] top-[130px] w-[3px] h-[42px] bg-slate-400 rounded-l-sm border-l border-white/60 shadow-2xs" />
          <div className="absolute -left-[3px] top-[182px] w-[3px] h-[42px] bg-slate-400 rounded-l-sm border-l border-white/60 shadow-2xs" />

          {/* Right Signature iQOO Textured Kinetic Orange Power Button */}
          <div className="absolute -right-[3px] top-[154px] w-[3px] h-[56px] bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FBBF24] rounded-r-sm border-r border-[#92400E] shadow-xs flex flex-col justify-between py-1.5 pointer-events-none">
            <div className="w-full h-0.5 bg-black/30" />
            <div className="w-full h-0.5 bg-black/30" />
            <div className="w-full h-0.5 bg-black/30" />
          </div>

          {/* BMW M Motorsport Tricolor Stripe Badge (iQOO Legend Heritage) */}
          <div className="absolute -bottom-2 right-8 flex items-center h-2 overflow-hidden rounded-xs shadow-xs border border-white/90 z-30 pointer-events-none">
            <div className="w-2.5 h-full bg-[#0066B1]" />
            <div className="w-2.5 h-full bg-[#002C6C]" />
            <div className="w-2.5 h-full bg-[#E2231A]" />
          </div>

          {/* Micro Stereo Earpiece Slit */}
          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-14 h-0.5 bg-slate-500 rounded-full z-30 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-[0.5px] bg-slate-300" />
          </div>

          {/* Inner Display Screen with Symmetrical 1.36mm Bezel */}
          <div className="relative w-full h-full rounded-[43px] bg-[#FAFAF8] overflow-hidden border border-black/[0.12] shadow-[inset_0_0_10px_rgba(0,0,0,0.06)]">
            <PhoneScreen phase={phase} onSelectPhase={onSelectPhase} />

            {/* Dynamic Glass Parallax Glare */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.03) 48%, transparent 75%)`,
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      </div>

      {/* Optional Phase Switcher Below Phone */}
      {showControls && (
        <div className="mt-4 flex flex-col items-center gap-2 z-20 w-full max-w-md">
          <div className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-xl bg-white border border-black/[0.06] shadow-xs text-xs font-mono-code">
            <button
              onClick={() => onSelectPhase('INCOMING')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                phase === 'INCOMING' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-slate-600 hover:text-black'
              }`}
            >
              <AlertTriangle className="w-3 h-3 inline mr-1 text-amber-600" />
              01 DISPATCH
            </button>
            <button
              onClick={() => onSelectPhase('EXTRACTING')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                phase === 'EXTRACTING' ? 'bg-blue-100 text-blue-900 font-bold' : 'text-slate-600 hover:text-black'
              }`}
            >
              <Zap className="w-3 h-3 inline mr-1 text-blue-600" />
              02 EVIDENCE
            </button>
            <button
              onClick={() => onSelectPhase('CYBER_CHECK')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                phase === 'CYBER_CHECK' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-600 hover:text-black'
              }`}
            >
              <Server className="w-3 h-3 inline mr-1 text-emerald-600" />
              03 CYBER
            </button>
            <button
              onClick={() => onSelectPhase('PHYSICAL_SIM')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                phase === 'PHYSICAL_SIM' ? 'bg-red-100 text-red-900 font-bold' : 'text-slate-600 hover:text-black'
              }`}
            >
              <Gauge className="w-3 h-3 inline mr-1 text-red-600" />
              04 TWIN
            </button>
            <button
              onClick={() => onSelectPhase('REPLAN')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                phase === 'REPLAN' || phase === 'APPROVED' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-600 hover:text-black'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 inline mr-1 text-emerald-600" />
              05 REPLAN
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-code bg-white border border-black/[0.08] text-slate-700 hover:text-black cursor-pointer shadow-2xs"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current text-[#F0B31C]" />}
            <span>{isPlaying ? 'PAUSE TOUR' : 'AUTO CYCLE PHASES'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
