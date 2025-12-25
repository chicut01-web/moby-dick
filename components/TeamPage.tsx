
import React, { useEffect } from 'react';
import { TEAM } from '../constants';
import { ArrowLeft, Mail, ChevronRight } from 'lucide-react';

interface TeamPageProps {
  onBack: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Sezione */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-10">
          <button 
            onClick={onBack}
            className="flex items-center text-dark font-bold hover:text-ocean transition-all group cursor-pointer bg-azure/50 px-8 py-4 rounded-full hover:shadow-lg active:scale-95"
          >
            <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" /> 
            Torna alla Home
          </button>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-display font-black text-dark mb-6 leading-tight uppercase">
              IL NOSTRO <span className="text-ocean italic">TEAM.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mx-auto font-medium">
              Esperti, progettisti e professionisti uniti da vent'anni di passione per il futuro dei giovani.
            </p>
          </div>
          <div className="hidden lg:block w-40"></div>
        </div>

        {/* Griglia Staff */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member, idx) => (
            <div 
              key={member.id} 
              className={`bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-ocean/20 transition-all duration-700 group border border-gray-100 flex flex-col animate-card-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white text-ocean w-14 h-14 rounded-full shadow-2xl hover:bg-coral hover:text-white transition-all flex items-center justify-center transform hover:scale-110">
                    <Mail size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-10 text-center bg-white flex-1 flex flex-col justify-center relative overflow-hidden">
                <h4 className="text-2xl font-display font-black text-charcoal mb-2 group-hover:text-ocean transition-colors">
                  {member.name}
                </h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Sezione Team */}
        <div className="mt-32 relative rounded-[4rem] overflow-hidden group">
          <div className="absolute inset-0 bg-ocean">
             <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[2s]" alt="Office" />
          </div>
          <div className="relative z-10 py-24 px-12 text-center text-white">
            <h3 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter">Vuoi collaborare con noi?</h3>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
              Siamo sempre alla ricerca di nuovi talenti e idee visionarie per far crescere la nostra community.
            </p>
            <button 
              onClick={() => { onBack(); setTimeout(() => document.getElementById('contatti')?.scrollIntoView({behavior: 'smooth'}), 500); }}
              className="bg-white text-ocean px-12 py-5 rounded-full font-bold text-lg hover:bg-coral hover:text-white transition-all shadow-2xl flex items-center mx-auto group active:scale-95"
            >
              Scrivici Ora <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes card-in {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-in {
          opacity: 0;
          animation: card-in 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
