import Image from "next/image";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CheckCircle } from "lucide-react";

const features = [
  {
    name: "Intuitive Dashboard",
    description: "Our dashboard is designed for ease of use, allowing you to manage everything from a single, clean interface.",
    image: "https://placehold.co/600x400.png",
    alt: "Intuitive Dashboard",
    hint: "dashboard interface",
  },
  {
    name: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools. Track your progress and make data-driven decisions.",
    image: "https://placehold.co/600x400.png",
    alt: "Advanced Analytics",
    hint: "charts graphs",
  },
  {
    name: "Seamless Integrations",
    description: "Connect Anuba Technologies with your favorite tools and services. We support a wide range of integrations to fit your workflow.",
    image: "https://placehold.co/600x400.png",
    alt: "Seamless Integrations",
    hint: "app logos",
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-headline font-normal tracking-tight sm:text-6xl">
                Powerful Features
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
                Everything you need to be more productive and successful.
              </p>
            </div>
            <div className="mt-20 space-y-20">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={`lg:col-start-${index % 2 === 0 ? 1 : 2}`}>
                    <h2 className="text-2xl sm:text-3xl font-normal tracking-tight font-headline">
                      {feature.name}
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      {feature.description}
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex gap-x-3">
                        <CheckCircle
                          className="mt-1 h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        <span>Feature benefit number one</span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircle
                          className="mt-1 h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        <span>Another amazing benefit of this feature</span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircle
                          className="mt-1 h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        <span>Third benefit to seal the deal</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`row-start-1 lg:row-start-auto lg:col-start-${
                      index % 2 === 0 ? 2 : 1
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-xl ring-1 ring-border"
                      data-ai-hint={feature.hint}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
