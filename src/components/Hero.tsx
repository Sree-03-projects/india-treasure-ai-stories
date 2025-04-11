
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d2c7ba\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[#f5f0e5]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl relative before:absolute before:w-full before:h-full before:-top-6 before:-left-6 before:border before:border-[#d2c5b2] before:opacity-70 before:pointer-events-none after:absolute after:w-full after:h-full after:-bottom-6 after:-right-6 after:border after:border-[#d2c5b2] after:opacity-70 after:pointer-events-none">
          <div className="relative z-10 p-6">
            <div className="text-[#8c6e53] mb-4 font-heading text-sm tracking-wider">TIMELESS HERITAGE COLLECTION</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#3c2e20] font-heading leading-tight">
              Artisanal<br/><span className="text-[#8c6e53]">Indian</span> Treasures
            </h1>
            <div className="h-[1px] w-32 bg-[#d2c5b2] mb-8"></div>
            <p className="text-lg text-[#5a4a3a] mb-10 font-serif italic">
              "Embracing centuries of craftsmanship, each piece carries the soul of 
              India's vibrant cultural heritage." Discover authentic handcrafted items 
              from across diverse regions of India.
            </p>
            <Button asChild className="bg-[#8c6e53] hover:bg-[#765c45] text-white px-8 py-6 h-auto border-2 border-[#8c6e53] group transition-all duration-300 overflow-hidden relative">
              <Link to="/products" className="flex items-center overflow-hidden">
                <span className="relative z-10 group-hover:-translate-y-full transition-transform duration-500">EXPLORE COLLECTION</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">DISCOVER NOW</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="relative h-[450px] overflow-hidden rounded-md border-4 border-[#d2c5b2] shadow-lg bg-[#f8f3ea]/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[#8c6e53]/10 pattern-bg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 relative">
                <div className="absolute w-20 h-20 top-0 left-0 border-t-2 border-l-2 border-[#a18267] opacity-60"></div>
                <div className="absolute w-20 h-20 bottom-0 right-0 border-b-2 border-r-2 border-[#a18267] opacity-60"></div>
                <h3 className="text-4xl font-bold text-[#3c2e20] font-heading mb-4">InDiverse</h3>
                <p className="text-[#5a4a3a] text-lg italic">Where Heritage Meets Artistry</p>
                <div className="mt-8 h-[1px] w-32 bg-[#8c6e53] mx-auto"></div>
                <div className="mt-8 flex justify-center">
                  <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-[#d2c5b2] bg-[#f8f3ea] flex items-center justify-center">
                    <div className="text-[#8c6e53] font-heading">EST.<br/>2023</div>
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
