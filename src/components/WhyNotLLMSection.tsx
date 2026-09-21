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
    <section id="why-not-llm" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">WHY NOT JUST AN LLM?</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">NO PROBABILISTIC GAMBLING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            AN LLM CAN PROPOSE THE ACTION. <br />
            <span className="text-slate-900">IT CANNOT PROVE THE CONSEQUENCE.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Critical infrastructure cannot run on &ldquo;92% confidence&rdquo;. Here is why replacing engineering models with language models is dangerous — and how Sentinel-K bridges the gap.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="min-w-[720px] rounded-2xl bg-white border border-black/[0.06] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-12 bg-[#FAFAF8] p-3.5 text-xs font-mono-code font-bold uppercase tracking-wider border-b border-black/[0.06]">
              <div className="col-span-3 text-slate-500">CAPABILITY DIMENSION</div>
              <div className="col-span-3 text-red-800">GENERIC LLM / AGENT</div>
              <div className="col-span-3 text-amber-800">OT FIREWALL / SIEM</div>
              <div className="col-span-3 text-[#090D15]">SENTINEL-K SYSTEM</div>
            </div>

            <div className="divide-y divide-black/[0.04] text-xs">
              {comparisons.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-3.5 items-center hover:bg-[#FAFAF8]/60 transition-colors">
                  <div className="col-span-3 font-sans font-bold text-[#090D15] pr-4">
                    {row.dimension}
                  </div>
                  <div className="col-span-3 text-slate-600 font-normal pr-4 flex items-start gap-1.5">
                    <X className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{row.genericLLM}</span>
                  </div>
                  <div className="col-span-3 text-slate-600 font-normal pr-4 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{row.otFirewall}</span>
                  </div>
                  <div className="col-span-3 text-[#090D15] font-medium flex items-start gap-1.5 bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
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
