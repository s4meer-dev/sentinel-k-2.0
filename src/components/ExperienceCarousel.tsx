import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Activity, 
  Radio, 
  Zap, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const ExperienceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: '01',
      stepNumber: '01 / 04',
      title: 'DETECT',
      headline: '“Your phone just dropped to 4G.”',
      subhead: 'Continuous passive monitoring notices 5G-to-4G transition the moment it occurs.',
      color: 'bg-white',
      borderColor: 'border-blue-200',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#FAF9F5] rounded-2xl border border-black/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
            <span>MODEM EVENT STREAM</span>
            <span className="text-blue-600 font-bold">EVENT #1042</span>
          </div>

          <div className="my-4 space-y-2 font-mono-code text-xs">
            <div className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between shadow-xs">
              <span className="text-slate-600">PREVIOUS STATE</span>
              <span className="text-emerald-700 font-bold">5G SA (n78 3.5GHz)</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between shadow-xs">
              <span className="text-slate-600">NEW STATE</span>
              <span className="text-amber-700 font-bold">4G LTE (Band 3 1800MHz)</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between shadow-xs">
              <span className="text-slate-600">DETECTION DELTA</span>
              <span className="text-blue-700 font-bold">12 ms from hardware event</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono-code text-blue-800">
            Status: Transition registered. Diagnosing handover root-cause.
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
      color: 'bg-white',
      borderColor: 'border-amber-200',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#FAF9F5] rounded-2xl border border-black/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
            <span>MOVING 30s LATENCY & FLUX PROFILE</span>
            <span className="text-amber-600 font-bold">SEVERITY: HIGH</span>
          </div>

          <div className="my-4">
            <div className="h-20 w-full flex items-end gap-1.5 px-2">
              {[25, 28, 30, 26, 95, 120, 145, 180, 70, 30, 130, 160, 80, 32, 28, 30].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div 
                    style={{ height: `${(val / 180) * 100}%` }} 
                    className={`w-full rounded-t-sm ${val > 100 ? 'bg-amber-500' : 'bg-blue-600'}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono-code text-slate-500 mt-2 border-t border-black/[0.08] pt-1">
              <span>-30s WINDOW</span>
              <span className="text-amber-700 font-bold">LATENCY SPIKE 180ms</span>
              <span>NOW</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono-code text-amber-800">
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
      color: 'bg-white',
      borderColor: 'border-[#F0B31C]/60',
      tagColor: 'bg-[#F0B31C]/20 text-amber-800 border-[#F0B31C]/50',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#FAF9F5] rounded-2xl border border-black/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
            <span>AVAILABLE RECOVERY PATHS</span>
            <span className="text-amber-700 font-bold">READY TO DEPLOY</span>
          </div>

          <div className="my-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-600" />
                <div>
                  <div className="text-xs font-display font-bold text-slate-900">Re-evaluate Carrier Aggregation</div>
                  <div className="text-[10px] font-mono-code text-amber-700">Anchor primary n78 band</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#F0B31C] text-[#07090E] text-[10px] font-mono-code font-extrabold uppercase shadow-xs">
                ACTIONABLE
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between opacity-80 shadow-xs">
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-xs font-display font-bold text-slate-800">Antenna Surround Priority</div>
                  <div className="text-[10px] font-mono-code text-slate-500">Shift to upper landscape receiver</div>
                </div>
              </div>
              <span className="text-[10px] font-mono-code text-slate-500">SUPPORTED</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-black/[0.08] text-xs font-mono-code text-slate-600 shadow-xs">
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
      color: 'bg-white',
      borderColor: 'border-emerald-200',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#FAF9F5] rounded-2xl border border-black/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-500">
            <span>POST-ACTION COMPARISON</span>
            <span className="text-emerald-600 font-bold">LOOP VERIFIED</span>
          </div>

          <div className="my-4 grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-red-50 border border-red-200">
              <span className="text-[9px] font-mono-code text-red-700 uppercase block font-bold">BEFORE ACTION</span>
              <span className="text-lg font-display font-black text-slate-900 mt-1 block">4G LTE</span>
              <span className="text-[10px] font-mono-code text-red-600 mt-0.5 block">142 ms · 7 Drops</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300">
              <span className="text-[9px] font-mono-code text-emerald-700 uppercase block font-bold">AFTER VERIFICATION</span>
              <span className="text-lg font-display font-black text-emerald-800 mt-1 block">5G STABLE</span>
              <span className="text-[10px] font-mono-code text-emerald-600 mt-0.5 block">21 ms · 0 Drops</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs font-mono-code text-emerald-900 flex items-center justify-between">
            <span>Result:</span>
            <span className="font-bold flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
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
    <section id="experience" className="relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Progress */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] text-xs font-mono-code text-slate-700 mb-4 shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span className="font-extrabold text-slate-900">THE EXPERIENCE CAROUSEL</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">4-STAGE WALKTHROUGH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 tracking-tight uppercase">
              CHECK YOUR 5G <br className="hidden sm:inline" />
              <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
                IN SECONDS.
              </span>
            </h2>
          </div>

          {/* Carousel Progress Controls */}
          <div className="flex items-center gap-4">
            <div className="font-mono-code text-sm font-bold text-slate-900 px-3.5 py-1.5 rounded-xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs">
              {card.stepNumber}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                className="p-3 rounded-xl bg-[#FAF9F5] hover:bg-slate-100 border border-black/[0.08] text-slate-800 transition-colors shadow-xs cursor-pointer"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextCard}
                className="p-3 rounded-xl bg-[#FAF9F5] hover:bg-slate-100 border border-black/[0.08] text-slate-800 transition-colors shadow-xs cursor-pointer"
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
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'bg-[#F0B31C] text-[#07090E] shadow-sm' 
                    : 'bg-[#FAF9F5] text-slate-600 hover:bg-slate-100 border border-black/[0.06]'
                }`}
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
              className={`p-6 sm:p-10 rounded-3xl ${card.color} border ${card.borderColor} shadow-[0_12px_45px_rgba(0,0,0,0.05)] relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Information Content */}
                <div className="lg:col-span-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider border mb-4 ${card.tagColor}`}>
                    STAGE {card.id} // {card.title}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-slate-950 tracking-tight leading-tight">
                    {card.headline}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {card.subhead}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={nextCard}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                    >
                      <span>NEXT STAGE</span>
                      <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
                    </button>
                    <span className="text-xs font-mono-code text-slate-400">
                      Use Arrow keys or Click tabs
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
