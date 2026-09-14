import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import type { ConnectivityState } from '../types/connectivity';

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
  return (
    <section 
      id="vision" 
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F5] border-b border-black/[0.06]"
    >
      {/* Soft warm editorial ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/[0.08] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.06] blur-[160px] pointer-events-none -z-10" />
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Top Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#F0B31C] animate-pulse" />
              <span className="font-extrabold text-slate-900">iQOO × CONNECTIVITY INTELLIGENCE</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">NETWORK EXPERIENCE ENGINE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-slate-950 uppercase leading-[0.98]"
            >
              YOUR PHONE <br />
              CONNECTS. <br />
              <span className="inline-block mt-2 px-3 py-1 bg-[#F0B31C] text-[#07090E] rounded-2xl shadow-[0_4px_20px_rgba(240,179,28,0.3)]">
                [WE MAKE IT SMARTER.]
              </span>
            </motion.h1>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Connectivity shouldn't stop at showing you 5G or Wi-Fi. It should understand when your connection is struggling — and help you respond.
            </motion.p>

            {/* Live Telemetry Harness Quick Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-lg"
            >
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] text-xs font-mono-code">
                <span className="text-slate-500 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  CELLULAR TELEMETRY HARNESS
                </span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  NOMINAL 5G ATTACHMENT
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-3 font-mono-code text-center">
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-black/[0.04]">
                  <div className="text-[9px] text-slate-500 uppercase">CURRENT</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">5G SA</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-black/[0.04]">
                  <div className="text-[9px] text-slate-500 uppercase">STABILITY</div>
                  <div className="text-sm font-extrabold text-emerald-600 mt-0.5">92%</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-black/[0.04]">
                  <div className="text-[9px] text-slate-500 uppercase">LATENCY</div>
                  <div className="text-sm font-extrabold text-blue-600 mt-0.5">18 ms</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-black/[0.04]">
                  <div className="text-[9px] text-slate-500 uppercase">EVENTS</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">00</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-500 mt-3 pt-2 border-t border-black/[0.06]">
                <span>OBSERVE → UNDERSTAND → ACT → VERIFY</span>
                <span className="text-[#B45309] font-bold">ACTIVE HARNESS</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExperienceClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(240,179,28,0.35)] hover:shadow-[0_6px_25px_rgba(240,179,28,0.5)] active:scale-98 cursor-pointer"
              >
                <span>TRY THE EXPERIENCE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onVisionClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-black/15 font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#F0B31C]" />
                <span>SEE THE VISION</span>
              </button>
            </motion.div>

          </div>

          {/* Right Smartphone Hero Display */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[600px] lg:min-h-[720px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <PhoneMockup 
                connectivityState={connectivityState}
                onSelectState={setConnectivityState}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
