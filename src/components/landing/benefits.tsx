import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "../ui/button";

const benefitsData = [
    {
        icon: <TrendingUp className="h-10 w-10 mx-auto text-primary mb-4" />,
        title: "Increase sales",
        description: "Maximize revenue with optimized stock levels and reduced missed opportunities.",
    },
    {
        icon: <Users className="h-10 w-10 mx-auto text-primary mb-4" />,
        title: "Empower your team",
        description: "Free up your staff from manual inventory tasks to focus on customer service.",
    },
    {
        icon: <Zap className="h-10 w-10 mx-auto text-primary mb-4" />,
        title: "Improve forecasting",
        description: "Leverage AI to make smarter, data-driven decisions for your business.",
    }
]

export function Benefits() {
    return (
        <section className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold">Franchise-Ready</span>
                    <h2 className="text-4xl font-headline font-normal mt-2">Grow Sales Without Growing Staff</h2>
                    <p className="mt-4 text-base text-muted-foreground">Smart upsells, faster prep.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefitsData.map(benefit => (
                        <Card key={benefit.title} className="text-center p-8">
                           <CardContent>
                                {benefit.icon}
                                <h3 className="text-xl font-headline font-semibold">{benefit.title}</h3>
                                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center flex justify-center gap-4">
                    <Button size="lg">Request a Live Demo</Button>
                    <Button size="lg" variant="outline">View Customer Story</Button>
                </div>
            </div>
        </section>
    );
}
