"use client"

import { motion, MotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function ScrubLine({
  text,
  progress,
  range,
  className,
}: {
  text: string
  progress: MotionValue<number>
  range: [number, number]
  className?: string
}) {
  const words = text.split(" ")

  return (
    <h2
      className={cn(
        `
        text-center
        font-extrabold
        uppercase
        tracking-tight
        leading-[0.9]
        text-[clamp(4.3rem,7.5vw,8.5rem)]
        `,
        className
      )}
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
