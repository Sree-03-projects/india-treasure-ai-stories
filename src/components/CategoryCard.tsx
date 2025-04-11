
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
  return (
    <Link to={link} className="block h-full">
      <Card className="overflow-hidden h-full group hover:shadow-md transition-all duration-300 border-none">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-xl md:text-2xl font-bold font-heading">{title}</h3>
            <p className="text-white/90 text-sm mt-2 line-clamp-2">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
