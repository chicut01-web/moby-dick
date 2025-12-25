
import React from 'react';
import { Project, NewsItem, TeamMember, ServiceItem } from './types';

export const PROJECTS: Project[] = [
  { id: 1, title: 'Progetti Nazionali', category: 'Nazionale', description: 'Iniziative dedicate allo sviluppo del territorio italiano.', image: 'https://picsum.photos/seed/nat/800/600' },
  { id: 2, title: 'Progetti Europei', category: 'Europeo', description: 'Opportunità di mobilità e scambio in tutta l\'Unione Europea.', image: 'https://picsum.photos/seed/eur/800/600' },
  { id: 3, title: 'Progetti Scuole', category: 'Scuola', description: 'Innovazione didattica e percorsi formativi per gli istituti scolastici.', image: 'https://picsum.photos/seed/sch/800/600' },
  { id: 4, title: 'Meeting dei Giovani', category: 'Evento', description: 'L\'appuntamento annuale per il confronto e la rete tra giovani.', image: 'https://picsum.photos/seed/mee/800/600' },
];

export const SERVICES: ServiceItem[] = [
  { id: 1, title: 'EUROPE DIRECT SALERNO', description: 'Punto informativo ufficiale sulla UE per cittadini e giovani.', icon: 'Globe' },
  { id: 2, title: 'SERVIZIO CIVILE UNIVERSALE', description: 'Un anno dedicato alla solidarietà e alla crescita personale.', icon: 'Users' },
  { id: 3, title: 'INFORMAGIOVANI SALERNO', description: 'Orientamento su studio, lavoro, estero e tempo libero.', icon: 'Lightbulb' },
  { id: 4, title: 'POLITICHEGIOVANILI.COM', description: 'Network e risorse digitali per l\'innovazione sociale.', icon: 'Rocket' },
];

export const NEWS: NewsItem[] = [
  { id: 1, title: 'Nuovo bando Erasmus+ in arrivo', excerpt: 'Scopri come partecipare ai prossimi scambi internazionali finanziati.', date: '15 Mag 2024', image: 'https://picsum.photos/seed/news1/600/400' },
  { id: 2, title: 'Workshop Didattica Innovativa', excerpt: 'Un successo l\'evento dedicato ai nuovi metodi di apprendimento.', date: '10 Mag 2024', image: 'https://picsum.photos/seed/news2/600/400' },
  { id: 3, title: 'Iscrizioni Servizio Civile 2024', excerpt: 'Aperti i termini per le nuove posizioni presso la nostra sede.', date: '02 Mag 2024', image: 'https://picsum.photos/seed/news3/600/400' },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: 'Francesco Piemonte', role: 'Presidente', image: 'https://i.imgur.com/VSWbLvE.jpeg$0' },
  { id: 2, name: 'Martina Cian', role: 'Tesoriere', image: 'https://i.imgur.com/dxNaxmx.jpeg$0' },
  { id: 3, name: 'Paolo Schetter', role: 'Segretario', image: 'https://i.imgur.com/6RSXel6.jpeg$0' },
  { id: 4, name: 'Andreea Alexandra Stan', role: 'Europe Direct', image: 'https://i.imgur.com/JFQ6gNh.jpeg$0' },
  { id: 5, name: 'Carla Alessia Castagna', role: 'Servizio Civile Universale', image: 'https://i.imgur.com/9IfPJS3.jpeg$0' },
  { id: 6, name: 'Maria Carla Ciancio', role: 'Ufficio Stampa e Comunicazione', image: 'https://i.imgur.com/wQoIIrQ.jpeg$0' },
  { id: 7, name: 'Daniele Cuomo', role: 'Progettazione', image: 'https://i.imgur.com/tQ7AEi7.jpeg$0' },
  { id: 8, name: 'Francesco Barbarito', role: 'Informagiovani', image: 'https://i.imgur.com/8Evyi1N.jpeg$0' },
  { id: 9, name: 'Emiliano Sergio', role: 'Progettazione', image: 'https://i.imgur.com/1Yw0tNd.jpeg$0' },
  { id: 10, name: 'Andrea Satiro', role: 'Web e Grafica', image: 'https://i.imgur.com/J6pgBZt.jpeg$0' },
  { id: 11, name: 'Mario Orlando', role: 'Servizio Civile Universale', image: 'https://i.imgur.com/sgXosor.jpeg$0' },
];
