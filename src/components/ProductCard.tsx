
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  region: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white overflow-hidden rounded shadow-sm hover:shadow-myntra-hover transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image with overlay on hover */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick action buttons on hover */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm flex justify-between transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-white shadow-sm hover:bg-gray-50 transition" aria-label="Add to wishlist">
            <Heart className="h-5 w-5 text-gray-700" />
          </button>
          <button className="flex items-center justify-center bg-indian-maroon text-white px-4 py-2 rounded-full shadow-sm hover:bg-indian-maroon/90 transition">
            <ShoppingBag className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Product badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.region && (
          <span className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded font-medium text-indian-maroon">
            {product.region}
          </span>
        )}
      </div>
      
      {/* Artisan badge */}
      <div className="absolute top-2 right-2">
        <span className="bg-indian-gold/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium flex items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-white mr-1"></span>
          Artisan Crafted
        </span>
      </div>
      
      {/* Product info */}
      <div className="p-3">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-indian-maroon transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 line-clamp-1 mt-1">{product.description}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="font-semibold text-gray-900">₹{product.price.toLocaleString()}</div>
          <div className="flex items-center text-xs">
            <span className="flex items-center text-indian-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              4.2
            </span>
            <span className="text-gray-400 ml-1">(28)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
