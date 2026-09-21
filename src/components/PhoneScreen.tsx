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
  Sparkles,
  Server,
  Gauge
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
  const getOriginIslandContent = () => {
    switch (phase) {
      case 'INCOMING':
        return {
          icon: <AlertTriangle className="w-3 h-3 text-amber-500 animate-pulse" />,
          title: 'UNVERIFIED DISPATCH',
          badge: '8.9 URGENCY',
          badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
          textColor: 'text-amber-200',
        };
      case 'EXTRACTING':
        return {
          icon: <Cpu className="w-3 h-3 text-blue-400 animate-spin" />,
          title: '45 TOPS NPU PARSER',
          badge: 'SLM 3B QUANT',
          badgeColor: 'text-blue-400 bg-blue-950/40 border-blue-500/30',
          textColor: 'text-blue-200',
        };
      case 'CYBER_CHECK':
        return {
          icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
          title: 'CYBER PROTOCOL VALID',
          badge: 'MODBUS 40012',
          badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
          textColor: 'text-emerald-200',
        };
      case 'PHYSICAL_SIM':
        return {
          icon: <ShieldAlert className="w-3 h-3 text-red-500 animate-bounce" />,
          title: '11.4 BAR OVERPRESSURE',
          badge: 'HAZARD REJECT',
          badgeColor: 'text-red-400 bg-red-950/50 border-red-500/40',
          textColor: 'text-red-200',
        };
      case 'REPLAN':
        return {
          icon: <Sparkles className="w-3 h-3 text-[#F0B31C] animate-spin" />,
          title: 'CRITIC REPLAN READY',
          badge: '7.4 BAR SAFE',
          badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
          textColor: 'text-amber-200',
        };
      case 'APPROVED':
        return {
          icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />,
          title: 'BIOMETRIC SIGNED',
          badge: 'VALVE 02 ARMED',
          badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
          textColor: 'text-emerald-200',
        };
    }
  };

  const island = getOriginIslandContent();

  return (
    <div className="relative w-full h-full bg-[#FAFAF8] text-[#090D15] flex flex-col justify-between select-none overflow-hidden font-sans border border-black/[0.06]">
      
      {/* 1. OriginOS 5 Status Bar with Integrated Dynamic Origin Island */}
      <div className="relative z-30 pt-2 pb-1.5 px-3 bg-[#0A0D14] text-white">
        
        {/* Top Status Glyphs */}
        <div className="flex justify-between items-center text-[10px] font-mono-code text-slate-400 px-1 mb-1">
          <div className="flex items-center gap-1 font-bold text-white tracking-wider">
            <span>14:28</span>
            <span className="text-[9px] px-1 py-0 rounded bg-red-600/90 text-white font-black">5G</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[8px] text-[#F0B31C] font-mono-code font-bold">
              <Radio className="w-2.5 h-2.5 text-[#F0B31C]" />
              <span>Q2 ENGINE</span>
            </div>
            <Wifi className="w-3 h-3 text-slate-300" />
            <div className="flex items-center gap-0.5 text-white font-bold text-[9px]">
              <span>96%</span>
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Dynamic Origin Island (Flagship Morphing Pill) */}
        <motion.div 
          layout
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="mx-auto rounded-full bg-[#141A24] border border-white/10 shadow-lg px-2.5 py-1 flex items-center justify-between gap-2 max-w-[280px]"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            {island.icon}
            <span className={`text-[10px] font-mono-code font-bold truncate ${island.textColor}`}>
              {island.title}
            </span>
          </div>
          <span className={`text-[8px] font-mono-code font-black px-1.5 py-0.2 rounded-full border shrink-0 ${island.badgeColor}`}>
            {island.badge}
          </span>
        </motion.div>
      </div>

      {/* 2. OriginOS 5 Field Copilot Identity Banner */}
      <div className="relative z-10 px-3.5 pt-2 pb-1.5 flex justify-between items-center border-b border-black/[0.05] bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#090D15] text-[#F0B31C] text-[9px] font-black flex items-center justify-center font-mono-code border border-black/10">
            SK
          </div>
          <div>
            <div className="text-[8px] font-mono-code text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <span>ORIGINOS 5 ENCLAVE</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[10px] font-bold text-[#090D15] font-sans">WATER SECTOR // NODE 04</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-mono-code px-1.5 py-0.5 rounded-full bg-[#F2F2EC] text-slate-700 border border-black/[0.06] font-bold">
            EPANET TWIN LINK
          </span>
        </div>
      </div>

      {/* 3. Dynamic Terminal Body — Driven by Active Phase */}
      <div className="relative z-10 px-3.5 py-2 flex-1 flex flex-col justify-start overflow-y-auto space-y-2 text-xs">
        
        {/* Phase A: Incoming Unverified Dispatch */}
        <AnimatePresence mode="wait">
          {phase === 'INCOMING' && (
            <motion.div
              key="phase-incoming"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-amber-900 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                    DISPATCH INTERCEPTED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300 text-[8px]">
                    UNVERIFIED
                  </span>
                </div>
                <div className="text-[10px] text-slate-700 font-mono-code leading-relaxed">
                  CLAIMED: SUPERVISOR REYNOLDS <br />
                  CHANNEL: CELLULAR DIRECT (+1-800-442) <br />
                  URGENCY: CRITICAL (SCORE: 8.9/10)
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
                <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">DISPATCH AUDIO TRANSCRIPT:</div>
                <div className="mt-1 text-[11px] font-bold text-slate-900 font-mono-code italic bg-[#F8F8F6] p-2 rounded-lg border border-black/[0.04]">
                  &ldquo;Ramp Pump 4 immediately to 850 RPM. Secondary relief valve will handle head.&rdquo;
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#F8F8F6] border border-black/[0.05] text-[9px] font-mono-code text-slate-600 flex items-center justify-between">
                <span>NPU Intent Structuring:</span>
                <span className="text-amber-800 font-bold">READY TO EXTRACT</span>
              </div>
            </motion.div>
          )}

          {/* Phase B: Extracting Evidence */}
          {phase === 'EXTRACTING' && (
            <motion.div
              key="phase-extracting"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-blue-900 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-blue-600 animate-spin-slow" />
                    SNAPDRAGON NPU EXTRACTION
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-blue-100 text-blue-900 border border-blue-300">
                    SLM 3B QUANTIZED
                  </span>
                </div>
                <div className="text-[10px] text-slate-700 font-mono-code space-y-1">
                  <div className="flex justify-between">
                    <span>Parsed Action:</span>
                    <strong className="text-slate-900">SET PUMP_04 = 850 RPM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Acoustic Biometric:</span>
                    <strong className="text-red-700">ANOMALY (PROBABLE CLONE)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervisor Roster:</span>
                    <strong className="text-amber-800">OFF DUTY (ANNUAL LEAVE)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
                <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">MODBUS PAYLOAD SYNTHESIS:</div>
                <div className="mt-1 text-[10px] font-mono-code text-slate-800 bg-[#F8F8F6] p-2 rounded-lg border border-black/[0.04]">
                  WRITE_REG(ADDR: 40012, VAL: 0x0352) <br />
                  TARGET_PLC: STATION_04_PUMP
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase C: Cyber Check */}
          {phase === 'CYBER_CHECK' && (
            <motion.div
              key="phase-cyber"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-900 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    CYBER VALIDATION GATE
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                    PASS 100%
                  </span>
                </div>
                <div className="text-[10px] text-slate-700 font-mono-code space-y-1">
                  <div className="flex justify-between">
                    <span>Modbus Protocol Check:</span>
                    <strong className="text-emerald-800">VALID CRC</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Register Boundary:</span>
                    <strong className="text-emerald-800">WITHIN LIMITS</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Firewall Policy:</span>
                    <strong className="text-emerald-800">SYNTAX PERMITTED</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-1 text-[9px] font-mono-code text-amber-900 font-bold">
                  <Zap className="w-3 h-3 text-amber-600" />
                  <span>THE KINETIC PARADOX:</span>
                </div>
                <div className="text-[10px] text-slate-700 font-mono-code mt-1">
                  Traditional firewall says &ldquo;Authorized write&rdquo;. Forward physical consequence is unknown. Handing off to hydraulic twin.
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase D: Physical Sim Failure */}
          {phase === 'PHYSICAL_SIM' && (
            <motion.div
              key="phase-physical"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-red-900 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                    HYDRAULIC TWIN: VIOLATION
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-red-100 text-red-900 border border-red-300 font-bold">
                    REJECTED
                  </span>
                </div>
                <div className="text-[10px] text-slate-800 font-mono-code space-y-1">
                  <div className="flex justify-between">
                    <span>Valve 02 State:</span>
                    <strong className="text-red-700">0% (LOCKED CLOSED)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Simulated Peak Pressure:</span>
                    <strong className="text-red-700 font-black">11.4 BAR</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Safe Invariant Threshold:</span>
                    <strong className="text-slate-900">9.2 BAR MAX</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-red-200 shadow-2xs">
                <div className="text-[9px] font-mono-code text-red-700 font-bold uppercase">CONSEQUENCE PROJECTION:</div>
                <div className="text-[10px] text-slate-700 font-mono-code mt-0.5">
                  Overpressure blowout predicted at Node 14 at T+42s. Catastrophic manifold rupture hazard. Action halted.
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase E: Replan Safe Path */}
          {(phase === 'REPLAN' || phase === 'APPROVED') && (
            <motion.div
              key="phase-replan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-900 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CRITIC SAFE REPLAN
                  </span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                    7.4 BAR SAFE
                  </span>
                </div>
                <div className="text-[10px] text-slate-800 font-mono-code space-y-1">
                  <div className="flex justify-between">
                    <span>Step 1: Open Valve 02:</span>
                    <strong className="text-emerald-800">40% MODULATION</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Step 2: Staged Ramp:</span>
                    <strong className="text-emerald-800">3x 30s INCREMENTS</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Final Target Speed:</span>
                    <strong className="text-emerald-800">620 RPM (SUSTAINED)</strong>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
                <div className="text-[9px] font-mono-code text-slate-500 uppercase font-bold">HUMAN SOVEREIGN OPERATOR GATE:</div>
                <div className="text-[10px] text-slate-700 font-mono-code mt-0.5">
                  Safe remediation calculated and twin verified. Requires certified operator biometric signature.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* 4. Operator Action Trigger / Ultrasonic In-Display Sensor */}
      <div className="relative z-10 px-3 pb-2 pt-1">
        {phase === 'PHYSICAL_SIM' ? (
          <button
            onClick={() => onSelectPhase?.('REPLAN')}
            className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono-code text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <span>TRIGGER CRITIC REPLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : phase === 'REPLAN' ? (
          <div className="flex flex-col items-center">
            <button
              onClick={() => onSelectPhase?.('APPROVED')}
              className="group relative w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono-code text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer border border-emerald-400/40"
            >
              <div className="relative flex items-center justify-center">
                <Fingerprint className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
                <span className="absolute -inset-1 rounded-full border border-white/40 animate-ping" />
              </div>
              <span>TOUCH ULTRASONIC SENSOR TO SIGN</span>
            </button>
            <span className="text-[8px] font-mono-code text-slate-400 mt-1">
              iQOO 3D Ultrasonic In-Display Fingerprint Sensor
            </span>
          </div>
        ) : phase === 'APPROVED' ? (
          <div className="w-full py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center font-mono-code text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>OPERATOR SIGNED // DISPATCH COMMITTED</span>
          </div>
        ) : (
          <div className="w-full py-1.5 rounded-xl bg-[#F0F0EC] border border-black/[0.05] text-slate-600 text-center font-mono-code text-[9px] font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] animate-pulse" />
            <span>AUTONOMOUS PIPELINE PROCESSING // Q2 144Hz</span>
          </div>
        )}
      </div>

      {/* 5. Minimal Terminal Navigation Dock */}
      <div className="relative z-10 px-2 py-1.5 bg-white border-t border-black/[0.06] flex items-center justify-around text-[9px] font-mono-code text-slate-500">
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
