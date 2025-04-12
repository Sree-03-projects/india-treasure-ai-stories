
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

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
        return "public/lovable-uploads/2eae7f84-de4b-4205-9eda-deb6133d647d.png";
      case "textiles":
        return "public/lovable-uploads/0e78189d-eb53-4c00-a1af-af5e48847ab6.png";
      case "home decor":
        return "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "food":
        return "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "arts & crafts":
        return "https://images.unsplash.com/photo-1528895094412-80eb0c3558d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      default:
        return image;
    }
  };

  return (
    <Link to={link} className="block h-full">
      <Card className="overflow-hidden h-full rounded-lg card-hover border-0 shadow-card hover:shadow-elevated heritage-border">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={getCategoryImage()} 
              alt={title} 
              className="object-cover w-full h-full transition-transform duration-700 image-filter-heritage hover:scale-105"
            />
            
            <div className="absolute inset-0 overlay-gradient flex flex-col justify-end p-6">
              <div className="relative z-20">
                <h3 className="text-heritage-cream text-xl md:text-2xl font-bold font-serif mb-2">{title}</h3>
                <p className="text-heritage-cream/80 text-sm mt-1 line-clamp-2 mb-3">{description}</p>
                <span className="inline-flex items-center text-heritage-cream text-sm font-medium">
                  Explore <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
