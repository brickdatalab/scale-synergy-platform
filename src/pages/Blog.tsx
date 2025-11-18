import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Qualify for a Merchant Cash Advance: A Step-by-Step Guide",
    slug: "how-to-qualify-for-merchant-cash-advance",
    excerpt: "Learn the essential requirements and steps to successfully qualify for a merchant cash advance. This comprehensive guide covers everything from credit requirements to documentation needed.",
    date: "March 3, 2025",
    readTime: "8 min read",
    category: "Qualifying for MCA",
    image: "/src/assets/hero-data-analytics.png"
  },
  {
    id: 2,
    title: "The Pros and Cons of Merchant Cash Advances: What You Need to Know",
    slug: "pros-and-cons-of-merchant-cash-advances",
    excerpt: "Discover the advantages and disadvantages of merchant cash advances to make informed decisions for your business financing needs.",
    date: "March 17, 2025",
    readTime: "7 min read",
    category: "Understanding MCA",
    image: "/src/assets/dashboard-crm-interface.png"
  },
  {
    id: 3,
    title: "10 Questions to Ask When Buying MCA Leads",
    slug: "10-questions-when-buying-mca-leads",
    excerpt: "Before investing in MCA leads, make sure you're asking the right questions. This guide helps you evaluate lead quality and maximize your ROI.",
    date: "April 7, 2025",
    readTime: "7 min read",
    category: "MCA Lead Generation",
    image: "/src/assets/product-live-transfer.png"
  },
  {
    id: 4,
    title: "How AI is Revolutionizing Merchant Cash Advance Strategies",
    slug: "ai-revolutionizing-mca-strategies",
    excerpt: "Explore how artificial intelligence is transforming the MCA industry, from lead generation to approval processes and beyond.",
    date: "April 21, 2025",
    readTime: "9 min read",
    category: "Trends and Innovations",
    image: "/src/assets/product-fresh-submissions.png"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "MCA Lead Generation Blog | Expert Strategies & Industry Insights | Lead Slaps";
  }, []);

  return (
    <>
      <Helmet>
        <title>MCA Lead Generation Blog | Expert Strategies & Industry Insights | Lead Slaps</title>
        <meta name="description" content="Learn proven merchant cash advance lead generation strategies, sales best practices, and industry trends from the Lead Slaps blog." />
        <link rel="canonical" href="https://leadslaps.com/blog" />
      </Helmet>
      <Navigation />
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              MCA Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance on merchant cash advances, lead generation strategies, and industry trends to help you grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Buy High-Quality MCA Leads?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get access to exclusive, verified merchant cash advance leads that convert.
          </p>
          <Link
            to="/products"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Our Lead Packages
          </Link>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Blog;
