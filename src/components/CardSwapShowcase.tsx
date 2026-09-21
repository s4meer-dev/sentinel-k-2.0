import React from 'react';
import CardSwap, { Card } from './CardSwap';
import { 
  ShieldCheck, 
  Cpu, 
  ShieldAlert, 
  Layers, 
  Fingerprint, 
  Radio,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export const CardSwapShowcase: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#FAFAF8] border-b border-black/[0.06] overflow-hidden text-[#090D15]">
      {/* Millimeter Dot Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Technical Description (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs text-xs font-mono-code text-slate-800 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span className="font-bold tracking-wider">3D VERIFICATION STACK</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-semibold">REACT BITS CARDSWAP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-[1.06]">
              TANGIBLE 3D DEFENSE <br />
              <span className="text-slate-900">VERIFICATION ENGINE.</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
              Witness how Sentinel-K executes multi-stage verification in real time. Each card represents an autonomous defense tier running on the iQOO 13 and plant workstations — from acoustic spoof detection to EPANET hydrodynamic simulation.
            </p>

            <div className="mt-6 space-y-3 font-mono-code text-xs">
              <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>On-Device Execution:</span>
                </span>
                <strong className="text-slate-900">Snapdragon® 8 Elite NPU (45 TOPS)</strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#F0B31C]" />
                  <span>Kinetic Co-Processor:</span>
                </span>
                <strong className="text-slate-900">iQOO Q2 Supercomputing Chip</strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Air-Gapped Sovereign Gate:</span>
                </span>
                <strong className="text-slate-900">Ultrasonic Biometric Enclave</strong>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono-code text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-700" />
              <span>Cards swap automatically every 4.5 seconds with GSAP elastic physics.</span>
            </div>
          </div>

          {/* Right Column: React Bits <CardSwap /> 3D Component (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[480px] sm:min-h-[520px] relative">
            
            <div className="relative w-full max-w-[420px] h-[440px]">
              <CardSwap
                width={380}
                height={320}
                cardDistance={48}
                verticalDistance={56}
                delay={4500}
                pauseOnHover={true}
                skewAmount={4}
                easing="elastic"
              >
                {/* Card 1: Adversary Call Intercepted */}
                <Card className="p-6 flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-slate-800 border border-black/[0.06]">
                        TIER 01 // HUMAN SECURITY
                      </span>
                      <span className="text-[9px] font-mono-code font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        8.9 URGENCY FLAG
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-amber-700">
                      <Radio className="w-4 h-4" />
                      <span className="text-xs font-mono-code font-bold uppercase">Cellular Ingestion</span>
                    </div>

                    <h3 className="mt-2 text-lg font-sans font-black text-[#090D15] uppercase leading-tight">
                      SPOOFED AUTHORITY DISPATCH
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-mono-code leading-relaxed">
                      Voice clone detected with 71% spectral similarity. Duty roster indicates Supervisor Reynolds is offline on annual leave.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                    <span>STATUS: QUARANTINED</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </Card>

                {/* Card 2: Snapdragon NPU Extraction */}
                <Card className="p-6 flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-slate-800 border border-black/[0.06]">
                        TIER 02 // NPU PARSER
                      </span>
                      <span className="text-[9px] font-mono-code font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                        18ms LOCAL INFERENCE
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-blue-700">
                      <Cpu className="w-4 h-4" />
                      <span className="text-xs font-mono-code font-bold uppercase">Snapdragon® 8 Elite</span>
                    </div>

                    <h3 className="mt-2 text-lg font-sans font-black text-[#090D15] uppercase leading-tight">
                      SPEECH-TO-MODBUS STRUCTURING
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-mono-code leading-relaxed">
                      Quantized SLM compiles audio to `WRITE_REG(40012, 0x0352)`. Target: PLC Station 04 Pump 4 set to 850 RPM.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                    <span>NPU TOPS: 45 TOPS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </Card>

                {/* Card 3: Cyber Validation Gate */}
                <Card className="p-6 flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-slate-800 border border-black/[0.06]">
                        TIER 03 // CYBER GATE
                      </span>
                      <span className="text-[9px] font-mono-code font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                        CRC VALID // PASS
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-mono-code font-bold uppercase">Deterministic SCADA Gate</span>
                    </div>

                    <h3 className="mt-2 text-lg font-sans font-black text-[#090D15] uppercase leading-tight">
                      THE KINETIC PARADOX
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-mono-code leading-relaxed">
                      Standard firewall permits command. Modbus CRC 0x9B4E matches, register 40012 accessible. Physical consequences remain unchecked.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                    <span>CYBER RESULT: APPROVED</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </Card>

                {/* Card 4: EPANET Hydrodynamic Twin */}
                <Card className="p-6 flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-slate-800 border border-black/[0.06]">
                        TIER 04 // PHYSICAL TWIN
                      </span>
                      <span className="text-[9px] font-mono-code font-black px-2 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300">
                        11.4 BAR // HARD REJECT
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-red-700">
                      <ShieldAlert className="w-4 h-4" />
                      <span className="text-xs font-mono-code font-bold uppercase">EPANET / WNTR Solver</span>
                    </div>

                    <h3 className="mt-2 text-lg font-sans font-black text-[#090D15] uppercase leading-tight">
                      OVERPRESSURE SURGE PREDICTED
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-mono-code leading-relaxed">
                      Relief Valve 02 is closed (0%). Forward kinetic simulation calculates 11.4 bar shockwave at Node 14 (safety ceiling: 9.2 bar). Action halted!
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                    <span>PHYSICAL SAFETY: REJECTED</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </Card>

                {/* Card 5: Safety Critic Replan & Ultrasonic Fingerprint */}
                <Card className="p-6 flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-slate-800 border border-black/[0.06]">
                        TIER 05 // CRITIC REPLAN
                      </span>
                      <span className="text-[9px] font-mono-code font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                        7.4 BAR // SAFE PATH
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-emerald-700">
                      <Fingerprint className="w-4 h-4" />
                      <span className="text-xs font-mono-code font-bold uppercase">OriginOS 5 Enclave</span>
                    </div>

                    <h3 className="mt-2 text-lg font-sans font-black text-[#090D15] uppercase leading-tight">
                      STAGED SAFE REMEDIATION
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-mono-code leading-relaxed">
                      Critic opens Valve 02 to 40%, then stages Pump 4 ramp to 620 RPM. Sustains at 7.4 bar safe pressure. Operator commits via ultrasonic sensor.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                    <span>ACTION: BIOMETRIC COMMITTED</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </Card>
              </CardSwap>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
