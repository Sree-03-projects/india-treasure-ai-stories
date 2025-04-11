
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#f5f0e5] overflow-hidden py-24 lg:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <div className="text-indian-terracotta mb-4 font-medium">TIMELESS HERITAGE COLLECTION</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#3c2e20] font-heading">
            Artisanal Indian Treasures
          </h1>
          <p className="text-lg text-[#5a4a3a] mb-10">
            "Embracing centuries of craftsmanship, each piece carries the soul of 
            India's vibrant cultural heritage." Discover authentic handcrafted items 
            from across diverse regions of India.
          </p>
          <Button asChild className="bg-[#8c6e53] hover:bg-[#765c45] text-white px-8 py-6 h-auto">
            <Link to="/products">EXPLORE COLLECTION</Link>
          </Button>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="relative h-[450px] overflow-hidden rounded-md border-4 border-[#d2c5b2] shadow-lg">
            <div className="absolute inset-0 bg-[#8c6e53]/10 pattern-bg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-4xl font-bold text-[#3c2e20] font-heading mb-4">InDiverse</h3>
                <p className="text-[#5a4a3a] text-lg italic">Where Heritage Meets Artistry</p>
                <div className="mt-8 h-[1px] w-32 bg-[#8c6e53] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
