import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const OurStory = () => {
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
            About Parampare – Authentic Handloom Sarees from India
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Parampare is an Indian handloom brand dedicated to preserving, promoting, and delivering authentic traditional sarees and handcrafted textiles directly from artisan communities. Rooted in heritage and guided by trust, Parampare brings together centuries-old weaving traditions with a modern, customer-first approach.
          </p>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Celebrating India's Handloom Heritage</h2>
            <p className="text-muted-foreground">
              India's handloom tradition is a living legacy, passed down through generations of skilled artisans. At Parampare, we are committed to safeguarding this heritage by curating genuine, region-specific handwoven sarees, including GI-tagged Ilkal sarees from Karnataka.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Purpose</h2>
            <ul className="space-y-3">
              {[
                "To make authentic handloom sarees accessible to customers across India and beyond",
                "To support and sustain traditional weaver communities",
                "To create awareness about the value of handmade textiles over mass-produced fabrics"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Makes Parampare Unique</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Authentic Handwoven Sarees", desc: "We focus exclusively on genuine handloom products, crafted using traditional methods." },
                { title: "Direct Artisan Connect", desc: "We work closely with weavers to ensure fair recognition and livelihood support." },
                { title: "Quality & Transparency", desc: "From fabric composition to pricing, we maintain complete transparency." },
                { title: "Tradition with Contemporary Appeal", desc: "Heritage designs adapted for today's modern aesthetics." }
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Promise</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 100% authentic handloom sarees</li>
              <li>• Ethically sourced and responsibly curated</li>
              <li>• Honest pricing and quality assurance</li>
              <li>• Customer trust above everything else</li>
            </ul>
            <p className="mt-4 text-primary font-medium">
              Parampare stands for tradition that lives on — woven with pride, worn with purpose.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
