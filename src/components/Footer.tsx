import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 bg-[#FAFAF8] border-t border-black/[0.06] text-slate-600 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#090D15] text-[#F0B31C] flex items-center justify-center font-black text-xs shadow-2xs">
            SK
          </div>
          <div>
            <span className="font-sans font-black text-xs text-[#090D15] tracking-wider flex items-center gap-1.5">
              SENTINEL-K <span className="text-slate-400 font-normal">|</span> FIELD SECURITY COPILOT
            </span>
            <span className="block text-[10px] text-slate-500">
              Cyber-Physical Protection for Critical Infrastructure
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center sm:text-right text-[11px] text-slate-500">
          iQOO Hackathon 2026 Submission by <strong>J Sashank</strong>, <strong>D Mounika</strong>, and <strong>S Sameer</strong>.
          <div className="text-[10px] text-slate-400 mt-0.5">
            Physical Plant Simulations Driven by WNTR / EPANET Hydrodynamic Engine · Zero Continuous Surveillance
          </div>
        </div>

      </div>
    </footer>
  );
};
