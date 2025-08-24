import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals and small teams starting out.",
    features: [
      "Core Features",
      "5 Projects",
      "Basic Analytics",
      "Email Support",
    ],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing businesses that need more power.",
    features: [
      "Everything in Starter",
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Integrations",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Support",
      "SLA",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-headline font-normal tracking-tight sm:text-6xl">
                Pricing Plans
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your needs.
              </p>
            </div>
            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`flex flex-col ${
                    tier.popular ? "border-primary ring-2 ring-primary" : ""
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl sm:text-3xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
