import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Cpu, 
  AlertTriangle, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Radio, 
  Layers, 
  Activity,
  ArrowRight
} from 'lucide-react';
import type { ValidationPhase } from '../types/sentinel';

interface CarouselSlide {
  id: number;
  phase: ValidationPhase;
  tag: string;
  hardware: string;
  title: string;
  headline: string;
  description: string;
  metricBadge: string;
  metricColor: string;
  telemetry: {
    label: string;
    value: string;
    status: 'good' | 'warn' | 'hazard' | 'neutral';
  }[];
  verdict: {
    status: string;
    details: string;
    type: 'pass' | 'reject' | 'warn' | 'replan';
  };
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    phase: 'INCOMING',
    tag: 'STAGE 01 // DISPATCH INTERCEPT',
    hardware: 'iQOO 13 Field Enclave · Cellular Telemetry',
    title: 'Adversary Authority Spoofing Intercepted',
    headline: 'CELLULAR VOICE CLONE DIRECTED AT FIELD TECHNICIAN',
    description: 'An incoming direct call impersonates Regional Supervisor Reynolds, ordering immediate manual override to ramp Pump 4 to 850 RPM. Sentinel-K intercepts the command at the field node before any SCADA contact.',
    metricBadge: '8.9 / 10 COERCIVE URGENCY',
    metricColor: 'bg-amber-100 text-amber-900 border-amber-300',
    telemetry: [
      { label: 'Caller Identity', value: '+1-800-442-FLOW (UNVERIFIED)', status: 'warn' },
      { label: 'Voice Spectral Match', value: '71% (Acoustic Anomaly Flagged)', status: 'hazard' },
      { label: 'Supervisor Status', value: 'Off-Duty (Annual Leave Active)', status: 'warn' },
      { label: 'Command Urgency Index', value: 'Critical (8.9 / 10)', status: 'warn' },
    ],
    verdict: {
      status: 'SUSPICIOUS SIGNAL QUARANTINED',
      details: 'Command isolated on-device; prevented from direct PLC execution.',
      type: 'warn',
    },
  },
  {
    id: 2,
    phase: 'EXTRACTING',
    tag: 'STAGE 02 // NPU EVIDENCE EXTRACTION',
    hardware: 'Snapdragon® 8 Elite NPU · 45 TOPS On-Device SLM',
    title: 'On-Device Audio-to-Intent Structuring',
    headline: 'QUANTIZED SLM 3B TRANSLATES NATURAL SPEECH TO SCADA PAYLOAD',
    description: 'The on-device SLM runs locally at 18ms inference latency. It extracts structured operational parameters from human audio, synthesizing the target Modbus register write while flagging psychological coercion patterns.',
    metricBadge: '45 TOPS LOCAL NPU · 18ms LATENCY',
    metricColor: 'bg-blue-100 text-blue-900 border-blue-300',
    telemetry: [
      { label: 'Extracted Action', value: 'SET_RPM(PUMP_04, 850)', status: 'neutral' },
      { label: 'Synthesized Modbus', value: 'WRITE_REG(ADDR: 40012, VAL: 0x0352)', status: 'neutral' },
      { label: 'Target PLC Node', value: 'STATION_04_PUMP_STATION', status: 'neutral' },
      { label: 'On-Device Privacy', value: '100% Air-Gapped (Zero Cloud Leak)', status: 'good' },
    ],
    verdict: {
      status: 'INTENT VECTOR STRUCTURED',
      details: 'Audio translated into verifiable cyber-physical instruction.',
      type: 'pass',
    },
  },
  {
    id: 3,
    phase: 'CYBER_CHECK',
    tag: 'STAGE 03 // CYBER VALIDATION GATE',
    hardware: 'Deterministic SCADA Logic Engine · Air-Gap Enclave',
    title: 'The Kinetic Paradox: Traditional Defenses Pass',
    headline: 'MODBUS SYNTAX, CRC CHECKSUM & RBAC PERMISSIONS ARE 100% VALID',
    description: 'The instruction complies with Modbus protocol specifications, register boundaries, and network policy. Conventional IT/OT firewalls approve this command completely — proving why pure cyber verification is fatally blind.',
    metricBadge: 'FIREWALL STATUS: APPROVED (BLIND)',
    metricColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    telemetry: [
      { label: 'Protocol Verification', value: 'Modbus TCP / CRC 0x9B4E (Valid)', status: 'good' },
      { label: 'Register Access Range', value: '40001 - 40050 (Permitted)', status: 'good' },
      { label: 'Technician Role Matrix', value: 'Level 3 Operator (Authorized Write)', status: 'good' },
      { label: 'Forward Physical Consequence', value: 'UNKNOWN TO CYBER DEFENSE', status: 'hazard' },
    ],
    verdict: {
      status: 'CYBER GATE PASSED · PHYSICAL HAZARD UNCHECKED',
      details: 'Conventional security fails here. Sentinel-K passes vector to Digital Twin.',
      type: 'warn',
    },
  },
  {
    id: 4,
    phase: 'PHYSICAL_SIM',
    tag: 'STAGE 04 // KINETIC TWIN SIMULATION',
    hardware: 'EPANET / WNTR Hydrodynamic Engine · Q2 Co-Processor',
    title: 'Digital Twin Simulation: 11.4 Bar Catastrophe',
    headline: 'FORWARD KINETIC PROJECTION PREDICTS MANIFOLD OVERPRESSURE RUPTURE',
    description: 'The hydraulic twin forward-simulates the plant with real-time sensor telemetry. Because Relief Valve 02 is closed, running Pump 4 at 850 RPM induces severe hydraulic shock, exceeding the 9.2 bar yield threshold.',
    metricBadge: '11.4 BAR PEAK // HARD REJECT',
    metricColor: 'bg-red-100 text-red-900 border-red-300',
    telemetry: [
      { label: 'Current Valve 02 State', value: '0% (LOCKED CLOSED)', status: 'hazard' },
      { label: 'Simulated Peak Pressure', value: '11.4 BAR at T+42s', status: 'hazard' },
      { label: 'Safety Threshold Limit', value: '9.2 BAR Invariant Maximum', status: 'warn' },
      { label: 'Predicted Physical Damage', value: 'Node 14 Flange Fracture & Flooding', status: 'hazard' },
    ],
    verdict: {
      status: 'HARD REJECT ISSUED BY KINETIC TWIN',
      details: 'Disaster prevented. Automated handoff to Safety Critic Agent.',
      type: 'reject',
    },
  },
  {
    id: 5,
    phase: 'REPLAN',
    tag: 'STAGE 05 // CRITIC REPLAN & BIOMETRICS',
    hardware: 'OriginOS 5 Enclave · In-Display Ultrasonic Sensor',
    title: 'Autonomous Safe Replan & Operator Commitment',
    headline: 'DYNAMIC REMEDIATION (7.4 BAR SAFE) + ULTRASONIC BIOMETRIC SIGNOFF',
    description: 'The Safety Critic synthesizes an invariant-satisfying alternative: modulate Relief Valve 02 to 40%, then stage Pump 4 in 3 gradual increments. Peak pressure sustains at 7.4 bar. The technician signs off via ultrasonic fingerprint.',
    metricBadge: '7.4 BAR SAFE // BIOMETRIC SIGNED',
    metricColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    telemetry: [
      { label: 'Step 1: Valve Modulation', value: 'Pre-open Valve 02 to 40% (Surge Relief)', status: 'good' },
      { label: 'Step 2: Staged Pump Ramp', value: '3x 30-sec steps to 620 RPM', status: 'good' },
      { label: 'Re-simulated Peak Pressure', value: '7.4 BAR (Well Under 9.2 Limit)', status: 'good' },
      { label: 'Biometric Authorization', value: 'Operator ID #049 Ultrasonic Verified', status: 'good' },
    ],
    verdict: {
      status: 'SAFE REMEDIATION EXECUTED TO PLC',
      details: 'Physical integrity preserved. Incident forensics logged to SIEM.',
      type: 'replan',
    },
  },
];

