import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { DemoStoryStep } from '../types/sentinel';

export const DemoStorySection: React.FC = () => {
  const storySteps: DemoStoryStep[] = [
    {
      step: 1,
      time: '14:02:11',
      title: 'INCOMING CALL TO OPERATOR',
      summary: 'Phone rings on field technician’s iQOO terminal from apparent regional dispatch.',
      actor: 'Adversary (Spoofed Dispatch)',
      action: 'Caller claims urgent pipeline pressure buildup from upstream storm runoff.',
      threatStatus: 'SUSPICIOUS',
    },
    {
      step: 2,
      time: '14:02:45',
      title: 'OPERATIONAL COMMAND DELIVERED',
      summary: 'Adversary insists technician manually ramp Pump 4 to 850 RPM immediately.',
      actor: 'Adversary',
      action: '"This is urgent Miller. Override SCADA interlock and set Pump 4 to 850 RPM right now."',
      threatStatus: 'CRITICAL',
    },
    {
      step: 3,
      time: '14:03:12',
      title: 'SENTINEL-K SCAN ACTIVATED',
      summary: 'Technician opens Sentinel-K on iQOO terminal: "Verify Incoming Action".',
      actor: 'Field Operator',
      action: 'One-tap verification initiates forensic audio processing and intent structuring.',
      threatStatus: 'NEUTRAL',
    },
    {
      step: 4,
      time: '14:03:28',
      title: 'NPU FORENSIC EXTRACTION',
      summary: 'Snapdragon NPU parses audio stream; detects synthetic acoustic artifacts & high urgency.',
      actor: 'On-Device NPU',
      action: 'Intent: SET_RPM(PUMP_04, 850). Urgency index: 8.9/10. Voice similarity anomaly flagged.',
      threatStatus: 'WARNING',
    },
    {
      step: 5,
      time: '14:03:50',
      title: 'IDENTITY ROSTER MISMATCH',
      summary: 'Identity bridge confirms Supervisor Miller is on annual leave and not logged into plant portal.',
      actor: 'Identity Gateway',
      action: 'Originating telephone number does not match registered enterprise SIM certificate.',
      threatStatus: 'WARNING',
    },
    {
      step: 6,
      time: '14:04:15',
      title: 'CYBER VALIDATION: PASSED',
      summary: 'Generated Modbus TCP instruction is evaluated against plant protocol firewall.',
      actor: 'Deterministic Cyber Gate',
      action: 'Syntax: Valid. Register 40012 accessible. Command passes conventional cyber defense completely.',
      threatStatus: 'NEUTRAL',
    },
    {
      step: 7,
      time: '14:04:40',
      title: 'PHYSICAL TWIN SIMULATION: 11.4 BAR HAZARD',
      summary: 'EPANET/WNTR simulator executes forward kinetic projection with current valve states.',
      actor: 'Hydrodynamic Twin',
      action: 'Valve 02 is closed. 850 RPM induces 11.4 bar shockwave at Node 14. Safety limit: 9.2 bar.',
      threatStatus: 'CRITICAL',
    },
    {
      step: 8,
      time: '14:05:05',
      title: 'HARD REJECT & REPLAN TRIGGER',
      summary: 'Physical twin issues a hard REJECT. Safety Critic agent immediately synthesizes safe path.',
      actor: 'Safety Critic Agent',
      action: 'Replanned: Open Relief Valve 2 to 40%, then stage Pump 4 ramp to 620 RPM in 3 increments.',
      threatStatus: 'SAFE',
    },
    {
      step: 9,
      time: '14:05:30',
      title: 'REPLANNED SIMULATION: 7.4 BAR SAFE',
      summary: 'Twin validates replanned trajectory: peak manifold pressure sustains at 7.4 bar.',
      actor: 'Hydrodynamic Twin',
      action: 'Surge safely dissipated into secondary reservoir with zero hydraulic shock.',
      threatStatus: 'SAFE',
    },
    {
      step: 10,
      time: '14:06:00',
      title: 'OPERATOR CONFIRMATION & ATTACK LOGGED',
      summary: 'Operator confirms safe replanned action; security incident report logged to enterprise SIEM.',
      actor: 'Human Operator',
      action: 'Biometric authorization commits safe plan. Spoofed call trace dispatched to cyber defense team.',
      threatStatus: 'SAFE',
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(7);
  const current = storySteps.find((s) => s.step === activeStep) || storySteps[6];

  return (
    <section id="demo-story" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">INCIDENT WALKTHROUGH</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">THE FRIDAY AFTERNOON SURGE ATTACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            CHRONICLE OF A THWARTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400">
              PHYSICAL DISASTER.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Follow the 10-step sequence showing how an adversarial authority-spoofing attack was intercepted, simulated, rejected, and safely remediated in under 4 minutes.
          </p>
        </div>

        {/* Step Nav Bar */}
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-1 sm:gap-2 p-2 rounded-2xl bg-[#0B0F19] border border-white/[0.08] overflow-x-auto mb-8">
          {storySteps.map((st) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`px-3 py-2 rounded-xl font-mono-code text-[11px] font-bold shrink-0 transition-all duration-200 cursor-pointer border ${
                activeStep === st.step
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-white'
              }`}
            >
              {st.time.substring(0, 5)} · #{st.step}
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-2xl bg-[#121826]/90 border border-white/[0.1] shadow-2xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    STEP {current.step} OF 10 // {current.time}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400">
                    ACTOR: <strong className="text-white">{current.actor}</strong>
                  </span>
                </div>

                <span
                  className={`text-xs font-mono-code font-bold uppercase px-3 py-1 rounded-full ${
                    current.threatStatus === 'CRITICAL'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse'
                      : current.threatStatus === 'WARNING'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : current.threatStatus === 'SAFE'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}
                >
                  {current.threatStatus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-black text-white">
                {current.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {current.summary}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#07090E] border border-white/[0.08] font-mono-code text-xs">
                <div className="text-[10px] text-slate-500 uppercase font-bold">OPERATIONAL TRACE:</div>
                <div className="text-cyan-300 font-bold mt-1 text-xs sm:text-sm">
                  {current.action}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  disabled={current.step === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="text-xs font-mono-code text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  &larr; PREVIOUS STEP
                </button>

                <span className="text-xs font-mono-code text-slate-500">
                  {current.step} / 10
                </span>

                <button
                  disabled={current.step === 10}
                  onClick={() => setActiveStep((prev) => Math.min(10, prev + 1))}
                  className="text-xs font-mono-code text-cyan-400 hover:text-cyan-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold"
                >
                  NEXT STEP &rarr;
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
