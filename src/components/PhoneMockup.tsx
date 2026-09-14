import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import type { ConnectivityState } from '../types/connectivity';
import { Radio, AlertTriangle, Zap, CheckCircle2, MapPin, Play, Pause } from 'lucide-react';

interface PhoneMockupProps {
  connectivityState: ConnectivityState;
  onSelectState: (state: ConnectivityState) => void;
  className?: string;
  showControls?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  connectivityState,
  onSelectState,
  className = '',
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const states: ConnectivityState[] = ['CONNECTED', 'DEGRADING', 'ACTION', 'RECOVERED', 'MEMORY'];
    let idx = states.indexOf(connectivityState);
    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      onSelectState(states[idx]);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying, connectivityState, onSelectState]);

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
    switch (connectivityState) {
      case 'CONNECTED':
        return 'n78 · 3.5GHz (STABLE)';
      case 'DEGRADING':
        return 'CELL EDGE FLUX (-114 dBm)';
      case 'ACTION':
        return 'BAND RE-EVALUATION';
      case 'RECOVERED':
        return 'NR ATTACH LOCKED';
      case 'MEMORY':
        return 'LIBRARY HISTORIC: 82%';
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
        <div className="absolute -bottom-8 inset-x-6 h-16 bg-blue-600/20 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-[#F0B31C]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        {/* Floating Callout Chip 1 */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden md:flex absolute -left-28 top-20 z-30 flex-col items-end pointer-events-none"
        >
          <div className="bg-white/95 border border-blue-500/30 rounded-xl p-2.5 shadow-lg text-right backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-blue-600 uppercase font-bold tracking-wider block">
              iQOO // SNAPDRAGON MODEM-RF
            </span>
            <span className="text-xs font-mono-code font-bold text-slate-900 mt-0.5 block">
              {getCalloutStatus()}
            </span>
          </div>
          <div className="flex items-center mt-1 mr-4">
            <div className="w-10 h-px bg-blue-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          </div>
        </motion.div>

        {/* Floating Callout Chip 2 */}
        <motion.div
          style={{ x: chipParallaxX, y: chipParallaxY }}
          className="hidden md:flex absolute -right-28 bottom-32 z-30 flex-col items-start pointer-events-none"
        >
          <div className="flex items-center mb-1 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_8px_rgba(240,179,28,0.8)]" />
            <div className="w-10 h-px bg-[#F0B31C]/60" />
          </div>
          <div className="bg-white/95 border border-[#F0B31C]/60 rounded-xl p-2.5 shadow-lg text-left backdrop-blur-md">
            <span className="text-[8px] font-mono-code text-amber-700 uppercase font-bold tracking-wider block">
              iQOO // 360° SURROUND ANTENNA
            </span>
            <span className="text-xs font-mono-code font-bold text-slate-900 mt-0.5 block">
              SMART CELLULAR HARNESS
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
          className="relative w-[320px] sm:w-[350px] md:w-[370px] h-[670px] sm:h-[720px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#1F2633] via-[#101522] to-[#080B12] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.25)] transition-shadow duration-500"
        >
          <div className="absolute inset-0 rounded-[50px] border border-white/[0.12] pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[49px] border border-black/80 pointer-events-none" />

          <div className="absolute -left-[3px] top-[140px] w-[3px] h-[48px] bg-zinc-600 rounded-l-sm border-l border-white/20 shadow-xs" />
          <div className="absolute -left-[3px] top-[198px] w-[3px] h-[48px] bg-zinc-600 rounded-l-sm border-l border-white/20 shadow-xs" />

          <div className="absolute -right-[3px] top-[165px] w-[3px] h-[65px] bg-[#F0B31C] rounded-r-sm border-r border-[#F5BE30] shadow-[0_0_12px_rgba(240,179,28,0.5)]" />

          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-800 rounded-full border border-white/10 z-30 flex items-center justify-center">
            <div className="w-12 h-[0.5px] bg-zinc-600" />
          </div>

          <div className="relative w-full h-full rounded-[42px] bg-[#080B12] overflow-hidden border-[3px] border-[#0A0D15] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#07090E] border border-zinc-700 z-30 flex items-center justify-center pointer-events-none shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-black flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-500" />
              </div>
            </div>

            <PhoneScreen connectivityState={connectivityState} onSelectState={onSelectState} />

            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 45%, transparent 75%)`,
              }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            />
          </div>
        </motion.div>
      </div>

      {showControls && (
        <div className="mt-6 flex flex-col items-center gap-2.5 z-20 w-full max-w-lg">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-black/[0.08] backdrop-blur-xl shadow-lg">
            <button
              onClick={() => onSelectState('CONNECTED')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                connectivityState === 'CONNECTED'
                  ? 'bg-blue-600 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Radio className="w-3 h-3 text-blue-300" />
              <span>01 CONNECTED</span>
            </button>

            <button
              onClick={() => onSelectState('DEGRADING')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                connectivityState === 'DEGRADING'
                  ? 'bg-amber-600 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-amber-800 hover:bg-slate-100'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-amber-300" />
              <span>02 DEGRADING</span>
            </button>

            <button
              onClick={() => onSelectState('ACTION')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                connectivityState === 'ACTION'
                  ? 'bg-[#F0B31C] text-[#07090E] shadow-[0_0_15px_rgba(240,179,28,0.4)] scale-102 font-black'
                  : 'text-slate-600 hover:text-amber-800 hover:bg-slate-100'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>03 ACTION</span>
            </button>

            <button
              onClick={() => onSelectState('RECOVERED')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                connectivityState === 'RECOVERED'
                  ? 'bg-emerald-600 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
              <span>04 RECOVERED</span>
            </button>

            <button
              onClick={() => onSelectState('MEMORY')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all duration-200 cursor-pointer ${
                connectivityState === 'MEMORY'
                  ? 'bg-indigo-600 text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-indigo-800 hover:bg-slate-100'
              }`}
            >
              <MapPin className="w-3 h-3 text-indigo-300" />
              <span>05 MEMORY</span>
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-[#F0B31C] border-[#F0B31C] text-[#07090E] font-black shadow-[0_0_15px_rgba(240,179,28,0.3)]'
                : 'bg-white border-black/[0.08] text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
            }`}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-[#07090E]" /> : <Play className="w-3 h-3 fill-current text-[#F0B31C]" />}
            <span>{isPlaying ? 'iQOO DEMO TOUR ACTIVE (3.8s CYCLE)' : 'PLAY AUTOMATIC PRODUCT TOUR'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
