
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
          <div className="relative h-[450px] overflow-hidden rounded-md border-4 border-[#d2c5b2] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1565942443631-9e2fd81d2066?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Where Heritage Meets Artistry" 
              className="w-full h-full object-cover filter sepia-[0.3] brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-[#8c6e53]/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl font-bold text-white font-heading mb-4 text-shadow-lg">InDiverse</h3>
              <p className="text-white text-lg italic bg-[#000]/30 px-4 py-2 rounded">Where Heritage Meets Artistry</p>
              <div className="mt-8 h-[1px] w-32 bg-white mx-auto"></div>
              <div className="mt-8">
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-white bg-[#000]/30 flex items-center justify-center">
                  <div className="text-white font-heading">EST.<br/>2023</div>
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
