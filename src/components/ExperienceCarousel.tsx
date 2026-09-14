import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Radio, 
  Activity, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
} from 'lucide-react';

export const ExperienceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: '01',
      stepNumber: '01 / 04',
      title: 'DETECT',
      headline: '“Your connection is changing.”',
      subhead: 'Observing subtle cellular carrier handovers before your phone freezes.',
      color: 'from-blue-900/30 via-slate-900/40 to-black',
      borderColor: 'border-blue-500/30',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-black/50 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span>CELLULAR ATTACHMENT STREAM</span>
            <span className="text-blue-400 font-bold">100Hz SAMPLING</span>
          </div>

          <div className="my-6 flex items-center justify-center gap-3 sm:gap-4 font-mono-code">
            <div className="p-3 sm:p-4 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-center">
              <span className="text-xl sm:text-2xl font-display font-black text-white block">5G</span>
              <span className="text-[10px] text-blue-300 block mt-0.5">n78 Carrier</span>
            </div>

            <ArrowRight className="w-5 h-5 text-slate-500 animate-pulse" />

            <div className="p-3 sm:p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-center">
              <span className="text-xl sm:text-2xl font-display font-black text-amber-300 block">4G</span>
              <span className="text-[10px] text-amber-300 block mt-0.5">LTE B3</span>
            </div>

            <ArrowRight className="w-5 h-5 text-slate-500 animate-pulse" />

            <div className="p-3 sm:p-4 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-center">
              <span className="text-xl sm:text-2xl font-display font-black text-white block">5G</span>
              <span className="text-[10px] text-blue-300 block mt-0.5">n78 Re-attach</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-slate-300 flex items-center justify-between">
            <span>Ping-Pong Handover Count:</span>
            <span className="text-amber-400 font-bold">03 handovers in 30s</span>
          </div>
        </div>
      ),
    },
    {
      id: '02',
      stepNumber: '02 / 04',
      title: 'UNDERSTAND',
      headline: '“Your connection is becoming unstable.”',
      subhead: 'Correlating cell edge flux with application frame drops.',
      color: 'from-amber-900/30 via-slate-900/40 to-black',
      borderColor: 'border-amber-500/30',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-black/50 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span>MOVING 30s LATENCY &amp; FLUX PROFILE</span>
            <span className="text-amber-400 font-bold">SEVERITY: HIGH</span>
          </div>

          <div className="my-4">
            <div className="h-20 w-full flex items-end gap-1.5 px-2">
              {[25, 28, 30, 26, 95, 120, 145, 180, 70, 30, 130, 160, 80, 32, 28, 30].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div 
                    style={{ height: `${(val / 180) * 100}%` }} className={`w-full rounded-t-sm ${val > 100 ? 'bg-amber-400' : 'bg-blue-500/60'}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono-code text-slate-500 mt-2 border-t border-white/[0.08] pt-1">
              <span>-30s WINDOW</span>
              <span className="text-amber-400 font-bold">? LATENCY SPIKE 180ms</span>
              <span>NOW</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-200">
            Diagnosis: Unstable boundary handover causing packet retransmissions.
          </div>
        </div>
      ),
    },
    {
      id: '03',
      stepNumber: '03 / 04',
      title: 'ACT',
      headline: '“Take the best available action.”',
      subhead: 'Recommending and executing supported recovery actions within Android APIs.',
      color: 'from-[#F0B31C]/20 via-slate-900/40 to-black',
      borderColor: 'border-[#F0B31C]/35',
      tagColor: 'bg-[#F0B31C]/20 text-[#F0B31C] border-[#F0B31C]/40',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-black/50 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span>AVAILABLE RECOVERY PATHS</span>
            <span className="text-[#F0B31C] font-bold">READY TO DEPLOY</span>
          </div>

          <div className="my-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-[#F0B31C]/15 border border-[#F0B31C]/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#F0B31C]" />
                <div>
                  <div className="text-xs font-display font-bold text-white">Re-evaluate Carrier Aggregation</div>
                  <div className="text-[10px] font-mono-code text-[#F0B31C]">Anchor primary n78 band</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#F0B31C] text-[#07090E] text-[10px] font-mono-code font-extrabold uppercase shadow-xs">
                ACTIONABLE
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between opacity-70">
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="text-xs font-display font-bold text-slate-200">Antenna Surround Priority</div>
                  <div className="text-[10px] font-mono-code text-slate-400">Shift to upper landscape receiver</div>
                </div>
              </div>
              <span className="text-[10px] font-mono-code text-slate-400">SUPPORTED</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-slate-300">
            System executes recovery without interrupting user task.
          </div>
        </div>
      ),
    },
    {
      id: '04',
      stepNumber: '04 / 04',
      title: 'VERIFY',
      headline: '“Did it actually improve?”',
      subhead: 'Closing the loop by measuring verified real-world stability.',
      color: 'from-emerald-900/30 via-slate-900/40 to-black',
      borderColor: 'border-emerald-500/30',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-black/50 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span>POST-ACTION COMPARISON</span>
            <span className="text-emerald-400 font-bold">LOOP VERIFIED</span>
          </div>

          <div className="my-4 grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
              <span className="text-[9px] font-mono-code text-red-300 uppercase block">BEFORE ACTION</span>
              <span className="text-lg font-display font-black text-white mt-1 block">4G LTE</span>
              <span className="text-[10px] font-mono-code text-red-400 mt-0.5 block">142 ms · 7 Drops</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
              <span className="text-[9px] font-mono-code text-emerald-300 uppercase block">AFTER VERIFICATION</span>
              <span className="text-lg font-display font-black text-emerald-300 mt-1 block">5G STABLE ?</span>
              <span className="text-[10px] font-mono-code text-emerald-400 mt-0.5 block">21 ms · 0 Drops</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono-code text-emerald-200 flex items-center justify-between">
            <span>Result:</span>
            <span className="font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              +52% Stability Verified
            </span>
          </div>
        </div>
      ),
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % 4);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + 4) % 4);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const card = cards[currentIndex];

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-900/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Progress */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-4">
              <Activity className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span className="font-extrabold text-white">THE EXPERIENCE CAROUSEL</span>
              <span className="text-slate-600">/</span>
              <span>4-STAGE INTERACTIVE WALKTHROUGH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              CHECK YOUR 5G <br className="hidden sm:inline" />
              <span className="text-[#F0B31C]">IN SECONDS.</span>
            </h2>
          </div>

          {/* Carousel Progress Controls */}
          <div className="flex items-center gap-4">
            <div className="font-mono-code text-sm font-bold text-[#F0B31C] px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10">
              {card.stepNumber}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                className="p-3 rounded-xl bg-[#111624] hover:bg-[#182032] border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextCard}
                className="p-3 rounded-xl bg-[#111624] hover:bg-[#182032] border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* The Big Interactive Card Showcase */}
        <div className="mt-10">
          {/* Quick tab switcher */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {cards.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${currentIndex === idx ? 'bg-[#F0B31C] text-[#07090E]' : 'bg-white/[0.04] text-slate-400 hover:text-white'}`}
              >
                {c.id} // {c.title}
              </button>
            ))}
          </div>

          {/* Animated Main Stage Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${card.color} border ${card.borderColor} shadow-2xl backdrop-blur-xl relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Information Content */}
                <div className="lg:col-span-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider border mb-4 ${card.tagColor}`}>
                    STAGE {card.id} // {card.title}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
                    {card.headline}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                    {card.subhead}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={nextCard}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>NEXT STAGE</span>
                      <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
                    </button>
                    <span className="text-xs font-mono-code text-slate-400">
                      Use Arrow keys or Swipe to navigate
                    </span>
                  </div>
                </div>

                {/* Right Interactive Visual Graphic */}
                <div className="lg:col-span-6 min-h-[280px]">
                  {card.renderVisual()}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
