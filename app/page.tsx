import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import ParticleText from "@/components/particle-text"
import StaggeredText from "@/components/StaggeredText"
import ProductRevealSectionWrapper from "@/components/home/ProductRevealSectionWrapper"
import { BananaSection } from "@/components/home/banana-section"
import { PeachSection } from "@/components/home/peach-section"
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

            {/* DESKTOP PARTICLE TEXT */}
            <section className="hidden md:flex min-h-[90vh] bg-black items-center justify-center overflow-hidden">
  <div className="w-full h-[650px] bg-black">
          <ParticleText
            text="CANADA'S HIGH PROOF MINIS"
            colors={["#f3db03"]}
            particleSize={2}
            particleGap={1}
            mouseControls={{
              enabled: true,
              radius: 150,
              strength: 5,
            }}
            backgroundColor="#000000"
            fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            fontSize={200}
            fontWeight="bold"
            friction={0.75}
            ease={0.05}
            autoFit={true}
          />
        </div>
      </section>

     {/* MOBILE STAGGERED TEXT */}
<section className="flex md:hidden min-h-[70vh] bg-black items-center justify-center overflow-hidden px-6">
  <StaggeredText
    text={"CANADA'S\nHIGH\nPROOF\nMINIS"}
    segmentBy="lines"
    direction="top"
    delay={140}
    duration={0.9}
    blur={true}
    staggerDirection="forward"
    exitOnScrollOut={true}
    className="
      text-center
      text-white
      uppercase
      leading-[0.99]
      tracking-tight
      text-[clamp(3.8rem,18vw,6.5rem)]
      font-black
      [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
    "
  />
</section>
      <ProductRevealSectionWrapper />
      <MarqueeSection />
      <PeachSection />
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
