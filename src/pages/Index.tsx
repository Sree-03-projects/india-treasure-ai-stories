
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import products from '../data/products';

const featuredProducts = products.slice(0, 4);

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indian-brown font-heading">Explore Our Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover authentic Indian treasures across various categories, each with its unique cultural significance and artistic heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                image={category.image}
                link={`/products?category=${category.name}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-indian-brown font-heading">Featured Treasures</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our handpicked selection of authentic Indian crafts and treasures, each with a story to tell.
              </p>
            </div>
            <Button asChild variant="outline" className="border-indian-terracotta text-indian-terracotta hover:bg-indian-terracotta/10">
              <Link to="/products">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Feature Showcase */}
      <section className="py-16 bg-[#f8f3ea] pattern-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indian-brown font-heading">Discover the Stories Behind the Crafts</h2>
              <p className="text-lg mb-6 text-[#5a4a3a]">
                Our AI-powered cultural guide reveals the rich history and traditions behind each authentic Indian treasure. Learn about the craftsmanship, regional significance, and cultural heritage as you shop.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a18267] text-white mr-3">✓</span>
                  <span className="text-[#5a4a3a]">Explore centuries-old craft traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a18267] text-white mr-3">✓</span>
                  <span className="text-[#5a4a3a]">Understand regional influences and techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a18267] text-white mr-3">✓</span>
                  <span className="text-[#5a4a3a]">Learn about materials and traditional methods</span>
                </li>
              </ul>
              <Button asChild className="bg-[#a18267] hover:bg-[#8c6e53] text-white">
                <Link to="/products">Explore & Learn</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1565942443747-e4e66f3a58d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Indian artisan at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-64">
                <div className="text-sm font-medium mb-1 text-indian-brown">AI Cultural Guide</div>
                <p className="text-xs text-muted-foreground">
                  "Discover how these lac bangles are handcrafted by artisans in Rajasthan using techniques passed down through generations..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Regions */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indian-brown font-heading">Artisan Crafts from Across India</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each region of India has its unique craft traditions. Discover authentic treasures from these culturally rich states.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Rajasthan", "Kashmir", "Gujarat", "Tamil Nadu", "West Bengal", "Kerala"].map((region) => (
              <Link 
                key={region} 
                to={`/products?region=${region}`} 
                className="bg-[#f8f3ea] hover:bg-[#e8e0d4] transition-colors py-4 px-2 rounded-md text-center"
              >
                <div className="font-medium text-indian-brown">{region}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
