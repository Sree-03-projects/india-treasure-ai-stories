
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#f8f3ea] overflow-hidden py-24 lg:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <div className="text-indian-terracotta mb-4">UP TO 20% DISCOUNT ON</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#3c2e20] font-heading">
            Culture And Heritage
          </h1>
          <p className="text-lg text-[#5a4a3a] mb-10">
            "Journey Through Style: Where Every Piece Tells a Cultural Tale." Explore a 
            curated collection of clothing, accessories, and footwear that caters to 
            every taste and occasion.
          </p>
          <Button asChild className="bg-[#a18267] hover:bg-[#8c6e53] text-white px-8 py-6 h-auto">
            <Link to="/products">EXPLORE NOW</Link>
          </Button>
        </div>
        
        <div className="hidden lg:block relative">
          <img 
            src="/lovable-uploads/81588eeb-da0e-4216-8277-f25b20e21ebb.png" 
            alt="Indian bride in traditional attire" 
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
