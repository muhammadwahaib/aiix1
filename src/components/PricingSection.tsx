import { Button } from "@/components/ui/button";
import { MessageSquare, Check } from "lucide-react";

const features = [
  "Full CRM with AI automation",
  "Unlimited AI chat agents",
  "Omni-channel inbox",
  "Booking & scheduling",
  "Sales pipelines & deals",
  "Marketing automations",
  "Analytics & reporting",
  "Dedicated support",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Contact us for custom pricing tailored to your business needs
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card">
            {/* Glow Effect */}
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/30 blur-[80px]" />
            
            <div className="relative p-8 md:p-10">
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Enterprise Solution
                </div>
                <h3 className="mb-2 text-2xl font-bold">Custom Pricing</h3>
                <p className="text-muted-foreground">
                  Tailored to your business size and requirements
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  Contact for Pricing
                </a>
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Free consultation included • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
