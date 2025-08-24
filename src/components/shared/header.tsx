'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#news', label: 'News' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });


  return (
    <motion.header 
      className="sticky top-0 z-50 w-full"
      initial={{ top: 0 }}
      animate={{ 
        top: scrolled ? '0.5rem' : 0,
       }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mx-auto"
        initial={{ width: '100%', borderRadius: '0px' }}
        animate={{
          width: scrolled ? 'calc(100% - 1rem)' : '100%',
          borderRadius: scrolled ? '0.5rem' : '0px',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex h-16 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mr-auto flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block font-headline">
                Kinetic SaaS
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Logo className="mr-2 h-4 w-4" />
                <span className="font-bold font-headline">Kinetic SaaS</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.header>
  );
}
