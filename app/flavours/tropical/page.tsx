"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cocktailSuggestions = [
  {
    name: "Tropical Bang On",
    ingredients: "Tropical + coconut rum + pineapple + lime",
    image: "/assets/tropical-bang.webp",
  },
  {
    name: "Blue Lagoon Shot",
    ingredients: "Tropical + vodka + lime + lemonade",
    image: "/assets/blue-lagoon-bang.webp",
  },
  {
    name: "Island Fizz",
    ingredients: "Tropical + orange + pineapple + sparkling wine",
    image: "/assets/island-fizz.webp",
  },
]

export default function TropicalPage() {
  const bottleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: bottleRef,
    offset: ["start end", "end start"],
  })

  const bottleY = useTransform(scrollYProgress, [0, 1], ["20%", "-45%"])

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] bg-[#f5f5f5] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            className="text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] text-[#0a0a0a]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="block">TROPICAL</span>
            <span className="block text-[#2596be]">MAYHEM</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#525252] mt-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            99 proof of tropical mayhem. Built on twice distilled premium spirit
            and bursting with pineapple, coconut, and citrus flavours for a
            bold island-inspired punch. Sweet up front, bright through the
            middle, and finished with a smooth kick that reminds you it's still
            Bang On.
          </motion.p>
        </div>
      </section>

      {/* Full Colour Block */}
      <section
        ref={bottleRef}
        className="py-32 md:py-40 bg-[#2596be] relative overflow-hidden"
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0, skewY: 2 }}
          whileInView={{ opacity: 0.1, skewY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[37vw] text-[#fafafa] leading-none">BANG</span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#fafafa] mb-8">
                THE DETAILS
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">Proof</span>
                  <span className="text-lg text-[#fafafa]">99</span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">Base</span>
                  <span className="text-lg text-[#fafafa]">
                    Twice Distilled Premium Spirit
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">Flavour</span>
                  <span className="text-lg text-[#fafafa]">
                    Pineapple, Coconut & Citrus
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">Origin</span>
                  <span className="text-lg text-[#fafafa]">
                    British Columbia, Canada
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#fafafa] mb-12">
                A juicy tropical explosion packed with pineapple, coconut, and
                citrus flavours. Sweet and approachable at first sip, followed
                by a bright island-inspired finish that delivers the
                unmistakable Bang On kick.
              </p>

              <a
                href="https://deepbluedistilleries.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#006ad7] transition-colors duration-300"
              >
                SHOP NOW
              </a>
            </motion.div>

            <div className="relative h-[520px] md:h-[620px] lg:h-[700px] order-1 lg:order-2">
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                style={{ y: bottleY }}
              >
                <div className="relative w-80 aspect-[1/2] overflow-visible">
                  <Image
                    src="/assets/tropical-bottle.png"
                    alt="Bang On Tropical bottle"
                    fill
                    className="object-contain scale-[1.28] md:scale-[1.45] lg:scale-[1.7]"
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktail Suggestions */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            className="text-4xl md:text-5xl text-[#0a0a0a] mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            MIX IT UP
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cocktailSuggestions.map((cocktail, index) => (
              <motion.div
                key={cocktail.name}
                className="bg-[#f5f5f5] p-8 group rounded-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-black rounded-sm">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="text-3xl text-[#0a0a0a] mb-4">
                  {cocktail.name}
                </h3>

                <p className="text-lg text-[#525252]">
                  {cocktail.ingredients}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/cocktails"
            className="inline-block text-[#2596be] hover:text-[#0a0a0a] transition-colors text-lg"
          >
            View all cocktails →
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 md:py-20 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl text-[#0a0a0a] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            READY FOR A TROPICAL BANG?
          </motion.h2>

          <Link
            href="/where-to-buy"
            className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#2596be] transition-colors duration-300"
          >
            FIND BANG ON →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}