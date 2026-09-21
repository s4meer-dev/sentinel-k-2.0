import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  BatteryMedium, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Cpu, 
  ShieldAlert,
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
  const getGlowBg = () => {
    switch (phase) {
      case 'INCOMING':
        return 'bg-gradient-to-b from-amber-500/20 via-transparent to-[#07090E]';
      case 'EXTRACTING':
        return 'bg-gradient-to-b from-cyan-500/20 via-transparent to-[#07090E]';
      case 'CYBER_CHECK':
        return 'bg-gradient-to-b from-blue-500/20 via-transparent to-[#07090E]';
      case 'PHYSICAL_SIM':
        return 'bg-gradient-to-b from-rose-500/25 via-transparent to-[#07090E]';
      case 'REPLAN':
      case 'APPROVED':
        return 'bg-gradient-to-b from-emerald-500/20 via-transparent to-[#07090E]';
      default:
        return 'bg-gradient-to-b from-cyan-500/15 via-transparent to-[#07090E]';
    }
  };

  return (
    <div className="relative w-full h-full bg-[#07090E] text-slate-200 flex flex-col justify-between select-none overflow-hidden font-sans border border-white/5">
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-700 opacity-80 ${getGlowBg()}`}
      />

      {/* Subtle Matrix Subgrid */}
      <div className="absolute inset-0 industrial-subgrid opacity-25 pointer-events-none" />

      {/* 1. OriginOS Status Bar (Field Terminal Mode) */}
      <div className="relative z-20 px-4 pt-3 pb-1 flex justify-between items-center text-[10px] text-slate-400 font-mono-code tracking-wider border-b border-white/10 bg-[#0B0F17]/90 backdrop-blur-md">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <span>14:28:04</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C] shadow-[0_0_8px_rgba(240,179,28,0.8)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] px-1.5 py-0.2 rounded font-bold font-mono-code bg-cyan-950/80 text-cyan-400 border border-cyan-700/50">
            OFFICE KIT LINKED
          </span>
          <Wifi className="w-3 h-3 text-slate-300" />
          <div className="flex items-center gap-0.5 text-slate-200 font-bold">
            <span className="text-[9px]">92%</span>
            <BatteryMedium className="w-3.5 h-3.5 text-slate-300" />
          </div>
        </div>
      </div>

      {/* 2. Sentinel-K Field Header */}
      <div className="relative z-10 px-3.5 pt-2 pb-1.5 flex items-center justify-between border-b border-white/10 bg-[#0D111A]/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-xs shadow-[0_0_12px_rgba(240,179,28,0.3)]">
            SK
          </div>
          <div>
            <div className="text-[9px] font-mono-code text-slate-400 font-bold tracking-wider flex items-center gap-1">
              <span>FIELD COPILOT</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="text-xs font-display font-bold text-white leading-none tracking-tight">
              WATER SECTOR // NODE 04
            </div>
          </div>
        </div>

        <div className={`px-2 py-0.5 rounded-full text-[9px] font-mono-code font-extrabold uppercase tracking-wider border ${
          phase === 'PHYSICAL_SIM'
            ? 'bg-rose-950/80 text-rose-300 border-rose-700/60 animate-pulse'
            : phase === 'APPROVED' || phase === 'REPLAN'
            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
            : 'bg-white/5 text-cyan-300 border-white/10'
        }`}>
          {phase === 'INCOMING' && '01 INSTRUCTION'}
          {phase === 'EXTRACTING' && '02 EVIDENCE'}
          {phase === 'CYBER_CHECK' && '03 CYBER CHECK'}
          {phase === 'PHYSICAL_SIM' && '04 SIM FAILED'}
          {(phase === 'REPLAN' || phase === 'APPROVED') && '05 REPLANNED'}
        </div>
      </div>

      {/* 3. Main Screen Viewport */}
      <div className="relative z-10 flex-1 px-3 py-2 flex flex-col justify-between overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* PHASE 1: INCOMING SUSPICIOUS INSTRUCTION */}
          {phase === 'INCOMING' && (
            <motion.div
              key="incoming"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              {/* Alert Banner */}
              <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40 shadow-sm">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                    DISPATCH INTERCEPTED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[8px] font-bold">
                    UNVERIFIED
                  </span>
                </div>

                <div className="mt-2 p-2 rounded-lg bg-black/60 border border-white/10 text-slate-300 font-mono-code text-[10px]">
                  <div className="text-slate-500 text-[8px] uppercase tracking-wider mb-1">
                    CLAIMED: SUPERVISOR REYNOLDS
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    &quot;URGENT — Override pump sequence 4 immediately. Bypass relief valve 02 to clear sediment. Run attached script v2.8.&quot;
                  </p>
                </div>
              </div>

              {/* Threat Signature Matrix */}
              <div className="space-y-1 text-[9px] font-mono-code">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400">Social Urgency Claim</span>
                  <span className="text-amber-400 font-bold">94% Pressure Index</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400">External Payload</span>
                  <span className="text-rose-400 font-bold">Unsigned script_v2.8.sh</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400">Target Actuator</span>
                  <span className="text-[#F0B31C] font-bold">Pump 4 (3500 GPM)</span>
                </div>
              </div>

              {/* Action Escalation Button */}
              <button
                onClick={() => onSelectPhase && onSelectPhase('EXTRACTING')}
                className="w-full py-2 rounded-xl bg-gradient-to-r from-[#F0B31C] to-amber-500 text-[#07090E] font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(240,179,28,0.3)] transition-transform active:scale-98 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>ESCALATE TO KINETIC-SEC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PHASE 2: EVIDENCE EXTRACTION */}
          {phase === 'EXTRACTING' && (
            <motion.div
              key="extracting"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                    LOCAL ON-DEVICE AI PARSER
                  </span>
                  <span className="text-slate-400 text-[8px]">NPU ACCELERATED</span>
                </div>

                <div className="mt-2 space-y-1.5 font-mono-code text-[9px]">
                  <div className="p-1.5 rounded-lg bg-black/50 border border-cyan-500/20 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">[1] AUTH:</span>
                    <span className="text-slate-300">Carrier header does not match internal SIM whitelist. Spoof probability: 89%.</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/50 border border-cyan-500/20 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">[2] SCRIPT:</span>
                    <span className="text-slate-300">Payload modifies PLC register %QW104 (Pump 4 Speed override).</span>
                  </div>
                </div>
              </div>

              {/* Progress to Cyber Validation */}
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[9px] font-mono-code text-slate-400 uppercase mb-1">
                  OFFICE KIT VERIFICATION HANDOFF
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '10%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                </div>
                <div className="text-[8px] font-mono-code text-cyan-400 mt-1">
                  Transmitting contextual evidence to Verification Lab...
                </div>
              </div>

              <button
                onClick={() => onSelectPhase && onSelectPhase('CYBER_CHECK')}
                className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090E] font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>RUN CYBER VALIDATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PHASE 3: CYBER CHECK (PASSES SYNTAX, BUT UNPROVEN) */}
          {phase === 'CYBER_CHECK' && (
            <motion.div
              key="cyber_check"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/40">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    CYBER VALIDATION ENGINE
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[8px] font-bold">
                    CYBER PASS
                  </span>
                </div>

                <div className="mt-2 space-y-1 text-[9px] font-mono-code">
                  <div className="flex items-center justify-between p-1 rounded bg-black/40 border border-blue-500/20">
                    <span className="text-slate-300">PLC Ladder Logic Syntax</span>
                    <span className="text-emerald-400 font-bold">VALID ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-black/40 border border-blue-500/20">
                    <span className="text-slate-300">Session Token Security</span>
                    <span className="text-emerald-400 font-bold">AUTHORIZED ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-black/40 border border-blue-500/20">
                    <span className="text-slate-300">Exploit / Buffer Overflow</span>
                    <span className="text-emerald-400 font-bold">CLEAN ✓</span>
                  </div>
                </div>
              </div>

              {/* Crucial Insight Card */}
              <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[10px] font-mono-code">
                <div className="text-amber-400 font-bold flex items-center gap-1 mb-0.5">
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>THE KINETIC-SEC PRINCIPLE:</span>
                </div>
                <p className="text-slate-300 text-[9px] leading-relaxed">
                  A patch can be syntactically secure, yet physically catastrophic. Escalating to WNTR hydraulic digital twin.
                </p>
              </div>

              <button
                onClick={() => onSelectPhase && onSelectPhase('PHYSICAL_SIM')}
                className="w-full py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-[#07090E] font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>SIMULATE PHYSICAL TWIN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PHASE 4: PHYSICAL DIGITAL TWIN (SIMULATION DETECTS FAULT) */}
          {phase === 'PHYSICAL_SIM' && (
            <motion.div
              key="physical_sim"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-rose-400 font-bold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                    PHYSICAL SIMULATION FAILED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-rose-500/30 text-rose-200 border border-rose-500/60 text-[8px] font-black">
                    REJECTED ✕
                  </span>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-1.5 text-center font-mono-code text-[9px]">
                  <div className="p-1.5 rounded-lg bg-black/60 border border-rose-500/30">
                    <span className="text-slate-400 block text-[8px]">SIMULATED PRESSURE</span>
                    <span className="text-sm font-black text-rose-400">11.4 Bar</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/60 border border-rose-500/30">
                    <span className="text-slate-400 block text-[8px]">SAFE THRESHOLD</span>
                    <span className="text-sm font-black text-slate-300">9.2 Bar</span>
                  </div>
                </div>

                <div className="mt-2 p-1.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-[8px] font-mono-code text-rose-200">
                  ⚠️ <strong>HYDRAULIC HAMMER AT T+84s:</strong> Valve 02 closed while Pump 4 at 100% ruptures intake manifold!
                </div>
              </div>

              <div className="p-2 rounded-xl bg-black/50 border border-white/10 text-[9px] font-mono-code text-slate-400">
                <span>Deterministic physical model overrides human-side authorization. Action halted.</span>
              </div>

              <button
                onClick={() => onSelectPhase && onSelectPhase('REPLAN')}
                className="w-full py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>TRIGGER CRITIC REPLAN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PHASE 5: REPLAN & HUMAN OPERATOR APPROVAL */}
          {(phase === 'REPLAN' || phase === 'APPROVED') && (
            <motion.div
              key="replan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between space-y-2"
            >
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    REPLANNED ACTION VERIFIED
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[8px] font-bold">
                    DUAL PASS ✓
                  </span>
                </div>

                <div className="mt-2 space-y-1 font-mono-code text-[9px]">
                  <div className="p-1 rounded bg-black/50 border border-emerald-500/20 text-slate-200">
                    <span className="text-emerald-400 font-bold">REVISED ACTION:</span> Modulate Pump 4 to 65% duty cycle. Open Relief Valve 02.
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-emerald-500/20">
                    <span className="text-slate-400">Peak Pressure</span>
                    <span className="text-emerald-400 font-bold">7.4 Bar (Safe &lt; 9.2 Bar)</span>
                  </div>
                </div>
              </div>

              {/* Human Authority Banner */}
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-center font-mono-code text-[9px]">
                <span className="text-slate-400 block text-[8px] uppercase">HUMAN OPERATOR GATE</span>
                <span className="text-[#F0B31C] font-bold">Deterministic Validators Passed · Awaiting Physical Sign-Off</span>
              </div>

              <button
                onClick={() => onSelectPhase && onSelectPhase('INCOMING')}
                className="w-full py-2 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-sans font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(240,179,28,0.3)] cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>EXECUTE VERIFIED ACTION</span>
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 4. OriginOS Bottom Dock (5 Lifecycle Tabs) */}
      <div className="relative z-20 px-2 py-1.5 border-t border-white/10 bg-[#0B0F17]/95 backdrop-blur-md flex items-center justify-between gap-1">
        {[
          { id: 'INCOMING', label: 'Dispatch', icon: AlertTriangle },
          { id: 'EXTRACTING', label: 'Evidence', icon: Cpu },
          { id: 'CYBER_CHECK', label: 'Cyber', icon: Server },
          { id: 'PHYSICAL_SIM', label: 'Twin', icon: Gauge },
          { id: 'REPLAN', label: 'Replan', icon: CheckCircle2 },
        ].map(({ id, label, icon: Icon }) => {
          const isActive = phase === id || (id === 'REPLAN' && phase === 'APPROVED');
          return (
            <button
              key={id}
              onClick={() => onSelectPhase && onSelectPhase(id as ValidationPhase)}
              className={`flex-1 py-1 px-0.5 rounded-lg font-mono-code transition-all text-center flex flex-col items-center gap-0.5 cursor-pointer ${
                isActive
                  ? 'bg-[#F0B31C] text-[#07090E] shadow-sm font-black scale-102'
                  : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
              }`}
            >
              <Icon className={`w-3 h-3 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span className="text-[7.5px] tracking-tight">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
