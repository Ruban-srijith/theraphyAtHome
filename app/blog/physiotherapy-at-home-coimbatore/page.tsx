import Script from 'next/script'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is physiotherapy at home available in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Therapy at Home provides certified physiotherapy sessions at your home across Coimbatore. Our therapists visit your location at a scheduled time with all required equipment. Visit therapyathome.in to book."
      }
    },
    {
      "@type": "Question",
      "name": "How much does home physiotherapy cost in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home physiotherapy in Coimbatore typically costs between ₹500 to ₹1500 per session depending on the condition, treatment duration, and location. Contact Therapy at Home for exact pricing based on your specific requirement."
      }
    },
    {
      "@type": "Question",
      "name": "What conditions does home physiotherapy treat in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home physiotherapy in Coimbatore treats back pain, neck pain, knee pain, shoulder pain, post-surgical rehabilitation, stroke recovery, Parkinson's disease management, sports injuries, and mobility issues in elderly patients."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a home physiotherapy session in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit therapyathome.in and fill in your details or contact us via WhatsApp. We will confirm your appointment and send a certified physiotherapist to your home at the scheduled time."
      }
    },
    {
      "@type": "Question",
      "name": "Are the physiotherapists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All physiotherapists at Therapy at Home hold BPT (Bachelor of Physiotherapy) or MPT (Master of Physiotherapy) degrees and have clinical experience. We verify credentials before onboarding any therapist."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of sessions depends on your condition. Acute pain typically improves in 3–5 sessions. Chronic conditions or post-surgical rehabilitation may require 10–20 sessions over several weeks. Your physiotherapist will assess and give you a clear plan after the first session."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Coimbatore does Therapy at Home cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Therapy at Home covers all major areas in Coimbatore including RS Puram, Peelamedu, Saibaba Colony, Gandhipuram, Singanallur, Vadavalli, Hopes College, Race Course, and surrounding localities."
      }
    }
  ]
}

