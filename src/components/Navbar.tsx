import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Radio } from 'lucide-react';

interface NavbarProps {
  onExperienceClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExperienceClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('vision');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      // Active section detection
      const sections = ['vision', 'problem', 'experience', 'how-it-works', 'memory', 'future'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'problem', label: 'The Problem' },
    { id: 'experience', label: 'Experience' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'memory', label: 'Memory' },
    { id: 'future', label: 'Future' },
  ];

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full bg-white/92 backdrop-blur-xl border border-black/[0.08] shadow-[0_12px_35px_-5px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] py-2 sm:py-2 px-3.5 sm:px-5'
            : 'top-0 left-0 right-0 w-full bg-[#FAF9F5]/80 backdrop-blur-sm border-b border-black/[0.04] py-4 sm:py-5 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? 'w-full' : 'max-w-7xl mx-auto'}`}>
          
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            <div className={`rounded-xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black transition-all duration-300 shadow-[0_2px_10px_rgba(240,179,28,0.35)] group-hover:scale-105 ${
              scrolled ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'
            }`}>
              CI
            </div>

            <div className="flex flex-col">
              <span className={`font-heading font-extrabold tracking-wider text-slate-900 leading-tight transition-all duration-200 ${
                scrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}>
                iQOO <span className="text-slate-400 font-normal">×</span> CONNECTIVITY <span className="hidden sm:inline">INTELLIGENCE</span>
              </span>
              
              {!scrolled && (
                <span className="text-[9px] font-mono-code text-amber-700 uppercase tracking-widest font-bold hidden md:inline">
                  PREDICTIVE NETWORK ENGINE
                </span>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center font-mono-code text-xs font-bold transition-all duration-300 ${
            scrolled ? 'gap-2 lg:gap-3 bg-[#FAF9F5]/70 px-2 py-1 rounded-full border border-black/[0.04]' : 'gap-6 xl:gap-7 text-slate-600'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 cursor-pointer ${
                    scrolled
                      ? `px-3 py-1 rounded-full text-[11px] ${
                          isActive 
                            ? 'bg-slate-900 text-white shadow-xs font-extrabold' 
                            : 'text-slate-600 hover:text-slate-950 hover:bg-black/[0.04]'
                        }`
                      : `relative py-1 hover:text-slate-950 ${
                          isActive ? 'text-slate-950 font-black' : 'text-slate-600'
                        }`
                  }`}
                >
                  <span>{item.label}</span>
                  {!scrolled && isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F0B31C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onExperienceClick}
              className={`inline-flex items-center gap-1.5 font-mono-code font-extrabold tracking-wider uppercase transition-all duration-200 active:scale-98 cursor-pointer ${
                scrolled
                  ? 'px-3 sm:px-4 py-1.5 rounded-full bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-[10px] sm:text-[11px] shadow-[0_2px_12px_rgba(240,179,28,0.3)] hover:shadow-[0_4px_18px_rgba(240,179,28,0.45)]'
                  : 'px-4 sm:px-5 py-2.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-xs shadow-[0_2px_15px_rgba(240,179,28,0.35)] hover:shadow-[0_4px_20px_rgba(240,179,28,0.5)]'
              }`}
            >
              <span>{scrolled ? 'DEMO' : 'TRY THE EXPERIENCE'}</span>
              <ArrowRight className={`${scrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden rounded-full text-slate-700 hover:text-black hover:bg-black/[0.05] transition-colors ${
                scrolled ? 'p-1.5' : 'p-2'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-3 rounded-2xl bg-[#FAF9F5]/98 border border-black/[0.08] p-4 space-y-2 font-mono-code text-xs backdrop-blur-2xl shadow-xl ${
            scrolled ? 'absolute top-full left-0 right-0 w-full' : ''
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between w-full p-2.5 rounded-xl text-left font-bold transition-all ${
                    isActive 
                      ? 'bg-[#F0B31C] text-[#07090E]' 
                      : 'text-slate-700 hover:text-black hover:bg-black/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Radio className="w-3 h-3 text-[#07090E]" />}
                </button>
              );
            })}

            <div className="pt-2 border-t border-black/[0.06]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExperienceClick();
                }}
                className="w-full py-2.5 rounded-xl bg-[#F0B31C] text-[#07090E] font-bold text-xs tracking-wider uppercase text-center font-mono-code shadow-sm cursor-pointer"
              >
                TRY THE EXPERIENCE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
