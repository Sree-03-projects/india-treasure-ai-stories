
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-vintage-parchment/90 backdrop-blur-sm py-4 border-b border-vintage-brass/30 vintage-shadow">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vintage-mahogany p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-vintage-mahogany hover:text-vintage-leather transition-colors relative group">
              <span className="font-serif uppercase tracking-wider text-sm">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-vintage-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/products" className="text-vintage-mahogany hover:text-vintage-leather transition-colors relative group">
              <span className="font-serif uppercase tracking-wider text-sm">Shop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-vintage-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/pages" className="text-vintage-mahogany hover:text-vintage-leather transition-colors relative group">
              <span className="font-serif uppercase tracking-wider text-sm">Pages</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-vintage-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-vintage-mahogany hover:text-vintage-leather transition-colors relative group">
              <span className="font-serif uppercase tracking-wider text-sm">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-vintage-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <Link to="/" className="flex items-center">
            <div className="historical-image overflow-hidden w-14 h-14 rounded-full border-2 border-vintage-brass">
              <img 
                src="https://images.unsplash.com/photo-1580747181135-5db59b0ffa0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
                alt="InDiverse Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="ml-3 text-2xl font-accent font-medium text-vintage-mahogany">
              InDiverse<span className="text-vintage-leather">.</span>
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-vintage-mahogany hover:text-vintage-leather transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-vintage-mahogany hover:text-vintage-leather transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-vintage-leather text-[10px] font-medium text-vintage-parchment">0</span>
            </Link>
            <button aria-label="Account" className="text-vintage-mahogany hover:text-vintage-leather transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-vintage-brass/20 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-vintage-mahogany hover:text-vintage-leather transition-colors py-2 font-serif text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-vintage-mahogany hover:text-vintage-leather transition-colors py-2 font-serif text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/pages" 
                className="text-vintage-mahogany hover:text-vintage-leather transition-colors py-2 font-serif text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pages
              </Link>
              <Link 
                to="/contact" 
                className="text-vintage-mahogany hover:text-vintage-leather transition-colors py-2 font-serif text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
