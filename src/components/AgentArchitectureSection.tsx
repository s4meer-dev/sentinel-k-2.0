import React from 'react';
import { Cpu } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const AgentArchitectureSection: React.FC = () => {
  const agents = [
    {
      name: 'Dispatch Ingestion Agent',
      tier: 'ON-DEVICE NPU',
      model: 'Quantized SLM (3B)',
      role: 'Parses incoming audio dispatch / text radio stream into structured operational intent frames.',
      tools: ['Acoustic Spectrogram', 'Audio Buffer Hook', 'Semantic Slot Extractor'],
      badgeColor: 'border-blue-200 text-blue-800 bg-blue-50',
    },
    {
      name: 'Evidence Forensic Agent',
      tier: 'EDGE / LOCAL',
      model: 'Forensic SLM + Heuristic Engine',
      role: 'Cross-checks caller ID certificate, urgency coercion patterns, and active personnel duty rosters.',
      tools: ['Telecom Meta Analyzer', 'Duty Roster Gateway', 'Acoustic Spoof Detector'],
      badgeColor: 'border-amber-200 text-amber-800 bg-amber-50',
    },
    {
      name: 'Protocol Compiler Agent',
      tier: 'DETERMINISTIC COMPILER',
      model: 'Grammar-Guided AST Generator',
      role: 'Translates high-level candidate intent into strict Modbus TCP / DNP3 / OPC-UA function codes and register offsets.',
      tools: ['Modbus Protocol Linter', 'Register Range Verifier', 'CRC Checksum Builder'],
      badgeColor: 'border-purple-200 text-purple-800 bg-purple-50',
    },
    {
      name: 'Hydraulic Kinematics Agent',
      tier: 'WORKSTATION TWIN',
      model: 'EPANET / WNTR Physics Wrapper',
      role: 'Executes hydrodynamic transient forward simulation across pipe network graph under commanded parameters.',
      tools: ['WNTR Hydrodynamic Solver', 'Surge Wave Calculator', 'Manifold Sensor Interceptor'],
      badgeColor: 'border-indigo-200 text-indigo-800 bg-indigo-50',
    },
    {
      name: 'Safety Critic Agent',
      tier: 'ORCHESTRATOR',
      model: 'Constraint-Satisfaction Planner',
      role: 'Activated when physical invariants fail. Synthesizes staged, non-destructive alternate actions to achieve operational objective.',
      tools: ['Pareto Frontier Optimizer', 'Staged Ramp Synthesizer', 'Relief Valve Governor'],
      badgeColor: 'border-emerald-200 text-emerald-800 bg-emerald-50',
    },
  ];

  return (
    <section id="agents" className="scroll-mt-36 relative pt-36 md:pt-44 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="absolute inset-0 network-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono-code text-[#1A1712] mb-5 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">MULTI-AGENT COORDINATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#7C766C]">SPECIALIZED ROLES</span>
          </div>

          <TextReveal
            text="AGENTS REASON. TOOLS MEASURE."
            italicSubtitle="Validators decide."
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1A1712] uppercase leading-[1.05]"
            subtitleClassName="font-serif italic font-normal normal-case text-slate-800"
          />

          <p className="mt-5 text-base sm:text-lg text-[#7C766C] max-w-2xl mx-auto font-normal leading-relaxed">
            No single monolithic agent handles this workflow. Sentinel-K deploys five specialized agents with bounded responsibilities, deterministic tooling, and strict sandboxes.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {agents.map((ag, i) => (
            <div
              key={i}
              className="p-7 rounded-[28px] glass-card glass-sheen hover:border-[#1A1712]/[0.18] shadow-[0_12px_32px_-12px_rgba(38,34,28,0.08)] hover:shadow-[0_20px_50px_-20px_rgba(38,34,28,0.14)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#1A1712]/[0.06]">
                  <span className={`text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded-full border ${ag.badgeColor}`}>
                    {ag.tier}
                  </span>
                  <span className="text-[10px] font-mono-code text-[#7C766C]">
                    AGENT 0{i + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-sans font-black text-[#1A1712]">
                  {ag.name}
                </h3>

                <div className="text-xs font-mono-code text-amber-900 font-bold mt-1">
                  Engine: {ag.model}
                </div>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {ag.role}
                </p>

                <div className="mt-4 pt-3 border-t border-[#1A1712]/[0.06]">
                  <span className="text-[10px] font-mono-code text-[#7C766C] uppercase block mb-1.5 font-bold">
                    CONNECTED SENSING TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ag.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="text-[9px] font-mono-code px-2 py-0.5 rounded-md bg-[#ECE8DE]/60 text-[#1A1712] border border-[#1A1712]/[0.06]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] flex items-center justify-between text-[10px] font-mono-code text-[#7C766C]">
                <span>SANDBOX: ISOLATED</span>
                <span className="text-emerald-800 font-bold">BOUNDED</span>
              </div>
            </div>
          ))}

          {/* 6th Cell: Air-Gapped IPC Message Bus & Latency Telemetry (Subscrr Obsidian Card) */}
          <div className="p-7 rounded-[28px] bg-[#1A1712] text-white border border-white/15 glass-sheen shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0B31C]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded-full border border-emerald-500/40 text-emerald-300 bg-emerald-500/10">
                  ORCHESTRATION BUS
                </span>
                <span className="text-[10px] font-mono-code text-stone-400">
                  SOVEREIGN IPC
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-sans font-black text-white uppercase tracking-tight">
                Air-Gapped IPC Pipeline
              </h3>

              <div className="text-xs font-mono-code text-[#F0B31C] font-bold mt-1">
                Zero Cloud Egress · Total Latency: 125ms
              </div>

              <p className="mt-2.5 text-xs text-stone-300 leading-relaxed font-normal">
                Agents communicate via memory-mapped circular ring buffers without network sockets. Zero telemetry leaks beyond the physical device.
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 font-mono-code text-[10px]">
                <div className="flex justify-between text-stone-300">
                  <span>NPU Ingestion:</span>
                  <span className="text-emerald-400 font-bold">18ms</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Forensics + Duty Roster:</span>
                  <span className="text-emerald-400 font-bold">24ms</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Modbus AST Compilation:</span>
                  <span className="text-emerald-400 font-bold">3ms</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>EPANET 2.2 Hydrodynamics:</span>
                  <span className="text-emerald-400 font-bold">42ms</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Critic Replan Optimization:</span>
                  <span className="text-emerald-400 font-bold">38ms</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-stone-400">
              <span>SECURITY: AIR-GAPPED</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE ENCLAVE</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
