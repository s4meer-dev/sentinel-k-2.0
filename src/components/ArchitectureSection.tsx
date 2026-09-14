import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radio, 
  Cpu,
  CheckCircle2, 
  ShieldCheck,
} from 'lucide-react';

interface ArchNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  technicalSpecs: string[];
}

export const ArchitectureSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('OBSERVATION');

  const nodes: ArchNode[] = [
    {
      id: 'PHONE',
      step: '01',
      title: 'PHONE PLATFORM',
      subtitle: 'Hardware Transceiver Matrix',
      description: 'The physical device environment, including Snapdragon Modem-RF and iQOO 360° surround antenna array.',
      technicalSpecs: ['Sub-6GHz NR & LTE Transceivers', 'Android TelephonyManager APIs', 'Passive Sensor Access'],
    },
    {
      id: 'SIGNALS',
      step: '02',
      title: 'CELLULAR SIGNALS',
      subtitle: 'Link-Layer Radio Metrics',
      description: 'Standard link metrics exposed to Android applications, such as RSRP, RSRQ, carrier frequencies, and cell IDs.',
      technicalSpecs: ['RSRP (Reference Signal Received Power)', 'Carrier Frequency (n78, n28, B3)', 'Link-layer Frame Jitter'],
    },
    {
      id: 'EVENTS',
      step: '03',
      title: 'NETWORK EVENTS',
      subtitle: 'State Transition Stream',
      description: 'Discrete occurrences over time, such as 5G to 4G fallbacks, carrier re-attachments, and connection timeouts.',
      technicalSpecs: ['Handover Time-stamping', 'Ping-Pong Detection Logic', 'Jitter Threshold Alerts'],
    },
    {
      id: 'OBSERVATION',
      step: '04',
      title: 'OBSERVATION ENGINE',
      subtitle: 'Phone-Native Telemetry Loop',
      description: 'Correlates network transitions with active application requirements to determine if instability is impacting user experience.',
      technicalSpecs: ['Rolling 30-Second Window', 'Application Foreground State Check', 'Low-Overhead Background Service'],
    },
    {
      id: 'DECISION',
      step: '05',
      title: 'DECISION LAYER',
      subtitle: 'Deterministic Context Evaluation',
      description: 'Evaluates the observed event sequence against rule-based models to select the most appropriate response.',
      technicalSpecs: ['Severity Level Classification', 'Rule-Based Deterministic Filtering', 'Context-Aware Priority Matching'],
    },
    {
      id: 'ACTIONS',
      step: '06',
      title: 'AVAILABLE ACTIONS',
      subtitle: 'Supported Interventions',
      description: 'Coordinates recovery through supported Android APIs, antenna switching, or clear guided user steps.',
      technicalSpecs: ['Radio Band Re-negotiation', 'Antenna Priority Adjustment', 'Guided Action Prompts'],
    },
    {
      id: 'VERIFY',
      step: '07',
      title: 'VERIFICATION',
      subtitle: 'Post-Action Confirmation',
      description: 'Measures link metrics for 15 seconds after intervention to verify whether stability was genuinely restored.',
      technicalSpecs: ['Delta Latency Comparison', 'Packet Loss Re-measurement', 'Stability Improvement Index'],
    },
    {
      id: 'MEMORY',
      step: '08',
      title: 'CONNECTIVITY MEMORY',
      subtitle: 'On-Device Spatial Experience',
      description: 'Stores historical outcomes locally to build a contextual profile of where 5G performs reliably over time.',
      technicalSpecs: ['Private On-Device Datastore', 'Zero Cloud Transmission', 'Predictive Pre-Caching Assist'],
    },
  ];

  const current = nodes.find(n => n.id === selectedNode) || nodes[3];

  return (
    <section id="how-it-works" className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-950/15 blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <Cpu className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">SYSTEM ARCHITECTURE</span>
            <span className="text-slate-600">/</span>
            <span>TECHNICAL INTEGRITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            HOW IT WORKS: <br />
            <span className="text-[#F0B31C]">END-TO-END PIPELINE</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            "We work with the network information available to the device and turn changes over time into useful decisions."
          </p>
        </div>

        {/* The 8 Pipeline Nodes Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left: Interactive 8-Stage Architecture Flow */}
          <div className="lg:col-span-7 space-y-2.5">
            {nodes.map((node) => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`w-full p-3.5 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer text-left flex items-center justify-between border ${
                  selectedNode === node.id
                    ? 'bg-[#12192A] border-[#F0B31C]/60 shadow-[0_0_20px_rgba(240,179,28,0.15)] scale-101'
                    : 'bg-[#0A0E17]/80 border-white/[0.08] hover:border-white/20 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono-code text-xs font-bold text-slate-500 w-6">
                    {node.step}
                  </span>
                  <div>
                    <span className={`text-sm font-display font-black tracking-wide block ${
                      selectedNode === node.id ? 'text-white' : 'text-slate-300'
                    }`}>
                      {node.title}
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400 block">
                      {node.subtitle}
                    </span>
                  </div>
                </div>

                <div className={`w-2 h-2 rounded-full ${
                  selectedNode === node.id ? 'bg-[#F0B31C] shadow-[0_0_8px_rgba(240,179,28,0.8)]' : 'bg-white/10'
                }`} />
              </button>
            ))}
          </div>

          {/* Right: Technical Inspector Deep Dive Card */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono-code text-[#F0B31C] font-bold uppercase tracking-wider">
                    LAYER {current.step} // INSPECTION
                  </span>
                  <Radio className="w-4 h-4 text-[#F0B31C]" />
                </div>

                <h3 className="text-xl font-display font-black text-white mt-4">
                  {current.title}
                </h3>
                <div className="text-xs font-mono-code text-blue-400 mt-0.5">
                  {current.subtitle}
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {current.description}
                </p>

                {/* Technical Specifications */}
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                    LAYER CAPABILITIES
                  </span>
                  <div className="space-y-2">
                    {current.technicalSpecs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono-code text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-[10px] font-mono-code text-slate-400">
                  Operates passively within standard Android platform boundaries without requiring root or custom ROMs.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Technical Credibility Note */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono-code text-slate-300 leading-relaxed flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-[#F0B31C] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">TECHNICAL INTEGRITY NOTE:</strong> Where Android or the carrier restricts direct intervention, 
            the system can guide the user through the supported action instead of pretending it has control it doesn't. We do not claim 
            arbitrary modem override or hidden baseband modifications.
          </div>
        </div>

      </div>
    </section>
  );
};
