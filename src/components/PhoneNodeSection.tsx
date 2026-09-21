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
    <section id="phone-node" className="scroll-mt-24 relative py-20 md:py-28 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono-code text-slate-800 mb-5 shadow-2xs">
            <Smartphone className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">iQOO HARDWARE INTEGRATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">EDGE SECURITY TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
            THE PHONE IS THE FIELD <br />
            <span className="text-slate-900">SECURITY NODE.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We don&apos;t treat the technician&apos;s phone as a dumb notification display. In Sentinel-K, the iQOO smartphone is an autonomous, on-device cyber-physical verification copilot.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {hardwareFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] border border-black/[0.05] w-fit mb-4 text-[#090D15]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-sans font-black tracking-tight text-[#090D15] uppercase">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.05] font-mono-code text-[10px] text-emerald-800 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NATIVE EDGE COMPONENT</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Privacy & Operational Sovereignty Commitment */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono-code text-amber-800 font-bold uppercase tracking-wider">
              PRIVACY BY DESIGN ARCHITECTURE
            </span>
            <div className="text-sm sm:text-base font-sans font-bold text-[#090D15]">
              Zero continuous ambient audio surveillance.
            </div>
            <div className="text-xs text-slate-600 max-w-xl font-normal mt-0.5">
              Sentinel-K operates strictly on incoming operational communication triggers or manual operator submission. Raw audio buffers are processed in volatile RAM and purged immediately after forensic parameter extraction.
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-black/[0.06] text-center shrink-0">
            <div className="text-xs font-mono-code text-emerald-800 font-bold">100% LOCAL NPU</div>
            <div className="text-[10px] font-mono-code text-slate-500 mt-0.5">Zero Plaintext Cloud Leakage</div>
          </div>
        </div>

      </div>
    </section>
  );
};
