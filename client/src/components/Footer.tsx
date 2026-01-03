import logoImage from "@assets/generated_images/flowforge_logo_icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Ciberforge Logo" 
              className="h-8 w-8 rounded-md"
            />
            <span className="font-semibold" data-testid="text-footer-logo">
              Ciberforge
            </span>
          </div>

          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            {currentYear} Ciberforge. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
