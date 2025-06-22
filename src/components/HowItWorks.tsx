
import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
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

  const steps = [
    {
      title: "Connect Your Wallet",
      description: "Securely link your crypto wallet with our platform using industry-standard encryption protocols.",
      image: "/lovable-uploads/43933950-1da1-4faf-85c9-1fd14d6471ce.png"
    },
    {
      title: "Set Up Your AI Assistant", 
      description: "Configure your trading preferences and risk tolerance. Our AI learns your style and optimizes accordingly.",
      image: "/lovable-uploads/09c12be2-948d-420f-8258-f27e338edfcc.png"
    },
    {
      title: "Automate Your Trading",
      description: "Sit back and watch as our AI executes profitable trades 24/7, continuously learning and improving.",
      image: "/lovable-uploads/394bef3c-d14f-43c3-99e0-4c03d6b19a1f.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Get started with Lunexa in three simple steps and begin your journey to automated trading success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8 flex justify-center">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {step.description}
              </p>
              
              <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600/20 rounded-full flex items-center justify-center">
                <span className="text-violet-400 font-medium text-sm">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
