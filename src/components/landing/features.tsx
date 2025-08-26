import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Cpu, ShoppingCart } from "lucide-react";
import { FeaturesTabs } from "./features-tabs";

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
            <FeaturesTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
