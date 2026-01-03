import { Card } from "@/components/ui/card";
import { Bot, Users, GitBranch, Zap, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Chatbot Inteligente",
    description:
      "IA conversacional que atende seus clientes 24/7 com compreensão de linguagem natural.",
  },
  {
    icon: Users,
    title: "CRM Integrado",
    description:
      "Acompanhe interações, gerencie leads e construa relacionamentos duradouros em um só lugar.",
  },
  {
    icon: GitBranch,
    title: "Fluxos Personalizados",
    description:
      "Crie automações sob medida para seu negócio com nosso construtor visual de fluxos.",
  },
  {
    icon: MessageCircle,
    title: "Suporte Multicanal",
    description:
      "Conecte-se com clientes no Telegram e expanda para outras plataformas facilmente.",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description:
      "Respostas rápidas garantem que seus clientes nunca esperem, melhorando a satisfação.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description:
      "Segurança de nível empresarial com 99.9% de disponibilidade para seu negócio.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary mb-4 block">
            Recursos
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            data-testid="text-features-title"
          >
            Tudo que você precisa para escalar o suporte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De interações simples com chatbot até automação complexa de fluxos,
            o Ciberforge se adapta às necessidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-200"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
