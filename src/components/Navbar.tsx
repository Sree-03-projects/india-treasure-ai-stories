
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f5f0e5]/90 backdrop-blur-sm py-4 border-b border-[#d2c5b2]">
      <div className="container">
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors relative group">
              <span className="font-medium">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8c6e53] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/products" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors relative group">
              <span className="font-medium">Shop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8c6e53] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/pages" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors relative group">
              <span className="font-medium">Pages</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8c6e53] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors relative group">
              <span className="font-medium">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8c6e53] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <Link to="/" className="text-3xl font-heading font-bold text-[#3c2e20] mx-auto md:mx-0 relative before:absolute before:w-6 before:h-6 before:-top-2 before:-left-2 before:border-t before:border-l before:border-[#8c6e53] before:opacity-70 after:absolute after:w-6 after:h-6 after:-bottom-2 after:-right-2 after:border-b after:border-r after:border-[#8c6e53] after:opacity-70">
            InDiverse<span className="text-[#8c6e53]">.</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8c6e53] text-[10px] font-medium text-white">0</span>
            </Link>
            <button aria-label="Account" className="text-[#3c2e20] hover:text-[#8c6e53] transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
