"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WhereToBuyPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f5f5f5] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] text-[#0a0a0a] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            FIND YOUR
            <br />
            <span className="text-[#f94a02]">BANG</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#525252] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bang On is available at private liquor stores across British Columbia
            and online directly from the source.
          </motion.p>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            className="text-4xl md:text-5xl text-[#0a0a0a] mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            WHERE TO BUY
          </motion.h2>

          <motion.div
            className="bg-[#f5f5f5] p-10 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-[#737373] block mb-2">
              Retail
            </span>

            <h3 className="text-2xl text-[#0a0a0a] mb-4">
              Private Liquor Stores
            </h3>

            <p className="text-xl md:text-base leading-relaxed text-[#525252] mb-6">
              Available at select private liquor retailers across British Columbia.
              Inventory may vary by location.
            </p>

            <a
              href="https://deepbluedistilleries.ca/where-to-buy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300"
            >
              STORE LOCATOR →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Shop Online CTA */}
      <section className="py-16 md:py-20 bg-[#f3db03]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0a0a0a] mb-4">
                SHOP ONLINE
              </h2>
              <p className="text-xl md:text-base leading-relaxed text-[#0a0a0a]/80">
                Order directly from Deep Blue Distilleries
              </p>
            </motion.div>

            <motion.a
              href="https://deepbluedistilleries.ca/product-tag/bang-on/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f94a02] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              SHOP NOW
            </motion.a>
          </div>
        </div>
      </section>

      {/* Visit the Distillery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#0a0a0a] mb-8">
              VISIT THE DISTILLERY
            </h2>

            <p className="text-xl md:text-base leading-relaxed text-[#525252] mb-6">
              Come see where the magic happens. Deep Blue Distilleries is located
              in beautiful British Columbia, where we craft every bottle of Bang
              On with care and a whole lot of attitude.
            </p>

            <p className="text-xl md:text-base leading-relaxed text-[#525252] mb-8">
              Tours and tastings available. Contact us for details.
            </p>

            <a
              href="https://deepbluedistilleries.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300"
            >
              DEEP BLUE DISTILLERIES →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
