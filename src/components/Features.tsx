
import React, { useEffect, useRef } from 'react';
import { Brain, Shield, ChartLineUp, Clock } from 'phosphor-react';

const Features = () => {
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

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Our sophisticated neural networks analyze market patterns, news sentiment, and technical indicators to make informed trading decisions."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in stop-loss mechanisms and portfolio diversification strategies protect your investments from market volatility."
    },
    {
      icon: ChartLineUp,
      title: "Real-Time Analytics",
      description: "Access comprehensive dashboards with live market data, performance metrics, and detailed trading history insights."
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description: "Never miss an opportunity with round-the-clock automated trading that works while you sleep, capturing global market movements."
    }
  ];

  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Discover the advanced capabilities that make Lunexa the most sophisticated AI trading platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} weight="light" className="text-white" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
