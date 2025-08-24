import Link from 'next/link';
import { Logo } from '@/components/logo';

const footerLinks = {
  Products: [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Integrations", href: "#" },
  ],
  Company: [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "News", href: "#news" },
  ],
  Resources: [
    { title: "Blog", href: "#" },
    { title: "Support", href: "#" },
    { title: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground">
              The AI-powered platform for smarter inventory management.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-headline font-semibold">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Anuba Technologies. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
