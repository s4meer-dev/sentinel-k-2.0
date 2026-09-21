import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import type { ValidationPhase } from '../types/sentinel';
import { AlertTriangle, Zap, Server, Gauge, CheckCircle2, Play, Pause, ShieldCheck, Cpu } from 'lucide-react';

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
  showControls = true,
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

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  const chipParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const chipParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);

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

  const getCalloutStatus = () => {
    switch (phase) {
      case 'INCOMING':
        return 'SENDER UNVERIFIED (SIGNAL SPOOF)';
      case 'EXTRACTING':
        return 'EXTRACTING EVIDENCE // 94% URGENCY';
      case 'CYBER_CHECK':
        return 'CYBER PASS // LOGIC VALID';
      case 'PHYSICAL_SIM':
        return 'TWIN REJECT // 11.4 BAR PRESSURE FAULT';
      case 'REPLAN':
      case 'APPROVED':
        return 'REPLANNED ACTION READY (7.4 BAR SAFE)';
    }
  };

  return (
    <div className={`flex flex-col items-center select-none relative ${className}`}>
      
      {/* 3D Phone Container with Floating Callout Chips */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative perspective-[1400px] py-4 cursor-grab active:cursor-grabbing"
      >
        <div className="absolute -bottom-8 inset-x-6 h-20 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-[#F0B31C]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        {/* Floating Callout Chip 1: NPU Evidence Parser */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden 2xl:flex absolute -left-40 top-24 z-30 flex-col items-end pointer-events-none"
        >
          <div className="bg-[#0D111A]/95 border border-cyan-500/40 rounded-xl p-3 shadow-2xl text-right backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-cyan-400 uppercase font-bold tracking-wider block flex items-center justify-end gap-1">
              <Cpu className="w-2.5 h-2.5" />
              iQOO 13 // FIELD NPU ENGINE
            </span>
            <span className="text-xs font-mono-code font-black text-white mt-0.5 block">
              {getCalloutStatus()}
            </span>
          </div>
          <div className="flex items-center mt-1 mr-4">
            <div className="w-14 h-px bg-cyan-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
          </div>
        </motion.div>

        {/* Floating Callout Chip 2: Office Kit Link */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden 2xl:flex absolute -right-40 bottom-36 z-30 flex-col items-start pointer-events-none"
        >
          <div className="flex items-center mb-1 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_8px_rgba(240,179,28,0.8)]" />
            <div className="w-14 h-px bg-[#F0B31C]/60" />
          </div>
          <div className="bg-[#0D111A]/95 border border-[#F0B31C]/40 rounded-xl p-3 shadow-2xl text-left backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-[#F0B31C] uppercase font-bold tracking-wider block flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5" />
              OFFICE KIT // PEER BRIDGE
            </span>
            <span className="text-xs font-mono-code font-black text-white mt-0.5 block">
              SECURE LAB HANDOFF
            </span>
          </div>
        </motion.div>

        {/* Realistic Smartphone Chassis with Ultra-Slim Flagship Bezels */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[320px] sm:w-[350px] md:w-[370px] h-[670px] sm:h-[720px] rounded-[48px] p-[5px] bg-gradient-to-b from-[#1F2937] via-[#111827] to-[#07090E] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.35)] transition-shadow duration-500"
        >
          <div className="absolute inset-0 rounded-[48px] border border-white/[0.12] pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[47px] border border-black/80 pointer-events-none" />

          {/* Side Buttons */}
          <div className="absolute -left-[3px] top-[140px] w-[3px] h-[48px] bg-zinc-600 rounded-l-sm border-l border-white/20 shadow-xs" />
          <div className="absolute -left-[3px] top-[198px] w-[3px] h-[48px] bg-zinc-600 rounded-l-sm border-l border-white/20 shadow-xs" />
          <div className="absolute -right-[3px] top-[165px] w-[3px] h-[65px] bg-[#F0B31C] rounded-r-sm border-r border-[#F5BE30] shadow-[0_0_12px_rgba(240,179,28,0.5)]" />

          {/* Minimal Earpiece */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-14 h-0.5 bg-zinc-600 rounded-full z-30 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-[0.5px] bg-zinc-500" />
          </div>

          {/* Edge-to-Edge Inner Display Screen with Slim Bezel */}
          <div className="relative w-full h-full rounded-[44px] bg-[#07090E] overflow-hidden border border-white/10 shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]">
            {/* Front Camera Punch-hole */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#030508] border border-slate-700/60 z-30 flex items-center justify-center pointer-events-none shadow-xs">
              <div className="w-1 h-1 rounded-full bg-black flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-cyan-400/80" />
              </div>
            </div>

            <PhoneScreen phase={phase} onSelectPhase={onSelectPhase} />

            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 45%, transparent 75%)`,
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      </div>

      {showControls && (
        <div className="mt-6 flex flex-col items-center gap-3 z-20 w-full max-w-xl">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#0B0F17]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => onSelectPhase('INCOMING')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'INCOMING'
                  ? 'bg-amber-600 text-white shadow-md scale-102'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-amber-300" />
              <span>01 DISPATCH</span>
            </button>

            <button
              onClick={() => onSelectPhase('EXTRACTING')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'EXTRACTING'
                  ? 'bg-cyan-600 text-white shadow-md scale-102'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-white/5'
              }`}
            >
              <Zap className="w-3 h-3 text-cyan-300" />
              <span>02 EVIDENCE</span>
            </button>

            <button
              onClick={() => onSelectPhase('CYBER_CHECK')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'CYBER_CHECK'
                  ? 'bg-blue-600 text-white shadow-md scale-102'
                  : 'text-slate-400 hover:text-blue-300 hover:bg-white/5'
              }`}
            >
              <Server className="w-3 h-3 text-blue-300" />
              <span>03 CYBER CHECK</span>
            </button>

            <button
              onClick={() => onSelectPhase('PHYSICAL_SIM')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'PHYSICAL_SIM'
                  ? 'bg-rose-600 text-white shadow-md scale-102'
                  : 'text-slate-400 hover:text-rose-300 hover:bg-white/5'
              }`}
            >
              <Gauge className="w-3 h-3 text-rose-300" />
              <span>04 PHYSICAL TWIN</span>
            </button>

            <button
              onClick={() => onSelectPhase('REPLAN')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'REPLAN' || phase === 'APPROVED'
                  ? 'bg-emerald-600 text-white shadow-md scale-102'
                  : 'text-slate-400 hover:text-emerald-300 hover:bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
              <span>05 REPLAN &amp; APPROVE</span>
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-[#F0B31C] border-[#F0B31C] text-[#07090E] font-black shadow-[0_0_15px_rgba(240,179,28,0.4)]'
                : 'bg-[#0B0F17] border-white/10 text-slate-300 hover:text-white hover:bg-white/5 shadow-xs'
            }`}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-[#07090E]" /> : <Play className="w-3 h-3 fill-current text-[#F0B31C]" />}
            <span>{isPlaying ? 'VALIDATION LIFECYCLE ACTIVE (4.0s CYCLE)' : 'RUN INTERACTIVE VALIDATION TOUR'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
