import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container-custom relative">
        <div className="flex flex-col items-center py-16 text-center md:py-24 lg:py-32">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-subtle px-4 py-2 text-sm text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Powered by AIXcellence
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Automate Your Entire Business{" "}
            <span className="text-gradient-primary">with AI.</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            AIX1 is the all-in-one AI Automation & CRM platform that captures leads, books appointments, 
            sends reminders, manages pipelines, replies to customers, and runs your operations 24/7 
            without increasing team size.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer">
                Get a Live Demo
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer">
                Start Free
              </a>
            </Button>
          </div>

          {/* Hero Supporting Text */}
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground md:text-base">
            Grow faster with an AI system that handles customer communication, sales, follow-ups, and daily tasks instantly.
          </p>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>AI-powered insights</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No technical knowledge required</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16 w-full max-w-5xl md:mt-20">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl" style={{ boxShadow: '0 0 60px rgba(24, 203, 190, 0.3)' }}>
              <img
                src={heroDashboard}
                alt="AIX1 Dashboard - AI-Powered CRM and Automation Platform"
                className="w-full animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;