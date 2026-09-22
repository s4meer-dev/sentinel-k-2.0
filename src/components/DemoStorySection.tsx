import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import type { DemoStoryStep } from '../types/sentinel';

export const DemoStorySection: React.FC = () => {
  const storySteps: DemoStoryStep[] = [
    {
      step: 1,
      time: '14:02:11',
      title: 'INCOMING CALL TO OPERATOR',
      summary: 'Phone rings on field technician’s secure terminal from apparent regional dispatch.',
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
      summary: 'Technician opens Sentinel-K on field terminal: "Verify Incoming Action".',
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
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextStep = () => {
    setActiveStep((prev) => (prev % storySteps.length) + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 1 ? storySteps.length : prev - 1));
  };

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % storySteps.length) + 1);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, storySteps.length]);

  const current = storySteps.find((s) => s.step === activeStep) || storySteps[6];

  return (
    <section id="demo-story" className="scroll-mt-36 relative pt-28 md:pt-36 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="absolute inset-0 network-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#1A1712]/[0.08] text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">INCIDENT WALKTHROUGH</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#7C766C]">THE FRIDAY AFTERNOON SURGE ATTACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05]">
            CHRONICLE OF A THWARTED <br />
            <span className="font-serif italic font-normal normal-case text-slate-800">physical disaster.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
            Follow the 10-step sequence showing how an adversarial authority-spoofing attack was intercepted, simulated, rejected, and safely remediated in under 4 minutes.
          </p>

          {/* Carousel Controls */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer border ${
                isPlaying
                  ? 'bg-[#1A1712] text-[#F0B31C] border-[#1A1712]'
                  : 'bg-white/80 text-[#1A1712] border-[#1A1712]/[0.08] hover:bg-white'
              } shadow-2xs backdrop-blur-md`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current text-[#F0B31C]" />}
              <span>{isPlaying ? 'PAUSE STORY' : 'AUTO CYCLE'}</span>
            </button>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/80 border border-[#1A1712]/[0.08] shadow-2xs backdrop-blur-md">
              <button
                onClick={prevStep}
                aria-label="Previous Step"
                className="p-1.5 rounded-lg hover:bg-black/[0.05] text-[#1A1712] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono-code font-bold text-[#7C766C]">
                Step {activeStep} / {storySteps.length}
              </span>
              <button
                onClick={nextStep}
                aria-label="Next Step"
                className="p-1.5 rounded-lg hover:bg-black/[0.05] text-[#1A1712] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Step Nav Bar */}
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-1 p-1.5 rounded-2xl bg-white/80 border border-[#1A1712]/[0.08] backdrop-blur-md overflow-x-auto mb-6 shadow-2xs">
          {storySteps.map((st) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`px-2.5 py-1.5 rounded-xl font-mono-code text-[11px] font-bold shrink-0 transition-all duration-200 cursor-pointer border ${
                activeStep === st.step
                  ? 'bg-[#1A1712] text-white border-[#1A1712] shadow-xs'
                  : 'bg-transparent text-[#7C766C] border-transparent hover:text-[#1A1712] hover:bg-black/[0.02]'
              }`}
            >
              #{st.step}
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-9 rounded-[32px] bg-white border border-[#1A1712]/[0.08] shadow-[0_20px_50px_-20px_rgba(38,34,28,0.1)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-5 border-b border-[#1A1712]/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-[#ECE8DE]/70 border border-[#1A1712]/[0.08] text-[#1A1712]">
                    STEP {current.step} OF 10 // {current.time}
                  </span>
                  <span className="text-xs font-mono-code text-[#7C766C]">
                    ACTOR: <strong className="text-[#1A1712]">{current.actor}</strong>
                  </span>
                </div>

                <span
                  className={`text-xs font-mono-code font-bold uppercase px-2.5 py-0.5 rounded-full ${
                    current.threatStatus === 'CRITICAL'
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : current.threatStatus === 'WARNING'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : current.threatStatus === 'SAFE'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  {current.threatStatus}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-sans font-black text-[#1A1712]">
                {current.title}
              </h3>

              <p className="mt-2.5 text-sm text-[#7C766C] leading-relaxed font-normal">
                {current.summary}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-[#ECE8DE]/40 border border-[#1A1712]/[0.06] font-mono-code text-xs">
                <div className="text-[10px] text-[#7C766C] uppercase font-bold">OPERATIONAL TRACE:</div>
                <div className="text-[#1A1712] font-bold mt-1 text-xs">
                  {current.action}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-6 pt-3.5 border-t border-[#1A1712]/[0.06] flex items-center justify-between">
                <button
                  disabled={current.step === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="text-xs font-mono-code text-[#7C766C] hover:text-[#1A1712] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  &larr; PREVIOUS
                </button>

                <span className="text-xs font-mono-code text-[#7C766C]">
                  {current.step} / 10
                </span>

                <button
                  disabled={current.step === 10}
                  onClick={() => setActiveStep((prev) => Math.min(10, prev + 1))}
                  className="text-xs font-mono-code text-[#1A1712] hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold"
                >
                  NEXT &rarr;
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
