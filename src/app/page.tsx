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
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="relative z-30 bg-background">
        <Header />
        <main className="flex-grow">
          <Features />
          <VideoSection />
          <Benefits />
          <News />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
