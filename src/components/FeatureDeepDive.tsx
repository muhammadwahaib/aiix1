import { 
  MessageSquare, 
  UserPlus, 
  Calendar, 
  Bell, 
  TrendingUp, 
  Megaphone 
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description: "Answers customer questions, handles objections, qualifies leads, and books appointments.",
    highlights: ["Smart conversations", "Lead qualification", "Appointment booking"],
  },
  {
    icon: UserPlus,
    title: "Lead Capture & Auto-Enrichment",
    description: "Forms, chats, WhatsApp. Every lead is automatically scored and enriched.",
    highlights: ["Multi-source capture", "Auto-scoring", "Data enrichment"],
  },
  {
    icon: Calendar,
    title: "Smart Booking Engine",
    description: "Appointments, reschedules, cancellations. All automated.",
    highlights: ["Calendar sync", "Smart scheduling", "Automated confirmations"],
  },
  {
    icon: Bell,
    title: "Reminder System",
    description: "WhatsApp, SMS, and email reminders so you never lose a client again.",
    highlights: ["Multi-channel", "Smart timing", "Personalized"],
  },
  {
    icon: TrendingUp,
    title: "Sales Pipelines",
    description: "Track deals, stages, tasks, and performance in a clean visual pipeline.",
    highlights: ["Visual pipelines", "Task tracking", "Performance insights"],
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description: "Send WhatsApp/email broadcasts, run sequences, automate follow-ups.",
    highlights: ["Broadcast messaging", "Sequences", "Follow-up automation"],
  },
];

const FeatureDeepDive = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything You Need to Run Your{" "}
            <span className="text-gradient-primary">Business Efficiently</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Deep capabilities built for serious business automation
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                {/* Icon */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <feature.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
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

export default FeatureDeepDive;