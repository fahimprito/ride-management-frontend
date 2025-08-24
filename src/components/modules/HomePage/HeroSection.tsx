import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
                <img
                    alt="background"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
                    className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
                />
            </div>
            <div className="relative z-10 container mx-auto">
                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
                            <Logo></Logo>
                        </div>
                        <div>
                            <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                                Ride Smarter with <span className="text-primary">RideStation</span>
                            </h1>
                            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                                Book a ride anytime, anywhere. Fast, safe, and affordable trips with
                                trusted drivers—your journey starts here.
                            </p>
                        </div>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button className="shadow-sm transition-shadow hover:shadow hover:cursor-pointer">
                                Get Started
                            </Button>
                            <Button variant="outline" className="group hover:cursor-pointer">
                                Learn more{" "}
                                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;