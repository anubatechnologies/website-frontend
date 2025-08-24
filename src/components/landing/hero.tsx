'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-secondary/50 py-20 md:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Smarter Orders, Less Guesswork, Happier Customers
          </h1>
          <p className="text-lg text-muted-foreground">
            Our new model orders. Drastically reduce waste, free up your team’s
            time from tedious inventory tasks, and improve the freshness and
            availability of your products. All with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Request a Demo</Button>
            <Button size="lg" variant="ghost">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="Product demonstration video"
                className="rounded-xl shadow-2xl"
                data-ai-hint="product interface"
            />
        </div>
      </div>
    </section>
  );
}
