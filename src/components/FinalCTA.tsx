import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            Start Your AI Transformation
          </div>

          {/* Headline */}
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Automate Everything.{" "}
            <span className="text-gradient-primary">Grow Faster.</span>
          </h2>

          {/* Subtext */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            AIX1 runs your business 24/7, capturing leads, replying to customers, 
            booking appointments, and driving revenue automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer">
                Book a Live Demo
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer">
                Start Free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;