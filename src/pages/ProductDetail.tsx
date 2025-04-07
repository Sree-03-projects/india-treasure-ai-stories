
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AiHistoryFeature from '../components/AiHistoryFeature';
import products from '../data/products';
import { ChevronLeft, Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState(products.slice(0, 4));
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      
      // Find related products (same category or region)
      const related = products
        .filter(p => (p.category === foundProduct.category || p.region === foundProduct.region) && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [id]);
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
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
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-4">
              {additionalImages.map((image, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 rounded border overflow-hidden cursor-pointer ${selectedImage === image ? 'border-primary' : 'border-muted'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
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
            
            {/* Add to Cart */}
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
            
            <Separator className="my-6" />
            
            {/* Product Details Tabs */}
            <Tabs defaultValue="details">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
                <TabsTrigger value="care" className="flex-1">Care</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-4">
                <h4 className="font-medium mb-2">Product Details</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Category:</span>
                    <span>{product.category}</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Region:</span>
                    <span>{product.region}</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Handcrafted:</span>
                    <span>Yes</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Materials:</span>
                    <span>Traditional materials authentic to the region</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Artisan:</span>
                    <span>Made by skilled artisans</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <h4 className="font-medium mb-2">Shipping Information</h4>
                <p className="text-sm mb-2">
                  We ship across India and internationally. Delivery typically takes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Metro Cities:</span>
                    <span>3-5 business days</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">Rest of India:</span>
                    <span>5-7 business days</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 text-muted-foreground">International:</span>
                    <span>10-14 business days</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="care" className="pt-4">
                <h4 className="font-medium mb-2">Care Instructions</h4>
                <p className="text-sm mb-2">
                  To maintain the beauty and longevity of your traditional Indian treasures:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>Store in a cool, dry place away from direct sunlight</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>For textiles, follow specific washing instructions provided</li>
                  <li>Handle with care to preserve the intricate craftsmanship</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* AI History Feature */}
        <AiHistoryFeature 
          category={product.category}
          region={product.region}
          productName={product.name}
        />
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <Link to={`/product/${relatedProduct.id}`} className="block">
                  <div className="aspect-square overflow-hidden rounded-lg mb-3">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-indian-saffron transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">₹{relatedProduct.price.toLocaleString()}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
