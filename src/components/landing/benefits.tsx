"use client";

import { ArrowRight, BarChart3, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const stepsData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v4l-3-3v-3" />
        <path d="M7 11v-1a2 2 0 0 1 2-2h2" />
        <path d="m22 22-5-5" />
        <path d="M17 22v-5h5" />
      </svg>
    ),
    title: "Recognition",
    description: "Real-time license plate recognition for returning customers.",
  },
  {
    icon: <BarChart3 className="h-16 w-16 text-primary" />,
    title: "Analytics",
    description: "Turn operational data into actionable insights.",
  },
  {
    icon: <CheckCircle className="h-16 w-16 text-primary" />,
    title: "Predictive Ordering",
    description: "Systems anticipate and complete orders seamlessly.",
  },
];

const arrowVariants = {
  initial: { x: 0 },
  animate: {
    x: [0, 5, 0],
  },
};

export function Benefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-[1058px] px-0">
        <div className="text-left ">
        <div className="flex items-center justify-start gap-2">
            <div className="w-[10px] h-[16px] bg-primary rounded-lg"></div>
            <span className="leading-0 font-semibold text-base">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2">
          Grow Sales Without Growing Staff
          Smart upsells, faster prep.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
          Franchise owners lose sales to long queues and rushed service. Anuba’s vehicle intelligence, predictive ordering, and prep optimization deliver faster service and more revenue — without extra staff or costly upgrades.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-start">
          {stepsData.map((step, index) => (
            <>
              <div
                key={step.title}
                className="text-center flex flex-col items-center md:col-span-1"
              >
                <div className="flex items-center justify-center h-20 w-20 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-headline font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-6">
                  {step.description}
                </p>
              </div>
              {index < stepsData.length - 1 && (
                <div className="hidden md:flex items-center justify-center h-40">
                  <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                  </motion.div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
