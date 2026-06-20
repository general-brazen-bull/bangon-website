"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PeachSection() {
  return (
    <section className="py-32 md:py-40 bg-[#ff7a1a] relative overflow-hidden">
      {/* Background decorative rotated text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
        whileInView={{ opacity: 0.15, rotate: -2, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[30vw] md:text-[25vw] text-[#0a0a0a] leading-none whitespace-nowrap block">
          ATOMIC
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start">
          {/* Stacked headline */}
          <motion.h2
            className="text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">ATOMIC</span>
            <span className="block">PEACH</span>
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
              Juicy peach flavour. Twice distilled premium spirit. 99 proof.
            </p>

            <p className="text-lg md:text-xl text-[#0a0a0a]">
              Sweet, bold, and explosive with a smooth Bang On kick.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/flavours/atomic-peach"
              className="inline-block bg-[#ffd400] text-[#0a0a0a] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors duration-300"
            >
              EXPLORE ATOMIC PEACH →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}