
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative py-24 lg:py-32 bg-vintage-parchment overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-aged-texture pointer-events-none"></div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 animate-fadeIn">
          <div className="vintage-border bg-white/50 backdrop-blur-sm p-8 shadow-lg">
            <div className="text-vintage-leather mb-4 font-serif tracking-wider uppercase text-sm">Timeless Heritage Collection</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-vintage-mahogany font-accent leading-tight">
              Artisanal<br/><span className="text-vintage-leather">Indian</span> Treasures
            </h1>
            
            <div className="fancy-divider my-8"></div>
            
            <p className="text-lg text-vintage-mahogany/80 mb-10 font-serif italic">
              "Embracing centuries of craftsmanship, each piece carries the soul of 
              India's vibrant cultural heritage." Discover authentic handcrafted items 
              from across diverse regions of India.
            </p>
            
            <Button asChild className="bg-vintage-leather hover:bg-vintage-mahogany text-vintage-parchment px-8 py-6 h-auto border-2 border-vintage-leather group transition-all duration-500 overflow-hidden relative">
              <Link to="/products" className="flex items-center overflow-hidden">
                <span className="relative z-10 group-hover:-translate-y-full transition-transform duration-500">EXPLORE COLLECTION</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">DISCOVER NOW</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block relative z-10">
          <div className="relative historical-image vintage-shadow">
            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-vintage-brass z-20"></div>
            <div className="absolute -top-3 -right-3 h-10 w-10 border-t-2 border-r-2 border-vintage-brass z-20"></div>
            <div className="absolute -bottom-3 -left-3 h-10 w-10 border-b-2 border-l-2 border-vintage-brass z-20"></div>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-vintage-brass z-20"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1547495446-0fb4a7cb2ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Indian Heritage Craftsmanship" 
              className="w-full h-[550px] object-cover"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
              <div className="bg-vintage-mahogany/80 backdrop-blur-sm p-6 mx-6 vintage-shadow animate-floatUp">
                <h3 className="text-3xl font-bold text-vintage-parchment font-accent mb-2">InDiverse</h3>
                <p className="text-vintage-parchment/90 text-lg font-serif italic">Where Heritage Meets Artistry</p>
                <div className="my-4 h-px w-32 bg-vintage-brass/60 mx-auto"></div>
                <div className="text-vintage-parchment/90 font-serif">EST. 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
