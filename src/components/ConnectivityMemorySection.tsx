import React, { useState } from 'react';
import { 
  MapPin, 
  BrainCircuit, 
  Building2, 
  Coffee, 
  Home, 
  GraduationCap, 
  Sparkles
} from 'lucide-react';

interface CampusNode {
  id: string;
  name: string;
  zone: string;
  icon: string;
  pctStable5G: number;
  statusText: string;
  patternInsight: string;
  recommendation: string;
  color: string;
  ringColor: string;
  x: number; // percentage on map
  y: number;
}

export const ConnectivityMemorySection: React.FC = () => {
  const [activeCheckTier, setActiveCheckTier] = useState<number>(20); // 1, 5, 20
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>('library');

  const places: CampusNode[] = [
    {
      id: 'library',
      name: 'LIBRARY',
      zone: 'North Wing · 3rd Floor Quiet Zone',
      icon: 'library',
      pctStable5G: 82,
      statusText: '5G HIGHLY STABLE',
      patternInsight: '“Connection usually remains stable. Great for large downloads and cloud syncing.”',
      recommendation: 'Nominal 5G SA locked on n78 band. No action required.',
      color: 'text-emerald-400',
      ringColor: 'border-emerald-500 bg-emerald-500/20',
      x: 35,
      y: 30,
    },
    {
      id: 'canteen',
      name: 'CANTEEN',
      zone: 'Central Plaza · Food Court',
      icon: 'canteen',
      pctStable5G: 61,
      statusText: 'INTERMITTENT FLUX',
      patternInsight: '“Frequent 5G ? 4G transitions during high density peak hours (12–2 PM).”',
      recommendation: 'Pre-cache streaming content or prioritize LTE when moving outdoors.',
      color: 'text-amber-400',
      ringColor: 'border-amber-500 bg-amber-500/20',
      x: 65,
      y: 42,
    },
    {
      id: 'hostel',
      name: 'HOSTEL',
      zone: 'Residential Block B · Indoor Corridor',
      icon: 'hostel',
      pctStable5G: 18,
      statusText: 'FREQUENT 4G FALLBACK',
      patternInsight: '“5G often becomes unstable here due to building wall attenuation.”',
      recommendation: 'Smooth handover to campus Wi-Fi suggested automatically.',
      color: 'text-red-400',
      ringColor: 'border-red-500 bg-red-500/20',
      x: 25,
      y: 70,
    },
    {
      id: 'classroom',
      name: 'CLASSROOM',
      zone: 'Academic Complex · Basement Hall 102',
      icon: 'classroom',
      pctStable5G: 4,
      statusText: 'SHIELDED INTERIOR',
      patternInsight: '“Structural concrete blocks Sub-6GHz carrier signals almost completely.”',
      recommendation: 'Keep phone on low-power LTE or institutional Wi-Fi.',
      color: 'text-slate-400',
      ringColor: 'border-slate-500 bg-slate-500/20',
      x: 75,
      y: 75,
    },
  ];

  const currentPlace = places.find(p => p.id === selectedPlaceId) || places[0];

  return (
    <section id="memory" className="relative py-28 md:py-36 bg-[#07090E] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-950/20 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300 mb-6">
            <BrainCircuit className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-white">CONNECTIVITY MEMORY</span>
            <span className="text-slate-600">/</span>
            <span>CONTEXTUAL SPATIAL INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06]">
            YOUR PHONE <br />
            <span className="text-[#F0B31C]">LEARNS YOUR PLACES.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-heading font-medium">
            "Not a generic coverage map. Your actual connectivity experience."
          </p>

          <p className="mt-2 text-xs font-mono-code text-slate-500">
            Illustrative conceptual product visualization. Observes repeated visits without sharing location data to the cloud.
          </p>
        </div>

        {/* Confidence Accumulator Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <span className="text-xs font-mono-code text-slate-400 font-bold uppercase tracking-wider">
            OBSERVED VISIT CONFIDENCE:
          </span>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0D121E] border border-white/10 font-mono-code text-xs font-bold">
            {[1, 5, 20].map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveCheckTier(tier)}
                className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeCheckTier === tier
                    ? 'bg-[#F0B31C] text-[#07090E] shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tier === 1 && '1 CHECK'}
                {tier === 5 && '5 CHECKS'}
                {tier === 20 && '20 CHECKS'}
              </button>
            ))}
          </div>
        </div>

        {/* The Campus Map & Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Spatial Campus Map Visualizer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between text-xs font-mono-code text-slate-400 z-10">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F0B31C]" />
                CAMPUS SPATIAL SURFACE // ZONE MAPPING
              </span>
              <span className="text-[#F0B31C] font-bold">
                {activeCheckTier === 20 ? 'HIGH CONFIDENCE (94%)' : activeCheckTier === 5 ? 'MEDIUM CONFIDENCE (68%)' : 'INITIAL SAMPLING (32%)'}
              </span>
            </div>

            {/* Fictional abstract gridlines and pathway nodes */}
            <div className="absolute inset-0 network-grid opacity-40 pointer-events-none" />

            {/* Connecting abstract pathways */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="35" y1="30" x2="65" y2="42" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="65" y1="42" x2="75" y2="75" stroke="#F0B31C" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="35" y1="30" x2="25" y2="70" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="25" y1="70" x2="75" y2="75" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" />
            </svg>

            {/* Interactive Campus Nodes on Map */}
            <div className="relative w-full h-72 my-4">
              {places.map((place) => (
                <button
                  key={place.id}
                  onClick={() => setSelectedPlaceId(place.id)}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col items-center z-20 ${
                    selectedPlaceId === place.id ? 'scale-115' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border shadow-xl backdrop-blur-md transition-all ${
                    selectedPlaceId === place.id 
                      ? `${place.ringColor} border-white shadow-[0_0_20px_rgba(240,179,28,0.4)]`
                      : 'bg-[#101726]/90 border-white/20'
                  }`}>
                    {place.icon === 'library' && <Building2 className={`w-4 h-4 ${place.color}`} />}
                    {place.icon === 'canteen' && <Coffee className={`w-4 h-4 ${place.color}`} />}
                    {place.icon === 'hostel' && <Home className={`w-4 h-4 ${place.color}`} />}
                    {place.icon === 'classroom' && <GraduationCap className={`w-4 h-4 ${place.color}`} />}
                  </div>

                  <span className={`text-[10px] font-mono-code font-bold mt-1.5 px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs ${
                    selectedPlaceId === place.id ? 'bg-[#F0B31C] text-[#07090E]' : 'bg-black/70 text-slate-300 border border-white/10'
                  }`}>
                    {place.name} ({place.pctStable5G}%)
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Map Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono-code text-slate-400 z-10 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  &gt;80% 5G
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  50-80% Flux
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  &lt;20% 4G Fallback
                </span>
              </div>
              <span>TAP ANY PIN TO INSPECT</span>
            </div>
          </div>

          {/* Right: Learned Pattern Intelligence Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0B0F19] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block">
                    LOCALIZED EXPERIENTIAL MEMORY
                  </span>
                  <h3 className="text-2xl font-display font-black text-white mt-1">
                    {currentPlace.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-display font-black text-[#F0B31C]">
                    {currentPlace.pctStable5G}%
                  </span>
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase block">
                    STABLE 5G
                  </span>
                </div>
              </div>

              <div className="mt-4 text-xs font-mono-code text-slate-400">
                {currentPlace.zone}
              </div>

              {/* Pattern insight quote */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] font-mono-code text-[#F0B31C] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0B31C]" />
                  RECOGNIZED CONNECTIVITY PATTERN
                </div>
                <p className="text-sm font-display font-bold text-white leading-relaxed">
                  {currentPlace.patternInsight}
                </p>
              </div>

              {/* Actionable recommendation */}
              <div className="mt-4 p-4 rounded-2xl bg-black/50 border border-white/[0.08]">
                <div className="text-[10px] font-mono-code text-slate-400 font-bold uppercase tracking-wider mb-1">
                  RECOMMENDED ACTION
                </div>
                <p className="text-xs font-mono-code text-slate-300 leading-relaxed">
                  {currentPlace.recommendation}
                </p>
              </div>
            </div>

            {/* Historical observation tier impact */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono-code text-slate-400 flex items-center justify-between">
              <span>ACCUMULATED RECORDINGS</span>
              <span className="text-white font-bold">{activeCheckTier} Local Sessions</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
