
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function EspressoSection() {
  return (
    <section className="relative overflow-hidden bg-[#8B3E0F] py-32 md:py-40">
      {/* Background decorative rotated text */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
        whileInView={{ opacity: 0.15, rotate: -2, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block whitespace-nowrap text-[30vw] leading-none text-[#0a0a0a] md:text-[25vw]">
          ESPRESSO
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start md:items-end">

          {/* Stacked headline */}
          <motion.h2
            className="
              mb-12
              text-left
              text-[18vw]
              leading-[0.85]
              text-[#fafafa]
              md:text-right
              md:text-[15vw]
              lg:text-[12vw]
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">ESPRESSO</span>
            <span className="block text-[#FFD400]">RUSH</span>
          </motion.h2>

          {/* Product facts */}
          <motion.div
            className="mb-12 max-w-xl space-y-4 text-left md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-[#fafafa] md:text-2xl">
              Rich espresso flavour. Twice distilled premium spirit.
              99 proof.
            </p>

            <p className="text-lg text-[#fafafa] md:text-xl">
              Deep coffee notes, balanced sweetness, and a bold,
              smooth Bang On kick.
            </p>
          </motion.div>

          {/* Mobile bottle */}
          <motion.div
            className="mb-12 flex w-full justify-center md:hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Image
              src="/assets/espresso-bottle.png"
              alt="Bang On Espresso 50 mL and 200 mL bottles"
              width={400}
              height={400}
              className="h-auto w-[85%] max-w-[400px] object-contain"
              priority
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            className="self-start md:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/flavours/espresso"
              className="inline-block rounded bg-[#FFD400] px-6 py-3 text-base text-[#0a0a0a] transition-colors duration-300 hover:bg-[#0a0a0a] hover:text-[#fafafa]"
            >
              EXPLORE ESPRESSO →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
