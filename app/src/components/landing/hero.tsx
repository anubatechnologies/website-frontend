'use client';

import { Button } from '@/components/ui/button';
import { Pause, Play, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], ['0vh', '2vh']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['0px', '24px']);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={targetRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-0">
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{ scale, borderRadius, y }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            poster="https://placehold.co/1920x1080.png"
            data-ai-hint="abstract background"
          >
            {/* You can replace this with your own video */}
            <source
              src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          <div className="relative container z-20 flex flex-col items-start justify-center h-full text-left text-white">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Smarter Orders, Less Guesswork, Happier Customers
              </h1>
              <p className="text-lg text-white/80">
                Our new model orders. Drastically reduce waste, free up your
                team’s time from tedious inventory tasks, and improve the
                freshness and availability of your products. All with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Request a Demo</Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
          <button
            onClick={handlePlayPause}
            className="absolute bottom-4 right-4 z-20 bg-white rounded-full flex items-center justify-center"
            style={{ width: '30px', height: '30px' }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-black" />
            ) : (
              <Play className="h-4 w-4 text-black" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
