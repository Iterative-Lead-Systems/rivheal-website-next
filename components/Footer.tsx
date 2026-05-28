import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Shield } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#modules" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-14 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/rivheal.png"
                alt="RivHeal"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The operating system for Nigerian healthcare — connecting patients, hospitals, and practitioners on one platform.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0 text-primary" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0 text-primary" />
              <a href="mailto:hello@rivheal.com" className="hover:text-foreground transition-colors">
                hello@rivheal.com
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">For Healthcare Providers</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to digitise your hospital or clinic? Book a personalised demo with our team.
            </p>
            <Link
              href="/request-demo"
              className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 RivHeal. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary" />
            <span>NDPR Compliant · Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
