import React, { useState } from 'react';
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
  Sliders
} from 'lucide-react';
import type { PipelineStep } from '../types/sentinel';

export const SentinelPipelineSection: React.FC = () => {
  const steps: PipelineStep[] = [
    {
      id: 1,
      title: 'OPERATIONAL DISPATCH INGESTION',
      stage: 'INGEST',
      description: 'Incoming verbal, textual, or radio dispatch arrives on the field technician\'s iQOO terminal.',
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
      engine: 'iQOO Field Terminal Biometric Enclave',
      technicalDetails: 'Operator is presented with side-by-side cyber pass vs physical failure explanation. Requires explicit thumbprint signoff.',
      outputSnippet: 'OPERATOR CONFIRMED: Plan B authorized with operator ID #OP-8821. Action dispatched safely.',
      status: 'VERIFIED',
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(6); // Default to physical twin failure

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
    <section id="pipeline" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      {/* Precision Grid */}
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">END-TO-END VERIFICATION HARNESS</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">8 DETERMINISTIC STAGES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            THE 8-STAGE SENTINEL PIPELINE
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            From the moment an unverified instruction lands on an iQOO smartphone to the moment a physically verified safe action is dispatched to the PLC.
          </p>
        </div>

        {/* 8-Step Interactive Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-2 rounded-2xl bg-[#07090E] border border-white/[0.08]">
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
                className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? isFail
                      ? 'bg-red-950/40 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                      : isReplan
                      ? 'bg-amber-950/40 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-[#121826]/60 border-transparent hover:border-white/10 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono-code text-[10px] font-bold text-slate-500">
                    STAGE 0{s.id}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${
                    isFail ? 'text-red-400' : isFlag ? 'text-amber-400' : 'text-cyan-400'
                  }`} />
                </div>
                <div className="text-[11px] font-sans font-bold line-clamp-1 text-white">
                  {s.stage}
                </div>
                <div className="mt-1">
                  <span
                    className={`text-[8px] font-mono-code uppercase px-1 py-0.2 rounded ${
                      isFail
                        ? 'bg-red-500/20 text-red-300'
                        : isFlag
                        ? 'bg-amber-500/20 text-amber-300'
                        : isReplan
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-emerald-500/20 text-emerald-300'
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-6 sm:p-10 rounded-2xl bg-[#121826]/95 border border-white/[0.1] shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Concept & Engine */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    STAGE 0{current.id} // {current.stage}
                  </span>
                  <span
                    className={`text-xs font-mono-code font-bold uppercase px-2.5 py-0.5 rounded ${
                      current.status === 'FAIL'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : current.status === 'FLAGGED'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    STATUS: {current.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-white">
                  {current.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {current.description}
                </p>

                <div className="mt-6 space-y-3 font-mono-code text-xs">
                  <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">EXECUTING ENGINE:</div>
                    <div className="text-cyan-300 font-bold mt-0.5">{current.engine}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">TECHNICAL DISCIPLINE:</div>
                    <div className="text-slate-300 mt-0.5 leading-relaxed">{current.technicalDetails}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Terminal Diagnostic Snippet */}
              <div className="lg:col-span-5">
                <div className="rounded-xl bg-[#07090E] border border-cyan-500/30 shadow-inner overflow-hidden font-mono-code text-xs">
                  <div className="p-3 bg-[#0B0F19] border-b border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                      TERMINAL TRACE // S0{current.id}
                    </span>
                    <span className="text-emerald-400">LIVE BUS</span>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">SYSTEM DIAGNOSTIC LOG:</div>
                      <div className="mt-1 p-3 rounded-lg bg-[#121826] border border-white/[0.06] text-white text-[11px] font-mono-code whitespace-pre-wrap break-all">
                        {current.outputSnippet}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.05]">
                      <span>STAGE LATENCY BUDGET:</span>
                      <span className="text-cyan-300 font-bold">&lt; 380 ms</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>VERIFICATION HARNESS:</span>
                      <span className="text-emerald-400 font-bold">DETERMINISTIC</span>
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
