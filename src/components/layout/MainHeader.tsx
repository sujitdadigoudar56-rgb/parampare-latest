import { Search, Heart, User, ShoppingBag, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0));
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    
    // Custom event for cart updates
    const handleCartUpdate = () => checkAuth();
    window.addEventListener("cartUpdated", handleCartUpdate);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    navigate("/");
  };

  const menuItems = [
    { label: "SALE", href: "/products?filter=sale", highlight: true },
    { label: "BESTSELLERS", href: "/products?filter=bestsellers" },
    { label: "NEW ARRIVALS", href: "/products?filter=new" },
    { label: "SAREES", href: "/products" },
    { label: "DRESS MATERIALS", href: "/products?category=dress-materials" },
    { label: "OCCASIONS", href: "/products?category=occasions" },
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
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight">
              Parampare
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover-underline ${
                  item.highlight ? "text-destructive" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex text-foreground/70 hover:text-foreground hover:bg-transparent">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/70 hover:text-foreground hover:bg-transparent"
              onClick={() => navigate("/products?filter=wishlist")}
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            
            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground hover:bg-transparent">
                    <User className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground/70 hover:text-foreground hover:bg-transparent"
                onClick={() => navigate("/login")}
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </Button>
            )}
            
            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-foreground/70 hover:text-foreground hover:bg-transparent"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Modern Slide Down */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-base font-medium py-3 px-2 rounded-lg transition-all hover:bg-secondary opacity-0 animate-fade-in-up ${
                    item.highlight ? "text-destructive" : "text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Link
                    to="/orders"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-body text-base font-medium py-3 px-2 rounded-lg transition-all hover:bg-secondary text-foreground"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="font-body text-base font-medium py-3 px-2 rounded-lg transition-all hover:bg-secondary text-destructive text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-base font-medium py-3 px-2 rounded-lg transition-all hover:bg-secondary text-gold"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;