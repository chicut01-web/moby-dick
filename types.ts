
export interface Project {
  id: number;
  title: string;
  category: 'Nazionale' | 'Europeo' | 'Scuola' | 'Evento';
  description: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}
