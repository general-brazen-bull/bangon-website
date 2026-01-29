import Link from "next/link"

const footerLinks = [
  { href: "/flavours/big-banana", label: "Big Banana" },
  { href: "/flavours/ripe-raspberry", label: "Ripe Raspberry" },
  { href: "/cocktails", label: "Cocktails" },
  { href: "/where-to-buy", label: "Where to Buy" },
  { href: "/contact", label: "Contact" },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="
                block mb-4
                text-4xl           /* mobile: same scale as page heading */
                md:text-4xl        /* desktop unchanged */
              "
            >
              <h2>BANG ON</h2>
            </Link>

            <p
              className="
                text-xl           /* mobile body text */
                md:text-base      /* desktop unchanged */
                text-[#a3a3a3]
                max-w-xs
              "
            >
              99 proof. Super concentrated. Super delicious.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
          <p
  className="
    text-xl        /* mobile */
    md:text-base   /* desktop FIX */
    text-[#fafafa]
    mb-2
  "
>
  Navigation
</p>


            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-xl           /* mobile body text */
                  md:text-base      /* desktop unchanged */
                  text-[#a3a3a3]
                  hover:text-[#fafafa]
                  transition-colors
                  duration-300
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-4">
          <p
  className="
    text-xl        /* mobile */
    md:text-base   /* desktop FIX */
    text-[#fafafa]
    mb-2
  "
>
  Follow us on social
</p>


            <div className="flex items-center gap-5">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#fafafa] transition-colors duration-300"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#fafafa] transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal — unchanged */}
        <div className="border-t border-[#262626] pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[#737373] text-md">
            Proudly crafted in British Columbia. Drink responsibly. Must be 19+.
          </p>
          <p className="text-[#737373] text-md">
            © 2026 Brazen Bull Creative
          </p>
        </div>

      </div>
    </footer>
  )
}
