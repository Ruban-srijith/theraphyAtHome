import type { Metadata } from "next";
import Script from 'next/script'



export const metadata: Metadata = {
  title: "What is Abhyanga Massage? Benefits, Process and Who Should Try It",
  description:
    "A complete guide to Abhyanga — the traditional Ayurvedic full-body oil massage. What it is, which oils are used, what happens during a session, and who benefits most.",
  alternates: {
    canonical: "https://therapyathome.in/blog/what-is-abhyanga-massage",
  },
  openGraph: {
    title: "What is Abhyanga Massage? Benefits, Process and Who Should Try It",
    description:
      "A complete guide to Abhyanga — the traditional Ayurvedic full-body oil massage. What it is, which oils are used, what happens during a session, and who benefits most.",
    url: "https://therapyathome.in/blog/what-is-abhyanga-massage",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Abhyanga Ayurvedic oil massage at home by Therapy at Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "What is Abhyanga Massage? Benefits, Process and Who Should Try It",
    description:
      "A complete guide to Abhyanga — the traditional Ayurvedic full-body oil massage. What it is, which oils are used, what happens during a session, and who benefits most.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Abhyanga massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Abhyanga is a traditional Ayurvedic full-body warm oil massage. Medicated herbal oils are applied with long rhythmic strokes to improve circulation, reduce pain, release muscle tension, and calm the nervous system. It has been practiced in India for over 3,000 years."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Abhyanga massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Abhyanga improves blood circulation, relieves chronic muscle and joint pain, reduces stress and anxiety, improves sleep quality, detoxifies the body, and nourishes the skin. It is particularly effective for neck pain, back pain, and joint stiffness."
      }
    },
    {
      "@type": "Question",
      "name": "How often should you get Abhyanga massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For therapeutic purposes such as pain relief or stress management, once or twice a week is recommended. For general wellness and maintenance, once every two weeks is sufficient. Your therapist will advise based on your condition."
      }
    },
    {
      "@type": "Question",
      "name": "Who should not get Abhyanga massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Abhyanga is not recommended during fever, acute infections, open wounds or skin conditions, during menstruation (for some conditions), or immediately after a heavy meal. Pregnant women should consult a doctor before taking Abhyanga."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Abhyanga massage at home in Coimbatore or Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Therapy at Home provides certified Abhyanga massage at your home across Coimbatore and Theni, Tamil Nadu. Our therapists bring all required oils and equipment. Visit therapyathome.in to book a session."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Abhyanga and a regular massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular massage focuses mainly on relaxation and muscle relief. Abhyanga uses medicated herbal oils selected for your body type (Vata, Pitta, or Kapha) and follows specific Ayurvedic strokes that work with the body's energy channels (srotas). It treats the whole body systemically, not just targeted muscles."
      }
    }
  ]
}

