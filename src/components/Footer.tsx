
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#3c2e20] text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-heading">InDiverse<span className="text-[#a18267]">.</span></h3>
            <p className="text-gray-300">
              Discover authentic Indian handicrafts, textiles, and treasures that 
              celebrate the rich cultural heritage of India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products/jewelry" className="text-gray-300 hover:text-[#a18267] transition-colors">Jewelry</Link></li>
              <li><Link to="/products/textiles" className="text-gray-300 hover:text-[#a18267] transition-colors">Textiles & Sarees</Link></li>
              <li><Link to="/products/home-decor" className="text-gray-300 hover:text-[#a18267] transition-colors">Home Decor</Link></li>
              <li><Link to="/products/food" className="text-gray-300 hover:text-[#a18267] transition-colors">Food & Spices</Link></li>
              <li><Link to="/products/crafts" className="text-gray-300 hover:text-[#a18267] transition-colors">Crafts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#a18267] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#a18267] transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-[#a18267] transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-[#a18267] transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#a18267] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on new arrivals and cultural stories.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-white/10 rounded-l text-white placeholder-gray-400 flex-grow"
              />
              <button className="bg-[#a18267] hover:bg-[#8c6e53] px-4 py-2 rounded-r font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} InDiverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
