import React, { useEffect, useMemo, useState } from "react";

type ProductKey = "direct_submissions" | "alpha_data" | "pulse_data";
type InventoryStatus = "healthy" | "tight" | "waitlist";

interface InventorySegment {
  id: string;
  productKey: ProductKey;
  productLabel: string;
  ageBandKey: string; // e.g. "lt_15", "15_30", "30_90", etc.
  ageBandLabel: string; // e.g. "< 15 days"
  priceCents: number; // per record
  availableQuantity: number;
  maxQuantity: number;
  status?: InventoryStatus;
  squareVariationId?: string | null;
}

/** JSON-LD injector that attaches scripts into <head>, not the body */
const JsonLd: React.FC<{ data: unknown }> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

const PRODUCT_ORDER: ProductKey[] = [
  "direct_submissions",
  "alpha_data",
  "pulse_data",
];

const formatCurrency = (cents: number) =>
  `$${(cents / 100).toFixed(2).replace(/\.00$/, "")}`;

const computeStatus = (segment: InventorySegment): InventoryStatus => {
  if (segment.availableQuantity <= 0) return "waitlist";
  if (!segment.maxQuantity || segment.maxQuantity <= 0) return "healthy";

  const ratio = segment.availableQuantity / segment.maxQuantity;
  if (ratio <= 0.2) return "tight";
  return "healthy";
};

const statusLabel: Record<InventoryStatus, string> = {
  healthy: "Healthy",
  tight: "Tight",
  waitlist: "Waitlist",
};

const statusDescription: Record<InventoryStatus, string> = {
  healthy: "Plenty of capacity for new orders.",
  tight: "Limited capacity remaining. Lock in volume soon.",
  waitlist: "Temporarily fully allocated. Join the waitlist.",
};

const statusPillClass: Record<InventoryStatus, string> = {
  healthy:
    "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40",
  tight: "bg-amber-500/10 text-amber-300 border border-amber-500/40",
  waitlist: "bg-rose-500/10 text-rose-300 border border-rose-500/40",
};

const statusBarClass: Record<InventoryStatus, string> = {
  healthy: "bg-emerald-400",
  tight: "bg-amber-400",
  waitlist: "bg-rose-400",
};

/** Config for schema offers (name/sku/price per band) */
const OFFER_CONFIGS = [
  {
    productKey: "direct_submissions" as ProductKey,
    ageBandKey: "lt_15",
    sku: "direct-submissions-lt-15",
    name: "Direct Submissions < 15 days",
    price: 7.0,
  },
  {
    productKey: "direct_submissions" as ProductKey,
    ageBandKey: "15_30",
    sku: "direct-submissions-15-30",
    name: "Direct Submissions 15–30 days",
    price: 4.0,
  },
  {
    productKey: "alpha_data" as ProductKey,
    ageBandKey: "30_90",
    sku: "alpha-data-30-90",
    name: "Alpha Data 30–90 days",
    price: 1.0,
  },
  {
    productKey: "alpha_data" as ProductKey,
    ageBandKey: "90_180",
    sku: "alpha-data-90-180",
    name: "Alpha Data 90–180 days",
    price: 0.75,
  },
  {
    productKey: "pulse_data" as ProductKey,
    ageBandKey: "180_365",
    sku: "pulse-data-180-365",
    name: "Pulse Data 180–365 days",
    price: 0.5,
  },
  {
    productKey: "pulse_data" as ProductKey,
    ageBandKey: "1_2y",
    sku: "pulse-data-1-2-years",
    name: "Pulse Data 1–2 years",
    price: 0.25,
  },
];

