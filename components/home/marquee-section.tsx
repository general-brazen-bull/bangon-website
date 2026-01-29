"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const marqueeText = "99 PROOF • SUPER CONCENTRATED • MADE IN BC • "
  // Duplicate text for seamless loop
  const repeatedText = Array(6).fill(marqueeText).join("")

  return (
    <section className="py-16 md:py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <span className="text-4xl md:text-6xl lg:text-7xl text-[#fafafa] px-4">
            {repeatedText}
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl text-[#fafafa] px-4">
            {repeatedText}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
