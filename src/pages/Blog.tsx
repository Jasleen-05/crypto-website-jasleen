
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'phosphor-react';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Cryptocurrency Trading",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we approach cryptocurrency trading and what this means for individual investors.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI & Technology"
    },
    {
      title: "Risk Management Strategies for Crypto Trading",
      excerpt: "Learn essential risk management techniques to protect your cryptocurrency investments while maximizing potential returns.",
      author: "Marcus Rodriguez",
      date: "December 12, 2024", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trading Strategy"
    },
    {
      title: "Understanding Market Sentiment Analysis",
      excerpt: "Discover how our AI analyzes social media, news, and market data to predict cryptocurrency price movements with remarkable accuracy.",
      author: "Emily Watson",
      date: "December 8, 2024",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Analysis"
    },
    {
      title: "Building Your First Automated Trading Strategy",
      excerpt: "A step-by-step guide to creating and implementing your first automated cryptocurrency trading strategy using Lunexa's platform.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tutorial"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
              Lunexa Blog
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Insights, strategies, and updates from the world of AI-powered cryptocurrency trading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="glass-card group hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-violet-600/80 text-white px-3 py-1 rounded-full text-sm font-light">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-light text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User size={16} weight="light" />
                        <span className="font-light">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} weight="light" />
                        <span className="font-light">{article.date}</span>
                      </div>
                    </div>
                    <span className="font-light">{article.readTime}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-light">
                    Read More
                    <ArrowRight size={16} weight="light" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
