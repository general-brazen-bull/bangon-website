import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import BangOnManifestoSection from "@/components/home/BangOnManifestoSection"
import ProductRevealSectionWrapper from "@/components/home/ProductRevealSectionWrapper"
import { BananaSection } from "@/components/home/banana-section"
import { GreenappleSection } from "@/components/home/greenapple-section"
import { TropicalSection } from "@/components/home/tropical-section"
import { MarqueeSection } from "@/components/home/marquee-section"
import { RaspberrySectionWrapper } from "@/components/home/RaspberrySectionWrapper"
import { CocktailsTeaserSection } from "@/components/home/cocktails-teaser-section"
import { WhereToBuySection } from "@/components/home/where-to-buy-section"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BangOnManifestoSection />
      <ProductRevealSectionWrapper />
      <MarqueeSection />
      <GreenappleSection />
      <TropicalSection />
      <RaspberrySectionWrapper />
      <BananaSection />
      <MarqueeSection />
      <CocktailsTeaserSection />
      <WhereToBuySection />
      <Footer />
    </main>
  )
}
