
import React from 'react';
import { NEWS } from '../constants';
import { Calendar, ChevronRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-ocean font-display font-bold uppercase tracking-widest mb-4">Resta Aggiornato</h2>
        <h3 className="text-4xl font-display font-bold text-dark">Ultime News</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {NEWS.map((item) => (
          <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center text-gray-400 text-xs font-semibold mb-4">
                <Calendar size={14} className="mr-2" />
                {item.date}
              </div>
              <h4 className="text-xl font-display font-bold text-dark mb-4 leading-snug group-hover:text-ocean transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                {item.excerpt}
              </p>
              <button className="bg-light hover:bg-ocean hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center">
                Leggi Ora <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-flex items-center text-ocean font-bold text-lg hover:text-coral transition-colors underline underline-offset-8">
          Scopri tutte le News <ChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default News;
