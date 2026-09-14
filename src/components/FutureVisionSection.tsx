import React from 'react';
import { 
  Sparkles, 
  Video, 
  ShieldAlert, 
  CheckCircle2, 
  Compass
} from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  const roadmap = [
    {
      era: 'TODAY // MVP',
      title: 'UNDERSTAND',
      subhead: '“See what’s actually happening.”',
      detail: 'Detect 5G/4G handovers, quantify link instability, and observe real-world connection quality in plain English.',
      status: 'SHIPPED IN PROTOTYPE',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      era: 'NEXT // STAGE 2',
      title: 'RESPOND',
      subhead: '“Take supported recovery actions.”',
      detail: 'Recommend carrier profile refreshes, optimize network aggregation, and verify measurable improvement post-action.',
      status: 'ARCHITECTURE SPECIFIED',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
      era: 'FUTURE // VISION',
      title: 'PREDICT',
      subhead: '“Anticipate connection drops.”',
      detail: 'Anticipate degradation before an important video call or gaming match, preparing transitions proactively.',
      status: 'LONG-TERM HORIZON',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
  ];

  return (
    <section id="future" className="scroll-mt-24 relative py-28 md:py-36 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/[0.08] shadow-xs text-xs font-mono-code text-slate-700 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F0B31C]" />
            <span className="font-extrabold text-slate-900">LONG-TERM TRAJECTORY</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">PREDICTIVE NETWORKING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 uppercase leading-[1.05]">
            FROM REACTIVE TO <br />
            <span className="text-[#F0B31C] bg-slate-900 px-3 py-0.5 rounded-xl inline-block mt-1">
              PREDICTIVE CONNECTIVITY.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The ultimate vision is not just helping when connections fail, but predicting drops before you ever notice them.
          </p>
        </div>

        {/* 3 Roadmap Pillars */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmap.map((r, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-xs hover:border-[#F0B31C]/60 hover:shadow-[0_10px_35px_rgba(240,179,28,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code font-bold text-slate-500">
                    {r.era}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono-code font-extrabold uppercase border ${r.statusColor}`}>
                    {r.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                  {r.title}
                </h3>

                <div className="text-sm font-display font-bold text-slate-700 italic mt-2">
                  {r.subhead}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {r.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span>STAGE 0{i + 1} EVOLUTION</span>
                <Compass className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Concrete Future Scenario Example Box */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-sm">
          <div className="flex items-center gap-3 text-xs font-mono-code text-amber-700 font-bold uppercase tracking-wider mb-3">
            <Video className="w-4 h-4 text-[#F0B31C]" />
            <span>REAL-WORLD FUTURE SCENARIO: IMPORTANT VIDEO CALL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-4 rounded-2xl bg-white border border-red-200">
              <div className="flex items-center gap-2 text-xs font-mono-code text-red-700 font-bold mb-2">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>TODAY'S REACTIVE PHONE</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                User enters stairwell during an interview call. Phone freezes, audio garbles, call disconnects. User frantically toggles Airplane Mode.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-200">
              <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-700 font-bold mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WITH PREDICTIVE INTELLIGENCE</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                System recognizes stairwell entry from spatial memory. Pre-buffers stream and smoothly completes carrier fallback before packet loss occurs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
