
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Silver Jhumkas",
    description: "Traditional oxidized silver earrings",
    image: "public/lovable-uploads/2eae7f84-de4b-4205-9eda-deb6133d647d.png",
    link: "/products?category=Jewelry",
  },
  {
    id: 2,
    name: "Lakh ki Choodiyan",
    description: "Vibrant glass bangles",
    image: "public/lovable-uploads/0e78189d-eb53-4c00-a1af-af5e48847ab6.png",
    link: "/products?category=Bangles",
  },
  {
    id: 3,
    name: "Tribal Jewelry",
    description: "Authentic tribal craftsmanship",
    image: "public/lovable-uploads/28065d95-a2d0-404c-9bf4-4a55fbe5c748.png",
    link: "/products?category=Tribal",
  },
  {
    id: 4,
    name: "Madhubani Paintings",
    description: "Folk art masterpieces",
    image: "public/lovable-uploads/81588eeb-da0e-4216-8277-f25b20e21ebb.png",
    link: "/products?category=Art",
  },
  {
    id: 5,
    name: "Mango Pickles",
    description: "Traditional homemade taste",
    image: "public/lovable-uploads/28065d95-a2d0-404c-9bf4-4a55fbe5c748.png",
    link: "/products?category=Food",
  },
  {
    id: 6,
    name: "Handmade Bangles",
    description: "Exquisite handcrafted traditional bangles",
    image: "public/lovable-uploads/4efa1335-57d7-41e4-ba32-ca86b2cacde6.png",
    link: "/products?category=HandmadeBangles",
  }
];

const CategoryShowcase = () => {
  return (
    <section className="py-12 bg-heritage-cream/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent">
            Explore Our Collections
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-serif mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white/90 hover:bg-white text-heritage-accent group-hover:translate-x-1 transition-transform"
                >
                  Explore
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
