import type { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)",
  description:
    "Most people treat the symptom, not the cause. Here are the five real reasons chronic back and neck pain keeps returning — and what actually fixes it. By Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog/back-pain-not-going-away",
  },
  openGraph: {
    title: "5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)",
    description:
      "Most people treat the symptom, not the cause. Here are the five real reasons chronic back and neck pain keeps returning — and what actually fixes it.",
    url: "https://therapyathome.in/blog/back-pain-not-going-away",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Physiotherapist explaining chronic back pain causes at home visit in Theni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)",
    description:
      "Most people treat the symptom, not the cause. Here are the five real reasons chronic back and neck pain keeps returning — and what actually fixes it.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does back pain physiotherapy take to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most patients notice meaningful improvement within 3–5 sessions. Full recovery from chronic back pain typically takes 4–8 weeks of consistent treatment, depending on the severity and the underlying cause."
      }
    },
    {
      "@type": "Question",
      "name": "Can Ayurvedic massage help with back pain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ayurvedic treatments like Abhyanga (warm herbal oil massage) and steam therapy are effective for muscular back pain, reducing inflammation, and improving mobility. When combined with physiotherapy, results are often faster and longer-lasting."
      }
    },
    {
      "@type": "Question",
      "name": "Is home physiotherapy as effective as clinic treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For most musculoskeletal conditions, home physiotherapy is equally effective. In many cases it is more effective because the patient is relaxed, treatment is one-on-one, and there is no travel fatigue."
      }
    },
    {
      "@type": "Question",
      "name": "What conditions does home physiotherapy treat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common conditions include back pain, neck pain, knee pain, shoulder pain, post-surgical rehabilitation, stroke recovery, Parkinson's management, and sports injuries."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a home physiotherapy session in Coimbatore or Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit therapyathome.in or contact us directly to book a session. We will arrange a home visit at a time that suits you across Coimbatore and Theni."
      }
    }
  ]
}

