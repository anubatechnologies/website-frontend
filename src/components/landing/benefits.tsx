"use client";

import { motion } from "framer-motion";
import { ScanLine, BarChart3, Bot } from "lucide-react";
import { Button } from "../ui/button";

const stepsData = [
  {
    icon: <ScanLine className="h-10 w-10 text-primary" />,
    title: "Recognition",
    description: "Real-time license plate recognition for returning customers.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Analytics",
    description: "Turn operational data into actionable insights.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Predictive Ordering",
    description: "Systems anticipate and complete orders seamlessly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function Benefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2">
            How It Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground px-4 sm:px-0">
            A simple, three-step process to unlock efficiency and boost
            profits.
          </p>
        </div>

        <motion.div
          className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Dotted line 1 */}
          <motion.svg
            className="absolute top-1/2 left-0 w-full h-1 hidden md:block"
            style={{ transform: "translateY(-50%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { delay: 0.5 } },
            }}
          >
            <motion.path
              d="M16.66% 50% L 50% 50%"
              strokeDasharray="4 4"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              variants={lineVariants}
            />
          </motion.svg>
          
          {/* Dotted line 2 */}
          <motion.svg
            className="absolute top-1/2 left-0 w-full h-1 hidden md:block"
            style={{ transform: "translateY(-50%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { delay: 0.8 } },
            }}
          >
            <motion.path
              d="M50% 50% L 83.33% 50%"
              strokeDasharray="4 4"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              variants={lineVariants}
            />
          </motion.svg>

          {stepsData.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center p-6 bg-muted/20 rounded-lg border border-border/50 z-10"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted border-2 border-primary/20 mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-headline font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center flex justify-center gap-4">
          <Button size="lg">Request a Live Demo</Button>
          <Button size="lg" variant="outline">
            View Customer Story
          </Button>
        </div>
      </div>
    </section>
  );
}
