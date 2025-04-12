
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import products from '../data/products';
import { ChevronRight, Star, Sparkles, Shield, Truck } from 'lucide-react';

const featuredProducts = products.slice(0, 4);

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h5 className="text-theme-blue font-medium mb-2">DISCOVER</h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated categories, each showcasing the finest Indian craftsmanship 
              and cultural heritage.
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
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h5 className="text-theme-purple font-medium mb-2">FEATURED</h5>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Trending Treasures</h2>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/products" className="inline-flex items-center">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
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
      <section className="py-16 bg-theme-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-theme-purple/20 text-theme-purple rounded-full px-4 py-1 text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Discover Stories Behind Each Treasure
              </h2>
              <p className="text-gray-300 mb-8">
                Our AI-powered cultural guide reveals the rich history and traditions behind each authentic Indian treasure. Learn about the craftsmanship, regional significance, and cultural heritage as you shop.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-theme-blue/20 flex items-center justify-center">
                    <Star className="h-3.5 w-3.5 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Authentic Stories</h4>
                    <p className="text-sm text-gray-400">Learn about regional symbolism and meanings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-theme-blue/20 flex items-center justify-center">
                    <Star className="h-3.5 w-3.5 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Artisan Techniques</h4>
                    <p className="text-sm text-gray-400">Discover age-old crafting methods</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-theme-blue hover:bg-theme-blue/90 text-white">
                <Link to="/products">Explore with AI Guide</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Indian artisan at work" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-card p-4 w-64 text-gray-800">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-theme-purple/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-theme-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">AI Cultural Guide</div>
                    <p className="text-xs text-gray-600 mt-1">
                      "These lac bangles feature traditional Rajasthani motifs that symbolize prosperity and are crafted using techniques passed down through generations..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features/Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose InDiverse</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring you the finest Indian treasures with modern convenience and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft text-center hover-lift">
              <div className="h-12 w-12 bg-theme-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2">Authentic Craftsmanship</h3>
              <p className="text-gray-600">
                Every item is handcrafted by skilled artisans using traditional techniques and premium materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center hover-lift">
              <div className="h-12 w-12 bg-theme-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-theme-purple" />
              </div>
              <h3 className="font-bold text-xl mb-2">Worldwide Shipping</h3>
              <p className="text-gray-600">
                We deliver Indian treasures to your doorstep anywhere in the world with secure packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center hover-lift">
              <div className="h-12 w-12 bg-theme-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2">Artisan Support</h3>
              <p className="text-gray-600">
                Your purchase directly supports traditional artisans and helps preserve cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Regions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h5 className="text-theme-purple font-medium mb-2">REGIONS</h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Artisan Crafts from Across India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each region of India has its unique craft traditions. Discover authentic treasures from these culturally rich states.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Rajasthan", "Kashmir", "Gujarat", "Tamil Nadu", "West Bengal", "Kerala"].map((region) => (
              <Link 
                key={region} 
                to={`/products?region=${region}`} 
                className="bg-white hover:bg-gray-50 transition-colors py-4 px-3 rounded-lg shadow-soft text-center hover-lift"
              >
                <div className="font-medium text-gray-800">{region}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-theme-blue to-theme-purple text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Join our newsletter for updates on new arrivals, cultural stories, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              />
              <Button className="bg-white text-theme-dark hover:bg-white/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
