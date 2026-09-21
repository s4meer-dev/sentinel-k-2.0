import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BigIdeaSection } from './components/BigIdeaSection';
import { SentinelPipelineSection } from './components/SentinelPipelineSection';
import { TwoLayersSection } from './components/TwoLayersSection';
import { PhoneNodeSection } from './components/PhoneNodeSection';
import { OfficeKitSection } from './components/OfficeKitSection';
import { KineticValidationSection } from './components/KineticValidationSection';
import { DigitalTwinSection } from './components/DigitalTwinSection';
import { AgentArchitectureSection } from './components/AgentArchitectureSection';
import { WhyNotLLMSection } from './components/WhyNotLLMSection';
import { DemoStorySection } from './components/DemoStorySection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { TechStackSection } from './components/TechStackSection';
import { ValidationMetricsSection } from './components/ValidationMetricsSection';
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
      {/* Streamlined Minimal Navbar */}
      <Navbar onVerifyClick={() => scrollTo('hero')} />

      {/* Cinematic Hero Section: Phone Node + Evidence Stream + Digital Twin */}
      <main>
        <Hero
          currentPhase={currentPhase}
          onPhaseSelect={setCurrentPhase}
          onExploreClick={() => scrollTo('pipeline')}
          onKineticClick={() => scrollTo('kinetic')}
        />

        {/* Section 2: The Problem (Human Trust Compromise vs Cyber-Physical Reality) */}
        <ProblemSection />

        {/* Section 3: The Big Idea (Reason. Measure. Verify. Then Act.) */}
        <BigIdeaSection />

        {/* Section 4: The 8-Stage Sentinel Pipeline */}
        <SentinelPipelineSection />

        {/* Section 5: Dual-Domain Verification (Human Security + Kinetic Twin) */}
        <TwoLayersSection />

        {/* Section 6: The Phone is the Field Security Node */}
        <PhoneNodeSection />

        {/* Section 7: OriginOS Office Kit Ecosystem Synergy */}
        <OfficeKitSection />

        {/* Section 8: Kinetic Validation (Reject -> Replan Signature Loop) */}
        <KineticValidationSection />

        {/* Section 9: Digital Twin (WNTR / EPANET Hydrodynamic Simulation) */}
        <DigitalTwinSection />

        {/* Section 10: Multi-Agent Architecture (5 Specialized Agents) */}
        <AgentArchitectureSection />

        {/* Section 11: Why Not Just an LLM? (Propose vs Prove) */}
        <WhyNotLLMSection />

        {/* Section 12: 10-Step Incident Walk (The Friday Afternoon Surge Attack) */}
        <DemoStorySection />

        {/* Section 13: Differentiators (Cross-Domain Causal Verification) */}
        <DifferentiatorSection />

        {/* Section 14: Tech Stack & Maturity Matrix */}
        <TechStackSection />

        {/* Section 15: Validation Metrics & Benchmarks */}
        <ValidationMetricsSection />

        {/* Section 16: iQOO Hackathon Alignment */}
        <HackathonAlignmentSection />

        {/* Section 17: Meet the Builders */}
        <TeamSection />

        {/* Section 18: Final Call to Action */}
        <FinalCTA
          onExploreClick={() => scrollTo('pipeline')}
          onKineticClick={() => scrollTo('kinetic')}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
