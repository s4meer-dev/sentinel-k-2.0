import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] py-16 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/[0.08] pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-xs">
                CI
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                iQOO × CONNECTIVITY INTELLIGENCE
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400 font-medium">
              "An experimental phone-native connectivity intelligence concept."
            </p>
            <p className="text-xs font-mono-code text-slate-500 mt-1">
              "Observe it. Understand it. Improve it."
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 font-mono-code text-xs font-semibold text-slate-300">
            <a href="#vision" className="hover:text-[#F0B31C] transition-colors">
              Vision
            </a>
            <a href="#problem" className="hover:text-[#F0B31C] transition-colors">
              The Problem
            </a>
            <a href="#experience" className="hover:text-[#F0B31C] transition-colors">
              Experience
            </a>
            <a href="#how-it-works" className="hover:text-[#F0B31C] transition-colors">
              Technology
            </a>
            <a href="#memory" className="hover:text-[#F0B31C] transition-colors">
              Memory
            </a>
            <a href="#team" className="hover:text-[#F0B31C] transition-colors">
              Team
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#F0B31C] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Technical Accuracy Note & Credits */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono-code text-slate-500">
          <p className="max-w-3xl leading-relaxed">
            <strong>TECHNICAL DISCLAIMER:</strong> Capabilities depend on device hardware, Android OS version, 
            carrier permissions, and the specific network telemetry metrics exposed to third-party applications. 
            The system operates passively within platform guardrails and does not modify baseband firmware.
          </p>
          <div className="text-slate-400 shrink-0 font-medium">
            © {new Date().getFullYear()} iQOO × Connectivity Intelligence. Built by J Sashank, D Mounika, S Sameer.
          </div>
        </div>

      </div>
    </footer>
  );
};
