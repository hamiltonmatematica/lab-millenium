
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-10 w-10 text-[#1E3A8A]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#1E3A8A]">Millenium</span>
                <span className="text-[10px] uppercase tracking-widest text-[#B91C1C] font-semibold -mt-1">LABORATÓRIO</span>
              </div>
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

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />
    <path d="M40 35C45 25 65 25 70 35C75 45 65 65 50 75C35 65 25 45 30 35" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 35C55 25 35 25 30 35C25 45 35 65 50 75C65 65 75 45 70 35" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
