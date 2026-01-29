import { RaspberrySection } from "./RaspberrySection"
import { RaspberrySectionMobile } from "./RaspberrySectionMobile"

export function RaspberrySectionWrapper() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <RaspberrySection />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <RaspberrySectionMobile />
      </div>
    </>
  )
}
