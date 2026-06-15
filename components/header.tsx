"use client"

import { usePathname } from "next/navigation"
import StaggeredMenu from "@/components/StaggeredMenu"

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
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
    label: "Ripe Raspberry",
    ariaLabel: "View Ripe Raspberry flavour",
    link: "/flavours/ripe-raspberry",
  },
  {
    label: "Tropical",
    ariaLabel: "View Tropical flavour",
    link: "/flavours/tropical",
  },
  { label: "Cocktails", ariaLabel: "View cocktails", link: "/cocktails" },
  {
    label: "Where to Buy",
    ariaLabel: "Find where to buy Bang On",
    link: "/where-to-buy",
  },
  { label: "Contact", ariaLabel: "Contact Bang On", link: "/contact" },
  {
    label: "Shop Now",
    ariaLabel: "Shop Bang On online",
    link: "https://deepbluedistilleries.ca/product-tag/bang-on/",
  },
]

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "TikTok", link: "https://tiktok.com" },
]

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      isFixed
      closeOnClickAway
      menuButtonColor={isHome ? "#ffffff" : "#000000"}
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen={false}
      colors={["#95cb00", "#f3db03", "#2596be"]}
      accentColor="#ff3672"
      logoUrl={
        isHome
          ? "/assets/logos/bangon.png"
          : "/assets/logos/bangonred.png"
      }
    />
  )
}