import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  useEffect(() => {
    document.title = "MCA Lead Products - Direct Submissions, Alpha & Apex Data | Lead Slaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Three data tiers for every MCA team. Direct Submissions for elite teams, Alpha for growing brokers, Apex for high-volume call centers. Exclusive leads that convert.");
    }
  }, []);

  const scrollToCTA = () => {
    document.getElementById('products-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="mb-6 text-center font-headline text-[56px] font-bold leading-[1.1] text-primary">
            Build Your MCA Pipeline by Design — Three Tiers, One Strategy
          </h1>
          <p className="mx-auto max-w-5xl text-center font-body text-xl leading-relaxed text-text-secondary">
            Choose the data tier that matches your team and growth plan. Direct Submissions for uncontested speed-to-fund, Alpha Data for smart-aged volume with intent, Apex Data for cost-efficient scale. Use our on-page guide to size your volume, exclusivity, and delivery—then request a tailored mix.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Direct Submissions */}
            <div className="rounded-lg bg-card p-10 shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
                Premium Tier
              </div>
              <h3 className="mb-3 font-headline text-[32px] font-semibold text-primary">
                Direct Submissions
              </h3>
              <p className="mb-6 font-body text-base leading-relaxed text-text-secondary">
                Exclusive, never-resold web forms for uncontested speed-to-fund
              </p>
              <div className="mb-6 space-y-3 border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Age Range:</span>
                  <span className="text-text-secondary">Real-time (&lt;60s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Ideal Team:</span>
                  <span className="text-text-secondary">1-5 reps</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Starting Price:</span>
                  <span className="text-accent font-semibold">$75/lead</span>
                </div>
              </div>
              <Button onClick={scrollToCTA} className="w-full">
                Get Pricing
              </Button>
            </div>

            {/* Alpha Data */}
            <div className="rounded-lg bg-card p-10 shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 inline-block rounded-full bg-success/10 px-4 py-1 text-sm font-semibold text-success">
                Growth Tier
              </div>
              <h3 className="mb-3 font-headline text-[32px] font-semibold text-primary">
                Alpha Data
              </h3>
              <p className="mb-6 font-body text-base leading-relaxed text-text-secondary">
                Smart-aged submissions with proven funding intent
              </p>
              <div className="mb-6 space-y-3 border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Age Range:</span>
                  <span className="text-text-secondary">30 days - 1 year</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Ideal Team:</span>
                  <span className="text-text-secondary">5-15 reps</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Starting Price:</span>
                  <span className="text-accent font-semibold">$12/lead</span>
                </div>
              </div>
              <Button onClick={scrollToCTA} className="w-full">
                Get Pricing
              </Button>
            </div>

            {/* Apex Data */}
            <div className="rounded-lg bg-card p-10 shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Scale Tier
              </div>
              <h3 className="mb-3 font-headline text-[32px] font-semibold text-primary">
                Apex Data
              </h3>
              <p className="mb-6 font-body text-base leading-relaxed text-text-secondary">
                Massive volume with trigger-based targeting
              </p>
              <div className="mb-6 space-y-3 border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Age Range:</span>
                  <span className="text-text-secondary">1-18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Ideal Team:</span>
                  <span className="text-text-secondary">20-60+ reps</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-text-primary">Starting Price:</span>
                  <span className="text-accent font-semibold">$1.50/lead</span>
                </div>
              </div>
              <Button onClick={scrollToCTA} className="w-full">
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Submissions Deep-Dive */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-headline text-[40px] font-bold text-primary">
                Direct Submissions: The Premier Data File for Elite Teams
              </h2>
              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                This is our premier data file, capturing the direct signal of intent from business owners actively seeking funding. These are not leads from a co-registration form or a generic "business database." This product is 100% composed of raw, verified, direct-from-form submissions. It's designed for elite, high-performance sales teams (1-5 reps) who understand that a higher-quality file converts at a dramatically higher rate. The key to Direct Submissions is the strategic reduction in competition. We do not burn our data by selling the same record to 10 different brokers at the same time. You get a clean, uncontested shot at the deal, allowing your team to build rapport and close, not just race to the lowest price.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Exclusive, never-resold web forms for uncontested speed-to-fund.",
                  "Real-time delivery (<60 seconds) to your CRM, dialer, or Slack.",
                  "Connectivity guarantee with 1:1 replacements for hard-invalids within 7 days.",
                  "AI intent scoring to front-load highest-propensity records to your top reps.",
                  "Personal list suppression to prevent overlap with your existing pipeline.",
                  "Priority routing, geo holds, and pacing control for elite, small teams."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg bg-surface p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Specifications
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">Per-lead, starting at $75/lead (typical $75—$150+ by filters)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Volume</dt>
                    <dd className="text-sm text-text-secondary">25—300/week (100—1,200/month)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Exclusivity</dt>
                    <dd className="text-sm text-text-secondary">Sold once—exclusive to your team. Never resold.</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">Real-time API/webhook, CRM integrations (HubSpot, Salesforce), Zapier, Slack/MS Teams, CSV export</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Best For</dt>
                    <dd className="text-sm text-text-secondary">Elite, small teams (1-5 reps) focused on maximizing conversion rates</dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} variant="outline" className="mt-8 w-full">
                  Request Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alpha Data Deep-Dive */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:order-1">
              <div className="rounded-lg bg-card p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Specifications
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">Per-lead or per-1k package, starting at $12/lead (30-90 days)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Volume</dt>
                    <dd className="text-sm text-text-secondary">500—5,000/week (2,000—20,000/month)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Exclusivity</dt>
                    <dd className="text-sm text-text-secondary">Limited circulation: capped at 1—3 qualified buyers</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">Secure CSV/Excel via portal and email, CRM import packages, SFTP/FTP, Zapier</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Best For</dt>
                    <dd className="text-sm text-text-secondary">Growing, mid-sized teams (5-15 reps) needing reliable, cost-effective warm data</dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} variant="outline" className="mt-8 w-full">
                  Request Pricing
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3 lg:order-2">
              <h2 className="mb-6 font-headline text-[40px] font-bold text-primary">
                Alpha Data: Smart-Aged Leads for Growing Teams
              </h2>
              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                This is our strategic 'smart-aged' file, built for growing teams that need a perfect balance of quality and volume. We leverage our 30+ day old submission data, identifying the 'Alpha' prospects—businesses with a proven history of seeking funds who are now prime targets for follow-up. This isn't just a list of old leads; it's a curated file of prospects who are already educated on the funding process. Alpha Data gives you the power of an interested lead at a price point that allows for consistent, multi-touch outreach.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Smart-aged submissions (30 days—1 year) curated for education and fit—less hand-holding, more conversations.",
                  "Layered triggers (recency of inquiry, UCC events, web activity) to surface active evaluators.",
                  "Guaranteed connectivity and compliance (DNC/TCPA/CAN-SPAM) with litigator scrub.",
                  "Limited distribution (1—3 buyers) to reduce noise without losing scale.",
                  "Flexible delivery (CSV, CRM import, SFTP) and ready-to-dial formatting.",
                  "Volume-based pricing with commit options to stabilize rep calendars."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apex Data Deep-Dive */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-headline text-[40px] font-bold text-primary">
                Apex Data: Maximum Volume for High-Performance Call Centers
              </h2>
              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                The Apex Database is our all-in-one, high-volume solution built to fuel the largest sales floors. It combines our deep archive of aged submissions with powerful trigger data (like UCC filings) to give your team a nearly limitless pool of prospects and a strategic 'reason to call.' This is the most cost-effective data in the industry, period. It's designed for one purpose: to give your sales team the maximum number of dials and email sends possible, ensuring your pipeline is never empty.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Massive, consistent data supply for 20—60+ seat call centers and email teams.",
                  "Aged submissions blended with active triggers (e.g., UCC filings) for better-than-random contact rates at scale.",
                  "Strict compliance: DNC, litigator, CAN-SPAM; personal suppression honored at volume.",
                  "Bulk delivery via SFTP/warehouse connectors; schema-ready for dialers and martech.",
                  "Aggressive volume pricing and subscription options to protect CPA.",
                  "Add-on enablement: pre-score by propensity, segment by SIC/geo/revenue, and turnkey outreach sequences."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg bg-surface p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Specifications
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">Bulk per-1k or per-10k packages, starting at $1.50/lead (1-18 months)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Volume</dt>
                    <dd className="text-sm text-text-secondary">5,000—50,000+/week (20,000—200,000+/month)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Exclusivity</dt>
                    <dd className="text-sm text-text-secondary">Volume-first distribution with responsible caps. Not exclusive, but never mass-dumped</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">Bulk SFTP/FTP and secure portal download, data warehouse connectors (AWS S3, GCS, Azure Blob), CSV/Parquet</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Best For</dt>
                    <dd className="text-sm text-text-secondary">High-volume call centers (20-60+ reps) and email marketers needing massive data supply</dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} variant="outline" className="mt-8 w-full">
                  Request Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Compare Our Products Side-by-Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="sticky left-0 bg-card p-4 text-left font-headline text-lg font-semibold text-primary">
                    Feature
                  </th>
                  <th className="p-4 text-left font-headline text-lg font-semibold text-primary">
                    Direct Submissions
                  </th>
                  <th className="p-4 text-left font-headline text-lg font-semibold text-primary">
                    Alpha Data
                  </th>
                  <th className="p-4 text-left font-headline text-lg font-semibold text-primary">
                    Apex Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Ideal Team Size", ds: "1-5 reps", alpha: "5-15 reps", apex: "20-60+ reps" },
                  { feature: "Age Ranges", ds: "Real-time (<60s)", alpha: "30 days - 1 year", apex: "1-18 months" },
                  { feature: "Starting Cost", ds: "$75/lead", alpha: "$12/lead", apex: "$1.50/lead" },
                  { feature: "Weekly Volume", ds: "25-300", alpha: "500-5,000", apex: "5,000-50,000+" },
                  { feature: "Monthly Volume", ds: "100-1,200", alpha: "2,000-20,000", apex: "20,000-200,000+" },
                  { feature: "Exclusivity", ds: "100% Exclusive", alpha: "1-3 buyers", apex: "Responsible caps" },
                  { feature: "Delivery Speed", ds: "Real-time", alpha: "Batch/Schedule", apex: "Bulk/SFTP" },
                  { feature: "Connectivity Guarantee", ds: "Yes (1:1)", alpha: "Yes", apex: "Yes" },
                  { feature: "Compliance", ds: "Full TCPA/DNC", alpha: "Full TCPA/DNC", apex: "Full TCPA/DNC" },
                  { feature: "List Suppression", ds: "Yes", alpha: "Yes", apex: "Yes (volume)" },
                  { feature: "Add-ons Compatible", ds: "All", alpha: "FundSense, TrustDial", apex: "FundSense, TrustDial" },
                  { feature: "Support Level", ds: "Priority", alpha: "Standard", apex: "Enterprise" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0">
                    <td className="sticky left-0 bg-card p-4 font-semibold text-text-primary">
                      {row.feature}
                    </td>
                    <td className="p-4 text-text-secondary">{row.ds}</td>
                    <td className="p-4 text-text-secondary">{row.alpha}</td>
                    <td className="p-4 text-text-secondary">{row.apex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            How to Choose the Right Product
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-6xl">🎯</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">
                Premium Quality
              </h3>
              <p className="mb-4 text-text-secondary">
                Team Size: 1-5 reps<br />
                Priority: Highest quality<br />
                Budget: Premium tier
              </p>
              <div className="mt-4 rounded-lg bg-accent/10 p-3">
                <span className="font-semibold text-accent">→ Direct Submissions</span>
              </div>
            </div>

            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-6xl">📈</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">
                Balanced Growth
              </h3>
              <p className="mb-4 text-text-secondary">
                Team Size: 5-15 reps<br />
                Priority: Volume + quality<br />
                Budget: Mid-tier
              </p>
              <div className="mt-4 rounded-lg bg-success/10 p-3">
                <span className="font-semibold text-success">→ Alpha Data</span>
              </div>
            </div>

            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-6xl">🚀</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">
                Maximum Scale
              </h3>
              <p className="mb-4 text-text-secondary">
                Team Size: 20+ reps<br />
                Priority: Massive volume<br />
                Budget: Cost per lead critical
              </p>
              <div className="mt-4 rounded-lg bg-primary/10 p-3">
                <span className="font-semibold text-primary">→ Apex Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Trust Anchors Across All Tiers
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🤖", title: "AI Scoring", desc: "Propensity models on every lead" },
              { icon: "🛡️", title: "DNC/Litigator Scrub", desc: "Pre-screened for compliance" },
              { icon: "🚫", title: "Personal List Suppression", desc: "Honor your existing pipeline" },
              { icon: "✅", title: "Connectivity Guarantee", desc: "Replace hard invalids" },
              { icon: "📋", title: "Full Compliance", desc: "TCPA/CTIA/CAN-SPAM adherence" },
              { icon: "💬", title: "Dedicated Support", desc: "Real humans, fast response" }
            ].map((feature, idx) => (
              <div key={idx} className="rounded-lg bg-card p-8 text-center">
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-2 font-headline text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-headline text-[40px] font-bold text-primary">
            Volume Discounts and Commit Pricing
          </h2>
          <p className="font-body text-lg leading-relaxed text-text-secondary">
            The more you commit, the better your economics. We offer volume-based discounts and commit pricing with typical breakpoints at 1,000, 5,000, 10,000, and 25,000+ leads per month. Longer commit periods (6-12 months) unlock additional savings and priority support. Let's build a plan that matches your growth trajectory.
          </p>
        </div>
      </section>

      {/* Data Quality */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-headline text-[40px] font-bold text-primary">
            Data Quality and Compliance You Can Trust
          </h2>
          <p className="font-body text-lg leading-relaxed text-text-secondary">
            Every lead flows through our validation pipeline and identity graph before reaching your team. We verify phone numbers, emails, business details, and cross-reference against DNC registries, litigator databases, and known bad actors. Our TCPA/CTIA/CAN-SPAM practices are documented, auditable, and enforced at scale. You get clean, compliant data that protects your business.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="products-cta" className="bg-primary px-6 py-24 text-primary-foreground lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-headline text-[40px] font-bold">
            Design Your Data Plan. Scale Without Burn.
          </h2>
          <p className="mb-12 text-lg opacity-90">
            Choose your tier, configure your filters, and see your economics instantly. Or talk to our team for custom guidance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Build My Plan
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Talk to Sales
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            Call: 1-800-XXX-XXXX
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
