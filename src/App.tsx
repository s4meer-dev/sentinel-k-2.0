import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DetectionCards } from './components/DetectionCards';
import { ThermalTimelineSection } from './components/ThermalTimelineSection';
import { ForensicsSection } from './components/ForensicsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DeviceFirstSection } from './components/DeviceFirstSection';
import { TeamSection } from './components/TeamSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import type { ThermalState } from './types/telemetry';

export function App() {
  const [thermalState, setThermalState] = useState<ThermalState>('NORMAL');

  const handleExploreClick = () => {
    const el = document.getElementById('problem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTimelineClick = () => {
    const el = document.getElementById('timeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#0A192F] selection:bg-[#F0B31C] selection:text-black overflow-x-hidden font-sans">
      {/* Sticky Minimal Navbar */}
      <Navbar onExploreClick={handleExploreClick} />

      {/* Editorial Hero Section with Live Realistic Phone Simulation */}
      <main>
        <Hero
          thermalState={thermalState}
          setThermalState={setThermalState}
          onExploreClick={handleExploreClick}
          onTimelineClick={handleTimelineClick}
        />

        {/* Section: The Moment Performance Changes (90 FPS vs 41°C) */}
        <ProblemSection />

        {/* Section: Detect / Correlate / Explain (Distinct Editorial Compositions) */}
        <DetectionCards />

        {/* Section: The Thermal Event Timeline ('See what your phone sees') */}
        <ThermalTimelineSection />

        {/* Section: Forensic Context ('Raw signals aren't the answer. Context is.') */}
        <ForensicsSection />

        {/* Section: Technical Architecture */}
        <ArchitectureSection />

        {/* Section: Phone-First Design */}
        <DeviceFirstSection />

        {/* Section: Built By (J Sashank, D Mounika, S Sameer) */}
        <TeamSection />

        {/* Section: Final Editorial Ending */}
        <FinalCTA onExploreClick={handleExploreClick} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
