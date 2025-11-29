import { Bot, MessageSquare, Workflow, Inbox } from "lucide-react";

const values = [
  {
    icon: Bot,
    title: "AI-Powered CRM",
    description: "Your CRM updates itself. Leads captured, enriched, scored, and auto-assigned instantly.",
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Chat Agents",
    description: "Smart chat agents that answer questions, qualify leads, and book appointments without human help.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "From reminders to follow-ups to task routing, everything runs in the background.",
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    description: "WhatsApp, website chat, Facebook, Instagram, and email all in one dashboard.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Why Businesses Switch to <span className="text-gradient-primary">AIX1</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to automate your business operations and scale effortlessly
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group card-premium p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;