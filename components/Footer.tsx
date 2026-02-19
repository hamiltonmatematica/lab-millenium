
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LogoIconWhite className="h-10 w-10 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">Millenium</span>
                <span className="text-[10px] uppercase tracking-widest text-red-500 font-semibold -mt-1">LABORATÓRIO</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Tradição e tecnologia a serviço da sua vida. Há mais de 18 anos realizando exames com precisão e carinho.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Unidades</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Januária - MG</li>
              <li>Bonito de Minas - MG</li>
              <li>Itacarambi - MG</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato Central</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-white font-semibold">T:</span> (38) 3621-4250
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-semibold">W:</span> +55 38 9920-4444
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-semibold">E:</span> contato@labmillenium.com.br
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Laboratório Millenium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const LogoIconWhite = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 35C45 25 65 25 70 35C75 45 65 65 50 75C35 65 25 45 30 35" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 35C55 25 35 25 30 35C25 45 35 65 50 75C65 65 75 45 70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
