
import React, { useEffect, useRef } from 'react';

const FeaturedIn = () => {
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

  const publications = [
    'TechCrunch', 'Forbes', 'CoinDesk', 'Wired', 'The Block', 'Decrypt'
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-6xl mx-auto text-center">
        <p className="text-white/60 font-light mb-12 text-lg">Featured in</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {publications.map((pub, index) => (
            <div 
              key={pub}
              className="text-white/40 font-light text-lg hover:text-white/70 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
