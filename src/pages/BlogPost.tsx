import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const blogMetadata: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}> = {
  "how-to-qualify-for-merchant-cash-advance": {
    title: "How to Qualify for a Merchant Cash Advance: A Step-by-Step Guide",
    date: "March 3, 2025",
    readTime: "8 min read",
    category: "Qualifying for MCA",
    author: "LeadSlaps Team"
  },
  "pros-and-cons-of-merchant-cash-advances": {
    title: "The Pros and Cons of Merchant Cash Advances: What You Need to Know",
    date: "March 17, 2025",
    readTime: "7 min read",
    category: "Understanding MCA",
    author: "LeadSlaps Team"
  },
  "10-questions-when-buying-mca-leads": {
    title: "10 Questions to Ask When Buying MCA Leads",
    date: "April 7, 2025",
    readTime: "7 min read",
    category: "MCA Lead Generation",
    author: "LeadSlaps Team"
  },
  "ai-revolutionizing-mca-strategies": {
    title: "How AI is Revolutionizing Merchant Cash Advance Strategies",
    date: "April 21, 2025",
    readTime: "9 min read",
    category: "Trends and Innovations",
    author: "LeadSlaps Team"
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const metadata = slug ? blogMetadata[slug] : null;

  useEffect(() => {
    const fetchBlogContent = async () => {
      if (!slug) return;
      
      try {
        const response = await fetch(`/blog-content/${slug}.md`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error loading blog post:", error);
        setContent("# Blog post not found\n\nSorry, we couldn't load this blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogContent();
  }, [slug]);

  if (!metadata) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | Lead Slaps</title>
        </Helmet>
        <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
      <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{metadata.title} | Lead Slaps Blog</title>
        <meta name="description" content={`${metadata.title} - ${metadata.category} article published on ${metadata.date}`} />
        <link rel="canonical" href={`https://leadslaps.com/blog/${slug}`} />
      </Helmet>
      <Navigation />
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Header */}
      <div className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              {metadata.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {metadata.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {metadata.readTime}
            </span>
            <span>By {metadata.author}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors ml-auto"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading article...</p>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-primary mt-6 mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-primary mt-4 mb-2">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-accent hover:underline">
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-primary">{children}</strong>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Buy High-Quality MCA Leads?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get access to exclusive, verified merchant cash advance leads that convert.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Our Lead Packages
            </Link>
          </div>
        </div>
      </article>
    </div>
    <Footer />
    </>
  );
};

export default BlogPost;
