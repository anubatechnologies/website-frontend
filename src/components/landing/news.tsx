import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const articles = [
    {
        category: "Partnerships",
        title: "Anuba and Nova POS Announce Integration",
        description: "This new integration allows for seamless data flow between Anuba's prediction engine and Nova's point-of-sale system.",
        image: "https://picsum.photos/600/400",
        hint: "two logos"
    },
    {
        category: "News",
        title: "The Future of AI in the Restaurant Industry",
        description: "Explore how artificial intelligence is reshaping everything from inventory management to customer service.",
        image: "https://picsum.photos/600/400",
        hint: "restaurant interior"
    },
    {
        category: "Product",
        title: "New Feature: Multi-Location Management",
        description: "We're excited to roll out new tools that make managing inventory across multiple locations easier than ever.",
        image: "https://picsum.photos/600/400",
        hint: "map interface"
    },
];

export function News() {
  return (
    <section id="news" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold">Resources</span>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal mt-2">Keep up with our latest news and updates</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href="#" key={article.title} className="group block">
              <Card className="overflow-hidden h-full flex flex-col bg-card border-border/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <div className="overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={article.hint}
                    />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary font-semibold mb-2">{article.category}</p>
                  <h3 className="text-lg font-headline font-semibold flex-grow">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{article.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button size="lg" variant="outline">
                View all resources
                <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
      </div>
    </section>
  );
}
