"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], ["45deg", "0deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 md:py-32"
      style={{ opacity }}
    >
      <motion.div
        className="bg-[#101E2D]"
        style={{ scale }}
      >
        <div className="container text-center mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <span className="text-primary font-semibold">
            40% Less Spend on Drive Thru
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2 text-primary-foreground">
            Turning Drive-Thru Data Into Smart Next Order Predictions
          </h2>
          <div className="mt-8" style={{ perspective: "1000px" }}>
            <motion.div
              style={{ rotateX, transformStyle: "preserve-3d" }}
              className="relative rounded-xl shadow-xl mx-auto w-full max-w-4xl"
            >
              <video
                ref={videoRef}
                className="w-full h-full rounded-xl"
                poster="https://picsum.photos/1200/600"
                data-ai-hint="dashboard analytics"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/cta_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl cursor-pointer"
                  onClick={handlePlay}
                >
                  <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors" />
                </div>
              )}
            </motion.div>
          </div>
          <Button size="lg" className="mt-8">
            CTA
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
