import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-[#07090E] border-t border-white/[0.08] text-slate-400 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center font-black text-xs shadow-sm">
            SK
          </div>
          <div>
            <span className="font-sans font-black text-sm text-white tracking-wider flex items-center gap-1.5">
              SENTINEL-K <span className="text-slate-600 font-normal">|</span> FIELD SECURITY COPILOT
            </span>
            <span className="block text-[10px] text-slate-500">
              Cyber-Physical Protection for Critical Infrastructure
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center sm:text-right text-[11px] text-slate-400">
          iQOO Hackathon 2026 Submission by <strong>J Sashank</strong>, <strong>D Mounika</strong>, and <strong>S Sameer</strong>.
          <div className="text-[10px] text-slate-500 mt-0.5">
            Physical Plant Simulations Driven by WNTR / EPANET Hydrodynamic Engine · Zero Continuous Surveillance
          </div>
        </div>

      </div>
    </footer>
  );
};
