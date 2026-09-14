import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onExperienceClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExperienceClick }) => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black text-xs shadow-[0_0_15px_rgba(240,179,28,0.4)] group-hover:scale-105 transition-transform">
            CI
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-white leading-tight">
              iQOO <span className="text-slate-500 font-normal">×</span> CONNECTIVITY INTELLIGENCE
            </span>
            <span className="text-[9px] font-mono-code text-[#F0B31C] uppercase tracking-widest font-semibold">
              PREDICTIVE NETWORK ENGINE
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono-code text-xs font-semibold tracking-wide text-slate-300">
          <button
            onClick={() => scrollToSection('vision')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection('problem')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            The Problem
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('memory')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Connectivity Memory
          </button>
          <button
            onClick={() => scrollToSection('future')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Future
          </button>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExperienceClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] font-mono-code font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(240,179,28,0.3)] hover:shadow-[0_0_25px_rgba(240,179,28,0.45)] active:scale-98 cursor-pointer"
          >
            <span>TRY THE EXPERIENCE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17]/95 border-b border-white/10 px-6 py-6 space-y-4 font-mono-code text-sm backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => scrollToSection('vision')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection('problem')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            The Problem
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('memory')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            Connectivity Memory
          </button>
          <button
            onClick={() => scrollToSection('future')}
            className="block text-left w-full text-slate-300 hover:text-white py-1 font-bold"
          >
            Future
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExperienceClick();
              }}
              className="w-full py-3 rounded-xl bg-[#F0B31C] text-[#07090E] font-bold text-xs tracking-wider uppercase text-center font-mono-code shadow-md"
            >
              TRY THE EXPERIENCE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
