import React from 'react';
import { Smartphone, Cpu, Radio, Lock, EyeOff, CheckCircle2 } from 'lucide-react';

export const PhoneNodeSection: React.FC = () => {
  const hardwareFeatures = [
    {
      icon: Cpu,
      title: 'SNAPDRAGON NPU (45+ TOPS)',
      desc: 'Local execution of quantized SLMs for real-time speech intent extraction, acoustic spoof analysis, and protocol parsing without cloud roundtrips.',
    },
    {
      icon: Radio,
      title: '5G SUB-6 + WI-FI 7 LOW LATENCY',
      desc: 'Ultra-reliable low-latency communications (URLLC) with the field control station and Office Kit digital twin gateway.',
    },
    {
      icon: Lock,
      title: 'ORIGINOS 5 HARDWARE ENCLAVE',
      desc: 'Biometric authorization and cryptographic signing of verified operational dispatches inside isolated secure hardware memory.',
    },
    {
      icon: EyeOff,
      title: 'REACTIVE PRIVACY (NO SURVEILLANCE)',
      desc: 'The phone is NOT an omnipresent microphone. It activates only upon incoming operational dispatch or manual action scan trigger.',
    },
  ];

  return (
    <section id="phone-node" className="scroll-mt-24 relative py-24 md:py-32 bg-[#0B0F19] border-b border-white/[0.08] overflow-hidden text-white">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-6 shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider">iQOO HARDWARE INTEGRATION</span>
            <span className="text-white/20">/</span>
            <span className="text-[#F0B31C] font-semibold">EDGE SECURITY TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white uppercase leading-[1.08]">
            THE PHONE IS THE FIELD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#F0B31C] to-emerald-400">
              SECURITY NODE.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We don&apos;t treat the technician&apos;s phone as a dumb notification display. In Sentinel-K, the iQOO smartphone is an autonomous, on-device cyber-physical verification copilot.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {hardwareFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#121826]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/[0.08] w-fit mb-5">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-sans font-black tracking-tight text-white uppercase">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] font-mono-code text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>NATIVE EDGE COMPONENT</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Privacy & Operational Sovereignty Commitment */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#07090E] border border-white/[0.1] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono-code text-[#F0B31C] font-bold uppercase tracking-wider">
              PRIVACY BY DESIGN ARCHITECTURE
            </span>
            <div className="text-base sm:text-lg font-sans font-bold text-white">
              Zero continuous ambient audio surveillance.
            </div>
            <div className="text-xs text-slate-400 max-w-xl font-normal">
              Sentinel-K operates strictly on incoming operational communication triggers or manual operator submission. Raw audio buffers are processed in volatile RAM and purged immediately after forensic parameter extraction.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121826] border border-emerald-500/30 text-center shrink-0">
            <div className="text-xs font-mono-code text-emerald-400 font-bold">100% LOCAL NPU</div>
            <div className="text-[10px] font-mono-code text-slate-400 mt-0.5">Zero Plaintext Cloud Leakage</div>
          </div>
        </div>

      </div>
    </section>
  );
};
