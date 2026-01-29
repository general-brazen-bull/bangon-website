"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AgeGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const allowed = localStorage.getItem("bangon_age_verified")
    if (!allowed) {
      setShow(true)
      document.body.style.overflow = "hidden"
    }
  }, [])

  const confirmAge = () => {
    localStorage.setItem("bangon_age_verified", "true")
    setShow(false)
    document.body.style.overflow = ""
  }

  const denyAge = () => {
    window.location.href = "https://www.responsibility.org/prevent-underage-drinking/"  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="
            fixed inset-0 z-[100]
            bg-black/80
            backdrop-blur-sm
            flex items-center justify-center
            px-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="
              max-w-md w-full
              text-center
              rounded-xl
              border border-[#f3db03]
              bg-black/80
              backdrop-blur-xl
              shadow-2xl
              px-8 py-10
            "
          >
            <h1
              className="text-[14vw] md:text-6xl leading-[0.9] mb-6 text-white"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              BANG ON
            </h1>

            <p className="text-white/90 text-lg mb-8">
              You must be of legal drinking age in your province to enter.
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={confirmAge}
                className="
                  bg-[#f94a02]
                  text-black
                  py-4
                  text-xl
                  font-extrabold
                  uppercase
                  rounded
                  hover:bg-[#f3db03]
                  transition-colors
                "
              >
                I’m 19+
              </button>

              <button
                onClick={denyAge}
                className="text-white/90 hover:text-white text-lg underline"
              >
                I’m not of legal drinking age
              </button>
            </div>

            <p className="text-white/70 text-md mt-8">
              Please enjoy responsibly and don't drink and drive
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
