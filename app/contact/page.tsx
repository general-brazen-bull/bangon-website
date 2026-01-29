"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { sendContactEmail } from "@/app/actions/sendContactEmail"
import { isDistilleryOpen } from "@/lib/isDistilleryOpen"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const openNow = isDistilleryOpen()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const result = await sendContactEmail(formState)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-[#f5f5f5] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] text-[#0a0a0a] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            GET IN
            <br />
            <span className="text-[#ff3672]">TOUCH</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#525252] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Questions, comments, or just want to say hey? We're all ears.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-[#0a0a0a] mb-8">
                SAY HELLO
              </h2>

              {/* Address */}
              <div className="mb-8 text-xl md:text-base leading-relaxed text-[#525252]">
                <p>
                  Deep Blue Distilleries<br />
                  5800 Cedarbridge Way #130<br />
                  Richmond, British Columbia V6X 2A7
                </p>
              </div>

              {/* Website */}
              <div className="mb-6">
                <h3 className="text-xl text-[#0a0a0a] mb-2">WEBSITE</h3>
                <a
                  href="https://deepbluedistilleries.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f94a02] hover:text-[#0a0a0a] transition-colors text-xl md:text-base"
                >
                  deepbluedistilleries.ca
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h3 className="text-xl text-[#0a0a0a] mb-2">EMAIL</h3>
                <a
                  href="mailto:orders@deepbluedistilleries.ca"
                  className="text-[#f94a02] hover:text-[#0a0a0a] transition-colors text-xl md:text-base"
                >
                  orders@deepbluedistilleries.ca
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8 text-xl md:text-base leading-relaxed text-[#525252]">
                <p>Phone: 604-767-5075</p>
                <p>Wholesale: 604-618-1932</p>
              </div>

              {/* Status */}
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-2 text-sm font-medium rounded ${
                    openNow ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {openNow ? "OPEN NOW" : "CLOSED"}
                </span>
              </div>

              {/* Hours */}
              <div className="space-y-1 text-xl md:text-base leading-relaxed text-[#525252] mb-10">
                <p>Monday – Friday: 9:30 a.m. – 4:30 p.m.</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>

              {/* Map */}
              <div className="w-full h-[300px] rounded overflow-hidden">
                <iframe
                  title="Deep Blue Distilleries Map"
                  src="https://www.google.com/maps?q=5800+Cedarbridge+Way+Richmond+BC&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="bg-[#f3db03] p-12 text-center">
                  <h3 className="text-3xl text-[#0a0a0a] mb-4">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-xl md:text-base leading-relaxed text-[#0a0a0a]/80">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    required
                    placeholder="Name"
                    className="w-full bg-[#f5f5f5] px-6 py-4 text-lg md:text-base"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#f5f5f5] px-6 py-4 text-lg md:text-base"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                  <textarea
                    required
                    rows={6}
                    placeholder="Message"
                    className="w-full bg-[#f5f5f5] px-6 py-4 resize-none text-lg md:text-base"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />

                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0a0a0a] text-white py-3 hover:bg-[#f94a02] transition"
                  >
                    {loading ? "SENDING…" : "SEND MESSAGE"}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
