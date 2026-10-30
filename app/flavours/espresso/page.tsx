
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cocktailSuggestions = [
  {
    name: "Espresso Martini",
    ingredients: "Espresso + vodka + freshly brewed espresso",
    image: "/assets/espresso-martini.webp",
  },
  {
    name: "Espresso Velvet",
    ingredients: "Espresso + Irish cream liqueur",
    image: "/assets/espresso-velvet.webp",
  },
  {
    name: "Espresso Rush",
    ingredients: "Espresso + cola + ice",
    image: "/assets/espresso-rush.webp",
  },
]

export default function EspressoPage() {
  const bottleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: bottleRef,
    offset: ["start end", "end start"],
  })

  const bottleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-45%"]
  )

  return (
    <main>
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-[60vh] bg-[#f5f5f5] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            className="text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] text-[#0a0a0a]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="block">BANG ON</span>
            <span className="block text-[#8B3E0F]">
              ESPRESSO
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#525252] mt-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            99 proof of coffee-powered intensity. Built on twice
            distilled premium spirit and packed with rich espresso
            flavour for a bold, smooth, and unmistakable Bang On kick.
            Deep coffee notes, a touch of sweetness, and a powerful
            finish make this one for serious coffee lovers.
          </motion.p>
        </div>
      </section>

      {/* FULL COLOUR PRODUCT SECTION */}
      <section
        ref={bottleRef}
        className="py-32 md:py-40 bg-[#8B3E0F] relative overflow-hidden"
      >
        {/* Background decorative text */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0, skewY: 2 }}
          whileInView={{ opacity: 0.1, skewY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[37vw] text-[#fafafa] leading-none">
            BANG
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* PRODUCT DETAILS */}
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
                  <span className="text-lg text-[#fafafa]">
                    Proof
                  </span>
                  <span className="text-lg text-[#fafafa]">
                    99
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">
                    ABV
                  </span>
                  <span className="text-lg text-[#fafafa]">
                    49.5%
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">
                    Base
                  </span>
                  <span className="text-lg text-[#fafafa] text-right">
                    Twice Distilled Premium Spirit
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">
                    Flavour
                  </span>
                  <span className="text-lg text-[#fafafa]">
                    Rich Espresso
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">
                    Sizes
                  </span>
                  <span className="text-lg text-[#fafafa]">
                    50 mL &amp; 200 mL
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#fafafa]/20 pb-4">
                  <span className="text-lg text-[#fafafa]">
                    Origin
                  </span>
                  <span className="text-lg text-[#fafafa] text-right">
                    British Columbia, Canada
                  </span>
                </div>
              </div>

              <p className="text-lg text-[#fafafa] mb-12">
                Bang On Espresso brings the unmistakable flavour
                of rich coffee together with a smooth, high-proof
                spirit. Bold espresso character, balanced sweetness,
                and a warming finish make it just as good on its
                own as it is mixed into your favourite coffee cocktails.
                Available in 50 mL and 200 mL bottles.
              </p>

              <a
                href="https://deepbluedistilleries.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#FFD400] hover:text-[#0a0a0a] transition-colors duration-300"
              >
                SHOP NOW
              </a>
            </motion.div>

          {/* BOTTLE IMAGE */}
<div className="relative h-[520px] md:h-[620px] lg:h-[700px] order-1 lg:order-2">
  <motion.div
    className="absolute inset-0 flex justify-center items-center"
    style={{ y: bottleY }}
  >
    <div className="relative w-full max-w-[540px] h-[520px] md:h-[620px] lg:h-[700px] scale-[1.2]">
      <Image
        src="/assets/espresso-bottle.png"
        alt="Bang On Espresso liqueur 50 mL and 200 mL bottles"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 650px"
        priority
      />
    </div>
  </motion.div>
</div>

          </div>
        </div>
      </section>

      {/* COCKTAIL SUGGESTIONS */}
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
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
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
            className="inline-block text-[#8B3E0F] hover:text-[#0a0a0a] transition-colors text-lg"
          >
            View all cocktails →
          </Link>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 md:py-20 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl text-[#0a0a0a] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            READY FOR AN ESPRESSO BANG?
          </motion.h2>

          <Link
            href="/where-to-buy"
            className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#FF8A00] transition-colors duration-300"
          >
            FIND BANG ON →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
