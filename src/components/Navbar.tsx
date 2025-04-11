
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f5f0e5]/90 backdrop-blur-sm py-4 border-b border-[#d2c5b2]">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors font-medium">
            Home
          </Link>
          <Link to="/products" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors font-medium">
            Shop
          </Link>
          <Link to="/pages" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors font-medium">
            Pages
          </Link>
          <Link to="/contact" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors font-medium">
            Contact
          </Link>
        </nav>
        
        <Link to="/" className="text-3xl font-heading font-bold text-[#3c2e20]">
          InDiverse<span className="text-indian-terracotta">.</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <button aria-label="Search" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/cart" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indian-terracotta text-[10px] font-medium text-white">0</span>
          </Link>
          <button aria-label="Account" className="text-[#3c2e20] hover:text-indian-terracotta transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
