import { useEffect } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Where can I buy MCA leads?",
      answer:
        "You can buy MCA leads from Lead Slaps, a premium merchant cash advance lead provider. We offer live transfer MCA leads, real-time fresh submissions, and aged MCA leads. All leads are TCPA-compliant, verified for consent, and delivered directly to your CRM in real-time via API, webhook, or email.",
    },
    {
      question: "What are exclusive MCA leads?",
      answer:
        "Exclusive MCA leads are merchant cash advance leads that are sold to only one buyer. This means you are the only broker receiving that specific lead at that time, giving you an uncontested opportunity to connect with the merchant and close the deal without competition from other brokers.",
    },
    {
      question: "How much do MCA leads cost in 2025?",
      answer:
        "MCA lead pricing varies by type and quality. Live transfer MCA leads typically range from $75-$150 per transfer. Fresh exclusive submissions range from $40-$80 per lead. Shared real-time leads cost $15-$30 per lead. Aged MCA leads are the most affordable at $5-$15 per lead. Contact us for current pricing and volume discounts.",
    },
    {
      question: "What is the difference between aged and fresh MCA leads?",
      answer:
        "Fresh MCA leads are brand-new submissions from business owners actively seeking funding right now, typically delivered in under 60 seconds. They have higher intent and convert faster but cost more. Aged MCA leads are older inquiries (30-180 days old) from businesses that previously expressed interest in funding. They cost significantly less and can be highly effective for teams with consistent multi-touch follow-up campaigns.",
    },
    {
      question: "How do live transfer MCA leads work?",
      answer:
        "An MCA live transfer is a pre-qualified, interested merchant who is transferred directly to your sales team in a live phone call. Our team handles the initial contact and qualification. When the merchant expresses interest and meets your criteria, we connect them to your closer instantly via a warm transfer, allowing your team to focus on closing instead of cold calling.",
    },
    {
      question: "Are your MCA leads TCPA compliant?",
      answer:
        "Yes. We take compliance very seriously. All of our leads are generated from sources where clear consent has been given. We verify consent at the source, scrub every lead against national DNC lists and known litigator databases before delivery, and provide full audit trails including timestamps, IP addresses, and opt-in copy for your records.",
    },
    {
      question: "How fast are leads delivered to my CRM?",
      answer:
        "For our fresh submission and live transfer products, leads are delivered in real-time, typically in under 60 seconds. We use webhooks and direct API integrations to ensure instant delivery to your CRM or dialer. We support Salesforce, HubSpot, Zoho, Zapier, and custom integrations.",
    },
    {
      question: "What makes a good merchant cash advance lead?",
      answer:
        "A good MCA lead has verified consent, accurate contact information, monthly revenue of at least $10,000, time in business of 6+ months, and genuine funding need. The best leads also include enriched data like bank statement verification, credit score ranges, and industry type. Lead Slaps provides AI scoring to help you prioritize the most fundable prospects.",
    },
    {
      question: "Are exclusive MCA leads worth the price?",
      answer:
        "Yes, for most teams. Exclusive MCA leads cost 2-3x more than shared leads, but they convert at 3-5x higher rates because you're not competing with 10-20 other brokers. The merchant hasn't been burned out by multiple calls, and you have a clean shot at building rapport and closing the deal. The higher conversion rate typically results in better ROI despite the higher upfront cost.",
    },
    {
      question: "Can I get MCA leads with specific revenue and FICO filters?",
      answer:
        "Yes. Lead Slaps offers customizable lead filters including minimum monthly revenue, time in business, credit score ranges, industry type, geographic location, and funding amount requested. You can configure your filters to ensure you only receive leads that match your underwriting criteria, reducing wasted time on unqualified prospects.",
    },
  ];

  useEffect(() => {
    // Add FAQPage schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="bg-background px-6 py-24 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary md:text-[40px]">
            MCA Leads FAQ
          </h2>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Common questions about buying merchant cash advance leads
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-surface p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-4 font-heading text-xl font-semibold text-text-primary">
                {faq.question}
              </h3>
              <p className="font-body text-base leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
