"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function GreenappleSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
      { threshold: 0.35 }
    )

    observer.observe(section)

    return () => {
      document.body.classList.remove("light-header-section")
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="relative overflow-hidden bg-[#95cb00] py-32 md:py-40"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
        whileInView={{ opacity: 0.15, rotate: -2, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block whitespace-nowrap text-[30vw] leading-none text-[#0a0a0a] md:text-[25vw]">
          GREEN APPLE
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start md:items-end">
          <motion.h2
            className="
              mb-12
              text-left
              text-[20vw]
              leading-[0.85]
              text-[#0a0a0a]
              md:text-right
              md:text-[15vw]
              lg:text-[12vw]
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">GREEN</span>
            <span className="block">APPLE</span>
          </motion.h2>

          <motion.div
            className="mb-12 max-w-xl space-y-4 text-left md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-[#0a0a0a] md:text-2xl">
              Crisp green apple flavour. Twice distilled premium spirit. 99
              proof.
            </p>

            <p className="text-lg text-[#0a0a0a]/80 md:text-xl">
              Sharp, juicy, and built to hit hard.
            </p>
          </motion.div>

          <motion.div
            className="mb-12 flex w-full justify-center md:hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Image
              src="/assets/apple-bottle.png"
              alt="Bang On Green Apple"
              width={300}
              height={400}
              className="h-auto w-[68%] max-w-[300px]"
              priority
            />
          </motion.div>
          
          <motion.div
            className="self-start md:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/flavours/green-apple"
              className="inline-block rounded bg-[#f94a02] px-6 py-3 text-base text-[#fafafa] transition-colors duration-300 hover:bg-[#0a0a0a]"
            >
              EXPLORE GREEN APPLE →
            </Link>
          </motion.div>

         
        </div>
      </div>
    </section>
  )
}