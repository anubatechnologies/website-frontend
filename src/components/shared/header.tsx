'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isScrolled = latest > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
    const isScrollingDown = scrollY.getPrevious() < latest && latest > 150;
    if (isScrollingDown) {
      controls.start('hidden');
    } else {
      controls.start('visible');
    }
  });

  return (
    <motion.header
      className="fixed z-50 w-full"
      animate={controls}
      initial="visible"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      style={{
        backgroundColor: scrolled ? 'hsl(var(--background))' : 'transparent',
        borderBottomWidth: scrolled ? '1px' : '0px',
        borderColor: scrolled ? 'hsl(var(--border))' : 'transparent',
        color: scrolled ? 'hsl(var(--foreground))' : 'hsl(var(--primary-foreground))',
      }}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className={cn('h-6 w-6', !scrolled && "stroke-primary-foreground")} />
            <span
              className={cn(
                'hidden font-bold sm:inline-block font-headline'
              )}
            >
              Kinetic SaaS
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                scrolled ? 'text-foreground/60' : 'text-primary-foreground/80 hover:text-primary-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            asChild
            className={cn(!scrolled && 'text-primary-foreground hover:bg-white/10 hover:text-primary-foreground')}
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild
           variant={scrolled ? 'default' : 'outline'}
           className={cn(
             !scrolled && 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
           )}
          >
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={cn("px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden", !scrolled && 'text-primary-foreground hover:bg-white/10 hover:text-primary-foreground')}
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
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col items-start space-y-2">
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full justify-start">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
