import React from 'react';
import { Activity, UserX, Zap } from 'lucide-react';

export const TwoLayersSection: React.FC = () => {
  return (
    <section id="two-layers" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">DUAL-DOMAIN CAUSAL VERIFICATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">UNIFIED DECISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            ONE ACTION. TWO WORLDS. <br />
            <span className="text-slate-900">ONE UNIFIED DECISION.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Attacks on critical infrastructure do not occur purely in cyber space or purely in the physical plant. They originate in human social pressure and terminate in physical destruction.
          </p>
        </div>

        {/* 2 Big Columns: Layer 1 (Human) vs Layer 2 (Cyber-Physical) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Layer 1: Human Security Layer */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.05] mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                    <UserX className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-amber-800 tracking-wider">
                      LAYER 01 // HUMAN VECTOR
                    </span>
                    <h3 className="text-lg sm:text-xl font-sans font-black text-[#090D15]">
                      Human Security Intelligence
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold text-amber-900 px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                  ON-DEVICE NPU
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Evaluates the <strong className="text-[#090D15]">origin, legitimacy, and social dynamics</strong> of the operational command before it ever touches equipment.
                </p>

                <div className="space-y-2 font-mono-code text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Authority Verification:</span>
                    <span className="text-amber-800 font-bold">Caller ID Spoof Check</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Urgency Analysis:</span>
                    <span className="text-red-700 font-bold">Coercion Vector (8.9/10)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Channel Integrity:</span>
                    <span className="text-slate-900 font-bold">Out-of-Band Roster Check</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.05] font-mono-code text-xs text-slate-500 flex items-center justify-between">
              <span>Goal: Prevent Social Exploitation</span>
              <span className="text-amber-800 font-bold">FLAG UNTRUSTED ORIGIN</span>
            </div>
          </div>

          {/* Layer 2: Cyber-Physical Kinetic Layer */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.05] mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                    <Activity className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-blue-800 tracking-wider">
                      LAYER 02 // KINETIC TWIN
                    </span>
                    <h3 className="text-lg sm:text-xl font-sans font-black text-[#090D15]">
                      Kinetic System Validation
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold text-blue-900 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  DETERMINISTIC TWIN
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Simulates the <strong className="text-[#090D15]">real-world physical reaction</strong> of the pipeline, pumps, valves, and chemical tanks before SCADA dispatches.
                </p>

                <div className="space-y-2 font-mono-code text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Cyber Syntax &amp; Permissions:</span>
                    <span className="text-emerald-800 font-bold">100% Modbus Protocol Pass</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Hydrodynamic Simulation:</span>
                    <span className="text-red-700 font-bold">11.4 bar Surge (Limit 9.2 bar)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
                    <span className="text-slate-600">Critic Alternative:</span>
                    <span className="text-emerald-800 font-bold">Staged Ramp Safe Plan (7.4 bar)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.05] font-mono-code text-xs text-slate-500 flex items-center justify-between">
              <span>Goal: Prevent Physical Plant Damage</span>
              <span className="text-slate-900 font-bold">PROVABLE SAFETY INVARIANTS</span>
            </div>
          </div>

        </div>

        {/* Causal Fusion Bridge */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs text-center font-mono-code">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
            THE SENTINEL-K UNIFIED PROOF
          </div>
          <div className="text-sm sm:text-base font-bold text-[#090D15]">
            Neither human trust alone nor cyber syntax alone is sufficient. <br className="hidden sm:inline" />
            Only when <span className="text-amber-800">Human Evidence</span> AND <span className="text-emerald-800">Kinetic Forward Simulation</span> agree does the operator confirm.
          </div>
        </div>

      </div>
    </section>
  );
};
