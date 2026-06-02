"use client"

const WA_NUMBER = "919342705088"
const WA_MESSAGE = "Hi! I'd like to book a home physiotherapy session in Theni."

export function WhatsAppButton() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-300 hover:scale-110"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.9 1.96 7.02L2 30l7.18-1.88A13.92 13.92 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.43 11.43 0 01-5.82-1.59l-.42-.25-4.26 1.12 1.13-4.14-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.14.66-.1 2.02-.83 2.31-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.66-.4z"/>
      </svg>

      {/* Tooltip label */}
      <span className="pointer-events-none absolute right-[4.5rem] whitespace-nowrap rounded-xl bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  )
}
