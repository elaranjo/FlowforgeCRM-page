import { Card } from "@/components/ui/card";
import { Bot, Users, GitBranch, Zap, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Smart Chatbot",
    description:
      "Intelligent conversational AI that handles customer inquiries 24/7 with natural language understanding.",
  },
  {
    icon: Users,
    title: "Integrated CRM",
    description:
      "Track customer interactions, manage leads, and build lasting relationships from one dashboard.",
  },
  {
    icon: GitBranch,
    title: "Custom Workflows",
    description:
      "Design automated workflows tailored to your business needs with our visual builder.",
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Support",
    description:
      "Connect with customers on Telegram and expand to other platforms seamlessly.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Lightning-fast replies ensure your customers never wait, improving satisfaction scores.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime to keep your business running smoothly.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary mb-4 block">
            Features
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            data-testid="text-features-title"
          >
            Everything you need to scale support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From simple chatbot interactions to complex workflow automation,
            Flowforge adapts to your business needs.
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
