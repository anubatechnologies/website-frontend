import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, ScanLine, BrainCircuit, Bot } from "lucide-react";
import { Button } from "../ui/button";

const stepsData = [
    {
        icon: <ScanLine className="h-10 w-10 text-primary" />,
        title: "Step 1: Data Integration",
        description: "Connect your existing POS and camera systems to our platform in minutes. Our AI begins analyzing sales patterns, traffic, and historical data immediately.",
    },
    {
        icon: <BrainCircuit className="h-10 w-10 text-primary" />,
        title: "Step 2: AI-Powered Prediction",
        description: "Our proprietary engine forecasts demand with incredible accuracy, suggesting exactly what to prepare and when to reduce waste and prevent stockouts.",
    },
    {
        icon: <Bot className="h-10 w-10 text-primary" />,
        title: "Step 3: Automated Workflow",
        description: "Receive intelligent alerts and automated order suggestions, freeing up your team to focus on delivering excellent customer service instead of managing inventory.",
    }
]

export function Benefits() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2">How It Works</h2>
                    <p className="mt-4 text-base text-muted-foreground px-4 sm:px-0">A simple, three-step process to unlock efficiency and boost profits.</p>
                </div>

                <div className="relative mt-16">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true" />
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                        {stepsData.map((step, index) => (
                            <div key={step.title} className="relative text-center">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background h-8 w-8 hidden md:flex items-center justify-center">
                                    <div className="h-2 w-full bg-border"></div>
                                </div>
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted border-2 border-primary/20 mx-auto mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-headline font-semibold">{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center flex justify-center gap-4">
                    <Button size="lg">Request a Live Demo</Button>
                    <Button size="lg" variant="outline">View Customer Story</Button>
                </div>
            </div>
        </section>
    );
}