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
      color: 'text-amber-400',
      badge: 'HUMAN TRUST FAILURE',
    },
    {
      icon: ShieldX,
      title: 'THE "VALID BUT DEADLY" COMMAND',
      lead: 'A secure patch or authorized command can cause catastrophic kinetic failure.',
      detail:
        'Traditional OT security checks packet signatures and syntax: "Is this valid Modbus/DNP3? Yes." But it cannot predict what happens when Valve 2 is closed while Pump 4 runs at 850 RPM.',
      consequence: 'Cyber-security guarantees valid syntax; it does not guarantee physical survivability.',
      color: 'text-red-400',
      badge: 'CYBER-PHYSICAL BLINDSPOT',
    },
    {
      icon: Cpu,
      title: 'THE UNARMED FIELD TERMINAL',
      lead: 'Field operators carry high-power mobile nodes, but zero predictive protection.',
      detail:
        'Modern iQOO smartphones contain multi-TOPS NPUs and desktop-class connectivity, yet field technicians are forced to make life-and-death infrastructure decisions with bare hands and gut feeling.',
      consequence: 'No automated physical twin simulation or proof-of-intent engine exists at the field edge.',
      color: 'text-cyan-400',
      badge: 'UNEXPLOITED EDGE HARDWARE',
    },
  ];

  return (
    <section id="problem" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      {/* Precision Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/[0.04] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/[0.04] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-red-500/30 text-xs font-mono-code text-red-400 mb-6 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span className="font-bold tracking-wider">THE VULNERABILITY GAP</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">CRITICAL INFRASTRUCTURE DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            THE ATTACK DOESN&apos;T HAVE TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-white">
              COMPROMISE THE MACHINE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            It compromises the human who operates it. Adversaries weaponize urgent operational dispatches to trigger physically catastrophic commands through authorized human hands.
          </p>
        </div>

        {/* 3 Core Problem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#121826]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors">
                      <Icon className={`w-6 h-6 ${p.color}`} />
                    </div>
                    <span className="font-mono-code text-[10px] font-bold text-slate-400 uppercase px-2 py-0.5 rounded bg-white/[0.04]">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-sans font-black text-white tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-mono-code font-bold text-amber-300/90 italic bg-amber-500/[0.07] p-2.5 rounded-lg border border-amber-500/20">
                    {p.lead}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {p.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono-code text-[11px] text-slate-400">
                  <span className="text-red-400 font-bold block mb-1">Impact Consequence:</span>
                  {p.consequence}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Axiom Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#121826] to-cyan-950/40 border border-white/[0.1] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-amber-500 text-white flex items-center justify-center shrink-0 font-black font-mono-code text-base shadow-lg">
              !
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-amber-400 font-bold uppercase tracking-wider">
                CORE AXIOM OF KINETIC VALIDATION
              </div>
              <div className="text-sm sm:text-base font-sans font-bold text-white mt-0.5">
                &ldquo;A secure patch is not necessarily a safe patch.&rdquo;
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Syntax and firewalls cannot simulate fluid dynamics, pressure transients, or thermodynamic limits.
              </div>
            </div>
          </div>

          <a
            href="#pipeline"
            className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 hover:text-cyan-300 font-bold shrink-0 transition-colors"
          >
            <span>HOW SENTINEL-K SOLVES THIS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
