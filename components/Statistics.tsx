
import React, { useState, useEffect, useRef } from 'react';

const StatCounter: React.FC<{ target: number; label: string; suffix?: string }> = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasStarted(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 md:p-10 group hover:bg-azure/50 transition-all duration-700 rounded-[3rem] w-full">
      <div className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-charcoal mb-4 tracking-tighter group-hover:text-ocean group-hover:scale-110 transition-all duration-700 text-center w-full break-words leading-none">
        {count.toLocaleString('it-IT')}{suffix}
      </div>
      {/* Label with optical adjustment for tracking */}
      <div className="text-ocean text-[10px] md:text-xs font-black uppercase tracking-[0.5em] inline-block mr-[-0.5em] text-center">
        {label}
      </div>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <div className="py-32 md:py-52 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-azure to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatCounter target={2005} label="FONDATA NEL" />
          <StatCounter target={20} label="ANNI DI STORIA" />
          <StatCounter target={150} label="PROGETTI" suffix="+" />
          <StatCounter target={12500} label="GIOVANI" suffix="+" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-azure to-transparent"></div>
    </div>
  );
};

export default Statistics;
