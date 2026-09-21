import React from 'react';
import { Database, Waves, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const DigitalTwinSection: React.FC = () => {
  return (
    <section id="digital-twin" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">WNTR / EPANET HYDRODYNAMIC TWIN</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">PHYSICS AS THE TESTBED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            THE PHYSICAL WORLD IS THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              TEST ENVIRONMENT.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Before any high-impact command reaches the physical PLC, Sentinel-K simulates its exact consequences in an isolated digital twin running real-world differential fluid equations.
          </p>
        </div>

        {/* Digital Twin Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-[#121826]/90 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08] w-fit mb-4">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-base font-sans font-black text-white uppercase">
                Plant Topology Model
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Models 24 pipe junctions, 4 variable frequency pumps, 6 pressure relief valves, and 2 municipal distribution reservoirs with exact pipe roughness and elevation data.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono-code text-[11px] text-cyan-400">
              Topology: EPANET 2.2 INP Schema
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121826]/90 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08] w-fit mb-4">
                <Cpu className="w-6 h-6 text-[#F0B31C]" />
              </div>
              <h3 className="text-base font-sans font-black text-white uppercase">
                Transient Kinematics Solver
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Computes Joukowsky water hammer shockwaves, velocity head gradients, and friction dissipation in 50-millisecond discrete time steps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono-code text-[11px] text-[#F0B31C]">
              Engine: Python WNTR Engine
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121826]/90 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08] w-fit mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-sans font-black text-white uppercase">
                Invariant Guardrails
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Hardcoded mathematical invariants: Max Manifold Pressure &lt;= 9.2 bar, Min Reservoir Head &gt;= 1.5m, Max Surge Velocity &lt;= 3.2 m/s.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono-code text-[11px] text-emerald-400">
              Enforcement: Deterministic Reject Gate
            </div>
          </div>

        </div>

        {/* Prototype & Simulation Disclaimer Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl bg-[#07090E] border border-amber-500/30 font-mono-code text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider">
              HACKATHON IMPLEMENTATION SCOPE &amp; DISCLAIMER
            </div>
            <div className="text-slate-400 text-[11px] mt-1 leading-relaxed">
              For this iQOO Hackathon submission, physical plant telemetry is driven by a software simulation harness using the open-source EPANET / WNTR water network engine. No live municipal equipment is connected or altered. All benchmarks are marked as <span className="text-cyan-400 font-bold">TARGET / SIMULATION CONDITION</span>.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
