import React from 'react';
import { Cpu } from 'lucide-react';

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
    <section id="agents" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">MULTI-AGENT COORDINATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">SPECIALIZED ROLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            AGENTS REASON. TOOLS MEASURE. <br />
            <span className="text-slate-900">VALIDATORS DECIDE.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            No single monolithic agent handles this workflow. Sentinel-K deploys five specialized agents with bounded responsibilities, deterministic tooling, and strict sandboxes.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {agents.map((ag, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-black/[0.05]">
                  <span className={`text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded border ${ag.badgeColor}`}>
                    {ag.tier}
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-400">
                    AGENT 0{i + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-sans font-black text-[#090D15]">
                  {ag.name}
                </h3>

                <div className="text-xs font-mono-code text-amber-800 font-bold mt-1">
                  Engine: {ag.model}
                </div>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {ag.role}
                </p>

                <div className="mt-4 pt-3 border-t border-black/[0.04]">
                  <span className="text-[10px] font-mono-code text-slate-500 uppercase block mb-1.5 font-bold">
                    CONNECTED SENSING TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ag.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="text-[9px] font-mono-code px-2 py-0.5 rounded bg-[#FAFAF8] text-slate-700 border border-black/[0.05]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                <span>SANDBOX: ISOLATED</span>
                <span className="text-emerald-700 font-bold">BOUNDED</span>
              </div>
            </div>
          ))}

          {/* 6th Cell: Air-Gapped IPC Message Bus & Latency Telemetry */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#090D15] to-[#1E293B] text-white border border-black/20 shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded border border-emerald-500/40 text-emerald-300 bg-emerald-500/10">
                  ORCHESTRATION BUS
                </span>
                <span className="text-[10px] font-mono-code text-slate-400">
                  SOVEREIGN IPC
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-sans font-black text-white uppercase tracking-tight">
                Air-Gapped IPC Pipeline
              </h3>

              <div className="text-xs font-mono-code text-[#F0B31C] font-bold mt-1">
                Zero Cloud Egress · Total Latency: 125ms
              </div>

              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                Agents communicate via memory-mapped circular ring buffers without network sockets. Zero telemetry leaks beyond the physical device.
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 font-mono-code text-[10px]">
                <div className="flex justify-between text-slate-300">
                  <span>NPU Ingestion:</span>
                  <span className="text-emerald-400 font-bold">18ms</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Forensics + Duty Roster:</span>
                  <span className="text-emerald-400 font-bold">24ms</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Modbus AST Compilation:</span>
                  <span className="text-emerald-400 font-bold">3ms</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>EPANET 2.2 Hydrodynamics:</span>
                  <span className="text-emerald-400 font-bold">42ms</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Critic Replan Optimization:</span>
                  <span className="text-emerald-400 font-bold">38ms</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
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
