
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'phosphor-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-16">
      <div ref={heroRef} className="scroll-reveal text-center max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-tight">
          AI-Powered
          <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Crypto Trading
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Experience the future of cryptocurrency trading with our advanced AI assistant. 
          Maximize your returns while minimizing risk through intelligent automation.
        </p>
        
        <button className="neuro-button inline-flex items-center gap-3 text-lg">
          Get Started Free
          <ArrowRight size={20} weight="light" />
        </button>
      </div>

      {/* Product Mockup */}
      <div className="mt-20 w-full max-w-6xl mx-auto scroll-reveal">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 blur-3xl"></div>
          <div className="relative glass-card p-4 md:p-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Lunexa Trading Interface"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
