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
      color: 'border-cyan-500/40 text-cyan-400',
    },
    {
      name: 'Evidence Forensic Agent',
      tier: 'EDGE / LOCAL',
      model: 'Forensic SLM + Heuristic Engine',
      role: 'Cross-checks caller ID certificate, urgency coercion patterns, and active personnel duty rosters.',
      tools: ['Telecom Meta Analyzer', 'Duty Roster Gateway', 'Acoustic Spoof Detector'],
      color: 'border-amber-500/40 text-amber-400',
    },
    {
      name: 'Protocol Compiler Agent',
      tier: 'DETERMINISTIC COMPILER',
      model: 'Grammar-Guided AST Generator',
      role: 'Translates high-level candidate intent into strict Modbus TCP / DNP3 / OPC-UA function codes and register offsets.',
      tools: ['Modbus Protocol Linter', 'Register Range Verifier', 'CRC Checksum Builder'],
      color: 'border-blue-500/40 text-blue-400',
    },
    {
      name: 'Hydraulic Kinematics Agent',
      tier: 'WORKSTATION TWIN',
      model: 'EPANET / WNTR Physics Wrapper',
      role: 'Executes hydrodynamic transient forward simulation across pipe network graph under commanded parameters.',
      tools: ['WNTR Hydrodynamic Solver', 'Surge Wave Calculator', 'Manifold Sensor Interceptor'],
      color: 'border-purple-500/40 text-purple-400',
    },
    {
      name: 'Safety Critic Agent',
      tier: 'ORCHESTRATOR',
      model: 'Constraint-Satisfaction Planner',
      role: 'Activated when physical invariants fail. Synthesizes staged, non-destructive alternate actions to achieve operational objective.',
      tools: ['Pareto Frontier Optimizer', 'Staged Ramp Synthesizer', 'Relief Valve Governor'],
      color: 'border-emerald-500/40 text-emerald-400',
    },
  ];

  return (
    <section id="agents" className="scroll-mt-24 relative py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/[0.04] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">MULTI-AGENT COORDINATION</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">SPECIALIZED ROLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            AGENTS REASON. TOOLS MEASURE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              VALIDATORS DECIDE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            No single monolithic agent handles this workflow. Sentinel-K deploys five specialized agents with bounded responsibilities, deterministic tooling, and strict sandboxes.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agents.map((ag, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0B0F19]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                  <span className={`text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-white/[0.04] border ${ag.color}`}>
                    {ag.tier}
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-500">
                    AGENT 0{i + 1}
                  </span>
                </div>

                <h3 className="text-base font-sans font-black text-white group-hover:text-cyan-300 transition-colors">
                  {ag.name}
                </h3>

                <div className="text-xs font-mono-code text-[#F0B31C] mt-1">
                  Engine: {ag.model}
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                  {ag.role}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.05]">
                  <span className="text-[10px] font-mono-code text-slate-500 uppercase block mb-1.5 font-bold">
                    CONNECTED SENSING TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ag.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="text-[9px] font-mono-code px-2 py-0.5 rounded bg-[#121826] text-slate-300 border border-white/[0.05]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                <span>SANDBOX: ISOLATED</span>
                <span className="text-emerald-400 font-bold">BOUNDED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
