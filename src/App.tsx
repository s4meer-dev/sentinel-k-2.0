import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SentinelExperienceCarousel } from './components/SentinelExperienceCarousel';
import { ProblemSection } from './components/ProblemSection';
import { SentinelPipelineSection } from './components/SentinelPipelineSection';
import { DigitalTwinSection } from './components/DigitalTwinSection';
import { AgentArchitectureSection } from './components/AgentArchitectureSection';
import { DemoStorySection } from './components/DemoStorySection';
import { HackathonAlignmentSection } from './components/HackathonAlignmentSection';
import { TeamSection } from './components/TeamSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import type { ValidationPhase } from './types/sentinel';

export function App() {
  const [currentPhase, setCurrentPhase] = useState<ValidationPhase>('INCOMING');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#090D15] selection:bg-[#F0B31C] selection:text-black overflow-x-hidden font-sans">
      {/* Streamlined Minimal Floating Navbar */}
      <Navbar onVerifyClick={() => scrollTo('hero')} />

      <main>
        {/* 1. Flagship iQOO 13 Hero Section */}
        <Hero
          currentPhase={currentPhase}
          onPhaseSelect={setCurrentPhase}
          onExploreClick={() => scrollTo('pipeline')}
          onKineticClick={() => scrollTo('digital-twin')}
        />

        {/* 2. 5 Signature Operational Moments Interactive Carousel */}
        <SentinelExperienceCarousel onSelectPhase={setCurrentPhase} />

        {/* 3. The Core Threat: Human Trust vs Physical Reality */}
        <ProblemSection />

        {/* 4. The 8-Stage Autonomous Sentinel Pipeline */}
        <SentinelPipelineSection />

        {/* 5. Physical Twin Simulation: EPANET / WNTR Hydrodynamics */}
        <DigitalTwinSection />

        {/* 6. Multi-Agent Coordination: 5 Specialized Roles */}
        <AgentArchitectureSection />

        {/* 7. 10-Step Incident Walkthrough: The Friday Surge Attack */}
        <DemoStorySection />

        {/* 8. iQOO Hackathon 2026 Alignment */}
        <HackathonAlignmentSection />

        {/* 9. The Engineering Team */}
        <TeamSection />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onExploreClick={() => scrollTo('pipeline')}
          onKineticClick={() => scrollTo('digital-twin')}
        />
      </main>

      {/* 11. Engineering Footer */}
      <Footer />
    </div>
  );
}

export default App;
