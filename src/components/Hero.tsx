
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Banner data
const banners = [
  {
    id: 1,
    title: "Traditional Silver Jhumkas",
    subtitle: "Timeless elegance in every design",
    image: "https://images.unsplash.com/photo-1617606002806-94e279c22567",
    cta: "Shop Jewelry",
    link: "/products?category=Jewelry",
    color: "indian-maroon",
  },
  {
    id: 2,
    title: "Madhubani Magic",
    subtitle: "Folk art that tells stories",
    image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd",
    cta: "Explore Art",
    link: "/products?category=Art",
    color: "indian-gold",
  },
  {
    id: 3,
    title: "Handcrafted Bangles",
    subtitle: "Colors of tradition",
    image: "https://images.unsplash.com/photo-1575842832166-a2439905e27c",
    cta: "View Collection",
    link: "/products?category=Bangles",
    color: "indian-blue",
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? banners.length - 1 : current - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % banners.length);
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  const activeBanner = banners[activeIndex];
  
  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Main banner */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {banners.map((banner, index) => (
          <div 
            key={banner.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Banner content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container px-6 md:px-8">
                <div className="max-w-lg">
                  <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4 bg-${banner.color}`}>
                    NEW COLLECTION
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-6">
                    {banner.subtitle}
                  </p>
                  <Button asChild size="lg" className={`bg-${banner.color} hover:bg-${banner.color}/90 text-white`}>
                    <Link to={banner.link} className="group">
                      {banner.cta}
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 z-30">
          <button 
            onClick={goToPrevious} 
            className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </button>
          <button 
            onClick={goToNext} 
            className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="h-2 w-full bg-gradient-to-r from-indian-maroon via-indian-gold to-indian-green"></div>
    </div>
  );
};

export default Hero;
