
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
          
          <Link to="/" className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1604335398480-e8c535055161?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
              alt="InDiverse Logo" 
              className="h-12 w-12 object-cover rounded-full border-2 border-[#8c6e53]"
            />
            <span className="ml-2 text-2xl font-heading font-bold text-[#3c2e20]">
              InDiverse<span className="text-[#8c6e53]">.</span>
            </span>
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
