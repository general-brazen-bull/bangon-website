import { ProductRevealSection } from "./ProductRevealSection"

export default function ProductRevealSectionWrapper() {
  return (
    <div className="hidden md:block">
      <ProductRevealSection />
    </div>
  )
}