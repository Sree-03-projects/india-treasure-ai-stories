
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564670169556-a64903cb37a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Indian handicrafts" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Discover Authentic <span className="text-indian-saffron">Indian</span> Treasures
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Explore the rich cultural heritage of India through traditional crafts, 
            textiles, jewelry, and more. Each piece tells a story of artistry passed 
            down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-indian-saffron hover:bg-indian-saffron/90 text-white">
              <Link to="/products">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
