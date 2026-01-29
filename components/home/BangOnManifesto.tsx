"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ScrubLine } from "@/components/ScrubLine"

export default function BangOnManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  /**
   * Fast reveal — user scrubs quickly
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 98%", "end 15%"],
  })

  /**
   * BANG ON stamp — realigned to FAST ranges
   * Appears AFTER "Get your" starts
   * Fully visible before section ends
   */
  const boxOpacity = useTransform(scrollYProgress, [0.54, 0.58], [0, 1])
  const boxScale = useTransform(scrollYProgress, [0.54, 0.58], [1.25, 1])
  const boxRotate = useTransform(scrollYProgress, [0.54, 0.58], [-8, 0])
  const boxY = useTransform(scrollYProgress, [0.54, 0.58], [18, 0])

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Scroll fuel */}
      <div className="h-[350vh]">
        {/* Pinned viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-full max-w-[1200px] px-6 text-center space-y-5 whitespace-normal md:whitespace-nowrap">

            {/* LINE 1 */}
            <div className="flex items-center justify-center">
              <ScrubLine
                text="from pre-game to last call,"
                progress={scrollYProgress}
                range={[0.05, 0.10]}
              />
            </div>

            {/* LINE 2 */}
            <div className="flex justify-center items-center gap-3 whitespace-normal md:whitespace-nowrap">
              <ScrubLine
                text="Built to keep you"
                progress={scrollYProgress}
                range={[0.30, 0.35]}
              />

              <motion.span
                style={{
                  opacity: useTransform(scrollYProgress, [0.34, 0.40], [0, 1]),
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
                className="
                  text-yellow-400
                  text-6xl md:text-8xl lg:text-9xl
                  font-extrabold
                  uppercase
                  tracking-tight
                  leading-[0.95]
                "
              >
                lit.
              </motion.span>
            </div>

            {/* LINE 3 */}
            <ScrubLine
              text="Level up your night."
              progress={scrollYProgress}
              range={[0.40, 0.45]}
            />

            {/* FINAL LINE */}
            <div className="flex justify-center items-center gap-4 whitespace-normal md:whitespace-nowrap">
              <ScrubLine
                text="Get your"
                progress={scrollYProgress}
                range={[0.50, 0.55]}
              />

              <motion.span
                style={{
                  opacity: boxOpacity,
                  scale: boxScale,
                  rotate: boxRotate,
                  y: boxY,
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
                  px-10 py-4
                  bg-[#ff3672]
                  text-black
                  uppercase
                  tracking-tight
                  font-extrabold
                  text-6xl md:text-8xl lg:text-9xl
                  leading-[0.9]
                  shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                "
              >
                Bang On
              </motion.span>

              <ScrubLine
                text="right."
                progress={scrollYProgress}
                range={[0.58, 0.65]}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
