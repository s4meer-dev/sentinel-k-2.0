import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIncoming, 
  Cpu, 
  ShieldAlert, 
  Binary, 
  ShieldCheck, 
  Activity, 
  AlertOctagon, 
  UserCheck, 
  CheckCircle,
  FileCode,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import type { PipelineStep } from '../types/sentinel';
import { TextReveal } from './TextReveal';

export const SentinelPipelineSection: React.FC = () => {
  const steps: PipelineStep[] = [
    {
      id: 1,
      title: 'OPERATIONAL DISPATCH INGESTION',
      stage: 'INGEST',
      description: 'Incoming verbal, textual, or radio dispatch arrives on the field technician\'s sovereign terminal.',
      engine: 'OriginOS 5 Capture / Audio Buffer',
      technicalDetails: 'Passive capture via audio streaming socket or encrypted WhatsApp/SMS dispatch payload. No continuous surveillance; activated on dispatch reception.',
      outputSnippet: 'AUDIO STREAM: "Ramp Pump 4 to 850 RPM immediately. Water surge inbound."',
      status: 'VERIFIED',
    },
    {
      id: 2,
      title: 'NPU FORENSIC EVIDENCE PARSING',
      stage: 'EVIDENCE EXTRACTION',
      description: 'On-device Snapdragon NPU parses semantic intent, urgency vector, and caller metadata.',
      engine: 'On-Device Quantized SLM + Forensic Audio Analyzer',
      technicalDetails: 'Voice biometric extraction, acoustic spectral analysis, urgency sentiment score (0.89), and caller ID certificate extraction.',
      outputSnippet: 'INTENT: SET_SPEED(PUMP_04, 850 RPM) · URGENCY: HIGH · CALLER: +1-800-DISPATCH (UNVERIFIED)',
      status: 'FLAGGED',
    },
    {
      id: 3,
      title: 'AUTHORITY & ROSTER CROSS-CHECK',
      stage: 'IDENTITY & AUTHORITY',
      description: 'Sentinel-K cross-references the claimed dispatcher against shift roster and cryptographic keys.',
      engine: 'Enterprise Identity Gateway / Office Kit Bridge',
      technicalDetails: 'Shift roster indicates claimed dispatcher is currently offline. No hardware token signature matches incoming call payload.',
      outputSnippet: 'ALERT: Claimed identity "Supervisor Miller" is not on active duty roster.',
      status: 'FLAGGED',
    },
    {
      id: 4,
      title: 'DETERMINISTIC COMMAND SYNTHESIS',
      stage: 'PROTOCOL COMPILATION',
      description: 'Translates high-level human intent into concrete Modbus TCP / DNP3 register writes.',
      engine: 'Domain Protocol Compiler',
      technicalDetails: 'Compiles parsed intent to Modbus Register 40012 = 0x0352 (850 RPM) targeting PLC Station 04.',
      outputSnippet: 'RAW_MODBUS: [0x00, 0x01, 0x00, 0x00, 0x00, 0x06, 0x01, 0x06, 0x9C, 0x4C, 0x03, 0x52]',
      status: 'VERIFIED',
    },
    {
      id: 5,
      title: 'CYBER VALIDATION GATE',
      stage: 'CYBER DEFENSE',
      description: 'OT firewall and protocol validation check syntax, schema, and perimeter access control.',
      engine: 'Deterministic OT Logic Validator',
      technicalDetails: 'Checks function codes, register ranges, and syntax validity. The command is syntactically flawless and authorized on the network layer.',
      outputSnippet: 'CYBER_GATE: PASS (Valid Modbus frame, registered register 40012, no syntax errors)',
      status: 'VERIFIED',
    },
    {
      id: 6,
      title: 'PHYSICAL TWIN SIMULATION',
      stage: 'KINETIC SIMULATION',
      description: 'Deterministic EPANET / WNTR hydraulic engine simulates downstream consequences.',
      engine: 'WNTR Hydraulic Kinematics Engine',
      technicalDetails: 'Runs forward hydrodynamic transient model. Valve 02 is closed (0%). Pump 4 at 850 RPM induces surge pressure of 11.4 bar at Node 14.',
      outputSnippet: 'SIMULATION RESULT: Peak pressure 11.4 bar at t+42s. EXCEEDS SAFETY LIMIT (9.2 bar).',
      status: 'FAIL',
    },
    {
      id: 7,
      title: 'CONSEQUENCE REJECTION & REPLANNING',
      stage: 'CRITIC REPLANNING',
      description: 'Automatic safety invariant breach triggers the Critic agent to compute a safe remediation.',
      engine: 'Sentinel-K Constraint-Satisfaction Critic',
      technicalDetails: 'Synthesizes Plan B: Open Relief Valve 02 to 40% before ramping Pump 4 to 620 RPM in three 30s increments. Simulated peak: 7.4 bar (SAFE).',
      outputSnippet: 'SAFE_PLAN_SYNTHESIS: Open V_02 40% -> Ramp P_04 staged to 620 RPM -> Peak 7.4 bar.',
      status: 'REPLANNED',
    },
    {
      id: 8,
      title: 'OPERATOR SOVEREIGN CONFIRMATION',
      stage: 'HUMAN SOVEREIGNTY',
      description: 'The operator reviews evidence, the rejected failure, and authorizes the safe replanned path.',
      engine: 'Air-Gapped Terminal Biometric Enclave',
      technicalDetails: 'Operator is presented with side-by-side cyber pass vs physical failure explanation. Requires explicit thumbprint signoff.',
      outputSnippet: 'SOVEREIGN DECISION: Authorized Safe Plan B via OriginOS Biometric Enclave.',
      status: 'VERIFIED',
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(6); // Default on simulation
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextStep = () => {
    setActiveStep((prev) => (prev % steps.length) + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 1 ? steps.length : prev - 1));
  };

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  const current = steps.find((s) => s.id === activeStep) || steps[5];

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return PhoneIncoming;
      case 2:
        return Cpu;
      case 3:
        return ShieldAlert;
      case 4:
        return Binary;
      case 5:
        return ShieldCheck;
      case 6:
        return Activity;
      case 7:
        return AlertOctagon;
      case 8:
        return UserCheck;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="pipeline" className="scroll-mt-36 relative pt-36 md:pt-44 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">END-TO-END VERIFICATION HARNESS</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#7C766C]">8 DETERMINISTIC STAGES</span>
          </div>

          <TextReveal
            text="THE 8-STAGE SENTINEL PIPELINE."
            italicSubtitle="Deterministic verification in 125 milliseconds."
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05]"
            subtitleClassName="font-serif italic font-normal normal-case text-slate-800"
          />

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
            From the moment an unverified instruction lands on an air-gapped field terminal to the moment a physically verified safe action is dispatched to the PLC.
          </p>

          {/* Carousel Controls */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer border ${
                isPlaying
                  ? 'bg-[#1A1712] text-[#F0B31C] border-[#1A1712]'
                  : 'glass-card text-[#1A1712] hover:bg-white'
              } shadow-2xs`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current text-[#F0B31C]" />}
              <span>{isPlaying ? 'PAUSE PIPELINE' : 'AUTO CYCLE'}</span>
            </button>

            <div className="flex items-center gap-1 p-1 rounded-xl glass-card shadow-2xs">
              <button
                onClick={prevStep}
                aria-label="Previous Stage"
                className="p-1.5 rounded-lg hover:bg-black/[0.05] text-[#1A1712] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono-code font-bold text-[#7C766C]">
                0{activeStep} / 0{steps.length}
              </span>
              <button
                onClick={nextStep}
                aria-label="Next Stage"
                className="p-1.5 rounded-lg hover:bg-black/[0.05] text-[#1A1712] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 8-Step Interactive Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-2 rounded-[24px] glass-card glass-sheen shadow-[0_8px_24px_-8px_rgba(38,34,28,0.06)]">
          {steps.map((s) => {
            const Icon = getStepIcon(s.id);
            const isSelected = activeStep === s.id;
            const isFail = s.status === 'FAIL';
            const isFlag = s.status === 'FLAGGED';
            const isReplan = s.status === 'REPLANNED';

            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(s.id)}
                className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? isFail
                      ? 'bg-red-50 border-red-300 text-red-900 shadow-xs'
                      : isReplan
                      ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                      : 'bg-[#1A1712] text-white border-[#1A1712] shadow-xs'
                    : 'bg-[#ECE8DE]/50 border-transparent hover:border-[#1A1712]/10 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono-code text-[10px] font-bold ${
                    isSelected && !isFail && !isReplan ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    STAGE 0{s.id}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${
                    isFail 
                      ? 'text-red-600' 
                      : isFlag 
                      ? 'text-amber-600' 
                      : isSelected && !isFail && !isReplan 
                      ? 'text-[#F0B31C]' 
                      : 'text-slate-700'
                  }`} />
                </div>
                <div className={`text-[11px] font-sans font-bold line-clamp-1 ${
                  isSelected && !isFail && !isReplan ? 'text-white' : 'text-[#1A1712]'
                }`}>
                  {s.stage}
                </div>
                <div className="mt-1">
                  <span
                    className={`text-[8px] font-mono-code uppercase px-1.5 py-0.2 rounded font-bold ${
                      isFail
                        ? 'bg-red-100 text-red-800'
                        : isFlag
                        ? 'bg-amber-100 text-amber-800'
                        : isReplan
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Diagnostic Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 p-6 sm:p-9 rounded-[32px] glass-card glass-sheen shadow-[0_20px_50px_-20px_rgba(38,34,28,0.1)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Stage Concept & Engine */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-[#ECE8DE]/70 border border-[#1A1712]/[0.08] text-[#1A1712]">
                    STAGE 0{current.id} // {current.stage}
                  </span>
                  <span
                    className={`text-xs font-mono-code font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      current.status === 'FAIL'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : current.status === 'FLAGGED'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    STATUS: {current.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-black text-[#1A1712]">
                  {current.title}
                </h3>

                <p className="mt-3 text-sm text-[#7C766C] leading-relaxed font-normal">
                  {current.description}
                </p>

                <div className="mt-5 space-y-2.5 font-mono-code text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#ECE8DE]/40 border border-[#1A1712]/[0.06]">
                    <div className="text-[10px] text-[#7C766C] uppercase font-bold">EXECUTING ENGINE:</div>
                    <div className="text-[#1A1712] font-bold mt-0.5">{current.engine}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#ECE8DE]/40 border border-[#1A1712]/[0.06]">
                    <div className="text-[10px] text-[#7C766C] uppercase font-bold">TECHNICAL DISCIPLINE:</div>
                    <div className="text-slate-700 mt-0.5 leading-relaxed">{current.technicalDetails}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Terminal Diagnostic Snippet */}
              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-[#ECE8DE]/50 border border-[#1A1712]/[0.08] shadow-inner overflow-hidden font-mono-code text-xs">
                  <div className="p-3.5 bg-white border-b border-[#1A1712]/[0.06] flex items-center justify-between text-[11px] text-slate-600">
                    <span className="flex items-center gap-1.5 text-[#1A1712] font-bold">
                      <FileCode className="w-3.5 h-3.5 text-[#1A1712]" />
                      TERMINAL TRACE // S0{current.id}
                    </span>
                    <span className="text-emerald-700 font-bold">LIVE BUS</span>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-[10px] text-[#7C766C] uppercase">SYSTEM DIAGNOSTIC LOG:</div>
                      <div className="mt-1 p-3 rounded-xl bg-white border border-[#1A1712]/[0.06] text-[#1A1712] text-[11px] font-mono-code whitespace-pre-wrap break-all font-bold">
                        {current.outputSnippet}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[10px] text-[#7C766C] border-t border-[#1A1712]/[0.06]">
                      <span>STAGE LATENCY BUDGET:</span>
                      <span className="text-[#1A1712] font-bold">&lt; 380 ms</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#7C766C]">
                      <span>VERIFICATION HARNESS:</span>
                      <span className="text-emerald-700 font-bold">DETERMINISTIC</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
