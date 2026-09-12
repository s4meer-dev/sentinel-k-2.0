import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import type { ThermalState } from '../types/telemetry';
import { Flame, Sparkles, AlertTriangle, ShieldCheck, Play, Pause } from 'lucide-react';

interface PhoneMockupProps {
  thermalState: ThermalState;
  onSelectState: (state: ThermalState) => void;
  className?: string;
  showControls?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  thermalState,
  onSelectState,
  className = '',
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-tour sequence controller
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (!isPlaying) return;
    const states: ThermalState[] = ['NORMAL', 'HEATING', 'THERMAL_EVENT', 'FORENSIC_ANALYSIS'];
    let idx = states.indexOf(thermalState);
    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      onSelectState(states[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, thermalState, onSelectState]);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for natural tactile feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  // Parallax float for callout chips
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

  // Dynamic temperature display for callout chip
  const getCalloutTemp = () => {
    switch (thermalState) {
      case 'NORMAL':
        return '41.8°C (iQOO OPTIMAL)';
      case 'HEATING':
        return '43.4°C (+2.1°C FLUX)';
      case 'THERMAL_EVENT':
      case 'FORENSIC_ANALYSIS':
        return '44.3°C (TRIP LIMIT)';
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
        {/* Soft Natural Hardware Ground Shadow */}
        <div className="absolute -bottom-6 inset-x-8 h-10 bg-[#0A192F]/15 blur-2xl rounded-full pointer-events-none -z-10" />

        {/* Floating Callout Chip 1: iQOO SoC Cluster (Top-Left) */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden md:flex absolute -left-28 top-20 z-30 flex-col items-end pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md border border-[#1D4ED8]/20 rounded-xl p-2.5 shadow-lg text-right">
            <span className="text-[8px] font-mono-code text-[#1D4ED8] uppercase font-bold tracking-wider block">
              iQOO // SNAPDRAGON 8 GEN
            </span>
            <span className="text-xs font-mono-code font-bold text-[#0A192F] mt-0.5 block">
              {getCalloutTemp()}
            </span>
          </div>
          {/* Hairline connector pointer with blue dot */}
          <div className="flex items-center mt-1 mr-4">
            <div className="w-10 h-px bg-[#1D4ED8]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
          </div>
        </motion.div>

        {/* Floating Callout Chip 2: iQOO 6K VC (Bottom-Right) */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden md:flex absolute -right-28 bottom-32 z-30 flex-col items-start pointer-events-none"
        >
          {/* Hairline connector pointer with blue dot */}
          <div className="flex items-center mb-1 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] border border-black/40" />
            <div className="w-10 h-px bg-[#0A192F]/30" />
          </div>
          <div className="bg-white/95 backdrop-blur-md border border-[#0A192F]/15 rounded-xl p-2.5 shadow-lg text-left">
            <span className="text-[8px] font-mono-code text-[#0A192F]/70 uppercase font-bold tracking-wider block">
              iQOO 6K ULTRA VAPOR CHAMBER
            </span>
            <span className="text-xs font-mono-code font-bold text-[#0A192F] mt-0.5 block">
              DISSIPATION: Δ 0.1°C/s
            </span>
          </div>
        </motion.div>

        {/* Realistic Smartphone Chassis */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[320px] sm:w-[350px] md:w-[370px] h-[670px] sm:h-[720px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#2E3748] via-[#1A2232] to-[#0D1422] shadow-[0_25px_60px_-15px_rgba(10,25,47,0.22),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-shadow duration-500"
        >
          {/* Outer Chamfer Edge */}
          <div className="absolute inset-0 rounded-[50px] border border-white/[0.18] pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[49px] border border-black/60 pointer-events-none" />

          {/* Left Physical Buttons */}
          <div className="absolute -left-[3px] top-[140px] w-[3px] h-[48px] bg-zinc-500 rounded-l-sm border-l border-white/30 shadow-xs" />
          <div className="absolute -left-[3px] top-[198px] w-[3px] h-[48px] bg-zinc-500 rounded-l-sm border-l border-white/30 shadow-xs" />

          {/* Right Physical Button (Signature iQOO Brand Yellow Power Key) */}
          <div className="absolute -right-[3px] top-[165px] w-[3px] h-[65px] bg-[#F0B31C] rounded-r-sm border-r border-[#F5BE30] shadow-[0_0_8px_rgba(240,179,28,0.4)]" />

          {/* Top Speaker Earpiece Grille */}
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-700 rounded-full border border-white/15 z-30 flex items-center justify-center">
            <div className="w-12 h-[0.5px] bg-zinc-500" />
          </div>

          {/* Inner Screen Housing */}
          <div className="relative w-full h-full rounded-[42px] bg-[#FAF9F5] overflow-hidden border-[3px] border-[#0F172A] shadow-[inset_0_0_6px_rgba(0,0,0,0.4)]">
            
            {/* Front Camera Punch-hole */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0F172A] border border-zinc-700 z-30 flex items-center justify-center pointer-events-none shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A192F] flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#1D4ED8]" />
              </div>
            </div>

            {/* Dynamic Interactive Phone Screen Component */}
            <PhoneScreen thermalState={thermalState} onSelectState={onSelectState} />

            {/* Glossy Screen Glare Texture */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 45%, transparent 75%)`,
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      </div>

      {/* Hero Phone Interactive State Station Bar */}
      {showControls && (
        <div className="mt-6 flex flex-col items-center gap-2.5 z-20">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/95 border border-[#0A192F]/10 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => onSelectState('NORMAL')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                thermalState === 'NORMAL'
                  ? 'bg-[#1D4ED8] text-white shadow-md scale-102'
                  : 'text-[#0A192F]/70 hover:text-[#1D4ED8] hover:bg-blue-50/50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>01 NORMAL</span>
            </button>

            <button
              onClick={() => onSelectState('HEATING')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                thermalState === 'HEATING'
                  ? 'bg-[#D97706] text-white shadow-md scale-102 font-bold'
                  : 'text-[#0A192F]/70 hover:text-[#D97706] hover:bg-amber-50/50'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>02 HEATING</span>
            </button>

            <button
              onClick={() => onSelectState('THERMAL_EVENT')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                thermalState === 'THERMAL_EVENT'
                  ? 'bg-[#F0B31C] text-black shadow-[0_2px_12px_rgba(240,179,28,0.35)] scale-102 font-black border border-black/15'
                  : 'text-[#0A192F]/70 hover:text-black hover:bg-yellow-100/50'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>03 EVENT</span>
            </button>

            <button
              onClick={() => onSelectState('FORENSIC_ANALYSIS')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                thermalState === 'FORENSIC_ANALYSIS'
                  ? 'bg-[#0A192F] text-[#F0B31C] shadow-md scale-102 font-black border border-black/20'
                  : 'text-[#0A192F]/70 hover:text-[#1D4ED8] hover:bg-blue-50/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span>04 FORENSICS</span>
            </button>
          </div>

          {/* Auto Simulation Cycle Pill with iQOO Yellow button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-[#F0B31C] border-black/20 text-black font-black shadow-xs'
                : 'bg-white/90 border-[#0A192F]/10 text-[#0A192F]/80 hover:text-[#1D4ED8] hover:border-[#1D4ED8]/20 shadow-xs'
            }`}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-black" /> : <Play className="w-3 h-3 fill-current text-[#0A192F]" />}
            <span>{isPlaying ? 'iQOO AUTO-TOUR ACTIVE (4s INTERVAL)' : 'PLAY AUTOMATIC CINEMATIC TOUR'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
