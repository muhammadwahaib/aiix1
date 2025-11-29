import { Check, Sparkles } from "lucide-react";

const solutions = [
  "Captures leads instantly",
  "Responds on your behalf",
  "Qualifies customers with smart questions",
  "Books appointments automatically",
  "Sends reminders & confirmations",
  "Updates CRM records",
  "Triggers sales workflows",
  "Provides actionable insights",
];

const SolutionSection = () => {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      
      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              The AIX1 Advantage
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Meet AIX1, Your{" "}
              <span className="text-gradient-primary">AI Team</span> That Never Sleeps
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              AIX1 automates your customer journey from start to finish:
            </p>

            {/* Solutions List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-primary/5 px-4 py-3 transition-colors hover:bg-primary/10"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{solution}</span>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-muted-foreground">
              It works silently in the background, delivering <span className="text-primary font-medium">speed, accuracy, and consistency</span> every time.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-primary/5 blur-2xl" />
            <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-lg shadow-primary/30">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AIX1 AI Agent</h3>
                  <p className="text-sm text-muted-foreground">Always working for you</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm">Processing 47 leads automatically</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-sm">12 follow-up messages sent</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                  <span className="text-sm">8 appointments booked today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;