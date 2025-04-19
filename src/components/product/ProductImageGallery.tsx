
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Rotate3D } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  mainImage: string;
  productName: string;
  additionalImages: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  mainImage,
  productName,
  additionalImages
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const allImages = [mainImage, ...additionalImages.filter(img => img !== mainImage)];

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? allImages.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = activeIndex === allImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="relative">
      {/* Main image container */}
      <div 
        className={cn(
          "aspect-square overflow-hidden rounded-lg mb-4 relative border heritage-border",
          zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        )}
        onClick={toggleZoom}
      >
        <div className={cn(
          "w-full h-full transition-transform duration-300 ease-out",
          zoomed ? "scale-150" : "scale-100"
        )}>
          <img 
            src={selectedImage || mainImage}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 -translate-y-1/2 pointer-events-none">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="bg-heritage-cream/80 backdrop-blur-sm text-heritage-accent h-9 w-9 rounded-full flex items-center justify-center pointer-events-auto hover:bg-heritage-cream transition-colors shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="bg-heritage-cream/80 backdrop-blur-sm text-heritage-accent h-9 w-9 rounded-full flex items-center justify-center pointer-events-auto hover:bg-heritage-cream transition-colors shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
            className="bg-heritage-cream/80 backdrop-blur-sm text-heritage-accent h-8 w-8 rounded-full flex items-center justify-center pointer-events-auto hover:bg-heritage-cream transition-colors shadow-md"
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button 
            className="bg-heritage-cream/80 backdrop-blur-sm text-heritage-accent h-8 w-8 rounded-full flex items-center justify-center pointer-events-auto hover:bg-heritage-cream transition-colors shadow-md"
            aria-label="View 3D"
          >
            <Rotate3D className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Traditional Indian decorative element */}
      <div className="w-full flex justify-center mb-4">
        <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-heritage-taupe to-transparent"></div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {allImages.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "w-20 h-20 rounded overflow-hidden cursor-pointer flex-shrink-0 border transition-all duration-200",
              activeIndex === index 
                ? "border-heritage-accent shadow-md scale-105" 
                : "border-heritage-sand hover:border-heritage-taupe"
            )}
            onClick={() => handleThumbnailClick(image, index)}
          >
            <img 
              src={image}
              alt={`${productName} - view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Image counter */}
      <div className="absolute top-2 left-2 bg-heritage-cream/70 backdrop-blur-sm text-heritage-accent text-xs px-2 py-1 rounded-full">
        {activeIndex + 1} / {allImages.length}
      </div>
    </div>
  );
};

export default ProductImageGallery;
