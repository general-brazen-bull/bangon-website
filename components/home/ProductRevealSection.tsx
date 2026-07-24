"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function ProductRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle(
          "light-header-section",
          entry.isIntersecting
        )
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(section)

    return () => {
      document.body.classList.remove("light-header-section")
      observer.disconnect()
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  /**
   * Bottle transitions
   * Order: Atomic Peach → Green Apple → Big Banana → Tropical → Ripe Raspberry
   */
  const peachOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.14, 0.21],
    [1, 1, 0]
  )
  const peachX = useTransform(scrollYProgress, [0.0, 0.21], [0, -200])

  const appleOpacity = useTransform(
    scrollYProgress,
    [0.19, 0.31, 0.4],
    [0, 1, 0]
  )
  const appleX = useTransform(scrollYProgress, [0.19, 0.4], [200, -200])

  const bananaOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.59],
    [0, 1, 0]
  )
  const bananaX = useTransform(scrollYProgress, [0.38, 0.59], [200, -200])

  const tropicalOpacity = useTransform(
    scrollYProgress,
    [0.57, 0.69, 0.78],
    [0, 1, 0]
  )
  const tropicalX = useTransform(scrollYProgress, [0.57, 0.78], [200, -200])

  const raspberryOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.9],
    [0, 1]
  )
  const raspberryX = useTransform(scrollYProgress, [0.76, 0.9], [200, 0])

  /**
   * Text transitions
   */
  const peachTextOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.14, 0.21],
    [1, 1, 0]
  )

  const appleTextOpacity = useTransform(
    scrollYProgress,
    [0.19, 0.31, 0.4],
    [0, 1, 0]
  )

  const bananaTextOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.59],
    [0, 1, 0]
  )

  const tropicalTextOpacity = useTransform(
    scrollYProgress,
    [0.57, 0.69, 0.78],
    [0, 1, 0]
  )

  const raspberryTextOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.9],
    [0, 1]
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="relative bg-white"
    >
      {/* Scroll fuel */}
      <div className="h-[340vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* LEFT — TEXT */}
            <div>
              <h2
                className="
                  text-black
                  text-6xl md:text-8xl lg:text-9xl
                  font-extrabold
                  uppercase
                  tracking-tight
                  leading-[0.9]
                "
              >
                Flavours
                <br />
                That Hit Different
              </h2>

              <div className="relative mt-10 h-40">
                {/* Atomic Peach text */}
                <motion.div
                  style={{ opacity: peachTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-[#ff7a1a] text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Atomic Peach
                  </p>
                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    Juicy peach flavour with a sweet opening and a high-proof
                    finish. Bright, bold, and built to explode.
                  </p>
                </motion.div>

                {/* Green Apple text */}
                <motion.div
                  style={{ opacity: appleTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-[#95cb00] text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Green Apple
                  </p>
                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    Fresh green apple flavour with a clean finish. Bright,
                    punchy, and dangerously easy to drink.
                  </p>
                </motion.div>

                {/* Banana text */}
                <motion.div
                  style={{ opacity: bananaTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-yellow-400 text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Big Banana
                  </p>
                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    The banana liqueur you remember from your past, but made
                    better and bolder. Balanced, redefined, unforgettable.
                  </p>
                </motion.div>

                {/* Tropical text */}
                <motion.div
                  style={{ opacity: tropicalTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-[#2596be] text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Tropical Mayhem
                  </p>
                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    Pineapple, coconut, and citrus flavours with a bold
                    island-inspired punch. Sweet, bright, and finished with a
                    smooth Bang On kick.
                  </p>
                </motion.div>

                {/* Raspberry text */}
                <motion.div
                  style={{ opacity: raspberryTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-pink-500 text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Ripe Raspberry
                  </p>
                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    Sweet-crisp punch that hits different. Berry bold. When life
                    gives you raspberries, make them 99 proof.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* RIGHT — BOTTLES */}
            <div className="relative h-[560px] md:h-[700px] flex items-center justify-center">
              {/* Atomic Peach bottle */}
              <motion.div
                style={{
                  opacity: peachOpacity,
                  x: peachX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/atomic-peach-bottles.png"
                  alt="Bang On Atomic Peach"
                  width={650}
                  height={700}
                  priority
                />
              </motion.div>

              {/* Green Apple bottle */}
              <motion.div
                style={{
                  opacity: appleOpacity,
                  x: appleX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/apple-bottle.png"
                  alt="Bang On Green Apple"
                  width={650}
                  height={700}
                />
              </motion.div>

              {/* Banana bottle */}
              <motion.div
                style={{
                  opacity: bananaOpacity,
                  x: bananaX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/banana-bottles.png"
                  alt="Bang On Big Banana"
                  width={650}
                  height={700}
                />
              </motion.div>

              {/* Tropical bottle */}
              <motion.div
                style={{
                  opacity: tropicalOpacity,
                  x: tropicalX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/tropical-bottle.png"
                  alt="Bang On Tropical"
                  width={650}
                  height={700}
                />
              </motion.div>

              {/* Raspberry bottle */}
              <motion.div
                style={{
                  opacity: raspberryOpacity,
                  x: raspberryX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/raspberry-bottle.png"
                  alt="Bang On Ripe Raspberry"
                  width={650}
                  height={700}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}