"use client"

import { motion, MotionValue, useTransform } from "framer-motion"

export function ScrubLine({
  text,
  progress,
  range,
}: {
  text: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const words = text.split(" ")

  return (
    <h2
      className="
        text-center
        text-7xl md:text-8xl lg:text-9xl
        leading-[0.85]
        font-extrabold
        uppercase
        tracking-tight
        text-white
      "
    >
      {words.map((word, i) => {
        const start =
          range[0] + (i / words.length) * (range[1] - range[0])
        const end = start + (range[1] - range[0]) / words.length

        const opacity = useTransform(progress, [start, end], [0.15, 1])

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block mx-[0.15em]"
          >
            {word}
          </motion.span>
        )
      })}
    </h2>
  )
}
