import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-[#FAF9F5] border-t border-black/[0.08] text-slate-600 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-xs shadow-xs">
            CI
          </div>
          <div>
            <span className="font-heading font-extrabold text-sm text-slate-900 tracking-wider">
              iQOO <span className="text-slate-400 font-normal">×</span> CONNECTIVITY INTELLIGENCE
            </span>
            <span className="block text-[10px] text-slate-500">
              Predictive Network Experience Engine
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center sm:text-right text-[11px] text-slate-500">
          Built for the iQOO Hackathon by <strong>J Sashank</strong>, <strong>D Mounika</strong>, and <strong>S Sameer</strong>.
          <div className="text-[10px] text-slate-400 mt-0.5">
            100% Private On-Device Cellular Analytics · No Cloud Tracking
          </div>
        </div>

      </div>
    </footer>
  );
};
