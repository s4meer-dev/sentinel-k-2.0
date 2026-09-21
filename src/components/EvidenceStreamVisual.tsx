import React from 'react';
import { ShieldCheck, AlertOctagon, CheckCircle2, ArrowRight, Zap, Cpu, Activity, UserCheck } from 'lucide-react';
import type { ValidationPhase } from '../types/sentinel';

interface EvidenceStreamVisualProps {
  currentPhase: ValidationPhase;
  onPhaseSelect?: (phase: ValidationPhase) => void;
}

export const EvidenceStreamVisual: React.FC<EvidenceStreamVisualProps> = ({
  currentPhase,
  onPhaseSelect,
}) => {
  const isCyberPass = ['CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN', 'APPROVED'].includes(currentPhase);
  const isPhysicalHazard = currentPhase === 'PHYSICAL_SIM';
  const isReplanSuccess = currentPhase === 'REPLAN' || currentPhase === 'APPROVED';

  return (
    <div className="w-full flex flex-col gap-4 font-mono-code">
      {/* Visual Pipeline Banner */}
      <div className="p-4 rounded-2xl bg-[#0B0F19]/90 border border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-white font-bold tracking-wider">SENTINEL-K VERIFICATION BUS</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
            NPU TELEMETRY ACTIVE
          </span>
        </div>

        {/* Live Vector Stream */}
        <div className="mt-3 space-y-2 text-xs">
          {/* Vector 1: Human Evidence Extraction */}
          <div className="p-2.5 rounded-xl bg-[#121826] border border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <div>
                <div className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                  HUMAN EVIDENCE
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    SPOOFED AUTHORITY
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Caller ID unverified · Urgency 8.9/10</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-amber-400">EVIDENCE FLAGGED</span>
            </div>
          </div>

          {/* Vector 2: Cyber Logic Gate */}
          <div className="p-2.5 rounded-xl bg-[#121826] border border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className={`w-4 h-4 ${isCyberPass ? 'text-emerald-400' : 'text-slate-500'}`} />
              <div>
                <div className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                  CYBER VALIDATOR
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    LOGIC PASS
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Command: SET PUMP_04 = 850 RPM · Syntax Valid</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-emerald-400">
                {isCyberPass ? 'VALIDATED 100%' : 'PENDING'}
              </span>
            </div>
          </div>

          {/* Vector 3: Physical Twin Simulation */}
          <div className="p-2.5 rounded-xl bg-[#121826] border border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isPhysicalHazard ? (
                <AlertOctagon className="w-4 h-4 text-red-400 animate-pulse" />
              ) : isReplanSuccess ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <Activity className="w-4 h-4 text-cyan-400" />
              )}
              <div>
                <div className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                  PHYSICAL TWIN (WNTR/EPANET)
                  {isPhysicalHazard && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/10 text-red-300 border border-red-500/30 font-bold animate-pulse">
                      11.4 BAR OVERPRESSURE HAZARD
                    </span>
                  )}
                  {isReplanSuccess && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      REPLAN 7.4 BAR SAFE
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400">
                  {isPhysicalHazard
                    ? 'Valve 02 closed + Pump 850 RPM exceeds threshold (9.2 bar)'
                    : isReplanSuccess
                    ? 'Staged ramp with Valve 02 40% open sustains nominal gradient'
                    : 'Awaiting hydrodynamic kinematic projection'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`text-[10px] font-bold ${
                  isPhysicalHazard ? 'text-red-400' : isReplanSuccess ? 'text-emerald-400' : 'text-slate-500'
                }`}
              >
                {isPhysicalHazard ? 'REJECTED' : isReplanSuccess ? 'REPLANNED' : 'EVALUATING'}
              </span>
            </div>
          </div>
        </div>

        {/* Causal Link Bar */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
          <span className="text-slate-400 flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            NPU Evidence + Laptop Physical Sim
          </span>
          <span className="text-[#F0B31C] font-bold flex items-center gap-1">
            <span>CORE PRINCIPLE</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Signature Key Callout */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-emerald-500/10 border border-white/[0.08] text-[11px] text-slate-300 flex items-center gap-2">
        <Zap className="w-4 h-4 text-[#F0B31C] shrink-0" />
        <div>
          <span className="text-white font-bold">&ldquo;A secure patch is not necessarily a safe patch.&rdquo;</span>{' '}
          Cyber verification passed, but physical consequence simulation rejected the command.
        </div>
      </div>

      {/* Quick Interactive Phase Selector */}
      {onPhaseSelect && (
        <div className="grid grid-cols-5 gap-1.5 pt-1">
          {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((phase) => (
            <button
              key={phase}
              onClick={() => onPhaseSelect(phase)}
              className={`px-2 py-1.5 rounded-lg text-[9px] font-bold uppercase transition-all duration-200 border cursor-pointer ${
                currentPhase === phase
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                  : 'bg-[#121826]/80 text-slate-400 border-white/[0.05] hover:text-white hover:border-white/20'
              }`}
            >
              {phase === 'CYBER_CHECK' ? 'CYBER' : phase === 'PHYSICAL_SIM' ? 'PHYSICAL' : phase}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
