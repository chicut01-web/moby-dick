
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Statistics from './components/Statistics';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import TeamPage from './components/TeamPage';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'team'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (newView: 'home' | 'team') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal overflow-x-hidden">
      <Navbar scrolled={scrolled} setView={navigateTo} currentView={view} />
      
      {view === 'home' ? (
        <main>
          <section id="home">
            <Hero setView={navigateTo} />
          </section>
          
          <section id="chisiamo" className="py-24 bg-white">
            <About setView={navigateTo} />
          </section>

          <section id="progetti" className="py-24 bg-azure/20">
            <Projects />
          </section>

          <section id="servizi" className="py-24 bg-white">
            <Services />
          </section>

          <Statistics />

          <section id="news" className="py-24 bg-azure/20">
            <News />
          </section>

          <section id="contatti" className="py-24 bg-white">
            <Contact />
          </section>
        </main>
      ) : (
        <TeamPage onBack={() => navigateTo('home')} />
      )}

      <Footer setView={navigateTo} />
      
      <Assistant />
    </div>
  );
};

export default App;
