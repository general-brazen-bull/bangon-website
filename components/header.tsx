"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import StaggeredMenu from "@/components/StaggeredMenu"

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  {
    label: "Flavours",
    ariaLabel: "View Bang On flavours",
    link: "#",
    submenu: "flavours",
  },
  { label: "Cocktails", ariaLabel: "View cocktails", link: "/cocktails" },
  {
    label: "Where to Buy",
    ariaLabel: "Find where to buy Bang On",
    link: "/where-to-buy",
  },
  { label: "Contact", ariaLabel: "Contact Bang On", link: "/contact" },
  { label: "Merch", ariaLabel: "Shop Bang On merch", link: "/merch" },
  {
    label: "Shop Now",
    ariaLabel: "Shop Bang On online",
    link: "https://deepbluedistilleries.ca/product-tag/bang-on/",
  },
]

const flavourItems = [
  {
    label: "Big Banana",
    ariaLabel: "View Big Banana flavour",
    link: "/flavours/big-banana",
  },
  {
    label: "Green Apple",
    ariaLabel: "View Green Apple flavour",
    link: "/flavours/green-apple",
  },
  {
    label: "Atomic Peach",
    ariaLabel: "View Atomic Peach flavour",
    link: "/flavours/atomic-peach",
  },
  {
    label: "Ripe Raspberry",
    ariaLabel: "View Ripe Raspberry flavour",
    link: "/flavours/ripe-raspberry",
  },
  {
    label: "Tropical",
    ariaLabel: "View Tropical flavour",
    link: "/flavours/tropical",
  },
]

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
]

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [isLightSection, setIsLightSection] = useState(!isHome)
  const [showHeader, setShowHeader] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setIsLightSection(true)
      return
    }

    const checkThemeSection = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-header-theme='light']"
      )

      const headerCheckY = 80

      const isOverLightSection = Array.from(sections).some((section) => {
        const rect = section.getBoundingClientRect()

        return rect.top <= headerCheckY && rect.bottom >= headerCheckY
      })

      setIsLightSection(isOverLightSection)
    }

    checkThemeSection()

    window.addEventListener("scroll", checkThemeSection, { passive: true })
    window.addEventListener("resize", checkThemeSection)

    return () => {
      window.removeEventListener("scroll", checkThemeSection)
      window.removeEventListener("resize", checkThemeSection)
    }
  }, [isHome])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (menuOpen || currentScrollY < 80) {
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [menuOpen])

  const useRedLogo = !isHome || isLightSection

  return (
    <StaggeredMenu
      className={showHeader || menuOpen ? "header-visible" : "header-hidden"}
      position="right"
      items={menuItems}
      submenuItems={{
        flavours: flavourItems,
      }}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      isFixed
      closeOnClickAway
      menuButtonColor={useRedLogo ? "#000000" : "#ffffff"}
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen={false}
      colors={["#95cb00", "#f3db03", "#2596be"]}
      accentColor="#ff3672"
      logoUrl={
        useRedLogo
          ? "/assets/logos/bangonred.png"
          : "/assets/logos/bangon.png"
      }
      logoHref="/"
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
    />
  )
}