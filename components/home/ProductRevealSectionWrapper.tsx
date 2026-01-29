import { ProductRevealSection } from "./ProductRevealSection"
import ProductRevealSectionMobile from "./ProductRevealSectionMobile"

export default function ProductRevealSectionWrapper() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <ProductRevealSection />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <ProductRevealSectionMobile />
      </div>
    </>
  )
}
