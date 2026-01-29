import BangOnManifesto from "./BangOnManifesto"
import BangOnManifestoMobile from "./BangOnManifestoMobile"

export default function BangOnManifestoSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <BangOnManifesto />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <BangOnManifestoMobile />
      </div>
    </>
  )
}
