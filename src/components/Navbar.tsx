import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Radio } from 'lucide-react';

interface NavbarProps {
  onExperienceClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExperienceClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('vision');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Robust getBoundingClientRect section detector
      const sections = ['vision', 'problem', 'experience', 'how-it-works', 'memory', 'future'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'problem', label: 'Problem' },
    { id: 'experience', label: 'Experience' },
    { id: 'how-it-works', label: 'Architecture' },
    { id: 'memory', label: 'Memory' },
    { id: 'future', label: 'Future' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div 
        ref={menuRef}
        className={`pointer-events-auto mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? 'mt-2.5 sm:mt-3.5 w-fit max-w-[94vw] rounded-full bg-white/95 backdrop-blur-xl border border-black/[0.09] shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)] px-3 sm:px-4 py-1.5'
            : 'w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            <div className={`rounded-xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black transition-all duration-300 shadow-[0_2px_10px_rgba(240,179,28,0.35)] group-hover:scale-105 ${
              scrolled ? 'w-6 h-6 sm:w-7 sm:h-7 text-[10px]' : 'w-8 h-8 text-xs'
            }`}>
              CI
            </div>

            <div className="flex flex-col">
              <span className={`font-heading font-extrabold tracking-wider text-slate-900 leading-tight transition-all duration-200 ${
                scrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}>
                iQOO <span className="text-slate-400 font-normal">×</span>{' '}
                {scrolled ? (
                  <>
                    <span className="sm:hidden text-amber-700">CI</span>
                    <span className="hidden sm:inline">CONNECTIVITY</span>
                  </>
                ) : (
                  <>
                    CONNECTIVITY <span className="hidden sm:inline">INTELLIGENCE</span>
                  </>
                )}
              </span>
              
              {!scrolled && (
                <span className="text-[9px] font-mono-code text-amber-700 uppercase tracking-widest font-bold hidden md:inline">
                  PREDICTIVE NETWORK ENGINE
                </span>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center font-mono-code transition-all duration-300 ${
            scrolled 
              ? 'gap-0.5 px-2 py-0.5 rounded-full bg-[#FAF9F5] border border-black/[0.04]' 
              : 'gap-5 xl:gap-7 text-xs font-bold text-slate-600'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    scrolled
                      ? `px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          isActive 
                            ? 'bg-slate-950 text-white shadow-xs' 
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
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onExperienceClick}
              className={`inline-flex items-center gap-1 font-mono-code font-extrabold tracking-wider uppercase transition-all duration-200 active:scale-98 cursor-pointer ${
                scrolled
                  ? 'px-3 py-1.5 rounded-full bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-[10px] sm:text-[11px] shadow-[0_2px_10px_rgba(240,179,28,0.3)] hover:shadow-[0_4px_16px_rgba(240,179,28,0.45)]'
                  : 'px-4 sm:px-5 py-2.5 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-xs shadow-[0_2px_15px_rgba(240,179,28,0.35)] hover:shadow-[0_4px_20px_rgba(240,179,28,0.5)]'
              }`}
            >
              <span>{scrolled ? 'DEMO' : 'TRY THE EXPERIENCE'}</span>
              <ArrowRight className={`${scrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden rounded-full text-slate-700 hover:text-black hover:bg-black/[0.05] transition-colors cursor-pointer ${
                scrolled ? 'p-1' : 'p-2'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 rounded-2xl bg-white/98 border border-black/[0.08] p-3 space-y-1 font-mono-code text-xs backdrop-blur-2xl shadow-2xl w-full max-w-xs mx-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-left font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#F0B31C] text-[#07090E]' 
                      : 'text-slate-700 hover:text-black hover:bg-black/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Radio className="w-3.5 h-3.5 text-[#07090E]" />}
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
      </div>
    </header>
  );
};
