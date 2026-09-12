import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F7F2]/90 backdrop-blur-xl border-b border-[#0A192F]/[0.08] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with iQOO Yellow Mark */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#0A192F] text-[#F0B31C] flex items-center justify-center shadow-xs group-hover:bg-[#1D4ED8] transition-colors border border-black/10">
            <Flame className="w-4 h-4 fill-current text-[#F0B31C]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-lg tracking-wider text-[#0A192F]">
                iQOO
              </span>
              <span className="text-[10px] font-mono-code font-bold text-[#0A192F]/40">×</span>
              <span className="font-heading font-extrabold text-lg tracking-wider text-[#0A192F]">
                THERMALYZE
              </span>
            </div>
            <span className="text-[8px] font-mono-code text-[#0A192F]/60 -mt-1 tracking-widest uppercase font-bold">
              iQOO PERFORMANCE FORENSICS
            </span>
          </div>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono-code font-bold text-[#0A192F]/70">
          <button
            onClick={() => scrollToSection('problem')}
            className="hover:text-[#1D4ED8] transition-colors cursor-pointer uppercase tracking-wider"
          >
            PRODUCT
          </button>
          <button
            onClick={() => scrollToSection('timeline')}
            className="hover:text-[#1D4ED8] transition-colors cursor-pointer uppercase tracking-wider"
          >
            THE TIMELINE
          </button>
          <button
            onClick={() => scrollToSection('forensics')}
            className="hover:text-[#1D4ED8] transition-colors cursor-pointer uppercase tracking-wider"
          >
            FORENSICS
          </button>
          <button
            onClick={() => scrollToSection('technology')}
            className="hover:text-[#1D4ED8] transition-colors cursor-pointer uppercase tracking-wider"
          >
            TECHNOLOGY
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="hover:text-[#1D4ED8] transition-colors cursor-pointer uppercase tracking-wider"
          >
            TEAM
          </button>
        </div>

        {/* Right Action Button: iQOO Brand Yellow */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-black font-mono-code text-xs font-black transition-all duration-200 shadow-[0_2px_10px_rgba(240,179,28,0.3)] active:scale-98 cursor-pointer border border-black/10"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white border border-[#0A192F]/10 text-[#0A192F]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F7F2] border-b border-[#0A192F]/10 px-6 py-6 space-y-4 font-mono-code text-sm shadow-lg">
          <button
            onClick={() => scrollToSection('problem')}
            className="block text-left w-full text-[#0A192F]/80 hover:text-[#1D4ED8] py-1 font-bold"
          >
            PRODUCT
          </button>
          <button
            onClick={() => scrollToSection('timeline')}
            className="block text-left w-full text-[#0A192F]/80 hover:text-[#1D4ED8] py-1 font-bold"
          >
            THE TIMELINE
          </button>
          <button
            onClick={() => scrollToSection('forensics')}
            className="block text-left w-full text-[#0A192F]/80 hover:text-[#1D4ED8] py-1 font-bold"
          >
            FORENSICS
          </button>
          <button
            onClick={() => scrollToSection('technology')}
            className="block text-left w-full text-[#0A192F]/80 hover:text-[#1D4ED8] py-1 font-bold"
          >
            TECHNOLOGY
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="block text-left w-full text-[#0A192F]/80 hover:text-[#1D4ED8] py-1 font-bold"
          >
            TEAM
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-black font-black text-xs border border-black/10"
            >
              <span>EXPLORE THERMALYZE</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
