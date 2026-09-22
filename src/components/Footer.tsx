import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-[#ECE8DE]/30 border-t border-[#1A1712]/[0.08] text-[#7C766C] font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-[#1A1712] text-[#F0B31C] flex items-center justify-center font-black text-xs shadow-2xs">
            SK
          </div>
          <div>
            <span className="font-sans font-black text-xs text-[#1A1712] tracking-wider flex items-center gap-1.5">
              SENTINEL-K <span className="text-slate-400 font-normal">|</span> FIELD SECURITY COPILOT
            </span>
            <span className="block text-[10px] text-[#7C766C]">
              Cyber-Physical Protection for Critical Infrastructure
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center sm:text-right text-[11px] text-[#7C766C]">
          iQOO Hackathon 2026 Submission by <strong className="text-[#1A1712]">J Sashank</strong>, <strong className="text-[#1A1712]">D Mounika</strong>, and <strong className="text-[#1A1712]">S Sameer</strong>.
          <div className="text-[10px] text-slate-500 mt-0.5">
            Physical Plant Simulations Driven by WNTR / EPANET Hydrodynamic Engine · Zero Continuous Surveillance
          </div>
        </div>

      </div>
    </footer>
  );
};