export default function BackPainPost() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)
        </h1>
        <p className="text-sm text-gray-500 mb-8">By  Mathan kumar D | Therapy at Home</p>

        <p className="mb-6">
          If you've been dealing with neck or back pain for weeks — or even months — you're not alone.
          Millions of people in India live with chronic back and neck pain, taking painkillers every day,
          adjusting their posture, sleeping on different mattresses, and still waking up in pain.
        </p>
        <p className="mb-8">
          The frustrating truth? Most people are treating the <em>symptom</em>, not the <em>cause</em>.
          Here are five real reasons your pain keeps coming back — and what actually works to fix it.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. You're Treating the Pain, Not the Problem</h2>
        <p className="mb-4">
          The most common mistake is reaching for a painkiller the moment your back or neck starts hurting.
          Painkillers like ibuprofen or diclofenac reduce inflammation temporarily, but they do nothing to
          fix the underlying issue — whether that's a muscle imbalance, a compressed nerve, or a stiff joint.
        </p>
        <p className="mb-4">
          The pain goes away for a few hours. The tablet wears off. The pain returns — sometimes worse,
          because you pushed through activities you shouldn't have. Over time, this cycle can turn an acute
          pain into a chronic condition.
        </p>
        <p className="mb-6">
          <strong>What actually helps:</strong> Identifying the root cause through a proper assessment by a
          physiotherapist, then treating it directly with targeted therapy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. You're Sitting Wrong for Too Many Hours</h2>
        <p className="mb-4">
          Whether you work in an office in Coimbatore, run a business, or study from home, chances are
          you're sitting for 6–10 hours a day. Prolonged sitting — especially with a forward head posture —
          puts enormous pressure on the cervical spine (neck) and lumbar spine (lower back).
        </p>
        <p className="mb-3"><strong>Signs this is your problem:</strong></p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Pain that gets worse as the day goes on</li>
          <li>Stiffness in the morning that loosens after 20–30 minutes</li>
          <li>Pain specifically in the lower back or between shoulder blades</li>
          <li>Headaches starting from the base of the skull</li>
        </ul>
        <p className="mb-6">
          <strong>What actually helps:</strong> Postural correction, targeted physiotherapy exercises,
          and short movement breaks every 45–60 minutes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. You Ignored It in the Early Stage</h2>
        <p className="mb-4">
          Most back and neck pain starts small — a slight pull, a bit of morning stiffness. Many people
          ignore these signs assuming they'll go away. Sometimes they do. But often the underlying problem
          persists quietly until something triggers a full flare-up.
        </p>
        <p className="mb-6">
          <strong>What actually helps:</strong> Seeking assessment early, even for mild or occasional pain.
          Early physiotherapy can prevent an acute issue from becoming chronic.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. You're Missing the Ayurvedic Component</h2>
        <p className="mb-4">
          Modern physiotherapy is excellent for structural problems. But it doesn't always address the deep
          muscular tension, poor circulation, and systemic inflammation that Ayurvedic treatments target
          effectively.
        </p>
        <p className="mb-4">
          Traditional treatments like <strong>Abhyanga</strong> (warm oil massage) and <strong>steam therapy</strong> improve
          blood circulation, reduce deep tissue inflammation, and release chronic muscular tension that
          exercises alone can't reach.
        </p>
        <p className="mb-6">
          At <strong>Therapy at Home</strong>, we combine certified physiotherapy with authentic Ayurvedic
          treatments — delivered at your home in Coimbatore and Theni.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. You Haven't Been Consistent</h2>
        <p className="mb-4">
          Back and neck pain responds to consistency, not intensity. A single session gives temporary relief.
          Five sessions done consistently over two to three weeks can create lasting structural change.
        </p>
        <p className="mb-6">
          Most people stop treatment the moment pain reduces — before the underlying cause is fully resolved.
          This is the single biggest reason pain returns. Commit to your full treatment plan, even when you
          start feeling better after session two or three.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Should You See a Physiotherapist?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Pain lasting more than 2 weeks without improving</li>
          <li>Numbness or tingling in your arms or legs</li>
          <li>Pain that gets worse with bending, twisting, or reaching</li>
          <li>Pain affecting your sleep</li>
          <li>Pain stopping normal daily activities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Home Advantage</h2>
        <p className="mb-6">
          At <strong>Therapy at Home</strong>, we bring certified physiotherapists and Ayurvedic therapists
          directly to your home across Coimbatore and Theni. No waiting rooms. No travel. Personalized,
          one-on-one treatment in a comfortable environment — which, for many patients, leads to faster
          recovery.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">How long does back pain physiotherapy take to work?</h3>
        <p className="mb-4">
          Most patients notice meaningful improvement within 3–5 sessions. Full recovery from chronic back
          pain typically takes 4–8 weeks of consistent treatment, depending on severity and the underlying cause.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Can Ayurvedic massage help with back pain?</h3>
        <p className="mb-4">
          Yes. Abhyanga (warm herbal oil massage) and steam therapy are effective for muscular back pain,
          reducing inflammation, and improving mobility. Combined with physiotherapy, results are often
          faster and longer-lasting.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Is home physiotherapy as effective as clinic treatment?</h3>
        <p className="mb-4">
          Yes. For most musculoskeletal conditions, home physiotherapy is equally effective — and often
          more so, because the patient is relaxed, treatment is one-on-one, and there is no travel fatigue.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">What conditions does home physiotherapy treat?</h3>
        <p className="mb-4">
          Back pain, neck pain, knee pain, shoulder pain, post-surgical rehabilitation, stroke recovery,
          Parkinson's management, and sports injuries.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How do I book a home physiotherapy session in Coimbatore or Theni?</h3>
        <p className="mb-6">
          Visit <a href="https://therapyathome.in" className="text-blue-600 underline">therapyathome.in</a> or
          contact us directly. We'll arrange a home visit at a time that suits you.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">Ready to fix your pain at home?</p>
          <p className="text-gray-600 mb-4">Certified physiotherapy and Ayurvedic treatment delivered to your door in Coimbatore and Theni.</p>
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
