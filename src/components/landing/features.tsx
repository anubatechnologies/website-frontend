import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Cpu, ShoppingCart } from "lucide-react";

const featuresData = [
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: "Real-time Demand Forecasting",
        description: "Accurately predict what you'll need and when you'll need it with 95% accuracy.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Automated Inventory Analysis",
        description: "Our system continuously monitors your stock levels and suggests optimal reorder points.",
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Reduces Food Prep Time by 15%",
        description: "Optimize your kitchen workflow with smarter prep schedules based on predicted demand.",
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Cutting-edge Prediction Engine",
        description: "Powered by the latest in machine learning to adapt to your unique business patterns.",
    },
]

export function Features() {
  return (
    <section className="py-20 md:py-32">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-headline font-bold">The Technology Behind Smarter Ordering</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A first-of-its-kind smart ordering and inventory management platform with our proprietary Prediction Engine.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button className="text-primary border-b-2 border-primary pb-1 font-semibold">INVENTORY MANAGEMENT</button>
                    <button className="text-muted-foreground pb-1">PREDICTION ENGINE</button>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuresData.map(feature => (
                    <Card key={feature.title}>
                        <CardHeader>
                            {feature.icon}
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <CardTitle className="font-headline">{feature.title}</CardTitle>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
