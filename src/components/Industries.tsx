import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  ShoppingCart, 
  Wrench, 
  Users,
  Briefcase 
} from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Clinics", description: "Aesthetic, Dental, General" },
  { icon: Users, name: "Coaches & Consultants", description: "Business, Life, Executive" },
  { icon: Building2, name: "Real Estate Teams", description: "Agents, Brokers, Property Management" },
  { icon: ShoppingCart, name: "E-commerce & Online Stores", description: "D2C Brands, Retailers" },
  { icon: Briefcase, name: "Digital Agencies", description: "Marketing, Creative, Development" },
  { icon: Wrench, name: "Service Businesses", description: "HVAC, Plumbing, Auto Repair" },
  { icon: GraduationCap, name: "Education & Training Providers", description: "Courses, Certifications, Coaching" },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Built for Modern, <span className="text-gradient-primary">Growing SMEs</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            AIX1 is perfectly designed for:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-center text-muted-foreground">
          If you talk to customers, book clients, or handle leads, <span className="text-primary font-medium">AIX1 is for you.</span>
        </p>
      </div>
    </section>
  );
};

export default Industries;