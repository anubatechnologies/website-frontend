import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredArticle = {
  category: "Partnerships",
  title: "Anuba and Nova POS Announce Integration",
  description: "This new integration allows for seamless data flow between Anuba's prediction engine and Nova's point-of-sale system, unlocking new efficiencies for restaurants.",
  image: "https://placehold.co/600x400.png",
  hint: "two logos"
};

const otherArticles = [
  {
    category: "News",
    title: "The Future of AI in the Restaurant Industry",
    description: "Explore how artificial intelligence is reshaping everything from inventory to customer service.",
    image: "https://placehold.co/200x150.png",
    hint: "restaurant interior"
  },
  {
    category: "Product",
    title: "New Feature: Multi-Location Management",
    description: "We're excited to roll out new tools that make managing inventory across multiple locations easier than ever.",
    image: "https://placehold.co/200x150.png",
    hint: "map interface"
  },
  {
    category: "Case Study",
    title: "How The Daily Grind Boosted Profits by 25%",
    description: "Learn how this popular coffee chain leveraged Anuba to reduce waste and increase sales.",
    image: "https://placehold.co/200x150.png",
    hint: "coffee shop"
  },
];

export function News() {
  return (
    <section id="news" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold">Resources</span>
          <h2 className="text-4xl font-headline font-normal mt-2">Keep up with our latest news and updates</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={featuredArticle.hint}
              />
              <div className="p-6">
                <p className="text-sm text-primary font-semibold">{featuredArticle.category}</p>
                <h3 className="text-2xl font-headline font-semibold mt-2">
                  <Link href="#" className="hover:underline">{featuredArticle.title}</Link>
                </h3>
                <p className="mt-4 text-muted-foreground">{featuredArticle.description}</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {otherArticles.map((article) => (
              <Card key={article.title}>
                <CardContent className="p-4 flex items-center gap-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={150}
                    height={100}
                    className="rounded-md object-cover"
                    data-ai-hint={article.hint}
                  />
                  <div className="space-y-1">
                     <p className="text-sm text-primary font-semibold">{article.category}</p>
                     <h4 className="font-headline font-semibold">
                       <Link href="#" className="hover:underline">{article.title}</Link>
                     </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
            <Button size="lg">View all resources</Button>
        </div>
      </div>
    </section>
  );
}
