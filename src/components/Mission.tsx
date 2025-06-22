
import React, { useEffect, useRef } from 'react';

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
            We believe that sophisticated trading strategies shouldn't be exclusive to Wall Street. 
            Lunexa democratizes access to institutional-grade AI trading technology, empowering 
            individual investors to compete in the global cryptocurrency markets.
          </p>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Built by a team of former quantitative analysts, blockchain engineers, and AI researchers, 
            we're committed to creating transparent, ethical, and profitable trading solutions for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
