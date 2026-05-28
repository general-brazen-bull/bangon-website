"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FruitNinjaBackground } from "@/components/home/FruitNinjaBackground"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <FruitNinjaBackground />

      <div className="absolute inset-0 z-[1] bg-black/25 pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pointer-events-none"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.h1
          className="text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.9] text-white mb-2 font-black"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          WANNA BANG?
        </motion.h1>

        <motion.div
          className="
            text-[14vw] md:text-[11vw] lg:text-[9vw]
            leading-[0.9]
            text-white
            font-black
            mb-8
            inline-block
            -skew-x-12
          "
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          BANG ON
        </motion.div>

        <motion.p
          className="text-2xl lg:text-3xl text-white mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          99 proof. Super concentrated. Super delicious.
        </motion.p>

        <motion.a
          href="https://deepbluedistilleries.ca/product-tag/bang-on/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-block bg-white text-black px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          SHOP NOW
        </motion.a>
      </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-10 flex flex-col items-center"
>
  <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
    Continue
  </p>

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="text-white text-3xl"
  >
    ↓
  </motion.div>
</motion.div>
    </section>
  )
}