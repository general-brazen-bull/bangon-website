"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function RaspberrySectionMobile () {
  return (
    <section className="py-32 md:py-40 bg-[#ff3672] relative overflow-hidden">
      {/* Background decorative rotated text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
        whileInView={{ opacity: 0.15, rotate: -2, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[25vw] md:text-[30vw] text-[#0a0a0a] leading-none whitespace-nowrap block">
        RASPBERRY
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start">
          {/* Stacked headline */}
          <motion.h2
            className="text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#ffffff] mb-12 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">RIPE</span>
            <span className="block">RASPBERRY</span>
          </motion.h2>

          {/* Product facts */}
          <motion.div
            className="space-y-4 mb-12 text-left max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-[#0a0a0a]">
              Made with twice distilled premium spirit. Balanced flavours. 99 proof.
            </p>
            <p className="text-lg md:text-xl text-[#0a0a0a]">
            Super concentrated for maximum impact.
            </p>
          </motion.div>

          {/* Mobile bottle */}
          <motion.div
  className="mb-12 flex justify-center w-full md:hidden"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.25 }}
>
  <Image
    src="/assets/raspberry-bottle.png"
                  alt="Bang On Ripe Raspberry"
    width={300}
    height={400}
    className="h-auto w-[68%] max-w-[300px]"
    priority
  />
</motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/flavours/big-banana"
              className="inline-block bg-[#006ad7] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              EXPLORE RIPE RASPBERRY →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
