import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
  description:
    "Expert articles on physiotherapy, Ayurvedic treatment, back pain relief, and home healthcare in Coimbatore and Theni. Written by certified therapists at Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog",
  },
  openGraph: {
    title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
    description:
      "Expert articles on physiotherapy, Ayurveda, and home healthcare in Coimbatore and Theni.",
    url: "https://therapyathome.in/blog",
    siteName: "Therapy at Home",
    type: "website",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Therapy at Home blog — physiotherapy and Ayurveda articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
    description:
      "Expert articles on physiotherapy, Ayurveda, and home healthcare in Coimbatore and Theni.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const posts = [
  {
    slug: 'physiotherapy-at-home-coimbatore',
    title: 'Physiotherapy at Home in Coimbatore: What to Expect, Cost & How to Book',
    description:
      'Everything you need to know before booking a home physiotherapy session in Coimbatore — conditions treated, session flow, cost, and areas covered.',
    tag: 'Coimbatore',
    tagColor: 'bg-blue-100 text-blue-700',
    readTime: '6 min read',
  },
  {
    slug: 'back-pain-not-going-away',
    title: "5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)",
    description:
      'Most people treat the symptom, not the cause. Here are the five real reasons chronic back and neck pain keeps returning — and what actually fixes it.',
    tag: 'Pain Relief',
    tagColor: 'bg-red-100 text-red-700',
    readTime: '7 min read',
  },
  {
    slug: 'what-is-abhyanga-massage',
    title: 'What is Abhyanga Massage? Benefits, Process and Who Should Try It',
    description:
      'A complete guide to Abhyanga — the traditional Ayurvedic full-body oil massage. What it is, which oils are used, what happens during a session, and who benefits most.',
    tag: 'Ayurveda',
    tagColor: 'bg-green-100 text-green-700',
    readTime: '8 min read',
  },
  {
    slug: 'why-home-physiotherapy-treatment-growing-india',
    title: 'Why Home Physiotherapy Treatment Is Growing in India',
    description:
      'Explore why home physiotherapy is becoming the preferred choice in India for pain relief, recovery, and family-centered care.',
    tag: 'India Growth',
    tagColor: 'bg-orange-100 text-orange-700',
    readTime: '5 min read',
  },
  {
    slug: 'home-physiotherapy-vs-clinic-coimbatore',
    title: 'Home Physiotherapy vs Clinic: Which is Better for Back Pain in Coimbatore?',
    description:
      'An honest head-to-head comparison — attention, cost, convenience, and outcomes. Includes a real cost breakdown for 10 sessions in Coimbatore.',
    tag: 'Guide',
    tagColor: 'bg-purple-100 text-purple-700',
    readTime: '7 min read',
  },
  {
    slug: 'physiotherapy-ayurveda-home-theni',
    title: 'Ayurveda and Physiotherapy at Home in Theni — Now Available',
    description:
      'Certified physiotherapy and Ayurvedic treatment now available at your home across Theni district. No need to travel to Madurai or Coimbatore.',
    tag: 'Theni',
    tagColor: 'bg-yellow-100 text-yellow-700',
    readTime: '6 min read',
  },
  {slug: 'knee-pain-not-going-away',  
    title: 'Knee Pain Not Going Away? Here’s What You Need to Know',
    description: 'Simple, physiotherapist-approved exercises to relieve knee pain at home. Takes only 10 minutes a day.',
    tag: 'knee pain guide',
    tagColor: 'bg-yellow-100 text-yellow-700',
    readTime: '6 min read',
  },

]

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-3">Health & Wellness Blog</h1>
        <p className="text-gray-600 text-lg">
          Expert articles on physiotherapy, Ayurvedic treatment, and home healthcare —
          written by the team at{' '}
          <a href="https://therapyathome.in" className="text-blue-600 underline">
            Therapy at Home
          </a>
          , serving Coimbatore and Theni.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Featured
        </p>
        <Link href={`/blog/${posts[0].slug}`} className="block group">
          <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${posts[0].tagColor}`}>
                {posts[0].tag}
              </span>
              <span className="text-xs text-gray-400">{posts[0].readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {posts[0].description}
            </p>
            <p className="mt-4 text-blue-600 text-sm font-semibold group-hover:underline">
              Read article →
            </p>
          </div>
        </Link>
      </div>

      {/* Divider */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        All Articles
      </p>

      {/* Post List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-base font-bold mb-1 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to book a session?</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Certified physiotherapy and Ayurvedic treatment at your home in
          Coimbatore and Theni. Same-day appointments available.
        </p>
        <a
          href="https://therapyathome.in/#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book a Home Session
        </a>
      </div>

    </main>
  )
}