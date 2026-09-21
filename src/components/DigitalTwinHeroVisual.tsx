import React from 'react';
import { CheckCircle2, ShieldAlert, Gauge, Radio } from 'lucide-react';
import type { ValidationPhase } from '../types/sentinel';

interface DigitalTwinHeroVisualProps {
  phase: ValidationPhase;
}

export const DigitalTwinHeroVisual: React.FC<DigitalTwinHeroVisualProps> = ({ phase }) => {
  const isViolation = phase === 'PHYSICAL_SIM';
  const isReplanned = phase === 'REPLAN' || phase === 'APPROVED';

  // Dynamic parameters based on phase
  const pressureBar = isViolation ? 11.4 : isReplanned ? 7.4 : phase === 'CYBER_CHECK' ? 9.8 : 6.8;
  const flowGPM = isViolation ? 3500 : isReplanned ? 2250 : 1800;
  const pumpRPM = isViolation ? 3600 : isReplanned ? 2340 : 1800;
  const valveState = isReplanned ? 'OPEN (40%)' : 'LOCKED CLOSED';
  const tankLevel = isViolation ? 96 : isReplanned ? 78 : 65;

  return (
    <div className="w-full rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between font-mono-code relative overflow-hidden">
      
      {/* Header telemetry info */}
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#F5F5F2] border border-black/[0.05]">
            <Radio className="w-3.5 h-3.5 text-[#090D15]" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
              PHYSICAL TWIN SIMULATOR
            </span>
            <span className="text-xs font-sans font-black text-[#090D15]">
              STATION 04 // PUMP &amp; MANIFOLD
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className={`text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded-full border ${
            isViolation 
              ? 'bg-red-50 text-red-700 border-red-200' 
              : isReplanned 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-slate-100 text-slate-700 border-slate-200'
          }`}>
            {isViolation ? 'SAFETY FAULT' : isReplanned ? 'REPLANNED' : 'MONITORING'}
          </span>
        </div>
      </div>

      {/* SVG Industrial Water Schematic */}
      <div className="relative py-4 my-2">
        <svg viewBox="0 0 400 160" className="w-full h-auto">
          {/* Main Pipeline Pipe */}
          <line x1="20" y1="80" x2="380" y2="80" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round" />
          
          {/* High pressure stress highlight */}
          <line 
            x1="140" 
            y1="80" 
            x2="280" 
            y2="80" 
            stroke={isViolation ? '#EF4444' : isReplanned ? '#10B981' : '#CBD5E1'} 
            strokeWidth="10" 
            strokeDasharray={isViolation ? '6,3' : 'none'}
            className={isViolation ? 'animate-pulse' : ''}
          />

          {/* Bypass relief branch */}
          <path 
            d="M 220 80 L 220 40 L 320 40" 
            fill="none" 
            stroke={isReplanned ? '#10B981' : '#E2E8F0'} 
            strokeWidth="8" 
            strokeLinecap="round"
          />

          {/* Pump Unit Circle */}
          <circle cx="90" cy="80" r="28" fill="#F8FAFC" stroke="#090D15" strokeWidth="2.5" />
          <text x="90" y="76" textAnchor="middle" fill="#090D15" fontSize="10" fontWeight="bold">PUMP 04</text>
          <text x="90" y="90" textAnchor="middle" fill="#64748B" fontSize="8">{pumpRPM} RPM</text>

          {/* Manifold Pressure Gauge */}
          <circle cx="210" cy="80" r="18" fill="#FFFFFF" stroke={isViolation ? '#EF4444' : '#090D15'} strokeWidth="2" />
          <text x="210" y="78" textAnchor="middle" fill={isViolation ? '#DC2626' : '#090D15'} fontSize="8" fontWeight="bold">
            {pressureBar}
          </text>
          <text x="210" y="88" textAnchor="middle" fill="#64748B" fontSize="6">BAR</text>

          {/* Relief Valve 02 */}
          <rect x="250" y="30" width="22" height="20" rx="3" fill="#FFFFFF" stroke={isReplanned ? '#10B981' : '#64748B'} strokeWidth="1.5" />
          <text x="261" y="43" textAnchor="middle" fill={isReplanned ? '#15803D' : '#64748B'} fontSize="7" fontWeight="bold">V02</text>

          {/* Reservoir Tank 2 */}
          <rect x="330" y="55" width="45" height="50" rx="4" fill="#F8FAFC" stroke="#090D15" strokeWidth="2" />
          {/* Fluid fill level */}
          <rect 
            x="332" 
            y={55 + (50 - (tankLevel * 0.46))} 
            width="41" 
            height={tankLevel * 0.46} 
            fill={isViolation ? 'rgba(239, 68, 68, 0.25)' : 'rgba(59, 130, 246, 0.25)'} 
            rx="2"
          />
          <text x="352" y="84" textAnchor="middle" fill="#090D15" fontSize="8" fontWeight="bold">TANK 2</text>
          <text x="352" y="94" textAnchor="middle" fill="#64748B" fontSize="7">{tankLevel}%</text>
        </svg>

        {/* Floating Pressure Callout */}
        <div className="absolute top-2 right-2 flex items-center gap-1.5 p-1.5 rounded-lg bg-white/95 border border-black/[0.08] shadow-xs text-[10px]">
          <Gauge className={`w-3.5 h-3.5 ${isViolation ? 'text-red-600 animate-pulse' : 'text-slate-700'}`} />
          <span className="text-slate-500">LINE PRESSURE:</span>
          <strong className={isViolation ? 'text-red-700' : isReplanned ? 'text-emerald-700' : 'text-slate-900'}>
            {pressureBar} BAR
          </strong>
        </div>
      </div>

      {/* Numerical Telemetry Metrics */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-black/[0.05] text-center text-[10px]">
        <div className="p-2 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
          <span className="text-slate-500 block uppercase text-[8px]">THROUGHPUT</span>
          <span className="font-bold text-[#090D15]">{flowGPM} GPM</span>
        </div>
        <div className="p-2 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
          <span className="text-slate-500 block uppercase text-[8px]">LIMIT HEAD</span>
          <span className="font-bold text-slate-700">9.2 BAR MAX</span>
        </div>
        <div className="p-2 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
          <span className="text-slate-500 block uppercase text-[8px]">VALVE 02</span>
          <span className={`font-bold ${isReplanned ? 'text-emerald-700' : 'text-slate-700'}`}>{valveState}</span>
        </div>
        <div className="p-2 rounded-xl bg-[#FAFAF8] border border-black/[0.04]">
          <span className="text-slate-500 block uppercase text-[8px]">STATUS</span>
          <span className={`font-bold ${isViolation ? 'text-red-700' : isReplanned ? 'text-emerald-700' : 'text-slate-700'}`}>
            {isViolation ? 'OVERPRESSURE' : isReplanned ? 'SAFE' : 'STABLE'}
          </span>
        </div>
      </div>

      {/* Invariant Alert Status */}
      <div className={`mt-3 p-2.5 rounded-xl border text-[10px] leading-relaxed flex items-center justify-between ${
        isViolation
          ? 'bg-red-50 border-red-200 text-red-900'
          : isReplanned
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : 'bg-[#FAFAF8] border-black/[0.05] text-slate-700'
      }`}>
        <div className="flex items-center gap-1.5">
          {isViolation ? (
            <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          )}
          <span>
            {isViolation
              ? 'Hydrodynamic surge exceeds safe threshold (11.4 bar > 9.2 bar)'
              : isReplanned
              ? 'Critic replan sustains hydrodynamic safety gradient (7.4 bar)'
              : 'Plant telemetry synchronized with forward EPANET kinematic model'}
          </span>
        </div>
        <span className="font-bold text-[9px] uppercase tracking-wider shrink-0 ml-2">
          {isViolation ? 'BLOCKED' : 'VERIFIED'}
        </span>
      </div>

    </div>
  );
};
