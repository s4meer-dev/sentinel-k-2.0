import React from 'react';
import { Layers, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">ENGINEERING MATURITY MATRIX</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">HONEST DISCLOSURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            TECH STACK &amp; READINESS.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            In critical infrastructure, technical honesty is paramount. We explicitly delineate between what is live code, what is in the simulation harness, and what is future roadmap.
          </p>
        </div>

        {/* 3 Maturity Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Column 1: Implemented */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/[0.08]">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-emerald-400">
                    TIER 1 // LIVE IMPLEMENTED
                  </div>
                  <h3 className="text-base font-sans font-black text-white">
                    Front-End &amp; UI Logic
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 font-mono-code text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-emerald-400 block mb-0.5">React 19 + Tailwind v4 + TS</strong>
                  Industrial control room UI with sub-pixel rendering.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-emerald-400 block mb-0.5">OriginOS 5 Field Terminal UI</strong>
                  Simulated mobile terminal with interactive phase inspection.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-emerald-400 block mb-0.5">Dynamic Twin SVG Engine</strong>
                  Real-time hydrodynamic schematic with animated pressure gradients.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-emerald-400">
              STATUS: 100% PRODUCTION READY
            </div>
          </div>

          {/* Column 2: Prototype Harness */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-cyan-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/[0.08]">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-cyan-400">
                    TIER 2 // PROTOTYPE HARNESS
                  </div>
                  <h3 className="text-base font-sans font-black text-white">
                    Simulation &amp; Reasoning
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 font-mono-code text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-cyan-400 block mb-0.5">Python WNTR / EPANET 2.2</strong>
                  Transient hydraulic physics simulator running discrete time steps.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-cyan-400 block mb-0.5">SLM NPU Intent Parser</strong>
                  Quantized 3B parameter model for semantic dispatch slot filling.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-cyan-400 block mb-0.5">Constraint Critic Replanner</strong>
                  Rule-based + heuristic governor for synthesizing safe operating paths.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-cyan-400">
              STATUS: HACKATHON BENCHMARK SUITE
            </div>
          </div>

          {/* Column 3: Research Roadmap */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-[#F0B31C]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/[0.08]">
                <Sparkles className="w-5 h-5 text-[#F0B31C]" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-[#F0B31C]">
                    TIER 3 // RESEARCH ROADMAP
                  </div>
                  <h3 className="text-base font-sans font-black text-white">
                    Hardware Deployment
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 font-mono-code text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-[#F0B31C] block mb-0.5">Direct SCADA Modbus Interlock</strong>
                  Physical optical isolation relay hardware at PLC panel.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-[#F0B31C] block mb-0.5">Telecom SS7/STIR-SHAKEN API</strong>
                  Carrier-level cryptographic phone certificate validation.
                </li>
                <li className="p-2.5 rounded-lg bg-[#121826] border border-white/[0.05]">
                  <strong className="text-[#F0B31C] block mb-0.5">Multi-Facility Grid Twins</strong>
                  Federated electric grid + municipal wastewater coupled simulation.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-[#F0B31C]">
              STATUS: PHASE 2 RESEARCH TARGET
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
