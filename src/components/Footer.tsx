import React from 'react';
import { Flame, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#0A192F]/10 py-16 text-[#0A192F]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#0A192F]/[0.08] pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#0A192F] text-[#F0B31C] flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#F0B31C]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-[#0A192F]">
                iQOO × THERMALYZE
              </span>
            </div>
            <p className="mt-3 text-sm text-[#0A192F]/80 font-sans font-medium">
              "Thermal intelligence for your phone."
            </p>
            <p className="text-xs font-mono-code text-[#0A192F]/50 mt-1">
              "Understand the heat. Before it kills the performance."
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 font-mono-code text-xs font-semibold text-[#0A192F]">
            <a href="#problem" className="hover:text-[#1D4ED8] transition-colors">
              Product
            </a>
            <a href="#timeline" className="hover:text-[#1D4ED8] transition-colors">
              The Timeline
            </a>
            <a href="#forensics" className="hover:text-[#1D4ED8] transition-colors">
              Forensics
            </a>
            <a href="#technology" className="hover:text-[#1D4ED8] transition-colors">
              Technology
            </a>
            <a href="#team" className="hover:text-[#1D4ED8] transition-colors">
              Team
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#1D4ED8] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Technical Accuracy Note & Credits */}
        <div className="mt-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono-code text-[#0A192F]/50">
          <p className="max-w-3xl">
            <strong>TECHNICAL NOTE:</strong> Android PowerManager and iQOO Monster Engine provide platform thermal severity states. 
            ThermAlyze operates as an observational telemetry engine; correlations are statistically scored as probable causes 
            and correlated background workloads.
          </p>
          <div className="text-[#0A192F]/60 shrink-0 font-medium">
            © {new Date().getFullYear()} iQOO × ThermAlyze Core. Built by J Sashank, D Mounika, S Sameer.
          </div>
        </div>

      </div>
    </footer>
  );
};
