'use client';

import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://placehold.co/1920x1080.png"
        data-ai-hint="abstract background"
      >
        {/* You can replace this with your own video */}
        <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative container z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Smarter Orders, Less Guesswork, Happier Customers
          </h1>
          <p className="text-lg text-white/80">
            Our new model orders. Drastically reduce waste, free up your team’s
            time from tedious inventory tasks, and improve the freshness and
            availability of your products. All with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Request a Demo</Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