const ProductsPage: React.FC = () => {
  const [segments, setSegments] = useState<InventorySegment[]>([]);
  const [inventoryLoading, setInventoryLoading] = useState<boolean>(true);
  const [inventoryError, setInventoryError] = useState<string | null>(null);
  const [lastInventoryUpdated, setLastInventoryUpdated] =
    useState<Date | null>(null);

  const [selectedProduct, setSelectedProduct] =
    useState<ProductKey>("direct_submissions");
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(1000);
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  // --- Inventory fetch with polling (true "live" dashboard) ---
  useEffect(() => {
    let cancelled = false;

    const fetchInventory = async () => {
      try {
        setInventoryError(null);

        const res = await fetch("/api/inventory");
        if (!res.ok) {
          throw new Error("Failed to load live inventory.");
        }

        const data = (await res.json()) as { segments: InventorySegment[] };

        if (cancelled) return;

        const normalized = data.segments.map((s) => ({
          ...s,
          status: s.status ?? computeStatus(s),
        }));

        normalized.sort((a, b) => {
          const pDiff =
            PRODUCT_ORDER.indexOf(a.productKey) -
            PRODUCT_ORDER.indexOf(b.productKey);
          if (pDiff !== 0) return pDiff;
          return a.ageBandLabel.localeCompare(b.ageBandLabel);
        });

        setSegments(normalized);
        setLastInventoryUpdated(new Date());

        if (!selectedSegmentId && normalized.length > 0) {
          setSelectedProduct(normalized[0].productKey);
          setSelectedSegmentId(normalized[0].id);
          setQuantity(
            Math.min(1000, Math.max(100, normalized[0].availableQuantity))
          );
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Error loading inventory", err);
          setInventoryError(
            "Live availability is temporarily unavailable. Pricing will still be confirmed at checkout."
          );
        }
      } finally {
        if (!cancelled) {
          setInventoryLoading(false);
        }
      }
    };

    fetchInventory();
    const interval = setInterval(fetchInventory, 60000); // 60s polling

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [selectedSegmentId]);

  const segmentsByProduct = useMemo(() => {
    const grouped: Record<ProductKey, InventorySegment[]> = {
      direct_submissions: [],
      alpha_data: [],
      pulse_data: [],
    };
    for (const seg of segments) {
      grouped[seg.productKey].push(seg);
    }
    return grouped;
  }, [segments]);

  const activeSegments = segmentsByProduct[selectedProduct] || [];

  useEffect(() => {
    if (activeSegments.length === 0) {
      setSelectedSegmentId(null);
      return;
    }
    const stillValid = activeSegments.some((s) => s.id === selectedSegmentId);
    if (!stillValid) {
      setSelectedSegmentId(activeSegments[0].id);
      setQuantity(
        Math.min(1000, Math.max(100, activeSegments[0].availableQuantity))
      );
    }
  }, [selectedProduct, activeSegments, selectedSegmentId]);

  const selectedSegment =
    segments.find((s) => s.id === selectedSegmentId) || null;

  const maxQuantity = selectedSegment?.availableQuantity ?? 0;
  const pricePerRecord =
    selectedSegment && selectedSegment.priceCents
      ? selectedSegment.priceCents / 100
      : 0;
  const estimatedTotal = quantity * pricePerRecord;

  // Clamp quantity if inventory changes underneath us (live updates)
  useEffect(() => {
    if (!selectedSegment) return;
    if (quantity > selectedSegment.availableQuantity) {
      setQuantity(selectedSegment.availableQuantity);
    }
  }, [selectedSegment, quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    const parsed = raw ? parseInt(raw, 10) : 0;
    if (!selectedSegment) {
      setQuantity(parsed);
      return;
    }
    const clamped = Math.max(
      0,
      Math.min(parsed, selectedSegment.availableQuantity)
    );
    setQuantity(clamped);
    setCheckoutError(null);
  };

  const handleSelectProduct = (product: ProductKey) => {
    setSelectedProduct(product);
    setCheckoutError(null);
  };

  const handleSelectSegment = (segmentId: string) => {
    const seg = segments.find((s) => s.id === segmentId);
    setSelectedSegmentId(segmentId);
    if (seg) {
      setQuantity(
        Math.min(
          Math.max(quantity || 0, 0),
          Math.max(0, seg.availableQuantity)
        )
      );
    }
    setCheckoutError(null);
  };

  const scrollToConfigurator = () => {
    const el = document.getElementById("order-configurator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleRowClick = (segment: InventorySegment) => {
    setSelectedProduct(segment.productKey);
    setSelectedSegmentId(segment.id);
    setCheckoutError(null);
    scrollToConfigurator();
  };

  const handleCheckout = async () => {
    if (!selectedSegment) {
      setCheckoutError("Select a product and age band before checkout.");
      return;
    }
    if (!quantity || quantity <= 0) {
      setCheckoutError("Enter a quantity greater than zero.");
      return;
    }
    if (quantity > selectedSegment.availableQuantity) {
      setCheckoutError(
        "Requested quantity exceeds live availability for this segment."
      );
      return;
    }

    try {
      setCheckoutLoading(true);
      setCheckoutError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inventorySegmentId: selectedSegment.id,
          quantity,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Checkout failed. Try again.");
      }

      const { checkoutUrl } = (await res.json()) as { checkoutUrl: string };
      if (!checkoutUrl) {
        throw new Error("Checkout URL missing from response.");
      }

      window.location.href = checkoutUrl;
    } catch (err: any) {
      setCheckoutError(err?.message || "Unexpected error during checkout.");
    } finally {
      setCheckoutLoading(false);
    }
  };

  // --- FAQ content + schema text ---
  const faqs = useMemo(
    () => [
      {
        question: "Do MCA leads really work?",
        answerText:
          "Yes—when they are verified, compliant, and matched to a team with a clear follow-up plan. Most horror stories come from recycled lists and vendors that oversell the same data.",
        schemaAnswer:
          "Yes. MCA leads work when they come from verified, capped, and compliant data sources and are worked by a disciplined sales process. They fail when the list is recycled, oversold, or non-compliant.",
      },
      {
        question: "How are your MCA leads verified?",
        answerText:
          "Our leads go through a four-step process: high-intent sourcing, automated data hygiene, optional live-agent checks for some tiers, and a compliance review focused on TCPA and 1:1 consent.",
        schemaAnswer:
          "We verify MCA leads through high-intent sourcing, automated phone and email hygiene, suppression against DNC and litigators, optional live-agent checks for premium tiers, and a compliance review focused on TCPA and 1:1 consent.",
      },
      {
        question:
          "What is the difference between Direct Submissions, Alpha Data, and Pulse Data?",
        answerText:
          "Direct Submissions are under 30 days old and priced as premium records. Alpha Data covers 30–180 days and balances recency with cost. Pulse Data covers 180 days to two years and is priced for large-volume campaigns.",
        schemaAnswer:
          "Direct Submissions are real-time and near-real-time MCA submissions under 30 days old. Alpha Data covers 30–180 days and balances recency with cost. Pulse Data spans 180 days to two years and is priced for large-volume campaigns.",
      },
      {
        question: "Can I filter MCA leads by state, industry, or other criteria?",
        answerText:
          "In most cases, yes. Geography, industry, and other MCA fit variables can be applied at the file level. For complex or lender-specific guidelines, we recommend speaking with a data strategist to scope the file before checkout.",
        schemaAnswer:
          "Yes. Most MCA lead orders can be filtered by geography, industry, and common MCA fit variables. For lender-specific rules or niche targeting, we recommend a consultative setup before you complete checkout.",
      },
    ],
    []
  );

  // --- Schema: dynamic Product based on inventory availability ---
  const productSchema = useMemo(() => {
    const offers = OFFER_CONFIGS.map((config) => {
      const match = segments.find(
        (s) =>
          s.productKey === config.productKey &&
          s.ageBandKey === config.ageBandKey
      );
      const availability =
        match && match.availableQuantity > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock";

      return {
        "@type": "Offer",
        name: config.name,
        sku: config.sku,
        price: config.price.toFixed(2),
        priceCurrency: "USD",
        availability,
        url: "https://leadslaps.com/products",
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Verified Merchant Cash Advance Leads",
      image: "https://leadslaps.com/og-image.jpg",
      description:
        "High-quality, verified merchant cash advance leads for brokers, ISOs, and funders. Choose from Direct Submissions, Alpha Data, or Pulse Data with transparent per-record pricing and capped availability.",
      brand: {
        "@type": "Brand",
        name: "Lead Slaps",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "137",
      },
      offers,
    };
  }, [segments]);

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.schemaAnswer,
        },
      })),
    }),
    [faqs]
  );

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
          {/* Hero */}
          <section className="mb-12 lg:mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Buy Verified Merchant Cash Advance Leads That Convert
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Stop wasting budget on recycled MCA data and oversold
                  “full packs.” Lead Slaps gives you a clean, tiered pipeline of
                  Direct Submissions, Alpha Data, and Pulse Data—each verified,
                  age-banded, and capped so you know exactly what you&apos;re
                  buying.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Page last updated: November 2025
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-300"
                  onClick={scrollToConfigurator}
                >
                  Start order
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Talk to a data strategist
                </button>
              </div>

              {/* Trust bar */}
              <div className="mt-4 grid gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                    ✓
                  </span>
                  <span>TCPA &amp; 1:1 consent-aligned sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-xs text-sky-400">
                    ✓
                  </span>
                  <span>Data hygiene pipeline &amp; 97%+ deliverability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50/10 text-xs text-slate-100">
                    ✓
                  </span>
                  <span>Encrypted, PCI-compliant checkout via Square</span>
                </div>
              </div>
            </div>
          </section>

          {/* Definition / pain */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What Are MCA Leads (And Why Most Providers Fail You?)
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                <strong>
                  Merchant Cash Advance (MCA) leads are businesses that have
                  expressed interest in receiving an advance on future revenue
                  in exchange for fast, flexible funding.
                </strong>{" "}
                For brokers, ISOs, and direct funders, this data is the fuel for
                every deal. The problem is not the idea of buying MCA leads—it’s
                the way most providers generate and sell them.
              </p>
              <p>
                Many vendors blend scraped lists, generic business records, and
                old submissions into one “full pack” and resell it to as many
                buyers as they can. Reps end up dialing disconnected numbers,
                hostile business owners, or merchants who never requested
                funding in the first place.
              </p>
              <p>
                Lead Slaps is built around a single, clean pipeline with clear
                age bands, per-record pricing, and hard caps. You see the real
                product you&apos;re buying instead of a mystery CSV.
              </p>
            </div>
          </section>

          {/* Product tiers */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Three MCA Data Tiers. One Clean Pipeline.
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              Every merchant starts as a Direct Submission and ages into Alpha
              Data, then Pulse Data. Each record lives in exactly one band at a
              time, so you never pay fresh prices for aged data or buy the same
              record twice.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Direct Submissions */}
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-emerald-300">
                  Premium tier
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  Direct Submissions
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Real-time and near-real-time submissions for teams that win on
                  speed-to-contact and tight follow-up.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• &lt; 15 days – $7.00 / record</li>
                  <li>• 15–30 days – $4.00 / record</li>
                  <li>• Strict caps to avoid over-sold lists</li>
                </ul>
                <button
                  type="button"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
                  onClick={() => {
                    handleSelectProduct("direct_submissions");
                    scrollToConfigurator();
                  }}
                >
                  Start order – Direct Submissions
                </button>
              </article>

              {/* Alpha Data */}
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-sky-300">
                  Growth tier
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  Alpha Data
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Smart-aged submissions from the last 6 months, ideal for
                  blending phone, SMS, and email into one pipeline.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• 30–90 days – $1.00 / record</li>
                  <li>• 90–180 days – $0.75 / record</li>
                  <li>• Built for sustainable, predictable volume</li>
                </ul>
                <button
                  type="button"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-sky-400"
                  onClick={() => {
                    handleSelectProduct("alpha_data");
                    scrollToConfigurator();
                  }}
                >
                  Start order – Alpha Data
                </button>
              </article>

              {/* Pulse Data */}
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-fuchsia-300">
                  Scale tier
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  Pulse Data
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  6–24 month MCA data priced for high-volume dialing, SMS
                  reactivation, and long-tail email campaigns.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• 180–365 days – $0.50 / record</li>
                  <li>• 1–2 years – $0.25 / record</li>
                  <li>• Optimized for big floors and nurture programs</li>
                </ul>
                <button
                  type="button"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-fuchsia-400"
                  onClick={() => {
                    handleSelectProduct("pulse_data");
                    scrollToConfigurator();
                  }}
                >
                  Start order – Pulse Data
                </button>
              </article>
            </div>
          </section>

          {/* Pricing + Live Availability Dashboard */}
          <section
            id="pricing-dashboard"
            className="mb-12 border-t border-slate-800 pt-10"
          >
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Pricing and Live Availability Dashboard
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              Pricing is per record. The table below combines per-band pricing
              with live availability so you can see what&apos;s on the shelf
              before you start an order.
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Live inventory last refreshed:{" "}
              {lastInventoryUpdated
                ? lastInventoryUpdated.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })
                : "just now"}
            </p>

            {inventoryLoading && (
              <p className="mt-3 text-sm text-slate-400">
                Loading live inventory…
              </p>
            )}
            {inventoryError && (
              <p className="mt-3 text-sm text-amber-300">{inventoryError}</p>
            )}

            {!inventoryLoading && !inventoryError && segments.length > 0 && (
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
                <table className="min-w-full border-collapse text-left text-xs text-slate-200 sm:text-sm">
                  <caption className="sr-only">
                    Pricing and live availability for MCA lead segments
                  </caption>
                  <thead className="bg-slate-900">
                    <tr>
                      <th className="px-4 py-3 font-medium">Product</th>
                      <th className="px-4 py-3 font-medium">Age band</th>
                      <th className="px-4 py-3 font-medium">Price / record</th>
                      <th className="px-4 py-3 font-medium">Available now</th>
                      <th className="px-4 py-3 font-medium">Max cap</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {segments.map((segment) => {
                      const status = segment.status || computeStatus(segment);
                      const max =
                        segment.maxQuantity > 0
                          ? segment.maxQuantity
                          : segment.availableQuantity;
                      const remainingRatio =
                        max > 0 ? segment.availableQuantity / max : 1;
                      const barWidth = `${Math.max(
                        0,
                        Math.min(100, remainingRatio * 100)
                      ).toFixed(0)}%`;

                      return (
                        <tr
                          key={segment.id}
                          className="cursor-pointer border-t border-slate-800/60 align-top transition hover:bg-slate-900/60"
                          role="button"
                          tabIndex={0}
                          onClick={() => handleRowClick(segment)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleRowClick(segment);
                            }
                          }}
                        >
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-50">
                              {segment.productLabel}
                            </div>
                          </td>
                          <td className="px-4 py-3">{segment.ageBandLabel}</td>
                          <td className="px-4 py-3">
                            {formatCurrency(segment.priceCents)}
                            <span className="text-[11px] text-slate-400">
                              {" "}
                              / record
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {segment.availableQuantity.toLocaleString()} records
                          </td>
                          <td className="px-4 py-3">
                            {max.toLocaleString()}
                          </td>
                          <td className="px-4 py-3">
                            <div className="availability-status">
                              <span
                                className={
                                  "status-pill inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium " +
                                  statusPillClass[status]
                                }
                              >
                                {statusLabel[status]}
                              </span>
                              <div className="mt-2 h-1.5 w-32 rounded-full bg-slate-800">
                                <div
                                  className={
                                    "status-bar__fill h-1.5 rounded-full transition-all " +
                                    statusBarClass[status]
                                  }
                                  style={{ width: barWidth }}
                                />
                              </div>
                              <span className="mt-1 block text-[11px] text-slate-400">
                                {statusDescription[status]}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="mt-2 px-4 pb-4 text-[11px] text-slate-400">
                  Live counts update as orders are processed. We validate
                  availability once more in the checkout flow before locking in
                  your allocation.
                </p>
              </div>
            )}
          </section>

          {/* Order Configurator */}
          <section
            className="products-section products-configurator mb-12 border-t border-slate-800 pt-10"
            id="order-configurator"
          >
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Configure Your File and Start Your Order
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              Build your order in three steps: choose a product, choose an age
              band, and set your quantity. We cap your request at live
              availability and hand off to a secure Square checkout.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1.25fr]">
              {/* Left side: multi-step wizard */}
              <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                {/* Step 1 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Step 1 · Choose product
                  </p>
                  <div
                    className="mt-3 grid gap-2 sm:grid-cols-3"
                    role="radiogroup"
                    aria-label="Select MCA data product"
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selectedProduct === "direct_submissions"}
                      className={`flex flex-col rounded-xl border px-3 py-2 text-left text-xs transition ${
                        selectedProduct === "direct_submissions"
                          ? "border-sky-400 bg-sky-400/10 text-slate-50"
                          : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
                      }`}
                      onClick={() => handleSelectProduct("direct_submissions")}
                    >
                      <span className="font-medium">Direct Submissions</span>
                      <span className="mt-1 text-[11px] text-slate-400">
                        Premium, real-time submissions
                      </span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selectedProduct === "alpha_data"}
                      className={`flex flex-col rounded-xl border px-3 py-2 text-left text-xs transition ${
                        selectedProduct === "alpha_data"
                          ? "border-sky-400 bg-sky-400/10 text-slate-50"
                          : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
                      }`}
                      onClick={() => handleSelectProduct("alpha_data")}
                    >
                      <span className="font-medium">Alpha Data</span>
                      <span className="mt-1 text-[11px] text-slate-400">
                        Smart-aged submissions at scale
                      </span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selectedProduct === "pulse_data"}
                      className={`flex flex-col rounded-xl border px-3 py-2 text-left text-xs transition ${
                        selectedProduct === "pulse_data"
                          ? "border-sky-400 bg-sky-400/10 text-slate-50"
                          : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
                      }`}
                      onClick={() => handleSelectProduct("pulse_data")}
                    >
                      <span className="font-medium">Pulse Data</span>
                      <span className="mt-1 text-[11px] text-slate-400">
                        Deep archive &amp; triggers for big floors
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Each stream has two non-overlapping age bands so you always
                    know how fresh your file is.
                  </p>
                </div>

                {/* Step 2 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Step 2 · Choose age band &amp; quantity
                  </p>

                  {activeSegments.length === 0 && (
                    <p className="mt-2 text-xs text-slate-500">
                      No active segments for this product. Try another tier or
                      check back as new volume is added.
                    </p>
                  )}

                  {activeSegments.length > 0 && (
                    <>
                      <div
                        className="mt-3 flex flex-wrap gap-2"
                        role="radiogroup"
                        aria-label="Select age band"
                      >
                        {activeSegments.map((segment) => {
                          const active = segment.id === selectedSegmentId;
                          return (
                            <button
                              key={segment.id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              className={`rounded-full border px-3 py-1.5 text-xs transition sm:text-sm ${
                                active
                                  ? "border-sky-400 bg-sky-400/10 text-sky-100"
                                  : "border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500"
                              }`}
                              onClick={() => handleSelectSegment(segment.id)}
                            >
                              <span>{segment.ageBandLabel}</span>
                              <span className="ml-2 text-[11px] text-slate-400">
                                {formatCurrency(segment.priceCents)} / record ·{" "}
                                {segment.availableQuantity.toLocaleString()}{" "}
                                available
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <label className="mt-4 block text-xs font-medium text-slate-300">
                        Quantity (records)
                        <input
                          type="number"
                          min={0}
                          max={maxQuantity || undefined}
                          value={quantity || ""}
                          onChange={handleQuantityChange}
                          inputMode="numeric"
                          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                          placeholder="Enter number of records"
                        />
                        {selectedSegment && (
                          <span className="mt-1 block text-[11px] text-slate-400">
                            Max available today for this band:{" "}
                            {maxQuantity.toLocaleString()} records.
                          </span>
                        )}
                      </label>
                    </>
                  )}
                </div>

                {/* Step 3 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Step 3 · Review &amp; proceed to checkout
                  </p>
                  {checkoutError && (
                    <p className="mt-2 rounded-lg border border-rose-500/60 bg-rose-950/40 px-3 py-2 text-xs text-rose-100">
                      {checkoutError}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2 text-xs font-medium text-slate-950 shadow-sm transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
                      onClick={handleCheckout}
                      disabled={checkoutLoading || !selectedSegment || !quantity}
                    >
                      {checkoutLoading
                        ? "Creating checkout…"
                        : "Proceed to checkout"}
                    </button>
                    <p className="text-xs text-slate-400">
                      You&apos;ll confirm details and complete payment on a
                      secure checkout powered by Square.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side: summary */}
              <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Order summary
                </p>
                <div className="space-y-1 text-sm text-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product</span>
                    <span>
                      {selectedSegment
                        ? selectedSegment.productLabel
                        : "Select a product"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Age band</span>
                    <span>
                      {selectedSegment
                        ? selectedSegment.ageBandLabel
                        : "Select an age band"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Price / record</span>
                    <span>
                      {pricePerRecord
                        ? `$${pricePerRecord.toFixed(2)}`
                        : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Quantity</span>
                    <span>
                      {quantity ? quantity.toLocaleString() : "Not set yet"}
                    </span>
                  </div>
                </div>
                <div className="mt-2 border-t border-slate-800 pt-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wide text-slate-400">
                      Estimated total
                    </span>
                    <span className="text-lg font-semibold text-slate-50">
                      {estimatedTotal
                        ? `$${estimatedTotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : "—"}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Final totals and taxes (if applicable) will be confirmed on
                    the checkout screen.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          {/* Verification */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Our 4-Step Verification Process: How We Guarantee Quality
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              <strong>
                High-performing MCA campaigns start with verified data, not just
                more data.
              </strong>{" "}
              We combine sourcing, hygiene, human checks, and compliance so your
              team spends time on real opportunities—not bad lists.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <strong>Step 1 – High-intent data sourcing.</strong> We focus on
                channels where business owners explicitly request funding—
                direct web forms, inbound funnels, and vetted partners—not
                scraped directories.
              </li>
              <li>
                <strong>Step 2 – Automated data hygiene.</strong> Every record
                passes phone, email, and field validation. We standardize
                formats, dedupe against your suppression lists, and remove
                obvious bad entries before they ever hit your file.
              </li>
              <li>
                <strong>
                  Step 3 – Live-agent intent verification (for applicable
                  tiers).
                </strong>{" "}
                For higher-value bands, live agents confirm that the business is
                reachable, still evaluating funding, and generally aligned with
                MCA fit.
              </li>
              <li>
                <strong>Step 4 – Compliance &amp; 1:1 consent.</strong> Our
                process is designed around TCPA and emerging 1:1 consent
                standards, with auditable consent and clear disclosure language
                baked in.
              </li>
            </ol>
          </section>

          {/* ROI */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              The Clear ROI: What to Expect from Our Data
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              <strong>
                Properly worked MCA data consistently outperforms cheap,
                recycled lists—aged segments can convert in the low double
                digits, while fresh streams often yield 2–3× more funded deals
                per dollar spent than generic “full packs.”
              </strong>{" "}
              Your exact results depend on scripting, follow-up, and
              underwriting, but high-quality data removes the ceiling imposed by
              bad lists.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">
                Illustrative outcome
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Simplified example based on real-world campaigns.
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  • A mid-sized ISO blends Direct, Alpha, and Pulse streams to
                  match rep skill and cadence.
                </li>
                <li>
                  • Higher-CPR Direct Submissions go to closers; Alpha supports
                  pipeline; Pulse feeds dialers and email.
                </li>
                <li>
                  • Over 90 days, they reduce cost per funded deal by focusing
                  effort on the highest-yield bands and using Pulse to keep
                  floors productive.
                </li>
              </ul>
            </div>
          </section>

          {/* Full pack warning */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              A Warning for Brokers: Avoiding &quot;Full Pack&quot; Scams
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              <strong>
                “Full pack” lists bundle random data sources, hide age and
                sourcing, and are usually sold to as many buyers as possible.
              </strong>{" "}
              They feel cheap upfront and expensive once your team touches them.
              We designed Lead Slaps as the opposite model.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                • <span className="font-medium">Defined products.</span> Direct,
                Alpha, and Pulse are each clearly described, including age
                bands, pricing, and caps.
              </li>
              <li>
                • <span className="font-medium">Enforced capacity.</span> Each
                segment has a hard cap with live availability—when it sells out,
                it closes.
              </li>
              <li>
                • <span className="font-medium">Compliance-first.</span> We
                focus on TCPA and 1:1 consent rather than dumping scraped data
                into your dialer.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-12 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Frequently Asked Questions About MCA Leads
            </h2>
            <dl className="mt-4 space-y-6">
              {faqs.map((faq) => {
                const firstPeriodIndex = faq.answerText.indexOf(".");
                const boldPart =
                  firstPeriodIndex === -1
                    ? faq.answerText
                    : faq.answerText.slice(0, firstPeriodIndex + 1);
                const restPart =
                  firstPeriodIndex === -1
                    ? ""
                    : faq.answerText.slice(firstPeriodIndex + 1).trim();

                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                  >
                    <dt className="text-sm font-semibold text-slate-50">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-sm text-slate-300">
                      <strong>{boldPart}</strong>{" "}
                      {restPart}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>

          {/* Final CTA */}
          <section className="mb-4 border-t border-slate-800 pt-10">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 px-6 py-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
                Design Your Data Plan. Scale Without Burn.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Pick your stream, age bands, and volume, then lock in allocation
                before the best segments sell out. Or bring us your current
                funnel and we&apos;ll help you design a file that fits the way
                your team actually sells.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-300"
                  onClick={scrollToConfigurator}
                >
                  Start order
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                  onClick={() => {
                    window.location.href = "mailto:sales@leadslaps.com";
                  }}
                >
                  Talk to sales
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* JSON-LD injected into <head> */}
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
};

export default ProductsPage;
