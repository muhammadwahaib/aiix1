import { Star, TrendingUp, Clock, Users, Heart } from "lucide-react";

const stats = [
  { value: "3×", label: "More Conversions", icon: TrendingUp },
  { value: "60%", label: "Fewer Missed Appointments", icon: Clock },
  { value: "5×", label: "Faster Lead Replies", icon: Users },
  { value: "40%", label: "Increase in Customer Retention", icon: Heart },
];

const testimonials = [
  {
    quote: "AIX1 is like hiring a full sales and support team without the payroll.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "GrowthLab Agency",
  },
  {
    quote: "Finally, one platform that does it all. No more switching between 5 different tools.",
    author: "Michael Torres",
    role: "Clinic Owner",
    company: "Aesthetic Med Spa",
  },
  {
    quote: "The AI chatbot handles 70% of our inquiries. Our team can focus on high-value work.",
    author: "David Park",
    role: "VP of Sales",
    company: "InnovateHub",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Trusted by <span className="text-gradient-primary">Growing Businesses</span> Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real results from real businesses using AIX1
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <div className="mb-1 text-4xl font-bold text-gradient-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="mb-6 text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;