
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

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
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.02] hover:shadow-md duration-300">
      <Link to={`/product/${product.id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-indian-saffron text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.region}
          </div>
        </div>
      </Link>
      
      <CardContent className="pt-4 flex-grow">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg line-clamp-1 hover:text-indian-saffron transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="font-semibold">₹{product.price.toLocaleString()}</div>
        <Button size="sm" className="rounded-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
