import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Partnerships",
    title: "Anuba and Nova POS Announce Integration",
    description:
      "This new integration allows for seamless data flow between Anuba's prediction engine and Nova's point-of-sale system, unlocking new efficiencies for restaurants.",
    image:
      "https://images.unsplash.com/photo-1647006873198-83c7e502c1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0d28lMjBsb2dvc3xlbnwwfHx8fDE3NTYzMDg4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "two logos",
  },
  {
    category: "News",
    title: "The Future of AI in the Restaurant Industry",
    description:
      "Explore how AI is reshaping inventory management and customer service.",
    image:
      "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU2MzA4ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "restaurant interior",
  },
  {
    category: "Product",
    title: "New Feature: Multi-Location Management",
    description:
      "We've rolled out new tools for managing inventory across multiple locations.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzI0NjAzMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "business meeting",
  },
  {
    category: "Case Study",
    title: "How The Daily Grind Boosted Profits by 25%",
    description:
      "Learn how one of our clients transformed their business with our platform.",
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTc1NjMwODgxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "coffee shop",
  },
];

export function News() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <section id="news" className="py-20 md:py-32 bg-[#101E2D] text-white">
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3x relative">
          <div className="flex items-center justify-start gap-2">
            <div className="w-[10px] h-[16px] bg-primary rounded-lg"></div>
            <span className="leading-0 font-semibold text-base">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2 text-white">
            Keep up with our latest news and updates
          </h2>
          <ArrowUpRight
            className="absolute top-0 right-0 opacity-40 hover:opacity-95 cursor-pointer"
            size="60px"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <Link href="#" className="group block h-full">
            <Card className="overflow-hidden h-full flex flex-col bg-neutral-900 border-neutral-800 rounded-lg">
              <div className="overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"
                  data-ai-hint={featuredArticle.hint}
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-primary font-semibold mb-2">
                  {featuredArticle.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-headline font-semibold mt-2 group-hover:text-primary transition-colors text-white">
                  {featuredArticle.title}
                </h3>
                <p className="mt-4 text-neutral-400 flex-grow">
                  {featuredArticle.description}
                </p>
              </CardContent>
            </Card>
          </Link>

          <div className="flex flex-col gap-2 justify-between">
            {otherArticles.map((article) => (
              <Link href="#" key={article.title} className="group block">
                <Card className="overflow-hidden bg-transparent border-neutral-800 flex rounded-lg">
                  <div className="w-1/3 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"
                      data-ai-hint={article.hint}
                    />
                  </div>
                  <CardContent className="p-4 w-2/3 flex flex-col justify-center text-left">
                    <div className="space-y-1">
                      <p className="text-sm text-primary font-semibold">
                        {article.category}
                      </p>
                      <h4 className="font-headline font-semibold group-hover:text-primary transition-colors text-white">
                        {article.title}
                      </h4>
                      <p className="text-sm text-neutral-400 line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
