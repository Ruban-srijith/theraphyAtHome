import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Home Physiotherapy Treatment Is Growing in India | Therapy at Home",
  description:
    "Explore why home physiotherapy is becoming the preferred choice in India for pain relief, recovery, and family-centered care in Theni and Coimbatore.",
  alternates: {
    canonical: "https://therapyathome.in/blog/why-home-physiotherapy-treatment-growing-india",
  },
  openGraph: {
    title: "Why Home Physiotherapy Treatment Is Growing in India",
    description:
      "Why families in Theni and Coimbatore are choosing home treatment over hospital visits.",
    url: "https://therapyathome.in/blog/why-home-physiotherapy-treatment-growing-india",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Why home physiotherapy treatment is growing in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Why Home Physiotherapy Treatment Is Growing in India",
    description:
      "Why families in Theni and Coimbatore are choosing home treatment over hospital visits.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqs = [
  {
    q: "Is home physiotherapy as effective as clinic treatment?",
    a: "Yes, when delivered by qualified professionals. The treatment techniques are the same, what changes is convenience, consistency, and comfort, all of which can actually improve recovery outcomes.",
  },
  {
    q: "Who benefits most from home visit treatment?",
    a: "Elderly patients, people recovering from surgery, and working adults with chronic back, neck, or knee pain who cannot take repeated time off for clinic visits.",
  },
  {
    q: "Is home treatment more expensive than hospital care?",
    a: "Usually the opposite. Once you factor in travel, waiting time, and lost work hours, home treatment is often more cost-effective overall.",
  },
  {
    q: "Does this trend apply outside big cities like Chennai or Bangalore?",
    a: "Yes, industry data shows home healthcare specifically expanding into Tier 2 and Tier 3 cities as awareness grows and service costs drop, which is exactly the stage Theni and Coimbatore are at now.",
  },
];

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Home Physiotherapy Is India's Fastest-Growing Healthcare Trend",
    description:
      "Explore why home physiotherapy is becoming the preferred choice in India for pain relief, recovery, and family-centered care.",
    author: {
      "@type": "Organization",
      name: "Therapy at Home",
    },
    publisher: {
      "@type": "Organization",
      name: "Therapy at Home",
      logo: {
        "@type": "ImageObject",
        url: "https://therapyathome.in/og-home.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://therapyathome.in/blog/why-home-physiotherapy-treatment-growing-india",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(function (f) {
      return {
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      };
    }),
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/blog" className="text-sm text-blue-600 hover:underline">
        Back to Blog
      </Link>

      <div className="mt-6 mb-8">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700">
          India Growth
        </span>
        <h1 className="text-3xl font-bold mt-4 mb-3 leading-tight">
          Why Home Physiotherapy Is India's Fastest-Growing Healthcare Trend
        </h1>
        <p className="text-gray-500 text-sm">5 min read</p>
      </div>

      <article className="prose prose-gray max-w-none">
        <p>
          If you have noticed more families around you choosing home-visit therapists
          instead of hospital appointments, you are not imagining it. Home healthcare is
          one of the fastest-growing segments in Indian healthcare right now, and the
          reasons behind that growth are exactly the reasons families in Theni and
          Coimbatore are choosing it too.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">The Numbers Behind the Shift</h2>
        <p>
          Industry research puts India's home healthcare market at roughly 8 to 9 billion
          dollars today, with projections reaching 36 billion dollars by 2030, a growth
          rate of nearly 19 to 20 percent every year. Physiotherapy specifically is one of
          the fastest-moving parts of that market, expected to become a 1.3 billion dollar
          segment by 2028.
        </p>
        <p>
          These are not metro-only numbers. Analysts specifically point to smaller cities
          and towns as the next wave of growth, as service costs come down and more
          families discover that quality treatment does not require a hospital visit.
        </p>
        <p>
          In other words, Theni and Coimbatore are not behind this trend. They are exactly
          where it is heading next.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Why Families Are Actually Choosing Home Treatment</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">1. Aging parents, distant children</h3>
        <p>
          More families today are nuclear. Sons and daughters have moved to Chennai,
          Bangalore, Dubai, or further for work, leaving elderly parents at home without
          someone to drive them to a clinic three times a week. Home visit therapy solves
          this directly, the care comes to them.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">2. Pain from daily life, not just old age</h3>
        <p>
          Back pain, neck pain, and knee pain are not only an elderly problem anymore.
          Long hours at a shop counter, driving, farming, or sitting at a desk are creating
          chronic pain in people in their 30s and 40s too. These are exactly the patients
          who cannot easily take time off for repeated clinic visits, but can fit a
          45-minute home session around their day.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. Real cost savings</h3>
        <p>
          When you count travel time, waiting time, and missed work or missed business
          hours, home treatment often works out cheaper than repeated hospital OPD visits,
          not more expensive, as many people assume.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">4. Comfort changes recovery</h3>
        <p>
          Recovering in your own home, your own bed, your own routine, family nearby,
          genuinely helps people stick with their exercises and follow through on
          treatment, rather than dreading another trip to a clinic.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">5. A lasting shift since COVID</h3>
        <p>
          The pandemic pushed many families toward home-based care out of necessity. What
          started as a safety measure has become a genuine preference, people got
          comfortable with it, and many have not gone back.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Who This Is Really For</h2>
        <p>
          Home physiotherapy is not only for the elderly or post-surgery patients, though
          they make up a large share of demand. In practice, it works well for:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Elderly parents managing joint pain, mobility issues, or recovery after a fall</li>
          <li>Working adults in their 40s to 60s with chronic back, neck, or knee pain from sedentary or physically demanding jobs</li>
          <li>Post-surgery patients who need structured rehabilitation without hospital travel</li>
          <li>Anyone whose family lives far away and cannot personally accompany them to appointments</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Why Trust Still Takes Time to Build</h2>
        <p>
          Here is the honest part: many people still assume hospital or clinic care is
          automatically better than home care, purely because it feels more official. That
          assumption is not really true when the care is delivered by qualified, trained
          professionals, but it is understandable, and it is the biggest barrier home
          healthcare providers still face.
        </p>
        <p>
          What actually builds trust in a community like ours is not a big brand name, it
          is a therapist who shows up consistently, treats people with genuine care, and
          gets visible results. That is why real patient recovery stories matter more here
          than any advertisement ever could.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What This Means If You Are Considering Home Treatment</h2>
        <p>
          If a parent, a family member, or you yourself are dealing with ongoing back,
          neck, knee pain, or recovering from a procedure, this growing shift is worth
          paying attention to. Home visit physiotherapy and Ayurvedic treatments like
          plantain leaf therapy and portable steam therapy are not a compromise on
          quality, for many patients, they are simply a better fit for real life: less
          travel, more consistency, and care delivered in a space where you are already
          comfortable.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Frequently Asked Questions</h2>
        {faqs.map(function (f, i) {
          return (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          );
        })}
      </article>

      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to book a session?</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Certified physiotherapy and Ayurvedic treatment at your home in Coimbatore and
          Theni. Same-day appointments available.
        </p>
        <a
          href="https://therapyathome.in/#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book a Home Session
        </a>
      </div>
    </main>
  );
}