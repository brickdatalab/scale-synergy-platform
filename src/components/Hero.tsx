import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Exclusive MCA Leads that Actually Convert — Your Scalability Partner
            </h1>
            <p className="mb-8 font-body text-lg text-text-secondary md:text-xl lg:leading-relaxed">
              Stop paying for oversold lists. We deliver <strong>exclusive merchant cash advance leads</strong>—scored by AI, verified for TCPA, and routed to your CRM in real time. We are not a lead vendor; we are a strategic data partner, and our model is simple: We only succeed when you scale.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="default" size="lg" asChild>
                <a href="/products">View Products</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            <p className="mt-6 font-body text-sm text-text-muted">
              Trusted by top MCA brokers, ISOs, and funders
            </p>
          </div>
          <div className="lg:col-span-2">
            <img
              src={heroVisual}
              alt="Exclusive MCA leads hero — Lead Slaps"
              className="h-auto w-full rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
