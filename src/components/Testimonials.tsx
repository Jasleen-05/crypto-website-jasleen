
import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'phosphor-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "Lunexa's AI has consistently outperformed my manual trading. The automation is seamless and the insights are incredibly valuable.",
      result: "+347% ROI in 6 months",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "DeFi Trader",  
      content: "The risk management features are outstanding. I can sleep peacefully knowing my portfolio is being monitored 24/7.",
      result: "+156% Portfolio Growth",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Financial Advisor",
      content: "I recommend Lunexa to all my clients. The AI's analysis is sophisticated yet easy to understand.",
      result: "+289% Average Client Returns", 
      rating: 5
    },
    {
      name: "David Kim",
      role: "Tech Entrepreneur",
      content: "Finally, a crypto trading platform that actually works. The AI predictions are remarkably accurate.",
      result: "+412% Trading Profits",
      rating: 5
    }
  ];

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

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their portfolios with Lunexa's AI.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={24} weight="fill" className="text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="mb-4">
                      <div className="text-lg font-medium text-white">{testimonial.name}</div>
                      <div className="text-white/60 font-light">{testimonial.role}</div>
                    </div>
                    <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30">
                      <span className="text-green-400 font-medium">{testimonial.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-violet-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
