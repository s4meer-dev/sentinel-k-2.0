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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  const chipParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [8, -8]), springConfig);
  const chipParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);

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
        className="relative perspective-[1400px] py-2 cursor-grab active:cursor-grabbing"
      >
        <div className="absolute -bottom-6 inset-x-8 h-16 bg-slate-300/40 blur-2xl rounded-full pointer-events-none -z-10" />

        {/* Floating Callout Chip 1: NPU Evidence Parser */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden 2xl:flex absolute -left-40 top-24 z-30 flex-col items-end pointer-events-none"
        >
          <div className="bg-white/95 border border-black/[0.08] rounded-xl p-3 shadow-md text-right backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-slate-500 uppercase font-bold tracking-wider block flex items-center justify-end gap-1">
              <Cpu className="w-2.5 h-2.5 text-blue-600" />
              iQOO 13 // FIELD NPU ENGINE
            </span>
            <span className="text-xs font-mono-code font-black text-slate-900 mt-0.5 block">
              {getCalloutStatus()}
            </span>
          </div>
          <div className="flex items-center mt-1 mr-4">
            <div className="w-14 h-px bg-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-xs" />
          </div>
        </motion.div>

        {/* Floating Callout Chip 2: Office Kit Link */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden 2xl:flex absolute -right-40 bottom-36 z-30 flex-col items-start pointer-events-none"
        >
          <div className="flex items-center mb-1 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-xs" />
            <div className="w-14 h-px bg-[#F0B31C]/80" />
          </div>
          <div className="bg-white/95 border border-black/[0.08] rounded-xl p-3 shadow-md text-left backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-amber-700 uppercase font-bold tracking-wider block flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
              OFFICE KIT // PEER BRIDGE
            </span>
            <span className="text-xs font-mono-code font-black text-slate-900 mt-0.5 block">
              SECURE LAB HANDOFF
            </span>
          </div>
        </motion.div>

        {/* Smartphone Chassis with Ultra-Slim Titanium Bezel */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[310px] sm:w-[340px] md:w-[360px] h-[640px] sm:h-[690px] rounded-[48px] p-[4px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.8)] transition-shadow duration-500"
        >
          <div className="absolute inset-0 rounded-[48px] border border-white/60 pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[47px] border border-black/15 pointer-events-none" />

          {/* Side Buttons */}
          <div className="absolute -left-[3px] top-[140px] w-[3px] h-[44px] bg-slate-400 rounded-l-sm border-l border-white/40 shadow-2xs" />
          <div className="absolute -left-[3px] top-[194px] w-[3px] h-[44px] bg-slate-400 rounded-l-sm border-l border-white/40 shadow-2xs" />
          <div className="absolute -right-[3px] top-[165px] w-[3px] h-[60px] bg-[#F0B31C] rounded-r-sm border-r border-[#E2A312] shadow-2xs" />

          {/* Minimal Earpiece */}
          <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-400 rounded-full z-30 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-[0.5px] bg-slate-300" />
          </div>

          {/* Inner Display Screen */}
          <div className="relative w-full h-full rounded-[44px] bg-[#FAFAF8] overflow-hidden border border-black/[0.08] shadow-[inset_0_0_8px_rgba(0,0,0,0.04)]">
            {/* Front Camera Punch-hole */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#030508] border border-slate-300 z-30 flex items-center justify-center pointer-events-none shadow-xs">
              <div className="w-1 h-1 rounded-full bg-black flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
              </div>
            </div>

            <PhoneScreen phase={phase} onSelectPhase={onSelectPhase} />

            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 45%, transparent 75%)`,
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      </div>

      {showControls && (
        <div className="mt-5 flex flex-col items-center gap-2.5 z-20 w-full max-w-lg">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
            <button
              onClick={() => onSelectPhase('INCOMING')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'INCOMING'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs'
                  : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-amber-600" />
              <span>01 DISPATCH</span>
            </button>

            <button
              onClick={() => onSelectPhase('EXTRACTING')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'EXTRACTING'
                  ? 'bg-blue-100 text-blue-900 border border-blue-300 shadow-2xs'
                  : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              <Zap className="w-3 h-3 text-blue-600" />
              <span>02 EVIDENCE</span>
            </button>

            <button
              onClick={() => onSelectPhase('CYBER_CHECK')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'CYBER_CHECK'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs'
                  : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              <Server className="w-3 h-3 text-emerald-600" />
              <span>03 CYBER</span>
            </button>

            <button
              onClick={() => onSelectPhase('PHYSICAL_SIM')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'PHYSICAL_SIM'
                  ? 'bg-red-100 text-red-900 border border-red-300 shadow-2xs'
                  : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              <Gauge className="w-3 h-3 text-red-600" />
              <span>04 TWIN</span>
            </button>

            <button
              onClick={() => onSelectPhase('REPLAN')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                phase === 'REPLAN' || phase === 'APPROVED'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs'
                  : 'text-slate-600 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>05 REPLAN</span>
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-[#F0B31C] border-[#F0B31C] text-[#090D15] font-black shadow-xs'
                : 'bg-white border-black/[0.08] text-slate-700 hover:text-black hover:bg-slate-50 shadow-2xs'
            }`}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current text-[#F0B31C]" />}
            <span>{isPlaying ? 'ACTIVE TOUR (4s INTERVAL)' : 'RUN INTERACTIVE VALIDATION TOUR'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
