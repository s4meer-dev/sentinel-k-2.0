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
  Server, 
  Activity, 
  AudioWaveform,
  FileCode2,
  Lock
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
  const [prevPhase, setPrevPhase] = useState(phase);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [hasBiometricSigned, setHasBiometricSigned] = useState(false);

  if (prevPhase !== phase) {
    setPrevPhase(phase);
    if (phase !== 'REPLAN' && phase !== 'APPROVED') {
      setHasBiometricSigned(false);
    }
  }

  const currentIdx = phase === 'APPROVED' ? 4 : PHASES.indexOf(phase);

  return (
    <div className="relative w-full h-full bg-[#F4F2EC] text-[#1A1712] flex flex-col justify-between select-none overflow-hidden font-sans">
      
      {/* 1. Camera Punch-Hole — Centered at Top Edge with Refined Bezel */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] ring-1 ring-black/30 z-50 flex items-center justify-center pointer-events-none shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0A0D14] flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
        </div>
      </div>

      {/* 2. Top Navigation Area with Generous Padding */}
      <div className="relative z-30 pt-4 pb-2 px-5 bg-[#F4F2EC]/90 backdrop-blur-md border-b border-black/[0.04]">
        
        {/* Status Bar Flanking Camera */}
        <div className="flex justify-between items-center text-[10px] tracking-tight font-medium text-[#1A1712]/80">
          <span className="font-semibold text-[#1A1712]">14:28</span>
          
          {/* Centered clearance gap for camera */}
          <div className="w-8 h-2 pointer-events-none" />

          <div className="flex items-center gap-1.5 text-[9px]">
            <div className="flex items-center gap-0.5 text-emerald-700 font-semibold text-[8px] bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/60">
              <Lock className="w-2 h-2" />
              <span>ENCLAVE</span>
            </div>
            <Wifi className="w-2.5 h-2.5 text-[#1A1712]/70" />
            <div className="flex items-center gap-0.5 font-semibold text-[#1A1712]">
              <span>96%</span>
              <BatteryCharging className="w-3 h-3 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Minimal Subscrr-Style Top Header Bar */}
        <div className="mt-2.5 flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-wider font-semibold text-[#7C766C]">
              Field Copilot · Node 04
            </div>
            <div className="text-xs font-semibold text-[#1A1712] tracking-tight">
              {phase === 'INCOMING' && '01 // Dispatch Intercept'}
              {phase === 'EXTRACTING' && '02 // NPU Intent Structuring'}
              {phase === 'CYBER_CHECK' && '03 // SCADA Cyber Gate'}
              {phase === 'PHYSICAL_SIM' && '04 // EPANET Hydraulic Twin'}
              {(phase === 'REPLAN' || phase === 'APPROVED') && '05 // Sovereign Biometric Sign'}
            </div>
          </div>

          <span className="text-[9px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-white/80 border border-black/[0.06] text-[#1A1712] shadow-2xs">
            0{currentIdx + 1} / 05
          </span>
        </div>

        {/* Minimal Story Progress Indicator (5 Clean Segments) */}
        <div className="mt-2 flex items-center gap-1">
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
                className="flex-1 h-1 rounded-full bg-black/[0.08] overflow-hidden cursor-pointer relative"
                title={`Stage 0${idx + 1}`}
              >
                <div 
                  className={`h-full rounded-full transition-all duration-150 ${
                    isCompleted || isCurrent ? 'bg-[#1A1712]' : 'w-0'
                  }`}
                  style={{
                    width: isCompleted ? '100%' : isCurrent ? `${Math.max(10, progressPercent)}%` : '0%'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Minimal Content Stage (Divided Clean Flow) */}
      <div className="relative px-4 py-3 flex-1 flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* Phase 01: Incoming Dispatch */}
          {phase === 'INCOMING' && (
            <motion.div
              key="p-incoming"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5"
            >
              {/* Primary Card */}
              <div className="p-4 rounded-[24px] bg-white/95 border border-black/[0.06] shadow-[0_8px_20px_-6px_rgba(38,34,28,0.06)]">
                <div className="flex items-center justify-between gap-1 pb-2 border-b border-black/[0.05]">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>UNVERIFIED DISPATCH</span>
                  </span>
                  <span className="text-[8.5px] font-mono-code text-[#7C766C] font-semibold shrink-0">
                    8.9 URGENCY
                  </span>
                </div>

                <div className="mt-3 text-xs sm:text-[13px] font-medium tracking-tight text-[#1A1712] leading-snug">
                  &ldquo;Ramp Pump 4 to 850 RPM immediately. Water surge inbound.&rdquo;
                </div>

                {/* Divided Data Rows */}
                <div className="mt-3.5 pt-2.5 border-t border-black/[0.05] space-y-1.5 text-[10px] tracking-tight">
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Caller Identity</span>
                    <strong className="text-[#1A1712] font-semibold">Supervisor Reynolds</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Voice Analysis</span>
                    <strong className="text-red-700 font-semibold">71% Clone Match (Anomaly)</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Shift Roster</span>
                    <strong className="text-amber-900 font-semibold">Off-Duty (Annual Leave)</strong>
                  </div>
                </div>
              </div>

              {/* Minimal Waveform Bar */}
              <div 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="p-2.5 rounded-[18px] bg-white/80 hover:bg-white border border-black/[0.05] flex items-center justify-between gap-3 shadow-2xs cursor-pointer transition-colors"
                title="Tap to toggle audio stream"
              >
                <div className="flex items-center gap-2 text-[9px] font-medium text-[#7C766C]">
                  <AudioWaveform className="w-3.5 h-3.5 text-[#1A1712]" />
                  <span>Acoustic Stream</span>
                </div>

                {/* Minimal Equalizer */}
                <div className="flex items-end h-4 gap-0.5 px-2">
                  {[40, 80, 95, 60, 90, 50, 85, 65, 45, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={isPlayingAudio ? { height: [`${h * 0.35}%`, `${h}%`, `${h * 0.25}%`] } : { height: '30%' }}
                      transition={{ repeat: Infinity, duration: 0.6 + (i * 0.08), ease: 'easeInOut' }}
                      className="w-1 bg-[#1A1712] rounded-full"
                    />
                  ))}
                </div>

                <span className="text-[8.5px] font-mono-code text-[#7C766C]">48kHz</span>
              </div>
            </motion.div>
          )}

          {/* Phase 02: NPU Evidence Structuring */}
          {phase === 'EXTRACTING' && (
            <motion.div
              key="p-extracting"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5"
            >
              <div className="p-4 rounded-[24px] bg-white/95 border border-black/[0.06] shadow-[0_8px_20px_-6px_rgba(38,34,28,0.06)]">
                <div className="flex items-center justify-between gap-1 pb-2 border-b border-black/[0.05]">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-medium text-blue-900 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    <Cpu className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>ON-DEVICE SLM</span>
                  </span>
                  <span className="text-[8.5px] font-mono-code text-blue-800 font-bold shrink-0">
                    18ms LATENCY
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[9px] uppercase tracking-wider text-[#7C766C] font-semibold block">
                    Structured Kinetic Intent
                  </span>
                  <div className="text-sm font-semibold tracking-tight text-[#1A1712] mt-0.5">
                    SET_SPEED (Pump 04) &rarr; 850 RPM
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-black/[0.05] space-y-1.5 text-[10px] tracking-tight">
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Target Hardware</span>
                    <strong className="text-[#1A1712] font-semibold">PLC Station 04</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Compiled Modbus</span>
                    <strong className="text-[#1A1712] font-mono-code font-semibold">Reg 40012 = 0x0352</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Cloud Egress</span>
                    <strong className="text-emerald-700 font-semibold">0 KB (Air-Gapped)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-[18px] bg-white/80 border border-black/[0.05] flex items-center justify-between text-[9px] font-mono-code text-[#7C766C] shadow-2xs">
                <span className="flex items-center gap-1.5 text-[#1A1712] font-medium">
                  <FileCode2 className="w-3 h-3 text-blue-600" />
                  <span>Modbus Frame</span>
                </span>
                <span className="text-[#1A1712]">[00 01 00 00 00 06 01 06 9C 4C]</span>
              </div>
            </motion.div>
          )}

          {/* Phase 03: Cyber Validation */}
          {phase === 'CYBER_CHECK' && (
            <motion.div
              key="p-cyber"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5"
            >
              <div className="p-4 rounded-[24px] bg-white/95 border border-black/[0.06] shadow-[0_8px_20px_-6px_rgba(38,34,28,0.06)]">
                <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.05]">
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-medium text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>CYBER LOGIC PASS</span>
                  </span>
                  <span className="text-[9px] font-mono-code text-emerald-700 font-bold">
                    CRC 0x9B4E
                  </span>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-semibold tracking-tight text-[#1A1712]">
                    Packet Syntax &amp; Permissions Valid
                  </div>
                  <p className="mt-1 text-[10.5px] text-[#7C766C] leading-relaxed">
                    Standard OT firewalls approve this command. Register 40012 is within allowed range (0–1000).
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-black/[0.05] space-y-1.5 text-[10px] tracking-tight">
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Modbus Syntax</span>
                    <strong className="text-emerald-700 font-semibold">100% Valid Frame</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Role Permissions</span>
                    <strong className="text-emerald-700 font-semibold">Authorized Level 3</strong>
                  </div>
                </div>
              </div>

              {/* Subscrr Dilemma Pill */}
              <div className="p-3 rounded-[20px] bg-amber-50/80 border border-amber-200/80 text-[10px] text-amber-900 leading-relaxed shadow-2xs">
                <div className="flex items-center gap-1.5 font-semibold mb-0.5">
                  <Zap className="w-3 h-3 text-amber-600" />
                  <span>The Kinetic Dilemma</span>
                </div>
                <span>Cyber defenses are blind to water hammer physics. Passing to EPANET twin for hydrodynamic verification...</span>
              </div>
            </motion.div>
          )}

          {/* Phase 04: Physical Twin Simulation Overpressure */}
          {phase === 'PHYSICAL_SIM' && (
            <motion.div
              key="p-physical"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5"
            >
              <div className="p-4 rounded-[24px] bg-white/95 border border-red-200/80 shadow-[0_8px_20px_-6px_rgba(239,68,68,0.1)]">
                <div className="flex items-center justify-between pb-2 border-b border-black/[0.05]">
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-medium text-red-900 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                    <ShieldAlert className="w-3 h-3 text-red-600 animate-pulse" />
                    <span>OVERPRESSURE DETECTED</span>
                  </span>
                  <span className="text-[9px] font-mono-code text-red-700 font-bold">
                    T+42s RUPTURE
                  </span>
                </div>

                {/* Subscrr Big Metric */}
                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-semibold tracking-tighter text-red-600">
                      11.4 <span className="text-base font-medium">BAR</span>
                    </div>
                    <div className="text-[9.5px] text-[#7C766C] tracking-tight">
                      Safety Threshold: 9.2 Bar (Exceeded by +2.2)
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[9px] font-semibold border border-red-300">
                    HARD REJECT
                  </span>
                </div>

                {/* Minimal SVG Waveform */}
                <div className="mt-2 h-14 w-full bg-[#F4F2EC]/60 rounded-xl p-1.5 relative border border-red-200/60 overflow-hidden">
                  <svg viewBox="0 0 160 38" className="w-full h-full overflow-visible">
                    {/* Limit Line */}
                    <line x1="0" y1="18" x2="160" y2="18" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="4" y="15" fill="#EF4444" fontSize="4.5" fontWeight="600">9.2 BAR LIMIT</text>
                    
                    {/* Spike Curve */}
                    <path
                      d="M 0 30 Q 40 28, 80 26 T 115 18 T 132 4 T 148 10 T 160 16"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <circle cx="132" cy="4" r="2.5" fill="#DC2626" />
                  </svg>
                </div>

                <div className="mt-3 pt-2 border-t border-black/[0.05] flex justify-between text-[10px] tracking-tight text-[#7C766C]">
                  <span>Root Cause</span>
                  <strong className="text-red-700 font-semibold">Valve 02 is Locked Closed (0%)</strong>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 05: Critic Replan & Biometric Sign */}
          {(phase === 'REPLAN' || phase === 'APPROVED') && (
            <motion.div
              key="p-replan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2.5"
            >
              <div className="p-4 rounded-[24px] bg-white/95 border border-emerald-200/80 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.1)]">
                <div className="flex items-center justify-between pb-2 border-b border-black/[0.05]">
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-medium text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>PHYSICALLY VERIFIED PLAN</span>
                  </span>
                  <span className="text-[9px] font-mono-code text-emerald-700 font-bold">
                    SAFETY VERIFIED
                  </span>
                </div>

                {/* Subscrr Big Metric */}
                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-semibold tracking-tighter text-emerald-700">
                      7.4 <span className="text-base font-medium">BAR</span>
                    </div>
                    <div className="text-[9.5px] text-[#7C766C] tracking-tight">
                      Safe Gradient (Under 9.2 Bar Limit)
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-semibold border border-emerald-300">
                    SURVIVABLE
                  </span>
                </div>

                {/* Divided Action Steps */}
                <div className="mt-3 pt-2.5 border-t border-black/[0.05] space-y-1.5 text-[10px] tracking-tight">
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>1. Pre-open Valve 02</span>
                    <strong className="text-emerald-800 font-semibold">40% Modulation</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>2. Staged Ramp</span>
                    <strong className="text-emerald-800 font-semibold">3 Intervals to 620 RPM</strong>
                  </div>
                  <div className="flex justify-between items-center text-[#7C766C]">
                    <span>Dispatched PLC</span>
                    <strong className="text-[#1A1712] font-semibold">Station 04 Protected</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 4. Action Area (Tactile Biometric Sensor or Clean State) */}
      <div className="px-4 pb-3 pt-1">
        {phase === 'PHYSICAL_SIM' ? (
          <button
            onClick={() => onSelectPhase?.('REPLAN')}
            className="w-full py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-medium text-xs tracking-tight flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <span>Trigger Safety Replan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (phase === 'REPLAN' && !hasBiometricSigned) ? (
          <button
            onClick={() => {
              setHasBiometricSigned(true);
              onSelectPhase?.('APPROVED');
            }}
            className="group relative w-full py-2.5 px-4 rounded-2xl bg-[#1A1712] hover:bg-black text-white font-medium text-xs tracking-tight flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer border border-white/20"
          >
            <div className="relative flex items-center justify-center">
              <Fingerprint className="w-4 h-4 text-[#F0B31C] group-hover:scale-110 transition-transform" />
            </div>
            <span>Authorize Safe Execution</span>
          </button>
        ) : (phase === 'APPROVED' || hasBiometricSigned) ? (
          <div className="w-full py-2 px-3 rounded-2xl bg-emerald-50/90 border border-emerald-300/80 text-emerald-950 font-medium text-[10px] shadow-2xs flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cryptographically Committed</span>
            </span>
            <span className="text-[8.5px] font-mono-code font-bold text-emerald-700">ED25519</span>
          </div>
        ) : (
          <div className="w-full py-2 rounded-2xl bg-white/70 border border-black/[0.05] text-[#7C766C] text-center text-[10px] font-medium flex items-center justify-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Autonomous Invariant Monitor Active</span>
          </div>
        )}
      </div>

      {/* 5. Minimal Terminal Navigation Dock */}
      <div className="px-4 py-2 bg-white/80 backdrop-blur-md border-t border-black/[0.04] flex items-center justify-between text-[9px] text-[#7C766C] font-medium">
        <button 
          onClick={() => onSelectPhase?.('INCOMING')}
          className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer transition-colors ${
            phase === 'INCOMING' ? 'text-[#1A1712] font-semibold bg-black/[0.05]' : 'hover:text-[#1A1712]'
          }`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>Dispatch</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('EXTRACTING')}
          className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer transition-colors ${
            phase === 'EXTRACTING' ? 'text-[#1A1712] font-semibold bg-black/[0.05]' : 'hover:text-[#1A1712]'
          }`}
        >
          <Cpu className="w-3 h-3" />
          <span>NPU</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('CYBER_CHECK')}
          className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer transition-colors ${
            phase === 'CYBER_CHECK' ? 'text-[#1A1712] font-semibold bg-black/[0.05]' : 'hover:text-[#1A1712]'
          }`}
        >
          <Server className="w-3 h-3" />
          <span>Cyber</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('PHYSICAL_SIM')}
          className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer transition-colors ${
            phase === 'PHYSICAL_SIM' ? 'text-red-700 font-semibold bg-red-50' : 'hover:text-[#1A1712]'
          }`}
        >
          <Activity className="w-3 h-3" />
          <span>Twin</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('REPLAN')}
          className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer transition-colors ${
            phase === 'REPLAN' || phase === 'APPROVED' ? 'text-emerald-800 font-semibold bg-emerald-50' : 'hover:text-[#1A1712]'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Replan</span>
        </button>
      </div>

    </div>
  );
};
