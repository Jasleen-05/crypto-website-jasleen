
import React, { useEffect, useRef } from 'react';
import { Check, Crown } from 'phosphor-react';

const Pricing = () => {
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

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI trading",
      features: [
        "Basic AI trading strategies",
        "Up to $1,000 portfolio value",
        "5 trades per day",
        "Email support",
        "Basic analytics dashboard"
      ],
      recommended: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Advanced features for serious traders",
      features: [
        "Advanced AI strategies",
        "Unlimited portfolio value",
        "Unlimited trades",
        "Priority support",
        "Advanced analytics & insights",
        "Risk management tools",
        "Mobile app access",
        "API access"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "Full-scale solution for professional traders",
      features: [
        "Custom AI model training",
        "Multi-exchange integration",
        "Dedicated account manager",
        "White-label solution",
        "Advanced reporting",
        "Custom integrations",
        "SLA guarantee",
        "Phone support"
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core AI trading engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card p-8 relative ${
                plan.recommended ? 'ring-2 ring-violet-500/50 bg-white/10' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 rounded-full flex items-center gap-2">
                    <Crown size={16} weight="fill" className="text-white" />
                    <span className="text-white font-medium text-sm">Recommended</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-light text-white">{plan.price}</span>
                  <span className="text-white/60 font-light">/{plan.period}</span>
                </div>
                <p className="text-white/70 font-light">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} weight="bold" className="text-green-400 flex-shrink-0" />
                    <span className="text-white/80 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                plan.recommended
                  ? 'neuro-button'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
