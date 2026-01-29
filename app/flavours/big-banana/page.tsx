"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const cocktailSuggestions = [
  {
    name: "Banana Velvet Shot",
    ingredients: "Big Banana + Bailey's",
    image: "/assets/banana-velvet.webp",

  },
  {
    name: "Tropical Bang",
    ingredients: "Big Banana + coconut rum + pineapple juice",
    image: "/assets/tropical-bang.webp",

  },
  {
    name: "Monkey Business",
    ingredients: "Big Banana + Kahlua liqueur + Bailey's",
    image: "/assets/monkey-business.webp",

  },
]

export default function BigBananaPage() {
  const bottleRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: bottleRef,
    offset: ["start end", "end start"],
  })

  const bottleY = useTransform(scrollYProgress, [0, 1], ["20%", "-45%"])
  const bottleScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1])

  return (
    <main>
      <Header />

      {/* Hero Section - Neutral */}
      <section className="min-h-[60vh] bg-[#f5f5f5] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            className="text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] text-[#0a0a0a]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="block">BIG</span>
            <span className="block text-[#f94a02]">BANANA</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#525252] mt-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            99 proof of pure banana mayhem. Carefully crafted with twice distilled premium spirit and balanced flavour which provides a clean lip-smacking finish.
          </motion.p>
        </div>
      </section>

      {/* Full Colour Block - The Main Event */}
      <section
        ref={bottleRef}
        className="py-32 md:py-40 bg-[#f3db03] relative overflow-hidden"
      >
        {/* Background decorative text */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 0.1, rotate: -2 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[37vw] text-[#0a0a0a] leading-none">BANG</span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image with Parallax */}
            
            <motion.div
  className="flex justify-center"
  style={{ y: bottleY }}
>
<div className="relative w-80 aspect-[1/2] overflow-visible">
  <Image
    src="/assets/banana-bottle.png"
    alt="Big Banana bottle"
    fill
    className="object-contain scale-[1.28] md:scale-[1.45] lg:scale-[1.7]"
    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
    priority
  />
</div>

</motion.div>


            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] mb-8">
                THE DETAILS
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center border-b border-[#0a0a0a]/20 pb-4">
                  <span className="text-lg text-[#0a0a0a]">Proof</span>
                  <span className="text-lg text-[#0a0a0a]">99</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#0a0a0a]/20 pb-4">
                  <span className="text-lg text-[#0a0a0a]">Base</span>
                  <span className="text-lg text-[#0a0a0a]">Twice Distilled Premium Spirit</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#0a0a0a]/20 pb-4">
                  <span className="text-lg text-[#0a0a0a]">Flavour</span>
                  <span className="text-lg text-[#0a0a0a]">Juicy With A Clean Aftertaste</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#0a0a0a]/20 pb-4">
                  <span className="text-lg text-[#0a0a0a]">Origin</span>
                  <span className="text-lg text-[#0a0a0a]">British Columbia, Canada</span>
                </div>
              </div>

              <p className="text-lg text-[#0a0a0a] mb-12">
                Balanced, redefined, unforgettable. The banana you remember from
                your past, but made better and bolder. Super
                concentrated for maximum impact.
              </p>

              <a
                href="https://deepbluedistilleries.ca/product/bang-on-big-banana-99-proof-liqueur/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f94a02] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300"
              >
                SHOP NOW
              </a>
            </motion.div>
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
          className="bg-[#f5f5f5] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-black">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              className="object-cover"
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
      className="inline-block text-[#ff3672] hover:text-[#0a0a0a] transition-colors text-lg"
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
            READY TO GO BANANAS?
          </motion.h2>
          <Link
            href="/where-to-buy"
            className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300"
          >
            FIND BANG ON →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
