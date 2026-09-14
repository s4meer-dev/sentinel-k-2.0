import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Coffee, 
  Home, 
  GraduationCap, 
  Sparkles
} from 'lucide-react';

interface CampusNode {
  id: string;
  name: string;
  type: string;
  icon: any;
  confidenceScore: number;
  checksCount: number;
  typical5G: 'EXCELLENT' | 'DEGRADED' | 'UNSTABLE';
  observedBand: string;
  notes: string;
}

export const ConnectivityMemorySection: React.FC = () => {
  const [activeCheckMultiplier, setActiveCheckMultiplier] = useState<1 | 5 | 20>(5);
  const [selectedNode, setSelectedNode] = useState<string>('library');

  const nodes: CampusNode[] = [
    {
      id: 'library',
      name: 'Central Library (Floor 2)',
      type: 'Study Area',
      icon: Building2,
      confidenceScore: 82,
      checksCount: 14 * activeCheckMultiplier,
      typical5G: 'EXCELLENT',
      observedBand: 'n78 SA (3.5 GHz) - Strong Signal',
      notes: 'Clean line of sight to outdoor rooftop repeater. Steady 21ms ping, excellent for research and downloads.',
    },
    {
      id: 'canteen',
      name: 'North Canteen Corner',
      type: 'Social / Dining',
      icon: Coffee,
      confidenceScore: 61,
      checksCount: 9 * activeCheckMultiplier,
      typical5G: 'UNSTABLE',
      observedBand: 'n28 (700 MHz) with heavy cell flux',
      notes: 'Dense crowd periods cause frequent handover fluttering between 5G low-band and 4G LTE Band 3.',
    },
    {
      id: 'hostel',
      name: 'Block-D Hostel Corridor',
      type: 'Residential',
      icon: Home,
      confidenceScore: 18,
      checksCount: 22 * activeCheckMultiplier,
      typical5G: 'DEGRADED',
      observedBand: '4G LTE Band 40 (Concrete Fade)',
      notes: 'Thick reinforced concrete walls attenuate mid-band 5G. System auto-prepares for 4G carrier aggregation upon entry.',
    },
    {
      id: 'classroom',
      name: 'Science Seminar Hall 04',
      type: 'Lecture Hall',
      icon: GraduationCap,
      confidenceScore: 74,
      checksCount: 18 * activeCheckMultiplier,
      typical5G: 'EXCELLENT',
      observedBand: 'n78 (3.5 GHz) Indoor Distributed Antenna',
      notes: 'Indoor DAS antenna keeps latency under 19ms. Video streaming and collaborative whiteboards work seamlessly.',
    },
  ];

  const currentNode = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section id="memory" className="relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">SPATIAL INTELLIGENCE</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">LEARNED LOCAL PATTERNS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            CONNECTIVITY <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              MEMORY.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            "Your phone doesn’t just observe the current cell tower. Over time, it learns where 5G actually works on your campus or daily commute — building a private, on-device spatial memory."
          </p>
        </div>

        {/* Observation Accumulator Filter Pills */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono-code text-slate-700">
            <Sparkles className="w-4 h-4 text-[#F0B31C]" />
            <span>Simulate On-Device Learning Accumulation:</span>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-xs">
            <button
              onClick={() => setActiveCheckMultiplier(1)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeCheckMultiplier === 1
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-black/[0.06]'
              }`}
            >
              1st Visit
            </button>
            <button
              onClick={() => setActiveCheckMultiplier(5)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeCheckMultiplier === 5
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-black/[0.06]'
              }`}
            >
              5 Repeated Visits
            </button>
            <button
              onClick={() => setActiveCheckMultiplier(20)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeCheckMultiplier === 20
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-black/[0.06]'
              }`}
            >
              20 Visits (High Confidence)
            </button>
          </div>
        </div>

        {/* 4 Campus Nodes Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {nodes.map((n) => {
            const Icon = n.icon;
            const isSelected = selectedNode === n.id;
            return (
              <div
                key={n.id}
                onClick={() => setSelectedNode(n.id)}
                className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#F0B31C] shadow-[0_8px_30px_rgba(240,179,28,0.15)] ring-2 ring-[#F0B31C]/20'
                    : 'bg-[#FAF9F5] border border-black/[0.08] hover:border-black/20 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-xs text-slate-800">
                      <Icon className="w-5 h-5 text-[#F0B31C]" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-black text-slate-950">
                        {n.name}
                      </h3>
                      <span className="text-[11px] font-mono-code text-slate-500">
                        {n.type}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono-code font-extrabold uppercase ${
                    n.typical5G === 'EXCELLENT'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : n.typical5G === 'UNSTABLE'
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {n.typical5G}
                  </span>
                </div>

                {/* Score and Bar */}
                <div className="mt-4 pt-4 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                    <span className="text-slate-500">5G RELIABILITY CONFIDENCE</span>
                    <span className="text-slate-950 font-bold">{n.confidenceScore}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/[0.06] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        n.confidenceScore > 70 ? 'bg-emerald-500' : n.confidenceScore > 40 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${n.confidenceScore}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                  <span>{n.observedBand}</span>
                  <span className="font-bold text-slate-700">{n.checksCount} samples</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Deep Inspection Box */}
        <div className="mt-8 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
            <div>
              <div className="text-xs font-mono-code text-[#B45309] font-bold uppercase tracking-wider">
                LEARNED LOCALITY INTEL // {currentNode.name}
              </div>
              <div className="text-lg font-display font-black text-slate-950 mt-1">
                {currentNode.observedBand}
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono-code text-xs">
              <span className="px-3 py-1 rounded-xl bg-[#FAF9F5] border border-black/[0.06] text-slate-700 font-bold">
                {currentNode.checksCount} Local Observations
              </span>
              <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                100% Private On-Device
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600 font-normal leading-relaxed">
            {currentNode.notes}
          </p>
        </div>

      </div>
    </section>
  );
};
