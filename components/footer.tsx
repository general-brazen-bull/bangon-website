"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type FooterLink = {
  text: string
  href: string
  external?: boolean
}

type FooterCard = {
  title: string
  links: FooterLink[]
}

const footerCards: FooterCard[] = [
  {
    title: "Flavours",
    links: [
      { text: "Big Banana", href: "/flavours/big-banana" },
      { text: "Green Apple", href: "/flavours/green-apple" },
      { text: "Ripe Raspberry", href: "/flavours/ripe-raspberry" },
      { text: "Tropical", href: "/flavours/tropical" },
    ],
  },
  {
    title: "Explore",
    links: [
      { text: "Cocktails", href: "/cocktails" },
      { text: "Where to Buy", href: "/where-to-buy" },
      { text: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop & Social",
    links: [
      {
        text: "Shop Now",
        href: "https://deepbluedistilleries.ca/product-tag/bang-on/",
        external: true,
      },
      {
        text: "Instagram",
        href: "https://instagram.com",
        external: true,
      },
      {
        text: "TikTok",
        href: "https://tiktok.com",
        external: true,
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            {/* BRAND COLUMN */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between space-y-6 mb-6 lg:mb-0 border border-[#262626] p-6 sm:p-8"
            >
              <div>
                <Link
                  href="/"
                  className="block text-4xl text-[#f3db03]"
                >
                  <h2>BANG ON</h2>
                </Link>

                <h3 className="mt-8 text-2xl md:text-3xl leading-tight">
  <span className="text-[#fafafa]">99 Proof.</span>
  <br />
  <span className="text-[#d52b1e]">Proudly Canadian.</span>
  <br />
  <span className="text-[#d52b1e]">Born in BC.</span>
</h3>
</div>

            </motion.div>

            {/* FOOTER CARDS */}
            {footerCards.map((card, index) => {
              let marginClass = ""

              if (index > 0) {
                marginClass = "-mt-px"
              }

              if (index === 0) {
                marginClass += " md:mt-0"
              } else if (index === 1) {
                marginClass += " md:-mt-px md:ml-0"
              } else if (index === 2) {
                marginClass += " md:-mt-px md:-ml-px"
              }

              marginClass += " lg:mt-0"

              if (index > 0) {
                marginClass += " lg:-ml-px"
              }

              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  className={`group relative min-h-[260px] overflow-hidden border border-[#262626] p-6 sm:p-8 transition-colors hover:bg-[#111111] ${marginClass}`}
                >
                  <h4 className="mb-6 text-lg text-[#fafafa]">
                    {card.title}
                  </h4>

                  <ul className="space-y-3">
                    {card.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1 text-base text-[#a3a3a3] transition-colors hover:text-[#fafafa]"
                        >
                          {link.text}

                          {link.external && (
                            <ArrowUpRight className="h-3 w-3" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* HUGE WORDMARK */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center overflow-hidden py-8 md:py-12"
          >
            <span
              aria-hidden="true"
              className="
              select-none
              text-[clamp(5.5rem,16vw,20rem)]
              leading-none
              font-black
              tracking-tighter
              text-[#141414]
              whitespace-nowrap
            "
            >
              BANG ON
            </span>
          </motion.div>

          {/* BOTTOM BAR */}
          <motion.div
            variants={itemVariants}
            className="border-t border-[#262626] pt-8 flex flex-col md:flex-row justify-between gap-4"
          >
            <p className="text-[#737373] text-base">
              Drink responsibly. Must be 19+.
            </p>

            <p className="text-[#737373] text-base">
              © 2026 Brazen Bull Creative
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}