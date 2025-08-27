"use client";

import { ArrowRight, BarChart3, CheckCircle } from "lucide-react";

const stepsData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 20H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
        <path d="M14 17.5V15a2.5 2.5 0 0 1 5 0v2.5" />
        <path d="M14 15h5" />
        <rect width="4" height="4" x="16" y="7" rx="1" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
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
                  <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