interface SentinelExperienceCarouselProps {
  onSelectPhase?: (phase: ValidationPhase) => void;
}

export const SentinelExperienceCarousel: React.FC<SentinelExperienceCarouselProps> = ({
  onSelectPhase,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  const goToSlide = (index: number, dir: number = 0) => {
    setDirection(dir);
    setCurrentIndex(index);
    onSelectPhase?.(CAROUSEL_SLIDES[index].phase);
  };

  const nextSlide = () => {
    const nextIdx = (currentIndex + 1) % CAROUSEL_SLIDES.length;
    goToSlide(nextIdx, 1);
  };

  const prevSlide = () => {
    const prevIdx = (currentIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    goToSlide(prevIdx, -1);
  };

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const next = (prev + 1) % CAROUSEL_SLIDES.length;
        onSelectPhase?.(CAROUSEL_SLIDES[next].phase);
        return next;
      });
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, onSelectPhase]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : dir < 0 ? -50 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : dir < 0 ? 50 : 0,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 bg-[#FBFBFA] border-b border-black/[0.06] overflow-hidden">
      {/* Background Millimeter Grid */}
      <div className="absolute inset-0 network-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] shadow-2xs text-xs font-mono-code text-slate-800 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span className="font-bold tracking-wider">SIGNATURE MOMENTS</span>
              <span className="text-slate-300">/</span>
              <span className="text-amber-800 font-semibold">INTERACTIVE STORY CAROUSEL</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-[#090D15] uppercase">
              THE 5 OPERATIONAL MOMENTS.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Experience step-by-step how Sentinel-K prevents cyber-physical catastrophe on the iQOO 13 flagship node.
            </p>
          </div>

          {/* Carousel Playback & Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer border ${
                isPlaying
                  ? 'bg-[#090D15] text-[#F0B31C] border-[#090D15]'
                  : 'bg-white text-slate-700 border-black/[0.08] hover:bg-slate-50'
              } shadow-2xs`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current text-[#F0B31C]" />}
              <span>{isPlaying ? 'PAUSE CAROUSEL' : 'AUTO PLAY'}</span>
            </button>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="p-2 rounded-lg hover:bg-black/[0.05] text-slate-700 hover:text-black transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono-code font-bold text-slate-500">
                0{currentIndex + 1} / 0{CAROUSEL_SLIDES.length}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="p-2 rounded-lg hover:bg-black/[0.05] text-slate-700 hover:text-black transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Direct Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CAROUSEL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono-code text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                currentIndex === idx
                  ? 'bg-[#090D15] text-white border-[#090D15] shadow-xs'
                  : 'bg-white text-slate-600 border-black/[0.06] hover:bg-black/[0.02] hover:text-black'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                currentIndex === idx ? 'bg-[#F0B31C]' : 'bg-slate-300'
              }`} />
              <span>0{slide.id}</span>
              <span className="hidden sm:inline font-sans font-medium text-[11px] truncate max-w-[140px]">
                {slide.title}
              </span>
            </button>
          ))}
        </div>

        {/* Carousel Slide Stage */}
        <div className="relative min-h-[460px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left Column: Narrative & Hardware Context (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-black/[0.05]">
                    <div className="flex items-center gap-2 font-mono-code text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAFAF8] border border-black/[0.06] text-[#090D15] font-black">
                        {currentSlide.tag}
                      </span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold border ${currentSlide.metricColor}`}>
                      {currentSlide.metricBadge}
                    </span>
                  </div>

                  <div className="mt-4 text-xs font-mono-code text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#F0B31C]" />
                    <span>HARDWARE ENCLAVE: {currentSlide.hardware}</span>
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-sans font-black tracking-tight text-[#090D15] uppercase leading-tight">
                    {currentSlide.headline}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {currentSlide.description}
                  </p>
                </div>

                {/* Bottom Status Box */}
                <div className={`mt-6 p-4 rounded-2xl border ${
                  currentSlide.verdict.type === 'reject'
                    ? 'bg-red-50/80 border-red-200 text-red-900'
                    : currentSlide.verdict.type === 'warn'
                    ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                    : currentSlide.verdict.type === 'replan'
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-blue-50/80 border-blue-200 text-blue-900'
                }`}>
                  <div className="flex items-center gap-2 font-mono-code text-xs font-bold mb-1">
                    {currentSlide.verdict.type === 'reject' && <ShieldAlert className="w-4 h-4 text-red-600" />}
                    {currentSlide.verdict.type === 'warn' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                    {currentSlide.verdict.type === 'replan' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {currentSlide.verdict.type === 'pass' && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                    <span>VERDICT: {currentSlide.verdict.status}</span>
                  </div>
                  <p className="text-xs font-mono-code text-slate-700">
                    {currentSlide.verdict.details}
                  </p>
                </div>
              </div>

              {/* Right Column: Live Telemetry Bus Vector (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-black/[0.06] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] text-xs font-mono-code">
                    <div className="flex items-center gap-2 font-bold text-[#090D15]">
                      <Activity className="w-4 h-4 text-[#F0B31C]" />
                      <span>TELEMETRY BUS // REAL-TIME</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono-code">NODE 04</span>
                  </div>

                  <div className="mt-4 space-y-2.5 font-mono-code text-xs">
                    {currentSlide.telemetry.map((t, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-black/[0.05] shadow-2xs flex flex-col gap-1"
                      >
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                          {t.label}
                        </span>
                        <span className={`text-xs font-bold ${
                          t.status === 'hazard'
                            ? 'text-red-700 font-black'
                            : t.status === 'warn'
                            ? 'text-amber-800'
                            : t.status === 'good'
                            ? 'text-emerald-800'
                            : 'text-slate-900'
                        }`}>
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Phase Action Footnote */}
                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono-code text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-[#F0B31C]" />
                    <span>Synchronized with iQOO Terminal</span>
                  </div>
                  <button
                    onClick={nextSlide}
                    className="flex items-center gap-1 text-[#090D15] font-bold hover:underline cursor-pointer"
                  >
                    <span>Next Moment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Progress Bar */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-10 bg-[#090D15]'
                  : 'w-3 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
