import React from 'react';
import { Layers, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">ENGINEERING MATURITY MATRIX</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">HONEST DISCLOSURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            TECH STACK &amp; READINESS.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            In critical infrastructure, technical honesty is paramount. We explicitly delineate between what is live code, what is in the simulation harness, and what is future roadmap.
          </p>
        </div>

        {/* 3 Maturity Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          
          {/* Column 1: Implemented */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-black/[0.05]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-emerald-800">
                    TIER 1 // LIVE IMPLEMENTED
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15]">
                    Front-End &amp; UI Logic
                  </h3>
                </div>
              </div>

              <ul className="space-y-2.5 font-mono-code text-xs text-slate-600">
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">React 19 + Tailwind v4 + TS</strong>
                  Industrial control room UI with sub-pixel rendering.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">OriginOS 5 Field Terminal UI</strong>
                  Simulated mobile terminal with interactive phase inspection.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Dynamic Twin SVG Engine</strong>
                  Real-time hydrodynamic schematic with animated pressure gradients.
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-emerald-800 font-bold">
              STATUS: 100% PRODUCTION READY
            </div>
          </div>

          {/* Column 2: Prototype Harness */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-black/[0.05]">
                <Clock className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-blue-800">
                    TIER 2 // PROTOTYPE HARNESS
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15]">
                    Simulation &amp; Reasoning
                  </h3>
                </div>
              </div>

              <ul className="space-y-2.5 font-mono-code text-xs text-slate-600">
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Python WNTR / EPANET 2.2</strong>
                  Transient hydraulic physics simulator running discrete time steps.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">SLM NPU Intent Parser</strong>
                  Quantized 3B parameter model for semantic dispatch slot filling.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Constraint Critic Replanner</strong>
                  Rule-based + heuristic governor for synthesizing safe operating paths.
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-blue-800 font-bold">
              STATUS: HACKATHON BENCHMARK SUITE
            </div>
          </div>

          {/* Column 3: Research Roadmap */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-black/[0.05]">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <div>
                  <div className="text-[10px] font-mono-code font-bold uppercase text-amber-800">
                    TIER 3 // RESEARCH ROADMAP
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15]">
                    Hardware Deployment
                  </h3>
                </div>
              </div>

              <ul className="space-y-2.5 font-mono-code text-xs text-slate-600">
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Direct SCADA Modbus Interlock</strong>
                  Physical optical isolation relay hardware at PLC panel.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Telecom SS7/STIR-SHAKEN API</strong>
                  Carrier-level cryptographic phone certificate validation.
                </li>
                <li className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
                  <strong className="text-slate-900 block mb-0.5">Multi-Facility Grid Twins</strong>
                  Federated electric grid + municipal wastewater coupled simulation.
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-amber-800 font-bold">
              STATUS: PHASE 2 RESEARCH TARGET
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
