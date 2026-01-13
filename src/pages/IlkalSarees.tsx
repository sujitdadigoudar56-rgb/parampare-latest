import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const IlkalSarees = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ilkal Sarees – A Timeless Heritage of Karnataka
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Ilkal sarees are a distinguished Geographical Indication (GI)–tagged handloom product originating from Ilkal town in the Bagalkot district of Karnataka, India. Celebrated for their unique weaving technique, bold color contrasts, and iconic pallu designs, Ilkal sarees represent centuries of textile excellence and cultural pride.
          </p>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Makes Ilkal Sarees Unique</h2>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-3">1. Distinctive Weaving Technique</h3>
                <p className="text-muted-foreground">
                  Ilkal sarees are renowned for their signature interlocking weft technique, locally known as the Tope Teni technique. In this method, the pallu (decorative end) is woven separately and skillfully interlocked with the body of the saree, creating a seamless yet visually striking transition.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-3">2. Iconic Designs & Patterns</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Pallu:</strong> Features traditional geometric motifs, stripes, and culturally inspired patterns</li>
                  <li><strong>Borders:</strong> Often inspired by temple architecture, showcasing bold lines and contrasts</li>
                  <li><strong>Body:</strong> Decorated with checks, stripes, and minimal motifs that balance the rich pallu</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-3">3. Vibrant & Contrasting Color Palette</h3>
                <p className="text-muted-foreground mb-3">Popular pairings include:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Red & Green</li>
                  <li>• Black & Red</li>
                  <li>• Maroon & Green</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-3">4. Blend of Cotton & Silk</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Cotton warp (lengthwise threads) for comfort and durability</li>
                  <li>• Silk and cotton weft (widthwise threads) for a subtle sheen and elegance</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Rich History of Ilkal Sarees</h2>
            <p className="text-muted-foreground">
              The tradition of Ilkal saree weaving dates back several centuries and is believed to have flourished during the Chalukya dynasty (6th–12th century CE). Patronized by local royalty and aristocracy, Ilkal sarees evolved into a symbol of refinement, craftsmanship, and status.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cultural & Social Significance</h2>
            <p className="text-muted-foreground mb-4">Ilkal sarees hold a special place in Karnataka's cultural fabric. They are traditionally worn during:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Festivals", "Weddings", "Religious ceremonies", "Special family occasions"].map((item) => (
                <div key={item} className="bg-primary/10 p-4 rounded-lg text-center">
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">GI Tag – Protecting Authenticity</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Protects the authenticity of genuine Ilkal sarees</li>
              <li>• Prevents misuse of the name</li>
              <li>• Promotes fair recognition and income for local weavers</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">A Living Legacy</h2>
            <p className="text-muted-foreground">
              Ilkal sarees are more than garments—they are a living legacy of Karnataka's textile heritage. Each saree tells a story of tradition, skill, and cultural continuity, making it a timeless addition to every wardrobe. At Parampare, we celebrate this heritage by bringing you authentic Ilkal sarees that honor tradition while embracing elegance for today's world.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IlkalSarees;
