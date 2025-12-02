import { Button } from "@/components/ui/button";
import { SiTelegram } from "react-icons/si";
import { ArrowRight, Bot } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/laranjo_cacete_de_bot";

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
          Ready to transform your customer support?
        </h2>

        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using Flowforge to automate customer
          interactions and grow their revenue.
        </p>

        <Button
          size="lg"
          asChild
          data-testid="button-cta-telegram"
        >
          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
            <SiTelegram className="h-5 w-5 mr-2" />
            Start Chatting Now
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </Button>

        <p className="mt-4 text-sm text-muted-foreground" data-testid="text-cta-handle">
          @laranjo_cacete_de_bot
        </p>
      </div>
    </section>
  );
}
