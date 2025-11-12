import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AddOns = () => {
  useEffect(() => {
    document.title = "AI-Powered MCA Lead Add-Ons - FundSense, StatementSnap, TrustDial | Lead Slaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform leads into winners with AI add-ons. FundSense scoring, StatementSnap underwriting, and TrustDial verification. Close faster, convert more.");
    }
  }, []);

  const scrollToCTA = () => {
    document.getElementById('addons-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="mb-6 text-center font-headline text-[56px] font-bold leading-[1.1] text-primary">
            Turn Every Lead Into a Winner with AI Add‑Ons Built for MCA Pros
          </h1>
          <p className="mx-auto max-w-5xl text-center font-body text-xl leading-relaxed text-text-secondary">
            Lead Slaps add-ons infuse your lead flow with underwriting intelligence, data accuracy, and prioritization—so you close faster with less effort. Layer these AI-powered enhancements onto any qualifying product to reveal hidden potential, validate contact data, and deliver underwriting-ready packages that put you ahead of the competition.
          </p>
        </div>
      </section>

      {/* FundSense */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
                AI Scoring
              </div>
              <h2 className="mb-4 font-headline text-[40px] font-bold text-primary">
                FundSense: AI-Powered Fundability Scoring
              </h2>
              <p className="mb-6 font-body text-xl text-text-secondary">
                Prioritize your pipeline with data-driven fundability scores
              </p>
              
              <div className="mb-8 rounded-lg bg-success/10 p-6">
                <p className="font-semibold text-success">
                  Typical customers see 30-40% higher contact-to-close efficiency and reduced cost per funded deal.
                </p>
              </div>

              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                FundSense is an AI-powered fundability score appended to each lead. It uses omni-channel data to assess a lead's potential and helps you prioritize your outreach. Instead of treating all leads equally, FundSense reveals the hidden gold in your pipeline, allowing you to focus your best reps on the leads most likely to convert.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Actionable scoring: 0—100 score with A—F grades and top drivers so reps know who to call and why.",
                  "Smart routing: Score-based assignment and sequencing to maximize closer time on high-likelihood deals.",
                  "Predictive signals: Incorporates omni-channel data to surface \"hidden gold.\"",
                  "Continuous refresh: Scores update as new data arrives; versioning ensures transparency.",
                  "Measurable lift: Typical customers see higher contact-to-close efficiency and reduced cost per funded deal."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Use Cases
              </h3>
              <ul className="space-y-2">
                {[
                  "Prioritize daily calling lists",
                  "Segment campaigns (phone vs email)",
                  "Post-campaign audit for reactivation"
                ].map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span className="text-text-secondary">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg bg-surface p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Technical Details
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">
                      Per-lead: $1.75—$3.50 (tiered by volume)<br />
                      Subscription: $299—$1,499/month with lead allowance
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">API, dashboard export, CSV append, webhook</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Data Fields</dt>
                    <dd className="text-sm text-text-secondary">
                      fundability_score (0—100), grade (A—F), confidence (0—1), top_signals (list), risk_flags (list)
                    </dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} className="mt-8 w-full">
                  Add to My Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* StatementSnap */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:order-1">
              <div className="rounded-lg bg-card p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Technical Details
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">
                      Per completed package: $59—$119 (depends on doc sources and turnaround; optional Rush +$30)
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">
                      Automated AI pipeline with human-in-the-loop QA. Merchant uses secure link to upload statements or connect bank (Plaid/Yodlee). Output is Pre-Underwriting Summary (PDF + JSON) delivered to dashboard and CRM.
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Compatibility</dt>
                    <dd className="text-sm text-text-secondary">Direct Submissions product only</dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} className="mt-8 w-full">
                  Add to My Order
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Pre-Underwriting
              </div>
              <h2 className="mb-4 font-headline text-[40px] font-bold text-primary">
                StatementSnap: AI-Powered Pre-Underwriting
              </h2>
              <p className="mb-6 font-body text-xl text-text-secondary">
                Transform intake into underwriting-ready packages at lightning speed
              </p>
              
              <div className="mb-8 rounded-lg bg-accent/10 p-6">
                <p className="font-semibold text-accent">
                  Same-day turnaround standard. Rush option: 2-4 hours for hot deals.
                </p>
              </div>

              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                StatementSnap is an AI-powered pre-underwriting service exclusive to our Direct Submissions product. It transforms raw data into underwriting-ready leads at lightning speed, saving you time and effort. It analyzes financial data, extracts key metrics, and delivers a decision-ready summary, allowing your team to move from intake to decisioning in a single step.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Pre-underwriting automation: Extracts and standardizes income, NSFs, days negative, seasonality, and stacking indicators.",
                  "Decision-ready output: PDF + JSON summary aligned to funder expectations.",
                  "Fast turnaround: Same-day standard; optional 2—4 hour rush for hot files.",
                  "Quality control: Human-in-the-loop verification on edge cases; confidence scores on all metrics.",
                  "Seamless delivery: Secure merchant intake, automated CRM/webhook delivery, audit trail for compliance."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Use Cases
              </h3>
              <ul className="space-y-2">
                {[
                  "Speed-to-underwrite for Direct Submissions",
                  "Reduce ops burden by offloading bank statement parsing",
                  "Improve funder acceptance with standardized packages"
                ].map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span className="text-text-secondary">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TrustDial */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-block rounded-full bg-success/10 px-4 py-1 text-sm font-semibold text-success">
                Data Verification
              </div>
              <h2 className="mb-4 font-headline text-[40px] font-bold text-primary">
                TrustDial: Omnichannel Contact Verification
              </h2>
              <p className="mb-6 font-body text-xl text-text-secondary">
                Verify names and contact info across every channel before your first dial
              </p>
              
              <div className="mb-8 rounded-lg bg-success/10 p-6">
                <p className="font-semibold text-success">
                  Boost connect rates by 25-40%. Eliminate wasted spend on bad data.
                </p>
              </div>

              <p className="mb-8 font-body text-lg leading-[1.7] text-text-primary">
                TrustDial is an omnichannel matching service that ensures the accuracy of names and contact information. It verifies and validates contact data across multiple channels, increasing your connection rates and reducing wasted outreach. TrustDial confirms you're talking to the right person, every time.
              </p>
              
              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Omnichannel verification: Phone reachability/line type, email SMTP check, address DPV, and identity match in one pass.",
                  "Connection boost: \"Best channel\" and \"best time window\" recommendations increase live answers.",
                  "Waste reduction: Remove wrong numbers/disposable emails before a single dial or send.",
                  "Compliance-friendly: Flags risky records and line types to support TCPA-safe outreach.",
                  "Scalable modes: Real-time at capture and batch for existing databases with clear pass/fail fields."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-base text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-headline text-2xl font-semibold text-text-primary">
                Use Cases
              </h3>
              <ul className="space-y-2">
                {[
                  "Boost connect rates by verifying phone/email",
                  "Eliminate wasted spend on bad data",
                  "Compliance peace of mind by flagging risky records"
                ].map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span className="text-text-secondary">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg bg-surface p-8">
                <h4 className="mb-6 font-headline text-xl font-semibold text-primary">
                  Technical Details
                </h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Pricing</dt>
                    <dd className="text-sm text-text-secondary">Per-lead: $0.45—$1.10 (tiered by monthly volume and channels verified)</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Delivery</dt>
                    <dd className="text-sm text-text-secondary">Real-time verification at lead creation and batch processing</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Data Fields</dt>
                    <dd className="text-sm text-text-secondary">
                      verified_phone (Y/N), verified_email (Y/N), match_score (0—100), best_channel, reachability_score
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-text-primary">Checks</dt>
                    <dd className="text-sm text-text-secondary">
                      Phone reachability, email SMTP, postal address, business name-to-owner match
                    </dd>
                  </div>
                </dl>
                <Button onClick={scrollToCTA} className="mt-8 w-full">
                  Add to My Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Bundle & Save: Pre-Configured Add-On Packages
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Bundle */}
            <div className="group relative rounded-xl bg-card p-10 shadow-elevation-1 transition-all duration-300 ease-out hover:shadow-elevation-3 hover:-translate-y-1 focus-within:shadow-elevation-3">
              <h3 className="mb-3 font-headline text-2xl font-semibold text-primary">
                Acquisition Optimizer
              </h3>
              <p className="mb-4 text-sm text-text-secondary">Includes: TrustDial + FundSense</p>
              <div className="mb-4 rounded-lg bg-success/10 p-3">
                <p className="text-sm font-semibold text-success">15% off combined per-lead pricing</p>
              </div>
              <p className="mb-4 text-sm text-text-secondary">
                <strong>Best For:</strong> Teams starting to optimize data quality
              </p>
              <p className="mb-6 text-lg font-semibold text-accent">
                $2.20-$4.60/lead
              </p>
              <p className="mb-6 text-xs text-text-muted">(normally $2.60-$5.40)</p>
              <Button onClick={scrollToCTA} variant="outline" className="w-full">
                Select Starter Bundle
              </Button>
            </div>

            {/* Pro Bundle - Highlighted */}
            <div className="group relative rounded-xl bg-card p-10 shadow-elevation-2 ring-2 ring-accent transition-all duration-300 ease-out hover:shadow-elevation-3 hover:-translate-y-1 focus-within:shadow-elevation-3">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h3 className="mb-3 font-headline text-2xl font-semibold text-primary">
                Conversion Accelerator
              </h3>
              <p className="mb-4 text-sm text-text-secondary">
                Includes: TrustDial + FundSense + 10 StatementSnap packages/month credit
              </p>
              <div className="mb-4 rounded-lg bg-accent/10 p-3">
                <p className="text-sm font-semibold text-accent">20% blended savings</p>
              </div>
              <p className="mb-4 text-sm text-text-secondary">
                <strong>Best For:</strong> Growing teams scaling Direct Submissions
              </p>
              <p className="mb-6 text-lg font-semibold text-accent">
                $800-$1,200/month
              </p>
              <p className="mb-6 text-xs text-text-muted">Custom pricing</p>
              <Button onClick={scrollToCTA} className="w-full">
                Select Pro Bundle
              </Button>
            </div>

            {/* Enterprise Bundle */}
            <div className="group relative rounded-xl bg-card p-10 shadow-elevation-1 transition-all duration-300 ease-out hover:shadow-elevation-3 hover:-translate-y-1 focus-within:shadow-elevation-3">
              <h3 className="mb-3 font-headline text-2xl font-semibold text-primary">
                Scale & Underwrite
              </h3>
              <p className="mb-4 text-sm text-text-secondary">
                Includes: Custom volumes with committed minimums
              </p>
              <div className="mb-4 rounded-lg bg-primary/10 p-3">
                <p className="text-sm font-semibold text-primary">Up to 25% off list with 12-month commitment</p>
              </div>
              <p className="mb-4 text-sm text-text-secondary">
                <strong>Best For:</strong> High-volume operations needing full stack
              </p>
              <p className="mb-6 text-lg font-semibold text-accent">
                Custom
              </p>
              <p className="mb-6 text-xs text-text-muted">Request Quote</p>
              <Button onClick={scrollToCTA} variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Matrix */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            How Add-Ons Work with Products
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-surface">
              <thead>
                <tr className="border-b border-border">
                  <th className="sticky left-0 bg-surface p-4 text-left font-headline text-lg font-semibold text-primary">
                    Add-On
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
                <tr className="border-b border-border">
                  <td className="sticky left-0 bg-surface p-4 font-semibold text-text-primary">FundSense</td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="sticky left-0 bg-surface p-4 font-semibold text-text-primary">StatementSnap</td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                  <td className="p-4"><span className="text-text-muted">Not Available</span></td>
                  <td className="p-4"><span className="text-text-muted">Not Available</span></td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-surface p-4 font-semibold text-text-primary">TrustDial</td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                  <td className="p-4"><span className="text-success">✓ Compatible</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-text-secondary">
            StatementSnap is exclusive to Direct Submissions. FundSense and TrustDial work with all product tiers.
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Calculate Your Uplift
          </h2>
          <div className="rounded-lg bg-card p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 font-headline text-xl font-semibold text-primary">Current Performance</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Monthly lead volume:</dt>
                    <dd className="font-semibold text-text-primary">1,000</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Contact rate:</dt>
                    <dd className="font-semibold text-text-primary">30%</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Close rate:</dt>
                    <dd className="font-semibold text-text-primary">8%</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="mb-6 font-headline text-xl font-semibold text-accent">With Add-Ons (Estimated)</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Projected contact rate:</dt>
                    <dd className="font-semibold text-success">42% (+40%)</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Projected close rate:</dt>
                    <dd className="font-semibold text-success">11% (+37%)</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-text-secondary">Additional deals/month:</dt>
                    <dd className="font-semibold text-success">+47 deals</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button onClick={scrollToCTA}>See What You Could Gain</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Seamless Integration with Your Stack
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-5xl">🔌</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">Real-Time API</h3>
              <p className="mb-4 text-text-secondary">
                RESTful API with comprehensive docs, webhooks for instant delivery
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent hover:underline">
                View API Docs →
              </a>
            </div>

            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-5xl">🔗</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">Native CRM Support</h3>
              <p className="mb-4 text-text-secondary">
                Direct integrations with HubSpot, Salesforce, Zoho, Pipedrive
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent hover:underline">
                Browse Integrations →
              </a>
            </div>

            <div className="rounded-lg bg-surface p-8 text-center">
              <div className="mb-4 text-5xl">📦</div>
              <h3 className="mb-3 font-headline text-xl font-semibold text-primary">Batch & Portal</h3>
              <p className="mb-4 text-text-secondary">
                CSV/Excel download, SFTP delivery, secure dashboard access
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-surface px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Real Results from Real Brokers
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-8">
              <p className="mb-6 font-body text-lg italic leading-relaxed text-text-primary">
                "FundSense cut our cost-per-deal by 40%. We're calling the right people at the right time."
              </p>
              <div className="mb-4 rounded-lg bg-success/10 p-4">
                <p className="text-sm font-semibold text-success">40% ↓ Cost per Deal</p>
                <p className="text-sm font-semibold text-success">35% ↑ Close Rate</p>
              </div>
              <p className="text-sm text-text-secondary">— Regional ISO, 12-rep team</p>
            </div>

            <div className="rounded-lg bg-card p-8">
              <p className="mb-6 font-body text-lg italic leading-relaxed text-text-primary">
                "StatementSnap saves us 6 hours per deal. We're underwriting in minutes, not days."
              </p>
              <div className="mb-4 rounded-lg bg-accent/10 p-4">
                <p className="text-sm font-semibold text-accent">6 hours ↓ per deal</p>
                <p className="text-sm font-semibold text-accent">Same-day decisioning</p>
              </div>
              <p className="text-sm text-text-secondary">— Direct Funder, $50M+ annual volume</p>
            </div>

            <div className="rounded-lg bg-card p-8">
              <p className="mb-6 font-body text-lg italic leading-relaxed text-text-primary">
                "TrustDial eliminated 35% of our bad numbers before we dialed. Our reps are happier and more productive."
              </p>
              <div className="mb-4 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">35% ↓ Bad Data</p>
                <p className="text-sm font-semibold text-primary">28% ↑ Connect Rate</p>
              </div>
              <p className="text-sm text-text-secondary">— MCA Broker, 8-person team</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-headline text-[40px] font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How are add-ons priced?",
                a: "Add-ons are priced either per-lead or via monthly subscription based on volume. Per-lead pricing ranges from $0.45 to $3.50 depending on the add-on and monthly volume. Subscriptions start at $299/month and include lead allowances."
              },
              {
                q: "Can I use add-ons with any product tier?",
                a: "FundSense and TrustDial work with all product tiers (Direct Submissions, Alpha Data, and Apex Data). StatementSnap is exclusively available for Direct Submissions customers."
              },
              {
                q: "What's included in the subscription pricing?",
                a: "Subscription pricing includes a monthly lead allowance, priority support, dashboard access, and API/webhook integration. Overage pricing applies if you exceed your monthly allowance."
              },
              {
                q: "How do you ensure data accuracy?",
                a: "We use multi-source verification, human-in-the-loop QA for edge cases, and continuous monitoring. Every data point is cross-referenced and scored for confidence before delivery."
              },
              {
                q: "What are your SLAs and support commitments?",
                a: "Standard customers receive business-hours support with 24-hour response times. Premium and Enterprise customers get priority support with 2-4 hour response times and dedicated account management."
              },
              {
                q: "How does billing work for add-ons?",
                a: "Per-lead add-ons are billed monthly based on usage. Subscriptions are billed monthly in advance. We provide detailed usage reports and invoices via your dashboard."
              },
              {
                q: "Are add-ons TCPA/CTIA compliant?",
                a: "Yes. All add-ons are designed with compliance in mind. TrustDial specifically flags risky records, and all services maintain audit trails for regulatory compliance."
              },
              {
                q: "Can I trial an add-on before committing?",
                a: "Yes. We offer proof-of-concept trials on your own data for qualified prospects. Contact sales to discuss trial options."
              },
              {
                q: "What data sources power FundSense?",
                a: "FundSense uses omni-channel data including credit signals, business registration data, web activity, UCC filings, and proprietary intent signals from our lead network."
              },
              {
                q: "How long does StatementSnap take?",
                a: "Standard turnaround is same-day (within 8 business hours). Rush service delivers in 2-4 hours for an additional fee. Simple cases often process in under an hour."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="rounded-lg bg-surface px-6">
                <AccordionTrigger className="font-headline text-lg font-semibold text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="addons-cta" className="bg-primary px-6 py-24 text-primary-foreground lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-headline text-[40px] font-bold text-primary-foreground">
            Build Your High-Performance Stack
          </h2>
          <p className="mb-12 text-lg text-primary-foreground opacity-90">
            Configure your products and add-ons to see real-time pricing. Or request a custom proof-of-concept on your own data.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Configure My Add‑Ons
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              See It on My Data
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            Questions? Call 1-800-XXX-XXXX
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddOns;
