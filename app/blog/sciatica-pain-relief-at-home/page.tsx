import type { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Sciatica Pain Relief at Home: Causes, Exercises & When to See a Physio",
  description:
    "Sciatica isn't back pain — it's nerve pain, and treating it like a muscle strain often makes it worse. Here's what actually causes it, exercises that help, and when to get it checked. By Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog/sciatica-pain-relief-at-home",
  },
  openGraph: {
    title: "Sciatica Pain Relief at Home: Causes, Exercises & When to See a Physio",
    description:
      "Sciatica isn't back pain — it's nerve pain, and treating it like a muscle strain often makes it worse. Here's what actually causes it and what helps.",
    url: "https://therapyathome.in/blog/sciatica-pain-relief-at-home",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Physiotherapist demonstrating sciatica relief exercises during a home visit in Theni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Sciatica Pain Relief at Home: Causes, Exercises & When to See a Physio",
    description:
      "Sciatica isn't back pain — it's nerve pain. Here's what actually causes it and what helps.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does sciatica pain actually feel like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sciatica typically feels like a sharp, burning, or electric-shock sensation that starts in the lower back or buttock and travels down one leg, sometimes reaching the calf or foot. It's often accompanied by numbness or tingling, and usually affects only one side."
      }
    },
    {
      "@type": "Question",
      "name": "Can sciatica go away on its own?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mild sciatica sometimes settles within a few weeks with rest and gentle movement. However, most cases improve significantly faster with targeted physiotherapy, and ignoring it risks the underlying nerve compression becoming chronic."
      }
    },
    {
      "@type": "Question",
      "name": "Is walking good or bad for sciatica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gentle walking is usually good for sciatica, as it keeps the spine mobile and improves blood flow to the affected nerve. Prolonged sitting is typically worse than walking for most people with sciatica."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fastest way to relieve sciatica pain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nerve gliding exercises, gentle stretches like the piriformis stretch, and alternating heat and cold can bring relief within days. A physiotherapist can also identify and correct the specific movement pattern causing the nerve compression, which relieves pain faster than exercise alone."
      }
    },
    {
      "@type": "Question",
      "name": "When should sciatica be treated as an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seek immediate medical care if sciatica is accompanied by loss of bladder or bowel control, numbness in the groin area, or rapidly worsening weakness in the leg. These can indicate a serious condition called cauda equina syndrome that needs urgent attention."
      }
    }
  ]
}

