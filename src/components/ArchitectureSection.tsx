import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radio, 
  Cpu,
  ShieldCheck,
} from 'lucide-react';

interface ArchNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  androidApi: string;
  honestyNote: string;
}

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('04');

  const layers: ArchNode[] = [
    {
      id: '01',
      step: 'LAYER 01',
      title: 'PHONE PLATFORM',
      subtitle: 'Hardware Transceiver Matrix',
      description: 'Physical RF front-end, modem hardware transceivers, and multi-antenna array located across device frame.',
      androidApi: 'Hardware Baseband Modem / Qualcomm Snapdragon Modem-RF',
      honestyNote: 'Hardware executes baseband communications natively; our system observes and guides higher-layer policy.',
    },
    {
      id: '02',
      step: 'LAYER 02',
      title: 'CELLULAR SIGNALS',
      subtitle: 'Link-Layer Radio Metrics',
      description: 'Ingests real-time cellular signal strength metrics including RSRP, RSRQ, RSSNR, and active carrier bands.',
      androidApi: 'TelephonyManager.getSignalStrength(), CellSignalStrengthNr',
      honestyNote: 'Standard non-root Android APIs provide reliable signal metrics with minimal power drain.',
    },
    {
      id: '03',
      step: 'LAYER 03',
      title: 'NETWORK EVENTS',
      subtitle: 'State Transition Stream',
      description: 'Captures and timestamps carrier handovers, cell re-selections, 5G SA to NSA transitions, and 4G fallbacks.',
      androidApi: 'TelephonyCallback.CellInfoListener, TelephonyDisplayInfo',
      honestyNote: 'Listens for OS-emitted callbacks without aggressive polling to preserve battery life.',
    },
    {
      id: '04',
      step: 'LAYER 04',
      title: 'OBSERVATION ENGINE',
      subtitle: 'Phone-Native Telemetry Loop',
      description: 'Maintains rolling 30-second moving window of network latency, jitter spikes, and packet loss events.',
      androidApi: 'ConnectivityManager.NetworkCallback, NetworkCapabilities',
      honestyNote: 'Calculates latency passively by observing active sockets rather than constant synthetic pings.',
    },
    {
      id: '05',
      step: 'LAYER 05',
      title: 'INSTABILITY DETECTION',
      subtitle: 'Deterministic Evaluation Engine',
      description: 'Evaluates empirical thresholds: rapid ping-ponging, sudden packet drop bursts, or cell-edge boundary fading.',
      androidApi: 'Deterministic rule engine (moving statistical variance)',
      honestyNote: 'We use deterministic math where appropriate. No black-box AI guessing where simple stats succeed.',
    },
    {
      id: '06',
      step: 'LAYER 06',
      title: 'RECOVERY / ACTIONS',
      subtitle: 'Platform-Supported Optimization',
      description: 'Triggers supported recovery: carrier re-attach, socket cycle, cellular data profile refresh, or user prompt.',
      androidApi: 'SubscriptionManager, ConnectivityManager, Intent actions',
      honestyNote: 'Explicitly adheres to Android permissions: cannot bypass OS security or reboot modem silently without permission.',
    },
    {
      id: '07',
      step: 'LAYER 07',
      title: 'VERIFICATION LOOP',
      subtitle: 'Post-Action Outcome Measure',
      description: 'Monitors the subsequent 15 seconds to determine if stability score recovered, preventing continuous churn.',
      androidApi: 'Post-action delta comparator (RTT & UDP validation)',
      honestyNote: 'Ensures recovery actions are only deemed successful when telemetry quantitatively verifies improvement.',
    },
    {
      id: '08',
      step: 'LAYER 08',
      title: 'CONNECTIVITY MEMORY',
      subtitle: 'On-Device Spatial Intelligence',
      description: 'Persists localized reliability patterns mapped to cell clusters, enabling predictive anticipation over time.',
      androidApi: 'Encrypted Room SQLite DB on-device, local inference model',
      honestyNote: '100% private. Stored in encrypted app sandbox; zero network telemetry or location history leaves the device.',
    },
  ];

  const current = layers.find(l => l.id === activeLayer) || layers[3];

  return (
    <section id="how-it-works" className="scroll-mt-24 relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Cpu className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">SYSTEM ARCHITECTURE</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">TECHNICAL INTEGRITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            HOW IT WORKS: <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              END-TO-END PIPELINE
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            "We work with the network information available to the device and turn changes over time into useful decisions."
          </p>
        </div>

        {/* 8-Layer Pipeline Grid & Detail View */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Stackable Layers */}
          <div className="lg:col-span-5 space-y-2.5">
            {layers.map((l) => {
              const isSelected = activeLayer === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveLayer(l.id)}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FAF9F5] border-2 border-[#F0B31C] shadow-sm font-bold'
                      : 'bg-white border border-black/[0.07] hover:bg-[#FAF9F5] text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono-code font-extrabold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#F0B31C] text-[#07090E]' : 'bg-black/[0.04] text-slate-500'
                    }`}>
                      {l.id}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-display font-black text-slate-900">
                        {l.title}
                      </div>
                      <div className="text-[10px] font-mono-code text-slate-500">
                        {l.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-[#F0B31C]' : 'bg-black/[0.1]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Technical Inspector */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] text-xs font-mono-code">
                  <span className="text-[#B45309] font-extrabold uppercase tracking-wider">
                    {current.step} // INSPECTION
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-bold">
                    <Radio className="w-3.5 h-3.5 text-[#F0B31C]" />
                    ANDROID SUBSYSTEM
                  </span>
                </div>

                <div className="my-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                    {current.title}
                  </h3>
                  <div className="text-sm font-display font-bold text-blue-700 mt-1">
                    {current.subtitle}
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                {/* Android APIs Box */}
                <div className="space-y-3 font-mono-code text-xs pt-4 border-t border-black/[0.06]">
                  <div className="p-3 rounded-xl bg-white border border-black/[0.06] shadow-xs">
                    <span className="text-slate-500 text-[10px] block uppercase font-bold">ANDROID TELEPHONY API INTERFACE</span>
                    <span className="text-slate-900 font-bold text-xs mt-0.5 block break-all">
                      {current.androidApi}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-amber-800 text-[10px] block uppercase font-bold">TECHNICAL HONESTY & CONSTRAINT</span>
                    <span className="text-amber-900 text-xs mt-0.5 block leading-relaxed">
                      {current.honestyNote}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Engineering Integrity Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs flex items-center gap-4 text-xs font-mono-code text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <strong className="text-slate-900">Engineering Credibility:</strong> We design within standard Android platform boundaries. We do not claim fake modem microcode control or unrealizable battery-free continuous pings.
          </div>
        </div>

      </div>
    </section>
  );
};
