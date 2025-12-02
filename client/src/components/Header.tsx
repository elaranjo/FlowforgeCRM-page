import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { useState, useEffect } from "react";
import logoImage from "@assets/generated_images/flowforge_logo_icon.png";

const TELEGRAM_BOT_URL = "https://t.me/laranjo_cacete_de_bot";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Flowforge Logo" 
              className="h-10 w-10 rounded-md"
            />
            <span 
              className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              data-testid="text-logo"
            >
              Flowforge
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className={`text-sm transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/80 hover:text-white"
              }`}
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`text-sm transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/80 hover:text-white"
              }`}
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <Button
              asChild
              data-testid="button-telegram-cta"
            >
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                <SiTelegram className="h-4 w-4 mr-2" />
                Try on Telegram
              </a>
            </Button>
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className={`md:hidden ${!isScrolled ? "text-white hover:bg-white/10" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              data-testid="link-features-mobile"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              data-testid="link-pricing-mobile"
            >
              Pricing
            </button>
            <Button
              asChild
              className="w-full"
              data-testid="button-telegram-cta-mobile"
            >
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                <SiTelegram className="h-4 w-4 mr-2" />
                Try on Telegram
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
