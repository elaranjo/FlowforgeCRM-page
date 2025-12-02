import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { SiTelegram } from "react-icons/si";

const TELEGRAM_BOT_URL = "https://t.me/laranjo_cacete_de_bot";

const plans = [
  {
    name: "Essencial",
    tagline: "Perfeito para começar",
    price: "R$99",
    period: "/mês",
    features: [
      "Chatbot fácil de configurar",
      "Rastreamento de interações",
      "Painel de análises básico",
      "Até 1.000 mensagens/mês",
      "Suporte por email",
      "1 bot no Telegram",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Para negócios em crescimento",
    price: "R$249",
    period: "/mês",
    features: [
      "Tudo do Essencial",
      "CRM completo integrado",
      "Sistema de gestão de leads",
      "Segmentação de clientes",
      "Análises avançadas",
      "Até 10.000 mensagens/mês",
      "Suporte prioritário",
      "3 bots no Telegram",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "Para grandes organizações",
    price: "Sob consulta",
    period: "",
    features: [
      "Tudo do Pro",
      "Construtor de fluxos personalizados",
      "Automação avançada de bots",
      "Acesso à API",
      "Mensagens ilimitadas",
      "Gerente de conta dedicado",
      "Integrações personalizadas",
      "Garantia de SLA",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-card/50" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary mb-4 block">
            Planos
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            data-testid="text-pricing-title"
          >
            Preços simples e transparentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao seu negócio. Todos os planos 
            incluem acesso à nossa plataforma de bot no Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative flex flex-col ${
                plan.highlighted
                  ? "border-primary ring-1 ring-primary"
                  : ""
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <Badge
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  data-testid="badge-popular"
                >
                  Mais Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
                data-testid={`button-pricing-${plan.name.toLowerCase()}`}
              >
                <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                  <SiTelegram className="h-4 w-4 mr-2" />
                  Começar no Telegram
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
