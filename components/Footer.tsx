
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'team') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const partners = [
    { name: 'Servizio Civile', url: 'https://picsum.photos/seed/pc1/200/80' },
    { name: 'Europe Direct', url: 'https://picsum.photos/seed/pc2/200/80' },
    { name: 'Consiglio Giovani', url: 'https://picsum.photos/seed/pc3/200/80' },
    { name: 'MODAVI', url: 'https://picsum.photos/seed/pc4/200/80' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-display font-black mb-8 tracking-tighter">MOBY DICK <span className="text-ocean italic text-outline">ETS</span></h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-12">
              Un laboratorio di innovazione sociale dedicato alle nuove generazioni, orientato verso il futuro e l'eccellenza europea.
            </p>
            <div className="flex gap-4">
              {['FB', 'LI', 'IG', 'YT'].map(s => (
                <a key={s} href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black hover:bg-ocean hover:border-ocean transition-all">{s}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-black tracking-widest text-ocean uppercase mb-8">Navigation</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#chisiamo" className="hover:text-white transition-colors">Vision</a></li>
                <li><button onClick={() => setView('team')} className="hover:text-white transition-colors">Our Team</button></li>
                <li><a href="#progetti" className="hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black tracking-widest text-ocean uppercase mb-8">Resources</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><a href="#news" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Hub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparency</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black tracking-widest text-ocean uppercase mb-8">Connect</h4>
              <p className="text-white/40 text-sm mb-4">info@mobydickets.it</p>
              <p className="text-white/40 text-sm">Salerno, Italy</p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-wrap justify-center gap-12 opacity-30 hover:opacity-100 transition-opacity">
            {partners.map(p => (
              <img key={p.name} src={p.url} className="h-8 grayscale brightness-200" alt={p.name} />
            ))}
          </div>
          <p className="text-white/20 text-[10px] font-black tracking-[0.2em] uppercase">
            © 2024 MOBY DICK ETS | CF 91037210654
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
