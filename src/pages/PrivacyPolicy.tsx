import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | AIX1";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to AIX1 ("we," "our," or "us"). We're committed to protecting your privacy and being transparent about how we collect, use, and share your data. This Privacy Policy explains our practices in plain language.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. What Data We Collect</h2>
            <h3 className="mb-3 text-xl font-semibold">2.1 Information You Provide</h3>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Account information (name, email, company)</li>
              <li>Contact details when you reach out to us</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Content you create or upload to our platform</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">2.2 Automatically Collected Data</h3>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Usage data (how you interact with our platform)</li>
              <li>Device information (browser type, IP address, operating system)</li>
              <li>Log data (access times, pages viewed, actions taken)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. How We Use Your Data</h2>
            <p className="mb-4 text-muted-foreground">We use your data to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide and improve our AI automation and CRM services</li>
              <li>Process transactions and manage your account</li>
              <li>Send important updates and respond to your inquiries</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Detect and prevent fraud or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Data Sharing and Disclosure</h2>
            <p className="mb-4 text-muted-foreground">
              We don't sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate (hosting, payment processing, analytics)</li>
              <li><strong>Business Transfers:</strong> If we're acquired or merge, your data may transfer to the new entity</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures including encryption, secure servers, and access controls. However, no system is 100% secure. We'll notify you promptly if we discover a data breach affecting your information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Your Rights</h2>
            <p className="mb-4 text-muted-foreground">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              To exercise these rights, contact us at <a href="mailto:hi@aixcellence.co" className="text-primary hover:underline">hi@aixcellence.co</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content. You can control cookies through your browser settings, though this may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your data as long as your account is active or as needed to provide services. After account closure, we may retain certain data for legal, regulatory, or business purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for users under 18. We don't knowingly collect data from children. If we discover we've collected data from a child, we'll delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. We'll notify you of significant changes via email or platform notification. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Contact Us</h2>
            <p className="text-muted-foreground">
              Questions about this Privacy Policy? Reach out to us:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:hi@aixcellence.co" className="text-primary hover:underline">hi@aixcellence.co</a></li>
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

export default PrivacyPolicy;

