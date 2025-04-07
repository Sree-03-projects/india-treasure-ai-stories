
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from 'lucide-react';
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
  
  return (
    <Layout>
      <div className="bg-muted/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Explore Indian Treasures</h1>
          <p className="text-muted-foreground">
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
                <h2 className="font-semibold text-lg">Filters</h2>
                {(selectedCategories.length > 0 || selectedRegions.length > 0 || searchTerm || priceRange[0] > 0 || priceRange[1] < 6000) && (
                  <Button variant="link" size="sm" onClick={clearFilters} className="h-auto p-0">
                    Clear all
                  </Button>
                )}
              </div>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <h3 className="font-medium mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 6000]}
                    max={6000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => handleCategoryChange(category.name)}
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="text-sm cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Regions */}
                <div>
                  <h3 className="font-medium mb-3">Regions</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {regions.map((region, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`region-${index}`}
                          checked={selectedRegions.includes(region)}
                          onCheckedChange={() => handleRegionChange(region)}
                        />
                        <label 
                          htmlFor={`region-${index}`}
                          className="text-sm cursor-pointer"
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
            <Button variant="outline" onClick={toggleFilters} className="w-full">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {(selectedCategories.length > 0 || selectedRegions.length > 0) && (
                <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCategories.length + selectedRegions.length}
                </span>
              )}
            </Button>
            
            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="fixed inset-0 bg-background z-50 p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={toggleFilters}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <h3 className="font-medium mb-3">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider
                      defaultValue={[0, 6000]}
                      max={6000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-category-${category.id}`}
                            checked={selectedCategories.includes(category.name)}
                            onCheckedChange={() => handleCategoryChange(category.name)}
                          />
                          <label 
                            htmlFor={`mobile-category-${category.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Regions */}
                  <div>
                    <h3 className="font-medium mb-3">Regions</h3>
                    <div className="space-y-2">
                      {regions.map((region, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-region-${index}`}
                            checked={selectedRegions.includes(region)}
                            onCheckedChange={() => handleRegionChange(region)}
                          />
                          <label 
                            htmlFor={`mobile-region-${index}`}
                            className="text-sm cursor-pointer"
                          >
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex gap-3">
                    <Button variant="outline" onClick={clearFilters} className="flex-1">
                      Clear All
                    </Button>
                    <Button onClick={toggleFilters} className="flex-1">
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
                <span className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
              </div>
              
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-1">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>
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
