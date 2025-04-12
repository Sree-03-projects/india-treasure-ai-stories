
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-serif bg-gradient-to-r from-theme-blue to-theme-purple bg-clip-text text-transparent">
                InDiverse
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-theme-blue transition-colors font-medium text-sm">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-theme-blue transition-colors font-medium text-sm">
              Products
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-theme-blue transition-colors font-medium text-sm">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-theme-blue transition-colors font-medium text-sm">
              Contact
            </Link>
          </nav>
          
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button aria-label="Search" className="text-gray-700 hover:text-theme-blue transition-colors p-1.5">
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/cart" className="text-gray-700 hover:text-theme-blue transition-colors p-1.5 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-theme-purple text-[10px] font-medium text-white">0</span>
            </Link>
            
            <button aria-label="Account" className="text-gray-700 hover:text-theme-blue transition-colors p-1.5">
              <User className="h-5 w-5" />
            </button>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-theme-blue transition-colors py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-800 hover:text-theme-blue transition-colors py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-theme-blue transition-colors py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-theme-blue transition-colors py-2 text-center"
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
