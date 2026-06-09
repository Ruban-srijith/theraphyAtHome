import Image from "next/image"

const stats = [
  { value: "500+", label: "Patients Served" },
  { value: "7", label: "Days a Week" },
  { value: "12", label: "Treatments" },
  { value: "100%", label: "Home Visits" },
]

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
              <Image src="/images/about.jpg"
                alt="Therapy at Home physiotherapist treating patient at home in Theni & Coimbatore"
                width={600} height={450} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-extrabold text-primary">4.9★</p>
              <p className="mt-1 text-sm text-muted-foreground">Patient Rating</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
              Physiotherapy at<br />your home in Theni & Coimbatore.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Therapy at Home brings professional physiotherapy directly to your doorstep in Theni & Coimbatore. We specialise in treating neck pain, back pain and providing steam therapy — without you leaving home.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our trained therapists visit with all necessary equipment and create personalised treatment plans for real relief and lasting recovery.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <p className="text-3xl font-extrabold text-heading md:text-4xl">{stat.value}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
