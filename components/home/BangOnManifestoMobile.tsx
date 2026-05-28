"use client"

import { motion } from "framer-motion"

export default function BangOnManifestoMobile() {
  return (
    <section className="bg-black px-6 py-20 text-center overflow-hidden">
      {/* Line 1 */}
      <motion.p
        className="text-white text-5xl font-extrabold uppercase mb-2"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        From pre-game
      </motion.p>

  {/* Line 2 */}
  <motion.p
        className="text-white text-5xl font-extrabold uppercase mb-2"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        to last call,
      </motion.p>

        {/* Line 3 */}
        <motion.p
        className="text-white text-5xl font-extrabold uppercase mb-2"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        Built to
      </motion.p>

  {/* Line 4 */}
  <motion.p
        className="text-[#fd0] text-5xl font-extrabold uppercase mb-2"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        keep you LIT.
      </motion.p>

      {/* Line 5 */}
      <motion.p
        className="text-white text-5xl font-extrabold uppercase mb-2"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        Level up your
      </motion.p>

      {/* Line 5 */}
      <motion.p
        className="text-white text-5xl font-extrabold uppercase"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        night. Get your
      </motion.p>

      {/* Stamp */}
      <motion.div
        className="
          inline-block
          bg-[#95cb00]
          text-black
          px-8 py-4
          text-7xl
          font-extrabold
          uppercase
          shadow-[0_10px_30px_rgba(0,0,0,0.5)]
          mt-4 mb-4
        "
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.99 }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
      >
        Bang On
      </motion.div>

      {/* Final word */}
      <motion.p
        className="text-white text-5xl font-extrabold uppercase"
        style={{
          fontFamily: "Impact",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.99 }}
      >
        Right.
      </motion.p>
    </section>
  )
}
