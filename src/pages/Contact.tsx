import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Request Pricing | Lead Slaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get custom pricing for exclusive MCA leads. Contact Lead Slaps to build your data plan and scale without burn.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-center font-heading text-[56px] font-bold leading-[1.1] text-primary">
            Request Pricing
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center font-body text-xl leading-relaxed text-text-secondary">
            Let's build a custom data plan that matches your team size, volume needs, and growth goals. Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <div className="rounded-lg bg-surface p-12">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Team Size *
                </label>
                <select
                  id="teamSize"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 reps</option>
                  <option value="5-15">5-15 reps</option>
                  <option value="15-30">15-30 reps</option>
                  <option value="30+">30+ reps</option>
                </select>
              </div>

              <div>
                <label htmlFor="products" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Interested Products *
                </label>
                <select
                  id="products"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Select product tier</option>
                  <option value="direct-submissions">Direct Submissions</option>
                  <option value="alpha-data">Alpha Data</option>
                  <option value="apex-data">Apex Data</option>
                  <option value="not-sure">Not Sure / Need Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="volume" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Estimated Monthly Lead Volume
                </label>
                <input
                  type="text"
                  id="volume"
                  placeholder="e.g., 1,000 leads/month"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-body text-sm font-semibold text-text-primary">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your specific needs, compliance requirements, or questions..."
                  className="w-full rounded-md border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Submit Request
              </button>

              <p className="text-center font-body text-sm text-text-muted">
                We typically respond within 24 business hours. For urgent inquiries, call us at 1-800-XXX-XXXX
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
