import { Button } from "@/components/ui/button";
import { Ripple } from "../magicui/ripple";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";

export function Cta() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="container text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-headline font-normal">
          Ready to get in touch?
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
          See how our AI-powered platform can help you reduce waste, save time,
          and increase sales.
        </p>
        <Link href="/#contact" className="mx-auto mt-10">
          <ShimmerButton className="py-2.5" background="#F1573B">
            <span className="whitespace-pre-wrap text-center !text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
              Contact Us
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
