import type { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Frozen Shoulder Pain? Home Physiotherapy Exercises That Actually Work",
  description:
    "Frozen shoulder follows three predictable stages — and the right exercise at the wrong stage can set you back. Here's what actually helps, stage by stage. By Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog/frozen-shoulder-home-physiotherapy",
  },
  openGraph: {
    title: "Frozen Shoulder Pain? Home Physiotherapy Exercises That Actually Work",
    description:
      "Frozen shoulder follows three predictable stages — and the right exercise at the wrong stage can set you back. Here's what actually helps, stage by stage.",
    url: "https://therapyathome.in/blog/frozen-shoulder-home-physiotherapy",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Physiotherapist demonstrating frozen shoulder exercises during a home visit in Theni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Frozen Shoulder Pain? Home Physiotherapy Exercises That Actually Work",
    description:
      "Frozen shoulder follows three predictable stages — and the right exercise at the wrong stage can set you back.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does frozen shoulder usually last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frozen shoulder typically runs its course over 1–3 years across three stages. Consistent physiotherapy from the freezing stage onward can shorten the painful period and preserve more movement along the way."
      }
    },
    {
      "@type": "Question",
      "name": "Can frozen shoulder be treated at home without surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most cases of frozen shoulder respond well to guided home physiotherapy, gentle stretching, and heat therapy. Surgery is only considered in a small number of cases that don't improve after several months of proper conservative treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Is it normal for frozen shoulder to hurt more at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Night pain is one of the most common complaints, especially during the freezing stage. Sleeping propped up on the unaffected side and applying warmth before bed often helps."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between frozen shoulder and a rotator cuff injury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rotator cuff injury usually causes pain with specific movements while the joint still moves freely when assisted. Frozen shoulder causes genuine loss of range of motion in nearly every direction, even when someone else moves the arm for you. A physiotherapist can tell the difference in one assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Do home exercises alone work, or do I need a physiotherapist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gentle exercises help at every stage, but a physiotherapist adjusts them to your current stage, adds manual therapy and heat where needed, and prevents overstretching a joint that's still inflamed — which recovers movement faster than exercise alone."
      }
    }
  ]
}

