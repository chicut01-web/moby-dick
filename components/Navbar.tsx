
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrolled: boolean;
  setView: (view: 'home' | 'team') => void;
  currentView: 'home' | 'team';
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, setView, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestione blocco scroll body quando il menu è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Chi Siamo', id: 'chisiamo' },
    { name: 'Progetti', id: 'progetti' },
    { name: 'Servizi', id: 'servizi' },
    { name: 'News', id: 'news' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 

    // Ritardo lo scroll per permettere all'animazione di chiusura di terminare o quasi.
    // Questo evita "jank" (scatti) visivi causati dal render pesante del backdrop-blur durante lo scroll.
    setTimeout(() => {
      if (currentView !== 'home') {
        setView('home');
        // Un piccolo tick extra per permettere a React di montare la Home prima di scrollare
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      if(currentView !== 'home') {
        setView('home');
        setTimeout(() => {
           const el = document.getElementById('contatti');
           if(el) el.scrollIntoView({behavior: 'smooth'});
        }, 100);
      } else {
         const el = document.getElementById('contatti');
         if(el) el.scrollIntoView({behavior: 'smooth'});
      }
    }, 300);
  };

  // Colore del testo/elementi in base allo scroll O se il menu mobile è aperto
  const isDarkText = scrolled || isMobileMenuOpen;

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50 transition-all duration-700 ${scrolled ? 'py-4 px-10 bg-white/90 backdrop-blur-2xl rounded-3xl border border-azure shadow-[0_30px_60px_-15px_rgba(0,102,204,0.15)]' : 'py-8 px-0 bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center gap-16 relative z-50">
          <div 
            onClick={() => { 
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              setTimeout(() => {
                setView('home'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, isMobileMenuOpen ? 300 : 0);
            }}
            className="cursor-pointer group flex items-center shrink-0"
          >
            <span className={`text-xl md:text-2xl font-display font-black tracking-tighter group-hover:text-sky transition-all duration-500 ${isDarkText ? 'text-charcoal' : 'text-white'}`}>
              MOBY DICK <span className="text-sky italic">ETS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group ${scrolled ? 'text-charcoal/70 hover:text-sky' : 'text-white/80 hover:text-white'}`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={handleContactClick}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl active:scale-95 shrink-0 ${scrolled ? 'bg-ocean text-white hover:bg-sky shadow-sky/20' : 'bg-white text-charcoal hover:bg-sky hover:text-white'}`}
            >
              Contatti
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-12 h-12 flex flex-col justify-center items-end gap-1.5 z-50 relative focus:outline-none`}
            aria-label="Menu"
          >
            <span className={`h-[2.5px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2 bg-charcoal' : `w-full ${scrolled ? 'bg-charcoal' : 'bg-white'}`}`}></span>
            <span className={`h-[2.5px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-8 opacity-0' : 'w-2/3 bg-sky'}`}></span>
            <span className={`h-[2.5px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2 bg-charcoal' : `w-full ${scrolled ? 'bg-charcoal' : 'bg-white'}`}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden flex flex-col items-center justify-center will-change-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-3xl font-display font-black text-charcoal uppercase tracking-tighter hover:text-sky transition-colors transform hover:scale-110 duration-300"
              style={{ 
                transitionDelay: `${idx * 50}ms`, 
                opacity: isMobileMenuOpen ? 1 : 0, 
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={handleContactClick}
            className="mt-8 px-12 py-5 bg-ocean text-white rounded-full text-sm font-black uppercase tracking-widest shadow-xl hover:bg-sky transition-all transform hover:scale-105 active:scale-95"
            style={{ 
              transitionDelay: '250ms', 
              opacity: isMobileMenuOpen ? 1 : 0, 
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Contattaci
          </button>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-azure/50 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default Navbar;
