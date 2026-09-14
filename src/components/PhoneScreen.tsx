import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  BatteryMedium, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Radio, 
  Zap,
  ArrowRight,
  Activity,
  Signal,
  Cpu,
  Sparkles
} from 'lucide-react';
import type { ConnectivityState } from '../types/connectivity';

interface PhoneScreenProps {
  connectivityState: ConnectivityState;
  onSelectState?: (state: ConnectivityState) => void;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ 
  connectivityState,
  onSelectState 
}) => {
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJitter((Math.random() - 0.5) * 0.15);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const getGlowBg = () => {
    if (connectivityState === 'CONNECTED' || connectivityState === 'RECOVERED') {
      return 'bg-gradient-to-b from-blue-100/40 via-transparent to-[#FAF9F5]';
    }
    if (connectivityState === 'DEGRADING') {
      return 'bg-gradient-to-b from-amber-100/50 via-transparent to-[#FAF9F5]';
    }
    if (connectivityState === 'ACTION') {
      return 'bg-gradient-to-b from-[#F0B31C]/20 via-transparent to-[#FAF9F5]';
    }
    return 'bg-gradient-to-b from-indigo-100/40 via-transparent to-[#FAF9F5]';
  };

  return (
    <div className="relative w-full h-full bg-[#FAF9F5] text-slate-800 flex flex-col justify-between select-none overflow-hidden font-sans">
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-700 opacity-70 ${getGlowBg()}`}
      />

      <div className="absolute -inset-x-20 -top-40 h-80 bg-gradient-to-b from-white/50 to-transparent rotate-[35deg] pointer-events-none" />

      {/* 1. OriginOS Status Bar (Light Theme) */}
      <div className="relative z-20 px-5 pt-3 pb-1 flex justify-between items-center text-[10px] text-slate-600 font-mono-code tracking-wider border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
        <div className="flex items-center gap-1.5 font-bold text-slate-900">
          <span>14:28</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_6px_rgba(240,179,28,0.7)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-bold text-slate-400 font-mono-code hidden sm:inline">VoNR HD</span>
          <span className={`text-[9px] px-1.5 py-0.2 rounded font-black font-mono-code transition-colors ${
            connectivityState === 'DEGRADING' 
              ? 'bg-amber-100 text-amber-900 border border-amber-300' 
              : 'bg-blue-100 text-blue-900 border border-blue-200'
          }`}>
            {connectivityState === 'DEGRADING' ? '4G LTE' : '5G SA'}
          </span>
          <Wifi className="w-3 h-3 text-slate-800" />
          <div className="flex items-center gap-0.5 text-slate-900 font-bold">
            <span className="text-[9px]">84%</span>
            <BatteryMedium className="w-3.5 h-3.5 text-slate-800" />
          </div>
        </div>
      </div>

      {/* 2. OriginOS System Header */}
      <div className="relative z-10 px-4 pt-2 pb-1.5 flex items-center justify-between border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-xs shadow-xs">
            CI
          </div>
          <div>
            <div className="text-[9px] font-mono-code text-slate-500 font-bold tracking-wider flex items-center gap-1">
              <span>iQOO NETWORK ENGINE</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xs font-sans font-black text-slate-950 leading-none tracking-tight">
              CONNECTIVITY HUB
            </div>
          </div>
        </div>

        <div className="px-2 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-700">
          {connectivityState === 'CONNECTED' && '01 OBSERVE'}
          {connectivityState === 'DEGRADING' && '02 DETECT'}
          {connectivityState === 'ACTION' && '03 RECOVER'}
          {connectivityState === 'RECOVERED' && '04 VERIFIED'}
          {connectivityState === 'MEMORY' && '05 LEARNED'}
        </div>
      </div>

      {/* 3. Main Screen Viewport */}
      <div className="relative z-10 flex-1 px-3.5 py-2.5 flex flex-col justify-between overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* STATE 01: CONNECTED / OBSERVE */}
          {connectivityState === 'CONNECTED' && (
            <motion.div
              key="connected"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              {/* Primary Telemetry Card */}
              <div className="p-3 rounded-2xl bg-white border border-blue-200/90 shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-blue-700 font-bold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                    PRIMARY: n78 (3500 MHz)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[9px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    5G STANDALONE
                  </span>
                </div>

                <div className="mt-2 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-sans font-black text-slate-950 tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      TDD MIMO
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-black text-blue-700">{(18 + jitter * 4).toFixed(0)} ms</div>
                    <div className="text-[9px] font-mono-code text-slate-500 uppercase font-semibold">JITTER 1.2ms</div>
                  </div>
                </div>

                {/* Cellular Signal Engineering Specs */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-100 text-center font-mono-code text-[9px]">
                  <div>
                    <span className="text-slate-400 font-medium block">RSRP</span>
                    <span className="font-bold text-slate-800">-78 dBm</span>
                  </div>
                  <div className="border-x border-slate-200">
                    <span className="text-slate-400 font-medium block">SINR</span>
                    <span className="font-bold text-emerald-700">+24 dB</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">SPEED</span>
                    <span className="font-bold text-slate-800">840 Mbps</span>
                  </div>
                </div>

                {/* Waveform Track */}
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-500 mb-1 font-semibold">
                    <span>MULTI-CHANNEL RF SPECTRUM</span>
                    <span className="text-emerald-700 font-bold">100% CARRIER HOLD</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-slate-50 rounded-lg border border-slate-100">
                    {[38, 46, 42, 54, 48, 56, 52, 50, 56, 58, 54, 50, 56, 48, 46, 42].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-600" />
                    STABILITY SCORE
                  </div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">98.2%</div>
                  <div className="text-[9px] font-mono-code text-emerald-700 font-semibold">Zero frame drops</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-blue-600" />
                    MODEM QUEUE
                  </div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">00 / 30s</div>
                  <div className="text-[9px] font-mono-code text-blue-700 font-semibold">Clean attach buffer</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-[10px] text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <p className="leading-tight">
                  <strong className="text-slate-900">Connection healthy.</strong> Snapdragon Modem-RF holds optimal beamforming alignment.
                </p>
              </div>
            </motion.div>
          )}

          {/* STATE 02: DEGRADING / DETECT */}
          {connectivityState === 'DEGRADING' && (
            <motion.div
              key="degrading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-[0_2px_12px_rgba(217,119,6,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-800 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
                    CELL EDGE FLUX DETECTED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[9px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping" />
                    PING-PONG FLUX
                  </span>
                </div>

                {/* Handover Ping-Pong Cascade Graphic */}
                <div className="mt-2.5 p-2 rounded-xl bg-white border border-amber-200 shadow-xs">
                  <div className="text-[8px] font-mono-code text-slate-400 font-bold uppercase mb-1">
                    15s FLAPPING HANDOVER CASCADE
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-black text-xs font-mono-code">5G</span>
                      <ArrowRight className="w-3 h-3 text-amber-600 animate-pulse" />
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-black text-xs font-mono-code">4G LTE</span>
                      <ArrowRight className="w-3 h-3 text-amber-600 animate-pulse" />
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-black text-xs font-mono-code">5G</span>
                    </div>
                    <span className="text-[9px] font-mono-code text-rose-700 font-extrabold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                      3 Rapid Drops
                    </span>
                  </div>
                </div>

                {/* RF Metrics in Fringe State */}
                <div className="mt-2 grid grid-cols-3 gap-1.5 py-1.5 px-2 rounded-xl bg-white/90 border border-amber-200 text-center font-mono-code text-[9px]">
                  <div>
                    <span className="text-slate-400 font-medium block">RSRP</span>
                    <span className="font-bold text-rose-700">-114 dBm</span>
                  </div>
                  <div className="border-x border-amber-200">
                    <span className="text-slate-400 font-medium block">SINR</span>
                    <span className="font-bold text-amber-800">+2.1 dB</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">PKT LOSS</span>
                    <span className="font-bold text-rose-700">12.4%</span>
                  </div>
                </div>

                {/* Handover Jitter Spike Graph */}
                <div className="mt-2 pt-2 border-t border-amber-200/60">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-600 mb-1 font-semibold">
                    <span>LATENCY SPIKE GRAPH</span>
                    <span className="text-rose-700 font-black">142ms PEAK SPIKE</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-white rounded-lg border border-amber-200/60">
                    {[65, 30, 20, 85, 25, 20, 90, 20, 25, 80, 20, 30, 90, 25, 20, 70].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-full ${val > 50 ? 'bg-rose-500' : 'bg-amber-400'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Degrading Quick Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 shadow-xs">
                  <div className="text-[9px] font-mono-code text-amber-800 uppercase font-bold">STABILITY SCORE</div>
                  <div className="text-base font-sans font-black text-rose-700 mt-0.5">44%</div>
                  <div className="text-[9px] font-mono-code text-rose-700 font-semibold">Game/video stuttering</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">CARRIER STATE</div>
                  <div className="text-base font-sans font-black text-amber-800 mt-0.5">Unstable</div>
                  <div className="text-[9px] font-mono-code text-amber-700 font-semibold">Sub-6GHz boundary</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-2 rounded-xl bg-white border border-amber-200 text-[10px] text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                <p className="leading-tight">
                  <strong className="text-amber-900">Cell edge handover.</strong> Signal fell below -114 dBm threshold. Action needed.
                </p>
              </div>
            </motion.div>
          )}

          {/* STATE 03: ACTION / RECOVER */}
          {connectivityState === 'ACTION' && (
            <motion.div
              key="action"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#F0B31C]/60 shadow-[0_2px_12px_rgba(240,179,28,0.1)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-900 font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                    AUTONOMOUS RECOVERY
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F0B31C]/25 text-amber-950 border border-[#F0B31C]/50 font-black text-[9px]">
                    STAGE 03 ACTIVE
                  </span>
                </div>

                {/* Radar Frequency Scanning Widget */}
                <div className="mt-3 flex flex-col items-center justify-center py-2.5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#F0B31C]/60 shadow-sm flex items-center justify-center relative">
                    <Radio className="w-6 h-6 text-amber-700 animate-pulse" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F0B31C] animate-ping" />
                  </div>
                  <span className="mt-2 text-xs font-sans font-black text-slate-950 tracking-wide text-center">
                    RE-EVALUATING CARRIER BANDS
                  </span>
                  <span className="text-[9px] font-mono-code text-amber-800 font-bold mt-0.5">
                    Locking primary anchor on Snapdragon RF
                  </span>
                </div>

                <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '20%' }}
                    animate={{ width: '90%' }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#F0B31C] to-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Applied Interventions List */}
              <div className="space-y-1.5 text-[9px] font-mono-code">
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Queried available NR &amp; LTE frequencies</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-amber-50/80 border border-[#F0B31C]/50 shadow-xs text-slate-900 font-bold">
                  <Zap className="w-3 h-3 text-amber-700 shrink-0 animate-pulse" />
                  <span>Locking primary n78 anchor band</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-slate-700">
                  <Signal className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>Engaged iQOO 360° Surround Antenna</span>
                </div>
              </div>

              {/* Interactive Recovery Action Button */}
              <button
                onClick={() => onSelectState && onSelectState('RECOVERED')}
                className="w-full py-2 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONFIRM CONNECTION HEALED</span>
              </button>
            </motion.div>
          )}

          {/* STATE 04: RECOVERED / VERIFY */}
          {connectivityState === 'RECOVERED' && (
            <motion.div
              key="recovered"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-[0_2px_12px_rgba(16,185,129,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-emerald-800 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    IMPROVEMENT VERIFIED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-black text-[9px]">
                    5G LOCKED ✓
                  </span>
                </div>

                <div className="mt-2 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-sans font-black text-slate-950 tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      RESTABILISED
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-black text-emerald-700">21 ms</div>
                    <div className="text-[9px] font-mono-code text-emerald-800 font-extrabold">-85% LATENCY CUT</div>
                  </div>
                </div>

                {/* Before vs After Telemetry Delta */}
                <div className="mt-2 grid grid-cols-3 gap-1.5 py-1.5 px-2 rounded-xl bg-white border border-emerald-200 text-center font-mono-code text-[9px]">
                  <div>
                    <span className="text-slate-400 font-medium block">LATENCY</span>
                    <span className="font-bold text-emerald-700">142 ➔ 21ms</span>
                  </div>
                  <div className="border-x border-emerald-100">
                    <span className="text-slate-400 font-medium block">STABILITY</span>
                    <span className="font-bold text-emerald-700">44% ➔ 98%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">PACKET DROP</span>
                    <span className="font-bold text-emerald-700">0.0%</span>
                  </div>
                </div>

                {/* Restored Waveform */}
                <div className="mt-2 pt-2 border-t border-emerald-200/60">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-600 mb-1 font-semibold">
                    <span>POST-ACTION VERIFICATION WAVEFORM</span>
                    <span className="text-emerald-800 font-bold">100% STEADY</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-white rounded-lg border border-emerald-200/60">
                    {[48, 52, 54, 52, 54, 56, 54, 52, 54, 56, 54, 52, 54, 56, 52, 54].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Quick Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs">
                  <div className="text-[9px] font-mono-code text-emerald-800 uppercase font-bold">STABILITY SCORE</div>
                  <div className="text-base font-sans font-black text-emerald-950 mt-0.5">98.4%</div>
                  <div className="text-[9px] font-mono-code text-emerald-700 font-semibold">Rock-solid gaming</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">LOOP TIME</div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">1.3s</div>
                  <div className="text-[9px] font-mono-code text-blue-700 font-semibold">Self-healed</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-2 rounded-xl bg-white border border-emerald-200 text-[10px] text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <p className="leading-tight">
                  <strong className="text-emerald-800">Closed-loop verified.</strong> The system detected degradation, applied recovery, and verified stability.
                </p>
              </div>
            </motion.div>
          )}

          {/* STATE 05: MEMORY / LEARN */}
          {connectivityState === 'MEMORY' && (
            <motion.div
              key="memory"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-200 shadow-[0_2px_12px_rgba(99,102,241,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-indigo-800 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    CAMPUS LOCATION MEMORY
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 font-bold text-[9px]">
                    148 OBSERVATIONS
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-base font-sans font-black text-slate-950 tracking-wide block">
                    ENGINEERING LIBRARY // 3RD FLOOR
                  </span>
                  <span className="text-[9px] font-mono-code text-slate-500 font-semibold">
                    Quiet Zone · Indoor North Sector
                  </span>
                </div>

                <div className="mt-2 p-2 rounded-xl bg-white border border-indigo-100 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[8px] font-mono-code text-slate-500 uppercase font-bold">TYPICAL 5G HOLD</div>
                    <div className="text-lg font-sans font-black text-amber-600">94% STABLE</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-mono-code text-emerald-700 font-bold">HIGH RELIABILITY</div>
                    <div className="text-[8px] font-mono-code text-slate-400">Pre-locks n78 band</div>
                  </div>
                </div>
              </div>

              {/* Learned Campus Locations */}
              <div className="space-y-1.5 text-[9px] font-mono-code">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-slate-800 font-bold">Canteen Walkway</span>
                  <span className="text-amber-700 font-bold">61% (Anticipate n28)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-slate-800 font-bold">Hostel Corridor</span>
                  <span className="text-rose-700 font-bold">18% (Seamless 4G)</span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-2 rounded-xl bg-white border border-indigo-100 shadow-xs text-[10px] text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <p className="leading-tight">
                  <strong className="text-indigo-800">Learned environment.</strong> System proactively adapts RF antenna before enters known fringe corridors.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 4. OriginOS System Dock (Icon-based Light Pill Switcher) */}
      <div className="relative z-20 px-2.5 py-2 border-t border-slate-200/90 bg-white/95 backdrop-blur-md flex items-center justify-between gap-1">
        {[
          { id: 'CONNECTED', label: 'Observe', icon: Radio },
          { id: 'DEGRADING', label: 'Detect', icon: AlertTriangle },
          { id: 'ACTION', label: 'Recover', icon: Zap },
          { id: 'RECOVERED', label: 'Verify', icon: CheckCircle2 },
          { id: 'MEMORY', label: 'Learn', icon: MapPin },
        ].map(({ id, label, icon: Icon }) => {
          const isActive = connectivityState === id;
          return (
            <button
              key={id}
              onClick={() => onSelectState && onSelectState(id as ConnectivityState)}
              className={`flex-1 py-1.5 px-1 rounded-xl font-mono-code transition-all text-center flex flex-col items-center gap-0.5 cursor-pointer ${
                isActive
                  ? 'bg-[#F0B31C] text-[#07090E] shadow-sm font-black scale-102'
                  : 'text-slate-500 hover:text-slate-900 bg-slate-100/70 hover:bg-slate-200/70 border border-slate-200/50'
              }`}
            >
              <Icon className={`w-3 h-3 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
              <span className="text-[8px] tracking-tight">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

