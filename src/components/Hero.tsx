
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-heritage-beige heritage-paper overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 heritage-texture"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <div className="flex items-center mb-4">
              <div className="w-12 h-0.5 bg-heritage-taupe mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-heritage-mocha">Heritage Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-heritage-accent">
              Timeless Indian <br />
              <span className="text-gradient-heritage">Artisan Treasures</span>
            </h1>
            
            <p className="text-lg mb-8 text-heritage-umber/90 max-w-xl">
              Discover the rich cultural heritage of India through our carefully curated collection of authentic handcrafted treasures, each piece telling a story that spans generations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-heritage-accent hover:bg-heritage-brown text-heritage-cream btn-shine">
                <Link to="/products" className="group">
                  Explore Collection
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-heritage-taupe text-heritage-accent hover:bg-heritage-taupe/10">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative fade-in">
              <div className="absolute -inset-4 bg-heritage-taupe/10 rounded-lg -z-10 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Indian Heritage Craftsmanship" 
                className="w-full rounded-lg shadow-lg h-[500px] object-cover image-filter-heritage border border-heritage-sand"
              />
              
              <div className="absolute -right-10 -bottom-10 bg-heritage-ivory rounded-lg p-5 shadow-card scale-in animate-delay-300 max-w-xs heritage-border">
                <div className="flex items-start space-x-3">
                  <div className="bg-heritage-taupe/20 text-heritage-accent p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-heritage-accent">Artisan Craftsmanship</h3>
                    <p className="text-sm text-heritage-mocha">Each piece carries centuries of tradition, crafted by skilled artisans using time-honored techniques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative border at bottom */}
      <div className="h-2 w-full bg-gradient-to-r from-heritage-beige via-heritage-taupe to-heritage-beige opacity-40"></div>
    </div>
  );
};

export default Hero;
