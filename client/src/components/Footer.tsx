import { SiTelegram } from "react-icons/si";
import logoImage from "@assets/generated_images/flowforge_logo_icon.png";

const TELEGRAM_BOT_URL = "https://t.me/laranjo_cacete_de_bot";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Flowforge Logo" 
              className="h-8 w-8 rounded-md"
            />
            <span className="font-semibold" data-testid="text-footer-logo">
              Flowforge
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
              data-testid="link-footer-telegram"
            >
              <SiTelegram className="h-4 w-4" />
              <span>Bot no Telegram</span>
            </a>
          </div>

          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            {currentYear} Flowforge. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
