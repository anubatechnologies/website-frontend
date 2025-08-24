'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/why-anuba', label: 'Why Anuba' },
  { href: '/ai-ordering-solutions', label: 'AI Ordering Solutions' },
  { href: '/problems-we-solve', label: 'Problems We Solve' },
  { href: '/resources', label: 'Resources' },
  { href: '/company', label: 'Company' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isScrolled = latest > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }

    const isScrollingDown = scrollY.getPrevious() < latest && latest > 150;
    if (isScrollingDown) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  
  const showWhiteBg = !isHomePage || scrolled || isHovered;

  return (
    <motion.header
      className="fixed top-0 z-50 w-full transition-colors duration-300"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      style={{
        backgroundColor: showWhiteBg ? 'hsl(var(--background))' : 'transparent',
        borderColor: showWhiteBg ? 'hsl(var(--border))' : 'transparent',
        color: showWhiteBg ? 'hsl(var(--foreground))' : 'hsl(var(--primary-foreground))',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo
              className={cn(
                'h-6 w-6',
                !showWhiteBg && 'stroke-primary-foreground'
              )}
            />
            <span className="hidden font-bold sm:inline-block font-headline">
              Kinetic SaaS
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                showWhiteBg
                  ? 'text-foreground/60'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                'px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden',
                !showWhiteBg &&
                  'text-primary-foreground hover:bg-white/10 hover:text-primary-foreground'
              )}
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
                <div className="flex flex-col items-start space-y-2 pt-4">
                  <Button asChild className="w-full justify-start">
                    <Link href="/#contact">Contact Us</Link>
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
