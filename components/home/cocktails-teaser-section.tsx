"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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
    name: "Tropical Bang",
    description: "Big Banana + coconut rum + pineapple",
    flavour: "Big Banana",
    image: "/assets/tropical-bang.webp",
  },
]

export function CocktailsTeaserSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADING — UNCHANGED */}
        <motion.h2
          className="text-5xl md:text-5xl lg:text-6xl text-[#0a0a0a] text-center mb-16 font-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          COCKTAILS THAT GO BANG
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.name}
              className="bg-white p-8 group rounded-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* CHANGE 1 — Cocktail name: +1 size on mobile only */}
              <h3 className="text-3xl md:text-3xl text-[#0a0a0a] mb-3 font-bold">
                {cocktail.name}
              </h3>

              <p className="text-lg tracking-tight text-[#525252] mb-3">
                {cocktail.description}
              </p>

              {/* CHANGE 2 — Made with: +1 size on mobile only */}
              <span
                className={`text-lg md:text-sm block mb-6 font-medium ${
                  cocktail.flavour === "Big Banana"
                    ? "text-[#f94a02]"
                    : cocktail.flavour === "Ripe Raspberry"
                    ? "text-[#ff3672]"
                    : "text-[#95cb00]"
                }`}
              >
                Made with {cocktail.flavour}
              </span>

              {/* Image — unchanged */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-black rounded-sm">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA — unchanged */}
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