import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

interface Waypoint {
  id: number;
  step: string;
  name: string;
  network: '5G' | '4G';
  latency: string;
  rsrp: string;
  handoverEvent: string;
  contextNote: string;
}

export const ConnectivityJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const waypoints: Waypoint[] = [
    {
      id: 1,
      step: '08:45 AM',
      name: 'Hostel Room D-204',
      network: '4G',
      latency: '58 ms',
      rsrp: '-108 dBm',
      handoverEvent: 'Deep Indoor Attenuation (Concrete)',
      contextNote: 'Thick concrete walls shield outdoor mid-band 5G. CI maintains stable 4G carrier aggregation rather than letting the modem endlessly hunt for weak 5G.',
    },
    {
      id: 2,
      step: '09:05 AM',
      name: 'Campus Walkway (Open Courtyard)',
      network: '5G',
      latency: '18 ms',
      rsrp: '-84 dBm',
      handoverEvent: 'Instant Clean Lock to n78 (3.5 GHz)',
      contextNote: 'As user steps into open sky, system re-anchors to primary 3.5 GHz high-throughput 5G Standalone carrier with zero dropped packets.',
    },
    {
      id: 3,
      step: '10:15 AM',
      name: 'Central Library Basement',
      network: '4G',
      latency: '124 ms (Flutter)',
      rsrp: '-114 dBm',
      handoverEvent: 'Cell Edge Hysteresis Detected',
      contextNote: 'Subterranean study desks cause severe cell-edge flux. CI prevents rapid ping-pong battery drain by locking preferred indoor low-band.',
    },
    {
      id: 4,
      step: '01:30 PM',
      name: 'Student Canteen (Peak Lunch)',
      network: '5G',
      latency: '34 ms',
      rsrp: '-89 dBm',
      handoverEvent: 'Congestion-Aware Packet Priority',
      contextNote: 'Dense multi-user crowd. CI steers traffic through primary spatial receiver to maintain low jitter for payment QR codes and messaging.',
    },
    {
      id: 5,
      step: '05:00 PM',
      name: 'Main Gate Transit Stop',
      network: '5G',
      latency: '20 ms',
      rsrp: '-82 dBm',
      handoverEvent: 'Macro Cell Handover Complete',
      contextNote: 'Seamless transit onto urban macro cell network as user boards the transit shuttle.',
    },
  ];

  const currentWp = waypoints.find(w => w.id === activeStep) || waypoints[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#FAF9F5] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Compass className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">REAL-WORLD SIMULATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">CAMPUS HORIZONTAL JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            A DAY WITH <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              CONNECTIVITY INTELLIGENCE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Follow a student across campus from morning hostel to evening commute. See how CI observes handovers and stabilizes connections in real-time.
          </p>
        </div>

        {/* Interactive Waypoint Timeline Stepper */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {waypoints.map((wp) => (
              <button
                key={wp.id}
                onClick={() => setActiveStep(wp.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  activeStep === wp.id
                    ? 'bg-white border-2 border-[#F0B31C] shadow-[0_8px_25px_rgba(240,179,28,0.18)] ring-2 ring-[#F0B31C]/20'
                    : 'bg-white/70 border border-black/[0.08] hover:bg-white text-slate-700 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                  <span className={`font-bold ${activeStep === wp.id ? 'text-[#B45309]' : 'text-slate-500'}`}>
                    {wp.step}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    wp.network === '5G' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {wp.network}
                  </span>
                </div>

                <div className="text-sm font-display font-black text-slate-900 line-clamp-1">
                  {wp.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Waypoint Detailed State Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Waypoint Context */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-xs font-mono-code text-slate-500 mb-2">
                  <span className="font-bold text-[#B45309]">{currentWp.step} // WAYPOINT 0{currentWp.id}</span>
                  <span>·</span>
                  <span>{currentWp.network === '5G' ? 'High Speed NR' : 'LTE Carrier Fallback'}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-slate-950">
                  {currentWp.name}
                </h3>

                <div className="mt-4 p-4 rounded-2xl bg-[#FAF9F5] border border-black/[0.06] text-xs font-mono-code text-slate-700">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">OBSERVED EVENT:</div>
                  <div className="text-slate-900 font-bold text-sm">{currentWp.handoverEvent}</div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {currentWp.contextNote}
                </p>
              </div>

              {/* Right: Telemetry Readout */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-black/[0.08] space-y-3 font-mono-code text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                    <span className="text-slate-500">CARRIER STATE</span>
                    <span className={`font-bold ${currentWp.network === '5G' ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {currentWp.network} ATTACHED
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                    <span className="text-slate-500">ROUND TRIP LATENCY</span>
                    <span className="text-slate-900 font-bold">{currentWp.latency}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                    <span className="text-slate-500">MEASURED RSRP</span>
                    <span className="text-slate-900 font-bold">{currentWp.rsrp}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">HANDOVER ENGINE:</span>
                    <span className="text-blue-700 font-bold">STABLE PROFILE</span>
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
