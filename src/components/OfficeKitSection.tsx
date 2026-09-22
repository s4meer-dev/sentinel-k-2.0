import React from 'react';
import { Laptop, Smartphone, RefreshCw, Network, ShieldCheck } from 'lucide-react';

export const OfficeKitSection: React.FC = () => {
  return (
    <section id="office-kit" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Network className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">ECOSYSTEM SYNERGY</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">ORIGINOS OFFICE KIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            EDGE INTELLIGENCE MEETS <br />
            <span className="text-slate-900">DEEP VERIFICATION.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            While the iQOO phone captures and evaluates field human evidence on its NPU, running multi-node hydrodynamic transient twin simulations connects seamlessly with the field workstation via OriginOS Office Kit.
          </p>
        </div>

        {/* 3-Tier Synergistic Diagram */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Card 1: Sovereign Field Terminal */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-4">
                <span className="text-xs font-mono-code text-[#090D15] font-bold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  FIELD OPERATOR TERMINAL
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  FIELD EDGE
                </span>
              </div>

              <h4 className="text-base font-sans font-black text-[#090D15]">
                Forensic Human Sensing
              </h4>

              <ul className="mt-3.5 space-y-2 text-xs text-slate-600 font-mono-code">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Audio buffer &amp; intent extraction
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Local quantized SLM inference
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Hardware biometric signature
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-slate-500">
              Latency: <strong className="text-slate-900">&lt; 120 ms local</strong>
            </div>
          </div>

          {/* Bridge: Office Kit Mesh */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#F0B31C]/40 shadow-sm flex flex-col justify-between text-center relative">
            <div>
              <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-3 text-amber-700">
                <RefreshCw className="w-4 h-4 animate-spin-slow" />
              </div>

              <span className="text-[11px] font-mono-code text-amber-800 font-bold uppercase tracking-wider">
                ORIGINOS OFFICE KIT
              </span>

              <h4 className="text-base font-sans font-black text-[#090D15] mt-1">
                Zero-Latency Bridge
              </h4>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                Encrypted Wi-Fi 7 Direct + UWB proximity bridge. Streams action verification manifests, twin telemetry, and operator authorizations without cloud exposure.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-emerald-800 font-bold">
              AIR-GAPPED OR ON-PREM SECURE
            </div>
          </div>

          {/* Card 3: Workstation Twin Lab */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-4">
                <span className="text-xs font-mono-code text-[#090D15] font-bold flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-purple-600" />
                  WORKSTATION TWIN
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                  DEEP SIM
                </span>
              </div>

              <h4 className="text-base font-sans font-black text-[#090D15]">
                Hydrodynamic Kinetic Engine
              </h4>

              <ul className="mt-3.5 space-y-2 text-xs text-slate-600 font-mono-code">
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-600 font-bold">▶</span> EPANET / WNTR differential equations
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-600 font-bold">▶</span> Multi-node water distribution twin
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-600 font-bold">▶</span> Critic constraint replanning engine
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.05] text-[10px] font-mono-code text-slate-500">
              Simulation: <strong className="text-slate-900">t+180s forward projection</strong>
            </div>
          </div>

        </div>

        {/* Ecosystem Callout */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-black/[0.06] text-xs font-mono-code text-slate-600 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Harmonious integration of high-mobility iQOO field hardware with industrial plant computing.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
