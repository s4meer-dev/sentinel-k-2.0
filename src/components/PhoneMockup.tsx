import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import type { ValidationPhase } from '../types/sentinel';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Radio
} from 'lucide-react';

interface PhoneMockupProps {
  phase: ValidationPhase;
  onSelectPhase: (phase: ValidationPhase) => void;
  className?: string;
  showControls?: boolean;
}

const PHASES: ValidationPhase[] = ['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'];

const PHASE_LABELS: Record<ValidationPhase, string> = {
  INCOMING: '01 SPOOF INTERCEPT',
  EXTRACTING: '02 NPU INTENT PARSER',
  CYBER_CHECK: '03 SCADA CYBER GATE',
  PHYSICAL_SIM: '04 EPANET HYDRO TWIN',
  REPLAN: '05 CRITIC SAFE REPLAN',
  APPROVED: '05 BIOMETRIC SIGNED'
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  phase,
  onSelectPhase,
  className = '',
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [prevPhase, setPrevPhase] = useState(phase);

  if (prevPhase !== phase) {
    setPrevPhase(phase);
    setProgressPercent(0);
  }

  const currentIdx = useMemo(() => {
    return phase === 'APPROVED' ? 4 : PHASES.indexOf(phase);
  }, [phase]);

  // Framer Mobile Player Autoplay Timer Loop (4.5s per slide)
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const DURATION_MS = 4500;
    const INTERVAL_MS = 50;
    const stepIncrement = (INTERVAL_MS / DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 100) {
          const nextIdx = (currentIdx + 1) % PHASES.length;
          onSelectPhase(PHASES[nextIdx]);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, currentIdx, onSelectPhase]);

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
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handlePrev = () => {
    const prevIdx = (currentIdx - 1 + PHASES.length) % PHASES.length;
    onSelectPhase(PHASES[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % PHASES.length;
    onSelectPhase(PHASES[nextIdx]);
  };

  // iQOO Monster Halo Ambient Backlight Color Mapping
  const haloColor = useMemo(() => {
    switch (phase) {
      case 'INCOMING':
        return 'rgba(245, 158, 11, 0.35)'; // Amber
      case 'EXTRACTING':
        return 'rgba(59, 130, 246, 0.35)'; // Blue
      case 'CYBER_CHECK':
        return 'rgba(16, 185, 129, 0.35)'; // Emerald
      case 'PHYSICAL_SIM':
        return 'rgba(239, 68, 68, 0.55)'; // Danger Red
      case 'REPLAN':
      case 'APPROVED':
        return 'rgba(16, 185, 129, 0.40)'; // Safe Green
    }
  }, [phase]);

  return (
    <div className={`flex flex-col items-center select-none relative ${className}`}>
      
      {/* 3D Phone Chassis Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative perspective-[1400px] py-1 cursor-grab active:cursor-grabbing"
      >
        {/* iQOO 13 Monster Halo RGB Ambient Backlight */}
        <motion.div 
          animate={{
            backgroundColor: haloColor,
            scale: phase === 'PHYSICAL_SIM' ? [1, 1.08, 1] : 1,
          }}
          transition={{
            duration: phase === 'PHYSICAL_SIM' ? 0.8 : 0.4,
            repeat: phase === 'PHYSICAL_SIM' ? Infinity : 0
          }}
          className="absolute -top-6 inset-x-4 h-[380px] blur-[70px] rounded-full pointer-events-none -z-10 opacity-70 transition-colors duration-500"
        />

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
            <PhoneScreen 
              phase={phase} 
              onSelectPhase={onSelectPhase} 
              isPlaying={isPlaying && !isHovered}
              progressPercent={progressPercent}
            />

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

      {/* Framer-Inspired Mobile Player Playback Control Dock */}
      {showControls && (
        <div className="mt-4 flex flex-col items-center gap-2 z-20 w-full max-w-[340px]">
          
          <div className="w-full p-2 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex items-center justify-between gap-2 text-xs font-mono-code">
            
            {/* Prev / Play / Next Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-lg bg-[#F4F4F0] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                title="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-lg bg-[#090D15] hover:bg-slate-800 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-2xs"
                title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current text-[#F0B31C]" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-lg bg-[#F4F4F0] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                title="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Current Slide Info */}
            <div className="flex-1 min-w-0 px-2 text-left">
              <div className="text-[10px] font-black text-[#090D15] truncate">
                {PHASE_LABELS[phase]}
              </div>
              <div className="text-[8px] text-slate-500 flex items-center gap-1 font-bold">
                <span>STAGE 0{currentIdx + 1} / 05</span>
                {isPlaying && !isHovered && (
                  <span className="flex items-center gap-0.5 text-emerald-600">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                    <span>AUTOPLAY</span>
                  </span>
                )}
                {isHovered && isPlaying && (
                  <span className="text-amber-700 font-semibold">[PAUSED]</span>
                )}
              </div>
            </div>

            {/* Reset Tour Button */}
            <button
              onClick={() => {
                onSelectPhase('INCOMING');
                setProgressPercent(0);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg text-slate-500 hover:text-black hover:bg-[#F4F4F0] transition-colors cursor-pointer"
              title="Restart Tour from 01"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center justify-between w-full px-2 text-[9px] font-mono-code text-slate-400">
            <span>TAP LEFT/RIGHT TO NAVIGATE</span>
            <span className="flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 text-[#F0B31C]" />
              <span>MONSTER HALO SYNCED</span>
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
