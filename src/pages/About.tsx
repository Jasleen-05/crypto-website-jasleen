
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
              About Lunexa
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              We're on a mission to democratize sophisticated trading strategies and make 
              institutional-grade AI accessible to everyone.
            </p>
          </div>

          <div className="glass-card p-12 mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-light text-white mb-6">Our Story</h2>
            <p className="text-white/80 font-light leading-relaxed mb-6">
              Founded in 2023 by a team of former Wall Street quantitative analysts and Silicon Valley 
              AI engineers, Lunexa was born from the frustration of seeing sophisticated trading 
              technologies remain exclusive to large financial institutions.
            </p>
            <p className="text-white/80 font-light leading-relaxed">
              We believe that in the democratized world of cryptocurrency, individual traders deserve 
              access to the same advanced tools that have been generating profits for hedge funds 
              and trading firms for decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 animate-fade-in-up">
              <h3 className="text-2xl font-light text-white mb-4">Our Vision</h3>
              <p className="text-white/70 font-light leading-relaxed">
                To create a world where sophisticated AI trading strategies are accessible to every 
                cryptocurrency investor, regardless of their technical background or capital size.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in-up">
              <h3 className="text-2xl font-light text-white mb-4">Our Values</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Transparency, security, and user empowerment guide everything we do. We believe in 
                providing clear insights into our AI's decision-making process.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