export default function SciaticaPost() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Sciatica Pain Relief at Home: Causes, Exercises & When to See a Physio
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Mathan kumar D | Therapy at Home</p>

        <p className="mb-6">
          If pain shoots down from your lower back into your leg — sometimes all the way to your foot —
          you're likely not dealing with ordinary back pain. That radiating, burning, or electric-shock
          sensation is sciatica: irritation or compression of the sciatic nerve, the longest nerve in your
          body. It responds very differently to treatment than a muscle strain, which is why many people
          try the wrong things first and stay in pain longer than they need to.
        </p>

        {/* Free Guide CTA */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 text-center">
          <p className="text-lg font-semibold mb-1">🎁 Free Download: Sciatica Relief Guide</p>
          <p className="text-gray-600 mb-4 text-sm">
            Physiotherapist-approved nerve-gliding exercises and stretches to relieve sciatica at home.
            Takes only 10 minutes a day.
          </p>

          <a
            href="/sciatica_guide.html"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Download Free Guide
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Actually Causes Sciatica</h2>
        <p className="mb-4">
          Sciatica isn't a condition on its own — it's a symptom of something else pressing on or
          irritating the sciatic nerve as it exits the lower spine. The most common causes are:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>A slipped or herniated disc pressing on a nerve root</li>
          <li>Spinal stenosis — narrowing of the space around the spinal cord</li>
          <li>Piriformis syndrome — a deep hip muscle spasming and pinching the nerve</li>
          <li>Prolonged sitting with poor posture, especially in desk jobs</li>
          <li>Pregnancy-related pressure on the lower spine</li>
        </ul>
        <p className="mb-6">
          Because the root cause varies, the same generic "back exercises" that help ordinary back pain
          can sometimes make sciatica worse — which is why identifying the actual cause matters before
          starting treatment.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How to Tell If It's Sciatica and Not Just Back Pain</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Pain travels from the lower back or buttock down one leg</li>
          <li>Burning, shooting, or electric-shock sensations rather than dull ache</li>
          <li>Numbness or tingling in the leg, calf, or foot</li>
          <li>Pain worsens with prolonged sitting, coughing, or sneezing</li>
          <li>Usually affects only one side of the body</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Exercises That Help</h2>
        <p className="mb-3"><strong>1. Nerve Gliding (Sciatic Nerve Flossing)</strong></p>
        <p className="mb-4">
          While seated, straighten the affected leg and gently flex your foot up and down. This "glides"
          the irritated nerve through its surrounding tissue instead of stretching it, which often reduces
          the sharp, shooting quality of the pain.
        </p>
        <p className="mb-3"><strong>2. Piriformis Stretch</strong></p>
        <p className="mb-4">
          Lying on your back, cross the affected ankle over the opposite knee and gently pull the
          uncrossed thigh toward your chest. This releases the piriformis muscle, a common culprit when
          it pinches the sciatic nerve.
        </p>
        <p className="mb-3"><strong>3. Knee-to-Chest Stretch</strong></p>
        <p className="mb-4">
          Lying on your back, gently pull one knee toward your chest at a time, holding for 20–30 seconds.
          This decompresses the lower spine and can ease nerve pressure at the source.
        </p>
        <p className="mb-6"><strong>4. Gentle Walking</strong></p>
        <p className="mb-6">
          Short, gentle walks keep the spine mobile and improve blood flow to the nerve. Prolonged sitting
          is usually worse for sciatica than light movement, even when walking feels uncomfortable at first.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Should You See a Physiotherapist?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Pain radiating below the knee, into the calf or foot</li>
          <li>Numbness, tingling, or weakness in the leg</li>
          <li>Pain lasting more than a week without improvement</li>
          <li>Pain that worsens with sitting, coughing, or sneezing</li>
          <li>Pain affecting your sleep or daily movement</li>
        </ul>
        <p className="mb-6">
          <strong>Seek immediate medical attention</strong> if you experience loss of bladder or bowel
          control, numbness in the groin area, or rapidly worsening leg weakness — these can signal a
          more serious condition that needs urgent care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Home Advantage</h2>
        <p className="mb-6">
          At <strong>Therapy at Home</strong>, our physiotherapists assess exactly what's causing your
          sciatica — disc-related, muscular, or postural — and build a treatment plan around it,
          combining targeted exercises, manual therapy, and Ayurvedic treatments like portable steam
          therapy to ease deep muscular tension around the nerve. All delivered at your home across
          Coimbatore and Theni.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        <h3 className="text-lg font-semibold mt-6 mb-2">What does sciatica pain actually feel like?</h3>
        <p className="mb-4">
          Typically a sharp, burning, or electric-shock sensation starting in the lower back or buttock
          and traveling down one leg, sometimes reaching the calf or foot, often with numbness or tingling
          on just one side.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Can sciatica go away on its own?</h3>
        <p className="mb-4">
          Mild cases sometimes settle within a few weeks with rest and gentle movement, but most cases
          improve significantly faster with targeted physiotherapy — and ignoring it risks the nerve
          compression becoming chronic.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Is walking good or bad for sciatica?</h3>
        <p className="mb-4">
          Gentle walking is usually good, keeping the spine mobile and improving blood flow to the nerve.
          Prolonged sitting is typically worse than walking for most people with sciatica.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">What's the fastest way to relieve sciatica pain?</h3>
        <p className="mb-4">
          Nerve gliding exercises, gentle stretches like the piriformis stretch, and alternating heat and
          cold can bring relief within days. A physiotherapist can also correct the specific movement
          pattern causing the compression, relieving pain faster than exercise alone.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">When should sciatica be treated as an emergency?</h3>
        <p className="mb-6">
          Seek immediate medical care if it's accompanied by loss of bladder or bowel control, numbness
          in the groin area, or rapidly worsening leg weakness — these can indicate a serious condition
          called cauda equina syndrome.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">Ready to get relief from sciatica?</p>
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