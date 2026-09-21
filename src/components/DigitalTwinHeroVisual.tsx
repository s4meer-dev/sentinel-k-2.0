import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert, Gauge, Activity, Radio } from 'lucide-react';
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
    <div className="w-full rounded-2xl bg-[#0D111A]/95 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-4 sm:p-5 flex flex-col justify-between font-mono-code relative overflow-hidden">
      
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 industrial-subgrid opacity-20 pointer-events-none" />
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[90px] pointer-events-none transition-colors duration-700 ${
        isViolation ? 'bg-rose-500/20' : isReplanned ? 'bg-emerald-500/15' : 'bg-cyan-500/15'
      }`} />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${
            isViolation ? 'bg-rose-500 animate-ping' : isReplanned ? 'bg-emerald-400' : 'bg-cyan-400 animate-pulse'
          }`} />
          <span className="text-xs font-bold text-white tracking-wider">INDUSTRIAL DIGITAL TWIN</span>
          <span className="text-[10px] text-slate-500">WNTR / EPANET</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
          PROTOTYPE SIMULATION
        </span>
      </div>

      {/* Schematic Process Grid */}
      <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        {/* Component 1: Booster Pump 4 */}
        <div className={`p-3 rounded-xl border transition-all ${
          isViolation 
            ? 'bg-rose-950/30 border-rose-500/40 shadow-[0_0_15px_rgba(239,68,68,0.15)]' 
            : isReplanned 
            ? 'bg-emerald-950/20 border-emerald-500/40' 
            : 'bg-black/40 border-white/10'
        }`}>
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Activity className="w-3 h-3 text-cyan-400" />
              BOOSTER PUMP 4
            </span>
            <span className={`px-1.5 py-0.2 rounded text-[8px] font-bold ${
              isViolation 
                ? 'bg-rose-500/20 text-rose-300' 
                : isReplanned 
                ? 'bg-emerald-500/20 text-emerald-300' 
                : 'bg-white/10 text-slate-300'
            }`}>
              {isViolation ? 'FORCED 100%' : isReplanned ? 'MODULATED 65%' : 'STANDBY'}
            </span>
          </div>

          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <span className="text-xl font-display font-black text-white">{flowGPM}</span>
              <span className="text-[10px] text-slate-400 ml-1">GPM</span>
            </div>
            <div className="text-right text-[10px]">
              <span className="text-slate-400">RPM: </span>
              <span className="font-bold text-white">{pumpRPM}</span>
            </div>
          </div>

          {/* Animated Flow Track */}
          <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: isViolation ? ['-100%', '100%'] : ['-100%', '100%'] }}
              transition={{ duration: isViolation ? 0.6 : 1.5, repeat: Infinity, ease: 'linear' }}
              className={`h-full w-1/3 rounded-full ${
                isViolation ? 'bg-rose-500' : isReplanned ? 'bg-emerald-400' : 'bg-cyan-400'
              }`}
            />
          </div>
        </div>

        {/* Component 2: Hydraulic Line Pressure */}
        <div className={`p-3 rounded-xl border transition-all ${
          isViolation 
            ? 'bg-rose-950/40 border-rose-500/60 shadow-[0_0_20px_rgba(239,68,68,0.25)]' 
            : isReplanned 
            ? 'bg-emerald-950/20 border-emerald-500/40' 
            : 'bg-black/40 border-white/10'
        }`}>
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Gauge className="w-3 h-3 text-cyan-400" />
              PRESSURE MANIFOLD
            </span>
            <span className="text-[8px] text-slate-500">MAX: 9.2 BAR</span>
          </div>

          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <span className={`text-2xl font-display font-black tracking-tight ${
                isViolation ? 'text-rose-400 animate-pulse' : isReplanned ? 'text-emerald-400' : 'text-white'
              }`}>
                {pressureBar.toFixed(1)}
              </span>
              <span className="text-[10px] text-slate-400 ml-1">BAR</span>
            </div>
            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
              isViolation 
                ? 'bg-rose-500/30 text-rose-300 border border-rose-500/50' 
                : isReplanned 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                : 'bg-white/10 text-slate-300'
            }`}>
              {isViolation ? 'OVERPRESSURE!' : isReplanned ? 'SAFE STABILIZED' : 'NOMINAL'}
            </span>
          </div>

          {/* Threshold Visual Bar */}
          <div className="mt-2 relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              style={{ width: `${Math.min(100, (pressureBar / 12) * 100)}%` }}
              className={`h-full transition-all duration-500 rounded-full ${
                isViolation ? 'bg-rose-500' : isReplanned ? 'bg-emerald-400' : 'bg-cyan-400'
              }`}
            />
            {/* Safe 9.2 bar limit marker */}
            <div 
              style={{ left: `${(9.2 / 12) * 100}%` }}
              className="absolute top-0 bottom-0 w-0.5 bg-rose-400 shadow-[0_0_4px_#ef4444]" 
            />
          </div>
        </div>

        {/* Component 3: Storage Reservoir Level */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>RESERVOIR TANK 2</span>
            <span className="text-white font-bold">{tankLevel}%</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
              <div 
                style={{ width: `${tankLevel}%` }}
                className={`h-full transition-all duration-500 rounded-full ${
                  isViolation ? 'bg-amber-500' : 'bg-cyan-400'
                }`}
              />
            </div>
            <span className="text-[9px] text-slate-400">{isViolation ? 'OVERFILL FLUX' : 'BALANCED'}</span>
          </div>
        </div>

        {/* Component 4: Relief Valve 02 */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>BYPASS VALVE 02</span>
            <span className={`text-[9px] font-bold ${isReplanned ? 'text-emerald-400' : 'text-slate-400'}`}>
              {valveState}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span className="text-slate-500 text-[9px]">SPOOFED ORDER:</span>
            <span className="text-rose-400 text-[9px] font-bold">KEEP CLOSED</span>
          </div>
        </div>

      </div>

      {/* Bottom Verification Status Callout */}
      <div className={`relative z-10 p-3 rounded-xl border transition-all ${
        isViolation
          ? 'bg-rose-950/60 border-rose-500/60'
          : isReplanned
          ? 'bg-emerald-950/40 border-emerald-500/50'
          : 'bg-black/50 border-white/10'
      }`}>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {isViolation ? (
              <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
            ) : isReplanned ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <Radio className="w-4 h-4 text-cyan-400" />
            )}
            <span className="font-bold text-white">
              {isViolation ? 'PHYSICAL SAFETY ENVELOPE BREACHED' : isReplanned ? 'KINETIC CONSTRAINTS SATISFIED' : 'TWIN MODEL SYNCHRONIZED'}
            </span>
          </div>

          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
            isViolation 
              ? 'bg-rose-500 text-black' 
              : isReplanned 
              ? 'bg-emerald-400 text-black' 
              : 'bg-cyan-500/20 text-cyan-300'
          }`}>
            {isViolation ? 'BLOCKED ✕' : isReplanned ? 'VERIFIED ✓' : 'READY'}
          </span>
        </div>

        <p className="mt-1.5 text-[10px] text-slate-300 leading-relaxed">
          {isViolation
            ? 'Action rejected: Although cyber authorization passed, physical fluid simulation predicts a 11.4 bar pressure spike rupturing the manifold at T+84s.'
            : isReplanned
            ? 'Safe execution plan verified: Modulating Pump 4 to 65% with Bypass Valve 02 open stabilizes pressure at 7.4 bar. Ready for operator approval.'
            : 'Observing field node inputs. When high-impact instructions are proposed, Sentinel-K simulates hydraulic and physical consequences.'}
        </p>
      </div>

    </div>
  );
};
