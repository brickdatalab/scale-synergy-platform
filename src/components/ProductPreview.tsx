import { ArrowRight, Phone, Zap, TrendingUp } from "lucide-react";
import constructionImage from "@/assets/construction-business.jpg";
import retailImage from "@/assets/retail-owner.jpg";
import contractorImage from "@/assets/contractor-business.jpg";

const ProductPreview = () => {
  const products = [
    {
      title: "Live Transfer MCA Leads",
      subtitle: "Real Conversations, Real Intent",
      description:
        "For teams that want to speak directly with qualified, interested merchants. We handle the initial contact and transfer the call to your closer.",
      href: "/products",
      icon: Phone,
      image: constructionImage,
      priceRange: "$75-$150/transfer",
    },
    {
      title: "Fresh Submission Exclusive MCA Leads",
      subtitle: "Real-Time, Uncontested",
      description:
        "Our premier offering. Real-time, consent-based leads from direct web form submissions, sold only to you. Delivered in under 60 seconds.",
      href: "/products",
      icon: Zap,
      image: retailImage,
      priceRange: "$40-$80/lead",
    },
    {
      title: "Aged MCA Leads",
      subtitle: "Qualified, Lower CPL",
      description:
        "High-quality, curated aged leads for teams that need consistent volume at a lower cost per lead. Perfect for multi-touch campaigns.",
      href: "/products",
      icon: TrendingUp,
      image: contractorImage,
      priceRange: "$5-$15/lead",
    },
  ];

  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary md:text-[40px]">
            Choose the Right MCA Leads for Your Pipeline
          </h2>
          <p className="mt-4 mx-auto max-w-3xl font-body text-lg text-text-secondary">
            Three proven lead types to match your team size, sales process, and budget
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group rounded-lg bg-card overflow-hidden shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-2 font-heading text-2xl font-semibold text-text-primary">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="mb-3 font-body text-sm font-medium text-accent">
                      {product.subtitle}
                    </p>
                  )}
                  <p className="mb-4 font-body text-base leading-relaxed text-text-secondary">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6 pt-4 border-t border-border">
                    <p className="font-body text-sm text-text-muted">Starting at</p>
                    <p className="font-heading text-xl font-bold text-accent">
                      {product.priceRange}
                    </p>
                  </div>

                  <a
                    href={product.href}
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
