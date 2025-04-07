
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from 'lucide-react';

interface AiHistoryFeatureProps {
  category: string;
  region: string;
  productName: string;
}

const AiHistoryFeature: React.FC<AiHistoryFeatureProps> = ({ category, region, productName }) => {
  const [history, setHistory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Mock function to simulate AI generating history
  const generateHistory = () => {
    setLoading(true);
    
    // Simulating API call delay
    setTimeout(() => {
      const histories: Record<string, string> = {
        "Rajasthan_Jewelry": 
          `The beautiful lac bangles (Lakh ki Choodiyan) of Rajasthan date back to the Mughal era. Artisans in regions like Jaipur and Bikaner have preserved this craft for centuries. Lac is derived from a resinous secretion of the lac insect and is melted, colored with natural dyes, then shaped into bangles. These bangles often feature intricate inlay work with mirrors, stones, and gold paint. They were traditionally part of a bride's wedding trousseau and are still considered auspicious in many communities.`,
        
        "Textiles_Kalamkari": 
          `Kalamkari, which literally means 'pen craft', is an ancient textile art from Andhra Pradesh, particularly from regions like Srikalahasti and Machilipatnam. This art form dates back to over 3000 years and was patronized by the Mughals and the Golconda Sultanate. The process involves 23 laborious steps using natural dyes and traditional methods. The ancient art involves hand-drawing with a bamboo pen using natural dyes extracted from plants. Traditionally, Kalamkari depicted scenes from Hindu epics like Ramayana and Mahabharata, but evolved to include Persian motifs and secular themes during the Mughal period.`,
        
        "Food_Pickles":
          `Indian pickles or 'achar' have been a staple in Indian cuisine for thousands of years, with mentions in ancient Ayurvedic texts. Traditional pickling was developed as a preservation method in a tropical climate before refrigeration. Each region of India has its distinct pickling styles - North India favors mustard oil, South India uses sesame oil, and Western India prefers groundnut oil. The preparation involves sun-drying ingredients and using natural preservatives like salt, oil, and spices. Many families still follow generations-old recipes, with the knowledge passed down through oral tradition.`,
        
        "Crafts_Pottery":
          `Indian pottery is one of the most ancient crafts, with evidence dating back to the Indus Valley Civilization (3300-1300 BCE). Different regions developed distinct pottery traditions: the blue pottery of Jaipur influenced by Persian techniques, the terracotta of Bengal, and the black pottery of Manipur. Traditional potters, known as 'Kumhars,' often work on a potter's wheel called 'chak'. The craft involves not just forming the clay but also developing natural glazes and firing techniques passed down through generations. Many pottery styles are connected to local religious and cultural traditions.`,
        
        "Home_Crochet":
          `While crochet originated in Europe, it was introduced to India during the British colonial period and has been adapted into the rich textile traditions of the country. Regions like Kashmir and communities in South India developed their own unique crochet patterns and techniques. In many rural communities, crochet became a source of livelihood for women, with skills passed down through generations. Traditional Indian crochet often incorporates local motifs, bright colors, and is used for items from doilies to garments. Today, organizations work to preserve these techniques while helping artisans reach global markets.`
      };
      
      // Determine which history to show based on product details
      let historyKey = "";
      
      if (category.includes("Jewelry") && region.includes("Rajasthan")) {
        historyKey = "Rajasthan_Jewelry";
      } else if (category.includes("Textiles") && productName.toLowerCase().includes("kalamkari")) {
        historyKey = "Textiles_Kalamkari";
      } else if (category.includes("Food") && productName.toLowerCase().includes("pickle") || productName.toLowerCase().includes("achar")) {
        historyKey = "Food_Pickles";
      } else if (category.includes("Crafts") && (productName.toLowerCase().includes("pot") || productName.toLowerCase().includes("pottery"))) {
        historyKey = "Crafts_Pottery";
      } else if ((category.includes("Home") || category.includes("Crafts")) && productName.toLowerCase().includes("croch")) {
        historyKey = "Home_Crochet";
      } else {
        // Fallback
        historyKey = Object.keys(histories)[Math.floor(Math.random() * Object.keys(histories).length)];
      }
      
      setHistory(histories[historyKey]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="mt-8">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-indian-saffron" />
          <span>Discover the Cultural Heritage</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!history ? (
          <div className="text-center py-6">
            <p className="mb-4 text-muted-foreground">
              Learn about the rich history and cultural significance behind this traditional craft.
            </p>
            <Button 
              onClick={generateHistory}
              disabled={loading}
              className="bg-indian-blue hover:bg-indian-blue/90"
            >
              {loading ? "Generating History..." : "Generate Cultural Story"}
            </Button>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">{history}</p>
            <div className="mt-4 text-right">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setHistory(null)}
              >
                Generate Another Story
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AiHistoryFeature;
