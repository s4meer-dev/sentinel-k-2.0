import React from 'react';
import { Laptop, Smartphone, RefreshCw, Network, ShieldCheck } from 'lucide-react';

export const OfficeKitSection: React.FC = () => {
  return (
    <section id="office-kit" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/[0.03] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">ECOSYSTEM SYNERGY</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">ORIGINOS OFFICE KIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            EDGE INTELLIGENCE MEETS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              DEEP VERIFICATION.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            While the iQOO phone captures and evaluates field human evidence on its NPU, running multi-node hydrodynamic transient twin simulations connects seamlessly with the field workstation via OriginOS Office Kit.
          </p>
        </div>

        {/* 3-Tier Synergistic Diagram */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Card 1: iQOO Field Terminal */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-cyan-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <span className="text-xs font-mono-code text-cyan-400 font-bold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  iQOO 13 PRO NODE
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20">
                  FIELD EDGE
                </span>
              </div>

              <h4 className="text-base font-sans font-black text-white">
                Forensic Human Sensing
              </h4>

              <ul className="mt-4 space-y-2 text-xs text-slate-300 font-mono-code">
                <li className="flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold">▶</span> Audio buffer & intent extraction
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold">▶</span> Local quantized SLM inference
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold">▶</span> Hardware biometric signature
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-slate-400">
              Latency: <strong className="text-cyan-400">&lt; 120 ms local</strong>
            </div>
          </div>

          {/* Bridge: Office Kit Mesh */}
          <div className="p-6 rounded-2xl bg-[#121826] border border-white/[0.1] shadow-xl flex flex-col justify-between text-center relative">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F0B31C]/10 border border-[#F0B31C]/30 flex items-center justify-center mx-auto mb-3 text-[#F0B31C]">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>

              <span className="text-xs font-mono-code text-[#F0B31C] font-bold uppercase tracking-wider">
                ORIGINOS OFFICE KIT
              </span>

              <h4 className="text-base font-sans font-black text-white mt-1">
                Zero-Latency Bridge
              </h4>

              <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                Encrypted Wi-Fi 7 Direct + UWB proximity bridge. Streams action verification manifests, twin telemetry, and operator authorizations without cloud exposure.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-emerald-400 font-bold">
              AIR-GAPPED OR ON-PREM SECURE
            </div>
          </div>

          {/* Card 3: Workstation Twin Lab */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <span className="text-xs font-mono-code text-amber-400 font-bold flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-amber-400" />
                  WORKSTATION TWIN
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/20">
                  DEEP SIM
                </span>
              </div>

              <h4 className="text-base font-sans font-black text-white">
                Hydrodynamic Kinetic Engine
              </h4>

              <ul className="mt-4 space-y-2 text-xs text-slate-300 font-mono-code">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">▶</span> EPANET / WNTR differential equations
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">▶</span> Multi-node water distribution twin
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">▶</span> Critic constraint replanning engine
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-slate-400">
              Simulation: <strong className="text-amber-400">t+180s forward projection</strong>
            </div>
          </div>

        </div>

        {/* Ecosystem Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs font-mono-code text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Harmonious integration of high-mobility iQOO field hardware with industrial plant computing.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
