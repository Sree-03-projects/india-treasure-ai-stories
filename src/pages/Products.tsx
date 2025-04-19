
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X, Mic, Camera } from 'lucide-react';
import allProducts, { categories, regions } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const regionParam = searchParams.get('region');
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    if (regionParam) {
      setSelectedRegions([regionParam]);
    }
  }, [searchParams]);
  
  // Filter products based on selected filters
  useEffect(() => {
    let results = allProducts;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    results = results.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      results = results.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by regions
    if (selectedRegions.length > 0) {
      results = results.filter(product => 
        selectedRegions.includes(product.region)
      );
    }
    
    setFilteredProducts(results);
  }, [searchTerm, priceRange, selectedCategories, selectedRegions]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category) 
        : [...prev, category]
    );
  };
  
  const handleRegionChange = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(reg => reg !== region) 
        : [...prev, region]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 6000]);
    setSelectedCategories([]);
    setSelectedRegions([]);
    setSearchParams({});
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Voice search functionality
  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      console.log('Speech recognition not supported');
    }
  };
  
  return (
    <Layout>
      <div className="bg-heritage-beige/50 py-8">
        <div className="container">
          <h1 className="text-3xl font-serif font-bold text-heritage-accent mb-2">Explore Indian Treasures</h1>
          <p className="text-heritage-umber/80">
            Discover authentic handcrafted items from across India
          </p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="w-full md:w-64 lg:w-80 hidden md:block">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-heritage-accent text-lg">Filters</h2>
                {(selectedCategories.length > 0 || selectedRegions.length > 0 || searchTerm || priceRange[0] > 0 || priceRange[1] < 6000) && (
                  <Button variant="link" size="sm" onClick={clearFilters} className="h-auto p-0 text-indian-maroon">
                    Clear all
                  </Button>
                )}
              </div>
              
              <div className="space-y-6 heritage-paper p-4 rounded-lg">
                {/* Search */}
                <div>
                  <h3 className="font-medium text-heritage-accent mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8 pr-16 border-heritage-taupe focus:border-indian-maroon"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-2 top-1.5 flex">
                      <button 
                        type="button" 
                        onClick={startVoiceSearch}
                        className={`p-1.5 rounded-full ${isListening ? 'bg-indian-maroon text-white' : 'text-muted-foreground hover:text-indian-maroon'}`}
                      >
                        <Mic className="h-4 w-4" />
                      </button>
                      <button type="button" className="p-1.5 text-muted-foreground hover:text-indian-maroon">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-medium text-heritage-accent mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 6000]}
                    max={6000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-2 text-sm text-heritage-umber">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h3 className="font-medium text-heritage-accent mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => handleCategoryChange(category.name)}
                          className="text-indian-maroon border-heritage-taupe data-[state=checked]:bg-indian-maroon data-[state=checked]:border-indian-maroon"
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="text-sm cursor-pointer text-heritage-umber hover:text-indian-maroon"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Regions */}
                <div>
                  <h3 className="font-medium text-heritage-accent mb-3">Regions</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {regions.map((region, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`region-${index}`}
                          checked={selectedRegions.includes(region)}
                          onCheckedChange={() => handleRegionChange(region)}
                          className="text-indian-maroon border-heritage-taupe data-[state=checked]:bg-indian-maroon data-[state=checked]:border-indian-maroon"
                        />
                        <label 
                          htmlFor={`region-${index}`}
                          className="text-sm cursor-pointer text-heritage-umber hover:text-indian-maroon"
                        >
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters Button */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={toggleFilters} 
              className="w-full border-heritage-taupe text-heritage-accent hover:bg-heritage-cream hover:text-indian-maroon"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {(selectedCategories.length > 0 || selectedRegions.length > 0) && (
                <span className="ml-1 text-xs bg-indian-maroon text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCategories.length + selectedRegions.length}
                </span>
              )}
            </Button>
            
            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="fixed inset-0 bg-background z-50 p-4 overflow-y-auto animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif text-heritage-accent text-lg">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={toggleFilters} className="text-heritage-accent">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <h3 className="font-medium text-heritage-accent mb-3">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8 pr-16 border-heritage-taupe focus:border-indian-maroon"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="absolute right-2 top-1.5 flex">
                        <button 
                          type="button" 
                          onClick={startVoiceSearch}
                          className={`p-1.5 rounded-full ${isListening ? 'bg-indian-maroon text-white' : 'text-muted-foreground hover:text-indian-maroon'}`}
                        >
                          <Mic className="h-4 w-4" />
                        </button>
                        <button type="button" className="p-1.5 text-muted-foreground hover:text-indian-maroon">
                          <Camera className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium text-heritage-accent mb-3">Price Range</h3>
                    <Slider
                      defaultValue={[0, 6000]}
                      max={6000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                    <div className="flex justify-between mt-2 text-sm text-heritage-umber">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div>
                    <h3 className="font-medium text-heritage-accent mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-category-${category.id}`}
                            checked={selectedCategories.includes(category.name)}
                            onCheckedChange={() => handleCategoryChange(category.name)}
                            className="text-indian-maroon border-heritage-taupe data-[state=checked]:bg-indian-maroon data-[state=checked]:border-indian-maroon"
                          />
                          <label 
                            htmlFor={`mobile-category-${category.id}`}
                            className="text-sm cursor-pointer text-heritage-umber hover:text-indian-maroon"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Regions */}
                  <div>
                    <h3 className="font-medium text-heritage-accent mb-3">Regions</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-1">
                      {regions.map((region, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-region-${index}`}
                            checked={selectedRegions.includes(region)}
                            onCheckedChange={() => handleRegionChange(region)}
                            className="text-indian-maroon border-heritage-taupe data-[state=checked]:bg-indian-maroon data-[state=checked]:border-indian-maroon"
                          />
                          <label 
                            htmlFor={`mobile-region-${index}`}
                            className="text-sm cursor-pointer text-heritage-umber hover:text-indian-maroon"
                          >
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={clearFilters} 
                      className="flex-1 border-heritage-taupe text-heritage-accent hover:bg-heritage-cream"
                    >
                      Clear All
                    </Button>
                    <Button 
                      onClick={toggleFilters} 
                      className="flex-1 bg-indian-maroon hover:bg-indian-maroon/90 text-white"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-heritage-umber/80">
                  Showing {filteredProducts.length} products
                </span>
                
                {/* Applied filters */}
                {(selectedCategories.length > 0 || selectedRegions.length > 0) && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedCategories.map(cat => (
                      <Badge 
                        key={cat} 
                        variant="outline" 
                        className="bg-heritage-cream/50 text-heritage-accent border-heritage-taupe"
                      >
                        {cat}
                        <button 
                          className="ml-1 hover:text-indian-maroon" 
                          onClick={() => handleCategoryChange(cat)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {selectedRegions.map(reg => (
                      <Badge 
                        key={reg} 
                        variant="outline" 
                        className="bg-heritage-cream/50 text-heritage-accent border-heritage-taupe"
                      >
                        {reg}
                        <button 
                          className="ml-1 hover:text-indian-maroon" 
                          onClick={() => handleRegionChange(reg)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px] border-heritage-taupe text-heritage-umber">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border-heritage-taupe">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 heritage-paper p-8 rounded-lg">
                <h3 className="text-xl font-serif font-medium text-heritage-accent mb-2">No products found</h3>
                <p className="text-heritage-umber/80 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  onClick={clearFilters}
                  className="bg-indian-maroon hover:bg-indian-maroon/90 text-white"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
