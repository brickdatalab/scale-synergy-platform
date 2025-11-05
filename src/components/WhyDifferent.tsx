import { Shield, Bot, FileCheck, TrendingUp } from "lucide-react";

const WhyDifferent = () => {
  const features = [
    {
      icon: Shield,
      title: "True Exclusivity—One Buyer Per Lead",
      description:
        "Our top-tier leads are sold once and never resold. You get a clean, uncontested shot at the deal.",
    },
    {
      icon: FileCheck,
      title: "Compliance First (Consent, TCPA, DNC)",
      description:
        "We take compliance seriously. Every lead is verified for consent and scrubbed against DNC and known litigator lists.",
    },
    {
      icon: Bot,
      title: "Real‑Time Delivery & Routing",
      description:
        "Leads are delivered to your CRM in under 60 seconds, with intelligent routing to get the right lead to the right rep, instantly.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Accountability, Not Just Volume",
      description:
        "Our success is tied to yours. We provide the data, strategy, and support you need to actually convert leads and grow your business.",
    },
  ];

  return (
    <section id="why-us" className="bg-surface py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary md:text-[40px]">
            Why Lead Slaps Is Different
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
