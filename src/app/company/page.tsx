import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-36 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-normal tracking-tight sm:text-6xl">
            Company
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
            Content for this page is coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
