
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm py-4">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
            Shop
          </Link>
          <Link to="/pages" className="text-foreground hover:text-primary transition-colors font-medium">
            Pages
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </Link>
        </nav>
        
        <Link to="/" className="text-3xl font-heading font-bold">
          InDiverse<span className="text-primary">.</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <button aria-label="Search" className="text-foreground">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/cart" className="text-foreground relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">0</span>
          </Link>
          <button aria-label="Account" className="text-foreground">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
