import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CharactersSection } from './components/CharactersSection';
import { WorldSection } from './components/WorldSection';
import { EditionsSection } from './components/EditionsSection';
import { Footer } from './components/Footer';
import { TrailerModal } from './components/TrailerModal';

export default function App() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0A0E] text-[#F4F1F8] flex flex-col">
      <Navbar onOpenTrailer={() => setIsTrailerOpen(true)} />
      <main className="flex-1">
        <HeroSection onOpenTrailer={() => setIsTrailerOpen(true)} />
        <CharactersSection />
        <WorldSection />
        <EditionsSection />
      </main>
      <Footer />
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </div>
  );
}
