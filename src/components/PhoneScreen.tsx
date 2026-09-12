import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Flame, 
  Gauge, 
  ShieldCheck, 
  Sparkles, 
  Wifi, 
  BatteryMedium 
} from 'lucide-react';
import type { ThermalState } from '../types/telemetry';

interface PhoneScreenProps {
  thermalState: ThermalState;
  onSelectState?: (state: ThermalState) => void;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ thermalState }) => {
  // Micro jitter for live telemetry realism
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJitter((Math.random() - 0.5) * 0.2);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  // Compute dynamic display values based on state with iQOO brand palette
  const getValues = () => {
    switch (thermalState) {
      case 'NORMAL':
        return {
          temp: (41.8 + jitter).toFixed(1),
          fps: Math.round(90 + (jitter * 3)),
          cpu: Math.round(68 + (jitter * 4)),
          thermalText: 'iQOO OPTIMAL',
          statusColor: 'text-[#0A192F]',
          badgeText: 'MONSTER STABLE',
          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          accentBorder: 'border-[#0A192F]/10',
          warningText: null,
          glowBg: 'from-blue-50/60 via-white to-yellow-50/20',
        };
      case 'HEATING':
        return {
          temp: (43.4 + Math.abs(jitter * 1.5)).toFixed(1),
          fps: Math.round(88 + (jitter * 4)),
          cpu: Math.round(84 + (jitter * 5)),
          thermalText: 'FLUX ELEVATED',
          statusColor: 'text-amber-700',
          badgeText: 'TEMP RISING (+2.1°C/m)',
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
          accentBorder: 'border-amber-300',
          warningText: 'iQOO 6K VC heat spreading across frame',
          glowBg: 'from-yellow-100/60 via-amber-50/40 to-white',
        };
      case 'THERMAL_EVENT':
      case 'FORENSIC_ANALYSIS':
        return {
          temp: (44.3 + Math.abs(jitter)).toFixed(1),
          fps: 60,
          cpu: 54, // Throttled
          thermalText: 'THROTTLED',
          statusColor: 'text-[#0A192F]',
          badgeText: 'THERMAL MITIGATION ENGAGED',
          badgeBg: 'bg-[#F0B31C] text-black border-black/20 font-black shadow-xs',
          accentBorder: 'border-black/20',
          warningText: 'PowerManager reduced render pipeline to 60 FPS',
          glowBg: 'from-amber-100/40 via-yellow-50/30 to-white',
        };
    }
  };

  const current = getValues();

  // Sequential forensic checks state
  const [forensicProgress, setForensicProgress] = useState(0);

  useEffect(() => {
    let t0: ReturnType<typeof setTimeout> | undefined;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    let t3: ReturnType<typeof setTimeout> | undefined;
    let t4: ReturnType<typeof setTimeout> | undefined;

    if (thermalState === 'FORENSIC_ANALYSIS' || thermalState === 'THERMAL_EVENT') {
      t0 = setTimeout(() => setForensicProgress(0), 0);
      t1 = setTimeout(() => setForensicProgress(1), 400);
      t2 = setTimeout(() => setForensicProgress(2), 900);
      t3 = setTimeout(() => setForensicProgress(3), 1400);
      t4 = setTimeout(() => setForensicProgress(4), 1900);
    } else {
      t0 = setTimeout(() => setForensicProgress(0), 0);
    }

    return () => {
      if (t0) clearTimeout(t0);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
      if (t4) clearTimeout(t4);
    };
  }, [thermalState]);

  return (
    <div className="relative w-full h-full bg-[#FAF9F5] text-[#0A192F] flex flex-col justify-between select-none overflow-hidden font-sans">
      {/* Dynamic warm atmospheric background gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${current.glowBg} pointer-events-none transition-all duration-700 opacity-90`}
      />

      {/* Screen Glare Reflection Bar */}
      <div className="absolute -inset-x-20 -top-40 h-80 bg-gradient-to-b from-white/40 to-transparent rotate-[35deg] pointer-events-none" />

      {/* 1. Status Bar */}
      <div className="relative z-20 px-6 pt-3 pb-1 flex justify-between items-center text-[10px] text-[#0A192F]/60 font-mono-code tracking-wider border-b border-[#0A192F]/[0.06]">
        <div className="flex items-center gap-1.5 font-bold text-[#0A192F]">
          <span>14:28</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] border border-black/30"></span>
        </div>
        <div className="flex items-center gap-2 text-[#0A192F]/70">
          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#1D4ED8]/10 text-[#1D4ED8] font-bold">iQOO 5G</span>
          <Wifi className="w-3 h-3 text-[#0A192F]" />
          <div className="flex items-center gap-0.5 text-[#0A192F]">
            <span className="text-[9px] font-bold">82%</span>
            <BatteryMedium className="w-3.5 h-3.5 text-[#0A192F]" />
          </div>
        </div>
      </div>

      {/* Main App Container */}
      <div className="relative z-10 flex-1 px-4 py-2.5 flex flex-col justify-between overflow-hidden">
        
        {/* App Top Bar with iQOO Branding */}
        <div className="flex items-center justify-between border-b border-[#0A192F]/[0.08] pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-xs bg-[#F0B31C] border border-black/30 shadow-xs" />
            <span className="font-heading font-black text-xs tracking-wider text-[#0A192F] uppercase">
              iQOO <span className="text-[10px] font-mono-code font-bold opacity-40">×</span> THERMALYZE
            </span>
          </div>
          <span className="text-[8px] font-mono-code px-2 py-0.5 rounded-full bg-white border border-[#0A192F]/10 text-[#0A192F] font-bold shadow-2xs">
            MONSTER ENGINE v2.4
          </span>
        </div>

        {/* Content depending on state */}
        <AnimatePresence mode="wait">
          {thermalState !== 'FORENSIC_ANALYSIS' ? (
            <motion.div 
              key="monitoring-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between py-1"
            >
              {/* Thermal Status Primary Card */}
              <div className={`rounded-2xl p-3.5 bg-white/95 border ${current.accentBorder} backdrop-blur-md relative overflow-hidden shadow-xs`}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono-code uppercase tracking-widest text-[#0A192F]/70 flex items-center gap-1.5 font-bold">
                    <Flame className="w-3.5 h-3.5 text-[#0A192F]" />
                    THERMAL STATUS
                  </span>
                  <div className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-mono-code font-black border flex items-center gap-1 ${current.badgeBg}`}>
                    {current.badgeText}
                  </div>
                </div>

                {/* Big Temperature Readout */}
                <div className="mt-2 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-black tracking-tight text-[#0A192F]">
                      {current.temp}
                    </span>
                    <span className="text-xl font-display font-black text-[#0A192F]/70">
                      °C
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[8.5px] text-[#0A192F]/50 block font-mono-code uppercase font-bold">iQOO GOVERNOR</span>
                    <span className={`text-xs font-mono-code font-black ${current.statusColor}`}>
                      {current.thermalText}
                    </span>
                  </div>
                </div>

                {/* Thermal Warning Banner if in Event */}
                {current.warningText && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 text-[10px] text-black bg-[#F0B31C] border border-black/20 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-bold shadow-2xs"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-black" />
                    <span className="truncate">{current.warningText}</span>
                  </motion.div>
                )}
              </div>

              {/* 3 Telemetry Metrics Acrylic Pills */}
              <div className="grid grid-cols-3 gap-1.5 my-1.5">
                {/* FPS */}
                <div className="bg-white/90 border border-[#0A192F]/[0.08] rounded-xl p-2.5 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between text-[8px] text-[#1D4ED8] font-mono-code font-bold">
                    <span>FPS</span>
                    <Gauge className="w-2.5 h-2.5 text-[#1D4ED8]" />
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className={`text-lg font-display font-black ${thermalState === 'THERMAL_EVENT' ? 'text-black' : 'text-[#1D4ED8]'}`}>
                      {current.fps}
                    </span>
                    <span className="text-[8px] text-[#0A192F]/40 font-mono-code font-bold">/ 90</span>
                  </div>
                  <div className="w-full bg-[#0A192F]/10 h-1 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${thermalState === 'THERMAL_EVENT' ? 'bg-[#F0B31C] w-[66%]' : 'bg-[#1D4ED8] w-[100%]'}`}
                    />
                  </div>
                </div>

                {/* CPU LOAD */}
                <div className="bg-white/90 border border-[#0A192F]/[0.08] rounded-xl p-2.5 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between text-[8px] text-[#0A192F]/70 font-mono-code font-bold">
                    <span>CPU LOAD</span>
                    <Cpu className="w-2.5 h-2.5 text-[#0A192F]/40" />
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg font-display font-black text-[#0A192F]">
                      {current.cpu}%
                    </span>
                  </div>
                  <div className="w-full bg-[#0A192F]/10 h-1 rounded-full mt-1 overflow-hidden">
                    <div 
                      className="h-full bg-[#1D4ED8] transition-all duration-500"
                      style={{ width: `${current.cpu}%` }}
                    />
                  </div>
                </div>

                {/* THERMAL STATE */}
                <div className="bg-white/90 border border-[#0A192F]/[0.08] rounded-xl p-2.5 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between text-[8px] text-[#0A192F]/70 font-mono-code font-bold">
                    <span>STATE</span>
                    <Activity className="w-2.5 h-2.5 text-[#0A192F]/40" />
                  </div>
                  <div className="mt-1">
                    <span className={`text-[9.5px] font-mono-code font-black uppercase block truncate ${current.statusColor}`}>
                      {current.thermalText}
                    </span>
                  </div>
                  <div className="w-full bg-[#0A192F]/10 h-1 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        thermalState === 'NORMAL' ? 'bg-[#1D4ED8] w-[35%]' :
                        thermalState === 'HEATING' ? 'bg-amber-500 w-[70%]' : 'bg-[#F0B31C] w-[95%]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Clean Telemetry Graph Card with iQOO Yellow & Refined Blue */}
              <div className="rounded-2xl p-3 bg-white/95 border border-[#0A192F]/[0.08] relative overflow-hidden flex flex-col shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-[9px] font-mono-code font-bold">
                    <span className="flex items-center gap-1 text-[#0A192F]">
                      <span className="w-2 h-2 rounded-xs bg-[#F0B31C] border border-black/40"></span>
                      iQOO TEMP
                    </span>
                    <span className="flex items-center gap-1 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]"></span>
                      FPS
                    </span>
                  </div>
                  <span className="text-[8px] font-mono-code text-[#0A192F]/60 font-bold">
                    100Hz TELEMETRY
                  </span>
                </div>

                {/* Clean SVG Graph */}
                <div className="relative h-20 w-full overflow-hidden rounded-lg bg-[#FAF9F5] border border-[#0A192F]/[0.06]">
                  {/* Subtle Gridlines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#CBD5E1" strokeDasharray="3 3" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#CBD5E1" strokeDasharray="3 3" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#CBD5E1" strokeDasharray="3 3" />
                    <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#CBD5E1" strokeDasharray="3 3" />
                    <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#CBD5E1" strokeDasharray="3 3" />
                  </svg>

                  {/* SVG Curves depending on state */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 100">
                    {/* Temp Curve (High-Contrast iQOO Brand Yellow with deep backing) */}
                    {thermalState === 'NORMAL' && (
                      <>
                        <path
                          d="M 0,72 Q 75,70 150,71 T 300,70"
                          fill="none"
                          stroke="#D99B0F"
                          strokeWidth="2.5"
                        />
                        <circle cx="295" cy="70" r="3" fill="#F0B31C" stroke="#000" strokeWidth="1" />
                      </>
                    )}

                    {thermalState === 'HEATING' && (
                      <>
                        <path
                          d="M 0,72 Q 90,68 180,48 T 300,35"
                          fill="none"
                          stroke="#D99B0F"
                          strokeWidth="2.8"
                        />
                        <circle cx="295" cy="35" r="3.5" fill="#F0B31C" stroke="#000" strokeWidth="1" />
                      </>
                    )}

                    {thermalState === 'THERMAL_EVENT' && (
                      <>
                        <path
                          d="M 0,70 Q 70,68 140,40 T 300,18"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="3"
                        />
                        <path
                          d="M 0,70 Q 70,68 140,40 T 300,18"
                          fill="none"
                          stroke="#F0B31C"
                          strokeWidth="2"
                        />
                        <circle cx="295" cy="18" r="4" fill="#F0B31C" stroke="#000" strokeWidth="1.5" />
                      </>
                    )}

                    {/* FPS Curve (Deep Royal Blue #1D4ED8) */}
                    {thermalState === 'NORMAL' && (
                      <path
                        d="M 0,22 Q 75,21 150,22 T 300,21"
                        fill="none"
                        stroke="#1D4ED8"
                        strokeWidth="2.2"
                      />
                    )}

                    {thermalState === 'HEATING' && (
                      <path
                        d="M 0,22 Q 90,22 180,24 T 300,26"
                        fill="none"
                        stroke="#1D4ED8"
                        strokeWidth="2.2"
                      />
                    )}

                    {thermalState === 'THERMAL_EVENT' && (
                      <path
                        d="M 0,22 Q 110,22 160,35 T 240,68 T 300,70"
                        fill="none"
                        stroke="#1D4ED8"
                        strokeWidth="2.4"
                      />
                    )}
                  </svg>

                  {/* Throttle Marker */}
                  {thermalState === 'THERMAL_EVENT' && (
                    <div className="absolute top-0 bottom-0 left-[55%] border-l border-dashed border-black flex flex-col justify-start">
                      <span className="text-[7px] font-mono-code bg-[#F0B31C] text-black px-1 py-0.2 rounded -translate-x-1/2 font-black border border-black/30">
                        iQOO MITIGATION TRIP
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom ticker */}
                <div className="mt-2 flex items-center justify-between text-[8px] font-mono-code text-[#0A192F]/70 font-bold">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                    Q2 SUPERCOMPUTING ACTIVE
                  </span>
                  <span>144Hz DISPLAY SYNC</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* AI FORENSICS SCANNING & DIAGNOSIS VIEW */
            <motion.div
              key="forensics-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-between py-1"
            >
              {/* Header Title */}
              <div className="bg-white/95 border border-black/15 rounded-2xl p-3.5 relative overflow-hidden shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#0A192F] font-black">
                      iQOO THERMAL FORENSICS
                    </span>
                  </div>
                  <span className="text-[8px] font-mono-code px-2 py-0.5 rounded-full bg-[#F0B31C] text-black font-black border border-black/10">
                    {forensicProgress < 4 ? 'ANALYZING...' : 'COMPLETE'}
                  </span>
                </div>

                {/* Checklist of Forensic Steps */}
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono-code bg-[#FAF9F5] px-2.5 py-1.2 rounded-lg border border-[#0A192F]/[0.06]">
                    <span className="text-[#0A192F]/80 font-bold">THERMAL FLUX</span>
                    {forensicProgress >= 1 ? (
                      <span className="text-[#0A192F] font-black flex items-center gap-1 bg-[#F0B31C] px-1.5 py-0.2 rounded border border-black/10">
                        <CheckCircle2 className="w-3 h-3 text-black" /> +4.1°C Spike
                      </span>
                    ) : (
                      <span className="text-[#0A192F]/40">Scanning...</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono-code bg-[#FAF9F5] px-2.5 py-1.2 rounded-lg border border-[#0A192F]/[0.06]">
                    <span className="text-[#0A192F]/80 font-bold">FRAME RATE CLAMP</span>
                    {forensicProgress >= 2 ? (
                      <span className="text-[#1D4ED8] font-black flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#1D4ED8]" /> 90 → 60 FPS
                      </span>
                    ) : (
                      <span className="text-[#0A192F]/40">Waiting...</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono-code bg-[#FAF9F5] px-2.5 py-1.2 rounded-lg border border-[#0A192F]/[0.06]">
                    <span className="text-[#0A192F]/80 font-bold">SYSTEM ACTIVITY</span>
                    {forensicProgress >= 3 ? (
                      <span className="text-amber-800 font-black flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-amber-700" /> 3 Workloads
                      </span>
                    ) : (
                      <span className="text-[#0A192F]/40">Waiting...</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono-code bg-[#FAF9F5] px-2.5 py-1.2 rounded-lg border border-[#0A192F]/[0.06]">
                    <span className="text-[#0A192F]/80 font-bold">TIMELINE CORRELATION</span>
                    {forensicProgress >= 4 ? (
                      <span className="text-emerald-700 font-black flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Synchronous
                      </span>
                    ) : (
                      <span className="text-[#0A192F]/40">Waiting...</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Diagnosis Output Card */}
              <div className="mt-2 flex-1 flex flex-col justify-between bg-white/95 border border-[#0A192F]/[0.08] rounded-2xl p-3.5 shadow-xs">
                {forensicProgress >= 4 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col justify-between h-full space-y-2"
                  >
                    <div>
                      <div className="text-[8px] font-mono-code uppercase tracking-wider text-[#0A192F]/60 font-bold">
                        WHY DID iQOO MONSTER MODE THROTTLE?
                      </div>
                      <p className="text-[11px] text-[#0A192F] mt-1 leading-snug font-sans font-semibold">
                        "Device entered a high thermal state (44.3°C) while background CloudBackupSync held wake-locks on high-efficiency cores."
                      </p>
                    </div>

                    <div className="bg-[#FFFBEB] border border-amber-300 rounded-xl p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono-code uppercase text-[#0A192F] font-black bg-[#F0B31C] px-1.5 py-0.2 rounded border border-black/20">
                          LIKELY CONTRIBUTOR
                        </span>
                        <span className="text-[9px] font-mono-code font-black text-[#0A192F] bg-white px-1.5 py-0.2 rounded border border-[#0A192F]/10">
                          CONFIDENCE: 87%
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#0A192F] mt-1">
                        Background Sync Workload
                      </div>
                      <div className="text-[8.5px] text-[#0A192F]/70 font-mono-code mt-0.5">
                        Correlated Process: MediaSync &amp; Indexer
                      </div>
                    </div>

                    <div className="text-[7.5px] text-[#0A192F]/50 font-mono-code leading-tight border-t border-[#0A192F]/[0.06] pt-1">
                      Android PowerManager: SEVERE. Evaluated via iQOO local telemetry kernel.
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#1D4ED8] border-t-transparent animate-spin mb-2" />
                    <span className="text-[10px] font-mono-code text-[#0A192F]/70 font-bold">
                      CORRELATING SILICON TIMELINE...
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Indicator Line */}
        <div className="mt-2 pt-1.5 border-t border-[#0A192F]/[0.08] flex items-center justify-between text-[8px] font-mono-code text-[#0A192F]/60 font-bold">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5 text-[#1D4ED8]" />
            iQOO KERNEL HARNESS
          </span>
          <span>FuntouchOS TELEMETRY</span>
        </div>
      </div>

      {/* Android Bottom Gesture Bar */}
      <div className="relative z-20 pb-2 pt-1 flex justify-center">
        <div className="w-24 h-1 bg-[#0A192F]/20 rounded-full" />
      </div>
    </div>
  );
};
