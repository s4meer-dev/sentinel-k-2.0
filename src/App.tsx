import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SentinelExperienceCarousel } from './components/SentinelExperienceCarousel';
import { ProblemSection } from './components/ProblemSection';
import { SentinelPipelineSection } from './components/SentinelPipelineSection';
import { CardSwapShowcase } from './components/CardSwapShowcase';
import { DigitalTwinSection } from './components/DigitalTwinSection';
import { AgentArchitectureSection } from './components/AgentArchitectureSection';
import { DemoStorySection } from './components/DemoStorySection';
import { HackathonAlignmentSection } from './components/HackathonAlignmentSection';
import { TeamSection } from './components/TeamSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import type { ValidationPhase } from './types/sentinel';

const sectionTransition = {
  initial: { opacity: 0, y: 32, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
};

interface SectionBridgeProps {
  label: string;
  tag: string;
}

const SectionBridge = ({ label, tag }: SectionBridgeProps) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 select-none">
    <div className="flex items-center justify-between text-[9px] font-mono-code text-[#7C766C] uppercase tracking-widest border-t border-[#1A1712]/[0.08] pt-3">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1712]" />
        <span className="font-bold text-[#1A1712]">{label}</span>
      </div>
      <div className="flex items-center gap-4">
        <span>{tag}</span>
        <span className="hidden sm:inline text-[#8C8476]">AIR-GAP PROTOCOL</span>
      </div>
    </div>
  </div>
);

export function App() {
  const [currentPhase, setCurrentPhase] = useState<ValidationPhase>('INCOMING');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4F2EC] text-[#1A1712] selection:bg-[#F0B31C] selection:text-black overflow-x-hidden font-sans">
      {/* Subscrr Organic Noise Grain Texture */}
      <div className="subscrr-grain" aria-hidden="true" />

      {/* Subscrr Ambient Mesh Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-amber-100/30 via-stone-200/20 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Streamlined Floating Navbar */}
      <Navbar onVerifyClick={() => scrollTo('hero')} />

      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero
          currentPhase={currentPhase}
          onPhaseSelect={setCurrentPhase}
          onExploreClick={() => scrollTo('pipeline')}
          onKineticClick={() => scrollTo('digital-twin')}
        />

        <SectionBridge label="01 // OPERATIONAL SIGNATURES" tag="5 MOMENTS CAROUSEL" />

        {/* 2. 5 Signature Operational Moments Interactive Carousel */}
        <motion.div {...sectionTransition}>
          <SentinelExperienceCarousel onSelectPhase={setCurrentPhase} />
        </motion.div>

        <SectionBridge label="02 // THREAT SURFACE" tag="THE CYBER-PHYSICAL BLINDSPOT" />

        {/* 3. The Core Threat: Human Trust vs Physical Reality */}
        <motion.div {...sectionTransition}>
          <ProblemSection />
        </motion.div>

        <SectionBridge label="03 // VERIFICATION PIPELINE" tag="8-STAGE AUTONOMOUS PIPELINE" />

        {/* 4. The 8-Stage Autonomous Sentinel Pipeline */}
        <motion.div {...sectionTransition}>
          <SentinelPipelineSection />
        </motion.div>

        <SectionBridge label="04 // TANGIBLE VERIFICATION" tag="3D INTERACTIVE STACK" />

        {/* 5. Tangible 3D Verification Stack (React Bits CardSwap) */}
        <motion.div {...sectionTransition}>
          <CardSwapShowcase />
        </motion.div>

        <SectionBridge label="05 // HYDRODYNAMIC SIMULATION" tag="EPANET 2.2 / WNTR" />

        {/* 6. Physical Twin Simulation: EPANET / WNTR Hydrodynamics */}
        <motion.div {...sectionTransition}>
          <DigitalTwinSection />
        </motion.div>

        <SectionBridge label="06 // DISTRIBUTED AGENTS" tag="SNAPDRAGON NPU ORCHESTRATION" />

        {/* 7. Multi-Agent Coordination: 5 Specialized Roles */}
        <motion.div {...sectionTransition}>
          <AgentArchitectureSection />
        </motion.div>

        <SectionBridge label="07 // INCIDENT PLAYBOOK" tag="THE FRIDAY SURGE WALKTHROUGH" />

        {/* 8. 10-Step Incident Walkthrough: The Friday Surge Attack */}
        <motion.div {...sectionTransition}>
          <DemoStorySection />
        </motion.div>

        <SectionBridge label="08 // SUBMISSION PROFILE" tag="HACKATHON ALIGNMENT" />

        {/* 9. iQOO Hackathon 2026 Alignment */}
        <motion.div {...sectionTransition}>
          <HackathonAlignmentSection />
        </motion.div>

        {/* 10. The Engineering Team */}
        <motion.div {...sectionTransition}>
          <TeamSection />
        </motion.div>

        {/* 11. Final Call to Action */}
        <motion.div {...sectionTransition}>
          <FinalCTA
            onExploreClick={() => scrollTo('pipeline')}
            onKineticClick={() => scrollTo('digital-twin')}
          />
        </motion.div>
      </main>

      {/* 12. Engineering Footer */}
      <Footer />
    </div>
  );
}

export default App;
