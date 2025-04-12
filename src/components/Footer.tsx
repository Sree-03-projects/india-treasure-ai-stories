
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-dark text-white">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold font-serif text-white">InDiverse</h3>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover authentic Indian handicrafts and treasures that celebrate 
              the rich cultural heritage of India with modern design sensibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/jewelry" className="text-gray-400 hover:text-white transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products/textiles" className="text-gray-400 hover:text-white transition-colors">
                  Textiles & Sarees
                </Link>
              </li>
              <li>
                <Link to="/products/home-decor" className="text-gray-400 hover:text-white transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products/food" className="text-gray-400 hover:text-white transition-colors">
                  Food & Spices
                </Link>
              </li>
              <li>
                <Link to="/products/crafts" className="text-gray-400 hover:text-white transition-colors">
                  Arts & Crafts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Crafts Avenue, Jaipur, Rajasthan, India - 302001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">info@indiverse.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} InDiverse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
