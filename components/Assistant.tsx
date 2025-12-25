
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from '@google/genai';
import { TEAM, PROJECTS, SERVICES } from '../constants';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Ciao! Sono Moby AI. Sono qui per raccontarti i nostri 20 anni di storia, il team e i progetti. Chiedimi pure!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Ref per mantenere la sessione della chat e la cronologia
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Inizializza la sessione di chat se non esiste o se è stata resettata
      if (!chatSessionRef.current) {
        
        // Controllo di sicurezza per l'API KEY
        // Nota: Su Vercel devi aggiungere 'API_KEY' nelle Environment Variables del progetto.
        let apiKey;
        try {
          apiKey = process.env.API_KEY;
        } catch (e) {
          console.error("Errore nell'accesso a process.env. Assicurati che il bundler esponga API_KEY.");
        }

        if (!apiKey) {
          throw new Error("API Key mancante. Configura la variabile d'ambiente API_KEY su Vercel.");
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        
        // Preparazione del contesto dati per l'AI (Grounding)
        const teamContext = TEAM.map(t => `${t.name} ricopre il ruolo di ${t.role}`).join('; ');
        const projectContext = PROJECTS.map(p => `${p.title} (${p.category}): ${p.description}`).join('; ');
        const serviceContext = SERVICES.map(s => `${s.title}: ${s.description}`).join('; ');

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            temperature: 0.3, 
            systemInstruction: `Sei l'Assistente Ufficiale di Moby Dick ETS.
            
            CONTESTO:
            Moby Dick ETS è un hub dinamico a Salerno, attivo dal 2005 (20 anni). La mission è l'empowerment giovanile, la cittadinanza attiva e l'innovazione sociale.
            
            DATI VERIFICATI DA USARE OBBLIGATORIAMENTE:
            --- TEAM ---
            ${teamContext}
            --- PROGETTI ---
            ${projectContext}
            --- SERVIZI ---
            ${serviceContext}
            ----------------

            REGOLE DI RISPOSTA (IMPORTANTE):
            1.  **Stile**: Usa un tono professionale, accogliente e caloroso. Non essere telegrafico.
            2.  **Lunghezza**: Rispondi in modo esaustivo ma conciso (circa 3-4 frasi). Spiega il "perché" o il contesto, non dare solo il dato secco.
            3.  **Sul Team**: Se chiedono di una persona, cita il ruolo e aggiungi una frase di contesto sul valore del suo lavoro per l'associazione.
            4.  **Sui Progetti**: Descrivili con entusiasmo, sottolineando l'opportunità per i giovani.
            5.  **Ignoranza Ammessa**: Se un dato NON è nella lista sopra, di' gentilmente che non hai quell'informazione specifica e invita a contattare la segreteria a info@mobydickets.it.
            `,
          }
        });
      }

      // Invia il messaggio alla sessione di chat esistente
      const response = await chatSessionRef.current.sendMessage({ message: userMessage });
      
      const aiText = response.text || "Non ho capito bene, potresti riformulare la domanda?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error: any) {
      console.error("Errore chat:", error);
      
      // Messaggio di errore user-friendly
      let errorMessage = "C'è stato un piccolo problema tecnico. Prova a scriverci via email o ricarica la pagina!";
      if (error.message && error.message.includes("API Key")) {
        errorMessage = "Configurazione mancante: API Key non trovata. Contatta l'amministratore del sito.";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
      // Resetta la sessione in caso di errore grave per riprovare pulito la prossima volta
      chatSessionRef.current = null;
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-sky text-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,163,255,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-8 md:w-[450px] md:h-[650px] z-50 bg-white md:rounded-[3rem] flex flex-col shadow-[0_40px_100px_-20px_rgba(0,102,204,0.15)] overflow-hidden animate-chat-in border border-azure">
          {/* Header */}
          <div className="bg-ocean p-6 text-white relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-black tracking-tight leading-none mb-1">Moby AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-azure/80">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] px-5 py-3.5 rounded-[1.5rem] text-[14px] leading-relaxed shadow-sm font-medium ${
                  msg.role === 'user' 
                  ? 'bg-sky text-white rounded-tr-none' 
                  : 'bg-white text-charcoal rounded-tl-none border border-azure'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start gap-3 animate-pulse">
                <div className="bg-white px-5 py-3.5 rounded-[1.5rem] rounded-tl-none border border-azure flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-sky/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-sky/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-sky/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-azure shrink-0">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Chiedimi qualcosa..." 
                className="w-full pl-5 pr-12 py-3.5 bg-slate-50 border border-azure rounded-2xl outline-none focus:ring-4 focus:ring-sky/10 focus:border-sky transition-all font-semibold text-charcoal placeholder:text-charcoal/30 text-sm shadow-inner"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-2 bg-sky text-white p-2 rounded-xl hover:bg-ocean transition-all disabled:opacity-30 shadow-lg shadow-sky/20 active:scale-90"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-chat-in {
          animation: chat-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Assistant;
