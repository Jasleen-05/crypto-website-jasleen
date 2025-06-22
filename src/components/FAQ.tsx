
import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'phosphor-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "How does Lunexa's AI trading work?",
      answer: "Our AI uses advanced machine learning algorithms to analyze market data, technical indicators, and sentiment analysis. It processes thousands of data points in real-time to identify profitable trading opportunities and execute trades automatically based on your configured risk parameters."
    },
    {
      question: "Is my cryptocurrency safe with Lunexa?",
      answer: "Yes, security is our top priority. We use industry-standard encryption, secure API connections, and never store your private keys. Your funds remain in your own wallet, and we only have permission to execute trades on your behalf through secure exchange APIs."
    },
    {
      question: "What exchanges does Lunexa support?",
      answer: "We currently support major exchanges including Binance, Coinbase Pro, Kraken, and Bitfinex. We're continuously adding support for more exchanges based on user demand. Enterprise customers can request custom exchange integrations."
    },
    {
      question: "Can I customize the AI's trading strategy?",
      answer: "Absolutely! You can set your risk tolerance, preferred cryptocurrencies, trading frequency, and stop-loss limits. Pro and Enterprise users get access to advanced strategy customization including custom indicators and trading signals."
    },
    {
      question: "What happens if the AI makes a losing trade?",
      answer: "Like all trading, there are risks involved. Our AI includes sophisticated risk management features like stop-losses and position sizing to minimize losses. We're transparent about performance and provide detailed analytics on all trades, both winning and losing."
    },
    {
      question: "How much can I expect to earn?",
      answer: "Returns vary based on market conditions and your risk settings. While we cannot guarantee profits, our backtesting shows consistent positive returns over time. Many users see improvements in their trading performance compared to manual trading, but past performance doesn't guarantee future results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 lg:px-8">
      <div ref={sectionRef} className="scroll-reveal max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 font-light">
            Everything you need to know about Lunexa AI trading platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-light text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus size={24} weight="light" className="text-violet-400 flex-shrink-0" />
                ) : (
                  <Plus size={24} weight="light" className="text-violet-400 flex-shrink-0" />
                )}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-white/70 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
