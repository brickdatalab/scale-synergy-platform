import { Shield, Bot, FileCheck, TrendingUp } from "lucide-react";
import diverseBusinessImage from "@/assets/industries-diverse-businesses.png";

const WhyDifferent = () => {
  const features = [
    {
      icon: Shield,
      title: "True Exclusivity—One Buyer Per Lead",
      description:
        "Our top-tier leads are sold once and never resold. You get a clean, uncontested shot at the deal. No more competing with 10-20 other brokers for burned-out prospects.",
    },
    {
      icon: FileCheck,
      title: "Compliance First (Consent, TCPA, DNC)",
      description:
        "We take compliance seriously. Every lead is verified for consent and scrubbed against DNC and known litigator lists. Full audit trails with timestamps, IP addresses, and opt-in copy included.",
    },
    {
      icon: Bot,
      title: "Real‑Time Delivery & Routing",
      description:
        "Leads are delivered to your CRM in under 60 seconds, with intelligent routing to get the right lead to the right rep, instantly. API, webhook, email, or SFTP—your choice.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Accountability, Not Just Volume",
      description:
        "Our success is tied to yours. We provide the data, strategy, and support you need to actually convert leads and grow your business. Quality over quantity, always.",
    },
  ];

  return (
    <section id="why-us" className="bg-surface py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary md:text-[40px]">
            Why Lead Slaps Is Different
          </h2>
          <p className="mt-4 mx-auto max-w-3xl font-body text-lg text-text-secondary">
            We're not just a lead vendor—we're your strategic partner in growth
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border-2 border-accent/20">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={diverseBusinessImage}
              alt="Diverse business owners we serve with MCA leads"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
