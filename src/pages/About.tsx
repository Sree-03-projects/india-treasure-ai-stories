
import React from 'react';
import Layout from '../components/Layout';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              Preserving and celebrating the rich cultural heritage of India through authentic crafts and treasures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-4">
              At Indian Treasures, we are dedicated to the preservation and promotion of India's rich cultural heritage through its traditional crafts. Our mission is to connect artisans with global audiences while educating customers about the cultural significance behind each treasure.
            </p>
            <p className="mb-4">
              We work directly with artisans across India to bring authentic handcrafted items to your doorstep. Each product in our collection tells a story of centuries-old traditions, exceptional craftsmanship, and cultural significance.
            </p>
            <p>
              By supporting these crafts, we aim to ensure the sustainability of traditional skills and provide fair livelihood opportunities to artisan communities throughout India.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1624809756656-de9c295646da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Indian artisan working on traditional craft" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">The Crafts We Preserve</h2>
          <p className="text-lg mb-8">
            Our collection showcases the diverse craftsmanship from different regions of India, each with its unique techniques and cultural significance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Rajasthani Lac Bangles</div>
              <p className="text-muted-foreground">
                Colorful bangles made from lac resin, adorned with intricate designs, mirrors, and beads.
              </p>
            </div>
            
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Kalamkari Textiles</div>
              <p className="text-muted-foreground">
                Hand-painted or block-printed fabrics using natural dyes, depicting mythological scenes.
              </p>
            </div>
            
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Traditional Achar</div>
              <p className="text-muted-foreground">
                Authentic pickles prepared using age-old family recipes and traditional methods.
              </p>
            </div>
            
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Terracotta Pottery</div>
              <p className="text-muted-foreground">
                Clay pottery crafted and fired using traditional techniques passed down through generations.
              </p>
            </div>
            
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Handcrafted Jewelry</div>
              <p className="text-muted-foreground">
                Traditional designs created using techniques like filigree, meenakari, and kundan work.
              </p>
            </div>
            
            <div className="p-6 bg-muted/30 rounded-lg">
              <div className="font-bold text-xl mb-2">Crochet Creations</div>
              <p className="text-muted-foreground">
                Hand-crocheted textiles featuring intricate patterns that blend traditional and contemporary designs.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1614357235247-99fabbee67f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Collection of Indian handicrafts" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our AI Cultural Guide</h2>
          <p className="mb-4">
            We believe that understanding the cultural context of each craft enhances its appreciation. That's why we've integrated an AI-powered cultural guide that provides insights into the history, significance, and techniques behind each treasure.
          </p>
          <p className="mb-4">
            Our AI doesn't just provide information—it connects you with centuries of tradition, helping you understand the social, historical, and artistic significance of each item you purchase. From religious symbolism in motifs to the evolution of techniques over time, our cultural guide brings the rich heritage of India to life.
          </p>
          <p>
            By combining technology with tradition, we hope to create a deeper connection between our customers and the incredible cultural heritage that each product represents.
          </p>
        </div>
      </div>
      
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Us in Preserving Heritage</h2>
            <p className="text-gray-300 mb-8">
              Every purchase supports traditional artisans and helps preserve centuries-old craft traditions for future generations.
            </p>
            <div className="text-2xl font-heading font-bold text-indian-saffron mb-2">
              Indian<span className="text-white">Treasures</span>
            </div>
            <p className="text-gray-300">Connecting the world with authentic India, one treasure at a time.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
