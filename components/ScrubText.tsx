"use client"

import { motion } from "framer-motion"

export function ScrubText({
  text,
  highlight = false,
}: {
  text: string
  highlight?: boolean
}) {
  const words = text.split(" ")

  return (
    <motion.h2
      className={`text-5xl md:text-6xl lg:text-7xl leading-tight flex flex-wrap gap-x-3 ${
        highlight ? "text-[#ff3672]" : "text-white"
      }`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{
            duration: 0.4,
            delay: i * 0.06,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}
