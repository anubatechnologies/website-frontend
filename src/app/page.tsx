import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { VideoSection } from "@/components/landing/video-section";
import { Benefits } from "@/components/landing/benefits";
import { News } from "@/components/landing/news";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
        <VideoSection />
        <div className="mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
          <Benefits />
        </div>
        <News />
        <div className="mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
