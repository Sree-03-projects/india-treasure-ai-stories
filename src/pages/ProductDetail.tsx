
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronLeft } from 'lucide-react';
import products from '../data/products';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import AiHistoryFeature from '../components/AiHistoryFeature';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products[0]);
  const [relatedProducts, setRelatedProducts] = useState(products.slice(0, 4));
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      const related = products
        .filter(p => (p.category === foundProduct.category || p.region === foundProduct.region) && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [id]);

  const additionalImages = [
    product.image,
    "https://images.unsplash.com/photo-1617606002806-94e279c22567?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];
  
  return (
    <Layout>
      <div className="container py-8">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImageGallery
            mainImage={product.image}
            productName={product.name}
            additionalImages={additionalImages}
          />
          
          <div>
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>
        </div>
        
        <AiHistoryFeature 
          category={product.category}
          region={product.region}
          productName={product.name}
        />
        
        <RelatedProducts products={relatedProducts} />
      </div>
    </Layout>
  );
};

export default ProductDetail;
