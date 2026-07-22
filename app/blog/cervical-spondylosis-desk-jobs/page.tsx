import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Cervical Spondylosis & Desk Jobs | Home Physiotherapy in Theni & Coimbatore",
  description:
    "Cervical spondylosis from desk work causing neck pain? Learn effective home physiotherapy exercises and treatment to relieve pain and prevent further deterioration.",
  alternates: {
    canonical: "https://therapyathome.in/blog/cervical-spondylosis-desk-jobs",
  },
  openGraph: {
    title: "Cervical Spondylosis & Desk Jobs | Home Physiotherapy in Theni & Coimbatore",
    description:
      "Office workers with cervical spondylosis: discover home physiotherapy exercises and treatment for neck pain relief and better posture.",
    url: "https://therapyathome.in/blog/cervical-spondylosis-desk-jobs",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Cervical spondylosis treatment for desk job workers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Cervical Spondylosis & Desk Jobs | Home Physiotherapy in Theni & Coimbatore",
    description:
      "Office workers with cervical spondylosis: discover home physiotherapy exercises and treatment for neck pain relief.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is cervical spondylosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cervical spondylosis is age-related wear and tear of the cervical spine (neck). It causes neck pain, stiffness, and sometimes radiating arm pain. It's common in desk workers due to prolonged poor posture."
      }
    },
    {
      "@type": "Question",
      "name": "Can home physiotherapy treat cervical spondylosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Home physiotherapy is highly effective for managing cervical spondylosis. Treatment includes posture correction, neck strengthening exercises, stretching, and ergonomic adjustments that reduce pain and prevent progression."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to recover from cervical spondylosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With consistent home physiotherapy, most people experience pain relief within 2-3 weeks. Full recovery and significant improvement typically takes 4-8 weeks, depending on severity."
      }
    },
    {
      "@type": "Question",
      "name": "What exercises help cervical spondylosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Effective exercises include neck stretches, shoulder rolls, chin tucks, neck strengthening exercises with resistance, and postural correction drills. A physiotherapist will create a personalized program based on your symptoms."
      }
    }
  ]
};

