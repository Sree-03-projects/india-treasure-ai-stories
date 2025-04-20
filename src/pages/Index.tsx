import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import products from '../data/products';
import { ChevronRight, Star, Sparkles, Shield, Truck, Award, MapPin } from 'lucide-react';

// Featured products and new arrivals
const featuredProducts = products.slice(0, 4);
const newArrivals = products.slice(4, 8);

// Regions with their images
const regions = [
  { name: "Rajasthan", image: "https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { name: "Kashmir", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { name: "Gujarat", image: "https://images.unsplash.com/photo-1568871771767-a63c2a9268ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { name: "Tamil Nadu", image: "https://images.unsplash.com/photo-1621136553898-23f7c371c8f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
];

// Featured artisan
const featuredArtisan = {
  name: "Lakshmi Devi",
  craft: "Kalamkari Artisan",
  region: "Andhra Pradesh",
  image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  story: "Lakshmi Devi has been practicing Kalamkari art for over 30 years. Using natural dyes and traditional techniques, she creates intricate designs that tell stories from Indian mythology."
};

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryShowcase />
      
      {/* Trending section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-indian-gold mr-2" />
                <h5 className="text-sm font-medium uppercase text-indian-gold">TRENDING NOW</h5>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent">Traditional Treasures</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-heritage-accent hover:text-heritage-umber flex items-center mt-2 md:mt-0">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured banner */}
      <section className="py-10">
        <div className="container">
          <div className="relative h-60 sm:h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Festive Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-10 max-w-xl">
                <span className="inline-block px-4 py-1 rounded-full bg-indian-gold text-white text-xs sm:text-sm font-medium mb-3">
                  NEW ARRIVALS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 font-serif">
                  Festive Collection 2023
                </h2>
                <p className="text-white/90 mb-4 text-sm sm:text-base">
                  Celebrate the spirit of Indian festivals with our exquisite collection of traditional wear and decor items.
                </p>
                <Link to="/products?category=Festival" className="inline-block px-6 py-2.5 bg-white text-heritage-accent rounded-full text-sm font-medium hover:bg-gray-100 transition">
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-12 bg-gray-50/80">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-indian-blue mr-2" />
                <h5 className="text-sm font-medium uppercase text-indian-blue">JUST ARRIVED</h5>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent">New Arrivals</h2>
            </div>
            <Link to="/products?sort=newest" className="text-sm font-medium text-heritage-accent hover:text-heritage-umber flex items-center mt-2 md:mt-0">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Region Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-2">
              <MapPin className="h-5 w-5 text-indian-maroon mr-2" />
              <h5 className="text-sm font-medium uppercase text-indian-maroon">CRAFTS BY REGION</h5>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent mb-3">
              Explore Indian Heritage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover unique crafts and traditions from different regions of India, each with its own rich cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {regions.map((region) => (
              <Link 
                key={region.name} 
                to={`/products?region=${region.name}`}
                className="group relative rounded-lg overflow-hidden h-64"
              >
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-bold text-xl md:text-2xl">{region.name}</h3>
                  <span className="inline-block mt-2 text-white/80 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                    Explore Crafts
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Artisan Spotlight */}
      <section className="py-12 bg-gray-50/80">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-indian-green mr-2" />
                <h5 className="text-sm font-medium uppercase text-indian-green">ARTISAN SPOTLIGHT</h5>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent">Meet Our Craftspeople</h2>
            </div>
            <Link to="/artisans" className="text-sm font-medium text-heritage-accent hover:text-heritage-umber flex items-center mt-2 md:mt-0">
              All Artisans
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <img 
                  src={featuredArtisan.image} 
                  alt={featuredArtisan.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-heritage-accent">
                  {featuredArtisan.region}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-indian-green/10 text-indian-green text-xs font-medium mb-4">
                  Featured Artisan
                </div>
                <h3 className="text-2xl font-serif font-bold text-heritage-accent mb-2">{featuredArtisan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{featuredArtisan.craft}</p>
                <div className="mb-6 text-gray-700">{featuredArtisan.story}</div>
                <Link 
                  to="/artisans/1" 
                  className="inline-flex items-center text-heritage-accent hover:text-heritage-umber font-medium text-sm"
                >
                  Meet {featuredArtisan.name.split(' ')[0]}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-heritage-accent mb-3">
              Why Choose InDiverse
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We connect you directly with Indian artisans, ensuring authenticity and supporting traditional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="h-12 w-12 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-heritage-brown" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-heritage-accent">Authentic Craftsmanship</h3>
              <p className="text-gray-600 text-sm">
                Every item is handcrafted by skilled artisans using traditional techniques and premium materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="h-12 w-12 bg-indian-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-indian-green" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-heritage-accent">Artisan Support</h3>
              <p className="text-gray-600 text-sm">
                Your purchase directly supports traditional artisans and helps preserve cultural heritage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="h-12 w-12 bg-indian-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-indian-blue" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-heritage-accent">Worldwide Shipping</h3>
              <p className="text-gray-600 text-sm">
                We deliver Indian treasures to your doorstep anywhere in the world with secure packaging.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-r from-heritage-accent/90 to-heritage-brown/90 text-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Stay Connected</h2>
            <p className="text-white/80 mb-6">
              Join our newsletter for updates on new collections, artisan stories, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800 text-sm"
              />
              <button className="bg-white text-heritage-accent hover:bg-white/90 px-6 py-3 rounded-lg font-medium text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/60 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from InDiverse.
            </p>
          </div>
        </div>
      </section>
      
      {/* Chat Assistant */}
      <ChatAssistant />
    </Layout>
  );
};

export default Index;
