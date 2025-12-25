
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  setView: (view: 'home' | 'team') => void;
  currentView: 'home' | 'team';
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, setView, currentView }) => {
  const navItems = [
    { name: 'Chi Siamo', id: 'chisiamo' },
    { name: 'Progetti', id: 'progetti' },
    { name: 'Servizi', id: 'servizi' },
    { name: 'News', id: 'news' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50 transition-all duration-700 ${scrolled ? 'py-4 px-10 bg-white/90 backdrop-blur-2xl rounded-3xl border border-azure shadow-[0_30px_60px_-15px_rgba(0,102,204,0.15)]' : 'py-8 px-0 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center gap-16">
        <div 
          onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="cursor-pointer group flex items-center shrink-0"
        >
          <span className={`text-xl md:text-2xl font-display font-black tracking-tighter group-hover:text-sky transition-all duration-500 ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            MOBY DICK <span className="text-sky italic">ETS</span>
          </span>
        </div>

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
            onClick={() => { 
              if(currentView !== 'home') setView('home');
              setTimeout(() => {
                 const el = document.getElementById('contatti');
                 if(el) el.scrollIntoView({behavior: 'smooth'});
              }, 150);
            }}
            className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl active:scale-95 shrink-0 ${scrolled ? 'bg-ocean text-white hover:bg-sky shadow-sky/20' : 'bg-white text-charcoal hover:bg-sky hover:text-white'}`}
          >
            Contatti
          </button>
        </div>

        <button className={`lg:hidden w-12 h-12 flex flex-col justify-center gap-2 items-end ${scrolled ? 'text-charcoal' : 'text-white'}`}>
          <div className={`w-full h-[2.5px] rounded-full ${scrolled ? 'bg-charcoal' : 'bg-white'}`}></div>
          <div className="w-2/3 h-[2.5px] bg-sky rounded-full"></div>
          <div className={`w-full h-[2.5px] rounded-full ${scrolled ? 'bg-charcoal' : 'bg-white'}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
