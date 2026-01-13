import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Leaf } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const TheArtisans = () => {
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
            The Artisans Behind Parampare
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">
            Preserving Tradition, Empowering Hands
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            At Parampare, every saree carries more than just threads — it carries the skill, patience, and legacy of generations of artisans from Ilkal, Karnataka. Our artisans are not factory workers. They are master weavers, many of whom have inherited this craft from their parents and grandparents.
          </p>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">A Heritage Woven by Hand</h2>
            <p className="text-muted-foreground">
              From preparing the yarn to weaving the iconic Teni Pallu, every step is done with precision and pride. It takes days — sometimes weeks — to complete a single saree. This is not mass production; this is art in motion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">By Choosing Parampare, You Support:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Handloom Communities", desc: "Supporting weaving families" },
                { icon: Heart, title: "Traditional Techniques", desc: "Passed down for centuries" },
                { icon: Leaf, title: "Sustainable Fashion", desc: "Slow, mindful production" }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card p-6 rounded-lg border border-border text-center">
                  <Icon className="mx-auto text-primary mb-3" size={32} />
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Empowering Artisan Communities</h2>
            <p className="text-muted-foreground mb-4">We work closely with artisan families ensuring:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Fair wages and ethical practices</li>
              <li>• Safe and respectful working conditions</li>
              <li>• Recognition for their craftsmanship</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Stories in Every Thread</h2>
            <p className="text-muted-foreground mb-4">
              No two handwoven sarees are ever exactly the same — and that's the beauty of it. Slight variations in weave and color are signs of authenticity.
            </p>
            <p className="text-primary font-medium">
              When you wear a Parampare saree, you are wearing tradition, identity, and a story woven with care.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TheArtisans;
