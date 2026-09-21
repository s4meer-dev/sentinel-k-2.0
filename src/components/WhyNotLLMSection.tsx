import React from 'react';
import { HelpCircle, Check, X, AlertTriangle } from 'lucide-react';

export const WhyNotLLMSection: React.FC = () => {
  const comparisons = [
    {
      dimension: 'Physics & Consequence Awareness',
      genericLLM: 'Probabilistic guess based on training text; cannot simulate differential pressure equations.',
      otFirewall: 'Zero physics awareness; only inspects packet headers and protocol syntax.',
      sentinelK: 'Forward hydrodynamic simulation using EPANET/WNTR; enforces hard pressure/flow invariants.',
    },
    {
      dimension: 'Hallucination & Drift Risk',
      genericLLM: 'High. Can fabricate imaginary register values or plausible-sounding invalid operations.',
      otFirewall: 'None, but blind to semantic intent or multi-variable cascading physical destruction.',
      sentinelK: 'Eliminated. All LLM proposals pass deterministic protocol compilers and physics simulators.',
    },
    {
      dimension: 'Human Evidence & Spoof Detection',
      genericLLM: 'Prone to prompt injection and conversational jailbreaks.',
      otFirewall: 'Zero awareness of human communication channels (phone calls, radio, SMS).',
      sentinelK: 'On-device NPU extracts caller telemetry, urgency coercion, and roster cross-checks.',
    },
    {
      dimension: 'Automated Safe Replanning',
      genericLLM: 'Generates unverified alternative suggestions without mathematical proof.',
      otFirewall: 'Simple drop / reset; leaves operator with zero safe path forward.',
      sentinelK: 'Constraint-satisfaction Critic generates provably safe staged parameters (e.g., 7.4 bar).',
    },
    {
      dimension: 'Execution Sovereignty',
      genericLLM: 'Autonomous tool-calling can trigger disastrous commands unobserved.',
      otFirewall: 'Passive network rule enforcement.',
      sentinelK: 'Certified human operator on iQOO terminal holds final biometric confirmation authority.',
    },
  ];

  return (
    <section id="why-not-llm" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">WHY NOT JUST AN LLM?</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">NO PROBABILISTIC GAMBLING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            AN LLM CAN PROPOSE THE ACTION. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-cyan-400">
              IT CANNOT PROVE THE CONSEQUENCE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Critical infrastructure cannot run on &ldquo;92% confidence&rdquo;. Here is why replacing engineering models with language models is dangerous — and how Sentinel-K bridges the gap.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[760px] rounded-2xl bg-[#07090E] border border-white/[0.08] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-[#121826] p-4 text-xs font-mono-code font-bold uppercase tracking-wider border-b border-white/[0.08]">
              <div className="col-span-3 text-slate-400">CAPABILITY DIMENSION</div>
              <div className="col-span-3 text-red-400">GENERIC LLM / AGENT</div>
              <div className="col-span-3 text-amber-400">OT FIREWALL / SIEM</div>
              <div className="col-span-3 text-cyan-400">SENTINEL-K SYSTEM</div>
            </div>

            <div className="divide-y divide-white/[0.06] text-xs">
              {comparisons.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-4 items-center hover:bg-white/[0.02] transition-colors">
                  <div className="col-span-3 font-sans font-bold text-white pr-4">
                    {row.dimension}
                  </div>
                  <div className="col-span-3 text-slate-400 font-normal pr-4 flex items-start gap-1.5">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.genericLLM}</span>
                  </div>
                  <div className="col-span-3 text-slate-400 font-normal pr-4 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{row.otFirewall}</span>
                  </div>
                  <div className="col-span-3 text-cyan-300 font-medium flex items-start gap-1.5 bg-cyan-950/20 p-2.5 rounded-xl border border-cyan-500/20">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.sentinelK}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
