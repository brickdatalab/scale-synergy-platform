import { Button } from "@/components/ui/button";
const FinalCTA = () => {
  return <section className="bg-primary py-24 text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2 className="mb-8 font-heading text-4xl font-bold text-primary-foreground md:text-[40px]">
          Ready to Stop Competing and Start Converting?
        </h2>
        <p className="mb-12 font-body opacity-90 text-[fffffff] text-white">
          Explore our product tiers, configure your data plan with powerful AI add-ons, and build the high-performance pipeline your team deserves.
        </p>
        <Button variant="secondary" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <a href="/products">Build Your Plan</a>
        </Button>
      </div>
    </section>;
};
export default FinalCTA;