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
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying, phase, onSelectPhase]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['15%', '85%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['15%', '85%']), springConfig);

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
      
      {/* 3D Phone Chassis */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative perspective-[1400px] py-1 cursor-grab active:cursor-grabbing"
      >
        {/* Soft Ambient Ground Shadow */}
        <div className="absolute -bottom-5 inset-x-6 h-12 bg-slate-400/25 blur-xl rounded-full pointer-events-none -z-10" />

        {/* Smartphone Chassis with Authentic iQOO 13 Ultra-Slim Bezel */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[295px] sm:w-[320px] md:w-[335px] h-[580px] sm:h-[610px] rounded-[44px] p-[3px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] transition-shadow duration-300"
        >
          {/* Beveled Chamfer Borders */}
          <div className="absolute inset-0 rounded-[44px] border border-white/70 pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[43px] border border-black/15 pointer-events-none" />

          {/* Antenna Breaks on Aluminum Rail */}
          <div className="absolute top-[75px] -left-[3px] w-[3px] h-[2.5px] bg-slate-500/70 pointer-events-none" />
          <div className="absolute bottom-[75px] -left-[3px] w-[3px] h-[2.5px] bg-slate-500/70 pointer-events-none" />
          <div className="absolute top-[75px] -right-[3px] w-[3px] h-[2.5px] bg-slate-500/70 pointer-events-none" />
          <div className="absolute bottom-[75px] -right-[3px] w-[3px] h-[2.5px] bg-slate-500/70 pointer-events-none" />

          {/* Side Volume Buttons */}
          <div className="absolute -left-[3px] top-[125px] w-[3px] h-[40px] bg-slate-400 rounded-l-sm border-l border-white/50 shadow-2xs" />
          <div className="absolute -left-[3px] top-[175px] w-[3px] h-[40px] bg-slate-400 rounded-l-sm border-l border-white/50 shadow-2xs" />

          {/* Signature iQOO Textured Kinetic Orange Power Button */}
          <div className="absolute -right-[3px] top-[148px] w-[3px] h-[52px] bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-r-sm border-r border-[#B45309] shadow-xs flex flex-col justify-between py-1.5">
            <div className="w-full h-0.5 bg-black/25" />
            <div className="w-full h-0.5 bg-black/25" />
            <div className="w-full h-0.5 bg-black/25" />
          </div>

          {/* BMW M Motorsport Tricolor Accent Tag (iQOO Legend Heritage) */}
          <div className="absolute -bottom-1.5 right-6 flex items-center h-1.5 overflow-hidden rounded-xs shadow-2xs border border-white/80 z-30 pointer-events-none">
            <div className="w-2.5 h-full bg-[#0066B1]" />
            <div className="w-2.5 h-full bg-[#002C6C]" />
            <div className="w-2.5 h-full bg-[#E2231A]" />
          </div>

          {/* Minimal Earpiece Mesh */}
          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-500 rounded-full z-30 flex items-center justify-center pointer-events-none">
            <div className="w-6 h-[0.5px] bg-slate-300" />
          </div>

          {/* Inner Display Screen with 1.36mm Symmetrical Bezel */}
          <div className="relative w-full h-full rounded-[41px] bg-[#FAFAF8] overflow-hidden border border-black/[0.10] shadow-[inset_0_0_8px_rgba(0,0,0,0.05)]">
            <PhoneScreen phase={phase} onSelectPhase={onSelectPhase} />

            {/* Realistic Screen Glare */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 45%, transparent 75%)`,
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