export default function AbhyangaPost() {
  return (
    <>
      <Script
        id="faq-schema-abhyanga"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          What is Abhyanga Massage? Benefits, Process and Who Should Try It
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Therapy at Home | therapyathome.in</p>

        <p className="mb-6">
          If you've ever looked into Ayurvedic treatments for pain relief, stress, or overall wellness,
          you've likely come across the word <strong>Abhyanga</strong>. It's one of the oldest and most
          respected therapies in Ayurvedic medicine — practiced in India for over 3,000 years.
        </p>
        <p className="mb-8">
          But what exactly is it? How does it work? And more importantly — is it right for you?
          This guide covers everything you need to know before booking your first Abhyanga session.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What is Abhyanga?</h2>
        <p className="mb-4">
          Abhyanga (pronounced <em>ab-yan-ga</em>) is a full-body Ayurvedic oil massage. The word comes
          from Sanskrit — <em>abhi</em> meaning "into" and <em>anga</em> meaning "limb" or "body." Together
          it roughly translates to "moving oil into the body."
        </p>
        <p className="mb-4">
          In Abhyanga, warm medicated herbal oils are applied to the entire body using long, rhythmic
          strokes that follow the direction of hair growth and the body's energy channels (called
          <em> srotas</em> in Ayurveda). The oil is not just applied on the surface — the strokes are
          designed to allow the oil to absorb into deeper tissue layers.
        </p>
        <p className="mb-6">
          Unlike a standard relaxation massage, Abhyanga is therapeutic. The oils are selected based on
          your body type (<em>Prakriti</em>) and your specific condition — so what works for one person
          may differ for another.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Oils Are Used?</h2>
        <p className="mb-4">
          The oils used in Abhyanga are not plain coconut or sesame oil from a kitchen shelf. They are
          <strong> medicated herbal oils</strong> — base oils that have been cooked with specific Ayurvedic
          herbs over long periods, concentrating their therapeutic properties.
        </p>
        <p className="mb-3">Common oils used include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Dhanwantharam Tailam</strong> — for joint pain, nerve disorders, post-delivery recovery</li>
          <li><strong>Ksheerabala Tailam</strong> — for neck pain, neurological conditions, muscle weakness</li>
          <li><strong>Murivenna</strong> — for injuries, fractures, and acute pain</li>
          <li><strong>Mahanarayana Tailam</strong> — for arthritis, stiffness, and chronic pain conditions</li>
          <li><strong>Sesame oil (Tila Tailam)</strong> — the classical base oil, warming and deeply penetrating</li>
        </ul>
        <p className="mb-6">
          Your Ayurvedic therapist selects the oil based on your constitution and condition. This is what
          separates Abhyanga from a generic massage — the treatment is personalised from the very first step.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Happens During an Abhyanga Session?</h2>
        <p className="mb-4">
          A typical Abhyanga session lasts <strong>45 to 60 minutes</strong>. Here's what to expect:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li>
            <strong>Consultation:</strong> The therapist asks about your current condition, pain areas,
            health history, and body type. This takes 5–10 minutes.
          </li>
          <li>
            <strong>Oil warming:</strong> The selected medicated oil is gently warmed to body temperature.
            Cold oil is never used in Abhyanga — warmth is essential for absorption.
          </li>
          <li>
            <strong>Application:</strong> The therapist applies oil starting from the scalp and working
            downward — head, neck, shoulders, arms, back, abdomen, legs, and feet.
          </li>
          <li>
            <strong>Stroke technique:</strong> Long strokes (effleurage) are used on limbs; circular strokes
            on joints. Pressure is moderate and consistent — not deep tissue pressure.
          </li>
          <li>
            <strong>Rest period:</strong> After the massage, you rest for 10–15 minutes to allow the oil to
            absorb fully before bathing.
          </li>
        </ol>
        <p className="mb-6">
          When done at home by Therapy at Home, our therapist brings all oils, a portable massage mat,
          and handles the full setup and cleanup. You don't need to arrange anything.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Benefits of Abhyanga Massage</h2>
        <p className="mb-3">
          Abhyanga works on multiple levels simultaneously — physical, neurological, and systemic.
          Here are the key benefits:
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Pain Relief</h3>
        <p className="mb-4">
          Warm medicated oils penetrate into muscle and joint tissue, reducing inflammation and improving
          lubrication in joints. Highly effective for chronic back pain, neck pain, knee pain, and
          arthritis. Many patients notice significant reduction in stiffness after just 2–3 sessions.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Improved Blood Circulation</h3>
        <p className="mb-4">
          The rhythmic strokes stimulate capillary circulation, bringing oxygenated blood to muscles and
          carrying away metabolic waste. This is why skin looks visibly healthier after Abhyanga — and
          why muscle recovery accelerates.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Stress and Anxiety Reduction</h3>
        <p className="mb-4">
          Abhyanga directly stimulates the parasympathetic nervous system — the "rest and digest" state.
          Cortisol (the stress hormone) levels drop. Many patients report deeper, more restful sleep for
          several nights after a session.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Detoxification</h3>
        <p className="mb-4">
          In Ayurveda, Abhyanga is considered a key step in removing <em>ama</em> — metabolic toxins
          that accumulate in tissues. The oil draws these toxins toward the digestive tract for elimination.
          This is why Abhyanga is often followed by steam therapy for enhanced effect.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Skin Nourishment</h3>
        <p className="mb-6">
          The herbal oils deeply moisturise and nourish the skin. Regular Abhyanga is traditionally
          associated with slowing skin ageing, improving skin tone, and maintaining skin elasticity.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Benefits Most from Abhyanga?</h2>
        <p className="mb-3">Abhyanga is particularly well-suited for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Desk workers and students</strong> — chronic neck and upper back tension from prolonged sitting</li>
          <li><strong>Elderly patients</strong> — joint stiffness, arthritis, reduced mobility</li>
          <li><strong>People with chronic pain</strong> — back pain, knee pain, shoulder pain</li>
          <li><strong>High-stress individuals</strong> — anxiety, poor sleep, burnout</li>
          <li><strong>Post-illness recovery</strong> — rebuilding strength after prolonged bed rest</li>
          <li><strong>Athletes and physically active people</strong> — faster muscle recovery, injury prevention</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Abhyanga + Steam Therapy: The Powerful Combination</h2>
        <p className="mb-4">
          Traditionally, Abhyanga is followed immediately by <strong>Swedana</strong> — steam therapy.
          The logic is simple: the medicated oil applied during Abhyanga opens the pores and loosens
          toxins; steam then drives that oil deeper into tissue while flushing toxins out through sweat.
        </p>
        <p className="mb-6">
          At Therapy at Home, we offer this combination as a single session using our portable steam unit —
          delivered entirely at your home. The combined effect on pain, stiffness, and circulation is
          significantly greater than either treatment alone.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Should Avoid Abhyanga?</h2>
        <p className="mb-3">Abhyanga is generally very safe, but avoid it if you have:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Fever or acute infection</li>
          <li>Open wounds, rashes, or active skin conditions</li>
          <li>Severe varicose veins</li>
          <li>Immediately after a heavy meal</li>
          <li>During the first trimester of pregnancy (consult your doctor)</li>
        </ul>
        <p className="mb-6">
          If you have any medical conditions, our therapist will assess suitability during the consultation
          before the session begins.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">What is Abhyanga massage?</h3>
        <p className="mb-4">
          Abhyanga is a traditional Ayurvedic full-body warm oil massage. Medicated herbal oils are applied
          with long rhythmic strokes to improve circulation, reduce pain, release muscle tension, and calm
          the nervous system. It has been practiced in India for over 3,000 years.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">What are the benefits of Abhyanga massage?</h3>
        <p className="mb-4">
          Abhyanga improves blood circulation, relieves chronic muscle and joint pain, reduces stress and
          anxiety, improves sleep quality, detoxifies the body, and nourishes the skin. It is particularly
          effective for neck pain, back pain, and joint stiffness.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How often should you get Abhyanga massage?</h3>
        <p className="mb-4">
          For therapeutic purposes such as pain relief, once or twice a week is recommended. For general
          wellness and maintenance, once every two weeks is sufficient.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Who should not get Abhyanga massage?</h3>
        <p className="mb-4">
          Abhyanga is not recommended during fever, acute infections, open wounds or skin conditions, or
          immediately after a heavy meal. Pregnant women should consult a doctor first.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">What is the difference between Abhyanga and a regular massage?</h3>
        <p className="mb-4">
          Regular massage focuses on relaxation and muscle relief. Abhyanga uses medicated herbal oils
          selected for your body type and follows specific Ayurvedic strokes that work with the body's
          energy channels. It treats the whole body systemically, not just targeted muscles.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Can I get Abhyanga massage at home in Coimbatore or Theni?</h3>
        <p className="mb-6">
          Yes. Therapy at Home provides certified Abhyanga massage at your home across Coimbatore and
          Theni. Our therapists bring all required oils and equipment. Visit{' '}
          <a href="https://therapyathome.in" className="text-blue-600 underline">therapyathome.in</a> to
          book a session.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">Experience Abhyanga at Your Home</p>
          <p className="text-gray-600 mb-4">
            Certified Ayurvedic therapists in Coimbatore and Theni. We bring the oils, the mat, and
            the expertise — you just relax.
          </p>
          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Book an Abhyanga Session
          </a>
        </div>
      </article>
    </>
  )
}
