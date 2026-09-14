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
  const [selectedStage, setSelectedStage] = useState('observe');

  const stages: PhilosophyStage[] = [
    {
      id: 'observe',
      step: '01',
      name: 'OBSERVE',
      question: '“What is happening right now?”',
      summary: 'Continuous passive observation of cellular radio state, band carrier frequencies, ping latency, and raw signal quality.',
      detail: 'Unlike traditional OS indicators that only poll every minute or after connection drops, CI passively ingests RSRP, RSRQ, and cell ID handovers with negligible battery overhead.',
      telemetryEvidence: 'RSRP -104 dBm · Band n78 (3.5 GHz) · Sub-6 Carrier Attach',
      color: 'border-blue-500/40 text-blue-600 bg-blue-50',
    },
    {
      id: 'understand',
      step: '02',
      name: 'UNDERSTAND',
      question: '“Is this connection actually working well?”',
      summary: 'Correlates raw radio metrics with what the user is experiencing — differentiating tower congestion from true signal fade.',
      detail: 'Having 4 bars of 5G means nothing if UDP jitter causes Discord to glitch or PUBG Mobile to drop packets. We interpret whether degradation is transient or structural.',
      telemetryEvidence: 'High Jitter detected: 142ms variance · 18.4% packet drop',
      color: 'border-amber-500/40 text-amber-600 bg-amber-50',
    },
    {
      id: 'act',
      step: '03',
      name: 'ACT',
      question: '“What is the best available action?”',
      summary: 'Provides targeted, intelligent recovery choices within real Android platform constraints and modem capabilities.',
      detail: 'Depending on the diagnostic, recommend or execute supported actions: carrier aggregation reset, primary antenna surround steering, or clean fallback.',
      telemetryEvidence: 'Actionable: Re-evaluate Carrier Aggregation · Primary n78 anchor',
      color: 'border-[#F0B31C]/60 text-amber-700 bg-amber-50',
    },
    {
      id: 'verify',
      step: '04',
      name: 'VERIFY',
      question: '“Did that action actually help?”',
      summary: 'Closes the loop by evaluating the connection post-recovery to measure real delta in latency and packet stability.',
      detail: 'Most systems trigger a reset and walk away blind. CI actively measures 15 seconds of post-action telemetry to verify whether quality restored or if alternate routing is needed.',
      telemetryEvidence: 'Verification: +52% Latency Stability Delta · 0 Packet Drops',
      color: 'border-emerald-500/40 text-emerald-600 bg-emerald-50',
    },
    {
      id: 'learn',
      step: '05',
      name: 'LEARN',
      question: '“What does this place usually look like?”',
      summary: 'Builds localized spatial connectivity memory on-device so future visits benefit from past observations.',
      detail: 'Learns your regular haunts — the library deadzone, the canteen corner with strong 5G SA, the hostel staircase handover — anticipating drops before you notice.',
      telemetryEvidence: 'Spatial Memory: Campus Library Node · 82% 5G Reliability Confirmed',
      color: 'border-purple-500/40 text-purple-600 bg-purple-50',
    },
  ];

  const current = stages.find(s => s.id === selectedStage) || stages[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#FAF9F5] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Radio className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">THE 5-STAGE CLOSED LOOP</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">ENGINEERING DISCIPLINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            WHAT IF YOUR PHONE <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              UNDERSTOOD
            </span> ITS CONNECTION?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Not just showing a static indicator, but actively closing the loop between observing a drop and verifying whether things improved.
          </p>
        </div>

        {/* The 5 Giant Stages Visual Pipeline Tabs */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 p-2 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            {stages.map((st, i) => (
              <button
                key={st.id}
                onClick={() => setSelectedStage(st.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer relative ${
                  selectedStage === st.id
                    ? 'bg-[#F0B31C] text-[#07090E] shadow-md font-bold'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono-code font-bold ${
                    selectedStage === st.id ? 'text-[#07090E]' : 'text-slate-400'
                  }`}>
                    0{i + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${
                    selectedStage === st.id ? 'bg-[#07090E]' : 'bg-slate-300'
                  }`} />
                </div>

                <div className="text-sm sm:text-base font-display font-black tracking-wide">
                  {st.name}
                </div>

                <div className={`text-[10px] font-mono-code mt-1 line-clamp-1 ${
                  selectedStage === st.id ? 'text-slate-900 font-semibold' : 'text-slate-500'
                }`}>
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
              className="mt-6 p-6 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Stage definition and human inquiry */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-[#FAF9F5] border border-black/[0.08] text-amber-700">
                      {current.step} // CLOSED-LOOP PILLAR
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                    {current.name}
                  </h3>

                  <div className="text-base sm:text-lg font-display font-bold text-[#B45309] mt-2">
                    {current.question}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {current.summary}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {current.detail}
                  </p>
                </div>

                {/* Right: Technical Telemetry Box */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs">
                    <div className="flex items-center justify-between text-xs font-mono-code text-slate-500 mb-4 pb-2 border-b border-black/[0.06]">
                      <span className="flex items-center gap-1.5 font-bold text-slate-800">
                        <BrainCircuit className="w-3.5 h-3.5 text-[#F0B31C]" />
                        TELEMETRY REASONING
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        ACTIVE LOOP
                      </span>
                    </div>

                    <div className="font-mono-code text-xs text-slate-800 space-y-3">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">TELEMETRY EVIDENCE:</div>
                        <div className="mt-1 p-2.5 rounded-lg bg-white border border-black/[0.06] text-slate-900 font-bold">
                          {current.telemetryEvidence}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600">
                        <span>PIPELINE DISCIPLINE:</span>
                        <span className="text-amber-700 font-bold uppercase">NO BLIND ACTIONS</span>
                      </div>
                    </div>
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
