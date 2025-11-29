import { Linkedin, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

type FooterLink = {
  name: string;
  href: string;
  soon?: boolean;
};

const footerLinks: {
  product: FooterLink[];
  solutions: FooterLink[];
  company: FooterLink[];
  discover: FooterLink[];
  legal: FooterLink[];
} = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
  ],
  solutions: [
    { name: "Lead Capture", href: "#features" },
    { name: "Appointment Booking", href: "#features" },
    { name: "Customer Communication", href: "#features" },
    { name: "Pipeline Management", href: "#features" },
  ],
  company: [
    { name: "About Us", href: "https://aixcellence.co/#about", soon: true },
    { name: "Newsroom", href: "https://aixcellence.co/#news" },
  ],
  discover: [
    { name: "Blogs", href: "https://aixcellence.co/#blog" },
    { name: "Case Studies", href: "https://aixcellence.co/#cases" },
    { name: "Guide", href: "https://aixcellence.co/#guide", soon: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1C7UCG71Vh/?mibextid=wwXIfr" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/aixcellenceteam?igsh=MXRremRmZnB3bmluMg%3D%3D&utm_source=qr" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/aixcellenceteam/" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@aixcellenceteam?si=zUSp7FUGa-bXW6pV" },
];

const Footer = () => {
  return (
    <footer className="footer-aix1">
      <div className="container-custom footer-grid-aix1">
        {/* Brand Section */}
        <div className="footer-brand-aix1">
          <a href="https://aix1.aixcellence.co" className="footer-logo-aix1">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-white">
              AIX<span className="text-gradient-primary">1</span>
            </span>
          </a>
          <div className="footer-brand-tagline-aix1">
            <p className="footer-brand-title-aix1">AIX1</p>
            <p className="footer-brand-subtitle-aix1">Automate Your Entire Business with AI</p>
          </div>
          
          <div className="footer-contact-aix1">
            <div className="footer-contact-item-aix1">
              <Phone size={16} />
              <a href="tel:+17206047231">+1 (720) 604-7231</a>
            </div>
            <div className="footer-contact-item-aix1">
              <Mail size={16} />
              <a href="mailto:hi@aixcellence.co">hi@aixcellence.co</a>
            </div>
            <div className="footer-contact-item-aix1">
              <MapPin size={16} />
              <span>1500 Grant St #4242, Denver, CO 80203, United States</span>
            </div>
          </div>
        </div>

        {/* Product Column */}
        <div className="footer-column-aix1">
          <strong>Product</strong>
          <ul>
            {footerLinks.product.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="footer-column-aix1">
          <strong>Solutions</strong>
          <ul>
            {footerLinks.solutions.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column-aix1">
          <strong>Company</strong>
          <ul>
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
                {link.soon && <span className="soon-badge-aix1">Soon</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Discover Column */}
        <div className="footer-column-aix1">
          <strong>Discover</strong>
          <ul>
            {footerLinks.discover.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
                {link.soon && <span className="soon-badge-aix1">Soon</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Panel */}
        <div className="footer-social-panel-aix1">
          <div className="footer-social-heading-aix1">
            <span>Connect with us</span>
          </div>
          <div className="footer-social-links-aix1">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link-aix1"
                  aria-label={social.label}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom footer-bottom-aix1">
        <div className="footer-copyright-aix1">
          <p>© {new Date().getFullYear()} AIX1. All rights reserved.</p>
        </div>
        <div className="footer-legal-aix1">
          {footerLinks.legal.map((link, index) => (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
