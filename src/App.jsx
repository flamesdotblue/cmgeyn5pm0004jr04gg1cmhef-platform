import React from 'react';
import Hero from './components/Hero.jsx';
import TechTools from './components/TechTools.jsx';
import Projects from './components/Projects.jsx';
import JourneyContact from './components/JourneyContact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 antialiased">
      <Hero />
      <TechTools />
      <Projects />
      <JourneyContact />
    </div>
  );
}
