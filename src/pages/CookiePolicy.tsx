import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookie Policy | AIX1";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">Cookie Policy</h1>
        <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience. Think of them as digital breadcrumbs that help us understand how you use our platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. How We Use Cookies</h2>
            <p className="mb-4 text-muted-foreground">We use cookies for:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Essential Functionality:</strong> Keeping you logged in, remembering your preferences</li>
              <li><strong>Analytics:</strong> Understanding how users interact with our platform to improve it</li>
              <li><strong>Performance:</strong> Optimizing page load times and user experience</li>
              <li><strong>Security:</strong> Detecting and preventing fraud or unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Types of Cookies We Use</h2>
            
            <h3 className="mb-3 mt-6 text-xl font-semibold">3.1 Essential Cookies</h3>
            <p className="text-muted-foreground">
              These are necessary for the Service to function. They include authentication cookies, security tokens, and session management. Without these, core features won't work.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.2 Analytics Cookies</h3>
            <p className="text-muted-foreground">
              We use analytics tools (like Google Analytics) to understand usage patterns, popular features, and areas for improvement. This helps us build a better product.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.3 Performance Cookies</h3>
            <p className="text-muted-foreground">
              These cookies help us optimize performance, cache content, and reduce load times. They make your experience faster and smoother.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">3.4 Functional Cookies</h3>
            <p className="text-muted-foreground">
              These remember your preferences (language, theme, settings) so you don't have to reconfigure them every visit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Third-Party Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              Some cookies are set by third-party services we use:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Analytics Providers:</strong> To track and analyze usage</li>
              <li><strong>Payment Processors:</strong> To securely process transactions</li>
              <li><strong>Customer Support Tools:</strong> To provide chat and support features</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              These third parties have their own privacy policies governing cookie use.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Managing Cookies</h2>
            <p className="mb-4 text-muted-foreground">You can control cookies through:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
              <li><strong>Our Cookie Banner:</strong> When you first visit, you can choose which cookies to accept</li>
              <li><strong>Platform Settings:</strong> Some cookie preferences can be managed in your account settings</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              <strong>Note:</strong> Blocking essential cookies may prevent certain features from working properly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Cookie Duration</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>Session Cookies:</strong> Temporary, deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (days, months, or until you delete them)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy to reflect changes in our practices or for legal/operational reasons. We'll notify you of significant changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Contact Us</h2>
            <p className="text-muted-foreground">
              Questions about our cookie practices? Reach out:
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

export default CookiePolicy;

