import type { Metadata } from "next";
import Script from 'next/script'


export const metadata: Metadata = {
  title: "Ayurveda and Physiotherapy at Home in Theni — Now Available",
  description:
    "Certified physiotherapy and Ayurvedic treatment now available at your home across Theni district. No need to travel to Madurai or Coimbatore. Book Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog/physiotherapy-ayurveda-home-theni",
  },
  openGraph: {
    title: "Ayurveda and Physiotherapy at Home in Theni — Now Available",
    description:
      "Certified physiotherapy and Ayurvedic treatment now available at your home across Theni district. No need to travel to Madurai or Coimbatore.",
    url: "https://therapyathome.in/blog/physiotherapy-ayurveda-home-theni",
    siteName: "Therapy at Home",
    type: "article",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Physiotherapy and Ayurveda home visit in Theni by Therapy at Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Ayurveda and Physiotherapy at Home in Theni — Now Available",
    description:
      "Certified physiotherapy and Ayurvedic treatment now available at your home across Theni district. No need to travel to Madurai or Coimbatore.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is physiotherapy at home available in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Therapy at Home provides certified physiotherapy sessions at your home across Theni district including Theni town, Periyakulam, Bodinayakanur, Uthamapalayam, and surrounding areas. Visit therapyathome.in to book."
      }
    },
    {
      "@type": "Question",
      "name": "Is Ayurvedic massage available at home in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Therapy at Home offers certified Ayurvedic treatments including Abhyanga oil massage and portable steam therapy at your home in Theni. No need to travel to Madurai or Coimbatore for Ayurvedic care."
      }
    },
    {
      "@type": "Question",
      "name": "What conditions does home physiotherapy treat in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home physiotherapy in Theni treats back pain, neck pain, knee pain, shoulder pain, post-surgical rehabilitation, stroke recovery, Parkinson's disease management, sports injuries, and mobility issues in elderly patients."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a home physiotherapy or Ayurveda session in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit therapyathome.in or contact us via WhatsApp. We will confirm your appointment and send a certified therapist to your home in Theni at the scheduled time."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to travel to Madurai for physiotherapy if I live in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Therapy at Home brings certified physiotherapy and Ayurvedic treatment directly to your home in Theni. You do not need to travel to Madurai, Dindigul, or Coimbatore for quality home healthcare."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Theni does Therapy at Home cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Therapy at Home covers Theni town, Periyakulam, Bodinayakanur, Uthamapalayam, Cumbum, Andipatti, and surrounding localities in Theni district."
      }
    }
  ]
}

