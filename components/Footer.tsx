
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Laboratório Millenium" className="h-14 w-auto object-contain" />

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