export default function CervicalSpondylosisPost() {
  return (
    <>
      <Script
        id="faq-schema-cervical-spondylosis"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Cervical Spondylosis & Desk Jobs: Relief Through Home Physiotherapy
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Therapy at Home | therapyathome.in</p>

        <p className="mb-6">
          If you spend 8+ hours a day at a desk, you're not alone in experiencing neck pain. Cervical
          spondylosis—age-related wear and tear of the cervical spine—is becoming increasingly common among
          office workers, remote employees, and anyone working at a computer.
        </p>

        <p className="mb-8">
          The good news? Home physiotherapy is highly effective at managing cervical spondylosis and
          preventing it from worsening. With targeted exercises, posture correction, and consistent care,
          most people experience significant relief within 2-4 weeks.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What is Cervical Spondylosis?</h2>
        <p className="mb-4">
          Cervical spondylosis refers to degenerative changes in the cervical spine (neck vertebrae and
          discs). Over time, the discs lose hydration and height, bone spurs develop, and ligaments become
          less flexible.
        </p>
        <p className="mb-6">
          Common symptoms include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Neck pain and stiffness</li>
          <li>Pain radiating to shoulders and arms</li>
          <li>Headaches (especially at the base of the skull)</li>
          <li>Numbness or tingling in arms and hands</li>
          <li>Weakness in grip strength</li>
          <li>Limited neck movement and mobility</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Desk Workers are at Risk</h2>
        <p className="mb-4">
          Office workers develop cervical spondylosis faster due to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Forward head posture (looking down at screens)</li>
          <li>Prolonged static positioning for hours</li>
          <li>Weak neck and shoulder muscles</li>
          <li>Poor ergonomic setup</li>
          <li>Stress and tension holding in the neck</li>
          <li>Repetitive strain from mouse and keyboard use</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Home Physiotherapy Treats Cervical Spondylosis</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">1. Assessment and Ergonomic Analysis</h3>
        <p className="mb-4">
          Your physiotherapist will assess your neck mobility, pain points, and work setup. They'll identify
          posture problems and ergonomic issues contributing to your spondylosis.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">2. Pain Management</h3>
        <p className="mb-4">
          Initial treatment focuses on reducing inflammation and pain through gentle manual therapy, heat
          therapy, and soft tissue mobilization techniques.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. Neck Strengthening & Flexibility</h3>
        <p className="mb-4">
          Progressive exercises strengthen weak neck and shoulder muscles while improving flexibility. This
          reduces strain on the cervical spine and prevents further degeneration.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">4. Posture Correction & Ergonomic Adjustments</h3>
        <p className="mb-6">
          Your therapist will teach proper desk posture, screen height adjustments, chair setup, and
          workplace ergonomics to prevent recurrence and long-term damage.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Effective Home Exercises for Cervical Spondylosis</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">Chin Tucks</h3>
        <p className="mb-4">
          Sit with good posture. Gently tuck your chin inward as if making a double chin, hold for 5 seconds,
          then release. Repeat 10-15 times. This strengthens deep neck muscles and corrects forward head posture.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Neck Stretches</h3>
        <p className="mb-4">
          Gently tilt your head to one side, bringing your ear toward your shoulder. Hold for 20-30 seconds.
          Repeat on the other side. Do this 3-4 times per side, morning and evening.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Shoulder Rolls</h3>
        <p className="mb-4">
          Roll your shoulders backward 10 times, then forward 10 times. This releases tension in the neck
          and upper back. Do this every hour at your desk.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Neck Isometric Exercises</h3>
        <p className="mb-4">
          Place your hand against the side of your head and resist its movement without moving your neck.
          Hold for 5-10 seconds. Repeat on all four sides. Perform 10 times per direction.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Upper Back Strengthening</h3>
        <p className="mb-6">
          Perform rows with light weights or resistance bands to strengthen your upper back, which supports
          proper neck posture. Do 2-3 sets of 10-12 repetitions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Desk Ergonomics to Prevent Cervical Spondylosis</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Position monitor at eye level, arm's length away</li>
          <li>Keep keyboard and mouse at elbow height</li>
          <li>Sit with feet flat on ground, knees at 90 degrees</li>
          <li>Take breaks every 30 minutes to stretch and move</li>
          <li>Maintain neutral head position (ears over shoulders)</li>
          <li>Use a supportive chair with proper lumbar support</li>
          <li>Consider a standing desk or desk converter for variety</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Recovery Timeline</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Week 1:</strong> Initial assessment, pain management, basic exercises</li>
          <li><strong>Weeks 2-3:</strong> Noticeable pain reduction, improved mobility</li>
          <li><strong>Weeks 4-6:</strong> Significant improvement, return to normal activities</li>
          <li><strong>Weeks 7-8:</strong> Enhanced strength and flexibility, prevention focus</li>
          <li><strong>Ongoing:</strong> Maintenance exercises to prevent recurrence</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Prevention Tips for Office Workers</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Set hourly reminders to stand, stretch, and walk around</li>
          <li>Practice neck exercises daily, even when pain-free</li>
          <li>Maintain good posture throughout the day</li>
          <li>Strengthen neck and shoulder muscles regularly</li>
          <li>Stay hydrated and maintain good overall health</li>
          <li>Manage stress through relaxation techniques</li>
          <li>Sleep on a supportive pillow that maintains neck alignment</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">Is cervical spondylosis permanent?</h3>
        <p className="mb-4">
          While degenerative changes are permanent, symptoms can be effectively managed and prevented from
          worsening with consistent physiotherapy and lifestyle changes.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Can I work at a desk with cervical spondylosis?</h3>
        <p className="mb-4">
          Yes, with proper ergonomics, posture, and regular breaks. Home physiotherapy helps you remain
          productive while managing symptoms safely.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Will exercises make it worse?</h3>
        <p className="mb-4">
          No, gentle, progressive exercises prescribed by a physiotherapist improve symptoms. Avoid heavy
          lifting or extreme neck movements, but movement and strengthening are essential.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How often should I do physiotherapy?</h3>
        <p className="mb-6">
          Initially, 2-3 sessions per week for 4-6 weeks. Once improved, maintenance sessions once weekly or
          every two weeks help prevent recurrence.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-10 text-center">
          <h2 className="text-xl font-bold mb-2">Stop neck pain from desk work</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Get professional home physiotherapy treatment for cervical spondylosis in Theni and Coimbatore.
            Our certified therapists help office workers recover and work pain-free.
          </p>
          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Home Session
          </a>
        </div>
      </article>
    </>
  );
}
