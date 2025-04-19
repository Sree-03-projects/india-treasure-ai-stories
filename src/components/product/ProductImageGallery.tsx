
import React, { useState } from 'react';

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

  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img 
          src={selectedImage || mainImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex gap-4">
        {additionalImages.map((image, index) => (
          <div 
            key={index}
            className={`w-20 h-20 rounded border overflow-hidden cursor-pointer ${
              selectedImage === image ? 'border-primary' : 'border-muted'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image}
              alt={`${productName} - view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
