import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Bot, Inbox, Workflow, BarChart3, Users, Calendar, Megaphone } from "lucide-react";
import chatbotMockup from "@/assets/chatbot-mockup.png";
import inboxMockup from "@/assets/inbox-mockup.png";
import automationMockup from "@/assets/automation-mockup.png";
import pipelineMockup from "@/assets/pipeline-mockup.png";
import analyticsMockup from "@/assets/analytics-mockup.png";

const tabs = [
  { id: "chatbot", label: "AI Chat Agent", icon: Bot, image: chatbotMockup },
  { id: "automation", label: "WhatsApp Automations", icon: Workflow, image: automationMockup },
  { id: "pipeline", label: "CRM & Pipelines", icon: Users, image: pipelineMockup },
  { id: "inbox", label: "Unified Inbox", icon: Inbox, image: inboxMockup },
  { id: "analytics", label: "Analytics & Reports", icon: BarChart3, image: analyticsMockup },
];

const features = [
  "Intelligent Customer Chat Agent",
  "WhatsApp / Website Automations",
  "CRM & Pipelines",
  "Appointment Scheduling",
  "Marketing Campaigns",
  "Advanced Analytics & Reports",
];

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("chatbot");
  const activeImage = tabs.find((t) => t.id === activeTab)?.image;

  return (
    <section id="features" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            All Your Tools, Finally in <span className="text-gradient-primary">One Place</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Get a single platform for:
          </p>
          
          {/* Feature List */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <span
                key={index}
                className="rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl">
            <img
              src={activeImage}
              alt={`AIX1 ${tabs.find((t) => t.id === activeTab)?.label}`}
              className="w-full transition-opacity duration-500"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" className="group">
            <Play className="h-4 w-4" />
            Watch Product Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;