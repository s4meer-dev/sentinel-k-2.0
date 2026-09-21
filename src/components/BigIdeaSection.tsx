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
  borderColor: string;
}

export const BigIdeaSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('llm');

  const tiers: Tier[] = [
    {
      id: 'llm',
      role: 'REASONING & ORCHESTRATION',
      tag: 'COGNITIVE ENGINE',
      actor: 'On-Device NPU + Cloud / Office Kit LLM',
      principle: 'Reason over context. Formulate hypotheses. Never trust internal world models for physical reality.',
      whatItDoes:
        'Parses ambiguous human dispatches (voice, chat, radio transcripts), extracts candidate operational intents, structures execution payloads, and orchestrates verification suites.',
      whatItNeverDoes:
        'NEVER acts as the source of truth for physics. NEVER approves high-impact SCADA writes directly. NEVER bypasses deterministic simulation.',
      evidenceExample: 'Intent parsed: "SET PUMP_04 = 850 RPM" from voice transcript. Confidence: 0.94.',
      badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
      borderColor: 'border-cyan-500/40',
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
      badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
      borderColor: 'border-amber-500/40',
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
      badgeColor: 'text-red-400 bg-red-950/60 border-red-500/30',
      borderColor: 'border-red-500/40',
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
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
      borderColor: 'border-emerald-500/40',
    },
  ];

  const current = tiers.find((t) => t.id === activeTier) || tiers[0];

  return (
    <section id="big-idea" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      {/* Precision Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/[0.05] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">THE FOUNDATIONAL ARCHITECTURE</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">NO BLIND HYPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            WE DON&apos;T ASK THE LLM TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              DECIDE WHAT IS TRUE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The core flaw of modern &ldquo;AI for Infrastructure&rdquo; is letting probabilistic language models guess operational safety. Sentinel-K strictly separates reasoning, measurement, physical simulation, and human sovereignty.
          </p>
        </div>

        {/* 4 Pillars Interactive Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2 rounded-2xl bg-[#0B0F19] border border-white/[0.08]">
            {tiers.map((t, idx) => {
              const isSelected = activeTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#121826] border-cyan-500/60 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-[10px] font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-slate-700'
                      }`}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-sans font-black tracking-tight text-white">
                    {t.id === 'llm' && '1. LLM'}
                    {t.id === 'tools' && '2. DOMAIN TOOLS'}
                    {t.id === 'validators' && '3. VALIDATORS'}
                    {t.id === 'human' && '4. HUMAN'}
                  </div>
                  <div className="text-[10px] font-mono-code text-slate-400 mt-1 uppercase tracking-wider">
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0B0F19]/90 border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Philosophy & Bounds */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase tracking-wider border ${current.badgeColor}`}>
                      {current.tag}
                    </span>
                    <span className="text-xs font-mono-code text-slate-500">
                      {current.actor}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-black text-white">
                    {current.role}
                  </h3>

                  <div className="text-sm font-mono-code font-semibold text-[#F0B31C] mt-2 italic">
                    &ldquo;{current.principle}&rdquo;
                  </div>

                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-cyan-300">What It Does:</strong> {current.whatItDoes}
                    </div>
                    <div>
                      <strong className="text-red-400">What It NEVER Does:</strong> {current.whatItNeverDoes}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Evidence Display */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-xl bg-[#121826] border border-white/[0.08]">
                    <div className="flex items-center justify-between text-xs font-mono-code text-slate-400 pb-2 mb-3 border-b border-white/[0.06]">
                      <span className="text-white font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        PROVABLE TELEMETRY HARNESS
                      </span>
                      <span className="text-[10px] text-cyan-400">HARD BOUND</span>
                    </div>

                    <div className="text-xs font-mono-code space-y-3">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase">RUNTIME EVIDENCE SNIPPET:</span>
                        <div className="mt-1.5 p-3 rounded-lg bg-[#07090E] border border-cyan-500/20 text-cyan-300 text-[11px] font-bold">
                          {current.evidenceExample}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.05]">
                        <span>DETERMINISTIC DRIFT:</span>
                        <span className="text-emerald-400 font-bold">0.00% (STRICT PROOF)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The Golden Rule Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#121826] border border-white/[0.08] text-xs sm:text-sm font-mono-code text-slate-300">
            <span className="text-[#F0B31C] font-black uppercase">GOLDEN RULE:</span>
            <span>LLMs hypothesize. Sensors measure. Digital Twins simulate. Humans authorize.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
