
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="reveal">
          <h2 className="text-ocean font-display font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] mb-6 md:mb-8 bg-azure px-4 py-1 rounded-full inline-block">Contatti</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-charcoal mb-10 md:mb-16 tracking-tighter uppercase leading-none break-words">
            SCRIVICI UN <br /> <span className="text-sky italic">MESSAGGIO.</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-widest ml-4">Nominativo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Nome + Cognome"
                  className="w-full px-6 py-4 md:px-8 md:py-5 rounded-3xl bg-slate-50 border border-azure focus:bg-white focus:border-sky focus:border-sky focus:ring-4 focus:ring-sky/10 outline-none transition-all font-semibold text-charcoal text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-widest ml-4">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="La tua email"
                  className="w-full px-6 py-4 md:px-8 md:py-5 rounded-3xl bg-slate-50 border border-azure focus:bg-white focus:border-sky focus:ring-4 focus:ring-sky/10 outline-none transition-all font-semibold text-charcoal text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-widest ml-4">Messaggio</label>
              <textarea 
                required
                rows={5}
                placeholder="Come possiamo aiutarti?"
                className="w-full px-6 py-5 md:px-8 md:py-6 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-azure focus:bg-white focus:border-sky focus:ring-4 focus:ring-sky/10 outline-none transition-all resize-none font-semibold text-charcoal text-sm"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              disabled={status === 'sending'}
              className={`w-full py-5 md:py-6 rounded-3xl font-black text-xs uppercase tracking-widest text-white shadow-2xl flex items-center justify-center transition-all group active:scale-95 ${status === 'sent' ? 'bg-green-500' : 'bg-sky hover:bg-ocean'}`}
            >
              {status === 'sending' ? 'Invio in corso...' : status === 'sent' ? 'Messaggio Inviato!' : (
                <>Invia Ora <Send size={18} className="ml-4 group-hover:translate-x-2 transition-transform" /></>
              )}
            </button>
          </form>
        </div>

        <div className="reveal bg-slate-50 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-azure shadow-sm">
          <h4 className="text-2xl md:text-3xl font-display font-black text-charcoal mb-8 md:mb-12 uppercase tracking-tighter">Informazioni</h4>
          
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start group">
              <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl shadow-ocean/5 text-ocean mr-5 md:mr-6 group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-2">Telefono</p>
                <p className="text-charcoal font-bold text-base md:text-lg break-all">+39 089 701 2748</p>
                <p className="text-charcoal font-bold text-base md:text-lg break-all">+39 351 98 94 622</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl shadow-ocean/5 text-ocean mr-5 md:mr-6 group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-2">Email & PEC</p>
                <p className="text-charcoal font-bold text-base md:text-lg break-all">info@mobydickets.it</p>
                <p className="text-charcoal/40 text-sm italic font-medium break-all">mobydickets@pec.it</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl shadow-ocean/5 text-ocean mr-5 md:mr-6 group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all">
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-2">Le nostre sedi</p>
                <p className="text-charcoal font-bold text-base md:text-lg"><span className="text-sky">Op:</span> Via Enrico Bottiglieri snc, Salerno</p>
                <p className="text-charcoal font-bold text-base md:text-lg"><span className="text-sky">Leg:</span> Via Cupa Parisi 11, Salerno</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-azure">
            <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-widest mb-6 md:mb-8">Canali Social</p>
            <div className="flex gap-3 md:gap-4">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg shadow-ocean/5 flex items-center justify-center text-charcoal hover:bg-sky hover:text-white transition-all transform hover:-translate-y-2">
                  <Icon size={20} className="md:w-[22px] md:h-[22px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
