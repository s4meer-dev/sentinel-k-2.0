import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  BatteryCharging,
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Cpu, 
  ShieldAlert, 
  Fingerprint, 
  Radio, 
  Server, 
  Gauge, 
  Activity, 
  AudioWaveform,
  Volume2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FileCode2
} from 'lucide-react';
import type { ValidationPhase } from '../types/sentinel';

interface PhoneScreenProps {
  phase: ValidationPhase;
  onSelectPhase?: (phase: ValidationPhase) => void;
  isPlaying?: boolean;
  progressPercent?: number;
}

const PHASES: ValidationPhase[] = ['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'];

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ 
  phase,
  onSelectPhase,
  progressPercent = 0
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [hasBiometricSigned, setHasBiometricSigned] = useState(false);

  const currentIdx = phase === 'APPROVED' ? 4 : PHASES.indexOf(phase);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIdx - 1 + PHASES.length) % PHASES.length;
    onSelectPhase?.(PHASES[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIdx + 1) % PHASES.length;
    onSelectPhase?.(PHASES[nextIdx]);
  };

  const getIslandData = () => {
    switch (phase) {
      case 'INCOMING':
        return {
          icon: <AlertTriangle className="w-3 h-3 text-amber-400 animate-pulse" />,
          title: 'UNVERIFIED DISPATCH',
          pill: '8.9 URGENCY',
          pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          titleColor: 'text-amber-200',
        };
      case 'EXTRACTING':
        return {
          icon: <Cpu className="w-3 h-3 text-blue-400 animate-spin" />,
          title: '45 TOPS NPU PARSER',
          pill: '18ms SLM',
          pillClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          titleColor: 'text-blue-200',
        };
      case 'CYBER_CHECK':
        return {
          icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
          title: 'CYBER GATE: VALID',
          pill: 'CRC 0x9B4E',
          pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          titleColor: 'text-emerald-200',
        };
      case 'PHYSICAL_SIM':
        return {
          icon: <ShieldAlert className="w-3 h-3 text-red-400 animate-bounce" />,
          title: '11.4 BAR OVERPRESSURE',
          pill: 'HARD REJECT',
          pillClass: 'bg-red-500/30 text-red-300 border-red-500/50',
          titleColor: 'text-red-200',
        };
      case 'REPLAN':
        return {
          icon: <Zap className="w-3 h-3 text-[#F0B31C] animate-pulse" />,
          title: 'CRITIC REPLAN READY',
          pill: '7.4 BAR SAFE',
          pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          titleColor: 'text-amber-200',
        };
      case 'APPROVED':
        return {
          icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />,
          title: 'BIOMETRIC SIGNED',
          pill: 'VALVE 02 ARMED',
          pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          titleColor: 'text-emerald-200',
        };
    }
  };

  const island = getIslandData();

  return (
    <div className="relative w-full h-full bg-[#FAFAF8] text-[#090D15] flex flex-col justify-between select-none overflow-hidden font-sans">
      
      {/* 1. Camera Punch-Hole — Dead-Centered at Top Edge */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black ring-1 ring-slate-800 z-50 flex items-center justify-center shadow-inner pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#020617] flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-500/80 shadow-[0_0_2px_rgba(59,130,246,0.9)]" />
        </div>
      </div>

      {/* 2. OriginOS 5 Status Bar with Centered Clearance for Camera */}
      <div className="relative z-30 pt-1.5 pb-1 px-3 bg-[#FBFBFA] border-b border-black/[0.04]">
        
        {/* System Bar Flanking the Center Camera */}
        <div className="flex justify-between items-center text-[10px] font-mono-code px-1 mb-1 text-slate-800">
          <div className="flex items-center gap-1.5 font-black tracking-tight text-[#090D15]">
            <span>14:28</span>
            <span className="text-[7.5px] px-1 py-0.2 rounded bg-red-600 text-white font-black">5G</span>
          </div>
          
          {/* Clearance for the centered punch hole */}
          <div className="w-6 h-3" />

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[8px] text-amber-800 font-black">
              <Radio className="w-2.5 h-2.5 text-[#F0B31C]" />
              <span>Q2</span>
            </div>
            <Wifi className="w-3 h-3 text-slate-800" />
            <div className="flex items-center gap-0.5 text-[#090D15] font-black text-[9px]">
              <span>96%</span>
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Origin Island Capsule: Center-Mounted Below Punch Hole */}
        <motion.div 
          layout
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          className="mx-auto rounded-full bg-[#090D15] text-white px-3 py-1 flex items-center justify-between gap-2 max-w-[245px] shadow-md border border-white/10 cursor-pointer"
          onClick={() => {
            const nextIdx = (currentIdx + 1) % PHASES.length;
            onSelectPhase?.(PHASES[nextIdx]);
          }}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            {island.icon}
            <span className={`text-[9px] font-mono-code font-bold truncate ${island.titleColor}`}>
              {island.title}
            </span>
          </div>

          <span className={`text-[7.5px] font-mono-code font-black px-1.5 py-0.2 rounded-full border shrink-0 ${island.pillClass}`}>
            {island.pill}
          </span>
        </motion.div>

        {/* Story Progress Segments (Framer Mobile Player Style) */}
        <div className="mt-1.5 px-0.5 flex items-center gap-1">
          {PHASES.map((p, idx) => {
            const isCompleted = idx < currentIdx;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={p}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPhase?.(p);
                }}
                className="flex-1 h-1 rounded-full bg-black/10 overflow-hidden cursor-pointer relative"
                title={`Stage 0${idx + 1}`}
              >
                <div 
                  className={`h-full rounded-full transition-all duration-150 ${
                    isCompleted 
                      ? 'w-full bg-[#090D15]' 
                      : isCurrent 
                      ? 'bg-[#F0B31C]' 
                      : 'w-0'
                  }`}
                  style={{
                    width: isCompleted ? '100%' : isCurrent ? `${Math.max(8, progressPercent)}%` : '0%'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Field Copilot Enclave Identity Header */}
      <div className="px-3.5 py-1.5 flex justify-between items-center border-b border-black/[0.05] bg-white/90">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#090D15] text-[#F0B31C] text-[8px] font-black flex items-center justify-center font-mono-code border border-black/10">
            SK
          </div>
          <div>
            <div className="text-[7.5px] font-mono-code text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <span>STAGE 0{currentIdx + 1} / 05</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[9.5px] font-black text-[#090D15]">WATER SECTOR // NODE 04</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[8px] font-mono-code px-2 py-0.5 rounded-full bg-[#F2F2EC] text-slate-800 border border-black/[0.06] font-bold">
          <Activity className="w-2.5 h-2.5 text-emerald-600" />
          <span>SCADA LINKED</span>
        </div>
      </div>

      {/* 4. Main Operational Diagnostic Body with Story Tap Zones */}
      <div className="relative px-3.5 py-2 flex-1 flex flex-col justify-center space-y-2 text-xs overflow-hidden">
        
        {/* Invisible Story Tap Zones for Previous / Next */}
        <button 
          onClick={handlePrev} 
          className="absolute left-0 top-0 bottom-0 w-8 z-20 flex items-center justify-start pl-1 opacity-0 hover:opacity-100 transition-opacity text-slate-400 hover:text-black cursor-pointer"
          title="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 bg-white/90 rounded-full shadow-xs" />
        </button>

        <button 
          onClick={handleNext} 
          className="absolute right-0 top-0 bottom-0 w-8 z-20 flex items-center justify-end pr-1 opacity-0 hover:opacity-100 transition-opacity text-slate-400 hover:text-black cursor-pointer"
          title="Next Slide"
        >
          <ChevronRight className="w-4 h-4 bg-white/90 rounded-full shadow-xs" />
        </button>

        <AnimatePresence mode="wait">
          
          {/* Phase 01: Incoming Dispatch */}
          {phase === 'INCOMING' && (
            <motion.div
              key="p-incoming"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 shadow-2xs">
                <div className="flex items-center justify-between text-[9.5px] font-mono-code text-amber-950 font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    DISPATCH INTERCEPTED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-200 text-amber-950 border border-amber-400 text-[7.5px] font-black">
                    UNVERIFIED
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code leading-relaxed font-semibold space-y-0.5">
                  <div>CLAIMED: <strong className="text-black font-black">SUPERVISOR REYNOLDS</strong></div>
                  <div>VOICE CLONE SUSPECT: <strong className="text-red-700 font-black">71% SIMILARITY</strong></div>
                  <div>COERCIVE URGENCY: <strong className="text-amber-900 font-black">8.9 / 10</strong></div>
                </div>
              </div>

              {/* Audio Waveform & Equalizer Animation */}
              <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
                <div className="flex items-center justify-between text-[8px] font-mono-code text-slate-600 uppercase font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <AudioWaveform className="w-3 h-3 text-[#F0B31C]" />
                    DISPATCH AUDIO STREAM
                  </span>
                  <button 
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="flex items-center gap-0.5 text-[7.5px] text-amber-800 font-bold hover:underline cursor-pointer"
                  >
                    <Volume2 className="w-2.5 h-2.5" />
                    <span>{isPlayingAudio ? '48kHz LIVE' : 'MUTED'}</span>
                  </button>
                </div>
                
                {/* Simulated Equalizer Bars */}
                <div className="flex items-end justify-between h-6 px-1.5 py-1 bg-slate-900 rounded-md mb-2 gap-0.5">
                  {[40, 75, 90, 60, 85, 95, 50, 70, 85, 65, 45, 90, 75, 55].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={isPlayingAudio ? { height: [`${h * 0.4}%`, `${h}%`, `${h * 0.3}%`] } : { height: '30%' }}
                      transition={{ repeat: Infinity, duration: 0.6 + (i * 0.07), ease: 'easeInOut' }}
                      className="flex-1 bg-gradient-to-t from-amber-500 to-[#F0B31C] rounded-2xs"
                    />
                  ))}
                </div>

                <div className="text-[9.5px] font-black text-slate-950 font-mono-code italic bg-[#F4F4F0] p-2 rounded-lg border border-black/[0.06]">
                  &ldquo;Ramp Pump 4 to 850 RPM immediately. Water surge inbound.&rdquo;
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 02: NPU Evidence Parsing */}
          {phase === 'EXTRACTING' && (
            <motion.div
              key="p-extracting"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-300 shadow-2xs">
                <div className="flex items-center justify-between text-[9.5px] font-mono-code text-blue-950 font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                    SNAPDRAGON NPU (45 TOPS)
                  </span>
                  <span className="text-[7.5px] px-1.5 py-0.2 rounded bg-blue-200 text-blue-950 border border-blue-400 font-black">
                    18ms SLM
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Parsed Action:</span>
                    <strong className="text-black font-black">SET PUMP_04 = 850 RPM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervisor Roster:</span>
                    <strong className="text-red-700 font-black">OFF DUTY (LEAVE)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Cloud Leakage:</span>
                    <strong className="text-emerald-700 font-black">0.00 KB (AIR-GAPPED)</strong>
                  </div>
                </div>
              </div>

              {/* Hex Modbus Inspector */}
              <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
                <div className="flex items-center justify-between text-[8px] font-mono-code text-slate-600 uppercase font-black mb-1">
                  <span className="flex items-center gap-1">
                    <FileCode2 className="w-3 h-3 text-blue-600" />
                    EXTRACTED MODBUS FRAME
                  </span>
                  <span className="text-blue-700 font-bold">PLC #04</span>
                </div>
                <div className="text-[9px] font-mono-code text-slate-950 bg-[#F4F4F0] p-2 rounded-lg border border-black/[0.06] space-y-0.5">
                  <div className="text-slate-500 font-bold">HEX: [00 01] [00 00] [00 06] [01] [06] [9C 8C]</div>
                  <div>WRITE_REG(ADDR: 40012, VAL: 0x0352)</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 03: Cyber Validation Pass */}
          {phase === 'CYBER_CHECK' && (
            <motion.div
              key="p-cyber"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-300 shadow-2xs">
                <div className="flex items-center justify-between text-[9.5px] font-mono-code text-emerald-950 font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    CYBER GATE: 100% VALID
                  </span>
                  <span className="text-[7.5px] px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-950 border border-emerald-400 font-black">
                    LOGIC PASS
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Modbus Syntax:</span>
                    <strong className="text-emerald-900 font-black">VALID CRC (0x9B4E)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Register 40012:</span>
                    <strong className="text-emerald-900 font-black">PERMITTED RANGE (0-1000)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 shadow-2xs">
                <div className="text-[9px] font-mono-code text-amber-950 font-black flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-600" />
                  <span>THE KINETIC BLINDSPOT:</span>
                </div>
                <div className="text-[9.5px] text-slate-900 font-mono-code mt-0.5 font-semibold leading-relaxed">
                  Traditional SCADA firewalls approved this write. They cannot see forward water hammer consequences. Simulating in EPANET twin...
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 04: Physical Simulation Violation with SVG Pressure Curve */}
          {phase === 'PHYSICAL_SIM' && (
            <motion.div
              key="p-physical"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-red-50/90 border border-red-300 shadow-2xs">
                <div className="flex items-center justify-between text-[9.5px] font-mono-code text-red-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                    HYDRAULIC TWIN: VIOLATION
                  </span>
                  <span className="text-[7.5px] px-1.5 py-0.2 rounded bg-red-200 text-red-950 border border-red-400 font-black">
                    HARD REJECT
                  </span>
                </div>
                
                {/* SVG Pressure Surge Chart */}
                <div className="h-15 w-full bg-white rounded-lg p-1.5 border border-red-200 relative mb-1.5">
                  <div className="absolute top-1 left-2 text-[7.5px] font-mono-code font-bold text-red-700 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5" />
                    <span>SURGE TRAJECTORY (T+42s)</span>
                  </div>
                  <div className="absolute top-1 right-2 text-[7.5px] font-mono-code font-bold text-red-600">
                    11.4 BAR PEAK
                  </div>

                  <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible pt-2.5">
                    {/* Limit Line 9.2 Bar */}
                    <line x1="0" y1="20" x2="160" y2="20" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="5" y="18" fill="#EF4444" fontSize="5" fontWeight="bold">9.2 BAR LIMIT</text>
                    
                    {/* Spike Curve */}
                    <path
                      d="M 0 32 Q 40 30, 80 28 T 110 22 T 130 5 T 145 10 T 160 18"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    {/* Danger Point */}
                    <circle cx="130" cy="5" r="3" fill="#DC2626" className="animate-ping" />
                    <circle cx="130" cy="5" r="2" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1" />
                  </svg>
                </div>

                <div className="text-[9.5px] text-slate-900 font-mono-code space-y-0.5 font-semibold">
                  <div className="flex justify-between">
                    <span>Relief Valve 02:</span>
                    <strong className="text-red-700 font-black">0% (LOCKED CLOSED)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Peak Hydraulic Head:</span>
                    <strong className="text-red-700 font-black">11.4 BAR (SURPASSES 9.2)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-red-200 shadow-2xs text-[9px] font-mono-code text-red-900 font-semibold">
                💥 Catastrophic rupture averted at Node 14. Autonomous replan ready.
              </div>
            </motion.div>
          )}

          {/* Phase 05: Critic Replan & Approval */}
          {(phase === 'REPLAN' || phase === 'APPROVED') && (
            <motion.div
              key="p-replan"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-300 shadow-2xs">
                <div className="flex items-center justify-between text-[9.5px] font-mono-code text-emerald-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CRITIC SAFE REPLAN
                  </span>
                  <span className="text-[7.5px] px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-950 border border-emerald-400 font-black">
                    7.4 BAR SAFE
                  </span>
                </div>
                
                {/* Safe Stabilized SVG Curve */}
                <div className="h-13 w-full bg-white rounded-lg p-1.5 border border-emerald-200 relative mb-1.5">
                  <div className="absolute top-1 left-2 text-[7.5px] font-mono-code font-bold text-emerald-700">
                    SAFE HYDRAULIC GRADIENT
                  </div>
                  <div className="absolute top-1 right-2 text-[7.5px] font-mono-code font-bold text-emerald-700">
                    7.4 BAR PEAK
                  </div>

                  <svg viewBox="0 0 160 35" className="w-full h-full overflow-visible pt-1.5">
                    <line x1="0" y1="12" x2="160" y2="12" stroke="#EF4444" strokeWidth="0.8" strokeDasharray="3 2" />
                    <text x="5" y="10" fill="#EF4444" fontSize="4.5">9.2 BAR THRESHOLD</text>
                    
                    {/* Safe Curve */}
                    <path
                      d="M 0 28 Q 40 26, 80 24 T 120 18 T 160 20"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2"
                    />
                    <circle cx="120" cy="18" r="2" fill="#059669" />
                  </svg>
                </div>

                <div className="text-[9.5px] text-slate-900 font-mono-code space-y-0.5 font-semibold">
                  <div className="flex justify-between">
                    <span>1. Pre-open Valve 02:</span>
                    <strong className="text-emerald-900 font-black">40% MODULATION</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Staged Ramp:</span>
                    <strong className="text-emerald-900 font-black">3x STEPS TO 620 RPM</strong>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-black/[0.08] shadow-2xs text-[9px] font-mono-code text-slate-700 font-semibold">
                ✓ EPANET verified: Peak 7.4 bar. Water hammer eliminated.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Ultrasonic Fingerprint Touch Area / Action Trigger */}
      <div className="px-3.5 pb-2 pt-0.5">
        {phase === 'PHYSICAL_SIM' ? (
          <button
            onClick={() => onSelectPhase?.('REPLAN')}
            className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono-code text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <span>TRIGGER CRITIC REPLAN</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        ) : (phase === 'REPLAN' && !hasBiometricSigned) ? (
          <button
            onClick={() => {
              setHasBiometricSigned(true);
              onSelectPhase?.('APPROVED');
            }}
            className="group relative w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono-code text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer border border-emerald-400/40"
          >
            <div className="relative flex items-center justify-center">
              <Fingerprint className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
              <span className="absolute -inset-1 rounded-full border border-white/50 animate-ping" />
            </div>
            <span>TOUCH ULTRASONIC SENSOR TO SIGN</span>
          </button>
        ) : (phase === 'APPROVED' || hasBiometricSigned) ? (
          <div className="w-full py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-center font-mono-code text-[9.5px] font-black flex items-center justify-center gap-1.5 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>DISPATCH COMMITTED // OPERATOR #049</span>
          </div>
        ) : (
          <div className="w-full py-2 rounded-xl bg-[#F0F0EC] border border-black/[0.05] text-slate-700 text-center font-mono-code text-[9.5px] font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] animate-pulse" />
            <span>AUTONOMOUS NPU VERIFICATION ACTIVE</span>
          </div>
        )}
      </div>

      {/* 6. Minimal Terminal Navigation Dock */}
      <div className="px-2 py-1.5 bg-white border-t border-black/[0.06] flex items-center justify-around text-[8px] font-mono-code text-slate-500">
        <button 
          onClick={() => onSelectPhase?.('INCOMING')}
          className={`px-2 py-1 rounded-lg flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'INCOMING' ? 'text-amber-800 font-bold bg-amber-50' : 'hover:text-black'
          }`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>Dispatch</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('EXTRACTING')}
          className={`px-2 py-1 rounded-lg flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'EXTRACTING' ? 'text-blue-800 font-bold bg-blue-50' : 'hover:text-black'
          }`}
        >
          <Cpu className="w-3 h-3" />
          <span>Evidence</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('CYBER_CHECK')}
          className={`px-2 py-1 rounded-lg flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'CYBER_CHECK' ? 'text-emerald-800 font-bold bg-emerald-50' : 'hover:text-black'
          }`}
        >
          <Server className="w-3 h-3" />
          <span>Cyber</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('PHYSICAL_SIM')}
          className={`px-2 py-1 rounded-lg flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'PHYSICAL_SIM' ? 'text-red-800 font-bold bg-red-50' : 'hover:text-black'
          }`}
        >
          <Gauge className="w-3 h-3" />
          <span>Twin</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('REPLAN')}
          className={`px-2 py-1 rounded-lg flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'REPLAN' || phase === 'APPROVED' ? 'text-emerald-800 font-bold bg-emerald-50' : 'hover:text-black'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Replan</span>
        </button>
      </div>

    </div>
  );
};
