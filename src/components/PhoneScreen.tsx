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
      return 'bg-gradient-to-b from-blue-100/50 via-transparent to-[#FAF9F5]';
    }
    if (connectivityState === 'DEGRADING') {
      return 'bg-gradient-to-b from-amber-100/60 via-transparent to-[#FAF9F5]';
    }
    if (connectivityState === 'ACTION') {
      return 'bg-gradient-to-b from-[#F0B31C]/20 via-transparent to-[#FAF9F5]';
    }
    return 'bg-gradient-to-b from-indigo-100/50 via-transparent to-[#FAF9F5]';
  };

  return (
    <div className="relative w-full h-full bg-[#FAF9F5] text-slate-800 flex flex-col justify-between select-none overflow-hidden font-sans">
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-700 opacity-70 ${getGlowBg()}`}
      />

      <div className="absolute -inset-x-20 -top-40 h-80 bg-gradient-to-b from-white/40 to-transparent rotate-[35deg] pointer-events-none" />

      {/* 1. Android Status Bar (Light Theme) */}
      <div className="relative z-20 px-6 pt-3 pb-1 flex justify-between items-center text-[10px] text-slate-500 font-mono-code tracking-wider border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="flex items-center gap-1.5 font-bold text-slate-800">
          <span>14:28</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_6px_rgba(240,179,28,0.7)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold font-mono-code transition-colors ${
            connectivityState === 'DEGRADING' 
              ? 'bg-amber-100 text-amber-900 border border-amber-300' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            {connectivityState === 'DEGRADING' ? 'LTE 4G' : 'iQOO 5G'}
          </span>
          <Wifi className="w-3 h-3 text-slate-700" />
          <div className="flex items-center gap-0.5 text-slate-800">
            <span className="text-[9px] font-bold">82%</span>
            <BatteryMedium className="w-3.5 h-3.5 text-slate-700" />
          </div>
        </div>
      </div>

      {/* 2. App Top Header (Light Theme) */}
      <div className="relative z-10 px-4 pt-2 pb-1.5 flex items-center justify-between border-b border-slate-200/70 bg-white/75 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-[10px] shadow-xs">
            CI
          </div>
          <div>
            <div className="text-[9px] font-mono-code text-slate-500 font-bold tracking-wider">iQOO INTELLIGENCE</div>
            <div className="text-[11px] font-sans font-extrabold text-slate-900 leading-none tracking-tight">CONNECTIVITY</div>
          </div>
        </div>

        <div className="px-2 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-700">
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
              <div className="p-3 rounded-2xl bg-white border border-blue-200/90 shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-blue-700 font-bold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                    PRIMARY: n78 (3.5 GHz)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[9px]">
                    5G STABLE
                  </span>
                </div>

                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-sans font-black text-slate-950 tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code font-bold text-slate-500">SA ACTIVE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-bold text-blue-700">{(18 + jitter * 4).toFixed(0)} ms</div>
                    <div className="text-[9px] font-mono-code text-slate-500 uppercase font-semibold">JITTER 1.2ms</div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-500 mb-1 font-semibold">
                    <span>CONNECTION WAVEFORM</span>
                    <span className="text-emerald-700 font-bold">100% 5G HOLD</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-slate-50 rounded-lg border border-slate-100">
                    {[38, 44, 40, 48, 46, 52, 50, 48, 52, 54, 50, 48, 52, 46, 44, 40].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">STABILITY SCORE</div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">92%</div>
                  <div className="text-[9px] font-mono-code text-emerald-700 font-semibold">Optimal for gaming</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">HANDOVER FREQ</div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">00 / 30s</div>
                  <div className="text-[9px] font-mono-code text-blue-700 font-semibold">Zero packet drops</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-[10px] text-slate-600">
                <p className="leading-relaxed">
                  <strong className="text-slate-900">Connection healthy.</strong> High signal-to-noise ratio observed across Snapdragon Modem-RF.
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
              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-[0_2px_12px_rgba(217,119,6,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-800 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
                    CELL FLUX DETECTED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[9px]">
                    UNSTABLE
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between p-2 rounded-xl bg-white border border-amber-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-xs font-mono-code">5G</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs font-mono-code">4G LTE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-xs font-mono-code">5G</span>
                  </div>
                  <span className="text-[9px] font-mono-code text-amber-800 font-bold">3 HO</span>
                </div>

                <div className="mt-3 pt-2 border-t border-amber-200/60">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-600 mb-1 font-semibold">
                    <span>30s HANDOVER JITTER</span>
                    <span className="text-amber-800 font-bold">LATENCY: 142ms</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-white rounded-lg border border-amber-200/60">
                    {[65, 30, 20, 80, 25, 20, 85, 20, 25, 75, 20, 30, 85, 25, 20, 60].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-full ${val > 50 ? 'bg-amber-500' : 'bg-rose-500'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 shadow-xs">
                  <div className="text-[9px] font-mono-code text-amber-800 uppercase font-bold">STABILITY SCORE</div>
                  <div className="text-base font-sans font-black text-amber-900 mt-0.5">44%</div>
                  <div className="text-[9px] font-mono-code text-rose-700 font-semibold">Game lagging</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">NETWORK EVENTS</div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">07 Drops</div>
                  <div className="text-[9px] font-mono-code text-amber-800 font-semibold">Carrier ping-pong</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-amber-200/80 shadow-xs text-[10px] text-slate-600">
                <p className="leading-relaxed">
                  <strong className="text-amber-900">Cell edge handover.</strong> Phone dropped to LTE 4G as sub-6GHz carrier signal fell below -114 dBm.
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
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#F0B31C]/60 shadow-[0_2px_12px_rgba(240,179,28,0.1)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-900 font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                    ACTION: OPTIMIZING...
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F0B31C]/25 text-amber-950 border border-[#F0B31C]/50 font-bold text-[9px]">
                    STAGE 03
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#F0B31C]/60 shadow-sm flex items-center justify-center relative">
                    <Radio className="w-6 h-6 text-amber-700" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F0B31C] animate-ping" />
                  </div>
                  <span className="mt-3 text-sm font-sans font-black text-slate-950 tracking-wide text-center">
                    RE-EVALUATING CARRIER BANDS
                  </span>
                  <span className="text-[10px] font-mono-code text-amber-800 font-bold mt-1">
                    Mitigating boundary handover flux
                  </span>
                </div>

                <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '20%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#F0B31C] to-amber-500 rounded-full"
                  />
                </div>
              </div>

              <div className="my-2 space-y-1.5 text-[10px] font-mono-code">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Queried available NR &amp; LTE frequencies</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/70 border border-[#F0B31C]/40 shadow-xs text-slate-900 font-bold">
                  <Zap className="w-3 h-3 text-amber-700 shrink-0 animate-pulse" />
                  <span>Locking primary n78 anchor band</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-[10px] text-slate-500">
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
              <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-[0_2px_12px_rgba(16,185,129,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-emerald-800 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    IMPROVEMENT VERIFIED
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[9px]">
                    5G STABLE ✓
                  </span>
                </div>

                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-sans font-black text-slate-950 tracking-tight">5G</span>
                    <span className="ml-2 text-xs font-mono-code font-bold text-emerald-700">LOCKED</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-code font-bold text-emerald-700">21 ms</div>
                    <div className="text-[9px] font-mono-code text-emerald-800 font-bold">+52% IMPROVEMENT</div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-emerald-200/60">
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-600 mb-1 font-semibold">
                    <span>POST-ACTION VERIFICATION</span>
                    <span className="text-emerald-800 font-bold">ZERO DROPS</span>
                  </div>
                  <div className="h-6 w-full flex items-center justify-between gap-1 overflow-hidden px-1 bg-white rounded-lg border border-emerald-200/60">
                    {[45, 48, 52, 50, 52, 54, 52, 50, 52, 54, 52, 50, 52, 54, 50, 52].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs">
                  <div className="text-[9px] font-mono-code text-emerald-800 uppercase font-bold">STABILITY SCORE</div>
                  <div className="text-base font-sans font-black text-emerald-950 mt-0.5">96%</div>
                  <div className="text-[9px] font-mono-code text-emerald-700 font-semibold">Rock solid</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">EVENTS LOGGED</div>
                  <div className="text-base font-sans font-black text-slate-900 mt-0.5">01 Event</div>
                  <div className="text-[9px] font-mono-code text-blue-700 font-semibold">Clean attach</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-emerald-200/80 shadow-xs text-[10px] text-slate-600">
                <p className="leading-relaxed">
                  <strong className="text-emerald-800">Loop closed.</strong> The system observed the ping-pong degradation, applied band recovery, and verified stability.
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
              <div className="p-3 rounded-2xl bg-indigo-50/50 border border-indigo-200 shadow-[0_2px_12px_rgba(99,102,241,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-indigo-800 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    CAMPUS LOCATION
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 font-bold text-[9px]">
                    24 CHECKS
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-lg font-sans font-black text-slate-950 tracking-wide block">
                    LIBRARY // 3RD FLOOR
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-500 font-semibold">
                    Quiet Zone · Indoor North Wing
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-white border border-indigo-100 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">TYPICAL 5G HOLD</div>
                    <div className="text-xl font-sans font-black text-amber-600">82% STABLE</div>
                  </div>
                  <div className="text-right text-[9px] font-mono-code text-emerald-700 font-bold">
                    HIGH RELIABILITY
                  </div>
                </div>
              </div>

              <div className="my-2 space-y-1.5 text-[9px] font-mono-code">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-slate-800 font-bold">Canteen Walkway</span>
                  <span className="text-amber-700 font-bold">61% (Flux)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-slate-800 font-bold">Hostel Blocks</span>
                  <span className="text-rose-700 font-bold">18% (4G LTE)</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-indigo-100 shadow-xs text-[10px] text-slate-600">
                <p className="leading-relaxed">
                  <strong className="text-indigo-800">Learned pattern:</strong> 5G holds consistently inside the library; switches to 4G along the outdoor corridor.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 4. Mini Bottom Switcher Inside Phone (Light Theme) */}
      <div className="relative z-20 px-3 py-2 border-t border-slate-200/90 bg-white/90 backdrop-blur-md flex items-center justify-between gap-1">
        {(['CONNECTED', 'DEGRADING', 'ACTION', 'RECOVERED', 'MEMORY'] as ConnectivityState[]).map((st, i) => (
          <button
            key={st}
            onClick={() => onSelectState && onSelectState(st)}
            className={`flex-1 py-1 rounded-lg text-[8px] font-mono-code font-bold transition-all text-center cursor-pointer ${
              connectivityState === st
                ? 'bg-[#F0B31C] text-[#07090E] shadow-xs scale-102 font-black'
                : 'text-slate-500 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/60'
            }`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
