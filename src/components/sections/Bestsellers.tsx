import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import saree1 from "@/assets/saree-1.jpg";
import saree2 from "@/assets/saree-2.jpg";
import saree3 from "@/assets/saree-3.jpg";
import saree4 from "@/assets/saree-4.jpg";

const products = [
  {
    id: 1,
    name: "Maroon Kasuti Ilkal Saree",
    price: 4999,
    originalPrice: 6499,
    image: saree1,
    tag: "Bestseller",
    discount: "23% OFF",
  },
  {
    id: 2,
    name: "Royal Blue Silk Saree",
    price: 5499,
    originalPrice: 7999,
    image: saree2,
    tag: "New Arrival",
    discount: "31% OFF",
  },
  {
    id: 3,
    name: "Green Zari Work Saree",
    price: 6999,
    originalPrice: 8999,
    image: saree3,
    tag: null,
    discount: "22% OFF",
  },
  {
    id: 4,
    name: "Pink Festive Silk Saree",
    price: 5999,
    originalPrice: 7499,
    image: saree4,
    tag: "Sale",
    discount: "20% OFF",
  },
];

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="bestsellers" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Modern Header */}
        <div className="text-center mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block text-gold font-body text-xs tracking-[0.25em] uppercase mb-3">
            Most Loved
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary mb-4 card-hover">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full aspect-[3/4] object-cover transition-all duration-700 ${
                    hoveredId === product.id ? "scale-105" : "scale-100"
                  }`}
                />
                
                {/* Tag - Modern Pill */}
                {product.tag && (
                  <span className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-body font-medium rounded-full ${
                    product.tag === "Sale" 
                      ? "bg-destructive text-white" 
                      : product.tag === "New Arrival"
                      ? "bg-foreground text-background"
                      : "bg-gold text-foreground"
                  }`}>
                    {product.tag}
                  </span>
                )}

                {/* Discount Badge */}
                <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-body font-semibold bg-white text-foreground rounded-full shadow-soft">
                  {product.discount}
                </span>

                {/* Action Buttons - Modern Style */}
                <div className={`absolute top-14 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredId === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white hover:bg-gold hover:text-white rounded-full h-10 w-10 shadow-soft transition-all duration-300"
                  >
                    <Heart className="h-4 w-4" strokeWidth={1.5} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white hover:bg-gold hover:text-white rounded-full h-10 w-10 shadow-soft transition-all duration-300"
                  >
                    <Eye className="h-4 w-4" strokeWidth={1.5} />
                  </Button>
                </div>

                {/* Quick Add - Modern Button */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
                  hoveredId === product.id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}>
                  <Button 
                    size="sm" 
                    className="w-full font-body text-sm bg-foreground hover:bg-foreground/90 text-background gap-2 rounded-full shadow-elevated"
                  >
                    <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-body text-sm font-medium text-foreground line-clamp-2 group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-lg text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="font-body text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body font-medium tracking-wide rounded-full px-8 border-2 border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 group"
          >
            View All Bestsellers
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;