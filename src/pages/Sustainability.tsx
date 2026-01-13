import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Heart, Recycle, Package } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const Sustainability = () => {
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
            🌿 Sustainability at Parampare
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">
            Weaving Responsibility into Every Thread
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            At Parampare, sustainability is not a trend — it is a way of life deeply rooted in India's handloom tradition. Long before the word "sustainable" became popular, our artisans were already practicing it through mindful craftsmanship.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Leaf, title: "Slow Fashion", desc: "Sarees handwoven in small batches, reducing waste and energy consumption" },
              { icon: Heart, title: "Natural Materials", desc: "Natural fibers like cotton and silk with traditional dyeing techniques" },
              { icon: Recycle, title: "Ethical Production", desc: "Fair wages, safe conditions, and preservation of traditional skills" },
              { icon: Package, title: "Thoughtful Packaging", desc: "Minimal, recyclable, and plastic-free wherever possible" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 rounded-lg border border-border">
                <Icon className="text-primary mb-3" size={32} />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Honoring Tradition, Protecting the Future</h2>
            <p className="text-muted-foreground mb-4">
              Handloom weaving is inherently sustainable — it uses less power, creates less waste, and values human skill over machines. By supporting handwoven sarees, you contribute to:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Lower carbon footprint</li>
              <li>• Preservation of cultural heritage</li>
              <li>• A more conscious fashion industry</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-muted-foreground">
              Sustainability is a continuous journey. We are committed to learning, improving, and making thoughtful choices at every step — from loom to wardrobe. At Parampare, every saree you wear represents respect for nature, people, and tradition.
            </p>
            <p className="text-primary font-medium mt-4">Thank you for choosing consciously.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
