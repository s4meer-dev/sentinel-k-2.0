import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BigIdeaSection } from './components/BigIdeaSection';
import { ExperienceCarousel } from './components/ExperienceCarousel';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ConnectivityMemorySection } from './components/ConnectivityMemorySection';
import { ConnectivityJourneySection } from './components/ConnectivityJourneySection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { NoHypeAISection } from './components/NoHypeAISection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { WhyItMattersSection } from './components/WhyItMattersSection';
import { ProductPrinciplesSection } from './components/ProductPrinciplesSection';
import { TeamSection } from './components/TeamSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import type { ConnectivityState } from './types/connectivity';

export function App() {
  const [connectivityState, setConnectivityState] = useState<ConnectivityState>('CONNECTED');

  const handleExperienceClick = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisionClick = () => {
    const el = document.getElementById('vision');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-[#F0B31C] selection:text-black overflow-x-hidden font-sans">
      {/* Sticky Minimal Navbar */}
      <Navbar onExperienceClick={handleExperienceClick} />

      {/* Cinematic Hero Section with Preserved 3D iQOO Phone Simulation */}
      <main>
        <Hero
          connectivityState={connectivityState}
          setConnectivityState={setConnectivityState}
          onExperienceClick={handleExperienceClick}
          onVisionClick={handleVisionClick}
        />

        {/* Section 2: The Problem (5G icon vs Real Experience Deterioration) */}
        <ProblemSection />

        {/* Section 3: The Big Idea (Observe ? Understand ? Act ? Verify ? Learn) */}
        <BigIdeaSection />

        {/* Section 4: The Experience Carousel (Detect, Understand, Act, Verify) */}
        <ExperienceCarousel />

        {/* Section 5: Before / After (Measure the Improvement) */}
        <BeforeAfterSection />

        {/* Section 6: Connectivity Memory (Your Phone Learns Your Places) */}
        <ConnectivityMemorySection />

        {/* Section 7: Connectivity Journey (Contextual Mobility Across Campus) */}
        <ConnectivityJourneySection />

        {/* Section 8: How It Works (End-to-End System Pipeline) */}
        <ArchitectureSection />

        {/* Section 9: Intelligence Without the Hype (Not Everything Needs AI) */}
        <NoHypeAISection />

        {/* Section 10: The Future (Today: Understand, Next: Respond, Future: Predict) */}
        <FutureVisionSection />

        {/* Section 11: Why It Matters (Gaming, Calls, Everyday Use) */}
        <WhyItMattersSection />

        {/* Section 12: Product Principles (Honest, Actionable, Personal) */}
        <ProductPrinciplesSection />

        {/* Team Section (J Sashank, D Mounika, S Sameer) */}
        <TeamSection />

        {/* Final CTA */}
        <FinalCTA 
          onExperienceClick={handleExperienceClick} 
          onVisionClick={handleVisionClick} 
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
