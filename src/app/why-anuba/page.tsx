import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function WhyAnubaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-36 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-normal tracking-tight sm:text-6xl">
            Why Anuba
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Content for this page is coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
