import { Star } from "lucide-react"

const testimonials = [
  { name: "Murugan K", role: "Patient, Theni", quote: "I had severe lower back pain for over a year. Therapy at Home sent a therapist to my house and within a few sessions I felt real relief. No need to travel anywhere.", stars: 5 },
  { name: "Lakshmi S", role: "Patient, Theni", quote: "The neck pain I had from sitting at my desk all day was unbearable. The home physiotherapy treatment fixed it completely. Very professional service.", stars: 5 },
  { name: "Selvam R", role: "Patient,Coimbatore", quote: "Steam therapy at home was very convenient. The therapist came on time with all equipment. My joint pain reduced a lot.", stars: 5 },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden bg-white/30 section-deferred-testimonials">
      {/* Background Blobs for Glassmorphism */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-primary/10 blur-[120px] blur-blob" />
        <div className="absolute bottom-1/3 -left-48 h-96 w-96 rounded-full bg-secondary-foreground/8 blur-[120px] blur-blob" />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 backdrop-blur-md mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
            Trusted by patients.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Real stories from real patients who recovered at home with Therapy at Home.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name}
              className="flex flex-col rounded-2xl glass-card p-8 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-5 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/80 flex-1 md:text-lg">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
