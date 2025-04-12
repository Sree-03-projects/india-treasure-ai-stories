import { Product } from '../components/ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: "Rajasthani Lac Bangles Set",
    description: "Handcrafted lac bangles from Jaipur with intricate mirror work and traditional designs. Each set contains 6 bangles in vibrant colors.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jewelry",
    region: "Rajasthan"
  },
  {
    id: 2,
    name: "Kalamkari Hand-painted Saree",
    description: "Pure cotton saree featuring traditional Kalamkari art with mythological scenes, hand-painted using natural dyes. A masterpiece from Andhra Pradesh.",
    price: 5999,
    image: "public/lovable-uploads/0e78189d-eb53-4c00-a1af-af5e48847ab6.png",
    category: "Textiles",
    region: "Andhra Pradesh"
  },
  {
    id: 3,
    name: "Handmade Terracotta Pot Set",
    description: "Traditional terracotta pots crafted by skilled artisans. Perfect for home decor or planting. Set of 3 pots in different sizes.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1626106557976-5ab7ea3e640d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    region: "Uttar Pradesh"
  },
  {
    id: 4,
    name: "Mixed Vegetable Pickle (Achar)",
    description: "Homemade traditional mixed vegetable pickle prepared using an age-old family recipe. Preserved in mustard oil with authentic spices.",
    price: 349,
    image: "https://images.unsplash.com/photo-1593121925328-369cc0980f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    region: "Punjab"
  },
  {
    id: 5,
    name: "Silver Filigree Jhumka Earrings",
    description: "Exquisite silver jhumka earrings featuring intricate filigree work. Handcrafted by skilled artisans from Odisha.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jewelry",
    region: "Odisha"
  },
  {
    id: 6,
    name: "Hand-crocheted Table Doilies Set",
    description: "Beautiful hand-crocheted cotton doilies in traditional Indian patterns. Set of 4 in off-white color. Perfect for home decoration.",
    price: 899,
    image: "https://images.unsplash.com/photo-1618891681231-fe8c71bce8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    region: "Kerala"
  },
  {
    id: 7,
    name: "Madhubani Painting - Tree of Life",
    description: "Original Madhubani painting depicting the Tree of Life. Hand-painted on handmade paper using natural colors by artisans from Bihar.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Art",
    region: "Bihar"
  },
  {
    id: 8,
    name: "Kashmiri Embroidered Shawl",
    description: "Luxurious pure wool shawl with intricate Kashmiri aari embroidery. Perfect for special occasions or as an elegant wrap during cooler weather.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1605518290052-85d70afa4717?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    region: "Kashmir"
  },
  {
    id: 9,
    name: "Wooden Lacquer Bangle Box",
    description: "Traditional handmade wooden box with lacquer work, perfect for storing bangles and small jewelry. Features intricate floral designs.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Crafts",
    region: "Gujarat"
  },
  {
    id: 10,
    name: "Mango Pickle (Aam Ka Achar)",
    description: "Traditional sun-dried mango pickle prepared with cold-pressed mustard oil and hand-ground spices. Made following authentic family recipe.",
    price: 399,
    image: "https://images.unsplash.com/photo-1589135233689-8587bb57f875?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    region: "Rajasthan"
  },
  {
    id: 11,
    name: "Handwoven Ikat Cotton Fabric",
    description: "Authentic handwoven ikat fabric from Telangana featuring geometric patterns. Perfect for creating traditional garments and home furnishings.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    region: "Telangana"
  },
  {
    id: 12,
    name: "Brass Dhokra Figurine Set",
    description: "Handcrafted tribal Dhokra art figurines made using the lost-wax casting technique. Set of 3 musicians showcasing traditional craftsmanship.",
    price: 3599,
    image: "https://images.unsplash.com/photo-1567361415053-91599a60b4a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Crafts",
    region: "Chhattisgarh"
  }
];

export const categories = [
  {
    id: 1,
    name: "Jewelry",
    description: "Traditional handcrafted jewelry from across India",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Textiles",
    description: "Authentic handwoven and hand-painted textiles and sarees",
    image: "public/lovable-uploads/0e78189d-eb53-4c00-a1af-af5e48847ab6.png",
  },
  {
    id: 3,
    name: "Home Decor",
    description: "Beautiful handicrafts to adorn your living spaces",
    image: "https://images.unsplash.com/photo-1626106557976-5ab7ea3e640d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Food",
    description: "Traditional Indian pickles, spices, and culinary delights",
    image: "https://images.unsplash.com/photo-1589135233689-8587bb57f875?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Art & Crafts",
    description: "Authentic paintings and crafts from skilled artisans",
    image: "https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export const regions = [
  "Rajasthan",
  "Andhra Pradesh",
  "Uttar Pradesh",
  "Punjab",
  "Odisha",
  "Kerala",
  "Bihar",
  "Kashmir",
  "Gujarat",
  "Telangana",
  "Chhattisgarh",
  "West Bengal",
  "Tamil Nadu"
];

export default products;