export default function TheniPost() {
  return (
    <>
      <Script
        id="faq-schema-theni"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Ayurveda and Physiotherapy at Home in Theni — Now Available
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Therapy at Home | therapyathome.in</p>

        <p className="mb-6">
          If you live in Theni and need physiotherapy or Ayurvedic treatment, your only options
          until now were to travel to Madurai, Dindigul, or Coimbatore — or go without proper
          care. For elderly patients, people with severe pain, or anyone managing a chronic
          condition, that journey is not just inconvenient. It's a barrier that stops many people
          from getting the treatment they need.
        </p>
        <p className="mb-8">
          That barrier is gone. <strong>Therapy at Home</strong> now operates across Theni district,
          bringing certified physiotherapy and authentic Ayurvedic treatments directly to your
          home — no travel required.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Theni Has Been Underserved</h2>
        <p className="mb-4">
          Theni is a growing district with a population of over 12 lakh people. Yet quality
          physiotherapy and Ayurvedic home care has historically been concentrated in larger
          cities. Residents of Theni town, Periyakulam, Bodinayakanur, and Uthamapalayam have
          had to travel 80–150 km to access the kind of specialised home healthcare that urban
          patients take for granted.
        </p>
        <p className="mb-6">
          The agriculture-heavy population in Theni faces a high burden of musculoskeletal
          conditions — back pain from manual labour, knee pain from prolonged standing, shoulder
          injuries from repeated overhead work. These are exactly the conditions that physiotherapy
          and Ayurvedic treatment address most effectively. The need has always been there.
          The access hasn't — until now.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Services Available in Theni</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Physiotherapy at Home</h3>
        <p className="mb-4">
          Our certified physiotherapists visit your home in Theni for a full clinical session.
          Assessment, manual therapy, therapeutic exercises, and a personalised home exercise
          program — all delivered at your door.
        </p>
        <p className="mb-3">Conditions treated:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Chronic back pain and sciatica</li>
          <li>Neck pain and cervical spondylosis</li>
          <li>Knee pain and osteoarthritis</li>
          <li>Shoulder pain and frozen shoulder</li>
          <li>Post-surgical rehabilitation (knee, hip, spine)</li>
          <li>Stroke rehabilitation</li>
          <li>Parkinson's disease management</li>
          <li>Elderly mobility and fall prevention</li>
          <li>Sports injuries</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Abhyanga Ayurvedic Oil Massage</h3>
        <p className="mb-4">
          Abhyanga is a traditional full-body Ayurvedic massage using warm medicated herbal oils.
          It improves circulation, reduces chronic pain, releases deep muscle tension, and calms
          the nervous system. Our therapists bring all oils and equipment to your home.
        </p>
        <p className="mb-6">
          Particularly effective for back pain, joint stiffness, stress, poor sleep, and general
          body fatigue — conditions that are extremely common in Theni's working population.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Portable Steam Therapy (Swedana)</h3>
        <p className="mb-4">
          We bring a portable steam unit to your home. Steam therapy opens pores, improves
          circulation, flushes toxins through sweat, and deeply relaxes muscles. When combined
          with Abhyanga, the effect on pain and stiffness is significantly amplified.
        </p>
        <p className="mb-6">
          This combination — Abhyanga followed by steam — is the same therapy offered in premium
          Ayurvedic centres in Kerala and Coimbatore. Now available at your home in Theni.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Plantain Leaf Bath</h3>
        <p className="mb-6">
          Our signature treatment. Fresh plantain leaves are used in a therapeutic bathing process
          with specific medicinal properties — deeply rooted in South Indian Ayurvedic tradition.
          This treatment is unique to Therapy at Home and not available at standard physiotherapy
          clinics anywhere in the region.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who This is For in Theni</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Farmers and Manual Workers</h3>
        <p className="mb-4">
          Theni's economy is driven by agriculture — cardamom, banana, and grape cultivation
          in the Cumbum Valley and surrounding areas. Years of manual labour create predictable
          patterns of chronic back pain, knee degeneration, and shoulder injuries. Physiotherapy
          combined with Ayurvedic treatment provides both immediate pain relief and long-term
          joint protection.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Elderly Patients</h3>
        <p className="mb-4">
          For elderly patients in Theni with arthritis, post-fracture weakness, or reduced
          mobility — travelling to Madurai for physiotherapy is a significant hardship. Home
          visits mean treatment happens consistently, without exhausting the patient with travel.
          Consistent treatment is what drives recovery.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Stroke and Neurological Patients</h3>
        <p className="mb-4">
          Stroke recovery requires frequent physiotherapy — ideally daily in the early weeks.
          For a stroke patient's family in Periyakulam or Bodinayakanur, managing daily trips
          to Madurai for rehabilitation is not realistic. Home physiotherapy in Theni makes
          the required frequency of treatment achievable.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Post-Surgical Patients</h3>
        <p className="mb-6">
          After knee or hip replacement surgery, rehabilitation must start early — but travel
          is restricted. Home physiotherapy in Theni solves this directly, allowing rehabilitation
          to begin from the first day back home after discharge.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Areas We Cover in Theni District</h2>
        <p className="mb-3">Therapy at Home currently serves the following areas in Theni:</p>
        <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
          {[
            "Theni Town", "Periyakulam", "Bodinayakanur", "Uthamapalayam",
            "Cumbum", "Andipatti", "Chinnamanur", "Gudalur (Theni)",
            "Veerapandi", "Krishnarayapuram", "Thevaram", "Myladumparai"
          ].map((area) => (
            <div key={area} className="bg-gray-50 border border-gray-200 rounded px-3 py-2">
              {area}
            </div>
          ))}
        </div>
        <p className="mb-6 text-sm text-gray-600">
          Don't see your area listed? Contact us — we cover most parts of Theni district.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What a Session Looks Like</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li>
            <strong>You contact us</strong> via WhatsApp or through therapyathome.in and describe
            your condition and location in Theni.
          </li>
          <li>
            <strong>We confirm your appointment</strong> — typically within a few hours —
            and assign a certified therapist available in your area.
          </li>
          <li>
            <strong>The therapist arrives</strong> at your home at the scheduled time with all
            required equipment, oils, and materials.
          </li>
          <li>
            <strong>Assessment and treatment</strong> — your first session includes a full
            assessment followed by treatment. Subsequent sessions go straight into treatment
            with progress review every few sessions.
          </li>
          <li>
            <strong>Home program</strong> — after each physiotherapy session, you receive
            specific exercises to do between sessions for faster recovery.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Difference From a Clinic</h2>
        <p className="mb-4">
          In a typical physiotherapy clinic, therapists manage many patients per session.
          Your treatment time is shared. At home, every minute of the session belongs to you.
          For most conditions, this level of personalised attention produces significantly
          better outcomes — especially for neurological rehabilitation and chronic pain.
        </p>
        <p className="mb-6">
          And unlike travelling to a clinic in Madurai or Dindigul, you arrive at your treatment
          rested — not exhausted from an hour-long journey in pain.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Is physiotherapy at home available in Theni?</h3>
        <p className="mb-4">
          Yes. Therapy at Home provides certified physiotherapy sessions at your home across
          Theni district including Theni town, Periyakulam, Bodinayakanur, Uthamapalayam,
          and surrounding areas.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Is Ayurvedic massage available at home in Theni?</h3>
        <p className="mb-4">
          Yes. We offer Abhyanga oil massage and portable steam therapy at your home in Theni.
          No need to travel to Madurai or Coimbatore for Ayurvedic care.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Do I need to travel to Madurai for physiotherapy if I live in Theni?</h3>
        <p className="mb-4">
          No. Therapy at Home brings certified physiotherapy and Ayurvedic treatment directly
          to your home in Theni. You do not need to travel anywhere.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">What areas in Theni does Therapy at Home cover?</h3>
        <p className="mb-4">
          We cover Theni town, Periyakulam, Bodinayakanur, Uthamapalayam, Cumbum, Andipatti,
          Chinnamanur, and surrounding localities in Theni district.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How do I book a session in Theni?</h3>
        <p className="mb-6">
          Visit{' '}
          <a href="https://therapyathome.in" className="text-blue-600 underline">
            therapyathome.in
          </a>{' '}
          or contact us via WhatsApp. We confirm your appointment and send a certified therapist
          to your home at the scheduled time.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">
            Theni-ல் வீட்டிலேயே சிகிச்சை பெறுங்கள்
          </p>
          <p className="text-gray-600 mb-1 text-sm">
            (Get treatment at home in Theni)
          </p>
          <p className="text-gray-600 mb-4 mt-2">
            Certified physiotherapy and Ayurvedic treatment at your door.
            No travel. No waiting. Book today.
          </p>
          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Book in Theni
          </a>
        </div>
      </article>
    </>
  )
}
