import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "SALE", href: "#", highlight: true },
    { label: "BESTSELLERS", href: "#" },
    { label: "NEW ARRIVALS", href: "#" },
    { label: "SAREES", href: "#" },
    { label: "DRESS MATERIALS", href: "#" },
    { label: "OCCASIONS", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight">
              Parampare
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover-underline ${
                  item.highlight ? "text-destructive" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex text-foreground/70 hover:text-foreground hover:bg-transparent">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground hover:bg-transparent">
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground hover:bg-transparent">
              <User className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-foreground/70 hover:text-foreground hover:bg-transparent">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Modern Slide Down */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body text-base font-medium py-3 px-2 rounded-lg transition-all hover:bg-secondary opacity-0 animate-fade-in-up ${
                    item.highlight ? "text-destructive" : "text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;