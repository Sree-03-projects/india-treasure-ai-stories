
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown, Mic, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Women", 
    subcategories: [
      { title: "Sarees", items: ["Banarasi", "Kanjivaram", "Chikankari", "Cotton"] },
      { title: "Ethnic Wear", items: ["Kurtas", "Suits", "Lehengas", "Dupattas"] },
      { title: "Jewelry", items: ["Necklaces", "Earrings", "Bangles", "Anklets"] },
      { title: "Footwear", items: ["Juttis", "Kolhapuris", "Mojaris"] }
    ]
  },
  {
    title: "Men",
    subcategories: [
      { title: "Ethnic Wear", items: ["Kurtas", "Nehru Jackets", "Dhotis", "Sherwanis"] },
      { title: "Accessories", items: ["Turbans", "Stoles", "Cufflinks"] },
      { title: "Footwear", items: ["Juttis", "Kolhapuris", "Mojaris"] }
    ]
  },
  {
    title: "Jewelry",
    subcategories: [
      { title: "Materials", items: ["Gold", "Silver", "Temple", "Kundan"] },
      { title: "Types", items: ["Necklaces", "Earrings", "Bangles", "Anklets"] },
      { title: "Regional", items: ["Rajasthan", "Bengal", "Tamil Nadu", "Kerala"] }
    ]
  },
  {
    title: "Home & Decor",
    subcategories: [
      { title: "Decor", items: ["Pottery", "Wall Art", "Sculptures", "Lamps"] },
      { title: "Textiles", items: ["Cushion Covers", "Bedspreads", "Tapestries"] },
      { title: "Kitchen", items: ["Brass Utensils", "Copper Vessels", "Ceramic Plates"] }
    ]
  },
  {
    title: "Artisans",
    subcategories: [
      { title: "By Region", items: ["North India", "South India", "East India", "West India"] },
      { title: "By Craft", items: ["Weaving", "Embroidery", "Pottery", "Metalwork"] },
      { title: "Featured", items: ["Master Artisans", "Award Winners", "New Talent"] }
    ]
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
    console.log('Searching for:', searchQuery);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-serif text-heritage-accent">
                InDiverse
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="text-heritage-accent font-medium text-sm">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 gap-3 p-4 w-[500px]">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.title} className="mb-4">
                            <h4 className="font-medium text-heritage-accent mb-1">{subcategory.title}</h4>
                            <ul className="space-y-1">
                              {subcategory.items.map((item) => (
                                <li key={item}>
                                  <NavigationMenuLink asChild>
                                    <Link 
                                      to={`/products?category=${item}`}
                                      className="text-sm text-heritage-umber hover:text-heritage-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link to="/products" className="text-heritage-accent hover:text-heritage-umber transition-colors font-medium text-sm px-4 py-2">
                    All Products
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
              <div className="relative rounded-full border border-gray-200 bg-gray-50 flex items-center pl-4 pr-1">
                <Search className="h-4 w-4 text-gray-400 absolute left-3" />
                <input
                  type="text"
                  placeholder="Search for products, crafts, artisans..."
                  className="bg-transparent border-none focus:outline-none py-2 pl-6 pr-12 w-[300px] text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex space-x-1">
                  <button type="button" aria-label="Voice Search" className="p-1.5 text-gray-500 hover:text-heritage-accent">
                    <Mic className="h-4 w-4" />
                  </button>
                  <button type="button" aria-label="Image Search" className="p-1.5 text-gray-500 hover:text-heritage-accent">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
            
            {/* User Account */}
            <button aria-label="Account" className="text-heritage-accent hover:text-heritage-umber transition-colors flex flex-col items-center text-xs">
              <User className="h-5 w-5 mb-0.5" />
              <span>Profile</span>
            </button>
            
            {/* Wishlist */}
            <Link to="/wishlist" className="text-heritage-accent hover:text-heritage-umber transition-colors flex flex-col items-center text-xs">
              <Heart className="h-5 w-5 mb-0.5" />
              <span>Wishlist</span>
            </Link>
            
            {/* Shopping Bag */}
            <Link to="/cart" className="text-heritage-accent hover:text-heritage-umber transition-colors flex flex-col items-center text-xs relative">
              <ShoppingBag className="h-5 w-5 mb-0.5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indian-maroon text-[10px] font-medium text-white">0</span>
              <span>Bag</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-heritage-accent"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search (only visible on mobile) */}
        <div className="pb-3 block md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex items-center relative">
            <div className="relative rounded-full border border-gray-200 bg-gray-50 flex items-center w-full">
              <Search className="h-4 w-4 text-gray-400 absolute left-3" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none py-2 pl-10 pr-12 w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex space-x-1 absolute right-2">
                <button type="button" aria-label="Voice Search" className="p-1.5 text-gray-500 hover:text-heritage-accent">
                  <Mic className="h-4 w-4" />
                </button>
                <button type="button" aria-label="Image Search" className="p-1.5 text-gray-500 hover:text-heritage-accent">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fadeIn bg-white border-t border-gray-100">
            <nav className="space-y-2 p-4">
              {categories.map((category) => (
                <div key={category.title} className="mb-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <h3 className="font-medium text-heritage-accent">{category.title}</h3>
                    <ChevronDown className="h-4 w-4 text-heritage-accent" />
                  </div>
                  <div className="pt-2">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.title} className="mb-2">
                        <h4 className="text-sm font-medium text-heritage-accent/80 ml-2">{subcategory.title}</h4>
                        <ul className="space-y-1 mt-1">
                          {subcategory.items.map((item) => (
                            <li key={item}>
                              <Link 
                                to={`/products?category=${item}`}
                                className="text-sm text-heritage-umber hover:text-heritage-accent transition-colors block py-1 px-4"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <Link 
                to="/products" 
                className="block text-heritage-accent hover:text-heritage-umber transition-colors py-2 border-t border-gray-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
