
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
      <Card className="overflow-hidden h-full group border-2 border-[#d2c5b2] transition-all duration-300 hover:border-[#8c6e53] relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d2c7ba\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-40 before:pointer-events-none">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={getCategoryImage()} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 filter sepia-[0.2] brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
            <div className="border-l-2 border-[#d2c5b2] pl-3">
              <h3 className="text-white text-xl md:text-2xl font-bold font-heading">{title}</h3>
              <p className="text-white/90 text-sm mt-2 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
