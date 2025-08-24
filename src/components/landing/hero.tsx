'use client';

import { Button } from '@/components/ui/button';
import { Eye, Pause, Play } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['0px', '24px']);

  const togglePlay = () => {
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
          style={{ scale, borderRadius }}
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
              src="/videos/hero_bg_video.mp4"
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
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  See Franchise Success Stories
                </Button>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-4 right-4 z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-2">
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-sm"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </motion.span>
                )}
              </AnimatePresence>
              <Button
                size="icon"
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white text-black rounded-full w-[30px] h-[30px]"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" fill="currentColor" />
                ) : (
                  <Play className="h-4 w-4" fill="currentColor" />
                )}
                <span className="sr-only">
                  {isPlaying ? 'Pause video' : 'Play video'}
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
