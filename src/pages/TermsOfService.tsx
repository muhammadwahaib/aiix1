import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | AIX1";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold md:text-5xl">Terms of Service</h1>
        <p className="mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using AIX1 ("the Service"), you agree to be bound by these Terms of Service. If you don't agree, please don't use our Service. We're a developer-friendly company, so we've written these terms in plain language.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Description of Service</h2>
            <p className="text-muted-foreground">
              AIX1 is an AI-powered automation and CRM platform that helps businesses automate customer communication, manage leads, book appointments, and streamline operations. We provide the tools; you bring the business.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Account Registration</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>You must provide accurate, complete information when creating an account</li>
              <li>You're responsible for maintaining account security (keep your password safe!)</li>
              <li>You're responsible for all activity under your account</li>
              <li>One person or entity may not maintain multiple accounts</li>
              <li>You must be at least 18 years old to use our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Acceptable Use</h2>
            <p className="mb-4 text-muted-foreground">You agree NOT to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use the Service for illegal purposes or in violation of any laws</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated systems to scrape or extract data without permission</li>
              <li>Impersonate others or provide false information</li>
              <li>Spam, harass, or abuse other users</li>
              <li>Violate intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. User Content</h2>
            <p className="mb-4 text-muted-foreground">
              You retain ownership of content you create or upload ("User Content"). By using our Service, you grant us a license to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Store, process, and display your User Content to provide the Service</li>
              <li>Use your User Content to improve our AI models and services</li>
              <li>Back up and secure your data</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              You're responsible for ensuring your User Content doesn't violate any laws or third-party rights. We reserve the right to remove content that violates these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Payment and Billing</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Subscription fees are billed in advance on a recurring basis</li>
              <li>All fees are non-refundable unless required by law</li>
              <li>We may change pricing with 30 days' notice</li>
              <li>You're responsible for any taxes applicable to your use of the Service</li>
              <li>Failure to pay may result in service suspension or termination</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Service, including all software, designs, text, graphics, and other content, is owned by us or our licensors and protected by copyright, trademark, and other laws. You may not copy, modify, or create derivative works without our permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Service Availability</h2>
            <p className="text-muted-foreground">
              We strive for 99.9% uptime but don't guarantee uninterrupted service. We may perform maintenance, updates, or experience outages. We're not liable for any losses due to service unavailability.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Termination</h2>
            <p className="mb-4 text-muted-foreground">
              Either party may terminate this agreement at any time. You can cancel your account through the platform or by contacting us. We may suspend or terminate accounts that violate these terms.
            </p>
            <p className="text-muted-foreground">
              Upon termination, your right to use the Service ends immediately. We may delete your account and data after a reasonable retention period, unless legally required to retain it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Disclaimers</h2>
            <p className="mb-4 text-muted-foreground">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. We don't guarantee:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>That the Service will meet your specific requirements</li>
              <li>Uninterrupted, error-free, or secure operation</li>
              <li>That defects will be corrected</li>
              <li>The accuracy or reliability of AI-generated content</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold us harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service, violation of these terms, or infringement of any rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">13. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of the State of Colorado, United States, without regard to conflict of law principles. Any disputes will be resolved in the courts of Denver, Colorado.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">14. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these terms at any time. We'll notify you of material changes via email or platform notification. Continued use after changes constitutes acceptance. If you don't agree, you must stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">15. Contact Information</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Get in touch:
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

export default TermsOfService;

