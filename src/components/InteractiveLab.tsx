import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Flame, 
  AlertTriangle, 
  RotateCcw, 
  FileText, 
  Activity, 
  Cpu, 
  Gauge, 
  Download, 
  Share2 
} from 'lucide-react';


export const InteractiveLab: React.FC = () => {
  // Session states: 'IDLE' | 'RUNNING' | 'HEATING' | 'EVENT_TRIGGERED'
  const [sessionState, setSessionState] = useState<'IDLE' | 'RUNNING' | 'HEATING' | 'EVENT_TRIGGERED'>('RUNNING');
  
  // Dynamic metrics
  const [temperature, setTemperature] = useState<number>(41.8);
  const [fps, setFps] = useState<number>(90);
  const [cpuUsage, setCpuUsage] = useState<number>(65);
  const [thermalGovernor, setThermalGovernor] = useState<string>('NORMAL');
  const [showReport, setShowReport] = useState<boolean>(false);

  // Stream data points for live canvas graph
  const [dataPoints, setDataPoints] = useState<Array<{ temp: number; fps: number; time: number }>>([
    { temp: 41.8, fps: 90, time: 0 },
    { temp: 41.9, fps: 90, time: 1 },
    { temp: 41.8, fps: 89, time: 2 },
    { temp: 42.0, fps: 90, time: 3 },
    { temp: 41.9, fps: 90, time: 4 },
  ]);

  // Live simulation tick
  useEffect(() => {
    if (sessionState === 'IDLE') return;

    const timer = setInterval(() => {
      setDataPoints((prev) => {
        let nextTemp = temperature;
        let nextFps = fps;

        if (sessionState === 'RUNNING') {
          nextTemp = +(41.5 + Math.random() * 0.5).toFixed(1);
          nextFps = Math.round(89 + Math.random() * 2);
          setThermalGovernor('NORMAL (ZONE_0 PASS)');
        } else if (sessionState === 'HEATING') {
          nextTemp = +(Math.min(44.2, temperature + 0.15 + (Math.random() * 0.08))).toFixed(1);
          nextFps = Math.round(88 + Math.random() * 3);
          setThermalGovernor('MODERATE (+1.8°C/m)');
        } else if (sessionState === 'EVENT_TRIGGERED') {
          nextTemp = +(44.4 + (Math.random() * 0.3)).toFixed(1);
          nextFps = 60;
          setThermalGovernor('CRITICAL_THROTTLED');
        }

        setTemperature(nextTemp);
        setFps(nextFps);
        setCpuUsage(sessionState === 'EVENT_TRIGGERED' ? 52 : sessionState === 'HEATING' ? 88 : 66);

        const newPts = [...prev.slice(-28), { temp: nextTemp, fps: nextFps, time: Date.now() }];
        return newPts;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [sessionState, temperature, fps]);

  // Handlers
  const handleStartSession = () => {
    setSessionState('RUNNING');
    setTemperature(41.8);
    setFps(90);
    setShowReport(false);
  };

  const handleSimulateHeat = () => {
    setSessionState('HEATING');
    setShowReport(false);
  };

  const handleTriggerThermalEvent = () => {
    setSessionState('EVENT_TRIGGERED');
    setTemperature(44.2);
    setFps(60);
    // After 1.2s show report prompt
    setTimeout(() => {
      setShowReport(true);
    }, 1200);
  };

  const handleReset = () => {
    setSessionState('IDLE');
    setTemperature(41.2);
    setFps(90);
    setThermalGovernor('IDLE_STANDBY');
    setShowReport(false);
    setDataPoints([
      { temp: 41.2, fps: 90, time: 0 },
      { temp: 41.3, fps: 90, time: 1 },
      { temp: 41.2, fps: 90, time: 2 },
    ]);
  };

  return (
    <section id="lab" className="relative py-28 bg-[#08090C] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F0B31C]/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F0B31C]/30 text-xs font-mono-code text-[#F0B31C] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>HARDWARE BENCHMARK LAB</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            See the thermal event happen.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Take manual control of the silicon telemetry simulator. Observe the moment thermal governors 
            trip, the synchronous frame pacing drop, and the on-device AI forensic post-mortem.
          </p>
        </div>

        {/* The Big Lab Console Dashboard */}
        <div className="bg-zinc-950/90 rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          
          {/* Lab Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0B31C] animate-ping" />
              <span className="font-mono-code text-xs font-bold text-zinc-200 tracking-wider">
                LIVE HARNESS: SNAPDRAGON 8 GEN CLUSTER SIMULATOR
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleStartSession}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all ${
                  sessionState === 'RUNNING'
                    ? 'bg-[#F0B31C] text-black shadow-[0_0_15px_rgba(240,179,28,0.4)]'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>START SESSION</span>
              </button>

              <button
                onClick={handleSimulateHeat}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all ${
                  sessionState === 'HEATING'
                    ? 'bg-[#FF9900] text-black shadow-[0_0_15px_rgba(255,153,0,0.4)]'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>SIMULATE HEAT</span>
              </button>

              <button
                onClick={handleTriggerThermalEvent}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all ${
                  sessionState === 'EVENT_TRIGGERED'
                    ? 'bg-[#FF3333] text-white shadow-[0_0_20px_rgba(255,51,51,0.5)] animate-pulse'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>TRIGGER THERMAL EVENT</span>
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono-code text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10 hover:bg-zinc-800 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          {/* 4 Telemetry Gauges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {/* 1. Temperature */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code">
                <span>TEMPERATURE</span>
                <Flame className={`w-4 h-4 ${temperature > 43.5 ? 'text-[#FF3333]' : 'text-[#F0B31C]'}`} />
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                  {temperature}
                </span>
                <span className={`text-xl font-display font-bold ${temperature > 43.5 ? 'text-[#FF3333]' : 'text-[#F0B31C]'}`}>
                  °C
                </span>
              </div>
              <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    temperature > 43.5 ? 'bg-[#FF3333]' : temperature > 42.5 ? 'bg-[#FF9900]' : 'bg-[#F0B31C]'
                  }`}
                  style={{ width: `${Math.min(100, ((temperature - 35) / 15) * 100)}%` }}
                />
              </div>
            </div>

            {/* 2. FPS */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code">
                <span>FRAME PACING</span>
                <Gauge className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`text-3xl sm:text-4xl font-display font-extrabold ${fps < 70 ? 'text-[#FF3333]' : 'text-cyan-400'}`}>
                  {fps}
                </span>
                <span className="text-sm font-mono-code text-zinc-500">FPS / 90</span>
              </div>
              <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${fps < 70 ? 'bg-[#FF3333]' : 'bg-cyan-400'}`}
                  style={{ width: `${(fps / 90) * 100}%` }}
                />
              </div>
            </div>

            {/* 3. CPU Load */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code">
                <span>CPU CLUSTERS</span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                  {cpuUsage}%
                </span>
                <span className="text-xs font-mono-code text-zinc-500">8 CORES</span>
              </div>
              <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-400 transition-all duration-300"
                  style={{ width: `${cpuUsage}%` }}
                />
              </div>
            </div>

            {/* 4. Thermal State */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono-code">
                <span>GOVERNOR STATE</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-3">
                <span className={`text-xs sm:text-sm font-mono-code font-bold uppercase truncate block ${
                  sessionState === 'EVENT_TRIGGERED' ? 'text-[#FF3333]' : sessionState === 'HEATING' ? 'text-[#FF9900]' : 'text-emerald-400'
                }`}>
                  {thermalGovernor}
                </span>
              </div>
              <div className="mt-3 text-[10px] font-mono-code text-zinc-500">
                PowerManager.THERMAL_STATUS
              </div>
            </div>
          </div>

          {/* SVG Real-time Telemetry Multi-Curve Chart */}
          <div className="relative h-64 sm:h-72 w-full bg-black/80 rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10 text-[10px] font-mono-code text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#F0B31C]"></span>
                  TEMPERATURE (°C)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  FRAME RATE (FPS)
                </span>
              </div>
              <span>STREAM BUFFER: 30 SAMPLES</span>
            </div>

            {/* Render dynamic SVG polyline */}
            <svg className="absolute inset-0 w-full h-full pt-8 pb-4 px-2" preserveAspectRatio="none" viewBox="0 0 500 150">
              {/* Reference gridlines */}
              <line x1="0" y1="35" x2="500" y2="35" stroke="#333" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#333" strokeDasharray="4 4" />
              <line x1="0" y1="115" x2="500" y2="115" stroke="#333" strokeDasharray="4 4" />

              {/* Dynamic Path for Temp (scaled between 40 and 46°C) */}
              <polyline
                fill="none"
                stroke="#F0B31C"
                strokeWidth="2.5"
                points={dataPoints
                  .map((pt, i) => {
                    const x = (i / Math.max(1, dataPoints.length - 1)) * 500;
                    // Temp mapped 40->130, 46->20
                    const y = Math.max(15, Math.min(135, 130 - ((pt.temp - 40) / 6) * 110));
                    return `${x},${y}`;
                  })
                  .join(' ')}
              />

              {/* Dynamic Path for FPS (scaled between 50 and 100 FPS) */}
              <polyline
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2.5"
                points={dataPoints
                  .map((pt, i) => {
                    const x = (i / Math.max(1, dataPoints.length - 1)) * 500;
                    // FPS mapped 50->135, 100->25
                    const y = Math.max(15, Math.min(135, 135 - ((pt.fps - 50) / 50) * 110));
                    return `${x},${y}`;
                  })
                  .join(' ')}
              />
            </svg>

            <div className="flex items-center justify-between text-[9px] font-mono-code text-zinc-500 z-10 border-t border-white/5 pt-2">
              <span>-30s WINDOW</span>
              <span className="text-[#F0B31C] font-bold animate-pulse">● LIVE INTERPOLATION ACTIVE</span>
              <span>NOW</span>
            </div>
          </div>

          {/* FORENSIC REPORT CALLOUT / BANNER */}
          <AnimatePresence>
            {showReport && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border-2 border-[#F0B31C]/60 shadow-[0_0_30px_rgba(240,179,28,0.2)]"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#F0B31C]/10 border border-[#F0B31C]/40 text-[#F0B31C] shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-code font-bold uppercase text-[#F0B31C] tracking-wider">
                          FORENSIC REPORT GENERATED
                        </span>
                        <span className="text-[10px] font-mono-code px-2 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          CONFIDENCE: 87%
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-bold text-white mt-1">
                        Diagnosis: High Thermal Mitigation Throttling Detected
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl">
                        "Device entered a high thermal state (44.4°C) while additional background activity (CloudBackupSync) 
                        was detected around the same time. Governor throttled render pipeline to 60 FPS to prevent hardware degradation."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => alert("Simulated Forensic Report JSON exported to local session.")}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono-code text-xs transition-all border border-white/10"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>EXPORT REPORT</span>
                    </button>

                    <button
                      onClick={() => alert("Forensic event shared to diagnostic console.")}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-black font-semibold font-mono-code text-xs transition-all shadow-md"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>LOG FORENSICS</span>
                    </button>
                  </div>
                </div>

                {/* Evidence table */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-code text-zinc-400">
                  <div className="bg-black/50 p-2.5 rounded-lg border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">CORRELATED PROCESS</span>
                    <span className="text-white font-bold">com.cloud.backup.sync</span>
                  </div>
                  <div className="bg-black/50 p-2.5 rounded-lg border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">THERMAL DELTA</span>
                    <span className="text-red-400 font-bold">+3.2°C over baseline</span>
                  </div>
                  <div className="bg-black/50 p-2.5 rounded-lg border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">FRAME DROPS DETECTED</span>
                    <span className="text-[#F0B31C] font-bold">1,820 frames delayed</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
