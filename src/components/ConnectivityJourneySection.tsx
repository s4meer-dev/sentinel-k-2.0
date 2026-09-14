import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass
} from 'lucide-react';

interface Waypoint {
  id: number;
  step: string;
  name: string;
  network: '5G' | '4G';
  latency: string;
  rsrp: string;
  handoverEvent: string;
  contextNote: string;
  status: 'OPTIMAL' | 'DEGRADED' | 'FLUX';
}

export const ConnectivityJourneySection: React.FC = () => {
  const [activeWaypoint, setActiveWaypoint] = useState<number>(0);

  const waypoints: Waypoint[] = [
    {
      id: 0,
      step: 'POINT 01 // START',
      name: 'RESIDENTIAL DORM',
      network: '5G',
      latency: '19 ms',
      rsrp: '-88 dBm',
      handoverEvent: 'Anchor Carrier n78 Active',
      contextNote: 'Clear window orientation facing campus microcell. Stable throughput above 200 Mbps.',
      status: 'OPTIMAL',
    },
    {
      id: 1,
      step: 'POINT 02',
      name: 'BLOCK A CORRIDOR',
      network: '4G',
      latency: '148 ms',
      rsrp: '-116 dBm',
      handoverEvent: '5G ? LTE Handover Triggered',
      contextNote: 'Thick reinforced concrete corridor attenuates Sub-6GHz carrier. Modem falls back to 4G LTE.',
      status: 'DEGRADED',
    },
    {
      id: 2,
      step: 'POINT 03',
      name: 'CANTEEN PLAZA',
      network: '4G',
      latency: '182 ms',
      rsrp: '-112 dBm',
      handoverEvent: 'Cell Interference & Peak Density',
      contextNote: 'Hundreds of active devices during lunch rush create resource block contention on primary tower.',
      status: 'FLUX',
    },
    {
      id: 3,
      step: 'POINT 04',
      name: 'ATHLETIC GROUND',
      network: '5G',
      latency: '22 ms',
      rsrp: '-82 dBm',
      handoverEvent: 'LTE ? 5G Re-attachment Verified',
      contextNote: 'Direct line-of-sight to municipal macro tower restores high-band NR carrier aggregation.',
      status: 'OPTIMAL',
    },
    {
      id: 4,
      step: 'POINT 05 // END',
      name: 'CAMPUS LIBRARY',
      network: '5G',
      latency: '18 ms',
      rsrp: '-84 dBm',
      handoverEvent: 'Indoor Small-Cell Locked',
      contextNote: 'Indoor distributed antenna system (DAS) provides dedicated sub-6GHz coverage on 3rd floor.',
      status: 'OPTIMAL',
    },
  ];

  const current = waypoints[activeWaypoint];

  return (
    <section className="relative py-28 md:py-36 bg-[#080B12] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-950/20 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Compass className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">THE CONNECTIVITY JOURNEY</span>
            <span className="text-slate-600">/</span>
            <span>CONTEXTUAL MOBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            CONNECTIVITY CHANGES <br />
            <span className="text-[#F0B31C]">AS YOU MOVE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
            Your connection isn’t static. As you walk across buildings and open courtyards, radio physics and obstacles constantly alter your link.
          </p>
        </div>

        {/* The Horizontal Waypoints Bar */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="p-2 rounded-2xl bg-[#0D121F] border border-white/10 backdrop-blur-xl">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {waypoints.map((wp, idx) => (
                <button
                  key={wp.id}
                  onClick={() => setActiveWaypoint(idx)}
                  className={`p-3 rounded-xl transition-all cursor-pointer text-left ${
                    activeWaypoint === idx
                      ? 'bg-[#151D2F] border border-white/20 shadow-lg scale-102'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                    <span className="text-slate-500">0{idx + 1}</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      wp.network === '5G' ? 'bg-blue-500/20 text-blue-300' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {wp.network}
                    </span>
                  </div>
                  <div className="text-xs font-display font-black text-white truncate">
                    {wp.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Waypoint Cinematic Interactive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Waypoint Location Narrative */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-white/[0.06] border border-white/10 text-[#F0B31C]">
                    {current.step}
                  </span>
                  <span className={`text-xs font-mono-code font-bold ${
                    current.status === 'OPTIMAL' ? 'text-emerald-400' : current.status === 'DEGRADED' ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {current.status === 'OPTIMAL' ? '? 5G STABLE' : current.status === 'DEGRADED' ? '? UNSTABLE HANDOVER' : '? FLUX ZONE'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
                  {current.name}
                </h3>

                <div className="mt-2 text-sm sm:text-base font-heading font-extrabold text-[#F0B31C]">
                  {current.handoverEvent}
                </div>

                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.contextNote}
                </p>

                {/* Progress Waypoint Stepper Buttons */}
                <div className="mt-8 flex items-center gap-3">
                  <button
                    disabled={activeWaypoint === 0}
                    onClick={() => setActiveWaypoint(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-xs font-mono-code text-white transition-colors cursor-pointer"
                  >
                    ? Previous Point
                  </button>
                  <button
                    disabled={activeWaypoint === waypoints.length - 1}
                    onClick={() => setActiveWaypoint(prev => Math.min(waypoints.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono-code text-[#07090E] font-extrabold transition-colors cursor-pointer"
                  >
                    Next Point ?
                  </button>
                </div>
              </div>

              {/* Right: Anchored Miniature Device Telemetry Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B0F19] border border-white/10 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono-code">
                  <span className="text-slate-400">PHONE RECEIVER STATE</span>
                  <span className={`font-bold ${current.network === '5G' ? 'text-blue-400' : 'text-amber-400'}`}>
                    {current.network} ACTIVE
                  </span>
                </div>

                {/* Mini screen readout */}
                <div className="my-6 text-center">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white block">
                    {current.network}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400 mt-1 block">
                    Observed Signal: {current.rsrp}
                  </span>
                </div>

                {/* Telemetry chips */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.08] text-xs font-mono-code">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
                    <span className="text-[9px] text-slate-500 uppercase block">LATENCY</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{current.latency}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
                    <span className="text-[9px] text-slate-500 uppercase block">STATUS</span>
                    <span className={`text-sm font-bold mt-0.5 block ${
                      current.network === '5G' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {current.network === '5G' ? 'Optimal' : 'Fallback'}
                    </span>
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
