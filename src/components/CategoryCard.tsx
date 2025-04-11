
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, link }) => {
  // Set specific images based on the category title
  const getCategoryImage = () => {
    switch(title.toLowerCase()) {
      case "jewelry":
        return "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "textiles":
        return "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "home decor":
        return "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "food":
        return "https://images.unsplash.com/photo-1596797038530-2c107dc1c774?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "arts & crafts":
        return "https://images.unsplash.com/photo-1604509869405-501de4dfa2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      default:
        return image;
    }
  };

  return (
    <Link to={link} className="block h-full">
      <Card className="overflow-hidden h-full group transition-all duration-300 hover:shadow-xl border-0 bg-transparent">
        <div className="relative">
          {/* Decorative frame overlay */}
          <div className="absolute inset-4 border border-[#d2c5b2]/50 z-10 pointer-events-none"></div>
          
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={getCategoryImage()} 
              alt={title} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 brightness-[0.85] contrast-[1.1]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 backdrop-sepia-[.15]">
              <div className="relative z-20">
                <h3 className="text-white text-xl md:text-2xl font-bold font-heading">{title}</h3>
                <div className="h-px w-12 bg-[#d2c5b2] my-3"></div>
                <p className="text-white/80 text-sm mt-2 line-clamp-2 font-serif">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
