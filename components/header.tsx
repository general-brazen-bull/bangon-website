"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const flavours = [
  { href: "/flavours/big-banana", label: "Big Banana" },
  { href: "/flavours/green-apple", label: "Green Apple" },
  { href: "/flavours/ripe-raspberry", label: "Ripe Raspberry" },
]

const navLinks = [
  { href: "/cocktails", label: "Cocktails" },
  { href: "/where-to-buy", label: "Where to Buy" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [flavoursOpen, setFlavoursOpen] = useState(false)
  const [mobileFlavoursOpen, setMobileFlavoursOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFlavoursOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setFlavoursOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setFlavoursOpen(false)
    }, 150)
  }

  const handleClick = () => {
    setFlavoursOpen(!flavoursOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="text-3xl md:text-4xl text-[#0a0a0a]">
          <h1>BANG ON</h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Flavours Dropdown - hover and click enabled */}
          <div 
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleClick}
              className="flex items-center gap-1 text-sm font-medium text-[#0a0a0a] hover:text-[#f94a02] transition-colors duration-300"
              style={{ fontFamily: "'Balboa', 'Arial', sans-serif", textTransform: "none" }}
            >
              Flavours
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${flavoursOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {flavoursOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-[#ffffff] shadow-lg min-w-[180px] py-2 rounded-sm"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {flavours.map((flavour) => (
                    <Link
                      key={flavour.href}
                      href={flavour.href}
                      onClick={() => setFlavoursOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-[#0a0a0a] hover:bg-[#f5f5f5] hover:text-[#f94a02] transition-colors duration-200"
                    >
                      {flavour.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#f94a02] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://deepbluedistilleries.ca/product-tag/bang-on/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-sm rounded-sm hover:bg-[#f94a02] transition-colors duration-300"
          >
            SHOP NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#0a0a0a] block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-[#0a0a0a] block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#0a0a0a] block"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5f5f5] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {/* Mobile Flavours Accordion */}
              <div>
                <button
                  onClick={() => setMobileFlavoursOpen(!mobileFlavoursOpen)}
                  className="flex items-center justify-between w-full text-xl tracking-wide font-medium text-[#000000]"
                  style={{ fontFamily: "'Balboa', 'Arial', sans-serif", textTransform: "none" }}
                >
                  Flavours
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${mobileFlavoursOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileFlavoursOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-4 flex flex-col gap-4">
                        {flavours.map((flavour) => (
                          <Link
                            key={flavour.href}
                            href={flavour.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-[#000000] hover:text-[#f94a02] transition-colors"
                          >
                            {flavour.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl tracking-wide font-medium text-[#000000] hover:text-[#f94a02] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="https://deepbluedistilleries.ca/our-spirits/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] text-[#fafafa] px-6 py-4 text-xl text-center rounded-sm hover:bg-[#f94a02] transition-colors"
              >
                SHOP NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
