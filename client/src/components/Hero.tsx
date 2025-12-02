import { Button } from "@/components/ui/button";
import { SiTelegram } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import heroBackground from "@assets/generated_images/flowforge_hero_background_image.png";

const TELEGRAM_BOT_URL = "https://t.me/laranjo_cacete_de_bot";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <SiTelegram className="h-4 w-4 text-[#0088cc]" />
          <span className="text-sm text-white/90">Disponível no Telegram</span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
          data-testid="text-hero-title"
        >
          Seu Assistente Virtual
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Inteligente
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          data-testid="text-hero-subtitle"
        >
          Automatize o atendimento ao cliente, gerencie leads com CRM integrado e 
          crie fluxos de trabalho personalizados—tudo através de um bot no Telegram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="bg-white/95 text-black border-white/80 backdrop-blur-sm"
            data-testid="button-hero-cta"
          >
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
              <SiTelegram className="h-5 w-5 mr-2 text-[#0088cc]" />
              Conversar com o Bot
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60" data-testid="text-telegram-handle">
          @laranjo_cacete_de_bot
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
