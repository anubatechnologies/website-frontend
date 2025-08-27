import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const articles = [
    {
        category: "Partnerships",
        title: "Anuba and Nova POS Announce Integration",
        description: "This new integration allows for seamless data flow between Anuba's prediction engine and Nova's point-of-sale system, unlocking new efficiencies for restaurants.",
        image: "https://picsum.photos/800/600",
        hint: "two logos"
    },
    {
        category: "News",
        title: "The Future of AI in the Restaurant Industry",
        description: "Explore how AI is reshaping inventory management and customer service.",
        image: "https://picsum.photos/300/200",
        hint: "restaurant interior"
    },
    {
        category: "Product",
        title: "New Feature: Multi-Location Management",
        description: "We've rolled out new tools for managing inventory across multiple locations.",
        image: "https://picsum.photos/300/200",
        hint: "map interface"
    },
    {
        category: "Case Study",
        title: "How The Daily Grind Boosted Profits by 25%",
        description: "Learn how one of our clients transformed their business with our platform.",
        image: "https://picsum.photos/300/200",
        hint: "coffee shop"
    }
];

export function News() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <section id="news" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold">Resources</span>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2 text-white">Keep up with our latest news and updates</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article */}
          <Link href="#" className="group block">
            <Card className="overflow-hidden h-full flex flex-col bg-neutral-900 border-neutral-800 transition-all duration-300 ease-in-out hover:-translate-y-2">
              <div className="overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={featuredArticle.hint}
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-primary font-semibold mb-2">{featuredArticle.category}</p>
                <h3 className="text-xl sm:text-2xl font-headline font-semibold mt-2 group-hover:text-primary transition-colors text-white">
                  {featuredArticle.title}
                </h3>
                <p className="mt-4 text-neutral-400 flex-grow">{featuredArticle.description}</p>
              </CardContent>
            </Card>
          </Link>
          
          {/* Other Articles */}
          <div className="flex flex-col gap-8">
            {otherArticles.map((article) => (
              <Link href="#" key={article.title} className="group block">
                <Card className="overflow-hidden bg-neutral-900 border-neutral-800 transition-all duration-300 ease-in-out hover:-translate-y-1 flex">
                  <div className="w-1/3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                      data-ai-hint={article.hint}
                    />
                  </div>
                  <CardContent className="p-4 w-2/3 flex flex-col justify-center text-left">
                    <div className="space-y-1">
                      <p className="text-sm text-primary font-semibold">{article.category}</p>
                      <h4 className="font-headline font-semibold group-hover:text-primary transition-colors text-white">{article.title}</h4>
                      <p className="text-sm text-neutral-400 line-clamp-2">{article.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="text-white border-neutral-700 hover:bg-neutral-800 hover:text-white">
            View all resources
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
