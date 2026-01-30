"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import { ScrubLine } from "@/components/ScrubLine"
import { BangOnBox } from "@/components/BangOnBox"

export default function BangOnManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 98%", "end 15%"],
  })

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Scroll fuel */}
      <div className="h-[320vh]">
        {/* Pinned viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div
            className="
              w-full
              max-w-[1200px]
              mx-auto
              px-[clamp(1.25rem,4vw,3rem)]
              text-center
              space-y-[clamp(1.25rem,3vh,2.25rem)]
            "
          >
            <ScrubLine
              text="FROM PRE-GAME TO"
              progress={scrollYProgress}
              range={[0.05, 0.10]}
              className="whitespace-nowrap leading-[0.8] text-white" 
            />

            <ScrubLine
              text="LAST CALL, BUILT"
              progress={scrollYProgress}
              range={[0.12, 0.17]}
              className="whitespace-nowrap leading-[0.8] text-white" 
            />

            <div className="flex justify-center items-center text-yellow-400 whitespace-nowrap">
              <ScrubLine
                text="TO KEEP YOU LIT"
                progress={scrollYProgress}
                range={[0.30, 0.35]}
                className="whitespace-nowrap leading-[0.8]" 
              />
            </div>

            <ScrubLine
              text="LEVEL UP YOUR NIGHT."
              progress={scrollYProgress}
              range={[0.40, 0.45]}
              className="whitespace-nowrap leading-[0.8] text-white xl:translate-x-[-0.35ch]
    2xl:translate-x-[-0.45ch]" 
            />

            <div className="flex justify-center items-center gap-5 whitespace-nowrap">
              <ScrubLine
                text="GET YOUR"
                progress={scrollYProgress}
                range={[0.50, 0.55]}
                className="whitespace-nowrap leading-[0.8] text-white" 

              />

              <BangOnBox progress={scrollYProgress} />

              <ScrubLine
                text="RIGHT."
                progress={scrollYProgress}
                range={[0.58, 0.65]}
                className="whitespace-nowrap leading-[0.8 text-white" 

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
