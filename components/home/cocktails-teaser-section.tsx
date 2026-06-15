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
    name: "Tropical Bang On",
    description: "Tropical + coconut rum + pineapple",
    flavour: "Tropical",
    image: "/assets/tropical-bang.webp",
  },
  {
    name: "Banana Velvet Shot",
    description: "Bang On Big Banana + Bailey's liqueur",
    flavour: "Big Banana",
    image: "/assets/banana-velvet.webp",
  },
]

export function CocktailsTeaserSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.name}
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
                className={`text-lg md:text-sm xl:text-base block mb-6 font-medium ${
                  cocktail.flavour === "Big Banana"
                    ? "text-[#f94a02]"
                    : cocktail.flavour === "Ripe Raspberry"
                    ? "text-[#ff3672]"
                    : cocktail.flavour === "Tropical"
                    ? "text-[#2596be]"
                    : "text-[#95cb00]"
                }`}
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
          ))}
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