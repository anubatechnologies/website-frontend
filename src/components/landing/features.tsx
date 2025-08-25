import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Cpu, ShoppingCart } from "lucide-react";
import { TabsDemo } from "./features-tabs";
const featuresData = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "Real-time Demand Forecasting",
    description:
      "Accurately predict what you'll need and when you'll need it with 95% accuracy.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Automated Inventory Analysis",
    description:
      "Our system continuously monitors your stock levels and suggests optimal reorder points.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Reduces Food Prep Time by 15%",
    description:
      "Optimize your kitchen workflow with smarter prep schedules based on predicted demand.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Cutting-edge Prediction Engine",
    description:
      "Powered by the latest in machine learning to adapt to your unique business patterns.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center  mx-auto">
          <h2 className="text-3xl sm:text-4xl font-headline font-normal">
            The Technology Behind Smarter Ordering
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            A first-of-its-kind smart ordering and inventory management platform
            with our proprietary Prediction Engine.
          </p>
          <div className="mt-12">
            <TabsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
