import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can AIX1 replace my CRM?",
    answer: "Yes. AIX1 includes a full CRM with automation, pipelines, and an inbox.",
  },
  {
    question: "Does it work with WhatsApp?",
    answer: "Yes, native WhatsApp Cloud integration.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No. Everything is pre-built and easy to customize.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses launch in under 15 minutes.",
  },
  {
    question: "Can I create custom workflows?",
    answer: "Yes, with our drag-and-drop automation builder.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to know about AIX1
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/50 px-6 backdrop-blur-sm data-[state=open]:border-primary/30 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;