import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  { title: "Back Pain Relief", description: "Target acute & chronic lower back pain with structured home sessions to restore strength and pain-free movement.", image: "/images/Massage_for_Middle_Back_Pain_60e6a96a-af82-4b13-81ff-33dc5b996011.jpg.webp", tags: ["Lower Back", "Core Strength", "Pain Relief"] },
  { title: "Neck Pain & Posture", description: "Cervical pain, posture-related issues and ergonomic correction to relieve neck stiffness and improve alignment.", image: "/images/neck-pain-pt1.webp", tags: ["Posture Training", "Cervical Mobility", "Ergonomics"] },
  { title: "Knee Pain & Arthritis", description: "Non-surgical knee rehabilitation for arthritis, joint pain and instability — all at home.", image: "/images/knee-pain-arthritis.webp", tags: ["Joint Mobility", "Strengthening", "Pain Management"] },
  { title: "Post-Surgery Rehab", description: "Recovery plans for knee, hip, spine and joint surgeries to rebuild strength and safe movement at home.", image: "/images/post-surgical-rehab-5-1280x500-1.jpg.webp", tags: ["Safe Rehab", "Range of Motion", "Recovery"] },
  { title: "Stroke & Neuro Recovery", description: "Long-term rehabilitation for paralysis and stroke patients with exercises to improve strength and independence.", image: "/images/How-Robotic-Therapy-Helps-Stroke-Patients-Recover-Faster-1024x576.png.webp", tags: ["Neurological Rehab", "Balance", "Daily Living"] },
  { title: "Elderly & Fall Prevention", description: "Strength, balance and independence training for seniors to reduce fall risk and enhance daily mobility.", image: "/images/how-to-prevent-patient-falls.webp", tags: ["Balance", "Strength", "Confidence"] },
  { title: "Sports Injury Recovery", description: "Rehabilitation for ligament tears, muscle injuries and athletes returning safely to peak performance.", image: "/images/sports-injury-recovery.webp", tags: ["Injury Rehab", "Conditioning", "Return to Sport"] },
  { title: "Shoulder & Frozen Shoulder", description: "Target rotator cuff issues and frozen shoulder with guided mobility and strength training at home.", image: "/images/frozen-shoulder-treatments.webp", tags: ["Mobilization", "Strengthening", "Pain Relief"] },
  { title: "Sciatica & Nerve Pain", description: "Relieve radiating pain and nerve compression through stretching, posture correction and targeted therapy.", image: "/images/benefit-of-therapeutic-massage-for-sciatica-pain.webp", tags: ["Nerve Glide", "Posture", "Core Support"] },
  { title: "Weight Loss & Exercise", description: "Rehab-based fat loss plus movement correction to improve fitness, posture and joint health.", image: "/images/Weight-Loss-vs-Fat-Loss-Thmbnail-768x512.webp", tags: ["Cardio", "Strength", "Movement"] },
  { title: "Women's Health & Postnatal", description: "Recovery after delivery with pelvic strengthening, core rebuilding and gentle postpartum physiotherapy.", image: "/images/pregnancy-physiotherapy-benefits.webp", tags: ["Pelvic Rehab", "Core Recovery", "Postnatal"] },
  { title: "Home ICU & Bedridden Care", description: "Intensive physiotherapy for critical and bedridden patients including passive movement and respiratory support.", image: "/images/icu-care.webp", tags: ["Bedridden Care", "Mobilization", "Respiratory"] },
]

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I get physiotherapy at home in Theni?", acceptedAnswer: { "@type": "Answer", text: "Yes. Therapy at Home sends certified physiotherapists directly to your home in Theni." } },
    { "@type": "Question", name: "What is steam therapy and how does it help?", acceptedAnswer: { "@type": "Answer", text: "Steam therapy uses a portable steam unit delivered to your home. It relieves muscle stiffness, reduces joint pain, and improves blood circulation for faster recovery." } },
    { "@type": "Question", name: "How do I book a home physiotherapy session in Theni?", acceptedAnswer: { "@type": "Answer", text: "Call us or fill the contact form on therapyathome.in. We will confirm your appointment and send a therapist to your home at your preferred time." } },
  ],
}

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#F7FAFE] lg:py-36 overflow-hidden section-deferred-services">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Background Blobs for Glassmorphism */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-primary/10 blur-[120px] blur-blob" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-secondary-foreground/10 blur-[120px] blur-blob" />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-14 text-center flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 backdrop-blur-md mb-4">
            What We Treat
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg font-medium text-foreground/70 max-w-2xl mx-auto md:text-xl">
            Professional physiotherapy and Ayurveda treatments — delivered to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl glass-card glass-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={service.image} alt={service.title} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold tracking-tight text-heading mb-3">{service.title}</h3>
                <p className="text-base leading-relaxed text-foreground/70 mb-5 flex-1">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  Book a Home Visit <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
