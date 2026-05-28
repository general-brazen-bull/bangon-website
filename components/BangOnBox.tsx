"use client"

import { motion, MotionValue, useTransform } from "framer-motion"

export function BangOnBox({
  progress,
}: {
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, [0.70, 0.82], [0, 1])
  const scale   = useTransform(progress, [0.70, 0.82], [1.15, 1])
  const rotate  = useTransform(progress, [0.70, 0.82], [-6, 0])
  const y       = useTransform(progress, [0.70, 0.82], [18, 0])

  return (
    <motion.span
      style={{
        opacity,
        scale,
        rotate,
        y,
        fontFamily:
          "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
      }}
      transition={{
        type: "spring",
        stiffness: 520,
        damping: 18,
        mass: 0.6,
      }}
      className="
        inline-block
        bg-[#95cb00]
        text-black
        uppercase
        tracking-tight
        font-extrabold
        leading-[0.9]

        text-[clamp(4.3rem,9vw,10rem)]
        px-[clamp(1.25rem,3vw,2rem)]
        py-[clamp(0.6rem,1.5vw,0.9rem)]

        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
      "
    >
      BANG ON
    </motion.span>
  )
}
