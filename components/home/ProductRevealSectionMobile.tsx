"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductRevealSectionMobile() {
  return (
    <section className="bg-white px-6 py-20 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="
          text-black
          text-5xl
          font-extrabold
          uppercase
          tracking-tight
          leading-[0.95]
          mb-12
        "
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Flavours
        <br />
        That Hit Different
      </motion.h2>

      {/* GREEN APPLE */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/assets/apple-bottle.png"
            alt="Bang On Green Apple"
            width={300}
            height={420}
            priority
          />
        </motion.div>

        <p className="text-[#95cb00] text-4xl font-extrabold uppercase tracking-tight mb-4">
          Green Apple
        </p>

        <p className="text-black text-lg leading-relaxed max-w-md">
          Crisp green apple flavour that goes down easy and hits hard.
        </p>
      </div>

      {/* BIG BANANA */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/assets/banana-bottle.png"
            alt="Bang On Big Banana"
            width={300}
            height={420}
          />
        </motion.div>

        <p className="text-yellow-400 text-4xl font-extrabold uppercase tracking-tight mb-4">
          Big Banana
        </p>

        <p className="text-black text-lg leading-relaxed max-w-md">
          The banana liqueur you remember from your past, but made better and
          bolder. Balanced, redefined, unforgettable.
        </p>
      </div>

      {/* RIPE RASPBERRY */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/assets/raspberry-bottle.png"
            alt="Bang On Ripe Raspberry"
            width={300}
            height={420}
          />
        </motion.div>

        <p className="text-pink-500 text-4xl font-extrabold uppercase tracking-tight mb-4">
          Ripe Raspberry
        </p>

        <p className="text-black text-lg leading-relaxed max-w-md">
          Sweet-crisp punch that hits different. Berry bold. When life gives you
          raspberries, make them 99 proof.
        </p>
      </div>
    </section>
  )
}