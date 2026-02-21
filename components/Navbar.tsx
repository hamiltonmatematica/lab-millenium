
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Laboratório Millenium" className="h-20 w-auto object-contain" />

            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#unidades" className="text-sm font-medium text-slate-600 hover:text-[#1E3A8A] transition-colors">Nossas Unidades</a>
            <a href="#instagram" className="text-sm font-medium text-slate-600 hover:text-[#1E3A8A] transition-colors">Instagram</a>
            <a
              href="https://wa.me/553899204444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1e40af] transition-all shadow-lg shadow-blue-900/10"
            >
              Agendar Exame
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

