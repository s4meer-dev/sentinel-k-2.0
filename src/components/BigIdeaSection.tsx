import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, CheckCircle2 } from 'lucide-react';

interface Tier {
  id: string;
  role: string;
  tag: string;
  actor: string;
  principle: string;
  whatItDoes: string;
  whatItNeverDoes: string;
  evidenceExample: string;
  badgeColor: string;
}

export const BigIdeaSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('llm');

  const tiers: Tier[] = [
    {
      id: 'llm',
      role: 'REASONING & ORCHESTRATION',
      tag: 'COGNITIVE ENGINE',
      actor: 'On-Device NPU + Office Kit LLM',
      principle: 'Reason over context. Formulate hypotheses. Never trust internal world models for physical reality.',
      whatItDoes:
        'Parses ambiguous human dispatches (voice, chat, radio transcripts), extracts candidate operational intents, structures execution payloads, and orchestrates verification suites.',
      whatItNeverDoes:
        'NEVER acts as the source of truth for physics. NEVER approves high-impact SCADA writes directly. NEVER bypasses deterministic simulation.',
      evidenceExample: 'Intent parsed: "SET PUMP_04 = 850 RPM" from voice transcript. Confidence: 0.94.',
      badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
    },
    {
      id: 'tools',
      role: 'ACTUAL SENSING & COMPUTATION',
      tag: 'MEASUREMENT SUITE',
      actor: 'Domain OT Tools & Protocol Analyzers',
      principle: 'Measure real state. Extract verifiable signatures. Ground every claim in telemetry.',
      whatItDoes:
        'Queries real-time SCADA manifolds, inspects Modbus/DNP3 packet frames, extracts acoustic and cryptographic metadata from incoming phone calls, and logs immutable event traces.',
      whatItNeverDoes:
        'Does not speculate or extrapolate beyond calibrated sensor bounds. Does not alter operational logic.',
      evidenceExample: 'Active sensor telemetry: Manifold P_02 = 5.2 bar, Valve_02 = 0% (Closed), Flow = 320 GPM.',
      badgeColor: 'text-amber-900 bg-amber-50 border-amber-200',
    },
    {
      id: 'validators',
      role: 'SOURCE OF TRUTH',
      tag: 'DETERMINISTIC SIMULATION',
      actor: 'EPANET / WNTR Hydrodynamic Physics Twin',
      principle: 'Mathematical invariants cannot be hallucinated. Run full-physics forward simulation.',
      whatItDoes:
        'Simulates transient fluid mechanics, pressure waves, overpressure thresholds, and thermal constraints. Enforces hard safety invariants (P_max <= 9.2 bar).',
      whatItNeverDoes:
        'Does not compromise. If fluid dynamics predict 11.4 bar at node 14, it issues a deterministic REJECT regardless of authority ranking.',
      evidenceExample: 'Simulated consequence: P_max = 11.4 bar (LIMIT 9.2 bar) at t+42s. Status: HARD FAIL.',
      badgeColor: 'text-red-900 bg-red-50 border-red-200',
    },
    {
      id: 'human',
      role: 'FINAL SOVEREIGN AUTHORITY',
      tag: 'OPERATIONAL SOVEREIGNTY',
      actor: 'Certified Field Operator on iQOO Terminal',
      principle: 'AI advises, simulates, and warns. The certified human operator commands.',
      whatItDoes:
        'Receives the complete evidence bundle, reviews the cyber pass vs physical failure alert, examines the critic-generated safe alternative, and exercises manual confirmation.',
      whatItNeverDoes:
        'Never operates blind. Is never bypassed by automated background execution loops.',
      evidenceExample: 'Operator Biometric Confirmation: Authorized Safe Plan #B-7 (Staged 620 RPM + Valve 40%).',
      badgeColor: 'text-emerald-900 bg-emerald-50 border-emerald-200',
    },
  ];

  const current = tiers.find((t) => t.id === activeTier) || tiers[0];

  return (
    <section id="big-idea" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <BrainCircuit className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">FOUNDATIONAL ARCHITECTURE</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">ZERO PROBABILISTIC GAMBLING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            WE DON&apos;T ASK THE LLM TO <br />
            <span className="text-slate-900 underline decoration-[#F0B31C] decoration-4 underline-offset-8">
              DECIDE WHAT IS TRUE.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The core flaw of modern &ldquo;AI for Infrastructure&rdquo; is letting probabilistic language models guess operational safety. Sentinel-K strictly separates reasoning, measurement, physical simulation, and human sovereignty.
          </p>
        </div>

        {/* 4 Pillars Interactive Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-white border border-black/[0.06] shadow-2xs">
            {tiers.map((t, idx) => {
              const isSelected = activeTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#090D15] text-white border-[#090D15] shadow-xs'
                      : 'bg-transparent border-transparent hover:bg-black/[0.02] text-slate-600 hover:text-black'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono-code text-[10px] font-bold ${
                      isSelected ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#F0B31C]' : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  <div className={`text-xs sm:text-sm font-sans font-black tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#090D15]'
                  }`}>
                    {t.id === 'llm' && '1. LLM'}
                    {t.id === 'tools' && '2. TOOLS'}
                    {t.id === 'validators' && '3. TWIN'}
                    {t.id === 'human' && '4. OPERATOR'}
                  </div>
                  <div className={`text-[10px] font-mono-code mt-0.5 uppercase tracking-wider ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {t.role.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-5 p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Philosophy & Bounds */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase tracking-wider border ${current.badgeColor}`}>
                      {current.tag}
                    </span>
                    <span className="text-xs font-mono-code text-slate-500">
                      {current.actor}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-black text-[#090D15]">
                    {current.role}
                  </h3>

                  <div className="text-sm font-mono-code font-bold text-amber-800 mt-1.5 italic">
                    &ldquo;{current.principle}&rdquo;
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    <div>
                      <strong className="text-[#090D15]">What It Does:</strong> {current.whatItDoes}
                    </div>
                    <div>
                      <strong className="text-red-700">What It NEVER Does:</strong> {current.whatItNeverDoes}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Evidence Display */}
                <div className="lg:col-span-5">
                  <div className="p-4 rounded-xl bg-[#FAFAF8] border border-black/[0.06]">
                    <div className="flex items-center justify-between text-xs font-mono-code text-slate-500 pb-2 mb-2.5 border-b border-black/[0.05]">
                      <span className="text-slate-900 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        RUNTIME TELEMETRY HARNESS
                      </span>
                      <span className="text-[10px] text-slate-600 font-bold">HARD BOUND</span>
                    </div>

                    <div className="text-xs font-mono-code space-y-2.5">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase">RUNTIME EVIDENCE SNIPPET:</span>
                        <div className="mt-1 p-2.5 rounded-lg bg-white border border-black/[0.06] text-[#090D15] text-[11px] font-bold">
                          {current.evidenceExample}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-black/[0.05]">
                        <span>DETERMINISTIC DRIFT:</span>
                        <span className="text-emerald-700 font-bold">0.00% (STRICT PROOF)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The Golden Rule Banner */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white border border-black/[0.06] text-xs font-mono-code text-slate-700 shadow-2xs">
            <span className="text-amber-800 font-black uppercase">GOLDEN RULE:</span>
            <span>LLMs hypothesize. Sensors measure. Digital Twins simulate. Humans authorize.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
