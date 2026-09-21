import React from 'react';
import { Activity, UserX, Zap } from 'lucide-react';

export const TwoLayersSection: React.FC = () => {
  return (
    <section id="two-layers" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">DUAL-DOMAIN CAUSAL VERIFICATION</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">THE SENTINEL-K PARADIGM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            ONE ACTION. TWO WORLDS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400">
              ONE UNIFIED DECISION.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Attacks on critical infrastructure do not occur purely in cyber space or purely in the physical plant. They originate in human social pressure and terminate in physical destruction.
          </p>
        </div>

        {/* 2 Big Columns: Layer 1 (Human) vs Layer 2 (Cyber-Physical) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Layer 1: Human Security Layer */}
          <div className="p-8 rounded-2xl bg-[#0B0F19]/90 border border-amber-500/30 shadow-[0_4px_30px_rgba(245,158,11,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <UserX className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-amber-400 tracking-wider">
                      LAYER 01 // HUMAN VECTOR
                    </span>
                    <h3 className="text-xl font-sans font-black text-white">
                      Human Security Intelligence
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                  ON-DEVICE NPU
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  Evaluates the <strong>origin, legitimacy, and social dynamics</strong> of the operational command before it ever touches equipment.
                </p>

                <div className="space-y-2 font-mono-code text-xs pt-2">
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Authority Verification:</span>
                    <span className="text-amber-400 font-bold">Caller ID Spoof Check</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Urgency Analysis:</span>
                    <span className="text-red-400 font-bold">Psychological Coercion Index</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Channel Integrity:</span>
                    <span className="text-amber-400 font-bold">Out-of-Band Dispatch Verification</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] font-mono-code text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Prevent Social Exploitation</span>
              <span className="text-amber-400 font-bold">FLAG UNTRUSTED ORIGIN</span>
            </div>
          </div>

          {/* Layer 2: Cyber-Physical Kinetic Layer */}
          <div className="p-8 rounded-2xl bg-[#0B0F19]/90 border border-cyan-500/30 shadow-[0_4px_30px_rgba(0,240,255,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <Activity className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-cyan-400 tracking-wider">
                      LAYER 02 // KINETIC TWIN
                    </span>
                    <h3 className="text-xl font-sans font-black text-white">
                      Kinetic System Validation
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                  DETERMINISTIC TWIN
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  Simulates the <strong>real-world physical reaction</strong> of the pipeline, pumps, valves, and chemical tanks before SCADA dispatches.
                </p>

                <div className="space-y-2 font-mono-code text-xs pt-2">
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Cyber Syntax & Permissions:</span>
                    <span className="text-emerald-400 font-bold">100% Modbus Protocol Pass</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Hydrodynamic Simulation:</span>
                    <span className="text-red-400 font-bold">11.4 bar Surge (Limit 9.2 bar)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121826] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">Critic Alternative:</span>
                    <span className="text-emerald-400 font-bold">Staged Ramp Safe Plan (7.4 bar)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] font-mono-code text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Prevent Physical Plant Damage</span>
              <span className="text-cyan-400 font-bold">PROVABLE SAFETY INVARIANTS</span>
            </div>
          </div>

        </div>

        {/* Causal Fusion Bridge */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#121826] via-[#0B0F19] to-[#121826] border border-white/[0.1] text-center font-mono-code">
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            THE SENTINEL-K UNIFIED PROOF
          </div>
          <div className="text-sm sm:text-base font-bold text-white">
            Neither human trust alone nor cyber syntax alone is sufficient. <br className="hidden sm:inline" />
            Only when <span className="text-amber-400">Human Evidence</span> AND <span className="text-cyan-400">Kinetic Forward Simulation</span> agree does the operator confirm.
          </div>
        </div>

      </div>
    </section>
  );
};
