
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          <span>🔬 18 anos de tradição e confiança</span>
        </div>

        <p className="text-[#1E3A8A] font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Laboratório Millenium</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          <span className="text-[#1E3A8A]">Cuidamos da sua saúde</span> <br className="hidden sm:block" />
          <span className="text-[#B91C1C]">com excelência técnica.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          “Atendimento humanizado e infraestrutura de excelência” para garantir resultados precisos em Januária, Bonito de Minas e Itacarambi.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/553899204444"
            className="w-full sm:w-auto px-8 py-4 bg-[#1E3A8A] text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-900/20"
          >
            Falar no WhatsApp
          </a>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <span className="text-green-500">●</span>
            Atendimento Seg a Sex
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">18+</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Anos de História</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">100%</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Segurança</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">3</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Cidades</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">Exames</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Completos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
