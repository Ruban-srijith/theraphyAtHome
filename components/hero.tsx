"use client"
import { useCallback } from "react"
import { ArrowRight, MapPin, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" })
    }, []
  )

  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(10,132,255,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-7">
              <MapPin className="h-4 w-4" />
              Serving Theni & Coimbatore
            </div>

            <h1 className="animate-fade-up text-5xl font-extrabold leading-[1.06] tracking-tight text-heading sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
              Home<br />Physiotherapy
              <br /><span className="text-primary">in Theni & Coimbatore.</span>
            </h1>

            <p className="animate-fade-up delay-200 mx-auto mt-7 max-w-lg text-lg font-medium leading-relaxed text-foreground/70 sm:text-xl lg:mx-0">
              Expert neck pain, back pain & steam therapy — delivered at your doorstep. Recover faster from home.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-105">
                Book Appointment
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-9 py-4 text-base font-medium text-foreground shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                Our Services
              </a>
            </div>

            {/* Social proof */}
            <div className="animate-fade-up delay-400 mt-8 flex items-center justify-center gap-2.5 lg:justify-start">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-base text-muted-foreground">Trusted by 500+ patients in Theni</span>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-border aspect-square">
                <Image src="/images/hero.jpg"
                  alt="Home physiotherapy treatment for neck and back pain in Theni"
                  fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-white px-6 py-4 shadow-xl">
                <p className="text-2xl font-extrabold text-primary">#1</p>
                <p className="text-sm text-muted-foreground mt-0.5">Home Physio in Theni & Coimbatore
                  
                </p>
              </div>
              <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-500 ring-2 ring-white">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
