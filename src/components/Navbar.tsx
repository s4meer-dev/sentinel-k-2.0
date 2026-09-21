import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface NavbarProps {
  onVerifyClick?: () => void;
  onExperienceClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onVerifyClick, onExperienceClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAction = onVerifyClick || onExperienceClick || (() => {});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'problem', 'pipeline', 'digital-twin', 'agents'];
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

  // Only 4 concise high-signal items
  const navItems = [
    { id: 'problem', label: 'The Threat' },
    { id: 'pipeline', label: 'Pipeline' },
    { id: 'digital-twin', label: 'Kinetic Twin' },
    { id: 'agents', label: 'Architecture' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div 
        ref={menuRef}
        className={`pointer-events-auto mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? 'mt-2.5 w-fit max-w-[95vw] rounded-full bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-3.5 py-1.5'
            : 'mt-3 sm:mt-4 w-[92%] max-w-6xl rounded-2xl bg-white/80 backdrop-blur-xl border border-black/[0.05] shadow-[0_2px_16px_rgba(0,0,0,0.03)] px-4 sm:px-6 py-2 sm:py-2.5'
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Mark */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className={`rounded-xl bg-[#F0B31C] text-[#090D15] flex items-center justify-center font-black transition-all duration-200 shadow-xs group-hover:scale-105 ${
              scrolled ? 'w-6 h-6 text-[10px]' : 'w-7 h-7 text-xs'
            }`}>
              SK
            </div>

            <div className="flex items-center gap-2">
              <span className={`font-sans font-black tracking-tight text-[#090D15] leading-tight transition-all duration-200 ${
                scrolled ? 'text-xs' : 'text-sm'
              }`}>
                SENTINEL-K
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono-code px-2 py-0.2 rounded-full bg-[#F5F5F2] text-slate-700 border border-black/[0.05] font-bold">
                <Activity className="w-2.5 h-2.5 text-emerald-600" />
                FIELD COPILOT
              </span>
            </div>
          </div>

          {/* Streamlined Desktop Navigation (4 Items Only) */}
          <nav className="hidden md:flex items-center gap-1 font-mono-code text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer font-medium ${
                    isActive
                      ? 'bg-[#F5F5F2] text-[#090D15] font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-[#090D15] hover:bg-black/[0.03]'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleAction}
              className={`inline-flex items-center gap-1.5 font-mono-code font-black tracking-wider uppercase transition-all duration-200 active:scale-98 cursor-pointer rounded-xl bg-[#090D15] hover:bg-slate-800 text-white ${
                scrolled
                  ? 'px-3 py-1.5 text-[10px]'
                  : 'px-3.5 sm:px-4 py-1.5 text-xs shadow-xs'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
              <span>{scrolled ? 'VERIFY' : 'VERIFY ACTION'}</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg text-slate-700 hover:text-black hover:bg-black/[0.04] p-1.5 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 pt-2.5 border-t border-black/[0.06] space-y-1 font-mono-code text-xs w-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-left ${
                    isActive
                      ? 'bg-[#F5F5F2] text-[#090D15] font-bold'
                      : 'text-slate-600 hover:bg-black/[0.03] hover:text-[#090D15]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F0B31C]" />}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAction();
                }}
                className="w-full py-2.5 rounded-xl bg-[#090D15] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs uppercase tracking-wider"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#F0B31C]" />
                <span>EXPLORE VALIDATION LOOP</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
