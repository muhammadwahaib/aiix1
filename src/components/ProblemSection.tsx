import { AlertTriangle, X } from "lucide-react";

const problems = [
  "Leads are slipping through cracks",
  "Customers don't get timely replies",
  "Follow-ups are inconsistent",
  "Teams waste hours on repetitive tasks",
  "Tools are disconnected and expensive",
  "No visibility into performance",
];

const ProblemSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
              <AlertTriangle className="h-4 w-4" />
              The Reality for Most Businesses
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Manual Work Is Costing You <span className="text-destructive">More Than You Think</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every day, businesses lose revenue and opportunities due to outdated processes
            </p>
          </div>

          {/* Problems List */}
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-destructive/20">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <span className="text-foreground">{problem}</span>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mt-10 text-center text-lg text-muted-foreground">
            Your business deserves a system that works <span className="text-primary font-medium">with you</span>, not against you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;