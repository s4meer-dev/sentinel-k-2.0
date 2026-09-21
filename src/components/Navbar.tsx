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

      const sections = [
        'hero',
        'problem',
        'big-idea',
        'pipeline',
        'two-layers',
        'phone-node',
        'office-kit',
        'kinetic',
        'digital-twin',
        'agents',
        'why-not-llm',
        'demo-story',
        'differentiators',
        'tech-stack',
        'metrics',
        'hackathon-alignment',
        'team',
      ];
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

  const navItems = [
    { id: 'problem', label: 'The Threat' },
    { id: 'big-idea', label: 'Core Principle' },
    { id: 'pipeline', label: '8-Stage Pipeline' },
    { id: 'two-layers', label: 'Dual Domain' },
    { id: 'phone-node', label: 'iQOO Node' },
    { id: 'office-kit', label: 'Office Kit' },
    { id: 'kinetic', label: 'Kinetic Validation' },
    { id: 'digital-twin', label: 'Digital Twin' },
    { id: 'agents', label: 'Agents' },
    { id: 'demo-story', label: 'Demo Story' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div 
        ref={menuRef}
        className={`pointer-events-auto mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? 'mt-2.5 sm:mt-3 w-fit max-w-[95vw] rounded-full bg-[#0B0F17]/95 backdrop-blur-2xl border border-white/10 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] px-3 sm:px-4 py-1.5'
            : 'mt-3 sm:mt-4 w-[95%] max-w-7xl rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.7)] px-4 sm:px-6 py-2.5 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand & System Moniker */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className={`rounded-xl bg-[#F0B31C] text-[#07090E] flex items-center justify-center font-black transition-all duration-300 shadow-[0_0_15px_rgba(240,179,28,0.4)] group-hover:scale-105 ${
              scrolled ? 'w-7 h-7 text-[11px]' : 'w-8 h-8 text-xs'
            }`}>
              SK
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`font-display font-black tracking-tight text-white leading-tight transition-all duration-200 ${
                  scrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
                }`}>
                  SENTINEL-K
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono-code px-2 py-0.2 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-bold">
                  <Activity className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
                  FIELD COPILOT
                </span>
              </div>
              
              {!scrolled && (
                <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-widest font-semibold hidden md:inline">
                  iQOO × CYBER-PHYSICAL INFRASTRUCTURE DEFENSE
                </span>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden xl:flex items-center font-mono-code transition-all duration-300 ${
            scrolled 
              ? 'gap-1 px-2 py-0.5 rounded-full bg-[#07090E]/80 border border-white/5' 
              : 'gap-1 text-xs font-semibold text-slate-300'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    scrolled
                      ? `px-2.5 py-1 rounded-full text-[11px] font-medium ${
                          isActive 
                            ? 'bg-white/15 text-cyan-300 shadow-xs border border-cyan-500/30 font-bold' 
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`
                      : `px-3 py-1.5 rounded-lg text-xs font-medium ${
                          isActive 
                            ? 'bg-white/10 text-cyan-300 font-bold border border-cyan-500/20' 
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`
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
              className={`inline-flex items-center gap-1.5 font-mono-code font-black tracking-wider uppercase transition-all duration-200 active:scale-98 cursor-pointer ${
                scrolled
                  ? 'px-3 py-1.5 rounded-full bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-[10px] sm:text-[11px] shadow-[0_0_15px_rgba(240,179,28,0.35)]'
                  : 'px-3.5 sm:px-4 py-2 rounded-xl bg-[#F0B31C] hover:bg-[#F5BE30] text-[#07090E] text-xs shadow-[0_0_20px_rgba(240,179,28,0.4)]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#07090E]" />
              <span>{scrolled ? 'VALIDATE' : 'VERIFY ACTION'}</span>
              <ArrowRight className={`${scrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden rounded-lg text-slate-400 hover:text-white hover:bg-white/10 p-1.5 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 space-y-1 font-mono-code text-xs w-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-left ${
                    isActive
                      ? 'bg-white/10 text-cyan-300 font-bold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
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
                className="w-full py-2.5 rounded-xl bg-[#F0B31C] text-[#07090E] font-black text-xs flex items-center justify-center gap-1.5 shadow-sm uppercase tracking-wider"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>EXPLORE VALIDATION LOOP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
