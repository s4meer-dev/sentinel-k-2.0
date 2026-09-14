import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  Radio
} from 'lucide-react';

interface PhilosophyStage {
  id: string;
  step: string;
  name: string;
  question: string;
  summary: string;
  detail: string;
  telemetryEvidence: string;
  color: string;
}

export const BigIdeaSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('OBSERVE');

  const stages: PhilosophyStage[] = [
    {
      id: 'OBSERVE',
      step: 'STAGE 01',
      name: 'OBSERVE',
      question: '“What’s happening right now?”',
      summary: 'Passively tracking cellular transitions, carrier switches, and link layer jitter.',
      detail: 'The phone observes signal flux, carrier aggregation states (n78/n28), and RSRP variations over a moving 30-second window without burdening modem power.',
      telemetryEvidence: 'RSRP: -114 dBm · Band n78 dropped to LTE B3 · 3 handovers in 30s',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    },
    {
      id: 'UNDERSTAND',
      step: 'STAGE 02',
      name: 'UNDERSTAND',
      question: '“Is it actually a problem for the user?”',
      summary: 'Separating normal network handovers from active application stutters.',
      detail: 'A momentary dip during passive idle is ignored; a 160ms latency surge while UDP gaming packets are actively streaming is flagged as real connection instability.',
      telemetryEvidence: 'Active Foreground: Low-latency Game Client · Severity: HIGH INSTABILITY',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    },
    {
      id: 'ACT',
      step: 'STAGE 03',
      name: 'ACT',
      question: '“What can we do within Android permissions?”',
      summary: 'Recommending or executing supported recovery within platform guardrails.',
      detail: 'Where supported, initiates cellular radio interface re-evaluation, adjusts antenna priority across the iQOO surround matrix, or prompts Wi-Fi assist.',
      telemetryEvidence: 'Action: Re-evaluate carrier band priority · Guided recovery active',
      color: 'border-[#F0B31C]/40 text-[#F0B31C] bg-[#F0B31C]/10',
    },
    {
      id: 'VERIFY',
      step: 'STAGE 04',
      name: 'VERIFY',
      question: '“Did it actually get better?”',
      summary: 'Closing the feedback loop by measuring post-action stability.',
      detail: 'Unlike traditional dashboards that throw suggestions and disappear, the system watches the next 15 seconds to verify if 5G re-anchored and packet loss dropped.',
      telemetryEvidence: 'Post-Action Latency: 21 ms · 5G SA Locked · Stability +52%',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'LEARN',
      step: 'STAGE 05',
      name: 'LEARN',
      question: '“Does this happen here again?”',
      summary: 'Remembering localized connectivity patterns over repeated visits.',
      detail: 'Retains an on-device spatial memory of where 5G consistently holds versus where physical barriers trigger drops, building predictive contextual awareness.',
      telemetryEvidence: 'Campus Library (3rd Floor) · 24 Checks: 82% Stable · Low Interference',
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    },
  ];

  const current = stages.find(s => s.id === selectedStage) || stages[0];

  return (
    <section id="vision" className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-blue-950/20 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <BrainCircuit className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">THE CORE PHILOSOPHY</span>
            <span className="text-slate-600">/</span>
            <span>CLOSED-LOOP INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            WHAT IF YOUR PHONE <br />
            <span className="text-[#F0B31C]">UNDERSTOOD</span> ITS CONNECTION?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Not just showing a static indicator, but actively closing the loop between observing a drop and verifying whether things improved.
          </p>
        </div>

        {/* The 5 Giant Stages Visual Pipeline */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 p-2 rounded-2xl bg-[#0C101A] border border-white/10 backdrop-blur-xl">
            {stages.map((st, i) => (
              <button
                key={st.id}
                onClick={() => setSelectedStage(st.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer relative ${selectedStage === st.id ? 'bg-white/10 shadow-lg border border-white/20' : 'hover:bg-white/[0.04]'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code font-bold text-slate-500">
                    0{i + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${selectedStage === st.id ? 'bg-[#F0B31C]' : 'bg-slate-700'}`} />
                </div>

                <div className="text-sm sm:text-base font-display font-black tracking-wide text-white">
                  {st.name}
                </div>

                <div className="text-[10px] font-mono-code text-slate-400 mt-1 line-clamp-1">
                  {st.question}
                </div>
              </button>
            ))}
          </div>

          {/* Deep dive card into selected stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Stage definition and human inquiry */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-white/[0.06] border border-white/10 text-[#F0B31C]">
                      {current.step}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400">
                      CLOSED-LOOP PILLAR
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {current.name}
                  </h3>

                  <div className="text-lg sm:text-xl font-heading font-extrabold text-[#F0B31C] mt-2">
                    {current.question}
                  </div>

                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {current.detail}
                  </p>

                  <div className="mt-6 p-3.5 rounded-2xl bg-black/50 border border-white/[0.08] text-xs font-mono-code">
                    <span className="text-slate-500 uppercase text-[9px] block tracking-wider mb-1">
                      LOCAL OBSERVATION SIGNATURE
                    </span>
                    <span className="text-slate-200 font-semibold">
                      {current.telemetryEvidence}
                    </span>
                  </div>
                </div>

                {/* Right: Graphic Card Visual */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090D17] border border-white/10 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider">
                      PROCESS OBJECTIVE
                    </span>
                    <Radio className="w-4 h-4 text-[#F0B31C]" />
                  </div>

                  <div className="my-6">
                    <span className="text-xs font-mono-code text-slate-400 block">CORE GOAL</span>
                    <span className="text-xl font-display font-extrabold text-white mt-1 block leading-snug">
                      {current.summary}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                    <span>STATUS: ON-DEVICE ENGINE</span>
                    <span className="text-emerald-400 font-bold">ACTIVE PIPELINE</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
