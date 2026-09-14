import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import type { ConnectivityState } from '../types/connectivity';
import { 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Compass, 
  ChevronDown 
} from 'lucide-react';

interface HeroProps {
  connectivityState: ConnectivityState;
  setConnectivityState: (state: ConnectivityState) => void;
  onExperienceClick: () => void;
  onVisionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  connectivityState,
  setConnectivityState,
  onExperienceClick,
  onVisionClick,
}) => {
  const getTelemetryMetrics = () => {
    switch (connectivityState) {
      case 'CONNECTED':
        return {
          network: '5G SA',
          stability: '92%',
          latency: '18 ms',
          events: '00',
          stateText: 'NOMINAL 5G ATTACHMENT',
          badgeBg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
        };
      case 'DEGRADING':
        return {
          network: '5G → 4G LTE',
          stability: '44%',
          latency: '142 ms',
          events: '03',
          stateText: 'CELL BOUNDARY FLUX',
          badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        };
      case 'ACTION':
        return {
          network: 'OPTIMIZING...',
          stability: '78%',
          latency: '45 ms',
          events: '01',
          stateText: 'RE-NEGOTIATING BANDS',
          badgeBg: 'bg-[#F0B31C]/20 text-[#F0B31C] border-[#F0B31C]/40 font-black',
        };
      case 'RECOVERED':
        return {
          network: '5G STABLE ✓',
          stability: '96%',
          latency: '21 ms',
          events: '01',
          stateText: 'IMPROVEMENT VERIFIED',
          badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        };
      case 'MEMORY':
        return {
          network: '5G (LIBRARY)',
          stability: '82%',
          latency: '24 ms',
          events: '24 Visits',
          stateText: 'PATTERN RECOGNIZED',
          badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
        };
    }
  };

  const metrics = getTelemetryMetrics();

  return (
    <section className="relative min-h-[95vh] pt-24 md:pt-32 pb-16 overflow-hidden flex flex-col justify-center bg-[#07090E]">
      <div className="absolute inset-0 network-grid opacity-60 pointer-events-none -z-10" />

      <div className="absolute top-1/4 left-1/12 w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/12 w-[650px] h-[650px] rounded-full bg-[#F0B31C]/[0.06] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono-code mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#F0B31C] shadow-[0_0_8px_rgba(240,179,28,0.8)] animate-pulse" />
              <span className="font-extrabold tracking-wider text-white">iQOO × CONNECTIVITY INTELLIGENCE</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 font-medium">NETWORK EXPERIENCE ENGINE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.85rem] font-display font-black tracking-tight text-white leading-[1.04]"
            >
              YOUR PHONE <br className="hidden sm:inline" />
              CONNECTS.
              <span className="block mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-[3.25rem]">
                <span className="inline-block bg-[#F0B31C] text-[#07090E] px-4 py-1 rounded-xl shadow-[0_0_30px_rgba(240,179,28,0.25)] border border-[#F0B31C]/40 font-black tracking-tight">
                  [WE MAKE IT SMARTER.]
                </span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300/80 max-w-xl font-normal leading-relaxed"
            >
              Connectivity shouldn't stop at showing you 5G or Wi-Fi. It should understand when your connection is struggling — and help you respond.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 w-full max-w-xl p-5 rounded-2xl glass-panel shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono-code">
                <span className="text-white font-bold flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  CELLULAR TELEMETRY HARNESS
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase border ${metrics.badgeBg}`}>
                  {metrics.stateText}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 mt-3 text-center">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">CURRENT</span>
                  <span className="text-sm sm:text-base font-display font-black text-white mt-0.5 block truncate">
                    {metrics.network}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">STABILITY</span>
                  <span className="text-sm sm:text-base font-display font-black text-[#F0B31C] mt-0.5 block">
                    {metrics.stability}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">LATENCY</span>
                  <span className="text-sm sm:text-base font-display font-black text-blue-400 mt-0.5 block">
                    {metrics.latency}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">EVENTS</span>
                  <span className="text-sm sm:text-base font-display font-black text-white mt-0.5 block">
                    {metrics.events}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.06] text-[11px] font-mono-code text-slate-400 flex items-center justify-between">
                <span>OBSERVE → UNDERSTAND → ACT → VERIFY</span>
                <span className="font-bold text-[#F0B31C] bg-[#F0B31C]/10 px-2 py-0.5 rounded text-[10px] tracking-wider border border-[#F0B31C]/20">
                  ACTIVE HARNESS
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onExperienceClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(240,179,28,0.35)] hover:shadow-[0_0_35px_rgba(240,179,28,0.5)] active:scale-98 cursor-pointer"
              >
                <span>TRY THE EXPERIENCE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onVisionClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 border border-white/10 shadow-sm cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#F0B31C]" />
                <span>SEE THE VISION</span>
              </button>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-[10px] font-mono-code text-blue-400 uppercase font-bold tracking-wider">CELLULAR OBSERVATION</div>
                <div className="text-sm font-display font-extrabold text-white mt-0.5 tracking-tight">Snapdragon Modem-RF</div>
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-[#F0B31C] uppercase font-bold tracking-wider">PREDICTIVE HORIZON</div>
                <div className="text-sm font-display font-extrabold text-white mt-0.5 tracking-tight">Sub-Second Jitter</div>
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-blue-400 uppercase font-bold tracking-wider">ON-DEVICE PRIVACY</div>
                <div className="text-sm font-display font-extrabold text-white mt-0.5 tracking-tight">Zero Cloud History</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono-code text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white">Live product prototype:</span>
              <span>Tap stages 01–05 under the phone mockup</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#F0B31C]" />
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <svg className="w-[580px] h-[580px] opacity-40 animate-pulse" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="80" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                <circle cx="200" cy="200" r="130" stroke="#F0B31C" strokeWidth="1" strokeDasharray="4 6" opacity="0.2" />
                <circle cx="200" cy="200" r="180" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 4" opacity="0.15" />
                <path d="M 50,200 Q 200,80 350,200" stroke="#3B82F6" strokeWidth="1.5" opacity="0.25" />
                <path d="M 60,230 Q 200,120 340,230" stroke="#F0B31C" strokeWidth="1" opacity="0.2" />
                <path d="M 40,170 Q 200,40 360,170" stroke="#3B82F6" strokeWidth="1" opacity="0.15" />
              </svg>
            </div>

            <PhoneMockup
              connectivityState={connectivityState}
              onSelectState={setConnectivityState}
              showControls={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
