'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h1
          className="text-4xl font-headline font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Unleash Your Potential with Kinetic SaaS
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-8 text-muted-foreground"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          The ultimate solution for streamlining your workflow, boosting productivity, and achieving your goals faster than ever before.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-x-6"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Button asChild size="lg">
            <Link href="/register">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" asChild size="lg">
            <Link href="/features">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
