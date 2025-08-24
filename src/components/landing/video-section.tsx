import Image from "next/image";
import { Button } from "@/components/ui/button";

export function VideoSection() {
    return (
        <section className="py-20 md:py-32 bg-secondary/50">
            <div className="container text-center mx-auto max-w-[1058px] px-4 sm:px-6 lg:px-8">
                <span className="text-primary font-semibold">40% Less Spend on Drive Thru</span>
                <h2 className="text-4xl font-headline font-bold mt-2">Turning Drive-Thru Data Into Smart Next Order Predictions</h2>
                <div className="mt-8">
                    <Image 
                        src="https://placehold.co/1200x600.png" 
                        alt="Video placeholder"
                        width={1200}
                        height={600}
                        className="rounded-xl shadow-xl mx-auto"
                        data-ai-hint="dashboard analytics"
                    />
                </div>
                <Button size="lg" className="mt-8">CTA</Button>
            </div>
        </section>
    );
}
