import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, 
  VideoOff, 
  ArrowDownCircle, 
  Radio, 
  AlertTriangle,
  ArrowRight,
  TrendingDown
} from 'lucide-react';

interface Stage {
  id: number;
  label: string;
  icon: string;
  symptom: string;
  networkIcon: string;
  latency: string;
  throughput: string;
  packetLoss: string;
  color: string;
  description: string;
}

export const ProblemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stages: Stage[] = [
    {
      id: 0,
      label: 'GAMING SESSIONS',
      icon: 'game',
      symptom: 'BUT YOUR GAME LAGS.',
      networkIcon: '5G',
      latency: '18 ms ➔ 164 ms',
      throughput: '240 Mbps',
      packetLoss: '14.2%',
      color: 'border-amber-500/50 bg-amber-500/[0.04]',
      description: 'The indicator at the top of your screen still says 5G. But micro-jitter at the cell edge starts discarding real-time UDP packets, causing rubberbanding and stuttering.',
    },
    {
      id: 1,
      label: 'VIDEO CALLS',
      icon: 'call',
      symptom: 'YOUR CALL FREEZES.',
      networkIcon: '4G LTE',
      latency: '186 ms',
      throughput: '12 Mbps',
      packetLoss: '22.8%',
      color: 'border-red-500/50 bg-red-500/[0.04]',
      description: 'Without any warning, your phone performs an uncoordinated handover from 5G to 4G. Voice frames drop and your client pauses playback to re-buffer.',
    },
    {
      id: 2,
      label: 'LARGE DOWNLOADS',
      icon: 'download',
      symptom: 'YOUR DOWNLOAD DROPS.',
      networkIcon: '5G ➔ 4G',
      latency: '240 ms',
      throughput: '3 Mbps',
      packetLoss: '31.5%',
      color: 'border-orange-500/50 bg-orange-500/[0.04]',
      description: 'Rapid ping-ponging between 5G NR and LTE carrier frequencies forces TCP socket congestion collapse. The transfer speed falls off a cliff.',
    },
  ];

  const current = stages[activeStep];

  return (
    <section id="problem" className="relative py-28 md:py-36 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/15 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-950/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Radio className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">THE RELATABLE PROBLEM</span>
            <span className="text-slate-600">/</span>
            <span>WHAT ACTUALLY HAPPENS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.08]">
            YOUR PHONE SAYS:{' '}
            <span className="px-3 py-1 bg-white/[0.08] border border-white/15 rounded-xl font-mono-code text-blue-400 inline-block ml-1">
              "5G"
            </span>
          </h2>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#0E1422] border border-white/10 backdrop-blur-xl">
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                  activeStep === idx
                    ? 'bg-[#151D2E] border border-white/20 shadow-lg text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activeStep === idx ? 'bg-[#F0B31C] text-[#07090E]' : 'bg-white/[0.05] text-slate-400'
                  }`}>
                    {stage.icon === 'game' && <Gamepad2 className="w-4 h-4" />}
                    {stage.icon === 'call' && <VideoOff className="w-4 h-4" />}
                    {stage.icon === 'download' && <ArrowDownCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider block text-slate-400">
                      {stage.label}
                    </span>
                    <span className="text-sm font-display font-black tracking-tight text-white">
                      {stage.symptom}
                    </span>
                  </div>
                </div>

                <div className="font-mono-code text-xs font-bold text-slate-500">
                  0{idx + 1}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className={`mt-6 p-6 sm:p-8 rounded-3xl glass-panel border ${current.color} shadow-2xl relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-mono-code text-red-300 font-bold uppercase mb-4">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    EXPERIENCE DETERIORATION OBSERVED
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                    {current.symptom}
                  </h3>

                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.description}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/[0.08]">
                    <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                      CELLULAR HANDOVER SEQUENCE (OBSERVED ON PHONE)
                    </div>
                    <div className="flex items-center gap-3 font-mono-code text-xs">
                      <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                        5G ACTIVE
                      </span>
                      <ArrowRight className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                        4G LTE FALLBACK
                      </span>
                      <ArrowRight className="w-4 h-4 text-red-400 animate-pulse" />
                      <span className="px-3 py-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                        BUFFER TIMEOUT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">
                      LATENCY SPIKE
                    </span>
                    <span className="text-xl font-display font-black text-amber-400 mt-1 block">
                      {current.latency}
                    </span>
                    <span className="text-[10px] font-mono-code text-slate-500 mt-1 block">
                      Buffering delay
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">
                      PACKET LOSS
                    </span>
                    <span className="text-xl font-display font-black text-red-400 mt-1 block">
                      {current.packetLoss}
                    </span>
                    <span className="text-[10px] font-mono-code text-slate-500 mt-1 block">
                      Dropped UDP stream
                    </span>
                  </div>

                  <div className="col-span-2 p-4 rounded-2xl bg-black/40 border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-wider block">
                        EFFECTIVE THROUGHPUT
                      </span>
                      <span className="text-lg font-display font-black text-white mt-0.5 block">
                        {current.throughput}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono-code text-amber-400 font-bold">
                      <TrendingDown className="w-4 h-4" />
                      <span>-85% FLUX</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10 relative overflow-hidden">
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#F0B31C] font-extrabold block mb-3">
            THE UNNOTICED TRUTH
          </span>
          
          <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight leading-snug uppercase">
            THE NETWORK CHANGED. <br />
            YOU DIDN'T KNOW WHY. <br />
            <span className="text-slate-400">AND YOU COULDN'T DO MUCH ABOUT IT.</span>
          </h3>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-base sm:text-lg font-heading font-extrabold text-white">
              "Connectivity is more than a network icon."
            </span>
            <span className="text-xs font-mono-code text-slate-400">
              Observing reality vs static indicator icons
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
