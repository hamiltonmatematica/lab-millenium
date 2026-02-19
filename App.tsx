
import React from 'react';
import { Hero } from './components/Hero';
import { Units } from './components/Units';
import { InstagramFeed } from './components/InstagramFeed';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="unidades" className="py-16 md:py-24">
          <Units />
        </section>
        <section id="instagram" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-4">Siga-nos no Instagram</h2>
            <p className="text-center text-slate-500 mb-12">Acompanhe nossas novidades e dicas de saúde @labmillenium</p>
            <InstagramFeed />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
