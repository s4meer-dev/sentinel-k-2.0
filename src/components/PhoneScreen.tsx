import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  BatteryCharging,
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Cpu, 
  ShieldAlert,
  Fingerprint,
  Radio,
  Server,
  Gauge,
  Activity,
  AudioWaveform
} from 'lucide-react';
import type { ValidationPhase } from '../types/sentinel';

interface PhoneScreenProps {
  phase: ValidationPhase;
  onSelectPhase?: (phase: ValidationPhase) => void;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ 
  phase,
  onSelectPhase 
}) => {
  const getIslandData = () => {
    switch (phase) {
      case 'INCOMING':
        return {
          icon: <AlertTriangle className="w-3 h-3 text-amber-400 animate-pulse" />,
          title: 'UNVERIFIED DISPATCH',
          pill: '8.9 URGENCY',
          pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          titleColor: 'text-amber-200',
        };
      case 'EXTRACTING':
        return {
          icon: <Cpu className="w-3 h-3 text-blue-400 animate-spin" />,
          title: '45 TOPS NPU PARSER',
          pill: '18ms SLM',
          pillClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          titleColor: 'text-blue-200',
        };
      case 'CYBER_CHECK':
        return {
          icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
          title: 'CYBER GATE: VALID',
          pill: 'CRC 0x9B4E',
          pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          titleColor: 'text-emerald-200',
        };
      case 'PHYSICAL_SIM':
        return {
          icon: <ShieldAlert className="w-3 h-3 text-red-400 animate-bounce" />,
          title: '11.4 BAR OVERPRESSURE',
          pill: 'HARD REJECT',
          pillClass: 'bg-red-500/30 text-red-300 border-red-500/50',
          titleColor: 'text-red-200',
        };
      case 'REPLAN':
        return {
          icon: <Zap className="w-3 h-3 text-[#F0B31C] animate-pulse" />,
          title: 'CRITIC REPLAN READY',
          pill: '7.4 BAR SAFE',
          pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          titleColor: 'text-amber-200',
        };
      case 'APPROVED':
        return {
          icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />,
          title: 'BIOMETRIC SIGNED',
          pill: 'VALVE 02 ARMED',
          pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          titleColor: 'text-emerald-200',
        };
    }
  };

  const island = getIslandData();

  return (
    <div className="relative w-full h-full bg-[#FAFAF8] text-[#090D15] flex flex-col justify-between select-none overflow-hidden font-sans">
      
      {/* 1. OriginOS 5 Status Bar with Floating Origin Island (Capsule) */}
      <div className="relative z-30 pt-1.5 pb-1 px-3 bg-[#FBFBFA] border-b border-black/[0.04]">
        
        {/* System Bar: 14:28, 5G Dual SIM, Q2 Chip, 96% FlashCharge */}
        <div className="flex justify-between items-center text-[10px] font-mono-code px-1 mb-1 text-slate-800">
          <div className="flex items-center gap-1 font-black tracking-tight text-[#090D15]">
            <span>14:28</span>
            <span className="text-[8px] px-1 py-0 rounded bg-red-600 text-white font-black">5G</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[8px] text-amber-800 font-black">
              <Radio className="w-2.5 h-2.5 text-[#F0B31C]" />
              <span>Q2</span>
            </div>
            <Wifi className="w-3 h-3 text-slate-800" />
            <div className="flex items-center gap-0.5 text-[#090D15] font-black text-[9px]">
              <span>96%</span>
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Origin Island Capsule: Center-Mounted Glossy Black Island */}
        <motion.div 
          layout
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          className="mx-auto rounded-full bg-[#090D15] text-white px-2.5 py-1 flex items-center justify-between gap-2 max-w-[270px] shadow-md border border-white/10 cursor-pointer"
          onClick={() => {
            const phases: ValidationPhase[] = ['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'];
            const nextIdx = (phases.indexOf(phase) + 1) % phases.length;
            onSelectPhase?.(phases[nextIdx]);
          }}
        >
          {/* Authentic Front Punch-Hole Camera with Optical Reflection */}
          <div className="w-2.5 h-2.5 rounded-full bg-black ring-1 ring-slate-700 shrink-0 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-[#020617] flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 min-w-0">
            {island.icon}
            <span className={`text-[9px] font-mono-code font-bold truncate ${island.titleColor}`}>
              {island.title}
            </span>
          </div>

          <span className={`text-[7px] font-mono-code font-black px-1.5 py-0.2 rounded-full border shrink-0 ${island.pillClass}`}>
            {island.pill}
          </span>
        </motion.div>
      </div>

      {/* 2. OriginOS 5 Field Copilot Identity Card Header */}
      <div className="px-3 py-1.5 flex justify-between items-center border-b border-black/[0.05] bg-white/85">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-[#090D15] text-[#F0B31C] text-[8px] font-black flex items-center justify-center font-mono-code border border-black/10">
            SK
          </div>
          <div>
            <div className="text-[7px] font-mono-code text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <span>ORIGINOS 5 ENCLAVE</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[9px] font-black text-[#090D15]">WATER SECTOR // NODE 04</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[8px] font-mono-code px-1.5 py-0.5 rounded-full bg-[#F2F2EC] text-slate-800 border border-black/[0.06] font-bold">
          <Activity className="w-2.5 h-2.5 text-emerald-600" />
          <span>SCADA LINKED</span>
        </div>
      </div>

      {/* 3. Main Operational Diagnostic Body (Zero Overflow) */}
      <div className="px-3 py-2 flex-1 flex flex-col justify-center space-y-2 text-xs">
        <AnimatePresence mode="wait">
          
          {/* Phase 01: Incoming Dispatch */}
          {phase === 'INCOMING' && (
            <motion.div
              key="p-incoming"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-amber-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    DISPATCH INTERCEPTED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-200 text-amber-950 border border-amber-400 text-[8px] font-black">
                    UNVERIFIED
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code leading-relaxed font-semibold">
                  CLAIMED: SUPERVISOR REYNOLDS <br />
                  VOICE SIMILARITY: <strong className="text-red-700">71% (CLONE SUSPECT)</strong> <br />
                  COERCIVE URGENCY: <strong className="text-amber-900">8.9 / 10</strong>
                </div>
              </div>

              {/* Audio Waveform Inspection Box */}
              <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
                <div className="flex items-center justify-between text-[8px] font-mono-code text-slate-600 uppercase font-black mb-1">
                  <span className="flex items-center gap-1">
                    <AudioWaveform className="w-3 h-3 text-[#F0B31C]" />
                    DISPATCH AUDIO STREAM
                  </span>
                  <span className="text-amber-800">ANOMALY DETECTED</span>
                </div>
                <div className="text-[10px] font-black text-slate-950 font-mono-code italic bg-[#F4F4F0] p-2 rounded-lg border border-black/[0.06]">
                  &ldquo;Ramp Pump 4 to 850 RPM immediately. Water surge inbound.&rdquo;
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 02: NPU Evidence Parsing */}
          {phase === 'EXTRACTING' && (
            <motion.div
              key="p-extracting"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-blue-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                    SNAPDRAGON NPU (45 TOPS)
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-blue-200 text-blue-950 border border-blue-400 font-black">
                    18ms INFERENCE
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Parsed Action:</span>
                    <strong className="text-black font-black">SET PUMP_04 = 850 RPM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervisor Roster:</span>
                    <strong className="text-red-700 font-black">OFF DUTY (LEAVE)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
                <div className="text-[8px] font-mono-code text-slate-600 uppercase font-black">SYNTHESIZED MODBUS FRAME:</div>
                <div className="mt-1 text-[10px] font-mono-code text-slate-950 bg-[#F4F4F0] p-2 rounded-lg border border-black/[0.06] font-bold">
                  WRITE_REG(ADDR: 40012, VAL: 0x0352) <br />
                  TARGET_PLC: STATION_04_PUMP
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 03: Cyber Validation Pass */}
          {phase === 'CYBER_CHECK' && (
            <motion.div
              key="p-cyber"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    CYBER GATE: 100% VALID
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-950 border border-emerald-400 font-black">
                    PASS
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Modbus Syntax:</span>
                    <strong className="text-emerald-900 font-black">VALID CRC (0x9B4E)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Register 40012:</span>
                    <strong className="text-emerald-900 font-black">PERMITTED WRITE</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 shadow-2xs">
                <div className="text-[9px] font-mono-code text-amber-950 font-black flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-600" />
                  <span>THE KINETIC BLINDSPOT:</span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code mt-0.5 font-semibold">
                  Firewall approves write. Forward physical consequence is blind. Simulating in EPANET twin...
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 04: Physical Simulation Violation */}
          {phase === 'PHYSICAL_SIM' && (
            <motion.div
              key="p-physical"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-red-50/90 border border-red-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-red-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                    HYDRAULIC TWIN: VIOLATION
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-red-200 text-red-950 border border-red-400 font-black">
                    REJECTED
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>Relief Valve 02:</span>
                    <strong className="text-red-700 font-black">0% (LOCKED CLOSED)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Simulated Peak:</span>
                    <strong className="text-red-700 font-black">11.4 BAR (LIMIT: 9.2)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-red-300 shadow-2xs">
                <div className="text-[8px] font-mono-code text-red-800 font-black uppercase">PREDICTED DAMAGE:</div>
                <div className="text-[10px] text-slate-900 font-mono-code mt-0.5 font-semibold">
                  Overpressure blowout at Node 14 at T+42s. Catastrophic rupture averted.
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 05: Critic Replan & Approval */}
          {(phase === 'REPLAN' || phase === 'APPROVED') && (
            <motion.div
              key="p-replan"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-950 font-black mb-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CRITIC SAFE REPLAN
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-950 border border-emerald-400 font-black">
                    7.4 BAR SAFE
                  </span>
                </div>
                <div className="text-[10px] text-slate-900 font-mono-code space-y-1 font-semibold">
                  <div className="flex justify-between">
                    <span>1. Pre-open Valve 02:</span>
                    <strong className="text-emerald-900 font-black">40% MODULATION</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Staged Ramp:</span>
                    <strong className="text-emerald-900 font-black">3x STEPS TO 620 RPM</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
                <div className="text-[8px] font-mono-code text-slate-700 uppercase font-black">TWIN RE-VERIFICATION:</div>
                <div className="text-[10px] text-slate-900 font-mono-code mt-0.5 font-semibold">
                  Hydrodynamic peak: 7.4 bar (well under 9.2 threshold). Safe for execution.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Ultrasonic Fingerprint Touch Area / Action Trigger */}
      <div className="px-3 pb-2 pt-0.5">
        {phase === 'PHYSICAL_SIM' ? (
          <button
            onClick={() => onSelectPhase?.('REPLAN')}
            className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono-code text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <span>TRIGGER CRITIC REPLAN</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        ) : phase === 'REPLAN' ? (
          <button
            onClick={() => onSelectPhase?.('APPROVED')}
            className="group relative w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono-code text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer border border-emerald-400/40"
          >
            <div className="relative flex items-center justify-center">
              <Fingerprint className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
              <span className="absolute -inset-1 rounded-full border border-white/50 animate-ping" />
            </div>
            <span>TOUCH ULTRASONIC SENSOR TO SIGN</span>
          </button>
        ) : phase === 'APPROVED' ? (
          <div className="w-full py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-center font-mono-code text-[9px] font-black flex items-center justify-center gap-1 shadow-2xs">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>DISPATCH COMMITTED // OPERATOR #049</span>
          </div>
        ) : (
          <div className="w-full py-1.5 rounded-xl bg-[#F0F0EC] border border-black/[0.05] text-slate-700 text-center font-mono-code text-[9px] font-bold flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] animate-pulse" />
            <span>AUTONOMOUS NPU VERIFICATION ACTIVE</span>
          </div>
        )}
      </div>

      {/* 5. Minimal Terminal Navigation Dock */}
      <div className="px-2 py-1 bg-white border-t border-black/[0.06] flex items-center justify-around text-[8px] font-mono-code text-slate-500">
        <button 
          onClick={() => onSelectPhase?.('INCOMING')}
          className={`px-2 py-1 rounded flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'INCOMING' ? 'text-amber-800 font-bold bg-amber-50' : 'hover:text-black'
          }`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>Dispatch</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('EXTRACTING')}
          className={`px-2 py-1 rounded flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'EXTRACTING' ? 'text-blue-800 font-bold bg-blue-50' : 'hover:text-black'
          }`}
        >
          <Cpu className="w-3 h-3" />
          <span>Evidence</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('CYBER_CHECK')}
          className={`px-2 py-1 rounded flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'CYBER_CHECK' ? 'text-emerald-800 font-bold bg-emerald-50' : 'hover:text-black'
          }`}
        >
          <Server className="w-3 h-3" />
          <span>Cyber</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('PHYSICAL_SIM')}
          className={`px-2 py-1 rounded flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'PHYSICAL_SIM' ? 'text-red-800 font-bold bg-red-50' : 'hover:text-black'
          }`}
        >
          <Gauge className="w-3 h-3" />
          <span>Twin</span>
        </button>

        <button 
          onClick={() => onSelectPhase?.('REPLAN')}
          className={`px-2 py-1 rounded flex flex-col items-center gap-0.5 cursor-pointer ${
            phase === 'REPLAN' || phase === 'APPROVED' ? 'text-emerald-800 font-bold bg-emerald-50' : 'hover:text-black'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Replan</span>
        </button>
      </div>

    </div>
  );
};
