import React from 'react';
import { AlertTriangle, ShieldX, UserX, Cpu, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: UserX,
      title: 'AUTHORITY SPOOFING & SOCIAL VECTORS',
      lead: '“Emergency from Dispatch: Ramp Pump 4 immediately to relieve pipeline surge.”',
      detail:
        'Sophisticated adversaries bypass industrial firewalls by targeting the human operator via spoofed phone calls, forged WhatsApp/SMS dispatches, or cloned executive audio.',
      consequence: 'Operators lack instant forensic tools to authenticate incoming verbal and textual instructions.',
      badge: 'HUMAN TRUST FAILURE',
    },
    {
      icon: ShieldX,
      title: 'THE "VALID BUT DEADLY" COMMAND',
      lead: 'A secure patch or authorized command can cause catastrophic kinetic failure.',
      detail:
        'Traditional OT security checks packet signatures and syntax: "Is this valid Modbus/DNP3? Yes." But it cannot predict what happens when Valve 2 is closed while Pump 4 runs at 850 RPM.',
      consequence: 'Cyber-security guarantees valid syntax; it does not guarantee physical survivability.',
      badge: 'CYBER-PHYSICAL BLINDSPOT',
    },
    {
      icon: Cpu,
      title: 'THE UNARMED FIELD TERMINAL',
      lead: 'Field operators carry high-power mobile nodes, but zero predictive protection.',
      detail:
        'Modern iQOO smartphones contain multi-TOPS NPUs and desktop-class connectivity, yet field technicians are forced to make life-and-death infrastructure decisions with bare hands and gut feeling.',
      consequence: 'No automated physical twin simulation or proof-of-intent engine exists at the field edge.',
      badge: 'UNEXPLOITED EDGE HARDWARE',
    },
  ];

  return (
    <section id="problem" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-red-800 mb-5 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span className="font-bold tracking-wider">THE VULNERABILITY GAP</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">CRITICAL INFRASTRUCTURE DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            THE ATTACK DOESN&apos;T HAVE TO <br />
            <span className="text-red-700">COMPROMISE THE MACHINE.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            It compromises the human who operates it. Adversaries weaponize urgent operational dispatches to trigger physically catastrophic commands through authorized human hands.
          </p>
        </div>

        {/* 3 Core Problem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05]">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>
                    <span className="font-mono-code text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-black text-[#090D15] tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-mono-code font-semibold text-amber-900 italic bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/70">
                    {p.lead}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.05] font-mono-code text-[11px] text-slate-500">
                  <span className="text-red-700 font-bold block mb-0.5">Impact Consequence:</span>
                  {p.consequence}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Axiom Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#090D15] text-[#F0B31C] flex items-center justify-center shrink-0 font-black font-mono-code text-sm shadow-2xs">
              !
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-amber-800 font-bold uppercase tracking-wider">
                CORE AXIOM OF KINETIC VALIDATION
              </div>
              <div className="text-sm sm:text-base font-sans font-bold text-[#090D15] mt-0.5">
                &ldquo;A secure patch is not necessarily a safe patch.&rdquo;
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Syntax and firewalls cannot simulate fluid dynamics, pressure transients, or thermodynamic limits.
              </div>
            </div>
          </div>

          <a
            href="#pipeline"
            className="flex items-center gap-1.5 font-mono-code text-xs text-[#090D15] hover:text-slate-600 font-bold shrink-0 transition-colors"
          >
            <span>HOW SENTINEL-K SOLVES THIS</span>
            <ArrowRight className="w-4 h-4 text-[#F0B31C]" />
          </a>
        </div>

      </div>
    </section>
  );
};