export default function FrozenShoulderPost() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Frozen Shoulder Pain? Home Physiotherapy Exercises That Actually Work
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Mathan kumar D | Therapy at Home</p>

        <p className="mb-6">
          If lifting your arm to comb your hair or reach a shelf has quietly become difficult over
          the last few months — not from any injury, just a slow tightening — there's a good chance
          it's frozen shoulder, medically known as adhesive capsulitis. It's more common than people
          realise, especially between the ages of 40 and 60, and more common still in people managing
          diabetes or thyroid conditions.
        </p>

        {/* Free Guide CTA */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 text-center">
          <p className="text-lg font-semibold mb-1">🎁 Free Download: Frozen Shoulder Relief Guide</p>
          <p className="text-gray-600 mb-4 text-sm">
            Stage-by-stage exercises to safely regain shoulder movement at home. Takes only 10 minutes a day.
          </p>

          <a
            href="/frozen_shoulder_guide.html"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Download Free Guide
          </a>
        </div>

        <p className="mb-8">
          The good news: frozen shoulder almost always responds to consistent physiotherapy. But unlike
          most pain conditions, the exercises have to match the stage you're in — pushing too hard too
          early can set you back weeks. Here's how it progresses, and what actually helps at each point.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Stage 1: Freezing — Pain Builds, Movement Starts Disappearing</h2>
        <p className="mb-4">
          This stage lasts roughly 6 weeks to 9 months. Pain is often worse at night and with sudden
          movements. The shoulder hasn't fully stiffened yet, but every month of delay tends to take
          more range of motion with it.
        </p>
        <p className="mb-6">
          <strong>What actually helps:</strong> Gentle, low-load movement like pendulum swings — never
          forcing the joint. This is also the stage where seeing a physiotherapist earliest makes the
          biggest long-term difference.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Stage 2: Frozen — Pain Eases, But Stiffness Takes Over</h2>
        <p className="mb-4">
          This stage lasts about 4 to 12 months and is often the most limiting day-to-day. Reaching
          behind your back, sleeping on that side, or lifting overhead all become genuinely hard — even
          though the sharp pain of the first stage has usually settled.
        </p>
        <p className="mb-6">
          <strong>What actually helps:</strong> Structured stretching — towel stretches, cross-body
          stretches — combined with heat therapy to loosen the joint capsule before stretching it.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Stage 3: Thawing — Movement Gradually Returns</h2>
        <p className="mb-4">
          This final stage can take 6 months to 2 years. It's where consistent, correctly-dosed exercise
          makes the single biggest difference to how much range you get back — and how quickly.
        </p>
        <p className="mb-6">
          <strong>What actually helps:</strong> Progressive strengthening and range-of-motion work like
          wall climbs, increasing load gradually as the joint allows.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4 Exercises to Start With</h2>
        <p className="mb-3"><strong>1. Pendulum Swing</strong></p>
        <p className="mb-4">
          Lean forward slightly, let the affected arm hang loose, and gently swing it in small circles
          using your body's momentum, not your shoulder muscles. Safe even in the painful freezing stage.
        </p>
        <p className="mb-3"><strong>2. Towel Stretch</strong></p>
        <p className="mb-4">
          Hold a towel behind your back, one hand over the shoulder and one below the waist. Gently pull
          upward with the top hand to stretch the lower shoulder.
        </p>
        <p className="mb-3"><strong>3. Wall Climb (Finger Walk)</strong></p>
        <p className="mb-4">
          Face a wall, fingers at hip height, and slowly "walk" your fingers upward as far as comfortable,
          then walk back down. Gives you a visible marker of progress week to week.
        </p>
        <p className="mb-6"><strong>4. Cross-Body Stretch</strong></p>
        <p className="mb-6">
          Use your unaffected arm to gently pull the affected arm across your chest, holding for 20 to
          30 seconds. Targets the back of the shoulder, often the tightest area in the frozen stage.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Should You See a Physiotherapist?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Shoulder pain or stiffness lasting more than a few weeks</li>
          <li>Difficulty reaching overhead, behind your back, or sleeping on that side</li>
          <li>Pain that wakes you up at night</li>
          <li>Stiffness that hasn't improved with rest alone</li>
          <li>A diagnosis of diabetes or thyroid conditions alongside new shoulder pain</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Home Advantage</h2>
        <p className="mb-6">
          At <strong>Therapy at Home</strong>, we bring certified physiotherapists directly to your door
          across Coimbatore and Theni — assessing exactly which stage you're in and adjusting exercises,
          manual therapy, and heat treatments like portable steam therapy accordingly. No travel, no
          waiting room, just the right exercise at the right week.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        <h3 className="text-lg font-semibold mt-6 mb-2">How long does frozen shoulder usually last?</h3>
        <p className="mb-4">
          Typically 1–3 years across all three stages. Consistent physiotherapy from the freezing stage
          onward can shorten the painful period and preserve more movement along the way.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Can frozen shoulder be treated at home without surgery?</h3>
        <p className="mb-4">
          Yes. Most cases respond well to guided home physiotherapy, gentle stretching, and heat therapy.
          Surgery is only considered in a small number of cases that don't improve after several months
          of proper conservative treatment.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Is it normal for frozen shoulder to hurt more at night?</h3>
        <p className="mb-4">
          Yes — night pain is one of the most common complaints, especially during the freezing stage.
          Sleeping propped up on the unaffected side and applying warmth before bed often helps.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">What's the difference between frozen shoulder and a rotator cuff injury?</h3>
        <p className="mb-4">
          A rotator cuff injury usually hurts with specific movements while the joint still moves freely
          when assisted. Frozen shoulder causes genuine loss of motion in nearly every direction, even
          when assisted. A physiotherapist can tell the difference in one assessment.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Do home exercises alone work, or do I need a physiotherapist?</h3>
        <p className="mb-6">
          Gentle exercises help at every stage, but a physiotherapist adjusts them to your current stage,
          adds manual therapy and heat where needed, and prevents overstretching a joint that's still
          inflamed — recovering movement faster than exercise alone.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">Ready to get your shoulder moving again?</p>
          <p className="text-gray-600 mb-4">Certified physiotherapy delivered to your door in Coimbatore and Theni.</p>

          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Book a Session
          </a>
        </div>
      </article>
    </>
  )
}
