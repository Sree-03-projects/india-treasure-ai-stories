
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Product } from '../ProductCard';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-sm">
            {product.category}
          </Badge>
          <Badge variant="secondary" className="bg-muted/80">
            {product.region}
          </Badge>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        
        <div className="text-2xl font-semibold mb-4">
          ₹{product.price.toLocaleString()}
        </div>
        
        <p className="text-muted-foreground mb-6">
          {product.description}
        </p>
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Quantity:</span>
          <div className="flex items-center border rounded-md">
            <button 
              onClick={decreaseQuantity} 
              className="w-8 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-10 text-center">{quantity}</span>
            <button 
              onClick={increaseQuantity} 
              className="w-8 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="flex-1 gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
