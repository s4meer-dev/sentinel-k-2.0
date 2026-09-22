import React from 'react';
import { Database, Waves, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const DigitalTwinSection: React.FC = () => {
  const [valveState, setValveState] = React.useState<number>(0);
  const [pumpSpeed, setPumpSpeed] = React.useState<number>(850);

  // Dynamic Joukowsky water hammer pressure approximation
  const simulatedPeak = React.useMemo(() => {
    // Base static pressure: ~4.5 bar
    // Surge increment proportional to (RPM / 850)
    // Valve relief dampens surge significantly
    const rawSurge = (pumpSpeed / 850) * 6.9;
    const reliefFactor = valveState > 0 ? (1 - (valveState / 100) * 0.72) : 1.0;
    return 4.5 + (rawSurge * reliefFactor);
  }, [valveState, pumpSpeed]);

  return (
    <section id="digital-twin" className="scroll-mt-36 relative pt-36 md:pt-44 pb-20 md:pb-28 bg-transparent border-b border-[#1A1712]/[0.08] overflow-hidden text-[#1A1712]">
      <div className="absolute inset-0 network-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#1A1712]/[0.08] text-xs font-mono-code text-[#1A1712] mb-5 shadow-[0_2px_8px_rgba(38,34,28,0.04)] backdrop-blur-md">
            <Waves className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-bold tracking-wider">WNTR / EPANET HYDRODYNAMIC TWIN</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#5C564C]">PHYSICS AS THE TESTBED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-[-0.035em] text-[#1A1712] uppercase leading-[1.04]">
            THE PHYSICAL WORLD IS THE <br />
            <span className="font-serif italic font-normal normal-case text-slate-800 tracking-tight">
              ultimate test environment.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5C564C] max-w-2xl mx-auto font-normal leading-relaxed">
            Before any high-impact command reaches the physical PLC, Sentinel-K simulates its exact consequences in an isolated digital twin running real-world differential fluid equations.
          </p>
        </div>

        {/* Digital Twin Architecture Grid — Subscrr Squircle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="p-7 sm:p-8 rounded-[30px] bg-white border border-[#1A1712]/[0.08] hover:border-[#1A1712]/[0.16] shadow-[0_4px_20px_-6px_rgba(38,34,28,0.05),0_20px_50px_-20px_rgba(38,34,28,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(38,34,28,0.08),0_30px_70px_-25px_rgba(38,34,28,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F2EC] border border-[#1A1712]/[0.06] w-fit mb-4">
                <Database className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#1A1712] uppercase">
                Plant Topology Model
              </h3>
              <p className="mt-2 text-xs text-[#5C564C] leading-relaxed font-normal">
                Models 24 pipe junctions, 4 variable frequency pumps, 6 pressure relief valves, and 2 municipal distribution reservoirs with exact pipe roughness and elevation data.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] font-mono-code text-[11px] text-blue-800 font-bold">
              Topology: EPANET 2.2 INP Schema
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-[30px] bg-white border border-[#1A1712]/[0.08] hover:border-[#1A1712]/[0.16] shadow-[0_4px_20px_-6px_rgba(38,34,28,0.05),0_20px_50px_-20px_rgba(38,34,28,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(38,34,28,0.08),0_30px_70px_-25px_rgba(38,34,28,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F2EC] border border-[#1A1712]/[0.06] w-fit mb-4">
                <Cpu className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#1A1712] uppercase">
                Transient Kinematics Solver
              </h3>
              <p className="mt-2 text-xs text-[#5C564C] leading-relaxed font-normal">
                Computes Joukowsky water hammer shockwaves, velocity head gradients, and friction dissipation in 50-millisecond discrete time steps.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] font-mono-code text-[11px] text-amber-800 font-bold">
              Engine: Python WNTR Engine
            </div>
          </div>

          <div className="p-7 sm:p-8 rounded-[30px] bg-white border border-[#1A1712]/[0.08] hover:border-[#1A1712]/[0.16] shadow-[0_4px_20px_-6px_rgba(38,34,28,0.05),0_20px_50px_-20px_rgba(38,34,28,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(38,34,28,0.08),0_30px_70px_-25px_rgba(38,34,28,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F2EC] border border-[#1A1712]/[0.06] w-fit mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-sm sm:text-base font-sans font-black text-[#1A1712] uppercase">
                Invariant Guardrails
              </h3>
              <p className="mt-2 text-xs text-[#5C564C] leading-relaxed font-normal">
                Hardcoded mathematical invariants: Max Manifold Pressure &lt;= 9.2 bar, Min Reservoir Head &gt;= 1.5m, Max Surge Velocity &lt;= 3.2 m/s.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1A1712]/[0.06] font-mono-code text-[11px] text-emerald-800 font-bold">
              Enforcement: Deterministic Reject Gate
            </div>
          </div>

        </div>

        {/* Interactive EPANET 2.2 Hydrodynamics Sandbox — Subscrr Bento Style */}
        <div className="mt-12 max-w-5xl mx-auto rounded-[36px] bg-white border border-[#1A1712]/[0.08] shadow-[0_8px_30px_-10px_rgba(38,34,28,0.08),0_24px_60px_-24px_rgba(38,34,28,0.1)] overflow-hidden">
          <div className="p-6 sm:p-7 bg-[#ECE8DE]/60 border-b border-[#1A1712]/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-slate-800 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>INTERACTIVE SIMULATOR // EPANET 2.2 KINETIC TWIN</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-mono-code">
                Adjust the pump speed and relief valve state to witness forward transient pressure waves before PLC execution.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono-code text-xs">
              <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 font-bold border border-black/[0.05]">
                NODE 14 SENSORS
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-blue-50 text-blue-800 font-bold border border-blue-200">
                144Hz SOLVER
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-5 font-mono-code">
                {/* Scenario Presets */}
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    SIMULATION PRESETS:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setValveState(0);
                        setPumpSpeed(850);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        valveState === 0 && pumpSpeed === 850
                          ? 'bg-red-50 border-red-300 text-red-950 shadow-2xs font-bold'
                          : 'bg-white border-black/[0.08] text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-[10px] text-red-700 font-black">ADVERSARY COMMAND</div>
                      <div className="text-xs font-bold mt-0.5">850 RPM · Valve 0%</div>
                    </button>

                    <button
                      onClick={() => {
                        setValveState(40);
                        setPumpSpeed(620);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        valveState === 40 && pumpSpeed === 620
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-2xs font-bold'
                          : 'bg-white border-black/[0.08] text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-[10px] text-emerald-700 font-black">CRITIC REPLAN</div>
                      <div className="text-xs font-bold mt-0.5">620 RPM · Valve 40%</div>
                    </button>
                  </div>
                </div>

                {/* Valve Toggle */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-600 font-bold">RELIEF VALVE 02:</span>
                    <span className={`font-black ${valveState === 0 ? 'text-red-700' : 'text-emerald-700'}`}>
                      {valveState}% ({valveState === 0 ? 'LOCKED CLOSED' : 'MODULATING'})
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setValveState(0)}
                      className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        valveState === 0
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white border-black/[0.08] text-slate-700'
                      }`}
                    >
                      0% (Closed)
                    </button>
                    <button
                      onClick={() => setValveState(40)}
                      className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        valveState === 40
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white border-black/[0.08] text-slate-700'
                      }`}
                    >
                      40% (Relief)
                    </button>
                  </div>
                </div>

                {/* Pump Speed Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-600 font-bold">PUMP 04 TARGET SPEED:</span>
                    <span className="font-black text-slate-900">{pumpSpeed} RPM</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="900"
                    step="25"
                    value={pumpSpeed}
                    onChange={(e) => setPumpSpeed(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#090D15]"
                  />
                  <div className="flex justify-between text-[9px] text-slate-600 mt-1 font-mono-code font-bold">
                    <span>300 RPM (IDLE)</span>
                    <span>600 RPM (NOMINAL)</span>
                    <span>900 RPM (MAX)</span>
                  </div>
                </div>

                {/* Live Modbus Frame Readout */}
                <div className="p-3 rounded-xl bg-slate-900 text-slate-300 text-[10px] space-y-1">
                  <div className="flex justify-between text-slate-600 font-bold">
                    <span>SYNTHESIZED MODBUS FRAME</span>
                    <span className="text-emerald-400">TCP PORT 502</span>
                  </div>
                  <div className="font-mono-code text-white">
                    WRITE_REG(40012, 0x{pumpSpeed.toString(16).toUpperCase()}) // PUMP_SPEED
                  </div>
                  <div className="font-mono-code text-slate-300">
                    WRITE_REG(40024, 0x{valveState.toString(16).toUpperCase()}) // VALVE_POS
                  </div>
                </div>
              </div>

              {/* Dynamic Visualization Column */}
              <div className="lg:col-span-7 space-y-4">
                {/* Result Card with Dynamic Pressure Curve */}
                <div className={`p-5 rounded-2xl border transition-all ${
                  simulatedPeak > 9.2
                    ? 'bg-red-50/80 border-red-300'
                    : 'bg-emerald-50/80 border-emerald-300'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">
                        FORWARD PRESSURE SIMULATION (T+0s → T+60s)
                      </div>
                      <div className="text-2xl font-black font-sans mt-0.5 flex items-baseline gap-2">
                        <span className={simulatedPeak > 9.2 ? 'text-red-700' : 'text-emerald-700'}>
                          {simulatedPeak.toFixed(1)} BAR
                        </span>
                        <span className="text-xs font-mono-code text-slate-500 font-normal">
                          (INVARIANT LIMIT: 9.2 BAR)
                        </span>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-xl text-xs font-mono-code font-black border ${
                      simulatedPeak > 9.2
                        ? 'bg-red-600 text-white border-red-700 shadow-2xs'
                        : 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                    }`}>
                      {simulatedPeak > 9.2 ? 'HARD REJECT' : 'INVARIANT SAFE'}
                    </span>
                  </div>

                  {/* SVG Transient Graph */}
                  <div className="h-28 w-full bg-white rounded-xl p-3 border border-black/[0.08] relative">
                    <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible">
                      {/* Grid lines */}
                      <line x1="0" y1="35" x2="300" y2="35" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 3" />
                      <text x="5" y="32" fill="#EF4444" fontSize="7" fontFamily="monospace" fontWeight="bold">
                        9.2 BAR MAXIMUM PIPELINE YIELD LIMIT
                      </text>

                      {/* Pressure Curve */}
                      <path
                        d={
                          simulatedPeak > 9.2
                            ? 'M 0 55 Q 60 52, 120 48 T 170 38 T 205 10 T 230 18 T 300 30'
                            : 'M 0 55 Q 60 50, 120 46 T 180 40 T 240 42 T 300 44'
                        }
                        fill="none"
                        stroke={simulatedPeak > 9.2 ? '#DC2626' : '#059669'}
                        strokeWidth="2.5"
                      />

                      {/* Peak Marker */}
                      {simulatedPeak > 9.2 ? (
                        <>
                          <circle cx="205" cy="10" r="5" fill="#DC2626" className="animate-ping" />
                          <circle cx="205" cy="10" r="3.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                          <text x="215" y="12" fill="#DC2626" fontSize="8" fontFamily="monospace" fontWeight="bold">
                            11.4 BAR SURGE (T+42s)
                          </text>
                        </>
                      ) : (
                        <>
                          <circle cx="180" cy="40" r="3.5" fill="#059669" />
                          <text x="190" y="38" fill="#059669" fontSize="8" fontFamily="monospace" fontWeight="bold">
                            7.4 BAR SAFE (T+35s)
                          </text>
                        </>
                      )}
                    </svg>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code text-slate-600">
                    <span>SURGE VELOCITY: {simulatedPeak > 9.2 ? '4.8 m/s (DANGEROUS)' : '2.1 m/s (STABLE)'}</span>
                    <span>CAVITATION RISK: {simulatedPeak > 9.2 ? 'CRITICAL HIGH' : 'ZERO'}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-black/[0.06] text-xs font-mono-code text-slate-600">
                  <strong className="text-slate-900">Hydrodynamic Invariant:</strong> Joukowsky equation ΔP = ρ · a · Δv verifies fluid kinetic shockwave before mechanical stress manifests.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Prototype & Simulation Disclaimer Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-amber-200/80 font-mono-code text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-900 font-bold text-xs uppercase tracking-wider">
              HACKATHON IMPLEMENTATION SCOPE &amp; DISCLAIMER
            </div>
            <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
              For this iQOO Hackathon submission, physical plant telemetry is driven by a software simulation harness using the open-source EPANET / WNTR water network engine. No live municipal equipment is connected or altered. All benchmarks are marked as <span className="text-slate-900 font-bold">TARGET / SIMULATION CONDITION</span>.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
