
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from '../ProductCard';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
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
  );
};

export default ProductTabs;
