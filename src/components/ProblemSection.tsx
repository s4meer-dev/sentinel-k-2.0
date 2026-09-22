import React from 'react';
import { AlertTriangle, ShieldX, UserX, Cpu, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [compareMode, setCompareMode] = React.useState<'TRADITIONAL' | 'SENTINEL'>('SENTINEL');
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
    <section id="problem" className="scroll-mt-36 relative pt-36 md:pt-44 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#1A1712]/[0.08] text-xs font-mono-code text-red-800 mb-5 shadow-[0_2px_8px_rgba(38,34,28,0.04)] backdrop-blur-md">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span className="font-bold tracking-wider">THE VULNERABILITY GAP</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#5C564C]">CRITICAL INFRASTRUCTURE DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-[-0.035em] text-[#1A1712] uppercase leading-[1.04]">
            THE ATTACK DOESN&apos;T HAVE TO <br />
            <span className="font-serif italic font-normal normal-case text-red-700 tracking-tight">
              compromise the machine.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5C564C] max-w-2xl mx-auto font-normal leading-relaxed">
            It compromises the human who operates it. Adversaries weaponize urgent operational dispatches to trigger physically catastrophic commands through authorized human hands.
          </p>
        </div>

        {/* 3 Core Problem Pillars — Subscrr Squircle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-7 sm:p-8 rounded-[30px] bg-white border border-[#1A1712]/[0.08] hover:border-[#1A1712]/[0.16] shadow-[0_4px_20px_-6px_rgba(38,34,28,0.05),0_20px_50px_-20px_rgba(38,34,28,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(38,34,28,0.08),0_30px_70px_-25px_rgba(38,34,28,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#F4F2EC] border border-[#1A1712]/[0.06]">
                      <Icon className="w-5 h-5 text-[#1A1712]" />
                    </div>
                    <span className="font-mono-code text-[10px] font-bold text-[#7C766C] uppercase px-2.5 py-0.5 rounded-full bg-[#ECE8DE]">
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

        {/* Interactive Cyber-Physical Paradox Comparator — Subscrr Bento Style */}
        <div className="mt-12 max-w-5xl mx-auto rounded-[36px] bg-white border border-[#1A1712]/[0.08] shadow-[0_8px_30px_-10px_rgba(38,34,28,0.08),0_24px_60px_-24px_rgba(38,34,28,0.1)] overflow-hidden">
          <div className="p-6 sm:p-7 bg-[#ECE8DE]/60 border-b border-[#1A1712]/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-[#1A1712] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
                <span>INTERACTIVE COMPARATOR // DEFENSE PARADIGM</span>
              </div>
              <p className="text-xs text-[#7C766C] mt-1 font-mono-code">
                Toggle below to compare what happens when a deceptive 850 RPM pump dispatch enters your plant.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-white/90 border border-[#1A1712]/[0.08] shadow-2xs font-mono-code text-xs backdrop-blur-md">
              <button
                onClick={() => setCompareMode('TRADITIONAL')}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  compareMode === 'TRADITIONAL'
                    ? 'bg-red-600 text-white shadow-2xs'
                    : 'text-[#7C766C] hover:text-[#1A1712]'
                }`}
              >
                TRADITIONAL SCADA
              </button>
              <button
                onClick={() => setCompareMode('SENTINEL')}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  compareMode === 'SENTINEL'
                    ? 'bg-[#1A1712] text-[#F0B31C] shadow-2xs'
                    : 'text-[#7C766C] hover:text-[#1A1712]'
                }`}
              >
                SENTINEL-K TWIN
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {compareMode === 'TRADITIONAL' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <div className="text-emerald-800 font-bold mb-1">01 // PROTOCOL SYNTAX</div>
                    <div className="text-emerald-950 font-black text-sm">CRC 0x9B4E VALID</div>
                    <p className="text-[11px] text-emerald-800 mt-1">RFC 1151 Modbus function 0x06 accepted without error.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <div className="text-emerald-800 font-bold mb-1">02 // OT FIREWALL</div>
                    <div className="text-emerald-950 font-black text-sm">PORT 502 WHITELISTED</div>
                    <p className="text-[11px] text-emerald-800 mt-1">Direct TCP packet routes cleanly to PLC Station 04.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <div className="text-emerald-800 font-bold mb-1">03 // OPERATOR ACCESS</div>
                    <div className="text-emerald-950 font-black text-sm">RBAC LEVEL 3 VALID</div>
                    <p className="text-[11px] text-emerald-800 mt-1">Human technician authorized to write register 40012.</p>
                  </div>
                </div>

                {/* Catastrophic Outcome Callout */}
                <div className="p-5 rounded-2xl bg-red-50 border border-red-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-red-950 font-black font-mono-code text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                      <span>THE CYBER DEFENSE BLINDSPOT: CATASTROPHIC FAILURE</span>
                    </div>
                    <p className="text-xs text-red-900 mt-1 leading-relaxed">
                      Every cybersecurity gate passed. But because Relief Valve 02 remained closed (0%), Pump 4 caused an instant Joukowsky surge of <strong className="text-red-950 font-black">11.4 BAR (exceeding 9.2 bar limit)</strong>. Node 14 pipe flange fractured, resulting in severe water flooding.
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-red-600 text-white font-mono-code font-black text-xs shrink-0 shadow-2xs">
                    RESULT: HARD PLANT DAMAGE
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <div className="text-amber-800 font-bold mb-1">01 // NPU ACOUSTIC PARSER</div>
                    <div className="text-amber-950 font-black text-sm">71% CLONE ANOMALY</div>
                    <p className="text-[11px] text-amber-900 mt-1">On-device SLM detects voice clone and flags 8.9 urgency score.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                    <div className="text-blue-800 font-bold mb-1">02 // EPANET TWIN</div>
                    <div className="text-blue-950 font-black text-sm">11.4 BAR REJECTED</div>
                    <p className="text-[11px] text-blue-950 mt-1">Forward fluid transient simulation detects rupture in 42ms.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                    <div className="text-emerald-800 font-bold mb-1">03 // AUTONOMOUS REPLAN</div>
                    <div className="text-emerald-950 font-black text-sm">7.4 BAR SAFE GRADIENT</div>
                    <p className="text-[11px] text-emerald-950 mt-1">Critic pre-opens Valve 02 to 40% and stages pump ramp.</p>
                  </div>
                </div>

                {/* Safe Outcome Callout */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-950 font-black font-mono-code text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span>KINETIC TWIN GUARANTEE: COMPLETE MITIGATION</span>
                    </div>
                    <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                      Catastrophe averted. The operator confirms the safe replan via the in-display ultrasonic biometric enclave. Modbus instruction is safely dispatched with zero hydraulic shock and 100% operational uptime.
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-mono-code font-black text-xs shrink-0 shadow-2xs">
                    RESULT: PLANT SURVIVES
                  </div>
                </div>
              </div>
            )}
          </div>
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
