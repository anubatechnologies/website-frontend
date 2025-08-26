"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Play, Pause, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { SparklesText } from "../magicui/spark-text";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], ["45deg", "0deg"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

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
    <section
      ref={sectionRef}
      className="my-20 md:my-32 overflow-x-clip relative overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-[6%]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <motion.div
        className="bg-[#101E2D] z-1000 "
        style={{ scaleX, borderRadius }}
      >
        <div className="container flex flex-col justify-center text-center mx-auto max-w-[1058px] px-0 sm:px-6 lg:px-8 py-20 md:py-32">
          <span className="text-white font-headline font-semibold w-fit flex items-center mx-auto gap-2 mb-4">
            <Sparkles size="20px" />
            <SparklesText className="text-base font-light">
              Intelligent Order Flow
            </SparklesText>
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-light !leading-[70px] mt-2 text-primary-foreground">
            Turning Drive-Thru Data Into Smart Next Order Predictions
          </h2>
          <div className="mt-8" style={{ perspective: "1000px" }}>
            <motion.div
              style={{ rotateX, transformStyle: "preserve-3d" }}
              className="relative rounded-xl shadow-xl mx-auto w-full max-w-[1058px]"
            >
              <div className="relative w-full aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full rounded-xl object-cover"
                  poster="https://picsum.photos/1200/600"
                  data-ai-hint="dashboard analytics"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="/videos/hero_bg_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-white text-sm"
                        >
                          {isPlaying ? "Pause" : "Play"}
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
                        {isPlaying ? "Pause video" : "Play video"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <Link href="/#contact" className="mx-auto mt-10">
            <ShimmerButton className="py-2.5" background="#F1573B">
              <span className="whitespace-pre-wrap text-center !text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
                Contact Us
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
