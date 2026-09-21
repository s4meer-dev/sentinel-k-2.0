import React from 'react';
import { Database, Waves, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const DigitalTwinSection: React.FC = () => {
  return (
    <section id="digital-twin" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Waves className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">WNTR / EPANET HYDRODYNAMIC TWIN</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">PHYSICS AS THE TESTBED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            THE PHYSICAL WORLD IS THE <br />
            <span className="text-slate-900">TEST ENVIRONMENT.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Before any high-impact command reaches the physical PLC, Sentinel-K simulates its exact consequences in an isolated digital twin running real-world differential fluid equations.
          </p>
        </div>

        {/* Digital Twin Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05] w-fit mb-4">
                <Database className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15] uppercase">
                Plant Topology Model
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Models 24 pipe junctions, 4 variable frequency pumps, 6 pressure relief valves, and 2 municipal distribution reservoirs with exact pipe roughness and elevation data.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/[0.05] font-mono-code text-[11px] text-blue-800 font-bold">
              Topology: EPANET 2.2 INP Schema
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05] w-fit mb-4">
                <Cpu className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15] uppercase">
                Transient Kinematics Solver
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Computes Joukowsky water hammer shockwaves, velocity head gradients, and friction dissipation in 50-millisecond discrete time steps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/[0.05] font-mono-code text-[11px] text-amber-800 font-bold">
              Engine: Python WNTR Engine
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05] w-fit mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15] uppercase">
                Invariant Guardrails
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Hardcoded mathematical invariants: Max Manifold Pressure &lt;= 9.2 bar, Min Reservoir Head &gt;= 1.5m, Max Surge Velocity &lt;= 3.2 m/s.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/[0.05] font-mono-code text-[11px] text-emerald-800 font-bold">
              Enforcement: Deterministic Reject Gate
            </div>
          </div>

        </div>

        {/* Prototype & Simulation Disclaimer Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-amber-200/80 font-mono-code text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-900 font-bold text-xs uppercase tracking-wider">
              HACKATHON IMPLEMENTATION SCOPE &amp; DISCLAIMER
            </div>
            <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
              For this iQOO Hackathon submission, physical plant telemetry is driven by a software simulation harness using the open-source EPANET / WNTR water network engine. No live municipal equipment is connected or altered. All benchmarks are marked as <span className="text-slate-900 font-bold">TARGET / SIMULATION CONDITION</span>.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
