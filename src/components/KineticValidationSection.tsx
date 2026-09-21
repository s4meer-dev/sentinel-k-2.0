import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertOctagon, CheckCircle2, Gauge } from 'lucide-react';

export const KineticValidationSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'blind' | 'cyber' | 'sentinel'>('sentinel');

  return (
    <section id="kinetic" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-red-500/[0.04] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-red-500/30 text-xs font-mono-code text-red-400 mb-6 shadow-sm">
            <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
            <span className="font-bold tracking-wider">THE KINETIC VALIDATION PARADOX</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">CYBER VS PHYSICAL REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            A SECURE PATCH IS NOT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-[#F0B31C]">
              NECESSARILY A SAFE PATCH.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Cyber security verifies permissions and cryptographic signatures. It has zero knowledge of fluid dynamics. Compare the three operational pathways below.
          </p>
        </div>

        {/* 3 Scenario Switcher Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 rounded-2xl bg-[#0B0F19] border border-white/[0.08]">
            <button
              onClick={() => setSelectedScenario('blind')}
              className={`p-3.5 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'blind'
                  ? 'bg-red-950/60 text-red-300 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-white'
              }`}
            >
              1. BLIND EXECUTION
            </button>

            <button
              onClick={() => setSelectedScenario('cyber')}
              className={`p-3.5 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'cyber'
                  ? 'bg-amber-950/60 text-amber-300 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-white'
              }`}
            >
              2. CYBER-CHECK ONLY
            </button>

            <button
              onClick={() => setSelectedScenario('sentinel')}
              className={`p-3.5 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'sentinel'
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-white'
              }`}
            >
              3. SENTINEL-K VERIFIED
            </button>
          </div>
        </div>

        {/* Interactive Scenario Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedScenario === 'blind' && (
              <motion.div
                key="blind"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-red-950/30 via-[#121826] to-[#07090E] border border-red-500/40 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                      SCENARIO 01 // UNGUARDED OPERATOR
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mt-3">
                      Blind Action Execution
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      Field technician receives urgent phone dispatch claiming a surge emergency. With no verification tools, operator keys in 850 RPM pump speed override directly at the terminal while downstream relief valve is closed.
                    </p>

                    <div className="mt-6 space-y-2 font-mono-code text-xs">
                      <div className="p-3 rounded-xl bg-[#07090E] border border-red-500/30 flex items-center justify-between text-red-400">
                        <span>Physical Consequence:</span>
                        <span className="font-bold">11.4 bar Hydraulic Shockwave</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#07090E] border border-red-500/30 flex items-center justify-between text-red-400">
                        <span>Plant Status:</span>
                        <span className="font-bold">Manifold Rupture &amp; Contamination</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#07090E] border border-red-500/30 text-center font-mono-code">
                    <Gauge className="w-16 h-16 text-red-500 animate-pulse mb-3" />
                    <div className="text-3xl font-black text-red-400">11.4 BAR</div>
                    <div className="text-xs text-red-300 mt-1 uppercase font-bold">CRITICAL PIPE BLOWOUT</div>
                    <div className="text-[10px] text-slate-500 mt-2">THRESHOLD: 9.2 BAR MAX</div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedScenario === 'cyber' && (
              <motion.div
                key="cyber"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-950/30 via-[#121826] to-[#07090E] border border-amber-500/40 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      SCENARIO 02 // TRADITIONAL IT/OT FIREWALL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mt-3">
                      Cyber Valid, Physically Disastrous
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      The instruction passes firewall validation: syntax is correct, access tokens match, and Modbus frame CRC passes 100%. The system authorizes the write — and the exact same physical rupture occurs.
                    </p>

                    <div className="mt-6 space-y-2 font-mono-code text-xs">
                      <div className="p-3 rounded-xl bg-[#07090E] border border-emerald-500/30 flex items-center justify-between text-emerald-400">
                        <span>Cyber Firewall Check:</span>
                        <span className="font-bold">PASSED (100% Valid Syntax)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#07090E] border border-red-500/30 flex items-center justify-between text-red-400">
                        <span>Kinetic Consequence:</span>
                        <span className="font-bold">11.4 bar Overpressure Hazard</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#07090E] border border-amber-500/30 text-center font-mono-code">
                    <ShieldCheck className="w-14 h-14 text-emerald-400 mb-2" />
                    <div className="text-xs text-emerald-400 font-bold uppercase">CYBER CHECK PASSED</div>
                    <div className="text-2xl font-black text-red-400 mt-2">11.4 BAR FAILURE</div>
                    <div className="text-[10px] text-slate-500 mt-1">CYBER BLIND TO HYDRAULICS</div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedScenario === 'sentinel' && (
              <motion.div
                key="sentinel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-[#121826] to-[#07090E] border border-cyan-500/40 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      SCENARIO 03 // SENTINEL-K CLOSED LOOP
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mt-3">
                      Reject &rarr; Replan &rarr; Human Approve
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      1. Cyber check passes. <br />
                      2. Physical twin simulates 11.4 bar hazard &rarr; <strong>DETERMINISTIC REJECT</strong>. <br />
                      3. Sentinel-K Critic replans: open Relief Valve 2 to 40%, ramp Pump 4 staged to 620 RPM. <br />
                      4. Simulated peak: <strong>7.4 bar (SAFE)</strong>. Field operator confirms.
                    </p>

                    <div className="mt-6 space-y-2 font-mono-code text-xs">
                      <div className="p-3 rounded-xl bg-[#07090E] border border-cyan-500/30 flex items-center justify-between text-cyan-300">
                        <span>Step 1: Original Action:</span>
                        <span className="text-red-400 font-bold">REJECTED (11.4 bar violation)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#07090E] border border-emerald-500/30 flex items-center justify-between text-emerald-400">
                        <span>Step 2: Replanned Path:</span>
                        <span className="font-bold">APPROVED 7.4 BAR (Safe Gradient)</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#07090E] border border-cyan-500/30 text-center font-mono-code">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-2" />
                    <div className="text-3xl font-black text-emerald-400">7.4 BAR</div>
                    <div className="text-xs text-emerald-300 mt-1 uppercase font-bold">SAFE OPERATIONAL LIMIT</div>
                    <div className="text-[10px] text-cyan-400 mt-2">HUMAN OPERATOR AUTHORIZED</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
