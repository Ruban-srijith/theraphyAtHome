import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantain Leaf Bath Therapy: Ayurvedic Pain Relief Explained | Therapy at Home",
  description:
    "What plantain leaf bath is, which conditions it helps with, and why it works differently from a spa treatment. A home-visit Ayurvedic therapy from Therapy at Home, Theni & Coimbatore.",
  openGraph: {
    title: "Plantain Leaf Bath Therapy: Ayurvedic Pain Relief Explained",
    description:
      "Understand plantain leaf bath therapy — the traditional Ayurvedic treatment Therapy at Home brings to your doorstep for back, neck, and joint pain relief.",
    type: "article",
    url: "https://therapyathome.in/blog/plantain-leaf-bath-therapy",
    images: [
      {
        url: "https://therapyathome.in/images/plantain-leaf-bath-og.jpg",
        width: 1200,
        height: 630,
        alt: "Plantain leaf bath therapy session at home",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is plantain leaf bath therapy?",
    answer:
      "Plantain leaf bath (vazhai ilai kuzhi) is a traditional Ayurvedic sudation therapy where the body, or the affected area, is treated with heated plantain (banana) leaves layered with medicated herbal powders and oils. The leaves are warmed and applied in stages to induce controlled sweating, which helps loosen stiff muscles and improve local circulation.",
  },
  {
    question: "What conditions does plantain leaf bath help with?",
    answer:
      "It is commonly used for chronic back pain, neck stiffness, frozen shoulder, muscle spasms, joint stiffness from arthritis, and general muscular fatigue. It is especially effective as a complement to physiotherapy for patients whose pain is tied to muscular tightness rather than acute injury.",
  },
  {
    question: "Is plantain leaf bath the same as a spa treatment?",
    answer:
      "No. A spa treatment is generally relaxation-focused, using ambient heat or oils for comfort. Plantain leaf bath is a clinical Ayurvedic protocol with a specific herbal formulation, temperature control, and sequence, chosen based on the patient's condition and administered alongside a physiotherapy assessment — not a generic wellness add-on.",
  },
  {
    question: "How is plantain leaf bath done at home?",
    answer:
      "Our therapist brings fresh plantain leaves, herbal powders, and a portable heating setup to your home. The leaves are warmed, layered with the herbal mix, and applied to the affected area in timed rounds, typically over 30-45 minutes, followed by a brief rest period.",
  },
  {
    question: "How many sessions of plantain leaf bath are usually needed?",
    answer:
      "This depends on the condition. Acute stiffness may improve within 3-5 sessions, while chronic back or neck pain often benefits from a structured course of 7-10 sessions combined with physiotherapy exercises, assessed and adjusted by our therapist as your recovery progresses.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Plantain Leaf Bath Therapy: Ayurvedic Pain Relief Explained",
  description:
    "A guide to plantain leaf bath therapy, its uses for pain relief, and how it differs from spa-style wellness treatments.",
  author: {
    "@type": "Organization",
    name: "Therapy at Home",
  },
  publisher: {
    "@type": "Organization",
    name: "Therapy at Home",
    url: "https://therapyathome.in",
  },
  mainEntityOfPage: "https://therapyathome.in/blog/plantain-leaf-bath-therapy",
};

export default function PlantainLeafBathPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Plantain Leaf Bath Therapy: What It Is, and Why It's Not a Spa Treatment
        </h1>

        <p className="text-gray-700 text-base leading-7 mb-6">
          If you've searched for "plantain leaf bath" (வாழை இலை குழி), you've probably
          seen it lumped in with spa menus and wellness packages. That's a misreading of
          what this therapy actually is. Plantain leaf bath is a targeted Ayurvedic
          sudation treatment used for muscular pain, stiffness, and chronic back or neck
          conditions — and when done correctly, it's closer to a clinical protocol than
          a relaxation ritual.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          What Happens During a Plantain Leaf Bath
        </h2>
        <p className="text-gray-700 text-base leading-7 mb-6">
          The treatment uses fresh plantain (banana) leaves, which are heated and layered
          with a herbal powder mix chosen for the patient's specific condition. The
          therapist applies the warmed leaves directly to the affected area in timed
          rounds, allowing controlled sweating (sudation) to loosen tight muscle tissue
          and improve blood flow to the area. A full session typically runs 30-45
          minutes, followed by rest.
        </p>
        <p className="text-gray-700 text-base leading-7 mb-6">
          Because the leaves and herbal powders are applied directly to the skin at a
          specific temperature and duration, the treatment needs to be administered by
          someone trained in the protocol — not just anyone with access to heated towels.
          This is one reason we treat it as a physiotherapy-adjacent clinical service
          rather than a spa add-on.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Conditions Plantain Leaf Bath Helps With
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-7 mb-6 space-y-2">
          <li>Chronic lower back pain and stiffness</li>
          <li>Neck and shoulder muscular tension</li>
          <li>Frozen shoulder (adhesive capsulitis)</li>
          <li>Joint stiffness related to early-stage arthritis</li>
          <li>Muscle spasms following prolonged desk work or physical strain</li>
        </ul>
        <p className="text-gray-700 text-base leading-7 mb-6">
          It works best as a complement to physiotherapy exercises, not a replacement
          for them. In our sessions, the leaf bath is usually used to loosen the tissue
          first, making the subsequent mobility exercises more effective and less
          painful for the patient.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Why It's Different From a Spa Treatment
        </h2>
        <p className="text-gray-700 text-base leading-7 mb-6">
          A spa heat treatment is designed around comfort — ambient warmth, pleasant
          scents, a relaxing experience. Plantain leaf bath, done properly, is designed
          around a therapeutic outcome. The herbal powder blend, the leaf temperature,
          and the duration of application are chosen based on the patient's condition,
          not a fixed spa menu item. It's also typically assessed alongside a
          physiotherapy evaluation, so the treatment plan reflects what's actually
          causing the pain — not just where it hurts.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          What to Expect From a Home Session
        </h2>
        <p className="text-gray-700 text-base leading-7 mb-6">
          Our therapist brings everything needed for the treatment directly to your
          home: fresh plantain leaves, the herbal powder preparation, and a portable
          heating setup. There's no need to travel to a clinic or lie on a treatment
          table in an unfamiliar setting. For patients with chronic back or neck pain who
          find travel itself uncomfortable, this is often the deciding factor in choosing
          home-based care.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          How Many Sessions Do You Need?
        </h2>
        <p className="text-gray-700 text-base leading-7 mb-6">
          For acute stiffness, patients often notice improvement within 3-5 sessions.
          Chronic conditions — long-standing back pain, recurring neck stiffness — usually
          need a structured course of 7-10 sessions, combined with physiotherapy exercises
          in between. Your therapist will assess progress after the first few sessions and
          adjust the plan accordingly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 mb-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-base leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 my-8" />
        <p className="text-gray-700 text-base leading-7 mb-6">
          <strong className="font-semibold">
            Considering plantain leaf bath therapy for your back or neck pain?
          </strong>{" "}
          Therapy at Home brings this treatment, along with a full physiotherapy
          assessment, to your doorstep in Theni and Coimbatore.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-10 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Try Plantain Leaf Bath at Home?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Certified Ayurvedic and physiotherapy care delivered to your door in Theni and Coimbatore.
          </p>
          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Session
          </a>
        </div>
      </article>
    </>
  );
}