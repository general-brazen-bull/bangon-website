
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
   *
   * Order:
   * Espresso → Atomic Peach → Green Apple →
   * Big Banana → Tropical → Ripe Raspberry
   */

  // ESPRESSO
  const espressoOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.11, 0.18],
    [1, 1, 0]
  )

  const espressoX = useTransform(
    scrollYProgress,
    [0.0, 0.18],
    [0, -200]
  )

  // ATOMIC PEACH
  const peachOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.25, 0.34],
    [0, 1, 0]
  )

  const peachX = useTransform(
    scrollYProgress,
    [0.16, 0.34],
    [200, -200]
  )

  // GREEN APPLE
  const appleOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.41, 0.50],
    [0, 1, 0]
  )

  const appleX = useTransform(
    scrollYProgress,
    [0.32, 0.50],
    [200, -200]
  )

  // BIG BANANA
  const bananaOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.57, 0.66],
    [0, 1, 0]
  )

  const bananaX = useTransform(
    scrollYProgress,
    [0.48, 0.66],
    [200, -200]
  )

  // TROPICAL
  const tropicalOpacity = useTransform(
    scrollYProgress,
    [0.64, 0.73, 0.82],
    [0, 1, 0]
  )

  const tropicalX = useTransform(
    scrollYProgress,
    [0.64, 0.82],
    [200, -200]
  )

  // RIPE RASPBERRY
  const raspberryOpacity = useTransform(
    scrollYProgress,
    [0.80, 0.91],
    [0, 1]
  )

  const raspberryX = useTransform(
    scrollYProgress,
    [0.80, 0.91],
    [200, 0]
  )

  /**
   * Text transitions
   * Synchronized with the bottle animations
   */

  const espressoTextOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.11, 0.18],
    [1, 1, 0]
  )

  const peachTextOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.25, 0.34],
    [0, 1, 0]
  )

  const appleTextOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.41, 0.50],
    [0, 1, 0]
  )

  const bananaTextOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.57, 0.66],
    [0, 1, 0]
  )

  const tropicalTextOpacity = useTransform(
    scrollYProgress,
    [0.64, 0.73, 0.82],
    [0, 1, 0]
  )

  const raspberryTextOpacity = useTransform(
    scrollYProgress,
    [0.80, 0.91],
    [0, 1]
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="relative bg-white"
    >
      {/* SCROLL FUEL */}
      <div className="h-[400vh]">
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

                {/* ESPRESSO TEXT */}
                <motion.div
                  style={{ opacity: espressoTextOpacity }}
                  className="absolute inset-0"
                >
                  <p className="text-[#8B3E0F] text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
                    Espresso
                  </p>

                  <p className="mt-3 text-black text-lg md:text-xl max-w-md">
                    Rich espresso flavour with deep coffee notes,
                    balanced sweetness, and a bold, smooth 99-proof
                    Bang On kick.
                  </p>
                </motion.div>

                {/* ATOMIC PEACH TEXT */}
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

                {/* GREEN APPLE TEXT */}
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

                {/* BIG BANANA TEXT */}
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

                {/* TROPICAL TEXT */}
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

                {/* RIPE RASPBERRY TEXT */}
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

              {/* ESPRESSO BOTTLES */}
              <motion.div
                style={{
                  opacity: espressoOpacity,
                  x: espressoX,
                }}
                className="absolute"
              >
                <Image
                  src="/assets/espresso-bottle.png"
                  alt="Bang On Espresso 50 mL and 200 mL bottles"
                  width={650}
                  height={700}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* ATOMIC PEACH BOTTLES */}
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
                />
              </motion.div>

              {/* GREEN APPLE BOTTLES */}
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

              {/* BIG BANANA BOTTLES */}
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

              {/* TROPICAL BOTTLES */}
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

              {/* RIPE RASPBERRY BOTTLES */}
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
