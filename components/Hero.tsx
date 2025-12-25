
import React from 'react';
import { ArrowRight, Sparkles, Waves } from 'lucide-react';

interface HeroProps {
  setView: (view: 'home' | 'team') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Image con Overlay Marino */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000" 
          alt="Sea Background" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-ocean/50 to-white"></div>
      </div>

      {/* Anniversary Badge - Azzurro/Bianco */}
      <div className="absolute top-40 right-10 md:right-24 z-20 hidden lg:block animate-float">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full spin-slow" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text className="text-[9px] font-black uppercase tracking-[0.3em] fill-white">
              <textPath xlinkHref="#circlePath">
                Moby Dick ETS Salerno • 2005 - 2025 • 20 Anni di Visione •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-white/20 backdrop-blur-md rounded-full m-6 border border-white/30">
            <span className="text-4xl font-display font-black text-white">20</span>
            <span className="text-[8px] font-black text-white/70 uppercase">Anni</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 pt-32 md:pt-48">
        <div className="flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-white/20 rounded-full bg-white/10 backdrop-blur-xl animate-slide-up shadow-2xl">
            <Sparkles size={16} className="text-sky" />
            <span className="text-white text-[11px] font-black uppercase tracking-[0.4em] mr-[-0.4em]">Ente di Terzo Settore</span>
          </div>

          {/* Main Title - Responsive Typography Fix */}
          <div className="relative mb-10">
            <h1 className="text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tighter animate-stagger-text uppercase">
              MOBY DICK <br />
              <span className="text-sky italic drop-shadow-2xl">ETS.</span>
            </h1>
            <p className="text-xl md:text-4xl text-white/95 mt-8 max-w-4xl font-display font-bold italic tracking-tight animate-fade-in-delayed">
              "Un mare di opportunità per i giovani"
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-14 max-w-2xl font-medium leading-relaxed animate-fade-in-delayed">
            Siamo un hub dinamico dedicato all'empowerment, alla cittadinanza attiva e all'innovazione sociale in ambito nazionale ed europeo.
          </p>

          {/* Action Buttons - Azzurro e Bianco */}
          <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-in-delayed mb-20">
            <button 
              onClick={() => scrollTo('chisiamo')}
              className="group relative px-12 py-6 bg-sky text-white rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,163,255,0.3)]"
            >
              <span className="relative z-10 font-black flex items-center gap-4 uppercase text-xs">
                <span className="tracking-[0.2em] mr-[-0.2em]">SCOPRI ORA</span> 
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-ocean translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            
            <button 
              onClick={() => scrollTo('progetti')}
              className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase rounded-2xl hover:bg-white hover:text-ocean transition-all flex items-center gap-4 group"
            >
              <Waves size={18} className="group-hover:rotate-12 transition-transform text-sky" />
              <span className="tracking-[0.2em] mr-[-0.2em]">I NOSTRI PROGETTI</span>
            </button>
          </div>

          {/* Partner Quick Logos */}
          <div className="hidden md:flex items-center gap-12 opacity-60 hover:opacity-100 transition-opacity animate-fade-in-delayed">
            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest border-r border-white/20 pr-12">Partner Istituzionali</span>
            <div className="flex gap-10">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" className="h-6 grayscale brightness-200" alt="EU" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" className="h-6 grayscale brightness-200" alt="Italy" />
               <div className="text-white font-bold text-[10px] flex items-center gap-2 uppercase tracking-tighter">Europe Direct Salerno</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator SVG */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,136,117.22,218.41,114,260.5,112.39,290.5,103.1,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom { animation: slow-zoom 30s infinite ease-in-out; }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .animate-stagger-text { opacity: 0; animation: slide-up 1.4s 0.2s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: slide-up 1.4s 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default Hero;
