import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertOctagon, CheckCircle2, Gauge } from 'lucide-react';

export const KineticValidationSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'blind' | 'cyber' | 'sentinel'>('sentinel');

  return (
    <section id="kinetic" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-red-800 mb-5 shadow-2xs">
            <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
            <span className="font-bold tracking-wider">THE KINETIC VALIDATION PARADOX</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">CYBER VS PHYSICAL REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            A SECURE PATCH IS NOT <br />
            <span className="text-red-700">NECESSARILY A SAFE PATCH.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Cyber security verifies permissions and cryptographic signatures. It has zero knowledge of fluid dynamics. Compare the three operational pathways below.
          </p>
        </div>

        {/* 3 Scenario Switcher Tabs */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white border border-black/[0.06] shadow-2xs">
            <button
              onClick={() => setSelectedScenario('blind')}
              className={`p-3 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'blind'
                  ? 'bg-red-50 text-red-900 border-red-300 shadow-xs'
                  : 'bg-transparent text-slate-600 border-transparent hover:text-black hover:bg-black/[0.02]'
              }`}
            >
              1. BLIND EXECUTION
            </button>

            <button
              onClick={() => setSelectedScenario('cyber')}
              className={`p-3 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'cyber'
                  ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-transparent text-slate-600 border-transparent hover:text-black hover:bg-black/[0.02]'
              }`}
            >
              2. CYBER-CHECK ONLY
            </button>

            <button
              onClick={() => setSelectedScenario('sentinel')}
              className={`p-3 rounded-xl font-mono-code text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                selectedScenario === 'sentinel'
                  ? 'bg-[#090D15] text-white border-[#090D15] shadow-xs'
                  : 'bg-transparent text-slate-600 border-transparent hover:text-black hover:bg-black/[0.02]'
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-red-200 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-red-50 text-red-800 border border-red-200">
                      SCENARIO 01 // UNGUARDED OPERATOR
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-[#090D15] mt-2.5">
                      Blind Action Execution
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Field technician receives urgent phone dispatch claiming a surge emergency. With no verification tools, operator keys in 850 RPM pump speed override directly at the terminal while downstream relief valve is closed.
                    </p>

                    <div className="mt-5 space-y-2 font-mono-code text-xs">
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-red-900">
                        <span>Physical Consequence:</span>
                        <strong className="font-bold">11.4 bar Hydraulic Shockwave</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-red-900">
                        <span>Plant Status:</span>
                        <strong className="font-bold">Manifold Rupture &amp; Contamination</strong>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#FAFAF8] border border-red-200 text-center font-mono-code">
                    <Gauge className="w-14 h-14 text-red-600 animate-pulse mb-2" />
                    <div className="text-3xl font-black text-red-700">11.4 BAR</div>
                    <div className="text-xs text-red-800 mt-0.5 uppercase font-bold">CRITICAL PIPE BLOWOUT</div>
                    <div className="text-[10px] text-slate-500 mt-1">THRESHOLD: 9.2 BAR MAX</div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedScenario === 'cyber' && (
              <motion.div
                key="cyber"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-amber-200 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                      SCENARIO 02 // TRADITIONAL IT/OT FIREWALL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-[#090D15] mt-2.5">
                      Cyber Valid, Physically Disastrous
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      The instruction passes firewall validation: syntax is correct, access tokens match, and Modbus frame CRC passes 100%. The system authorizes the write — and the exact same physical rupture occurs.
                    </p>

                    <div className="mt-5 space-y-2 font-mono-code text-xs">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900">
                        <span>Cyber Firewall Check:</span>
                        <strong className="font-bold">PASSED (100% Valid Syntax)</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-red-900">
                        <span>Kinetic Consequence:</span>
                        <strong className="font-bold">11.4 bar Overpressure Hazard</strong>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#FAFAF8] border border-amber-200 text-center font-mono-code">
                    <ShieldCheck className="w-12 h-12 text-emerald-600 mb-1" />
                    <div className="text-xs text-emerald-800 font-bold uppercase">CYBER CHECK PASSED</div>
                    <div className="text-2xl font-black text-red-700 mt-1">11.4 BAR FAILURE</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">CYBER BLIND TO HYDRAULICS</div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedScenario === 'sentinel' && (
              <motion.div
                key="sentinel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-emerald-50 text-emerald-900 border border-emerald-200">
                      SCENARIO 03 // SENTINEL-K CLOSED LOOP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-[#090D15] mt-2.5">
                      Reject &rarr; Replan &rarr; Human Approve
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      1. Cyber check passes. <br />
                      2. Physical twin simulates 11.4 bar hazard &rarr; <strong className="text-red-700">DETERMINISTIC REJECT</strong>. <br />
                      3. Sentinel-K Critic replans: open Relief Valve 2 to 40%, ramp Pump 4 staged to 620 RPM. <br />
                      4. Simulated peak: <strong className="text-emerald-800">7.4 bar (SAFE)</strong>. Field operator confirms.
                    </p>

                    <div className="mt-5 space-y-2 font-mono-code text-xs">
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-red-900">
                        <span>Step 1: Original Action:</span>
                        <strong className="font-bold">REJECTED (11.4 bar violation)</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900">
                        <span>Step 2: Replanned Path:</span>
                        <strong className="font-bold">APPROVED 7.4 BAR (Safe Gradient)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#FAFAF8] border border-black/[0.06] text-center font-mono-code">
                    <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-1" />
                    <div className="text-3xl font-black text-emerald-800">7.4 BAR</div>
                    <div className="text-xs text-emerald-800 mt-0.5 uppercase font-bold">SAFE OPERATIONAL LIMIT</div>
                    <div className="text-[10px] text-slate-600 mt-1">HUMAN OPERATOR AUTHORIZED</div>
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
