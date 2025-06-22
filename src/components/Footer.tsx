
import React from 'react';
import { TwitterLogo, LinkedinLogo, GithubLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-light tracking-tight text-white mb-4">
              Lunexa
            </div>
            <p className="text-white/70 font-light leading-relaxed max-w-md">
              Democratizing access to institutional-grade AI trading technology for 
              cryptocurrency investors worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/70 hover:text-white font-light transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white font-light transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-white font-light transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white font-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/70 hover:text-white font-light transition-colors">About</a></li>
              <li><a href="/blog" className="text-white/70 hover:text-white font-light transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-white font-light transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white font-light transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/60 font-light mb-4 md:mb-0">
            © 2024 Lunexa. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <TwitterLogo size={24} weight="light" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <LinkedinLogo size={24} weight="light" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <GithubLogo size={24} weight="light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
