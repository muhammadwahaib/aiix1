import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GDPR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GDPR Compliance | AIX1";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">GDPR Compliance</h1>
        <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Our Commitment to GDPR</h2>
            <p className="text-muted-foreground">
              AIX1 is committed to compliance with the General Data Protection Regulation (GDPR). Even though we're based in the US, we respect the privacy rights of all users, including those in the European Economic Area (EEA). This page explains how we handle your data in compliance with GDPR.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Legal Basis for Processing</h2>
            <p className="mb-4 text-muted-foreground">We process your personal data based on:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Contractual Necessity:</strong> To fulfill our service agreement with you</li>
              <li><strong>Legitimate Interests:</strong> To improve our services, prevent fraud, and ensure security</li>
              <li><strong>Consent:</strong> When you explicitly agree to specific processing activities</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Your GDPR Rights</h2>
            <p className="mb-4 text-muted-foreground">As an EEA resident, you have the following rights:</p>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">3.1 Right of Access</h3>
            <p className="text-muted-foreground">
              You can request a copy of all personal data we hold about you. We'll provide it in a structured, commonly used format within 30 days.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.2 Right to Rectification</h3>
            <p className="text-muted-foreground">
              If your data is inaccurate or incomplete, you can request corrections. We'll update it promptly.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.3 Right to Erasure ("Right to be Forgotten")</h3>
            <p className="text-muted-foreground">
              You can request deletion of your personal data when:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>It's no longer necessary for the original purpose</li>
              <li>You withdraw consent and there's no other legal basis</li>
              <li>You object to processing and there are no overriding legitimate interests</li>
              <li>The data was unlawfully processed</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.4 Right to Restrict Processing</h3>
            <p className="text-muted-foreground">
              You can request we limit how we process your data in certain circumstances, such as when you contest its accuracy.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.5 Right to Data Portability</h3>
            <p className="text-muted-foreground">
              You can request your data in a machine-readable format to transfer it to another service provider.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.6 Right to Object</h3>
            <p className="text-muted-foreground">
              You can object to processing based on legitimate interests or for direct marketing purposes. We'll stop processing unless we have compelling legitimate grounds.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.7 Right to Withdraw Consent</h3>
            <p className="text-muted-foreground">
              If processing is based on consent, you can withdraw it at any time. This won't affect processing that occurred before withdrawal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Exercising Your Rights</h2>
            <p className="mb-4 text-muted-foreground">
              To exercise any of these rights, contact us at <a href="mailto:hi@aixcellence.co" className="text-primary hover:underline">hi@aixcellence.co</a> with:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Your name and email address</li>
              <li>Clear description of the right you want to exercise</li>
              <li>Any relevant details to help us locate your data</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We'll respond within 30 days. If your request is complex, we may extend this by 60 days (we'll notify you).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Data Protection Officer</h2>
            <p className="text-muted-foreground">
              While we don't currently have a formal Data Protection Officer (DPO), our team handles GDPR requests. Contact us at <a href="mailto:hi@aixcellence.co" className="text-primary hover:underline">hi@aixcellence.co</a> for any privacy concerns.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Data Transfers</h2>
            <p className="text-muted-foreground">
              Your data may be transferred to and processed in the United States. We ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Standard Contractual Clauses (SCCs) with our service providers</li>
              <li>Encryption in transit and at rest</li>
              <li>Regular security audits and assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Data Breach Notification</h2>
            <p className="text-muted-foreground">
              If we experience a data breach that poses a risk to your rights and freedoms, we'll notify:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Affected users within 72 hours (when feasible)</li>
              <li>Relevant supervisory authorities within 72 hours</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Supervisory Authority</h2>
            <p className="text-muted-foreground">
              If you're in the EEA and believe we haven't addressed your privacy concerns, you have the right to lodge a complaint with your local data protection authority. Find your authority at <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">edpb.europa.eu</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Contact Us</h2>
            <p className="text-muted-foreground">
              For GDPR-related inquiries or to exercise your rights:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:hi@aixcellence.co" className="text-primary hover:underline">hi@aixcellence.co</a></li>
              <li>Subject line: "GDPR Request"</li>
              <li>Website: <a href="https://aixcellence.co/#contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aixcellence.co/#contact</a></li>
            </ul>
          </section>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
};

export default GDPR;

