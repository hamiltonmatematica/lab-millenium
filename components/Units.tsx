
import React from 'react';

const units = [
  {
    city: 'Januária',
    address: 'R. Cel. Serrão, 102 A - Centro',
    phones: ['(38) 3621-4250', '(38) 9920-4444 (WhatsApp)'],
    primary: true
  },
  {
    city: 'Bonito de Minas',
    address: 'Praça Bom Jesus, 170 - Centro',
    phones: ['(38) 3621-4250'],
  },
  {
    city: 'Itacarambi',
    address: 'R. Carlúcio Gonçalves, 267',
    phones: ['(38) 3621-4250'],
  }
];

export const Units: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Nossas Unidades</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Encontre o Laboratório Millenium mais próximo de você e receba um atendimento de alta qualidade.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {units.map((unit, idx) => (
          <div key={idx} className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">{unit.city}</h3>
                <span className="bg-blue-50 px-3 py-1 rounded-full text-[10px] font-bold text-[#1E3A8A] uppercase tracking-wider">Unidade</span>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <MapPinIcon className="h-5 w-5 text-[#B91C1C] flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed">{unit.address}</p>
              </div>
              
              <div className="space-y-4">
                {unit.phones.map((phone, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-3">
                    {phone.includes('WhatsApp') ? (
                      <WhatsAppIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <PhoneIcon className="h-5 w-5 text-blue-500" />
                    )}
                    <span className="text-sm font-semibold text-slate-700">{phone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-50">
              <a 
                href={`https://www.google.com/maps/search/${encodeURIComponent(`Millenium Laboratorio ${unit.city} ${unit.address}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-[#1E3A8A] hover:text-[#B91C1C] transition-colors"
              >
                Ver localização no mapa
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);
