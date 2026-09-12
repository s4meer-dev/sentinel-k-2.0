import React, { useState } from 'react';
import { 
  Smartphone, 
  Cpu, 
  Layers, 
  GitCommit, 
  Sparkles, 
  CheckCircle, 
  ShieldAlert, 
  Database
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(2);

  const nodes = [
    {
      id: 0,
      title: 'iQOO HARDWARE TELEMETRY',
      subtitle: 'Snapdragon 8 Gen + Q2 Sensor Plane',
      icon: Smartphone,
      description: 'Physical thermistors across the iQOO 6K Ice-Loop VC, dual-cell battery, and chassis skin emitting continuous status updates at hardware interrupts.',
      signals: ['THERMAL_ZONE_0', '6K_VC_GRADIENT', 'BATTERY_THERMAL'],
      badge: 'SILICON LAYER',
    },
    {
      id: 1,
      title: 'Monster Engine & PowerManager',
      subtitle: 'OS Telemetry Interfaces',
      icon: Layers,
      description: 'Android PowerManager thermal callbacks combined with iQOO Monster Engine scheduler and BatteryHistorian wake-lock signals.',
      signals: ['OnThermalStatusChanged()', 'ActiveWakeLocks', 'Fg/Bg State'],
      badge: 'FRAMEWORK API',
    },
    {
      id: 2,
      title: 'ThermAlyze Detection Engine',
      subtitle: 'Multivariate Signal Ingest',
      icon: Cpu,
      description: 'High-speed circular buffer ingesting frame pacing, CPU cluster frequency governors, and thermal gradients at 100Hz.',
      signals: ['100Hz Sliding Window', 'Thermal Slope ΔT/Δt', 'Choreographer FPS'],
      badge: 'CORE ENGINE',
    },
    {
      id: 3,
      title: 'Event Correlation Matrix',
      subtitle: 'Temporal Alignment',
      icon: GitCommit,
      description: 'Correlates the exact sub-second timestamp of thermal state escalation with concurrent background process workloads.',
      signals: ['Temporal Overlap Index', 'Cluster Core Affinity', 'Process Jitter'],
      badge: 'STATISTICAL MATH',
    },
    {
      id: 4,
      title: 'On-Device AI Model',
      subtitle: 'Local Neural Classifier',
      icon: Sparkles,
      description: 'Quantized on-device model matches sensor trace against thousands of known hardware throttling signatures.',
      signals: ['Zero Cloud Latency', 'Privacy Safe', '87%+ Confidence'],
      badge: 'QUANTIZED NPU',
    },
    {
      id: 5,
      title: 'Human-Readable Diagnosis',
      subtitle: 'Actionable Executive Verdict',
      icon: CheckCircle,
      description: 'Synthesizes technical telemetry into clear, credible explanations explaining likely contributors and mitigation guidance.',
      signals: ['Plain English Summary', 'Probable Cause Isolated', 'Zero Jargon'],
      badge: 'USER VERDICT',
    },
  ];

  return (
    <section id="technology" className="relative py-28 bg-[#F8F7F2] border-t border-[#0A192F]/[0.08] overflow-hidden">
      {/* Background ambient acrylic washes */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#E2E8F0]/50 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F] mb-6 shadow-xs">
            <Database className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>SYSTEM TOPOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.08]">
            Technical Architecture.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#0A192F]/70">
            How ThermAlyze turns millions of raw sensor pulses into clear, human-intelligible insights — 
            entirely on-device with zero cloud dependency.
          </p>
        </div>

        {/* Vertical Flow Diagram */}
        <div className="max-w-4xl mx-auto space-y-3 relative">
          
          {/* Subtle connecting vertical line */}
          <div className="absolute left-[38px] sm:left-[46px] top-8 bottom-8 w-0.5 bg-[#0A192F]/15 -z-0" />

          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode === idx;

            return (
              <div
                key={node.title}
                onClick={() => setActiveNode(idx)}
                className={`relative z-10 rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#1D4ED8]/60 shadow-[0_15px_35px_-10px_rgba(29,78,216,0.15)] scale-[1.01]'
                    : 'bg-white/80 border-[#0A192F]/[0.08] hover:border-[#0A192F]/20 hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Step Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-[#0A192F] text-[#F0B31C] border-[#0A192F] shadow-md'
                        : 'bg-[#FAF9F5] text-[#0A192F] border-[#0A192F]/10'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Body Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono-code uppercase text-[#1D4ED8] tracking-widest block font-bold">
                          {node.subtitle}
                        </span>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-[#0A192F] mt-0.5">
                          {node.title}
                        </h3>
                      </div>

                      <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-[#FAF9F5] text-[#0A192F] border border-[#0A192F]/10 font-medium">
                        {node.badge}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-[#0A192F]/75 leading-relaxed font-normal">
                      {node.description}
                    </p>

                    {/* Sensor Tags */}
                    <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-[#0A192F]/[0.06]">
                      {node.signals.map((sig) => (
                        <span
                          key={sig}
                          className="text-[10px] font-mono-code px-2.5 py-0.5 rounded bg-[#FAF9F5] text-[#0A192F]/70 border border-[#0A192F]/[0.06]"
                        >
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Credibility Note */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-[#0A192F]/10 text-xs font-mono-code text-[#0A192F]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#1D4ED8] shrink-0" />
            <span>
              <strong>ENGINEERING NOTE:</strong> Android sandboxing prevents apps from killing background processes directly. 
              ThermAlyze operates strictly as an observational forensics engine.
            </span>
          </div>
          <span className="text-[#0A192F]/50 whitespace-nowrap">SELinux Enforcing Compliant</span>
        </div>

      </div>
    </section>
  );
};
