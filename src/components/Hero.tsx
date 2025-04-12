
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-theme-blue to-theme-purple text-white">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 pattern-bg pointer-events-none"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h4 className="text-sm md:text-base tracking-widest uppercase mb-3 opacity-80">Discover India's Finest</h4>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Artisanal Treasures <br />
              <span className="text-gradient">Reimagined</span>
            </h1>
            
            <p className="text-lg mb-8 text-white/90 max-w-xl">
              Experience the rich heritage of Indian craftsmanship through our curated collection of authentic treasures, each piece telling a story of tradition and artistry.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-theme-dark hover:bg-white/90 btn-shine">
                <Link to="/products" className="group">
                  Explore Collection
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative fade-in">
              <div className="absolute -inset-4 bg-white/10 rounded-lg -z-10 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Indian Heritage Craftsmanship" 
                className="w-full rounded-lg shadow-lg h-[500px] object-cover"
              />
              
              <div className="absolute -right-10 -bottom-10 bg-white rounded-lg p-5 shadow-card scale-in animate-delay-300 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-theme-purple/10 text-theme-purple p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-theme-dark">Discover the Story</h3>
                    <p className="text-sm text-gray-600">Each piece carries centuries of tradition and a unique narrative of its origin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
