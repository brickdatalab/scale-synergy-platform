import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We switched to Lead Slaps after burning through $50K on recycled leads from other providers. Within 30 days, our contact rate went from 8% to 32%, and our funded rate doubled. The exclusivity is real—we're not competing with 15 other brokers anymore.",
      author: "Michael Rodriguez, Senior Partner at Capital Bridge Funding",
      metric: "4x increase in contact rate",
    },
    {
      quote:
        "The live transfers are game-changing. Our closers are talking to merchants who actually want funding, not cold prospects. We went from 60 dials per funded deal to just 12. ROI is 3.5x what we were getting with aged lists.",
      author: "Sarah Chen, VP of Sales at Apex Business Capital",
      metric: "3.5x ROI improvement",
    },
    {
      quote:
        "TCPA compliance was our biggest concern after getting hit with a lawsuit from our previous lead vendor. Lead Slaps provides full audit trails, consent verification, and DNC scrubbing. We sleep better at night knowing we're protected.",
      author: "David Thompson, Compliance Officer at Merchant Growth Partners",
      metric: "Zero compliance issues in 18 months",
    },
    {
      quote:
        "The AI scoring is incredibly accurate. We prioritize leads with 80+ scores and our close rate on those is 24%. That's unheard of in this industry. The data enrichment saves our team hours of research per day.",
      author: "Jennifer Martinez, Operations Director at FastTrack Funding",
      metric: "24% close rate on high-scored leads",
    },
  ];

  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary md:text-[40px]">
            Results from MCA Brokers and Funders
          </h2>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Real results from ISOs and direct funders using Lead Slaps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-card p-8 shadow-card hover:shadow-lg transition-shadow"
            >
              <Quote className="mb-4 h-8 w-8 text-accent" />
              <p className="mb-6 font-body text-base leading-relaxed text-text-primary">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-text-secondary mb-1">
                  {testimonial.author}
                </p>
                <p className="font-body text-sm text-accent font-medium">
                  {testimonial.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
