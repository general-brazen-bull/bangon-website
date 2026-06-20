"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const cocktails = [
  {
    name: "Apple Jacked",
    description: "Green Apple + whisky + ginger ale",
    flavour: "Bang On Green Apple",
    image: "/assets/apple-jacked.webp",
  },
  {
    name: "Raspberry Rumble",
    description: "Ripe Raspberry + vodka + lime + soda",
    flavour: "Ripe Raspberry",
    image: "/assets/raspberry-rumble.webp",
  },
  {
    name: "Tropical Bang On",
    description: "Tropical + coconut rum + pineapple",
    flavour: "Tropical",
    image: "/assets/tropical-bang.webp",
  },
  {
    name: "Peach Fizz",
    description: "Atomic Peach + sparkling wine + orange twist",
    flavour: "Atomic Peach",
    image: "/assets/peach-fizz.png",
  },
  {
    name: "Banana Velvet Shot",
    description: "Bang On Big Banana + Bailey's liqueur",
    flavour: "Big Banana",
    image: "/assets/banana-velvet.webp",
  },
]

function flavourColour(flavour: string) {
  if (flavour === "Big Banana") return "text-[#f94a02]"
  if (flavour === "Ripe Raspberry") return "text-[#ff3672]"
  if (flavour === "Tropical") return "text-[#2596be]"
  if (flavour === "Atomic Peach") return "text-[#ff7a1a]"
  return "text-[#95cb00]"
}

function CocktailCard({
  cocktail,
  index,
}: {
  cocktail: (typeof cocktails)[number]
  index: number
}) {
  return (
    <motion.div
      className="bg-white p-8 group rounded-sm transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <h3 className="text-3xl md:text-2xl xl:text-3xl text-[#0a0a0a] mb-3 font-bold">
        {cocktail.name}
      </h3>

      <p className="text-lg md:text-base xl:text-lg tracking-tight text-[#525252] mb-3">
        {cocktail.description}
      </p>

      <span
        className={`text-lg md:text-sm xl:text-base block mb-6 font-medium ${flavourColour(
          cocktail.flavour
        )}`}
      >
        Made with {cocktail.flavour}
      </span>

      <div className="relative w-full aspect-[4/5] overflow-hidden bg-black rounded-sm">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </motion.div>
  )
}

export function CocktailsTeaserSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const maxIndex = cocktails.length - 3

  const nextSlide = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1))
  }

  return (
<section data-header-theme="light" className="py-20 md:py-28 bg-[#f5f5f5]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-5xl md:text-5xl lg:text-6xl text-[#0a0a0a] text-center mb-16 font-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          COCKTAILS THAT GO BANG
        </motion.h2>

        {/* MOBILE / TABLET — SAME STACKED LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 lg:hidden">
          {cocktails.map((cocktail, index) => (
            <CocktailCard
              key={cocktail.name}
              cocktail={cocktail}
              index={index}
            />
          ))}
        </div>

        {/* DESKTOP — CAROUSEL */}
        <div className="hidden lg:block mb-12">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${activeIndex} * (33.333333% + 16px))` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {cocktails.map((cocktail, index) => (
                <div
                  key={cocktail.name}
                  className="min-w-[calc(33.333333%-16px)]"
                >
                  <CocktailCard cocktail={cocktail} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prevSlide}
              className="bg-[#0a0a0a] text-[#fafafa] w-12 h-12 rounded-full hover:bg-[#f94a02] transition-colors duration-300"
              aria-label="Previous cocktails"
            >
              ←
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? "bg-[#f94a02]" : "bg-[#0a0a0a]/25"
                  }`}
                  aria-label={`Go to cocktail slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="bg-[#0a0a0a] text-[#fafafa] w-12 h-12 rounded-full hover:bg-[#f94a02] transition-colors duration-300"
              aria-label="Next cocktails"
            >
              →
            </button>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/cocktails"
            className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300"
          >
            VIEW ALL COCKTAILS →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}