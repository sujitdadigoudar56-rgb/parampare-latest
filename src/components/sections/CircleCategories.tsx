import saree1 from "@/assets/saree-1.jpg";
import saree2 from "@/assets/saree-2.jpg";
import saree3 from "@/assets/saree-3.jpg";
import saree4 from "@/assets/saree-4.jpg";

const categories = [
  { name: "Sarees", image: saree1, href: "#" },
  { name: "Dress Materials", image: saree2, href: "#" },
  { name: "Silk Sarees", image: saree3, href: "#" },
  { name: "Cotton Sarees", image: saree4, href: "#" },
  { name: "Wedding", image: saree1, href: "#" },
  { name: "Festive", image: saree2, href: "#" },
  { name: "New Arrivals", image: saree3, href: "#" },
  { name: "Bestsellers", image: saree4, href: "#" },
];

const CircleCategories = () => {
  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Modern Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block text-gold font-body text-xs tracking-[0.25em] uppercase mb-3">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground">
            Shop by Category
          </h2>
        </div>

        {/* Modern Circle Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.06}s` }}
            >
              {/* Circle Container - Modern Glass Effect */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-border group-hover:border-gold/50 transition-colors duration-500" />
                
                {/* Inner Circle with Image */}
                <div className="absolute inset-1 rounded-full overflow-hidden shadow-soft group-hover:shadow-glow transition-shadow duration-500">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
              </div>

              {/* Category Name - Clean Typography */}
              <span className="font-body text-sm font-medium text-foreground text-center group-hover:text-gold transition-colors duration-300 max-w-[100px]">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleCategories;