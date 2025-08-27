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
        <path d="M2 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5" />
        <path d="m21.29 14.71-3.54-3.54A2 2 0 0 0 16.34 11H14" />
        <path d="M11 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M22 19.5 19 17v-1.5" />
        <path d="m15 13-1-2" />
        <path d="M3 13 2 11" />
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
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2">
            Visible Connected Workflow
          </h2>
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
                      delay: index * 0.5,
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
