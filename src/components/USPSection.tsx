import { Zap, BookOpen, Layers } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Pre-Trained AI Agents",
    description: "Industry-trained, ready-to-use, and customizable. Deploy in minutes.",
  },
  {
    icon: BookOpen,
    title: "Built-In Business Playbooks",
    description: "Done-for-you workflows for clinics, real estate, agencies, coaches, and more.",
  },
  {
    icon: Layers,
    title: "True All-In-One System",
    description: "No need for 7+ separate tools. CRM + Automations + Chatbots + Inbox + Scheduling + Analytics = AIX1.",
  },
];

const USPSection = () => {
  return (
    <section className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            What Makes AIX1 <span className="text-gradient-primary">Truly Different?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We've reimagined business automation from the ground up
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-lg shadow-primary/25">
                  <usp.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;