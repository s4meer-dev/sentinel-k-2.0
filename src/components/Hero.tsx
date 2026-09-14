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
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs font-mono-code text-slate-800 mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#F0B31C] animate-pulse shadow-[0_0_8px_rgba(240,179,28,0.8)]" />
              <span className="font-sans font-extrabold tracking-wide text-slate-900">iQOO × CONNECTIVITY INTELLIGENCE</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-bold text-[11px]">PREDICTIVE NETWORK ENGINE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-sans font-black tracking-tight text-slate-950 uppercase leading-[1.02]"
            >
              YOUR PHONE <br />
              CONNECTS. <br />
              <span className="inline-block mt-2.5 px-4 py-1 rounded-2xl bg-[#F0B31C] text-[#07090E] shadow-[0_6px_28px_rgba(240,179,28,0.4)]">
                WE MAKE IT SMARTER.
              </span>
            </motion.h1>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg xl:text-xl text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Today&apos;s phones only tell you if you&apos;re connected to 5G. We give your phone the intelligence to understand connection instability in real time — and autonomously heal it.
            </motion.p>

            {/* Live Telemetry Harness Quick Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] max-w-lg"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono-code">
                <span className="text-slate-700 flex items-center gap-2 font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                  </span>
                  CELLULAR TELEMETRY HARNESS
                </span>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  5G SA NOMINAL
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-3 font-mono-code text-center">
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-slate-200/60">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">CARRIER</div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">n78 3.5G</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-slate-200/60">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">STABILITY</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-700 mt-0.5">98.2%</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-slate-200/60">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">LATENCY</div>
                  <div className="text-xs sm:text-sm font-black text-blue-700 mt-0.5">18 ms</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-slate-200/60">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">HEALING</div>
                  <div className="text-xs sm:text-sm font-black text-amber-800 mt-0.5">&lt;1.4s</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-500 mt-3 pt-2.5 border-t border-slate-100">
                <span className="font-semibold text-slate-600">OBSERVE → DETECT → ACT → VERIFY → LEARN</span>
                <span className="text-amber-800 font-black tracking-wider uppercase">ACTIVE ENGINE</span>
              </div>
            </motion.div>

            {/* Action Buttons & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 flex flex-col gap-4"
            >
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onExperienceClick}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(240,179,28,0.35)] hover:shadow-[0_6px_25px_rgba(240,179,28,0.5)] active:scale-98 cursor-pointer"
                >
                  <span>EXPERIENCE LIVE DEMO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onVisionClick}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>SEE ARCHITECTURE</span>
                </button>
              </div>

              {/* Technical Trust Markers */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono-code text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="text-emerald-700 font-bold">✓</span> Snapdragon Modem-RF
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-700 font-bold">✓</span> 360° Surround Antenna
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-700 font-bold">✓</span> 100% On-Device Privacy
                </span>
              </div>
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
