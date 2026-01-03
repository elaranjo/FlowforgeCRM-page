import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { ArrowRight, Bot } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5531984911810";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-cta">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <Bot className="h-8 w-8 text-primary" />
        </div>

        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          data-testid="text-cta-title"
        >
          Pronto para transformar seu atendimento?
        </h2>

        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Automatize suas interações com clientes e aumente sua receita
          com o Ciberforge.
        </p>

        <Button
          size="lg"
          asChild
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A]"
          data-testid="button-cta-whatsapp"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <SiWhatsapp className="h-5 w-5 mr-2" />
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}
