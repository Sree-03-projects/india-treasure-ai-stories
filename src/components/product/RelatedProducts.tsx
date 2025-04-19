
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.id}`} className="block">
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium group-hover:text-indian-saffron transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm">₹{product.price.toLocaleString()}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
