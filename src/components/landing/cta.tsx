import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container text-center">
        <h2 className="text-4xl font-headline font-normal">Ready to get in touch?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          See how our AI-powered platform can help you reduce waste, save time, and increase sales.
        </p>
        <Button size="lg" className="mt-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