export default function CoimbatorePhysioPost() {
  return (
    <>
      <Script
        id="faq-schema-coimbatore-physio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Physiotherapy at Home in Coimbatore: What to Expect, Cost & How to Book
        </h1>
        <p className="text-sm text-gray-500 mb-8">By Therapy at Home | therapyathome.in</p>

        <p className="mb-6">
          If you or someone in your family is dealing with back pain, knee pain, recovering from surgery,
          or managing a condition like stroke or Parkinson's — getting to a physiotherapy clinic in
          Coimbatore every day is exhausting. The travel, the waiting, the scheduling — it adds up.
        </p>
        <p className="mb-8">
          Home physiotherapy solves all of that. A certified physiotherapist comes to your home, at your
          scheduled time, with everything needed for a full clinical session. This guide covers everything
          you need to know before booking — what happens during a session, what it costs, which conditions
          it treats, and how to get started in Coimbatore.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What is Home Physiotherapy?</h2>
        <p className="mb-4">
          Home physiotherapy is exactly what it sounds like — a qualified physiotherapist visits your
          home and delivers the same treatment you would receive at a clinic. The difference is that you
          don't travel. You don't sit in a waiting room. You receive one-on-one, undivided attention
          in a familiar, comfortable environment.
        </p>
        <p className="mb-6">
          In a clinic, a physiotherapist typically manages 8–15 patients in a session. At home, they work
          exclusively with you for the entire duration. For most musculoskeletal conditions, this level of
          attention produces equal or better outcomes than clinic-based treatment.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Conditions Does It Treat?</h2>
        <p className="mb-3">
          Home physiotherapy in Coimbatore is suitable for a wide range of conditions:
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Pain Conditions</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Chronic lower back pain</li>
          <li>Neck pain and cervical spondylosis</li>
          <li>Knee pain and osteoarthritis</li>
          <li>Shoulder pain and frozen shoulder</li>
          <li>Hip pain</li>
          <li>Sciatica and nerve pain</li>
          <li>Heel pain and plantar fasciitis</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Neurological Conditions</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Stroke rehabilitation (regaining movement and strength)</li>
          <li>Parkinson's disease management</li>
          <li>Bell's palsy</li>
          <li>Peripheral neuropathy</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Post-Surgical Rehabilitation</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Knee replacement recovery</li>
          <li>Hip replacement recovery</li>
          <li>Spinal surgery rehabilitation</li>
          <li>Rotator cuff repair recovery</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Elderly and Geriatric Care</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Balance and fall prevention</li>
          <li>Muscle weakness and deconditioning</li>
          <li>Mobility assistance and walking training</li>
          <li>Post-fracture recovery</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Happens During a Home Physiotherapy Session?</h2>
        <p className="mb-4">
          Here's a clear picture of what your first session looks like:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-4">
          <li>
            <strong>Assessment (First Session Only — 15–20 minutes):</strong> The physiotherapist
            assesses your posture, range of motion, strength, and pain patterns. They review your
            medical history and any reports or scans you have. Based on this, they build your
            personalised treatment plan.
          </li>
          <li>
            <strong>Treatment (30–40 minutes):</strong> Depending on your condition, this may include
            manual therapy (joint mobilisation, soft tissue massage), therapeutic exercises, stretching,
            electrotherapy (TENS/ultrasound if applicable), and postural correction.
          </li>
          <li>
            <strong>Home Exercise Program:</strong> At the end of each session, your physiotherapist
            gives you specific exercises to do between sessions. These are critical — they extend the
            benefit of the session and speed up recovery.
          </li>
          <li>
            <strong>Progress Review:</strong> Every 3–5 sessions, your plan is reviewed and adjusted
            based on how you're responding to treatment.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Much Does Home Physiotherapy Cost in Coimbatore?</h2>
        <p className="mb-4">
          Home physiotherapy in Coimbatore typically costs between <strong>₹500 to ₹1,500 per session</strong>,
          depending on:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>The condition being treated</li>
          <li>Session duration</li>
          <li>Your location within Coimbatore</li>
          <li>Whether specialised equipment is needed</li>
        </ul>
        <p className="mb-6">
          Many patients find that home physiotherapy — when factoring in travel costs, auto or cab fares,
          time off work, and the physical effort of travelling in pain — is comparable in total cost to
          clinic visits, and far more convenient.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Home Physiotherapy Works Better for Many Patients</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Elderly Patients</h3>
        <p className="mb-4">
          For patients above 60 with mobility limitations, arthritis, or post-surgical restrictions,
          travelling to a clinic is genuinely difficult and sometimes unsafe. Home visits eliminate this
          barrier entirely. The familiar home environment also reduces anxiety, which helps with
          neurological rehabilitation.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Stroke and Neurological Patients</h3>
        <p className="mb-4">
          Neurological rehabilitation requires high frequency — often daily sessions in the early
          stages. Commuting daily after a stroke is impractical. Home physiotherapy makes this level
          of frequency possible, which directly impacts recovery outcomes.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Post-Surgical Patients</h3>
        <p className="mb-4">
          After knee or hip replacement surgery, patients are often instructed not to travel for
          several weeks. Home physiotherapy ensures they receive rehabilitation from day one of
          discharge — which is critical for preventing stiffness and maintaining surgical results.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Working Professionals</h3>
        <p className="mb-6">
          For anyone managing back or neck pain from desk work, home physiotherapy sessions can be
          scheduled in the early morning or evening — before or after work — without disrupting the
          workday. Physiotherapy doesn't have to mean taking leave.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Areas We Cover in Coimbatore</h2>
        <p className="mb-3">
          Therapy at Home covers all major localities in Coimbatore including:
        </p>
        <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
          {[
            "RS Puram", "Peelamedu", "Saibaba Colony", "Gandhipuram",
            "Singanallur", "Vadavalli", "Hopes College", "Race Course",
            "Ramanathapuram", "Kovaipudur", "Ondipudur", "Sowripalayam",
            "Thudiyalur", "Kuniyamuthur", "Kalapatti", "Sulur"
          ].map((area) => (
            <div key={area} className="bg-gray-50 border border-gray-200 rounded px-3 py-2">
              {area}
            </div>
          ))}
        </div>
        <p className="mb-6 text-sm text-gray-600">
          Don't see your area? Contact us — we cover most parts of Coimbatore city and its outskirts.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Therapy at Home Difference</h2>
        <p className="mb-4">
          At <strong>Therapy at Home</strong>, we go beyond standard physiotherapy. We are the only
          home healthcare service in Coimbatore and Theni that combines certified physiotherapy with
          authentic Ayurvedic treatments — including Abhyanga oil massage and portable steam therapy.
        </p>
        <p className="mb-6">
          For patients with chronic pain or stiffness, this combination approach delivers faster and
          longer-lasting results than physiotherapy alone. The Ayurvedic component addresses deep
          muscular tension and inflammation that exercise-based therapy alone cannot reach.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Is physiotherapy at home available in Coimbatore?</h3>
        <p className="mb-4">
          Yes. Therapy at Home provides certified physiotherapy sessions at your home across Coimbatore.
          Our therapists visit your location at a scheduled time with all required equipment.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How much does home physiotherapy cost in Coimbatore?</h3>
        <p className="mb-4">
          Home physiotherapy in Coimbatore typically costs between ₹500 to ₹1,500 per session depending
          on the condition, duration, and location. Contact us for exact pricing.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Are the physiotherapists certified?</h3>
        <p className="mb-4">
          Yes. All physiotherapists at Therapy at Home hold BPT or MPT degrees and have verified
          clinical experience.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How many sessions will I need?</h3>
        <p className="mb-4">
          Acute pain typically improves in 3–5 sessions. Chronic conditions or post-surgical
          rehabilitation may require 10–20 sessions. Your physiotherapist will give you a clear plan
          after the first session.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">What areas in Coimbatore does Therapy at Home cover?</h3>
        <p className="mb-4">
          We cover RS Puram, Peelamedu, Saibaba Colony, Gandhipuram, Singanallur, Vadavalli, Hopes
          College, Race Course, and all surrounding localities. Contact us if you're unsure about
          your area.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">How do I book a home physiotherapy session in Coimbatore?</h3>
        <p className="mb-6">
          Visit{' '}
          <a href="https://therapyathome.in" className="text-blue-600 underline">therapyathome.in</a>{' '}
          or contact us via WhatsApp. We confirm your appointment and send a certified physiotherapist
          to your home at the scheduled time.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-lg font-semibold mb-2">Book a Home Physiotherapy Session in Coimbatore</p>
          <p className="text-gray-600 mb-4">
            Certified physiotherapists at your door. Same-day and next-day appointments available.
          </p>
          <a
            href="https://therapyathome.in/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Book Now
          </a>
        </div>
      </article>
    </>
  )
}
