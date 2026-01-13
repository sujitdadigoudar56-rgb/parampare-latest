import { Twitter, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopUtilityHeader = () => {
  const promoMessages = [
    "SHOP FOR ₹5999+ & GET EXTRA 10% OFF INSTANTLY!*",
    "GET EXTRA 5% OFF ON ₹2499+ ORDERS — Use Code: FLASH5",
    "FIRST ORDER? ENJOY 15% OFF ON ₹7999+"
  ];

  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promoMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground text-background">
      {/* Modern Promo Banner */}
      <div className="bg-gold py-2.5 px-4 overflow-hidden">
        <div className="flex items-center justify-center">
          <p 
            key={currentPromo}
            className="text-sm font-medium tracking-wide text-foreground opacity-0 animate-blur-in"
          >
            {promoMessages[currentPromo]}
          </p>
        </div>
      </div>

      {/* Utility Links - Minimal & Modern */}
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center text-xs">
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Shipping", href: "/shipping-delivery" },
            { label: "Track Order", href: "https://www.indiapost.gov.in/", external: true },
            { label: "Reviews", href: "/#testimonials" },
            { label: "Returns", href: "/returns-exchange" },
            { label: "Contact", href: "/contact" },
            { label: "FAQs", href: "/faqs" }
          ].map((link) => (
            link.external ? (
              <a 
                key={link.label} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors duration-300 hover-underline"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.label} 
                to={link.href}
                className="text-background/70 hover:text-background transition-colors duration-300 hover-underline"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4 ml-auto">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Facebook, label: "Facebook" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Youtube, label: "YouTube" },
            { Icon: Linkedin, label: "LinkedIn" },
          ].map(({ Icon, label }) => (
            <a 
              key={label}
              href="#" 
              className="text-background/60 hover:text-gold transition-all duration-300" 
              aria-label={label}
            >
              <Icon size={14} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUtilityHeader;