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
    <div className="w-full flex flex-col gap-3.5 font-mono-code">
      {/* Visual Pipeline Banner */}
      <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0B31C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F0B31C]" />
            </span>
            <span className="text-[#090D15] font-bold tracking-wider">SENTINEL-K VERIFICATION BUS</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4F4F0] text-slate-700 border border-black/[0.06] font-bold">
            NPU TELEMETRY ACTIVE
          </span>
        </div>

        {/* Live Vector Stream */}
        <div className="mt-3 space-y-2 text-xs">
          {/* Vector 1: Human Evidence Extraction */}
          <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-600" />
              <div>
                <div className="text-[11px] text-[#090D15] font-bold flex items-center gap-1.5">
                  HUMAN EVIDENCE
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    SPOOFED AUTHORITY
                  </span>
                </div>
                <div className="text-[10px] text-slate-600">Caller ID unverified · Urgency score: 8.9/10</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-amber-800">FLAGGED</span>
            </div>
          </div>

          {/* Vector 2: Cyber Logic Gate */}
          <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className={`w-4 h-4 ${isCyberPass ? 'text-emerald-600' : 'text-slate-400'}`} />
              <div>
                <div className="text-[11px] text-[#090D15] font-bold flex items-center gap-1.5">
                  CYBER VALIDATOR
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                    LOGIC PASS
                  </span>
                </div>
                <div className="text-[10px] text-slate-600">Command: SET PUMP_04 = 850 RPM · Valid CRC</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-emerald-800">
                {isCyberPass ? 'VALIDATED' : 'PENDING'}
              </span>
            </div>
          </div>

          {/* Vector 3: Physical Twin Simulation */}
          <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isPhysicalHazard ? (
                <AlertOctagon className="w-4 h-4 text-red-600 animate-pulse" />
              ) : isReplanSuccess ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <Activity className="w-4 h-4 text-slate-600" />
              )}
              <div>
                <div className="text-[11px] text-[#090D15] font-bold flex items-center gap-1.5">
                  PHYSICAL TWIN (WNTR/EPANET)
                  {isPhysicalHazard && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-100 text-red-900 border border-red-200 font-bold">
                      11.4 BAR OVERPRESSURE
                    </span>
                  )}
                  {isReplanSuccess && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                      7.4 BAR SAFE GRADIENT
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-600">
                  {isPhysicalHazard
                    ? 'Valve 02 closed + Pump 850 RPM exceeds threshold (9.2 bar)'
                    : isReplanSuccess
                    ? 'Staged ramp with Valve 02 40% open sustains safe head'
                    : 'Awaiting hydrodynamic kinematic projection'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`text-[10px] font-bold ${
                  isPhysicalHazard ? 'text-red-700' : isReplanSuccess ? 'text-emerald-700' : 'text-slate-500'
                }`}
              >
                {isPhysicalHazard ? 'REJECTED' : isReplanSuccess ? 'REPLANNED' : 'EVALUATING'}
              </span>
            </div>
          </div>
        </div>

        {/* Causal Link Bar */}
        <div className="mt-3 pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px]">
          <span className="text-slate-500 flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-slate-700" />
            NPU Evidence + Hydrodynamic Sim
          </span>
          <span className="text-slate-900 font-bold flex items-center gap-1">
            <span>CORE PRINCIPLE</span>
            <ArrowRight className="w-3 h-3 text-[#F0B31C]" />
          </span>
        </div>
      </div>

      {/* Signature Key Callout */}
      <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-2xs text-[11px] text-slate-700 flex items-center gap-2">
        <Zap className="w-4 h-4 text-[#F0B31C] shrink-0" />
        <div>
          <strong className="text-[#090D15]">&ldquo;A secure patch is not necessarily a safe patch.&rdquo;</strong>{' '}
          Cyber verification passed, but physical consequence simulation rejected the command.
        </div>
      </div>

      {/* Quick Interactive Phase Selector */}
      {onPhaseSelect && (
        <div className="grid grid-cols-5 gap-1.5 pt-0.5">
          {(['INCOMING', 'EXTRACTING', 'CYBER_CHECK', 'PHYSICAL_SIM', 'REPLAN'] as ValidationPhase[]).map((phase) => (
            <button
              key={phase}
              onClick={() => onPhaseSelect(phase)}
              className={`px-2 py-1.5 rounded-lg text-[9px] font-mono-code font-bold uppercase transition-all duration-200 border cursor-pointer ${
                currentPhase === phase
                  ? 'bg-[#090D15] text-white border-[#090D15] shadow-xs'
                  : 'bg-white text-slate-600 border-black/[0.06] hover:text-black hover:border-black/20'
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
