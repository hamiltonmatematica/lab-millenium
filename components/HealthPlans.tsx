import React from 'react';

const plans = Array.from({ length: 11 }, (_, i) => i + 1);

export const HealthPlans: React.FC = () => {
    return (
        <section id="convenios" className="py-12 md:py-16 bg-white overflow-hidden border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-4 mb-10">
                <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">Planos que Atendemos</h2>
                <p className="text-center text-slate-500 mt-2">Trabalhamos com os melhores convênios para cuidar da sua saúde com tranquilidade</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
                    {[...plans, ...plans].map((num, i) => (
                        <div key={`plan-${i}`} className="flex-shrink-0 mx-6 md:mx-10 w-32 md:w-44 h-16 md:h-20 flex items-center justify-center transition-all duration-300">
                            <img
                                src={`/Planos${num}.png`}
                                alt={`Plano de Saúde ${num}`}
                                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
        </section>
    );
};
