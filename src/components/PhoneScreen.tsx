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
  ArrowRight
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
      return 'bg-gradient-to-b from-[#1D4ED8]/25 via-transparent to-[#07090E]';
    }
    if (connectivityState === 'DEGRADING') {
      return 'bg-gradient-to-b from-amber-600/25 via-transparent to-[#07090E]';
    }
    if (connectivityState === 'ACTION') {
      return 'bg-gradient-to-b from-[#F0B31C]/25 via-transparent to-[#07090E]';
    }
    return 'bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-[#07090E]';
  };

  return (
    <div className="relative w-full h-full bg-[#080B12] text-slate-100 flex flex-col justify-between select-none overflow-hidden font-sans">
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-700 opacity-60 ${getGlowBg()}`}
      />

      <div className="absolute -inset-x-20 -top-40 h-80 bg-gradient-to-b from-white/[0.08] to-transparent rotate-[35deg] pointer-events-none" />

      {/* 1. Android Status Bar */}
      <div className="relative z-20 px-6 pt-3 pb-1 flex justify-between items-center text-[10px] text-slate-400 font-mono-code tracking-wider border-b border-white/[0.06] bg-[#080B12]/80 backdrop-blur-md">
        <div className="flex items-center gap-1.5 font-bold text-slate-200">
          <span>14:28</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_6px_rgba(240,179,28,0.8)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold font-mono-code transition-colors ${
            connectivityState === 'DEGRADING' 
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
              : 'bg-[#1D4ED8]/30 text-blue-300 border border-blue-500/30'
          }`}>
            {connectivityState === 'DEGRADING' ? 'LTE 4G' : 'iQOO 5G'}
          </span>
          <Wifi className="w-3 h-3 text-slate-300" />
          <div className="flex items-center gap-0.5 text-slate-200">
            <span className="text-[9px] font-bold">82%</span>
            <BatteryMedium className="w-3.5 h-3.5 text-slate-300" />
          </div>
        </div>
      </div>

      {/* 2. App Top Header */}
      <div className="relative z-10 px-4 pt-2 pb-1.5 flex items-center justify-between border-b border-white/[0.06] bg-black/20">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-[10px]">
            CI
          </div>
          <div>
            <div className="text-[9px] font-mono-code text-slate-400 tracking-wider">iQOO INTELLIGENCE</div>
            <div className="text-[11px] font-display font-extrabold text-white leading-none">CONNECTIVITY</div>
          </div>
        </div>

        <div className="px-2 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase tracking-wider bg-white/[0.06] border border-white/10 text-slate-300">
          {connectivityState === 'CONNECTED' && '01 // OBSERVE'}
          {connectivityState === 'DEGRADING' && '02 // DETECT'}
          {connectivityState === 'ACTION' && '03 // ACT'}
          {connectivityState === 'RECOVERED' && '04 // VERIFY'}
          {connectivityState === 'MEMORY' && '05 // LEARN'}
        </div>
      </div>

      {/* 3. Main Screen Viewport */}
      <div className="relative z-10 flex-1 px-4 py-3 flex flex-col justify-between overflow-hidden">
        <AnimatePresence mode="wait">
          
          {connectivityState === 'CONNECTED' && (
            <motion.div
              key="connected"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-950/50 via-slate-900/60 to-black/80 border border-blue-500/25 shadow-lg">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    PRIMARY CARRIER: n78 (3.5 GHz)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-[9px]">
                    5G STABLE
                  </span>
                </div>

                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-display font-black text-white tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code text-slate-400">SA ACTIVE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-bold text-blue-400">{(18 + jitter * 4).toFixed(0)} ms</div>
                    <div className="text-[9px] font-mono-code text-slate-500 uppercase">JITTER 1.2ms</div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-400 mb-1">
                    <span>CONNECTION WAVEFORM</span>
                    <span className="text-emerald-400 font-bold">100% 5G HOLD</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1">
                    {[38, 44, 40, 48, 46, 52, 50, 48, 52, 54, 50, 48, 52, 46, 44, 40].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="text-[9px] font-mono-code text-slate-400 uppercase">STABILITY SCORE</div>
                  <div className="text-base font-display font-black text-white mt-0.5">92%</div>
                  <div className="text-[9px] font-mono-code text-emerald-400">Optimal for gaming</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="text-[9px] font-mono-code text-slate-400 uppercase">HANDOVER FREQ</div>
                  <div className="text-base font-display font-black text-white mt-0.5">00 / 30s</div>
                  <div className="text-[9px] font-mono-code text-blue-400">Zero packet drops</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-[10px] text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Connection healthy.</strong> High signal-to-noise ratio observed across Snapdragon Modem-RF.
                </p>
              </div>
            </motion.div>
          )}

          {connectivityState === 'DEGRADING' && (
            <motion.div
              key="degrading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-950/60 via-slate-900/70 to-black border border-amber-500/35 shadow-lg">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                    CELL FLUX DETECTED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-[9px]">
                    UNSTABLE
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between p-2 rounded-xl bg-black/50 border border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-xs font-mono-code">5G</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-xs font-mono-code">4G LTE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-xs font-mono-code">5G</span>
                  </div>
                  <span className="text-[9px] font-mono-code text-amber-300 font-bold">3 HO</span>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-400 mb-1">
                    <span>30s HANDOVER JITTER</span>
                    <span className="text-amber-400 font-bold">LATENCY: 142ms</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1">
                    {[65, 30, 20, 80, 25, 20, 85, 20, 25, 75, 20, 30, 85, 25, 20, 60].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-full ${val > 50 ? 'bg-amber-500' : 'bg-red-500/80'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                  <div className="text-[9px] font-mono-code text-amber-300/80 uppercase">STABILITY SCORE</div>
                  <div className="text-base font-display font-black text-amber-300 mt-0.5">44%</div>
                  <div className="text-[9px] font-mono-code text-red-400">Game lagging</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="text-[9px] font-mono-code text-slate-400 uppercase">NETWORK EVENTS</div>
                  <div className="text-base font-display font-black text-white mt-0.5">07 Drops</div>
                  <div className="text-[9px] font-mono-code text-amber-400">Carrier ping-pong</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-[10px] text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-amber-300">Cell edge handover.</strong> Phone dropped to LTE 4G as sub-6GHz carrier signal fell below -114 dBm.
                </p>
              </div>
            </motion.div>
          )}

          {connectivityState === 'ACTION' && (
            <motion.div
              key="action"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-950/40 via-[#F0B31C]/10 to-black border border-[#F0B31C]/40 shadow-lg">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-[#F0B31C] font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F0B31C] animate-spin" />
                    ACTION: OPTIMIZING...
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F0B31C]/20 text-[#F0B31C] border border-[#F0B31C]/40 font-bold text-[9px]">
                    STAGE 03
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0B31C]/10 border border-[#F0B31C]/40 flex items-center justify-center relative">
                    <Radio className="w-6 h-6 text-[#F0B31C]" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F0B31C] animate-ping" />
                  </div>
                  <span className="mt-3 text-sm font-display font-black text-white tracking-wide">
                    RE-EVALUATING CARRIER BANDS
                  </span>
                  <span className="text-[10px] font-mono-code text-[#F0B31C] mt-1">
                    Mitigating boundary handover flux
                  </span>
                </div>

                <div className="mt-2 w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '20%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#F0B31C] to-amber-300 rounded-full"
                  />
                </div>
              </div>

              <div className="my-2 space-y-1.5 text-[10px] font-mono-code">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Queried available NR &amp; LTE frequencies</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F0B31C]/10 border border-[#F0B31C]/20 text-white">
                  <Zap className="w-3 h-3 text-[#F0B31C] shrink-0 animate-pulse" />
                  <span>Locking primary n78 anchor band</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-[10px] text-slate-400">
                <p>Guided intervention applied within supported Android cellular APIs.</p>
              </div>
            </motion.div>
          )}

          {connectivityState === 'RECOVERED' && (
            <motion.div
              key="recovered"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900/60 to-black border border-emerald-500/40 shadow-lg">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    IMPROVEMENT VERIFIED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-[9px]">
                    5G STABLE ✓
                  </span>
                </div>

                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-display font-black text-white tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code text-emerald-400">LOCKED</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-bold text-emerald-300">21 ms</div>
                    <div className="text-[9px] font-mono-code text-emerald-400 font-bold">+52% IMPROVEMENT</div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-400 mb-1">
                    <span>POST-ACTION VERIFICATION</span>
                    <span className="text-emerald-400 font-bold">ZERO DROPS</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1">
                    {[45, 48, 52, 50, 52, 54, 52, 50, 52, 54, 52, 50, 52, 54, 50, 52].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-300 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25">
                  <div className="text-[9px] font-mono-code text-emerald-300 uppercase">STABILITY SCORE</div>
                  <div className="text-base font-display font-black text-white mt-0.5">96%</div>
                  <div className="text-[9px] font-mono-code text-emerald-400">Rock solid</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="text-[9px] font-mono-code text-slate-400 uppercase">EVENTS LOGGED</div>
                  <div className="text-base font-display font-black text-white mt-0.5">01 Event</div>
                  <div className="text-[9px] font-mono-code text-blue-400">Clean attach</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-500/20 text-[10px] text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-emerald-300">Loop closed.</strong> The system observed the ping-pong degradation, applied band recovery, and verified stability.
                </p>
              </div>
            </motion.div>
          )}

          {connectivityState === 'MEMORY' && (
            <motion.div
              key="memory"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/70 to-black border border-indigo-500/30 shadow-lg">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-indigo-400 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    CAMPUS LOCATION
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold text-[9px]">
                    24 CHECKS
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-lg font-display font-black text-white tracking-wide block">
                    LIBRARY // 3RD FLOOR
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-400">
                    Quiet Zone · Indoor North Wing
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-mono-code text-slate-400 uppercase">TYPICAL 5G HOLD</div>
                    <div className="text-xl font-display font-black text-[#F0B31C]">82% STABLE</div>
                  </div>
                  <div className="text-right text-[9px] font-mono-code text-emerald-400 font-bold">
                    HIGH RELIABILITY
                  </div>
                </div>
              </div>

              <div className="my-2 space-y-1.5 text-[9px] font-mono-code">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-slate-200 font-bold">Canteen Walkway</span>
                  <span className="text-amber-400 font-bold">61% (Flux)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-slate-200 font-bold">Hostel Blocks</span>
                  <span className="text-red-400 font-bold">18% (4G LTE)</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-indigo-500/20 text-[10px] text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-indigo-300">Learned pattern:</strong> 5G holds consistently inside the library; switches to 4G along the outdoor corridor.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 4. Mini Bottom Switcher Inside Phone */}
      <div className="relative z-20 px-3 py-2 border-t border-white/[0.08] bg-black/40 backdrop-blur-md flex items-center justify-between gap-1">
        {(['CONNECTED', 'DEGRADING', 'ACTION', 'RECOVERED', 'MEMORY'] as ConnectivityState[]).map((st, i) => (
          <button
            key={st}
            onClick={() => onSelectState && onSelectState(st)}
            className={`flex-1 py-1 rounded-lg text-[8px] font-mono-code font-bold transition-all text-center ${
              connectivityState === st
                ? 'bg-[#F0B31C] text-[#07090E] shadow-xs scale-102'
                : 'text-slate-400 hover:text-white bg-white/[0.03]'
            }`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
