
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-indian-saffron">
            Indian<span className="text-indian-green">Treasures</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-foreground hover:text-indian-saffron transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search, Cart, Account - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[200px] pl-8 rounded-full bg-muted/50"
            />
          </div>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indian-saffron text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indian-saffron text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 px-4">
          <div className="flex flex-col space-y-6 py-8">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8 rounded-full bg-muted/50"
              />
            </div>
            
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium py-2 border-b border-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <Button variant="ghost" className="flex items-center justify-start space-x-2">
              <User className="h-5 w-5" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
